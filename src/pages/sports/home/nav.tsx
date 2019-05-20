import React from 'react';
import logo from '../../../assets/images/t-logo.png';
import './nav.less';
const navList = [{ "link": "/z/nba", "title": "NBA" }, { "link": "/z/cba", "title": "CBA" }, { "link": "/z/csl", "title": "中超" }, { "link": "/z/afccl", "title": "亚冠" }, { "link": "/z/ccl", "title": "中甲" }, { "link": "/z/live", "title": "直播" }, { "link": "/z/premierleague", "title": "英超" }, { "link": "/z/laliga", "title": "西甲" }, { "link": "/z/seriea", "title": "意甲" }, { "link": "/z/bundesliga", "title": "德甲" }, { "link": "/z/ligue1", "title": "法甲" }, { "link": "/z/uefacl", "title": "欧冠" }, { "link": "/z/integrated", "title": "综合" }, { "link": "/z/snowsports", "title": "冬奥" }, { "link": "/z/golf", "title": "高尔夫" }, { "link": "/z/e_sport", "title": "电竞" }, { "link": "/z/running", "title": "跑步" }, { "link": "//m.tv.sohu.com/sports", "title": "视频" }];

export const HomeNav: React.FC = () => {
    return (
        <div className="navs-wrap" data-spm="navs">
            <ul className="nav-list clearfix">
                {navList.map((item, index) => {
                    return <a href={item.link} key={index} className="item">
                                <li className="nav">{item.title}</li>
                            </a>;
                })}
            </ul>
        </div>
    );
};
