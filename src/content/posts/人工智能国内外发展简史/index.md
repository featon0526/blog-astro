---
title: "人工智能国内外发展简史"
date: "2026-11-10"
summary: ""
tags: ["随笔", "AI"]
draft: false
---

在这里开始写正文。

<!--
图片直接放进这个目录，然后在正文里用相对路径引用：

![图片说明](./example.jpg)

单张图片请控制在 1MB 以内。
-->

# 人工智能国内外发展简史（通俗版）

# 人工智能定义与基础分类

![中国水墨风格](中国水墨风格.jpg)

人工智能（Artificial Intelligence，AI）：简单来说，人工智能就是让电脑、机器拥有类似人的感知、思考、表达能力，能完成原本需要人动脑才能做的事情。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Qtwz3mQOvsnjKclIdJWOOrfDYghFwgrFIK5pA068QdNmImbmrJPK4HibCQyOIWvR5p6Yx4doXqnFL0oa7icpo6EgFsibvibs0DBIr2m8cn89VYk/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0)

专业定义：是一门旨在使机器模拟、延伸和扩展人类智能的技术科学，研究如何让计算机系统感知环境、理解语言、推理决策、自主学习并完成各类需要人类智能参与的任务。

基础分类（通俗解读）：

按智能能力层级：弱人工智能（ANI）、强人工智能（AGI）、超人工智能（ASI）。我们现在使用的所有 AI 都属于弱人工智能，只会做特定任务，没有自我意识，不会像人一样独立思考；强人工智能还只存在设想中。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Qtwz3mQOvsnaey4oibiaiakXuvWaKESYIBn6icZ8VCQaPlkmZlmuaRjro9kESywqnV6RHlVP5HcqRwp21msibyjibhQFJvxic5QPwq6fYPYiaWEAGN0/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=1)

按技术实现范式：符号主义、连接主义、行为主义。可以理解成三种 “造 AI” 的思路。为更好理解下文，请简单了解。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Qtwz3mQOvsnC6oeSex4p0fAmyafDTzHtMpG6mic2eA0NQLxAiaeHsYh2c1ScjUPX0icBiclWZicicYcoJlhLyWbN1Kkib47SrJMRFRH3uC8t76hlBc/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=2)

三大范式概述：

- 符号主义：认为智能本质是符号逻辑运算，依靠人工定义规则与知识进行推理，早期 AI 主流思路。通俗讲：提前写好大量 “如果… 就…” 的规则，机器照着规则做判断，就像查字典。
- 连接主义：模拟人脑神经元网络，通过数据训练调整网络权重自动学习特征，深度学习、大模型都属于该范式。通俗讲：模仿人脑神经细胞的连接，给机器大量数据，让它自己总结规律，不用人逐条写规则。
- 行为主义：源自控制论，主张智能不需要内部符号知识，智能来自感知与环境交互产生的行动，多用于机器人领域。通俗讲：不追求深度思考，重点是感知外界、做出对应动作，类似训练小动物对外界做出反应。

按技术实现路径：包含基于人工规则构建的系统，以及机器学习两大分支；机器学习又包含传统机器学习与深度学习，深度学习衍生出大模型，基于大模型可搭建 AI Agent 智能体。简单理解：机器学习是让机器自己从数据学经验；深度学习是模仿人脑神经元；大模型就是能力很强的深度学习模型；AI Agent 就是能自己规划、分步干活的智能助手。

# 一、孕育期（1940s–1955）：思想奠基

概念：计算机刚刚诞生，学界开始探索机器是否具备实现智能的可能性，仅停留在理论构想阶段，尚未出现真正意义上的 AI 程序。这个阶段只有想法，还没有真正的人工智能程序。科学家刚发明电脑，开始思考：机器能不能像人一样思考？

原因：数理逻辑、计算机科学、神经科学同步发展，为机器智能研究奠定理论基础。

1943：麦卡洛克 & 皮茨提出人工神经元模型，最早模拟人脑神经的数学模型，神经网络思想起点。首次提出简化版 “人造脑细胞” 理论，为后面神经网络打下基础。

