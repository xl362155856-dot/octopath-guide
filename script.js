document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.section;
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });

    // Job tabs
    const jobTabs = document.querySelectorAll('.job-tab');
    const basicGrid = document.getElementById('jobGrid');
    const advancedGrid = document.getElementById('advancedJobGrid');

    jobTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            jobTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (tab.dataset.job === 'basic') {
                basicGrid.classList.remove('hidden');
                advancedGrid.classList.add('hidden');
            } else {
                basicGrid.classList.add('hidden');
                advancedGrid.classList.remove('hidden');
            }
        });
    });

    // Character detail modal
    const charCards = document.querySelectorAll('.char-card');
    const modal = document.getElementById('charModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.querySelector('.modal-close');

    const charData = {
        olberic: {
            name: '奥尔贝里克',
            title: '剑士',
            story: '曾经的王国骑士团长，因战友的背叛而失去一切。为了追寻真相与复仇，他踏上了旅途。',
            skills: ['巨人劈斩（全体攻击）', '挑衅（吸引敌人攻击）', '坚守（反击物理攻击）', '剑术增幅'],
            tips: '利用挑衅保护脆弱队友，反击配合高防御可造成可观伤害。满BP增幅后的大招伤害极高。'
        },
        cyrus: {
            name: '赛拉斯',
            title: '学者',
            story: '大陆最高学府的天才学者，为了寻找失落的禁书而离开学院。性格温和但对知识有着执着的追求。',
            skills: ['火球术/暴风雪/雷霆（三属性全体魔法）', '洞察（揭示敌人弱点）', '智慧增幅'],
            tips: '洞察是探索阶段最强技能，可自动揭示所有敌人弱点。魔法伤害极高但防御脆弱，需前排保护。'
        },
        primrose: {
            name: '普莉姆萝洁',
            title: '舞娘',
            story: '背负着杀父之仇的舞娘，在歌舞中隐藏着真实的自己。为了找到真相，她决定离开故乡。',
            skills: ['魅惑（战斗外吸引NPC加入）', '增幅舞蹈（提升队友攻击力）', '再行动（队友额外行动）'],
            tips: '再行动是游戏中最强辅助技能之一，可让队友在破防回合连续输出。魅惑的NPC可携带强力装备。'
        },
        therion: {
            name: '特欧尼尔',
            title: '盗贼',
            story: '被囚禁在宝库中的神秘盗贼，为了寻找五颗宝石而行动。沉默寡言但实力强劲。',
            skills: ['偷窃（获取物品/金钱）', '暗影突袭（高暴击连击）', '偷袭（先制攻击）'],
            tips: '偷窃是前期最赚钱的技能，稀有道具可卖高价。暴击伤害极高，破防后单次伤害冠绝全队。'
        },
        alphen: {
            name: '亚芬',
            title: '药师',
            story: '守护着偏僻村庄的药师，医术精湛。为了寻找传说中的药草而踏上旅程。',
            skills: ['调合（使用素材进行治疗/增益）', '万能药（解除所有异常状态）', '生命增幅'],
            tips: '调合是游戏中最强治疗技能，素材充足时可瞬间满血。后期可调合出复活药，是持久战核心。'
        },
        tessa: {
            name: '泰莎',
            title: '商人',
            story: '没落商家的大小姐，为了重建家族而努力。性格开朗，善于交际。',
            skills: ['雇佣（花钱请NPC战斗）', '捐赠（为队友恢复SP）', '物价调查'],
            tips: '雇佣的NPC有时携带稀有装备，可偷窃获取。捐赠在前期SP紧张时非常实用。'
        },
        haanit: {
            name: '海茵特',
            title: '猎人',
            story: '为了寻找失踪师父而踏上旅途的年轻猎人。与猛兽为伴，箭术精湛。',
            skills: ['捕捉（捕获怪物）', '兽王召唤（使用捕获的怪物）', '猎鹰之眼'],
            tips: '捕捉的怪物可用于战斗或出售赚钱。部分隐藏怪物非常强力，捕捉后可大幅降低BOSS难度。'
        },
        afel: {
            name: '阿芳',
            title: '神官',
            story: '侍奉光明之神的神官，为了传播信仰而行走大陆。性格虔诚但内心有着迷茫。',
            skills: ['全体治疗', '复活', '圣光攻击（克制暗属性）', '神圣结界'],
            tips: '全体复活是终盘必备技能。圣光攻击对暗属性敌人伤害极高，是对抗最终BOSS的关键。'
        }
    };

    charCards.forEach(card => {
        card.addEventListener('click', () => {
            const char = card.dataset.char;
            const data = charData[char];
            if (data) {
                modalBody.innerHTML = `
                    <h2>${data.name}</h2>
                    <span class="modal-title">${data.title}</span>
                    <h3>故事背景</h3>
                    <p>${data.story}</p>
                    <h3>核心技能</h3>
                    <ul>${data.skills.map(s => `<li>${s}</li>`).join('')}</ul>
                    <h3>使用技巧</h3>
                    <p>${data.tips}</p>
                `;
                modal.classList.add('active');
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Animate stat bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.bar div').forEach(bar => {
                    bar.style.width = bar.style.width;
                });
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.char-card').forEach(card => observer.observe(card));
});
