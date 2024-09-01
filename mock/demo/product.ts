import { MockMethod } from 'vite-plugin-mock';
import { baseUrl } from '../_util';

const productEnumRes = (() => {
  const result = {
    code: 200,
    message: '成功',
    result: {
      unit: [
        {
          children: [
            {
              localUnit: 'Piece(s)',
              label: 'Piece(s)',
              value: '13',
              unitGroup: '7',
            },
            {
              localUnit: 'Item(s)',
              label: 'Item(s)',
              value: '14',
              unitGroup: '7',
            },
            {
              localUnit: '千克/kg',
              label: 'kg',
              value: '4',
              unitGroup: '1',
            },
            {
              localUnit: '吨/t',
              label: 't',
              value: '5',
              unitGroup: '1',
            },
            {
              localUnit: '兆焦耳/MJ',
              label: 'MJ',
              value: '15',
              unitGroup: '2',
            },
            {
              localUnit: '千瓦时/kWh',
              label: 'kWh',
              value: '25',
              unitGroup: '3',
            },
            {
              localUnit: '立方米/m3',
              label: 'm3',
              value: '12',
              unitGroup: '5',
            },
            {
              localUnit: '个',
              label: '个',
              value: '146',
              unitGroup: '7',
            },
            {
              localUnit: '件',
              label: '件',
              value: '147',
              unitGroup: '7',
            },
            {
              localUnit: '只',
              label: '只',
              value: '148',
              unitGroup: '7',
            },
          ],
          label: '常用单位组',
          value: 1,
        },
        {
          children: [
            {
              localUnit: '个',
              label: '个',
              value: '146',
              unitGroup: '7',
            },
            {
              localUnit: '件',
              label: '件',
              value: '147',
              unitGroup: '7',
            },
            {
              localUnit: '只',
              label: '只',
              value: '148',
              unitGroup: '7',
            },
            {
              localUnit: '套',
              label: '套',
              value: '149',
              unitGroup: '7',
            },
            {
              localUnit: '箱',
              label: '箱',
              value: '150',
              unitGroup: '7',
            },
            {
              localUnit: '盒',
              label: '盒',
              value: '151',
              unitGroup: '7',
            },
            {
              localUnit: '袋',
              label: '袋',
              value: '152',
              unitGroup: '7',
            },
            {
              localUnit: '瓶',
              label: '瓶',
              value: '153',
              unitGroup: '7',
            },
            {
              localUnit: '双',
              label: '双',
              value: '154',
              unitGroup: '7',
            },
            {
              localUnit: '罐',
              label: '罐',
              value: '155',
              unitGroup: '7',
            },
            {
              localUnit: '桶',
              label: '桶',
              value: '156',
              unitGroup: '7',
            },
            {
              localUnit: '块',
              label: '块',
              value: '157',
              unitGroup: '7',
            },
            {
              localUnit: '条',
              label: '条',
              value: '158',
              unitGroup: '7',
            },
            {
              localUnit: '打/Dozen(s)',
              label: 'Dozen(s)',
              value: '131',
              unitGroup: 'unmatched-131',
            },
            {
              localUnit: 'Piece(s)',
              label: 'Piece(s)',
              value: '13',
              unitGroup: '7',
            },
            {
              localUnit: 'Item(s)',
              label: 'Item(s)',
              value: '14',
              unitGroup: '7',
            },
            {
              localUnit: 'unit',
              label: 'unit',
              value: '132',
              unitGroup: '7',
            },
          ],
          label: '物品个数单位组',
          value: 2,
        },
        {
          children: [
            {
              localUnit: '磅/lb av',
              label: 'lb av',
              value: '16',
              unitGroup: '1',
            },
            {
              localUnit: '兆克/Mg',
              label: 'Mg',
              value: '17',
              unitGroup: '1',
            },
            {
              localUnit: '常衡盎司/oz av',
              label: 'oz av',
              value: '18',
              unitGroup: '1',
            },
            {
              localUnit: '金衡盎司/oz t',
              label: 'oz t',
              value: '19',
              unitGroup: '1',
            },
            {
              localUnit: '短吨/sh tn',
              label: 'sh tn',
              value: '20',
              unitGroup: '1',
            },
            {
              localUnit: '长吨/long tn',
              label: 'long tn',
              value: '21',
              unitGroup: '1',
            },
            {
              localUnit: '微克/ug',
              label: 'ug',
              value: '22',
              unitGroup: '1',
            },
            {
              localUnit: '纳克/ng',
              label: 'ng',
              value: '23',
              unitGroup: '1',
            },
            {
              localUnit: '皮克/pg',
              label: 'pg',
              value: '24',
              unitGroup: '1',
            },
            {
              localUnit: '克/g',
              label: 'g',
              value: '3',
              unitGroup: '1',
            },
            {
              localUnit: '千克/kg',
              label: 'kg',
              value: '4',
              unitGroup: '1',
            },
            {
              localUnit: '吨/t',
              label: 't',
              value: '5',
              unitGroup: '1',
            },
            {
              localUnit: '毫克/mg',
              label: 'mg',
              value: '2',
              unitGroup: '1',
            },
          ],
          label: '质量单位组',
          value: 3,
        },
        {
          children: [
            {
              localUnit: '兆焦耳/MJ',
              label: 'MJ',
              value: '15',
              unitGroup: '2',
            },
            {
              localUnit: '千瓦时/kWh',
              label: 'kWh',
              value: '25',
              unitGroup: '3',
            },
            {
              localUnit: '吨标准油/TOE',
              label: 'TOE',
              value: '26',
              unitGroup: 'unmatched-26',
            },
            {
              localUnit: '焦耳/J',
              label: 'J',
              value: '27',
              unitGroup: '2',
            },
            {
              localUnit: '千卡/kcal',
              label: 'kcal',
              value: '28',
              unitGroup: 'unmatched-28',
            },
            {
              localUnit: '英国热量/btu',
              label: 'btu',
              value: '29',
              unitGroup: 'unmatched-29',
            },
            {
              localUnit: '兆瓦时/MWh',
              label: 'MWh',
              value: '30',
              unitGroup: '3',
            },
            {
              localUnit: '吨标准煤/TCE',
              label: 'TCE',
              value: '31',
              unitGroup: 'unmatched-31',
            },
            {
              localUnit: '吉焦/GJ',
              label: 'GJ',
              value: '32',
              unitGroup: '2',
            },
          ],
          label: '能量单位组',
          value: 4,
        },
        {
          children: [
            {
              localUnit: '毫米/mm',
              label: 'mm',
              value: '8',
              unitGroup: '4',
            },
            {
              localUnit: '厘米/cm',
              label: 'cm',
              value: '9',
              unitGroup: '4',
            },
            {
              localUnit: '米/m',
              label: 'm',
              value: '10',
              unitGroup: '4',
            },
            {
              localUnit: '千米/km',
              label: 'km',
              value: '33',
              unitGroup: '4',
            },
            {
              localUnit: '英尺/ft',
              label: 'ft',
              value: '34',
              unitGroup: 'unmatched-34',
            },
            {
              localUnit: '英里/mi',
              label: 'mi',
              value: '35',
              unitGroup: 'unmatched-35',
            },
            {
              localUnit: '英寸/in',
              label: 'in',
              value: '36',
              unitGroup: 'unmatched-36',
            },
            {
              localUnit: '毫英寸/u',
              label: 'u',
              value: '37',
              unitGroup: 'unmatched-37',
            },
            {
              localUnit: '海里/nmi',
              label: 'nmi',
              value: '38',
              unitGroup: 'unmatched-38',
            },
            {
              localUnit: '码/yd',
              label: 'yd',
              value: '39',
              unitGroup: 'unmatched-39',
            },
          ],
          label: '距离和长度单位组',
          value: 5,
        },
        {
          children: [
            {
              localUnit: '立方米/m3',
              label: 'm3',
              value: '12',
              unitGroup: '5',
            },
            {
              localUnit: '升/l',
              label: 'l',
              value: '7',
              unitGroup: '5',
            },
            {
              localUnit: '加仑/gal(US dry)',
              label: 'gal(US dry)',
              value: '40',
              unitGroup: 'unmatched-40',
            },
            {
              localUnit: '加仑/gal(US liq)',
              label: 'gal(US liq)',
              value: '41',
              unitGroup: 'unmatched-41',
            },
            {
              localUnit: '立方英尺·/cu ft',
              label: 'cu ft',
              value: '42',
              unitGroup: 'unmatched-42',
            },
            {
              localUnit: '液盎司/fl oz(Imp)',
              label: 'fl oz(Imp)',
              value: '43',
              unitGroup: 'unmatched-43',
            },
            {
              localUnit: '美式液盎司/US fl oz',
              label: 'US fl oz',
              value: '44',
              unitGroup: 'unmatched-44',
            },
            {
              localUnit: 'pt(Imp)/pt(Imp)',
              label: 'pt(Imp)',
              value: '45',
              unitGroup: 'unmatched-45',
            },
            {
              localUnit: 'bsh(US)/bsh(US)',
              label: 'bsh(US)',
              value: '46',
              unitGroup: 'unmatched-46',
            },
            {
              localUnit: 'bsh(Imp)/bsh(Imp)',
              label: 'bsh(Imp)',
              value: '47',
              unitGroup: 'unmatched-47',
            },
            {
              localUnit: '微升/ul',
              label: 'ul',
              value: '48',
              unitGroup: 'unmatched-48',
            },
            {
              localUnit: '毫升/ml',
              label: 'ml',
              value: '6',
              unitGroup: '5',
            },
            {
              localUnit: '桶/bbl',
              label: 'bbl',
              value: '49',
              unitGroup: 'unmatched-49',
            },
            {
              localUnit: 'bl(US beer)/bl(US beer)',
              label: 'bl(US beer)',
              value: '50',
              unitGroup: 'unmatched-50',
            },
            {
              localUnit: 'bl(US fl)/bl(US fl)',
              label: 'bl(US fl)',
              value: '51',
              unitGroup: 'unmatched-51',
            },
            {
              localUnit: 'bl(Imp)/bl(Imp)',
              label: 'bl(Imp)',
              value: '52',
              unitGroup: 'unmatched-52',
            },
            {
              localUnit: 'bl(US dry)/bl(US dry)',
              label: 'bl(US dry)',
              value: '53',
              unitGroup: 'unmatched-53',
            },
            {
              localUnit: '美式品脱/pt (US fl)',
              label: 'pt (US fl)',
              value: '133',
              unitGroup: 'unmatched-133',
            },
            {
              localUnit: '美式品脱/pt (US dry)',
              label: 'pt (US dry)',
              value: '134',
              unitGroup: 'unmatched-134',
            },
            {
              localUnit: '加仑/gal (US fl)',
              label: 'gal (US fl)',
              value: '135',
              unitGroup: 'unmatched-135',
            },
            {
              localUnit: '加仑/gal (Imp)',
              label: 'gal (Imp)',
              value: '136',
              unitGroup: 'unmatched-136',
            },
            {
              localUnit: '立方米/Nm3',
              label: 'Nm3',
              value: '138',
              unitGroup: 'unmatched-138',
            },
            {
              localUnit: '万立方米/*10000 m3',
              label: '*10000 m3',
              value: '142',
              unitGroup: '5',
            },
          ],
          label: '体积单位组',
          value: 6,
        },
        {
          children: [
            {
              localUnit: '平方米/m2',
              label: 'm2',
              value: '11',
              unitGroup: '6',
            },
            {
              localUnit: '平方千米*年/km2',
              label: 'km2',
              value: '54',
              unitGroup: '6',
            },
            {
              localUnit: '公顷/ha',
              label: 'ha',
              value: '55',
              unitGroup: '6',
            },
            {
              localUnit: '平方英尺/ft2',
              label: 'ft2',
              value: '56',
              unitGroup: 'unmatched-56',
            },
            {
              localUnit: '平方英里/mi2',
              label: 'mi2',
              value: '57',
              unitGroup: 'unmatched-57',
            },
            {
              localUnit: '英亩/ac',
              label: 'ac',
              value: '58',
              unitGroup: 'unmatched-58',
            },
            {
              localUnit: '平方码/yd2',
              label: 'yd2',
              value: '59',
              unitGroup: 'unmatched-59',
            },
            {
              localUnit: '平方厘米/cm2',
              label: 'cm2',
              value: '60',
              unitGroup: '6',
            },
            {
              localUnit: '平方海里/nmi2',
              label: 'nmi2',
              value: '61',
              unitGroup: 'unmatched-61',
            },
            {
              localUnit: '百平方米/are',
              label: 'are',
              value: '137',
              unitGroup: 'unmatched-137',
            },
          ],
          label: '面积单位组',
          value: 7,
        },
        {
          children: [
            {
              localUnit: '吨*千米/t*km',
              label: 't*km',
              value: '62',
              unitGroup: 'unmatched-62',
            },
            {
              localUnit: '千克*千米/kg*km',
              label: 'kg*km',
              value: '63',
              unitGroup: 'unmatched-63',
            },
            {
              localUnit: '磅*英里/lb*mi',
              label: 'lb*mi',
              value: '64',
              unitGroup: 'unmatched-64',
            },
            {
              localUnit: '吨*英里/t*mi',
              label: 't*mi',
              value: '65',
              unitGroup: 'unmatched-65',
            },
            {
              localUnit: '吨*海里/t*nmi',
              label: 't*nmi',
              value: '66',
              unitGroup: 'unmatched-66',
            },
            {
              localUnit: '磅*海里/lb*nmi',
              label: 'lb*nmi',
              value: '67',
              unitGroup: 'unmatched-67',
            },
            {
              localUnit: '公吨*千米/metric ton*km',
              label: 'metric ton*km',
              value: '68',
              unitGroup: 'unmatched-68',
            },
          ],
          label: '质量*距离单位组',
          value: 8,
        },
        {
          children: [
            {
              localUnit: '摩尔/mol',
              label: 'mol',
              value: '69',
              unitGroup: 'unmatched-69',
            },
          ],
          label: '分子量单位组',
          value: 9,
        },
        {
          children: [
            {
              localUnit: '贝克勒尔/Bq',
              label: 'Bq',
              value: '71',
              unitGroup: 'unmatched-71',
            },
            {
              localUnit: '居里/Ci',
              label: 'Ci',
              value: '72',
              unitGroup: 'unmatched-72',
            },
            {
              localUnit: '居里/Rutherford',
              label: 'Rutherford',
              value: '73',
              unitGroup: 'unmatched-73',
            },
            {
              localUnit: '千贝克勒尔/kBq',
              label: 'kBq',
              value: '70',
              unitGroup: 'unmatched-70',
            },
          ],
          label: '放射性单位组',
          value: 10,
        },
        {
          children: [
            {
              localUnit: '天/d',
              label: 'd',
              value: '74',
              unitGroup: 'unmatched-74',
            },
            {
              localUnit: '小时/h',
              label: 'h',
              value: '75',
              unitGroup: 'unmatched-75',
            },
            {
              localUnit: '秒/s',
              label: 's',
              value: '76',
              unitGroup: 'unmatched-76',
            },
            {
              localUnit: '年/a',
              label: 'a',
              value: '77',
              unitGroup: 'unmatched-77',
            },
            {
              localUnit: '分/min',
              label: 'min',
              value: '78',
              unitGroup: 'unmatched-78',
            },
          ],
          label: '时间单位组',
          value: 11,
        },
        {
          children: [
            {
              localUnit: '件*海里/Items*nmi',
              label: 'Items*nmi',
              value: '81',
              unitGroup: 'unmatched-81',
            },
            {
              localUnit: '件*千米/Items*km',
              label: 'Items*km',
              value: '79',
              unitGroup: 'unmatched-79',
            },
            {
              localUnit: '件*英里/Items*mi',
              label: 'Items*mi',
              value: '80',
              unitGroup: 'unmatched-80',
            },
          ],
          label: '物品个数*距离单位组',
          value: 12,
        },
        {
          children: [
            {
              localUnit: '立方米*千米/m3*km',
              label: 'm3*km',
              value: '82',
              unitGroup: 'unmatched-82',
            },
            {
              localUnit: '立方米*英里/m3*mi',
              label: 'm3*mi',
              value: '83',
              unitGroup: 'unmatched-83',
            },
            {
              localUnit: '升*公里/l*km',
              label: 'l*km',
              value: '84',
              unitGroup: 'unmatched-84',
            },
            {
              localUnit: '立方米*海里/m3*nmi',
              label: 'm3*nmi',
              value: '85',
              unitGroup: 'unmatched-85',
            },
            {
              localUnit: '升*英里/l*mi',
              label: 'l*mi',
              value: '86',
              unitGroup: 'unmatched-86',
            },
            {
              localUnit: '升*海里/l*nmi',
              label: 'l*nmi',
              value: '87',
              unitGroup: 'unmatched-87',
            },
          ],
          label: '体积*距离单位',
          value: 13,
        },
        {
          children: [
            {
              localUnit: '件*年/Items*a',
              label: 'Items*a',
              value: '88',
              unitGroup: 'unmatched-88',
            },
          ],
          label: '物品个数*时间单位组',
          value: 14,
        },
        {
          children: [
            {
              localUnit: '千克*天/kg*d',
              label: 'kg*d',
              value: '91',
              unitGroup: 'unmatched-91',
            },
            {
              localUnit: '吨*天/t*d',
              label: 't*d',
              value: '92',
              unitGroup: 'unmatched-92',
            },
            {
              localUnit: '千克*年/kg*a',
              label: 'kg*a',
              value: '89',
              unitGroup: 'unmatched-89',
            },
            {
              localUnit: '吨*年/t*a',
              label: 't*a',
              value: '90',
              unitGroup: 'unmatched-90',
            },
          ],
          label: '质量*时间单位组',
          value: 15,
        },
        {
          children: [
            {
              localUnit: '立方米*年/m3*a',
              label: 'm3*a',
              value: '93',
              unitGroup: 'unmatched-93',
            },
            {
              localUnit: '升*年/l*a',
              label: 'l*a',
              value: '94',
              unitGroup: 'unmatched-94',
            },
          ],
          label: '体积*时间单位组',
          value: 16,
        },
        {
          children: [
            {
              localUnit: '平方米*年/m2*a',
              label: 'm2*a',
              value: '95',
              unitGroup: 'unmatched-95',
            },
            {
              localUnit: '平方千米*年/km2*a',
              label: 'km2*a',
              value: '96',
              unitGroup: 'unmatched-96',
            },
            {
              localUnit: '公顷*年/ha*a',
              label: 'ha*a',
              value: '97',
              unitGroup: 'unmatched-97',
            },
            {
              localUnit: '平方英尺*年/ft2*a',
              label: 'ft2*a',
              value: '98',
              unitGroup: 'unmatched-98',
            },
            {
              localUnit: '平方英里*年/mi2*a',
              label: 'mi2*a',
              value: '99',
              unitGroup: 'unmatched-99',
            },
            {
              localUnit: '平方米*天/m2*d',
              label: 'm2*d',
              value: '100',
              unitGroup: 'unmatched-100',
            },
          ],
          label: '面积*时间单位组',
          value: 17,
        },
        {
          children: [
            {
              localUnit: '米*年/m*a',
              label: 'm*a',
              value: '101',
              unitGroup: 'unmatched-101',
            },
            {
              localUnit: '千米*年/km*a',
              label: 'km*a',
              value: '102',
              unitGroup: 'unmatched-102',
            },
            {
              localUnit: '米*年/m*year',
              label: 'm*year',
              value: '103',
              unitGroup: 'unmatched-103',
            },
          ],
          label: '长度*时间单位组',
          value: 18,
        },
        {
          children: [
            {
              localUnit: '人民币（元）/CNY',
              label: 'CNY',
              value: '144',
              unitGroup: 'unmatched-144',
            },
            {
              localUnit: '欧元/EUR',
              label: 'EUR',
              value: '104',
              unitGroup: 'unmatched-104',
            },
            {
              localUnit: '美元/USD',
              label: 'USD',
              value: '105',
              unitGroup: 'unmatched-105',
            },
            {
              localUnit: '日元/JPY',
              label: 'JPY',
              value: '106',
              unitGroup: 'unmatched-106',
            },
            {
              localUnit: '澳元/AUD',
              label: 'AUD',
              value: '107',
              unitGroup: 'unmatched-107',
            },
            {
              localUnit: '加拿大元/CAD',
              label: 'CAD',
              value: '108',
              unitGroup: 'unmatched-108',
            },
            {
              localUnit: '丹麦克朗/DKK',
              label: 'DKK',
              value: '109',
              unitGroup: 'unmatched-109',
            },
            {
              localUnit: '捷克克朗/CZK',
              label: 'CZK',
              value: '110',
              unitGroup: 'unmatched-110',
            },
            {
              localUnit: '瑞士法郎/CHF',
              label: 'CHF',
              value: '111',
              unitGroup: 'unmatched-111',
            },
            {
              localUnit: '爱沙尼亚克朗/EEK',
              label: 'EEK',
              value: '112',
              unitGroup: 'unmatched-112',
            },
            {
              localUnit: '英镑/GBP',
              label: 'GBP',
              value: '113',
              unitGroup: 'unmatched-113',
            },
            {
              localUnit: '匈牙利福林/HUF',
              label: 'HUF',
              value: '114',
              unitGroup: 'unmatched-114',
            },
            {
              localUnit: '冰岛克朗/ISK',
              label: 'ISK',
              value: '115',
              unitGroup: 'unmatched-115',
            },
            {
              localUnit: '韩元/KRW',
              label: 'KRW',
              value: '116',
              unitGroup: 'unmatched-116',
            },
            {
              localUnit: '立陶宛立特/LTL',
              label: 'LTL',
              value: '117',
              unitGroup: 'unmatched-117',
            },
            {
              localUnit: '拉脱维亚拉特/LVL',
              label: 'LVL',
              value: '118',
              unitGroup: 'unmatched-118',
            },
            {
              localUnit: '挪威克朗/NOK',
              label: 'NOK',
              value: '119',
              unitGroup: 'unmatched-119',
            },
            {
              localUnit: '瑞典克朗/SEK',
              label: 'SEK',
              value: '120',
              unitGroup: 'unmatched-120',
            },
            {
              localUnit: '南非兰特/ZAR',
              label: 'ZAR',
              value: '121',
              unitGroup: 'unmatched-121',
            },
            {
              localUnit: '人民币（万元）/CNY (10k)',
              label: 'CNY (10k)',
              value: '145',
              unitGroup: 'unmatched-145',
            },
          ],
          label: '货币单位',
          value: 19,
        },
        {
          children: [
            {
              localUnit: '案例/Cases',
              label: 'Cases',
              value: '122',
              unitGroup: 'unmatched-122',
            },
          ],
          label: 'Unit of number (LCWT)',
          value: 20,
        },
        {
          children: [
            {
              localUnit: '工秒/Seconds worked',
              label: 'Seconds worked',
              value: '123',
              unitGroup: 'unmatched-123',
            },
            {
              localUnit: '工时/Hours worked',
              label: 'Hours worked',
              value: '124',
              unitGroup: 'unmatched-124',
            },
            {
              localUnit: '工时/Hours workded(60min/h)',
              label: 'Hours workded(60min/h)',
              value: '125',
              unitGroup: 'unmatched-125',
            },
            {
              localUnit: 'Minutes worked/Minutes worked',
              label: 'Minutes worked',
              value: '126',
              unitGroup: 'unmatched-126',
            },
            {
              localUnit: '人天/Person days(8h/d)',
              label: 'Person days(8h/d)',
              value: '127',
              unitGroup: 'unmatched-127',
            },
            {
              localUnit: '人年/Person years(220d/a)',
              label: 'Person years(220d/a)',
              value: '128',
              unitGroup: 'unmatched-128',
            },
          ],
          label: 'Unit of working time (LCWT)',
          value: 21,
        },
        {
          children: [
            {
              localUnit: '千克/年/kg/a',
              label: 'kg/a',
              value: '129',
              unitGroup: 'unmatched-129',
            },
          ],
          label: '生物生长单位组',
          value: 22,
        },
        {
          children: [
            {
              localUnit: '人*千米/Person*km',
              label: 'Person*km',
              value: '130',
              unitGroup: 'unmatched-130',
            },
            {
              localUnit: '辆*千米/Vehicle*km',
              label: 'Vehicle*km',
              value: '143',
              unitGroup: 'unmatched-143',
            },
          ],
          label: '人车*距离单位组',
          value: 23,
        },
        {
          children: [
            {
              localUnit: '兆字节/MB',
              label: 'MB',
              value: '139',
              unitGroup: 'unmatched-139',
            },
            {
              localUnit: '吉字节/GB',
              label: 'GB',
              value: '140',
              unitGroup: 'unmatched-140',
            },
            {
              localUnit: '太字节/TB',
              label: 'TB',
              value: '141',
              unitGroup: 'unmatched-141',
            },
          ],
          label: '计算存储容量单位组',
          value: 24,
        },
      ],
      displayMethod: {
        '1': 'carbonQiYe.footprint.display.process',
        '2': 'carbonQiYe.footprint.display.resource',
        '3': 'carbonQiYe.footprint.display.flow',
      },
      authStatus: {
        '1': '模型创建',
        '2': '结果生成',
        '3': '认证待提交',
        '4': '认证待核查',
        '5': '认证核查中',
        '6': '认证核查退回',
        '7': '认证成功',
      },
      share: {
        '1': '按百分比分享',
        '2': '按数值分享',
        '3': '按百分比（数值）分享',
      },
      transportationV2: [
        {
          children: null,
          label: '水运',
          value: '64d5d50787dc03dc2cff8273ef7b9f28',
        },
        {
          children: null,
          label: '铁路',
          value: 'ffffff07083f82623750b5e624b753d90ce4cf',
        },
        {
          children: null,
          label: '航空',
          value: 'c8ff0d89ee98a351b8cdb8bb5bbac04e',
        },
        {
          children: [
            {
              label: '轻型货车(&lt;7.5t)',
              value: '1',
            },
            {
              label: '中型货车(7.5t~16t)',
              value: '2',
            },
            {
              label: '重型货车(&gt;16t)',
              value: '3',
            },
          ],
          label: '道路交通',
          value: 'edc17cae160b3c8054073b0fb89cda0e',
        },
      ],
      lifeCycleType: {
        '1': '从摇篮到大门',
        '2': '从摇篮到坟墓',
      },
      factorSource: {
        '1': '文献报告',
        '2': '行业数据',
        '3': '实测数据',
        '4': '理论计算',
        '5': '其他',
      },
      type: [
        {
          children: [
            {
              label: '农业、园艺、市场果蔬业产品',
              value: 77,
            },
            {
              label: '活体动物、动物制品（肉类除外）',
              value: 78,
            },
            {
              label: '林业、伐木产品',
              value: 79,
            },
            {
              label: '鱼和其他渔产品',
              value: 80,
            },
          ],
          label: '农、林、渔产品',
          value: 76,
        },
        {
          children: [
            {
              label: '煤、泥炭',
              value: 82,
            },
            {
              label: '原油、天然气',
              value: 83,
            },
            {
              label: '铀、钍矿石、精矿',
              value: 84,
            },
            {
              label: '金属矿石',
              value: 85,
            },
            {
              label: '石头、沙子、粘土',
              value: 86,
            },
            {
              label: '其他矿物',
              value: 87,
            },
            {
              label: '电、城镇燃气、蒸汽、热水',
              value: 88,
            },
            {
              label: '天然水',
              value: 89,
            },
          ],
          label: '矿石/矿物；电、气和水',
          value: 81,
        },
        {
          children: [
            {
              label: '肉类、鱼类、水果、蔬菜、油脂',
              value: 91,
            },
            {
              label: '乳制品、蛋制品',
              value: 92,
            },
            {
              label: '谷物磨制品、淀粉和淀粉制品；其他食品',
              value: 93,
            },
            {
              label: '饮料',
              value: 94,
            },
            {
              label: '烟草制品',
              value: 95,
            },
            {
              label: '纱线；机织和簇绒织物',
              value: 96,
            },
            {
              label: '除服装外的纺织品',
              value: 97,
            },
            {
              label: '针织或钩编织物；穿着用服装',
              value: 98,
            },
            {
              label: '皮革和皮革制品；鞋类',
              value: 99,
            },
          ],
          label: '食品、饮料、烟草；纺织品、服装、皮革制品',
          value: 90,
        },
        {
          children: [
            {
              label: '木材、软木、稻草、编织材料',
              value: 101,
            },
            {
              label: '纸浆、纸和纸制品；印刷品及相关物品',
              value: 102,
            },
            {
              label: '焦炉产品；精炼石油产品；核燃料',
              value: 103,
            },
            {
              label: '基础化学品',
              value: 104,
            },
            {
              label: '其他化学品；人造纤维',
              value: 105,
            },
            {
              label: '橡胶、塑料制品',
              value: 106,
            },
            {
              label: '玻璃和玻璃制品、其他非金属制品',
              value: 107,
            },
            {
              label: '家具；其他可运输物品',
              value: 108,
            },
            {
              label: '废料或碎屑',
              value: 109,
            },
          ],
          label: '其他可运输物品（金属制品、机械和设备除外）',
          value: 100,
        },
        {
          children: [
            {
              label: '基础金属品',
              value: 111,
            },
            {
              label: '金属制品（机械和设备除外）',
              value: 112,
            },
            {
              label: '通用机械',
              value: 113,
            },
            {
              label: '专用机械',
              value: 114,
            },
            {
              label: '办公、记账和计算机械',
              value: 115,
            },
            {
              label: '电气机械和设备',
              value: 116,
            },
            {
              label: '收音机、电视、通讯设备',
              value: 117,
            },
            {
              label: '医疗器械、精密光学仪器、钟表',
              value: 118,
            },
            {
              label: '运输设备',
              value: 119,
            },
          ],
          label: '金属制品、机械、设备',
          value: 110,
        },
        {
          children: [
            {
              label: '建筑',
              value: 121,
            },
            {
              label: '建筑服务',
              value: 122,
            },
          ],
          label: '建筑、建筑服务',
          value: 120,
        },
        {
          children: [
            {
              label: '批发贸易服务',
              value: 124,
            },
            {
              label: '零售贸易服务',
              value: 125,
            },
            {
              label: '住宿、餐饮服务',
              value: 126,
            },
            {
              label: '客运服务',
              value: 127,
            },
            {
              label: '货运服务',
              value: 128,
            },
            {
              label: '运输车辆租赁服务',
              value: 129,
            },
            {
              label: '支持运输服务',
              value: 130,
            },
            {
              label: '邮政和快递服务',
              value: 131,
            },
            {
              label: '电力、燃气和水的输配（自有账户）',
              value: 132,
            },
          ],
          label: '分销贸易服务；住宿、餐饮服务；运输服务；电力、天然气和水的输配服务',
          value: 123,
        },
        {
          children: [
            {
              label: '金融及相关服务',
              value: 134,
            },
            {
              label: '房地产服务',
              value: 135,
            },
            {
              label: '租赁服务',
              value: 136,
            },
          ],
          label: '金融及相关服务；房地产服务；租赁服务',
          value: 133,
        },
        {
          children: [
            {
              label: '数字化产品及服务（工具类软件产品、数字化内容、在线信息化服务 ）',
              value: 138,
            },
            {
              label: '研发服务',
              value: 139,
            },
            {
              label: '法律和会计服务',
              value: 140,
            },
            {
              label: '专业、技术和商业服务（研发、法律和会计服务除外）',
              value: 141,
            },
            {
              label: '电信、广播、信息供应服务',
              value: 142,
            },
            {
              label: '支持服务',
              value: 143,
            },
            {
              label: '为农业、狩猎、林业、渔业、采矿、公用事业提供支持和运营服务',
              value: 144,
            },
            {
              label: '维护、修理和安装（建筑除外）服务',
              value: 145,
            },
            {
              label: '对他人的实物提供的制造服务',
              value: 146,
            },
            {
              label: '其他制造服务；出版、印刷和复印服务；材料回收服务',
              value: 147,
            },
          ],
          label: '业务和生产服务',
          value: 137,
        },
        {
          children: [
            {
              label: '向整个社区提供的公共行政和其他服务；强制性社会保障服务',
              value: 149,
            },
            {
              label: '教育服务',
              value: 150,
            },
            {
              label: '人类健康与社会关爱服务',
              value: 151,
            },
            {
              label: '污水和废物的收集、处理、处置和其他环保服务',
              value: 152,
            },
            {
              label: '会员组织的服务',
              value: 153,
            },
            {
              label: '娱乐、文化、体育服务',
              value: 154,
            },
            {
              label: '其他服务',
              value: 155,
            },
            {
              label: '家政服务',
              value: 156,
            },
            {
              label: '域外组织和机构提供的服务',
              value: 157,
            },
          ],
          label: '社区、社会和个人服务',
          value: 148,
        },
        {
          children: [
            {
              label: '电芯',
              value: 159,
            },
            {
              label: '模组',
              value: 160,
            },
            {
              label: '电池包',
              value: 161,
            },
            {
              label: '储能系统',
              value: 162,
            },
            {
              label: '其他',
              value: 163,
            },
          ],
          label: '电池',
          value: 158,
        },
      ],
      dataSource: {
        '1': '生产实景数据',
        '2': '行业统计数据',
        '3': '权威机构调研报告',
        '4': '文献',
        '5': '其他',
      },
      transportation: {
        '64d5d50787dc03dc2cff8273ef7b9f28': '水运',
        ffffff07083f82623750b5e624b753d90ce4cf: '铁路',
        edc17cae160b3c8054073b0fb89cda0e: '道路交通',
        c8ff0d89ee98a351b8cdb8bb5bbac04e: '航空',
      },
    },
    type: 'success'
  };
  return result;
})();

export default [
  {
    url: `${baseUrl}/carbon/common/retrieveCarbonProductEnum`,
    timeout: 100,
    method: 'post',
    response: ({}) => {
      return productEnumRes;
    },
  },
] as MockMethod[];