1950：图灵发表《计算机器与智能》，提出图灵测试，即如果人类无法区分交互对象是机器还是人类，则可判定机器具备智能。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Qtwz3mQOvslPdZicOiahkGdj1eQDEMEql2blLhB68ZiaotAOpPKhPic5EUWoNNkCk93jBl56nJj4ulaws0yDSFeZZica1yQTQe2pm8gt3hqicPxDs/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=3)

1951：首台神经网络计算机 SNARC 建成。

国内情况：国内计算机研究刚刚起步，AI 相关研究尚未启动，主要引进国外数理逻辑与计算机基础理论。人工智能研究还没开始，只能学习国外基础理论。

# 二、AI 正式诞生（1956）

概念：多国顶尖学者召开专题会议，正式确立 “人工智能” 学科名称，标志人工智能作为独立研究领域诞生。 

原因：研究者普遍认为，智能的各项特征原则上都可通过机器实现，计划集中力量开展相关研究。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Qtwz3mQOvslMIwtQdHSKVkttKIc8UElgiaUF1TGLEvbW7G4QslKvWWQVDnNnESsNKyO6CN5DnQqeHzLM9um2nMoG1NuFfhm4yLJ32V07gzSs/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=4)

达特茅斯会议麦卡锡、明斯基、香农、西蒙等科学家在达特茅斯学院召开研讨会，麦卡锡首次提出Artificial Intelligence（人工智能）。

 会议观点：人的各种智能，理论上机器都能模拟。

 👉 公认：1956 年 = AI 元年。

国内情况：国内学术界开始关注人工智能这一新方向，部分高校开展数理逻辑、自动机理论教学，AI 研究处于萌芽阶段。

1956年！还记得历史课上老师让记住的知识点：*1956 年是我国发展史上关键一年，全国基本完成三大改造，社会主义基本制度确立。*

# 三、第一次黄金时代（1956–1974）：乐观爆发

概念：人工智能研究取得一批简单逻辑推理成果，学界对技术前景高度乐观，认为短期内可以打造出等同人类水平的智能机器，研究主流为符号主义，依靠人工编写逻辑规则实现机器推理。

原因：在小规模简单任务上取得明显效果，各国政府持续投入科研经费，大量科研人才进入 AI 领域。 

早期成果：

逻辑推理程序：逻辑理论家，可以证明《数学原理》中的数学定理；这个程序可以自己证明数学定理，在当时非常震撼。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Qtwz3mQOvsn9LHfPibT5nGou9uP1zGm6w3FeapwJlq29AsV4avzZuDY7PYV1UQJj9d3CQlyCkpxqMUiaf5rDmsJBboq914kIkFibQymcjeTlEs/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=5)

- 通用问题求解器 GPS，尝试解决各类逻辑问题；
- 早期机器翻译、语音识别、计算机视觉雏形；
- 明斯基、麦卡锡开发 LISP 语言，长期是 AI 核心编程语言。

国内情况：国内启动机器翻译、文字识别等方向探索；受客观条件限制，研究规模有限，以中科院、高校的理论研究为主。国内学者听说了人工智能这个新概念，少数高校开始学习相关理论，还没有开展实质性 AI 项目。

# 危机到来（第一次 AI 寒冬，1974–1980）

概念：早期研究预期难以落地，系统仅能处理简单场景，面对复杂现实任务便失效，人工智能的局限性逐步显现。

原因：

计算机算力水平有限，仅支持小规模问题运算；通俗理解：当年电脑性能太差，计算速度跟不上。

算法存在固有局限，现实世界复杂问题难以依靠单纯逻辑规则表达；通俗理解：真实世界很多事情没法全部写成一条条固定规则。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Qtwz3mQOvsnEBq5MeKdiabk0kR15d4wibNSW5nNlkHfJYgwZqtVBGCCRNAQ6ksmGichLNomNeicQ74lWgZlNiaTZzhpA69T0m1atAoMhZpYIUZ7k/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=6)

