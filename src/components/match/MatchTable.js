import React, {ReactTypes} from 'react';
import ReactDOM from 'react-dom';
import FullCalendar from 'fullcalendar-reactwrapper';
import moment from 'moment';
import {Table, Icon, Divider, Avatar} from 'antd';
import {ColumnProps} from 'antd/lib/table';
import Moment from 'react-moment';


class MatchTable extends React.Component {

  render() {

    const columns = [{
      title: 'Id',
      width: 60,
      dataIndex: 'id',
      key: 'Id',
      render: text => <a href="#">{text}</a>
    }, {
      title: 'Start Time',
      width: 165,
      // dataIndex: 'start',
      key: 'start',
      render: (text, record) => <Moment date={record.start} format="YYYY/MM/DD hh:mmA"/>

    },
      {
        title: 'Game',
        width: 200,
        // dataIndex: 'team1',
        key: 'team1',
        render: (text, record) => (
          <span>
          <Avatar src={"https://img.fifa.com/images/flags/4/" + record.team1 + ".png"} size="small"/>
            {/*<img src={"https://img.fifa.com/images/flags/2/" + record.team1 + ".png"}/>*/}
            {record.team1} <Divider type="vertical"/> {record.team2}
            <Avatar src={"https://img.fifa.com/images/flags/4/" + record.team2 + ".png"} size="small"/>
            {/*<img src={"https://img.fifa.com/images/flags/2/" + record.team2 + ".png"}/>*/}
        </span>
        )
      },
      {
        title: 'Details',
        key: 'title',
        render: (text, record) => (
          <span>
      <a href="#">{record.title}</a>
    </span>
        ),
      }];

    const data = [{
      id: 1,
      start: moment('2018-06-14T18:00+0300'),
      timezone: 'UTC+3',
      team1: 'RUS',
      team2: 'KSA',
      title: '@ Luzhniki Stadium, Moscow'
    },
      {
        id: 2,
        start: moment('2018-06-15T17:00+0500'),
        timezone: 'UTC+5',
        team1: 'EGY',
        team2: 'URU',
        title: '@ Central Stadium, Yekaterinburg'
      },
      {
        id: 17,
        start: moment('2018-06-19T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'RUS',
        team2: 'EGY',
        title: '@ Krestovsky Stadium, Saint Petersburg'
      },
      {
        id: 18,
        start: moment('2018-06-20T18:00+0300'),
        timezone: 'UTC+3',
        team1: 'URU',
        team2: 'KSA',
        title: '@ Rostov Arena, Rostov-on-Don'
      },
      {
        id: 33,
        start: moment('2018-06-25T18:00+0400'),
        timezone: 'UTC+4',
        team1: 'URU',
        team2: 'RUS',
        title: '@ Cosmos Arena, Samara'
      },
      {
        id: 34,
        start: moment('2018-06-25T17:00+0300'),
        timezone: 'UTC+3',
        team1: 'KSA',
        team2: 'EGY',
        title: '@ Volgograd Arena, Volgograd'
      },
      {
        id: 4,
        start: moment('2018-06-15T18:00+0300'),
        timezone: 'UTC+3',
        team1: 'MAR',
        team2: 'IRN',
        title: '@ Krestovsky Stadium, Saint Petersburg'
      },
      {
        id: 3,
        start: moment('2018-06-15T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'POR',
        team2: 'ESP',
        title: '@ Fisht Olympic Stadium, Sochi'
      },
      {
        id: 19,
        start: moment('2018-06-20T15:00+0300'),
        timezone: 'UTC+3',
        team1: 'POR',
        team2: 'MAR',
        title: '@ Luzhniki Stadium, Moscow'
      },
      {
        id: 20,
        start: moment('2018-06-20T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'IRN',
        team2: 'ESP',
        title: '@ Kazan Arena, Kazan'
      },
      {
        id: 35,
        start: moment('2018-06-25T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'IRN',
        team2: 'POR',
        title: '@ Mordovia Arena, Saransk'
      },
      {
        id: 36,
        start: moment('2018-06-25T20:00+0200'),
        timezone: 'UTC+2',
        team1: 'ESP',
        team2: 'MAR',
        title: '@ Kaliningrad Stadium, Kaliningrad'
      },
      {
        id: 5,
        start: moment('2018-06-16T13:00+0300'),
        timezone: 'UTC+3',
        team1: 'FRA',
        team2: 'AUS',
        title: '@ Kazan Arena, Kazan'
      },
      {
        id: 6,
        start: moment('2018-06-16T19:00+0300'),
        timezone: 'UTC+3',
        team1: 'PER',
        team2: 'DEN',
        title: '@ Mordovia Arena, Saransk'
      },
      {
        id: 22,
        start: moment('2018-06-21T16:00+0400'),
        timezone: 'UTC+4',
        team1: 'DEN',
        team2: 'AUS',
        title: '@ Cosmos Arena, Samara'
      },
      {
        id: 21,
        start: moment('2018-06-21T20:00+0500'),
        timezone: 'UTC+5',
        team1: 'FRA',
        team2: 'PER',
        title: '@ Central Stadium, Yekaterinburg'
      },
      {
        id: 37,
        start: moment('2018-06-26T17:00+0300'),
        timezone: 'UTC+3',
        team1: 'DEN',
        team2: 'FRA',
        title: '@ Luzhniki Stadium, Moscow'
      },
      {
        id: 38,
        start: moment('2018-06-26T17:00+0300'),
        timezone: 'UTC+3',
        team1: 'AUS',
        team2: 'PER',
        title: '@ Fisht Olympic Stadium, Sochi'
      },
      {
        id: 7,
        start: moment('2018-06-16T16:00+0300'),
        timezone: 'UTC+3',
        team1: 'ARG',
        team2: 'ISL',
        title: '@ Otkrytiye Arena, Moscow'
      },
      {
        id: 8,
        start: moment('2018-06-16T21:00+0200'),
        timezone: 'UTC+2',
        team1: 'CRO',
        team2: 'NGA',
        title: '@ Kaliningrad Stadium, Kaliningrad'
      },
      {
        id: 23,
        start: moment('2018-06-21T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'ARG',
        team2: 'CRO',
        title: '@ Nizhny Novgorod Stadium, Nizhny Novgorod'
      },
      {
        id: 24,
        start: moment('2018-06-22T18:00+0300'),
        timezone: 'UTC+3',
        team1: 'NGA',
        team2: 'ISL',
        title: '@ Volgograd Arena, Volgograd'
      },
      {
        id: 39,
        start: moment('2018-06-26T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'NGA',
        team2: 'ARG',
        title: '@ Krestovsky Stadium, Saint Petersburg'
      },
      {
        id: 40,
        start: moment('2018-06-26T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'ISL',
        team2: 'CRO',
        title: '@ Rostov Arena, Rostov-on-Don'
      },
      {
        id: 10,
        start: moment('2018-06-17T16:00+0400'),
        timezone: 'UTC+4',
        team1: 'CRC',
        team2: 'SRB',
        title: '@ Cosmos Arena, Samara'
      },
      {
        id: 9,
        start: moment('2018-06-17T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'BRA',
        team2: 'SUI',
        title: '@ Rostov Arena, Rostov-on-Don'
      },
      {
        id: 25,
        start: moment('2018-06-22T15:00+0300'),
        timezone: 'UTC+3',
        team1: 'BRA',
        team2: 'CRC',
        title: '@ Krestovsky Stadium, Saint Petersburg'
      },
      {
        id: 26,
        start: moment('2018-06-22T20:00+0200'),
        timezone: 'UTC+2',
        team1: 'SRB',
        team2: 'SUI',
        title: '@ Kaliningrad Stadium, Kaliningrad'
      },
      {
        id: 41,
        start: moment('2018-06-27T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'SRB',
        team2: 'BRA',
        title: '@ Otkrytiye Arena, Moscow'
      },
      {
        id: 42,
        start: moment('2018-06-27T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'SUI',
        team2: 'CRC',
        title: '@ Nizhny Novgorod Stadium, Nizhny Novgorod'
      },
      {
        id: 11,
        start: moment('2018-06-17T18:00+0300'),
        timezone: 'UTC+3',
        team1: 'GER',
        team2: 'MEX',
        title: '@ Luzhniki Stadium, Moscow'
      },
      {
        id: 12,
        start: moment('2018-06-18T15:00+0300'),
        timezone: 'UTC+3',
        team1: 'SWE',
        team2: 'KOR',
        title: '@ Nizhny Novgorod Stadium, Nizhny Novgorod'
      },
      {
        id: 28,
        start: moment('2018-06-23T18:00+0300'),
        timezone: 'UTC+3',
        team1: 'KOR',
        team2: 'MEX',
        title: '@ Rostov Arena, Rostov-on-Don'
      },
      {
        id: 27,
        start: moment('2018-06-23T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'GER',
        team2: 'SWE',
        title: '@ Fisht Olympic Stadium, Sochi'
      },
      {
        id: 43,
        start: moment('2018-06-27T17:00+0300'),
        timezone: 'UTC+3',
        team1: 'KOR',
        team2: 'GER',
        title: '@ Kazan Arena, Kazan'
      },
      {
        id: 44,
        start: moment('2018-06-27T19:00+0500'),
        timezone: 'UTC+5',
        team1: 'MEX',
        team2: 'SWE',
        title: '@ Central Stadium, Yekaterinburg'
      },
      {
        id: 13,
        start: moment('2018-06-18T18:00+0300'),
        timezone: 'UTC+3',
        team1: 'BEL',
        team2: 'PAN',
        title: '@ Fisht Olympic Stadium, Sochi'
      },
      {
        id: 14,
        start: moment('2018-06-18T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'TUN',
        team2: 'ENG',
        title: '@ Volgograd Arena, Volgograd'
      },
      {
        id: 29,
        start: moment('2018-06-23T15:00+0300'),
        timezone: 'UTC+3',
        team1: 'BEL',
        team2: 'TUN',
        title: '@ Otkrytiye Arena, Moscow'
      },
      {
        id: 30,
        start: moment('2018-06-24T15:00+0300'),
        timezone: 'UTC+3',
        team1: 'ENG',
        team2: 'PAN',
        title: '@ Nizhny Novgorod Stadium, Nizhny Novgorod'
      },
      {
        id: 45,
        start: moment('2018-06-28T20:00+0200'),
        timezone: 'UTC+2',
        team1: 'ENG',
        team2: 'BEL',
        title: '@ Kaliningrad Stadium, Kaliningrad'
      },
      {
        id: 46,
        start: moment('2018-06-28T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'PAN',
        team2: 'TUN',
        title: '@ Mordovia Arena, Saransk'
      },
      {
        id: 16,
        start: moment('2018-06-19T15:00+0300'),
        timezone: 'UTC+3',
        team1: 'COL',
        team2: 'JPN',
        title: '@ Mordovia Arena, Saransk'
      },
      {
        id: 15,
        start: moment('2018-06-19T18:00+0300'),
        timezone: 'UTC+3',
        team1: 'POL',
        team2: 'SEN',
        title: '@ Otkrytiye Arena, Moscow'
      },
      {
        id: 32,
        start: moment('2018-06-24T20:00+0500'),
        timezone: 'UTC+5',
        team1: 'JPN',
        team2: 'SEN',
        title: '@ Central Stadium, Yekaterinburg'
      },
      {
        id: 31,
        start: moment('2018-06-24T21:00+0300'),
        timezone: 'UTC+3',
        team1: 'POL',
        team2: 'COL',
        title: '@ Kazan Arena, Kazan'
      },
      {
        id: 47,
        start: moment('2018-06-28T17:00+0300'),
        timezone: 'UTC+3',
        team1: 'JPN',
        team2: 'POL',
        title: '@ Volgograd Arena, Volgograd'
      },
      {
        id: 48,
        start: moment('2018-06-28T18:00+0400'),
        timezone: 'UTC+4',
        team1: 'SEN',
        team2: 'COL',
        title: '@ Cosmos Arena, Samara'
      }];
    return (
      <Table columns={columns} dataSource={data} size={16}/>
    );
  }


}

export default MatchTable;