前期提出的目标无法兑现，政府与科研机构削减经费，AI 研究遇冷。

国内情况：国内 AI 研究进度放缓，科研重心转向更具实用性的计算机与模式识别基础研究。国内 AI 研究也跟着降温，不再追求宏大目标，转向更实用的计算机基础研究。

# 四、专家系统时代（1980–1987）：商业复兴

概念：研究者不再追求通用智能，转向垂直专业领域研发专家系统。专家系统将行业专家的经验转化为 “如果… 就…” 形式的规则，使机器模拟专业人员开展判断，属于符号主义的工程化落地。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Qtwz3mQOvsnupmVdd3cugb4vTNfSf27icYy3NichILbM5CrwIaCUzjeH3jqQfcVxgk44mvs7aZ6CK40DZop0ribickGHrVBKwjvRSoz3DPVR7bo/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=7)

科学家不再追求全能 AI，转而做 “行业专用 AI”。把医生、地质专家的经验写成规则，让电脑像专家一样做专业判断，这类程序叫做专家系统。

原因：专家系统在医疗、化学等狭窄场景验证可行，企业看到商业化潜力，资本重新进入该领域。 代表：

MYCIN：医疗诊断专家系统，用于血液感染诊断；通俗理解：可以辅助医生判断血液感染疾病的专家系统。

DENDRAL：化学分子结构分析；

日本启动第五代计算机计划，全球掀起 AI 投资热潮，大量商业专家系统落地企业。

国内情况：国内跟进专家系统研发，开发地质、医疗等领域国产专家系统；863 计划将智能计算机列入重点研究方向。

# 第二次 AI 寒冬（1987–1993）

概念：专家系统的技术短板集中暴露，行业泡沫破裂。系统规则需要人工逐条编写，遇到未录入规则的场景就无法处理。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Qtwz3mQOvsnahFwwWdcWrrDQlCwanJ7VvHluCRkhebZ8dicDnE1UGWt6wibkHy5iaCMkGjlattoJN4hJ3CtGnfwrjNIdicoQZLxZSCdzVMfwG2k/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=8)

原因：

- 人工整理、录入知识的成本极高；
- 规则数量增多后易产生冲突，维护难度大，难以扩展；

专用 AI 硬件价格高昂，个人计算机普及后专用设备失去市场。 资金撤退，大量项目下马，AI 再次进入低谷。

国内情况：国内专家系统相关项目收缩，研究重心转向模式识别、机器人等更加务实的方向。

# 五、平稳蛰伏期（1993–2011）：机器学习慢慢崛起

概念：学界放弃构建通用智能的宏大目标，转向机器学习。机器学习不再预先设定全部规则，利用大量数据，让模型自主归纳内在规律。

原因：经历两次寒冬后科研方向趋于务实，聚焦解决特定实际问题，统计学理论持续成熟，支撑机器学习发展。

 标志性事件：

1997：深蓝战胜国际象棋世界冠军卡斯帕罗夫。不具备自主学习能力，依靠强大搜索算法与人工录入棋谱规则，证明机器在单一任务上可以超越人类；

![图片](https://mmbiz.qpic.cn/mmbiz_png/Qtwz3mQOvskEqNpjafm7qgKGsJsuzW5GiboywdMWja8ibjgleibJiaGQMCgOh7gMTeSM3Wdt5Klg2hHsaDs2icnnnxPExpcPBZao29JwXL4ZSFMo/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=9)



> 局限：仍然需要人工提取特征，图像识别能力不足。传统机器学习还需要人工帮机器挑选关键特征，图片识别效果一般。

国内情况：国内模式识别、语音识别、人脸识别技术持续进步；百度等企业布局语音搜索业务，国内 AI 团队逐步在国际竞赛中取得成绩。

# 六、深度学习革命（2012–2022）

## 什么是深度学习

深度学习属于连接主义，由多层人工神经网络构成，模拟人脑多层神经元结构。模型不再依赖人工提取特征，依托海量图文数据，自主学习数据内在特征。

深度学习是机器学习的升级版，模仿人脑多层神经结构，不需要人手动挑选特征，机器自己从原始图片、文字里提取信息。

为什么进入深度学习时代：海量互联网数据、GPU 提供的强大算力、神经网络算法优化三大条件同时成熟。2012 年 AlexNet 在竞赛中取得突破，证明深度学习效果显著优于传统机器学习。

里程碑：

2016：AlphaGo 战胜李世石，深度强化学习轰动世界；AlphaGo 打败顶尖围棋选手，让大众第一次直观感受到深度学习的强大。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Qtwz3mQOvskC02iaUibdZbgHmLDYJBDUUQoqtJRzBddlhzHEpCZUdCianleZicl3YGfVgUfKAAJRIKLb79o8K0DwHxThiczHAB1sYawsGx0yzIkw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=10)

- 计算机视觉、语音识别、机器翻译大规模产业化（人脸识别、语音助手）；
- Transformer 架构 2017 年诞生，论文《Attention Is All You Need》，奠定大模型底层基础。Transformer 这个新架构，为后来 ChatGPT、豆包这类大模型打下核心技术基础。

国内情况：国内快速跟进深度学习技术；计算机视觉、语音识别技术快速追赶，商汤、旷视、科大讯飞等 AI 企业成长，国内团队多次在国际图像识别竞赛夺冠。

# 七、大模型时代（2022 至今）：生成式 AI 爆发，AI Agent 兴起

## 什么是大模型：基于 Transformer 架构构建的超大参数深度学习模型，依托海量文本数据训练。模型除识别内容外，还可自主生成文本、对话、文章、图像、视频等内容，属于连接主义，仍归属于弱人工智能范畴。

通俗理解：大模型就是参数量巨大、用海量互联网文本训练出来的深度学习模型。它不只是看懂内容，还能自己写文章、对话、画图，但是依旧没有自我意识。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/Qtwz3mQOvskS9ruSdrkdSl0BKVW8D06H8fdCZTEwJ5RV8ecGq1eOdnhg6xibXtSClSH6hFNkibhcElh0LcIPVFQHc7jBpGibmBfZYKIe7B5hN0/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=10005&wx_lazy=1#imgIndex=11)

大模型能力越来越强，于是大家进一步开发 AI 智能体。简单说，AI Agent 就是给大模型配上 “记忆、计划能力、工具箱”，接到复杂任务后，可以自己拆分步骤、调用工具，一步步做完整件事。

2022 年底：ChatGPT 发布，大众首次直观感受到生成式 AI；后续：多模态大模型（文本、图像、音频、视频统一理解生成）快速迭代；AI Agent 技术快速发展，能够自主拆解任务、调用工具、分步完成复杂目标。

当前：AI 从识别、分析走向生成、创作、辅助推理；但目前所有主流模型都属于弱人工智能（专用 AI），没有自我意识、主观情感，只能完成特定任务；通用人工智能 AGI 仍属于理论探索阶段。

## 国内情况

国内陆续推出文心一言、通义千问、星火、DeepSeek（深度求索）、豆包等国产大模型；同时诞生多款国内 AI Agent 产品，腾讯 WorkBuddy 是典型代表，其余国内 AI Agent 包含豆包智能体、通义 Agent、Kimi 智能体。多模态模型同步研发，行业落地加速，国家出台政策规范并支持生成式 AI 创新与安全治理。

## 简要总结

1. 1956：AI 诞生；

2. 1956–1974：早期乐观，随后第一次寒冬；

3. 1980 年代：专家系统繁荣，之后第二次寒冬；

4. 1993–2011：统计机器学习稳步发展；

5. 2012：深度学习登场；

6. 6、2022：大模型 / 生成式 AI 爆发，AI Agent 兴起。 通俗一句话概括历程：从理论构想→AI 诞生，经历两次遇冷寒冬，再到机器学习、深度学习崛起，直到今天大模型和 AI 智能体走进大众生活。

   AI 几十年的发展史就分享到这里，你第一次接触 AI 是在什么时候呢？欢迎评论