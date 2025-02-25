// /** Hacky helper to avoid complex ts typing shenanigans */
// export function TS_get<Item>(index: number | string, collection: Record<number | string, Item>): Item | undefined {
//   return collection[index];
// }

const _TS_mapThemes = {
  'aw1': {
    'terrain': 'terrain/aw1/',
    'sea': 'terrain/newseas/',
    'shadows': 'terrain/aw1/shadows/'
  },
  'aw2': {
    'terrain': 'terrain/aw2/',
    'sea': 'terrain/newseas/',
    'shadows': 'terrain/aw2/shadows/'
  },
  'Desert': {
    'terrain': 'terrain/desert/',
    'sea': 'terrain/desert/seas/',
    'shadows': 'terrain/desert/shadows/'
  },
  'Days of Ruin': {
    'terrain': 'terrain/dor/',
    'sea': 'terrain/dor/seas/',
    'shadows': 'terrain/dor/shadows/'
  },
  'ani': {
    'terrain': 'terrain/ani/',
  }
} as const;
export const TS_mapThemes: typeof _TS_mapThemes & Record<string, Record<string, string>> = _TS_mapThemes;

// TODO: as you can see the `Default` and `Classic` are not even in `TS_mapThemes`
const _TS_themeIdToName = {
  '1': 'Default',
  '2': 'Classic',
  '3': 'Desert',
  '4': 'Days of Ruin'
} as const;
export const TS_themeIdToName: typeof _TS_themeIdToName & Record<number, string> = _TS_themeIdToName;

const _TS_terrainIdToName = {
  '1': 'plain',
  '2': 'mountain',
  '3': 'wood',
  '4': 'hriver',
  '5': 'vriver',
  '6': 'criver',
  '7': 'esriver',
  '8': 'swriver',
  '9': 'wnriver',
  '10': 'neriver',
  '11': 'eswriver',
  '12': 'swnriver',
  '13': 'wneriver',
  '14': 'nesriver',
  '15': 'hroad',
  '16': 'vroad',
  '17': 'croad',
  '18': 'esroad',
  '19': 'swroad',
  '20': 'wnroad',
  '21': 'neroad',
  '22': 'eswroad',
  '23': 'swnroad',
  '24': 'wneroad',
  '25': 'nesroad',
  '26': 'hbridge',
  '27': 'vbridge',
  '29': 'hshoal',
  '30': 'hshoaln',
  '31': 'vshoal',
  '32': 'vshoale',
  '33': 'reef',
  '34': 'neutralcity',
  '35': 'neutralbase',
  '36': 'neutralairport',
  '37': 'neutralport',
  '38': 'orangestarcity',
  '39': 'orangestarbase',
  '40': 'orangestarairport',
  '41': 'orangestarport',
  '42': 'orangestarhq',
  '43': 'bluemooncity',
  '44': 'bluemoonbase',
  '45': 'bluemoonairport',
  '46': 'bluemoonport',
  '47': 'bluemoonhq',
  '48': 'greenearthcity',
  '49': 'greenearthbase',
  '50': 'greenearthairport',
  '51': 'greenearthport',
  '52': 'greenearthhq',
  '53': 'yellowcometcity',
  '54': 'yellowcometbase',
  '55': 'yellowcometairport',
  '56': 'yellowcometport',
  '57': 'yellowcomethq',
  '81': 'redfirecity',
  '82': 'redfirebase',
  '83': 'redfireairport',
  '84': 'redfireport',
  '85': 'redfirehq',
  '86': 'greyskycity',
  '87': 'greyskybase',
  '88': 'greyskyairport',
  '89': 'greyskyport',
  '90': 'greyskyhq',
  '91': 'blackholecity',
  '92': 'blackholebase',
  '93': 'blackholeairport',
  '94': 'blackholeport',
  '95': 'blackholehq',
  '96': 'browndesertcity',
  '97': 'browndesertbase',
  '98': 'browndesertairport',
  '99': 'browndesertport',
  '100': 'browndeserthq',
  '101': 'vpipe',
  '102': 'hpipe',
  '103': 'nepipe',
  '104': 'espipe',
  '105': 'swpipe',
  '106': 'wnpipe',
  '107': 'npipeend',
  '108': 'epipeend',
  '109': 'spipeend',
  '110': 'wpipeend',
  '111': 'missilesilo',
  '112': 'missilesiloempty',
  '113': 'hpipeseam',
  '114': 'vpipeseam',
  '115': 'hpiperubble',
  '116': 'vpiperubble',
  '117': 'amberblazeairport',
  '118': 'amberblazebase',
  '119': 'amberblazecity',
  '120': 'amberblazehq',
  '121': 'amberblazeport',
  '122': 'jadesunairport',
  '123': 'jadesunbase',
  '124': 'jadesuncity',
  '125': 'jadesunhq',
  '126': 'jadesunport',
  '127': 'amberblazecomtower',
  '128': 'blackholecomtower',
  '129': 'bluemooncomtower',
  '130': 'browndesertcomtower',
  '131': 'greenearthcomtower',
  '132': 'jadesuncomtower',
  '133': 'neutralcomtower',
  '134': 'orangestarcomtower',
  '135': 'redfirecomtower',
  '136': 'yellowcometcomtower',
  '137': 'greyskycomtower',
  '138': 'amberblazelab',
  '139': 'blackholelab',
  '140': 'bluemoonlab',
  '141': 'browndesertlab',
  '142': 'greenearthlab',
  '143': 'greyskylab',
  '144': 'jadesunlab',
  '145': 'neutrallab',
  '146': 'orangestarlab',
  '147': 'redfirelab',
  '148': 'yellowcometlab',
  '149': 'cobalticeairport',
  '150': 'cobalticebase',
  '151': 'cobalticecity',
  '152': 'cobalticecomtower',
  '153': 'cobalticehq',
  '154': 'cobalticelab',
  '155': 'cobalticeport',
  '156': 'pinkcosmosairport',
  '157': 'pinkcosmosbase',
  '158': 'pinkcosmoscity',
  '159': 'pinkcosmoscomtower',
  '160': 'pinkcosmoshq',
  '161': 'pinkcosmoslab',
  '162': 'pinkcosmosport',
  '163': 'tealgalaxyairport',
  '164': 'tealgalaxybase',
  '165': 'tealgalaxycity',
  '166': 'tealgalaxycomtower',
  '167': 'tealgalaxyhq',
  '168': 'tealgalaxylab',
  '169': 'tealgalaxyport',
  '170': 'purplelightningairport',
  '171': 'purplelightningbase',
  '172': 'purplelightningcity',
  '173': 'purplelightningcomtower',
  '174': 'purplelightninghq',
  '175': 'purplelightninglab',
  '176': 'purplelightningport',
  '181': 'acidrainairport',
  '182': 'acidrainbase',
  '183': 'acidraincity',
  '184': 'acidraincomtower',
  '185': 'acidrainhq',
  '186': 'acidrainlab',
  '187': 'acidrainport',
  '188': 'whitenovaairport',
  '189': 'whitenovabase',
  '190': 'whitenovacity',
  '191': 'whitenovacomtower',
  '192': 'whitenovahq',
  '193': 'whitenovalab',
  '194': 'whitenovaport',
  '195': 'teleporter',
  '196': 'azureasteroidairport',
  '197': 'azureasteroidbase',
  '198': 'azureasteroidcity',
  '199': 'azureasteroidcomtower',
  '200': 'azureasteroidhq',
  '201': 'azureasteroidlab',
  '202': 'azureasteroidport',
  '203': 'noireclipseairport',
  '204': 'noireclipsebase',
  '205': 'noireclipsecity',
  '206': 'noireclipsecomtower',
  '207': 'noireclipsehq',
  '208': 'noireclipselab',
  '209': 'noireclipseport',
  '210': 'silverclawairport',
  '211': 'silverclawbase',
  '212': 'silverclawcity',
  '213': 'silverclawcomtower',
  '214': 'silverclawhq',
  '215': 'silverclawlab',
  '216': 'silverclawport',
  '217': 'silverclawairport',
  '218': 'silverclawbase',
  '219': 'silverclawcity',
  '220': 'silverclawcomtower',
  '221': 'silverclawhq',
  '222': 'silverclawlab',
  '223': 'silverclawport',
} as const;
export const TS_terrainIdToName: typeof _TS_terrainIdToName & Record<number, string> = _TS_terrainIdToName;

const __AW2_TILESET = {
  clear: {
    plain: {
      x: 466,
      y: 539,
      w: 16,
      h: 16
    },
    mountain: {
      x: 482,
      y: 539,
      w: 16,
      h: 21
    },
    wood: {
      x: 0,
      y: 560,
      w: 16,
      h: 16
    },
    hriver: {
      x: 48,
      y: 0,
      w: 16,
      h: 16
    },
    vriver: {
      x: 64,
      y: 0,
      w: 16,
      h: 16
    },
    criver: {
      x: 80,
      y: 0,
      w: 16,
      h: 16
    },
    esriver: {
      x: 96,
      y: 0,
      w: 16,
      h: 16
    },
    swriver: {
      x: 112,
      y: 0,
      w: 16,
      h: 16
    },
    wnriver: {
      x: 128,
      y: 0,
      w: 16,
      h: 16
    },
    neriver: {
      x: 144,
      y: 0,
      w: 16,
      h: 16
    },
    eswriver: {
      x: 160,
      y: 0,
      w: 16,
      h: 16
    },
    swnriver: {
      x: 176,
      y: 0,
      w: 16,
      h: 16
    },
    wneriver: {
      x: 192,
      y: 0,
      w: 16,
      h: 16
    },
    nesriver: {
      x: 208,
      y: 0,
      w: 16,
      h: 16
    },
    hroad: {
      x: 16,
      y: 560,
      w: 16,
      h: 16
    },
    vroad: {
      x: 32,
      y: 560,
      w: 16,
      h: 16
    },
    croad: {
      x: 48,
      y: 560,
      w: 16,
      h: 16
    },
    esroad: {
      x: 64,
      y: 560,
      w: 16,
      h: 16
    },
    swroad: {
      x: 80,
      y: 560,
      w: 16,
      h: 16
    },
    wnroad: {
      x: 96,
      y: 560,
      w: 16,
      h: 16
    },
    neroad: {
      x: 112,
      y: 560,
      w: 16,
      h: 16
    },
    eswroad: {
      x: 128,
      y: 560,
      w: 16,
      h: 16
    },
    swnroad: {
      x: 144,
      y: 560,
      w: 16,
      h: 16
    },
    wneroad: {
      x: 160,
      y: 560,
      w: 16,
      h: 16
    },
    nesroad: {
      x: 176,
      y: 560,
      w: 16,
      h: 16
    },
    hbridge: {
      x: 192,
      y: 560,
      w: 16,
      h: 16
    },
    vbridge: {
      x: 208,
      y: 560,
      w: 16,
      h: 16
    },
    hshoal: {
      x: 432,
      y: 0,
      w: 16,
      h: 16
    },
    hshoaln: {
      x: 448,
      y: 0,
      w: 16,
      h: 16
    },
    vshoal: {
      x: 464,
      y: 0,
      w: 16,
      h: 16
    },
    vshoale: {
      x: 480,
      y: 0,
      w: 16,
      h: 16
    },
    reef: {
      x: 496,
      y: 0,
      w: 16,
      h: 16
    },
    neutralcity: {
      x: 224,
      y: 560,
      w: 16,
      h: 22
    },
    neutralbase: {
      x: 240,
      y: 560,
      w: 16,
      h: 25
    },
    neutralairport: {
      x: 256,
      y: 560,
      w: 16,
      h: 18
    },
    neutralport: {
      x: 272,
      y: 560,
      w: 16,
      h: 22
    },
    orangestarcity: {
      x: 288,
      y: 560,
      w: 16,
      h: 22
    },
    orangestarbase: {
      x: 304,
      y: 560,
      w: 16,
      h: 25
    },
    orangestarairport: {
      x: 320,
      y: 560,
      w: 16,
      h: 18
    },
    orangestarport: {
      x: 336,
      y: 560,
      w: 16,
      h: 22
    },
    orangestarhq: {
      x: 352,
      y: 560,
      w: 16,
      h: 31
    },
    bluemooncity: {
      x: 368,
      y: 560,
      w: 16,
      h: 22
    },
    bluemoonbase: {
      x: 384,
      y: 560,
      w: 16,
      h: 25
    },
    bluemoonairport: {
      x: 400,
      y: 560,
      w: 16,
      h: 18
    },
    bluemoonport: {
      x: 416,
      y: 560,
      w: 16,
      h: 22
    },
    bluemoonhq: {
      x: 432,
      y: 560,
      w: 16,
      h: 31
    },
    greenearthcity: {
      x: 448,
      y: 560,
      w: 16,
      h: 22
    },
    greenearthbase: {
      x: 464,
      y: 560,
      w: 16,
      h: 25
    },
    greenearthairport: {
      x: 480,
      y: 560,
      w: 16,
      h: 18
    },
    greenearthport: {
      x: 496,
      y: 560,
      w: 16,
      h: 22
    },
    greenearthhq: {
      x: 0,
      y: 591,
      w: 16,
      h: 31
    },
    yellowcometcity: {
      x: 16,
      y: 591,
      w: 16,
      h: 22
    },
    yellowcometbase: {
      x: 32,
      y: 591,
      w: 16,
      h: 25
    },
    yellowcometairport: {
      x: 48,
      y: 591,
      w: 16,
      h: 18
    },
    yellowcometport: {
      x: 64,
      y: 591,
      w: 16,
      h: 22
    },
    yellowcomethq: {
      x: 80,
      y: 591,
      w: 16,
      h: 31
    },
    redfirecity: {
      x: 96,
      y: 591,
      w: 16,
      h: 22
    },
    redfirebase: {
      x: 112,
      y: 591,
      w: 16,
      h: 25
    },
    redfireairport: {
      x: 128,
      y: 591,
      w: 16,
      h: 18
    },
    redfireport: {
      x: 144,
      y: 591,
      w: 16,
      h: 22
    },
    redfirehq: {
      x: 160,
      y: 591,
      w: 16,
      h: 31
    },
    greyskycity: {
      x: 176,
      y: 591,
      w: 16,
      h: 22
    },
    greyskybase: {
      x: 192,
      y: 591,
      w: 16,
      h: 25
    },
    greyskyairport: {
      x: 208,
      y: 591,
      w: 16,
      h: 18
    },
    greyskyport: {
      x: 224,
      y: 591,
      w: 16,
      h: 22
    },
    greyskyhq: {
      x: 240,
      y: 591,
      w: 16,
      h: 31
    },
    blackholecity: {
      x: 256,
      y: 591,
      w: 16,
      h: 22
    },
    blackholebase: {
      x: 272,
      y: 591,
      w: 16,
      h: 25
    },
    blackholeairport: {
      x: 288,
      y: 591,
      w: 16,
      h: 18
    },
    blackholeport: {
      x: 304,
      y: 591,
      w: 16,
      h: 22
    },
    blackholehq: {
      x: 320,
      y: 591,
      w: 16,
      h: 31
    },
    browndesertcity: {
      x: 336,
      y: 591,
      w: 16,
      h: 22
    },
    browndesertbase: {
      x: 352,
      y: 591,
      w: 16,
      h: 25
    },
    browndesertairport: {
      x: 368,
      y: 591,
      w: 16,
      h: 18
    },
    browndesertport: {
      x: 384,
      y: 591,
      w: 16,
      h: 22
    },
    browndeserthq: {
      x: 400,
      y: 591,
      w: 16,
      h: 31
    },
    vpipe: {
      x: 192,
      y: 52,
      w: 16,
      h: 16
    },
    hpipe: {
      x: 208,
      y: 52,
      w: 16,
      h: 16
    },
    nepipe: {
      x: 224,
      y: 52,
      w: 16,
      h: 16
    },
    espipe: {
      x: 240,
      y: 52,
      w: 16,
      h: 16
    },
    swpipe: {
      x: 256,
      y: 52,
      w: 16,
      h: 16
    },
    wnpipe: {
      x: 272,
      y: 52,
      w: 16,
      h: 16
    },
    npipeend: {
      x: 288,
      y: 52,
      w: 16,
      h: 16
    },
    epipeend: {
      x: 304,
      y: 52,
      w: 16,
      h: 16
    },
    spipeend: {
      x: 320,
      y: 52,
      w: 16,
      h: 16
    },
    wpipeend: {
      x: 336,
      y: 52,
      w: 16,
      h: 16
    },
    missilesilo: {
      x: 352,
      y: 52,
      w: 16,
      h: 24
    },
    missilesiloempty: {
      x: 368,
      y: 52,
      w: 16,
      h: 16
    },
    hpipeseam: {
      x: 384,
      y: 52,
      w: 16,
      h: 16
    },
    vpipeseam: {
      x: 400,
      y: 52,
      w: 16,
      h: 16
    },
    hpiperubble: {
      x: 416,
      y: 52,
      w: 16,
      h: 16
    },
    vpiperubble: {
      x: 432,
      y: 52,
      w: 16,
      h: 16
    },
    amberblazeairport: {
      x: 416,
      y: 591,
      w: 16,
      h: 18
    },
    amberblazebase: {
      x: 432,
      y: 591,
      w: 16,
      h: 25
    },
    amberblazecity: {
      x: 448,
      y: 591,
      w: 16,
      h: 22
    },
    amberblazehq: {
      x: 464,
      y: 591,
      w: 16,
      h: 31
    },
    amberblazeport: {
      x: 480,
      y: 591,
      w: 16,
      h: 22
    },
    jadesunairport: {
      x: 496,
      y: 591,
      w: 16,
      h: 18
    },
    jadesunbase: {
      x: 0,
      y: 622,
      w: 16,
      h: 25
    },
    jadesuncity: {
      x: 16,
      y: 622,
      w: 16,
      h: 22
    },
    jadesunhq: {
      x: 32,
      y: 622,
      w: 16,
      h: 31
    },
    jadesunport: {
      x: 48,
      y: 622,
      w: 16,
      h: 22
    },
    amberblazecomtower: {
      x: 64,
      y: 622,
      w: 16,
      h: 25
    },
    blackholecomtower: {
      x: 80,
      y: 622,
      w: 16,
      h: 25
    },
    bluemooncomtower: {
      x: 96,
      y: 622,
      w: 16,
      h: 25
    },
    browndesertcomtower: {
      x: 112,
      y: 622,
      w: 16,
      h: 25
    },
    greenearthcomtower: {
      x: 128,
      y: 622,
      w: 16,
      h: 25
    },
    jadesuncomtower: {
      x: 144,
      y: 622,
      w: 16,
      h: 25
    },
    neutralcomtower: {
      x: 160,
      y: 622,
      w: 16,
      h: 25
    },
    orangestarcomtower: {
      x: 176,
      y: 622,
      w: 16,
      h: 25
    },
    redfirecomtower: {
      x: 192,
      y: 622,
      w: 16,
      h: 25
    },
    yellowcometcomtower: {
      x: 208,
      y: 622,
      w: 16,
      h: 25
    },
    greyskycomtower: {
      x: 224,
      y: 622,
      w: 16,
      h: 25
    },
    amberblazelab: {
      x: 240,
      y: 622,
      w: 16,
      h: 24
    },
    blackholelab: {
      x: 256,
      y: 622,
      w: 16,
      h: 24
    },
    bluemoonlab: {
      x: 272,
      y: 622,
      w: 16,
      h: 24
    },
    browndesertlab: {
      x: 288,
      y: 622,
      w: 16,
      h: 24
    },
    greenearthlab: {
      x: 304,
      y: 622,
      w: 16,
      h: 24
    },
    greyskylab: {
      x: 320,
      y: 622,
      w: 16,
      h: 24
    },
    jadesunlab: {
      x: 336,
      y: 622,
      w: 16,
      h: 24
    },
    neutrallab: {
      x: 352,
      y: 622,
      w: 16,
      h: 24
    },
    orangestarlab: {
      x: 368,
      y: 622,
      w: 16,
      h: 24
    },
    redfirelab: {
      x: 384,
      y: 622,
      w: 16,
      h: 24
    },
    yellowcometlab: {
      x: 400,
      y: 622,
      w: 16,
      h: 24
    },
    cobalticeairport: {
      x: 416,
      y: 622,
      w: 16,
      h: 18
    },
    cobalticebase: {
      x: 432,
      y: 622,
      w: 16,
      h: 25
    },
    cobalticecity: {
      x: 448,
      y: 622,
      w: 16,
      h: 22
    },
    cobalticecomtower: {
      x: 464,
      y: 622,
      w: 16,
      h: 25
    },
    cobalticehq: {
      x: 480,
      y: 622,
      w: 16,
      h: 29
    },
    cobalticelab: {
      x: 496,
      y: 622,
      w: 16,
      h: 24
    },
    cobalticeport: {
      x: 0,
      y: 653,
      w: 16,
      h: 22
    },
    pinkcosmosairport: {
      x: 16,
      y: 653,
      w: 16,
      h: 18
    },
    pinkcosmosbase: {
      x: 32,
      y: 653,
      w: 16,
      h: 25
    },
    pinkcosmoscity: {
      x: 48,
      y: 653,
      w: 16,
      h: 22
    },
    pinkcosmoscomtower: {
      x: 64,
      y: 653,
      w: 16,
      h: 25
    },
    pinkcosmoshq: {
      x: 80,
      y: 653,
      w: 16,
      h: 31
    },
    pinkcosmoslab: {
      x: 96,
      y: 653,
      w: 16,
      h: 24
    },
    pinkcosmosport: {
      x: 112,
      y: 653,
      w: 16,
      h: 22
    },
    tealgalaxyairport: {
      x: 128,
      y: 653,
      w: 16,
      h: 18
    },
    tealgalaxybase: {
      x: 144,
      y: 653,
      w: 16,
      h: 25
    },
    tealgalaxycity: {
      x: 160,
      y: 653,
      w: 16,
      h: 22
    },
    tealgalaxycomtower: {
      x: 176,
      y: 653,
      w: 16,
      h: 25
    },
    tealgalaxyhq: {
      x: 192,
      y: 653,
      w: 16,
      h: 31
    },
    tealgalaxylab: {
      x: 208,
      y: 653,
      w: 16,
      h: 24
    },
    tealgalaxyport: {
      x: 224,
      y: 653,
      w: 16,
      h: 22
    },
    purplelightningairport: {
      x: 240,
      y: 653,
      w: 16,
      h: 18
    },
    purplelightningbase: {
      x: 256,
      y: 653,
      w: 16,
      h: 25
    },
    purplelightningcity: {
      x: 272,
      y: 653,
      w: 16,
      h: 22
    },
    purplelightningcomtower: {
      x: 288,
      y: 653,
      w: 16,
      h: 25
    },
    purplelightninghq: {
      x: 304,
      y: 653,
      w: 16,
      h: 31
    },
    purplelightninglab: {
      x: 320,
      y: 653,
      w: 16,
      h: 24
    },
    purplelightningport: {
      x: 336,
      y: 653,
      w: 16,
      h: 22
    },
    acidrainairport: {
      x: 352,
      y: 653,
      w: 16,
      h: 18
    },
    acidrainbase: {
      x: 368,
      y: 653,
      w: 16,
      h: 25
    },
    acidraincity: {
      x: 384,
      y: 653,
      w: 16,
      h: 22
    },
    acidraincomtower: {
      x: 400,
      y: 653,
      w: 16,
      h: 25
    },
    acidrainhq: {
      x: 416,
      y: 653,
      w: 16,
      h: 31
    },
    acidrainlab: {
      x: 432,
      y: 653,
      w: 16,
      h: 24
    },
    acidrainport: {
      x: 448,
      y: 653,
      w: 16,
      h: 22
    },
    whitenovaairport: {
      x: 464,
      y: 653,
      w: 16,
      h: 18
    },
    whitenovabase: {
      x: 480,
      y: 653,
      w: 16,
      h: 25
    },
    whitenovacity: {
      x: 496,
      y: 653,
      w: 16,
      h: 22
    },
    whitenovacomtower: {
      x: 0,
      y: 684,
      w: 16,
      h: 25
    },
    whitenovahq: {
      x: 16,
      y: 684,
      w: 16,
      h: 31
    },
    whitenovalab: {
      x: 32,
      y: 684,
      w: 16,
      h: 24
    },
    whitenovaport: {
      x: 48,
      y: 684,
      w: 16,
      h: 22
    },
    teleporter: {
      x: 96,
      y: 145,
      w: 16,
      h: 16
    },
    azureasteroidairport: {
      x: 64,
      y: 684,
      w: 16,
      h: 18
    },
    azureasteroidbase: {
      x: 80,
      y: 684,
      w: 16,
      h: 25
    },
    azureasteroidcity: {
      x: 96,
      y: 684,
      w: 16,
      h: 22
    },
    azureasteroidcomtower: {
      x: 112,
      y: 684,
      w: 16,
      h: 25
    },
    azureasteroidhq: {
      x: 128,
      y: 684,
      w: 16,
      h: 31
    },
    azureasteroidlab: {
      x: 144,
      y: 684,
      w: 16,
      h: 24
    },
    azureasteroidport: {
      x: 160,
      y: 684,
      w: 16,
      h: 22
    },
    noireclipseairport: {
      x: 176,
      y: 684,
      w: 16,
      h: 18
    },
    noireclipsebase: {
      x: 192,
      y: 684,
      w: 16,
      h: 25
    },
    noireclipsecity: {
      x: 208,
      y: 684,
      w: 16,
      h: 22
    },
    noireclipsecomtower: {
      x: 224,
      y: 684,
      w: 16,
      h: 25
    },
    noireclipsehq: {
      x: 240,
      y: 684,
      w: 16,
      h: 31
    },
    noireclipselab: {
      x: 256,
      y: 684,
      w: 16,
      h: 24
    },
    noireclipseport: {
      x: 272,
      y: 684,
      w: 16,
      h: 22
    },
    silverclawairport: {
      x: 288,
      y: 684,
      w: 16,
      h: 18
    },
    silverclawbase: {
      x: 304,
      y: 684,
      w: 16,
      h: 25
    },
    silverclawcity: {
      x: 320,
      y: 684,
      w: 16,
      h: 22
    },
    silverclawcomtower: {
      x: 336,
      y: 684,
      w: 16,
      h: 25
    },
    silverclawhq: {
      x: 352,
      y: 684,
      w: 16,
      h: 32
    },
    silverclawlab: {
      x: 368,
      y: 684,
      w: 16,
      h: 24
    },
    silverclawport: {
      x: 384,
      y: 684,
      w: 16,
      h: 22
    },
    minimountain: {
      x: 400,
      y: 684,
      w: 16,
      h: 16
    },
    shoales: {
      x: 464,
      y: 145,
      w: 16,
      h: 16
    },
    shoalsw: {
      x: 480,
      y: 145,
      w: 16,
      h: 16
    },
    shoalwn: {
      x: 496,
      y: 145,
      w: 16,
      h: 16
    },
    shoalne: {
      x: 0,
      y: 177,
      w: 16,
      h: 16
    },
    shoal0: {
      x: 16,
      y: 177,
      w: 16,
      h: 16
    },
    shoal1: {
      x: 32,
      y: 177,
      w: 16,
      h: 16
    },
    shoal2: {
      x: 48,
      y: 177,
      w: 16,
      h: 16
    },
    shoal3: {
      x: 64,
      y: 177,
      w: 16,
      h: 16
    },
    shoal4: {
      x: 80,
      y: 177,
      w: 16,
      h: 16
    },
    shoal5: {
      x: 96,
      y: 177,
      w: 16,
      h: 16
    },
    shoal6: {
      x: 112,
      y: 177,
      w: 16,
      h: 16
    },
    shoal7: {
      x: 128,
      y: 177,
      w: 16,
      h: 16
    },
    shoal8: {
      x: 144,
      y: 177,
      w: 16,
      h: 16
    },
    shoal9: {
      x: 160,
      y: 177,
      w: 16,
      h: 16
    },
    shoal10: {
      x: 176,
      y: 177,
      w: 16,
      h: 16
    },
    shoal11: {
      x: 192,
      y: 177,
      w: 16,
      h: 16
    },
    shoal12: {
      x: 208,
      y: 177,
      w: 16,
      h: 16
    },
    shoal13: {
      x: 224,
      y: 177,
      w: 16,
      h: 16
    },
    shoal14: {
      x: 240,
      y: 177,
      w: 16,
      h: 16
    },
    shoal15: {
      x: 256,
      y: 177,
      w: 16,
      h: 16
    },
    shoal16: {
      x: 272,
      y: 177,
      w: 16,
      h: 16
    },
    shoal17: {
      x: 288,
      y: 177,
      w: 16,
      h: 16
    },
    shoal18: {
      x: 304,
      y: 177,
      w: 16,
      h: 16
    },
    shoal19: {
      x: 320,
      y: 177,
      w: 16,
      h: 16
    },
    shoal20: {
      x: 336,
      y: 177,
      w: 16,
      h: 16
    },
    shoal21: {
      x: 352,
      y: 177,
      w: 16,
      h: 16
    },
    shoal22: {
      x: 368,
      y: 177,
      w: 16,
      h: 16
    },
    shoal23: {
      x: 384,
      y: 177,
      w: 16,
      h: 16
    },
    shoal24: {
      x: 400,
      y: 177,
      w: 16,
      h: 16
    },
    shoal25: {
      x: 416,
      y: 177,
      w: 16,
      h: 16
    },
    shoal26: {
      x: 432,
      y: 177,
      w: 16,
      h: 16
    },
    shoal27: {
      x: 448,
      y: 177,
      w: 16,
      h: 16
    },
    shoal28: {
      x: 464,
      y: 177,
      w: 16,
      h: 16
    },
    shoal29: {
      x: 480,
      y: 177,
      w: 16,
      h: 16
    },
    shoal30: {
      x: 496,
      y: 177,
      w: 16,
      h: 16
    },
    shoal31: {
      x: 0,
      y: 193,
      w: 16,
      h: 16
    },
    shoal32: {
      x: 16,
      y: 193,
      w: 16,
      h: 16
    },
    shoal33: {
      x: 32,
      y: 193,
      w: 16,
      h: 16
    },
    shoal34: {
      x: 48,
      y: 193,
      w: 16,
      h: 16
    },
    shoal35: {
      x: 64,
      y: 193,
      w: 16,
      h: 16
    },
    shoal36: {
      x: 80,
      y: 193,
      w: 16,
      h: 16
    },
    shoal37: {
      x: 96,
      y: 193,
      w: 16,
      h: 16
    },
    shoal38: {
      x: 112,
      y: 193,
      w: 16,
      h: 16
    },
    shoal39: {
      x: 128,
      y: 193,
      w: 16,
      h: 16
    },
    shoal40: {
      x: 144,
      y: 193,
      w: 16,
      h: 16
    },
    shoal41: {
      x: 160,
      y: 193,
      w: 16,
      h: 16
    },
    shoal42: {
      x: 176,
      y: 193,
      w: 16,
      h: 16
    },
    shoal43: {
      x: 192,
      y: 193,
      w: 16,
      h: 16
    },
    shoal44: {
      x: 208,
      y: 193,
      w: 16,
      h: 16
    },
    shoal45: {
      x: 224,
      y: 193,
      w: 16,
      h: 16
    },
    shoal46: {
      x: 240,
      y: 193,
      w: 16,
      h: 16
    },
    shoal47: {
      x: 256,
      y: 193,
      w: 16,
      h: 16
    },
    shoal48: {
      x: 272,
      y: 193,
      w: 16,
      h: 16
    },
    shoal49: {
      x: 288,
      y: 193,
      w: 16,
      h: 16
    },
    shoal50: {
      x: 304,
      y: 193,
      w: 16,
      h: 16
    },
    shoal51: {
      x: 320,
      y: 193,
      w: 16,
      h: 16
    },
    shoal52: {
      x: 336,
      y: 193,
      w: 16,
      h: 16
    },
    shoal53: {
      x: 352,
      y: 193,
      w: 16,
      h: 16
    },
    shoal54: {
      x: 368,
      y: 193,
      w: 16,
      h: 16
    },
    shoal55: {
      x: 384,
      y: 193,
      w: 16,
      h: 16
    },
    shoal56: {
      x: 400,
      y: 193,
      w: 16,
      h: 16
    },
    shoal57: {
      x: 416,
      y: 193,
      w: 16,
      h: 16
    },
    shoal58: {
      x: 432,
      y: 193,
      w: 16,
      h: 16
    },
    shoal59: {
      x: 448,
      y: 193,
      w: 16,
      h: 16
    },
    shoal60: {
      x: 464,
      y: 193,
      w: 16,
      h: 16
    },
    shoal61: {
      x: 480,
      y: 193,
      w: 16,
      h: 16
    },
    shoal62: {
      x: 496,
      y: 193,
      w: 16,
      h: 16
    },
    shoal63: {
      x: 0,
      y: 209,
      w: 16,
      h: 16
    },
    shoal64: {
      x: 16,
      y: 209,
      w: 16,
      h: 16
    },
    shoal65: {
      x: 32,
      y: 209,
      w: 16,
      h: 16
    },
    shoal66: {
      x: 48,
      y: 209,
      w: 16,
      h: 16
    },
    shoal67: {
      x: 64,
      y: 209,
      w: 16,
      h: 16
    },
    shoal68: {
      x: 80,
      y: 209,
      w: 16,
      h: 16
    },
    shoal69: {
      x: 96,
      y: 209,
      w: 16,
      h: 16
    },
    shoal70: {
      x: 112,
      y: 209,
      w: 16,
      h: 16
    },
    shoal71: {
      x: 128,
      y: 209,
      w: 16,
      h: 16
    },
    shoal72: {
      x: 144,
      y: 209,
      w: 16,
      h: 16
    },
    shoal73: {
      x: 160,
      y: 209,
      w: 16,
      h: 16
    },
    shoal74: {
      x: 176,
      y: 209,
      w: 16,
      h: 16
    },
    shoal75: {
      x: 192,
      y: 209,
      w: 16,
      h: 16
    },
    shoal76: {
      x: 208,
      y: 209,
      w: 16,
      h: 16
    },
    shoal77: {
      x: 224,
      y: 209,
      w: 16,
      h: 16
    },
    shoal78: {
      x: 240,
      y: 209,
      w: 16,
      h: 16
    },
    shoal79: {
      x: 256,
      y: 209,
      w: 16,
      h: 16
    },
    shoal80: {
      x: 272,
      y: 209,
      w: 16,
      h: 16
    },
    sea0: {
      x: 288,
      y: 209,
      w: 16,
      h: 16
    },
    sea1: {
      x: 304,
      y: 209,
      w: 16,
      h: 16
    },
    sea2: {
      x: 320,
      y: 209,
      w: 16,
      h: 16
    },
    sea4: {
      x: 336,
      y: 209,
      w: 16,
      h: 16
    },
    sea5: {
      x: 352,
      y: 209,
      w: 16,
      h: 16
    },
    sea8: {
      x: 368,
      y: 209,
      w: 16,
      h: 16
    },
    sea9: {
      x: 384,
      y: 209,
      w: 16,
      h: 16
    },
    sea10: {
      x: 400,
      y: 209,
      w: 16,
      h: 16
    },
    sea16: {
      x: 416,
      y: 209,
      w: 16,
      h: 16
    },
    sea17: {
      x: 432,
      y: 209,
      w: 16,
      h: 16
    },
    sea18: {
      x: 448,
      y: 209,
      w: 16,
      h: 16
    },
    sea20: {
      x: 464,
      y: 209,
      w: 16,
      h: 16
    },
    sea21: {
      x: 480,
      y: 209,
      w: 16,
      h: 16
    },
    sea32: {
      x: 496,
      y: 209,
      w: 16,
      h: 16
    },
    sea33: {
      x: 0,
      y: 225,
      w: 16,
      h: 16
    },
    sea34: {
      x: 16,
      y: 225,
      w: 16,
      h: 16
    },
    sea36: {
      x: 32,
      y: 225,
      w: 16,
      h: 16
    },
    sea37: {
      x: 48,
      y: 225,
      w: 16,
      h: 16
    },
    sea40: {
      x: 64,
      y: 225,
      w: 16,
      h: 16
    },
    sea41: {
      x: 80,
      y: 225,
      w: 16,
      h: 16
    },
    sea42: {
      x: 96,
      y: 225,
      w: 16,
      h: 16
    },
    sea64: {
      x: 112,
      y: 225,
      w: 16,
      h: 16
    },
    sea65: {
      x: 128,
      y: 225,
      w: 16,
      h: 16
    },
    sea66: {
      x: 144,
      y: 225,
      w: 16,
      h: 16
    },
    sea68: {
      x: 160,
      y: 225,
      w: 16,
      h: 16
    },
    sea69: {
      x: 176,
      y: 225,
      w: 16,
      h: 16
    },
    sea72: {
      x: 192,
      y: 225,
      w: 16,
      h: 16
    },
    sea73: {
      x: 208,
      y: 225,
      w: 16,
      h: 16
    },
    sea74: {
      x: 224,
      y: 225,
      w: 16,
      h: 16
    },
    sea80: {
      x: 240,
      y: 225,
      w: 16,
      h: 16
    },
    sea81: {
      x: 256,
      y: 225,
      w: 16,
      h: 16
    },
    sea82: {
      x: 272,
      y: 225,
      w: 16,
      h: 16
    },
    sea84: {
      x: 288,
      y: 225,
      w: 16,
      h: 16
    },
    sea85: {
      x: 304,
      y: 225,
      w: 16,
      h: 16
    },
    sea128: {
      x: 320,
      y: 225,
      w: 16,
      h: 16
    },
    sea130: {
      x: 336,
      y: 225,
      w: 16,
      h: 16
    },
    sea132: {
      x: 352,
      y: 225,
      w: 16,
      h: 16
    },
    sea136: {
      x: 368,
      y: 225,
      w: 16,
      h: 16
    },
    sea138: {
      x: 384,
      y: 225,
      w: 16,
      h: 16
    },
    sea144: {
      x: 400,
      y: 225,
      w: 16,
      h: 16
    },
    sea146: {
      x: 416,
      y: 225,
      w: 16,
      h: 16
    },
    sea148: {
      x: 432,
      y: 225,
      w: 16,
      h: 16
    },
    sea160: {
      x: 448,
      y: 225,
      w: 16,
      h: 16
    },
    sea162: {
      x: 464,
      y: 225,
      w: 16,
      h: 16
    },
    sea164: {
      x: 480,
      y: 225,
      w: 16,
      h: 16
    },
    sea168: {
      x: 496,
      y: 225,
      w: 16,
      h: 16
    },
    sea170: {
      x: 0,
      y: 241,
      w: 16,
      h: 16
    }
  },
  rain: {
    plain: {
      x: 416,
      y: 684,
      w: 16,
      h: 16
    },
    mountain: {
      x: 482,
      y: 539,
      w: 16,
      h: 21
    },
    wood: {
      x: 0,
      y: 560,
      w: 16,
      h: 16
    },
    hriver: {
      x: 64,
      y: 241,
      w: 16,
      h: 16
    },
    vriver: {
      x: 80,
      y: 241,
      w: 16,
      h: 16
    },
    criver: {
      x: 96,
      y: 241,
      w: 16,
      h: 16
    },
    esriver: {
      x: 112,
      y: 241,
      w: 16,
      h: 16
    },
    swriver: {
      x: 128,
      y: 241,
      w: 16,
      h: 16
    },
    wnriver: {
      x: 144,
      y: 241,
      w: 16,
      h: 16
    },
    neriver: {
      x: 160,
      y: 241,
      w: 16,
      h: 16
    },
    eswriver: {
      x: 176,
      y: 241,
      w: 16,
      h: 16
    },
    swnriver: {
      x: 192,
      y: 241,
      w: 16,
      h: 16
    },
    wneriver: {
      x: 208,
      y: 241,
      w: 16,
      h: 16
    },
    nesriver: {
      x: 224,
      y: 241,
      w: 16,
      h: 16
    },
    hroad: {
      x: 432,
      y: 684,
      w: 16,
      h: 16
    },
    vroad: {
      x: 448,
      y: 684,
      w: 16,
      h: 16
    },
    croad: {
      x: 464,
      y: 684,
      w: 16,
      h: 16
    },
    esroad: {
      x: 480,
      y: 684,
      w: 16,
      h: 16
    },
    swroad: {
      x: 496,
      y: 684,
      w: 16,
      h: 16
    },
    wnroad: {
      x: 0,
      y: 716,
      w: 16,
      h: 16
    },
    neroad: {
      x: 16,
      y: 716,
      w: 16,
      h: 16
    },
    eswroad: {
      x: 32,
      y: 716,
      w: 16,
      h: 16
    },
    swnroad: {
      x: 48,
      y: 716,
      w: 16,
      h: 16
    },
    wneroad: {
      x: 64,
      y: 716,
      w: 16,
      h: 16
    },
    nesroad: {
      x: 80,
      y: 716,
      w: 16,
      h: 16
    },
    hbridge: {
      x: 96,
      y: 716,
      w: 16,
      h: 16
    },
    vbridge: {
      x: 112,
      y: 716,
      w: 16,
      h: 16
    },
    hshoal: {
      x: 432,
      y: 0,
      w: 16,
      h: 16
    },
    hshoaln: {
      x: 448,
      y: 0,
      w: 16,
      h: 16
    },
    vshoal: {
      x: 464,
      y: 0,
      w: 16,
      h: 16
    },
    vshoale: {
      x: 480,
      y: 0,
      w: 16,
      h: 16
    },
    reef: {
      x: 496,
      y: 0,
      w: 16,
      h: 16
    },
    neutralcity: {
      x: 224,
      y: 560,
      w: 16,
      h: 22
    },
    neutralbase: {
      x: 240,
      y: 560,
      w: 16,
      h: 25
    },
    neutralairport: {
      x: 256,
      y: 560,
      w: 16,
      h: 18
    },
    neutralport: {
      x: 272,
      y: 560,
      w: 16,
      h: 22
    },
    orangestarcity: {
      x: 288,
      y: 560,
      w: 16,
      h: 22
    },
    orangestarbase: {
      x: 304,
      y: 560,
      w: 16,
      h: 25
    },
    orangestarairport: {
      x: 320,
      y: 560,
      w: 16,
      h: 18
    },
    orangestarport: {
      x: 336,
      y: 560,
      w: 16,
      h: 22
    },
    orangestarhq: {
      x: 352,
      y: 560,
      w: 16,
      h: 31
    },
    bluemooncity: {
      x: 368,
      y: 560,
      w: 16,
      h: 22
    },
    bluemoonbase: {
      x: 384,
      y: 560,
      w: 16,
      h: 25
    },
    bluemoonairport: {
      x: 400,
      y: 560,
      w: 16,
      h: 18
    },
    bluemoonport: {
      x: 416,
      y: 560,
      w: 16,
      h: 22
    },
    bluemoonhq: {
      x: 432,
      y: 560,
      w: 16,
      h: 31
    },
    greenearthcity: {
      x: 448,
      y: 560,
      w: 16,
      h: 22
    },
    greenearthbase: {
      x: 464,
      y: 560,
      w: 16,
      h: 25
    },
    greenearthairport: {
      x: 480,
      y: 560,
      w: 16,
      h: 18
    },
    greenearthport: {
      x: 496,
      y: 560,
      w: 16,
      h: 22
    },
    greenearthhq: {
      x: 0,
      y: 591,
      w: 16,
      h: 31
    },
    yellowcometcity: {
      x: 16,
      y: 591,
      w: 16,
      h: 22
    },
    yellowcometbase: {
      x: 32,
      y: 591,
      w: 16,
      h: 25
    },
    yellowcometairport: {
      x: 48,
      y: 591,
      w: 16,
      h: 18
    },
    yellowcometport: {
      x: 64,
      y: 591,
      w: 16,
      h: 22
    },
    yellowcomethq: {
      x: 80,
      y: 591,
      w: 16,
      h: 31
    },
    redfirecity: {
      x: 96,
      y: 591,
      w: 16,
      h: 22
    },
    redfirebase: {
      x: 112,
      y: 591,
      w: 16,
      h: 25
    },
    redfireairport: {
      x: 128,
      y: 591,
      w: 16,
      h: 18
    },
    redfireport: {
      x: 144,
      y: 591,
      w: 16,
      h: 22
    },
    redfirehq: {
      x: 160,
      y: 591,
      w: 16,
      h: 31
    },
    greyskycity: {
      x: 176,
      y: 591,
      w: 16,
      h: 22
    },
    greyskybase: {
      x: 192,
      y: 591,
      w: 16,
      h: 25
    },
    greyskyairport: {
      x: 208,
      y: 591,
      w: 16,
      h: 18
    },
    greyskyport: {
      x: 224,
      y: 591,
      w: 16,
      h: 22
    },
    greyskyhq: {
      x: 240,
      y: 591,
      w: 16,
      h: 31
    },
    blackholecity: {
      x: 256,
      y: 591,
      w: 16,
      h: 22
    },
    blackholebase: {
      x: 272,
      y: 591,
      w: 16,
      h: 25
    },
    blackholeairport: {
      x: 288,
      y: 591,
      w: 16,
      h: 18
    },
    blackholeport: {
      x: 304,
      y: 591,
      w: 16,
      h: 22
    },
    blackholehq: {
      x: 320,
      y: 591,
      w: 16,
      h: 31
    },
    browndesertcity: {
      x: 336,
      y: 591,
      w: 16,
      h: 22
    },
    browndesertbase: {
      x: 352,
      y: 591,
      w: 16,
      h: 25
    },
    browndesertairport: {
      x: 368,
      y: 591,
      w: 16,
      h: 18
    },
    browndesertport: {
      x: 384,
      y: 591,
      w: 16,
      h: 22
    },
    browndeserthq: {
      x: 400,
      y: 591,
      w: 16,
      h: 31
    },
    vpipe: {
      x: 192,
      y: 52,
      w: 16,
      h: 16
    },
    hpipe: {
      x: 208,
      y: 52,
      w: 16,
      h: 16
    },
    nepipe: {
      x: 224,
      y: 52,
      w: 16,
      h: 16
    },
    espipe: {
      x: 240,
      y: 52,
      w: 16,
      h: 16
    },
    swpipe: {
      x: 256,
      y: 52,
      w: 16,
      h: 16
    },
    wnpipe: {
      x: 272,
      y: 52,
      w: 16,
      h: 16
    },
    npipeend: {
      x: 288,
      y: 52,
      w: 16,
      h: 16
    },
    epipeend: {
      x: 304,
      y: 52,
      w: 16,
      h: 16
    },
    spipeend: {
      x: 320,
      y: 52,
      w: 16,
      h: 16
    },
    wpipeend: {
      x: 336,
      y: 52,
      w: 16,
      h: 16
    },
    missilesilo: {
      x: 352,
      y: 52,
      w: 16,
      h: 24
    },
    missilesiloempty: {
      x: 368,
      y: 52,
      w: 16,
      h: 16
    },
    hpipeseam: {
      x: 384,
      y: 52,
      w: 16,
      h: 16
    },
    vpipeseam: {
      x: 400,
      y: 52,
      w: 16,
      h: 16
    },
    hpiperubble: {
      x: 416,
      y: 52,
      w: 16,
      h: 16
    },
    vpiperubble: {
      x: 432,
      y: 52,
      w: 16,
      h: 16
    },
    amberblazeairport: {
      x: 416,
      y: 591,
      w: 16,
      h: 18
    },
    amberblazebase: {
      x: 432,
      y: 591,
      w: 16,
      h: 25
    },
    amberblazecity: {
      x: 448,
      y: 591,
      w: 16,
      h: 22
    },
    amberblazehq: {
      x: 464,
      y: 591,
      w: 16,
      h: 31
    },
    amberblazeport: {
      x: 480,
      y: 591,
      w: 16,
      h: 22
    },
    jadesunairport: {
      x: 496,
      y: 591,
      w: 16,
      h: 18
    },
    jadesunbase: {
      x: 0,
      y: 622,
      w: 16,
      h: 25
    },
    jadesuncity: {
      x: 16,
      y: 622,
      w: 16,
      h: 22
    },
    jadesunhq: {
      x: 32,
      y: 622,
      w: 16,
      h: 31
    },
    jadesunport: {
      x: 48,
      y: 622,
      w: 16,
      h: 22
    },
    amberblazecomtower: {
      x: 64,
      y: 622,
      w: 16,
      h: 25
    },
    blackholecomtower: {
      x: 80,
      y: 622,
      w: 16,
      h: 25
    },
    bluemooncomtower: {
      x: 96,
      y: 622,
      w: 16,
      h: 25
    },
    browndesertcomtower: {
      x: 112,
      y: 622,
      w: 16,
      h: 25
    },
    greenearthcomtower: {
      x: 128,
      y: 622,
      w: 16,
      h: 25
    },
    jadesuncomtower: {
      x: 144,
      y: 622,
      w: 16,
      h: 25
    },
    neutralcomtower: {
      x: 160,
      y: 622,
      w: 16,
      h: 25
    },
    orangestarcomtower: {
      x: 176,
      y: 622,
      w: 16,
      h: 25
    },
    redfirecomtower: {
      x: 192,
      y: 622,
      w: 16,
      h: 25
    },
    yellowcometcomtower: {
      x: 208,
      y: 622,
      w: 16,
      h: 25
    },
    greyskycomtower: {
      x: 224,
      y: 622,
      w: 16,
      h: 25
    },
    amberblazelab: {
      x: 240,
      y: 622,
      w: 16,
      h: 24
    },
    blackholelab: {
      x: 256,
      y: 622,
      w: 16,
      h: 24
    },
    bluemoonlab: {
      x: 272,
      y: 622,
      w: 16,
      h: 24
    },
    browndesertlab: {
      x: 288,
      y: 622,
      w: 16,
      h: 24
    },
    greenearthlab: {
      x: 304,
      y: 622,
      w: 16,
      h: 24
    },
    greyskylab: {
      x: 320,
      y: 622,
      w: 16,
      h: 24
    },
    jadesunlab: {
      x: 336,
      y: 622,
      w: 16,
      h: 24
    },
    neutrallab: {
      x: 352,
      y: 622,
      w: 16,
      h: 24
    },
    orangestarlab: {
      x: 368,
      y: 622,
      w: 16,
      h: 24
    },
    redfirelab: {
      x: 384,
      y: 622,
      w: 16,
      h: 24
    },
    yellowcometlab: {
      x: 400,
      y: 622,
      w: 16,
      h: 24
    },
    cobalticeairport: {
      x: 416,
      y: 622,
      w: 16,
      h: 18
    },
    cobalticebase: {
      x: 432,
      y: 622,
      w: 16,
      h: 25
    },
    cobalticecity: {
      x: 448,
      y: 622,
      w: 16,
      h: 22
    },
    cobalticecomtower: {
      x: 464,
      y: 622,
      w: 16,
      h: 25
    },
    cobalticehq: {
      x: 480,
      y: 622,
      w: 16,
      h: 29
    },
    cobalticelab: {
      x: 496,
      y: 622,
      w: 16,
      h: 24
    },
    cobalticeport: {
      x: 0,
      y: 653,
      w: 16,
      h: 22
    },
    pinkcosmosairport: {
      x: 16,
      y: 653,
      w: 16,
      h: 18
    },
    pinkcosmosbase: {
      x: 32,
      y: 653,
      w: 16,
      h: 25
    },
    pinkcosmoscity: {
      x: 48,
      y: 653,
      w: 16,
      h: 22
    },
    pinkcosmoscomtower: {
      x: 64,
      y: 653,
      w: 16,
      h: 25
    },
    pinkcosmoshq: {
      x: 80,
      y: 653,
      w: 16,
      h: 31
    },
    pinkcosmoslab: {
      x: 96,
      y: 653,
      w: 16,
      h: 24
    },
    pinkcosmosport: {
      x: 112,
      y: 653,
      w: 16,
      h: 22
    },
    tealgalaxyairport: {
      x: 128,
      y: 653,
      w: 16,
      h: 18
    },
    tealgalaxybase: {
      x: 144,
      y: 653,
      w: 16,
      h: 25
    },
    tealgalaxycity: {
      x: 160,
      y: 653,
      w: 16,
      h: 22
    },
    tealgalaxycomtower: {
      x: 176,
      y: 653,
      w: 16,
      h: 25
    },
    tealgalaxyhq: {
      x: 192,
      y: 653,
      w: 16,
      h: 31
    },
    tealgalaxylab: {
      x: 208,
      y: 653,
      w: 16,
      h: 24
    },
    tealgalaxyport: {
      x: 224,
      y: 653,
      w: 16,
      h: 22
    },
    purplelightningairport: {
      x: 240,
      y: 653,
      w: 16,
      h: 18
    },
    purplelightningbase: {
      x: 256,
      y: 653,
      w: 16,
      h: 25
    },
    purplelightningcity: {
      x: 272,
      y: 653,
      w: 16,
      h: 22
    },
    purplelightningcomtower: {
      x: 288,
      y: 653,
      w: 16,
      h: 25
    },
    purplelightninghq: {
      x: 304,
      y: 653,
      w: 16,
      h: 31
    },
    purplelightninglab: {
      x: 320,
      y: 653,
      w: 16,
      h: 24
    },
    purplelightningport: {
      x: 336,
      y: 653,
      w: 16,
      h: 22
    },
    acidrainairport: {
      x: 352,
      y: 653,
      w: 16,
      h: 18
    },
    acidrainbase: {
      x: 368,
      y: 653,
      w: 16,
      h: 25
    },
    acidraincity: {
      x: 384,
      y: 653,
      w: 16,
      h: 22
    },
    acidraincomtower: {
      x: 400,
      y: 653,
      w: 16,
      h: 25
    },
    acidrainhq: {
      x: 416,
      y: 653,
      w: 16,
      h: 31
    },
    acidrainlab: {
      x: 432,
      y: 653,
      w: 16,
      h: 24
    },
    acidrainport: {
      x: 448,
      y: 653,
      w: 16,
      h: 22
    },
    whitenovaairport: {
      x: 464,
      y: 653,
      w: 16,
      h: 18
    },
    whitenovabase: {
      x: 480,
      y: 653,
      w: 16,
      h: 25
    },
    whitenovacity: {
      x: 496,
      y: 653,
      w: 16,
      h: 22
    },
    whitenovacomtower: {
      x: 0,
      y: 684,
      w: 16,
      h: 25
    },
    whitenovahq: {
      x: 16,
      y: 684,
      w: 16,
      h: 31
    },
    whitenovalab: {
      x: 32,
      y: 684,
      w: 16,
      h: 24
    },
    whitenovaport: {
      x: 48,
      y: 684,
      w: 16,
      h: 22
    },
    teleporter: {
      x: 96,
      y: 145,
      w: 16,
      h: 16
    },
    azureasteroidairport: {
      x: 64,
      y: 684,
      w: 16,
      h: 18
    },
    azureasteroidbase: {
      x: 80,
      y: 684,
      w: 16,
      h: 25
    },
    azureasteroidcity: {
      x: 96,
      y: 684,
      w: 16,
      h: 22
    },
    azureasteroidcomtower: {
      x: 112,
      y: 684,
      w: 16,
      h: 25
    },
    azureasteroidhq: {
      x: 128,
      y: 684,
      w: 16,
      h: 31
    },
    azureasteroidlab: {
      x: 144,
      y: 684,
      w: 16,
      h: 24
    },
    azureasteroidport: {
      x: 160,
      y: 684,
      w: 16,
      h: 22
    },
    noireclipseairport: {
      x: 176,
      y: 684,
      w: 16,
      h: 18
    },
    noireclipsebase: {
      x: 192,
      y: 684,
      w: 16,
      h: 25
    },
    noireclipsecity: {
      x: 208,
      y: 684,
      w: 16,
      h: 22
    },
    noireclipsecomtower: {
      x: 224,
      y: 684,
      w: 16,
      h: 25
    },
    noireclipsehq: {
      x: 240,
      y: 684,
      w: 16,
      h: 31
    },
    noireclipselab: {
      x: 256,
      y: 684,
      w: 16,
      h: 24
    },
    noireclipseport: {
      x: 272,
      y: 684,
      w: 16,
      h: 22
    },
    silverclawairport: {
      x: 288,
      y: 684,
      w: 16,
      h: 18
    },
    silverclawbase: {
      x: 304,
      y: 684,
      w: 16,
      h: 25
    },
    silverclawcity: {
      x: 320,
      y: 684,
      w: 16,
      h: 22
    },
    silverclawcomtower: {
      x: 336,
      y: 684,
      w: 16,
      h: 25
    },
    silverclawhq: {
      x: 352,
      y: 684,
      w: 16,
      h: 32
    },
    silverclawlab: {
      x: 368,
      y: 684,
      w: 16,
      h: 24
    },
    silverclawport: {
      x: 384,
      y: 684,
      w: 16,
      h: 22
    },
    minimountain: {
      x: 400,
      y: 684,
      w: 16,
      h: 16
    },
    shoales: {
      x: 320,
      y: 241,
      w: 16,
      h: 16
    },
    shoalsw: {
      x: 336,
      y: 241,
      w: 16,
      h: 16
    },
    shoalwn: {
      x: 352,
      y: 241,
      w: 16,
      h: 16
    },
    shoalne: {
      x: 368,
      y: 241,
      w: 16,
      h: 16
    },
    shoal0: {
      x: 16,
      y: 177,
      w: 16,
      h: 16
    },
    shoal1: {
      x: 32,
      y: 177,
      w: 16,
      h: 16
    },
    shoal2: {
      x: 384,
      y: 241,
      w: 16,
      h: 16
    },
    shoal3: {
      x: 64,
      y: 177,
      w: 16,
      h: 16
    },
    shoal4: {
      x: 80,
      y: 177,
      w: 16,
      h: 16
    },
    shoal5: {
      x: 400,
      y: 241,
      w: 16,
      h: 16
    },
    shoal6: {
      x: 416,
      y: 241,
      w: 16,
      h: 16
    },
    shoal7: {
      x: 432,
      y: 241,
      w: 16,
      h: 16
    },
    shoal8: {
      x: 448,
      y: 241,
      w: 16,
      h: 16
    },
    shoal9: {
      x: 160,
      y: 177,
      w: 16,
      h: 16
    },
    shoal10: {
      x: 176,
      y: 177,
      w: 16,
      h: 16
    },
    shoal11: {
      x: 464,
      y: 241,
      w: 16,
      h: 16
    },
    shoal12: {
      x: 208,
      y: 177,
      w: 16,
      h: 16
    },
    shoal13: {
      x: 224,
      y: 177,
      w: 16,
      h: 16
    },
    shoal14: {
      x: 480,
      y: 241,
      w: 16,
      h: 16
    },
    shoal15: {
      x: 496,
      y: 241,
      w: 16,
      h: 16
    },
    shoal16: {
      x: 0,
      y: 262,
      w: 16,
      h: 16
    },
    shoal17: {
      x: 16,
      y: 262,
      w: 16,
      h: 16
    },
    shoal18: {
      x: 32,
      y: 262,
      w: 16,
      h: 16
    },
    shoal19: {
      x: 48,
      y: 262,
      w: 16,
      h: 16
    },
    shoal20: {
      x: 64,
      y: 262,
      w: 16,
      h: 16
    },
    shoal21: {
      x: 80,
      y: 262,
      w: 16,
      h: 16
    },
    shoal22: {
      x: 96,
      y: 262,
      w: 16,
      h: 16
    },
    shoal23: {
      x: 112,
      y: 262,
      w: 16,
      h: 16
    },
    shoal24: {
      x: 128,
      y: 262,
      w: 16,
      h: 16
    },
    shoal25: {
      x: 144,
      y: 262,
      w: 16,
      h: 16
    },
    shoal26: {
      x: 160,
      y: 262,
      w: 16,
      h: 16
    },
    shoal27: {
      x: 448,
      y: 177,
      w: 16,
      h: 16
    },
    shoal28: {
      x: 464,
      y: 177,
      w: 16,
      h: 16
    },
    shoal29: {
      x: 176,
      y: 262,
      w: 16,
      h: 16
    },
    shoal30: {
      x: 496,
      y: 177,
      w: 16,
      h: 16
    },
    shoal31: {
      x: 0,
      y: 193,
      w: 16,
      h: 16
    },
    shoal32: {
      x: 192,
      y: 262,
      w: 16,
      h: 16
    },
    shoal33: {
      x: 208,
      y: 262,
      w: 16,
      h: 16
    },
    shoal34: {
      x: 224,
      y: 262,
      w: 16,
      h: 16
    },
    shoal35: {
      x: 240,
      y: 262,
      w: 16,
      h: 16
    },
    shoal36: {
      x: 80,
      y: 193,
      w: 16,
      h: 16
    },
    shoal37: {
      x: 96,
      y: 193,
      w: 16,
      h: 16
    },
    shoal38: {
      x: 256,
      y: 262,
      w: 16,
      h: 16
    },
    shoal39: {
      x: 128,
      y: 193,
      w: 16,
      h: 16
    },
    shoal40: {
      x: 144,
      y: 193,
      w: 16,
      h: 16
    },
    shoal41: {
      x: 272,
      y: 262,
      w: 16,
      h: 16
    },
    shoal42: {
      x: 288,
      y: 262,
      w: 16,
      h: 16
    },
    shoal43: {
      x: 304,
      y: 262,
      w: 16,
      h: 16
    },
    shoal44: {
      x: 320,
      y: 262,
      w: 16,
      h: 16
    },
    shoal45: {
      x: 336,
      y: 262,
      w: 16,
      h: 16
    },
    shoal46: {
      x: 352,
      y: 262,
      w: 16,
      h: 16
    },
    shoal47: {
      x: 368,
      y: 262,
      w: 16,
      h: 16
    },
    shoal48: {
      x: 384,
      y: 262,
      w: 16,
      h: 16
    },
    shoal49: {
      x: 400,
      y: 262,
      w: 16,
      h: 16
    },
    shoal50: {
      x: 416,
      y: 262,
      w: 16,
      h: 16
    },
    shoal51: {
      x: 432,
      y: 262,
      w: 16,
      h: 16
    },
    shoal52: {
      x: 448,
      y: 262,
      w: 16,
      h: 16
    },
    shoal53: {
      x: 464,
      y: 262,
      w: 16,
      h: 16
    },
    shoal54: {
      x: 480,
      y: 262,
      w: 16,
      h: 16
    },
    shoal55: {
      x: 496,
      y: 262,
      w: 16,
      h: 16
    },
    shoal56: {
      x: 0,
      y: 278,
      w: 16,
      h: 16
    },
    shoal57: {
      x: 16,
      y: 278,
      w: 16,
      h: 16
    },
    shoal58: {
      x: 32,
      y: 278,
      w: 16,
      h: 16
    },
    shoal59: {
      x: 48,
      y: 278,
      w: 16,
      h: 16
    },
    shoal60: {
      x: 64,
      y: 278,
      w: 16,
      h: 16
    },
    shoal61: {
      x: 80,
      y: 278,
      w: 16,
      h: 16
    },
    shoal62: {
      x: 96,
      y: 278,
      w: 16,
      h: 16
    },
    shoal63: {
      x: 112,
      y: 278,
      w: 16,
      h: 16
    },
    shoal64: {
      x: 128,
      y: 278,
      w: 16,
      h: 16
    },
    shoal65: {
      x: 144,
      y: 278,
      w: 16,
      h: 16
    },
    shoal66: {
      x: 160,
      y: 278,
      w: 16,
      h: 16
    },
    shoal67: {
      x: 176,
      y: 278,
      w: 16,
      h: 16
    },
    shoal68: {
      x: 192,
      y: 278,
      w: 16,
      h: 16
    },
    shoal69: {
      x: 208,
      y: 278,
      w: 16,
      h: 16
    },
    shoal70: {
      x: 224,
      y: 278,
      w: 16,
      h: 16
    },
    shoal71: {
      x: 240,
      y: 278,
      w: 16,
      h: 16
    },
    shoal72: {
      x: 256,
      y: 278,
      w: 16,
      h: 16
    },
    shoal73: {
      x: 272,
      y: 278,
      w: 16,
      h: 16
    },
    shoal74: {
      x: 288,
      y: 278,
      w: 16,
      h: 16
    },
    shoal75: {
      x: 304,
      y: 278,
      w: 16,
      h: 16
    },
    shoal76: {
      x: 320,
      y: 278,
      w: 16,
      h: 16
    },
    shoal77: {
      x: 336,
      y: 278,
      w: 16,
      h: 16
    },
    shoal78: {
      x: 352,
      y: 278,
      w: 16,
      h: 16
    },
    shoal79: {
      x: 368,
      y: 278,
      w: 16,
      h: 16
    },
    shoal80: {
      x: 384,
      y: 278,
      w: 16,
      h: 16
    },
    sea0: {
      x: 288,
      y: 209,
      w: 16,
      h: 16
    },
    sea1: {
      x: 400,
      y: 278,
      w: 16,
      h: 16
    },
    sea2: {
      x: 416,
      y: 278,
      w: 16,
      h: 16
    },
    sea4: {
      x: 432,
      y: 278,
      w: 16,
      h: 16
    },
    sea5: {
      x: 448,
      y: 278,
      w: 16,
      h: 16
    },
    sea8: {
      x: 464,
      y: 278,
      w: 16,
      h: 16
    },
    sea9: {
      x: 480,
      y: 278,
      w: 16,
      h: 16
    },
    sea10: {
      x: 496,
      y: 278,
      w: 16,
      h: 16
    },
    sea16: {
      x: 0,
      y: 294,
      w: 16,
      h: 16
    },
    sea17: {
      x: 16,
      y: 294,
      w: 16,
      h: 16
    },
    sea18: {
      x: 32,
      y: 294,
      w: 16,
      h: 16
    },
    sea20: {
      x: 48,
      y: 294,
      w: 16,
      h: 16
    },
    sea21: {
      x: 64,
      y: 294,
      w: 16,
      h: 16
    },
    sea32: {
      x: 80,
      y: 294,
      w: 16,
      h: 16
    },
    sea33: {
      x: 96,
      y: 294,
      w: 16,
      h: 16
    },
    sea34: {
      x: 112,
      y: 294,
      w: 16,
      h: 16
    },
    sea36: {
      x: 128,
      y: 294,
      w: 16,
      h: 16
    },
    sea37: {
      x: 144,
      y: 294,
      w: 16,
      h: 16
    },
    sea40: {
      x: 160,
      y: 294,
      w: 16,
      h: 16
    },
    sea41: {
      x: 176,
      y: 294,
      w: 16,
      h: 16
    },
    sea42: {
      x: 192,
      y: 294,
      w: 16,
      h: 16
    },
    sea64: {
      x: 208,
      y: 294,
      w: 16,
      h: 16
    },
    sea65: {
      x: 224,
      y: 294,
      w: 16,
      h: 16
    },
    sea66: {
      x: 240,
      y: 294,
      w: 16,
      h: 16
    },
    sea68: {
      x: 256,
      y: 294,
      w: 16,
      h: 16
    },
    sea69: {
      x: 272,
      y: 294,
      w: 16,
      h: 16
    },
    sea72: {
      x: 288,
      y: 294,
      w: 16,
      h: 16
    },
    sea73: {
      x: 304,
      y: 294,
      w: 16,
      h: 16
    },
    sea74: {
      x: 320,
      y: 294,
      w: 16,
      h: 16
    },
    sea80: {
      x: 336,
      y: 294,
      w: 16,
      h: 16
    },
    sea81: {
      x: 352,
      y: 294,
      w: 16,
      h: 16
    },
    sea82: {
      x: 368,
      y: 294,
      w: 16,
      h: 16
    },
    sea84: {
      x: 384,
      y: 294,
      w: 16,
      h: 16
    },
    sea85: {
      x: 400,
      y: 294,
      w: 16,
      h: 16
    },
    sea128: {
      x: 416,
      y: 294,
      w: 16,
      h: 16
    },
    sea130: {
      x: 432,
      y: 294,
      w: 16,
      h: 16
    },
    sea132: {
      x: 448,
      y: 294,
      w: 16,
      h: 16
    },
    sea136: {
      x: 464,
      y: 294,
      w: 16,
      h: 16
    },
    sea138: {
      x: 480,
      y: 294,
      w: 16,
      h: 16
    },
    sea144: {
      x: 496,
      y: 294,
      w: 16,
      h: 16
    },
    sea146: {
      x: 0,
      y: 310,
      w: 16,
      h: 16
    },
    sea148: {
      x: 16,
      y: 310,
      w: 16,
      h: 16
    },
    sea160: {
      x: 32,
      y: 310,
      w: 16,
      h: 16
    },
    sea162: {
      x: 48,
      y: 310,
      w: 16,
      h: 16
    },
    sea164: {
      x: 64,
      y: 310,
      w: 16,
      h: 16
    },
    sea168: {
      x: 80,
      y: 310,
      w: 16,
      h: 16
    },
    sea170: {
      x: 96,
      y: 310,
      w: 16,
      h: 16
    }
  },
  snow: {
    plain: {
      x: 128,
      y: 716,
      w: 16,
      h: 16
    },
    mountain: {
      x: 144,
      y: 716,
      w: 16,
      h: 21
    },
    wood: {
      x: 160,
      y: 716,
      w: 16,
      h: 16
    },
    hriver: {
      x: 160,
      y: 310,
      w: 16,
      h: 16
    },
    vriver: {
      x: 176,
      y: 310,
      w: 16,
      h: 16
    },
    criver: {
      x: 192,
      y: 310,
      w: 16,
      h: 16
    },
    esriver: {
      x: 208,
      y: 310,
      w: 16,
      h: 16
    },
    swriver: {
      x: 224,
      y: 310,
      w: 16,
      h: 16
    },
    wnriver: {
      x: 240,
      y: 310,
      w: 16,
      h: 16
    },
    neriver: {
      x: 256,
      y: 310,
      w: 16,
      h: 16
    },
    eswriver: {
      x: 272,
      y: 310,
      w: 16,
      h: 16
    },
    swnriver: {
      x: 288,
      y: 310,
      w: 16,
      h: 16
    },
    wneriver: {
      x: 304,
      y: 310,
      w: 16,
      h: 16
    },
    nesriver: {
      x: 320,
      y: 310,
      w: 16,
      h: 16
    },
    hroad: {
      x: 176,
      y: 716,
      w: 16,
      h: 16
    },
    vroad: {
      x: 192,
      y: 716,
      w: 16,
      h: 16
    },
    croad: {
      x: 208,
      y: 716,
      w: 16,
      h: 16
    },
    esroad: {
      x: 224,
      y: 716,
      w: 16,
      h: 16
    },
    swroad: {
      x: 240,
      y: 716,
      w: 16,
      h: 16
    },
    wnroad: {
      x: 256,
      y: 716,
      w: 16,
      h: 16
    },
    neroad: {
      x: 272,
      y: 716,
      w: 16,
      h: 16
    },
    eswroad: {
      x: 288,
      y: 716,
      w: 16,
      h: 16
    },
    swnroad: {
      x: 304,
      y: 716,
      w: 16,
      h: 16
    },
    wneroad: {
      x: 320,
      y: 716,
      w: 16,
      h: 16
    },
    nesroad: {
      x: 336,
      y: 716,
      w: 16,
      h: 16
    },
    hbridge: {
      x: 352,
      y: 716,
      w: 16,
      h: 16
    },
    vbridge: {
      x: 368,
      y: 716,
      w: 16,
      h: 16
    },
    hshoal: {
      x: 432,
      y: 0,
      w: 16,
      h: 16
    },
    hshoaln: {
      x: 448,
      y: 0,
      w: 16,
      h: 16
    },
    vshoal: {
      x: 464,
      y: 0,
      w: 16,
      h: 16
    },
    vshoale: {
      x: 480,
      y: 0,
      w: 16,
      h: 16
    },
    reef: {
      x: 496,
      y: 0,
      w: 16,
      h: 16
    },
    neutralcity: {
      x: 384,
      y: 716,
      w: 16,
      h: 22
    },
    neutralbase: {
      x: 400,
      y: 716,
      w: 16,
      h: 25
    },
    neutralairport: {
      x: 416,
      y: 716,
      w: 16,
      h: 18
    },
    neutralport: {
      x: 432,
      y: 716,
      w: 16,
      h: 22
    },
    orangestarcity: {
      x: 448,
      y: 716,
      w: 16,
      h: 22
    },
    orangestarbase: {
      x: 464,
      y: 716,
      w: 16,
      h: 25
    },
    orangestarairport: {
      x: 480,
      y: 716,
      w: 16,
      h: 18
    },
    orangestarport: {
      x: 496,
      y: 716,
      w: 16,
      h: 22
    },
    orangestarhq: {
      x: 0,
      y: 741,
      w: 16,
      h: 31
    },
    bluemooncity: {
      x: 16,
      y: 741,
      w: 16,
      h: 22
    },
    bluemoonbase: {
      x: 32,
      y: 741,
      w: 16,
      h: 25
    },
    bluemoonairport: {
      x: 48,
      y: 741,
      w: 16,
      h: 18
    },
    bluemoonport: {
      x: 64,
      y: 741,
      w: 16,
      h: 22
    },
    bluemoonhq: {
      x: 80,
      y: 741,
      w: 16,
      h: 31
    },
    greenearthcity: {
      x: 96,
      y: 741,
      w: 16,
      h: 22
    },
    greenearthbase: {
      x: 112,
      y: 741,
      w: 16,
      h: 25
    },
    greenearthairport: {
      x: 128,
      y: 741,
      w: 16,
      h: 18
    },
    greenearthport: {
      x: 144,
      y: 741,
      w: 16,
      h: 22
    },
    greenearthhq: {
      x: 160,
      y: 741,
      w: 16,
      h: 31
    },
    yellowcometcity: {
      x: 176,
      y: 741,
      w: 16,
      h: 22
    },
    yellowcometbase: {
      x: 192,
      y: 741,
      w: 16,
      h: 25
    },
    yellowcometairport: {
      x: 208,
      y: 741,
      w: 16,
      h: 18
    },
    yellowcometport: {
      x: 224,
      y: 741,
      w: 16,
      h: 22
    },
    yellowcomethq: {
      x: 240,
      y: 741,
      w: 16,
      h: 31
    },
    redfirecity: {
      x: 256,
      y: 741,
      w: 16,
      h: 22
    },
    redfirebase: {
      x: 272,
      y: 741,
      w: 16,
      h: 25
    },
    redfireairport: {
      x: 288,
      y: 741,
      w: 16,
      h: 18
    },
    redfireport: {
      x: 304,
      y: 741,
      w: 16,
      h: 22
    },
    redfirehq: {
      x: 320,
      y: 741,
      w: 16,
      h: 31
    },
    greyskycity: {
      x: 336,
      y: 741,
      w: 16,
      h: 22
    },
    greyskybase: {
      x: 352,
      y: 741,
      w: 16,
      h: 25
    },
    greyskyairport: {
      x: 368,
      y: 741,
      w: 16,
      h: 18
    },
    greyskyport: {
      x: 384,
      y: 741,
      w: 16,
      h: 22
    },
    greyskyhq: {
      x: 400,
      y: 741,
      w: 16,
      h: 31
    },
    blackholecity: {
      x: 416,
      y: 741,
      w: 16,
      h: 22
    },
    blackholebase: {
      x: 432,
      y: 741,
      w: 16,
      h: 25
    },
    blackholeairport: {
      x: 448,
      y: 741,
      w: 16,
      h: 18
    },
    blackholeport: {
      x: 464,
      y: 741,
      w: 16,
      h: 22
    },
    blackholehq: {
      x: 480,
      y: 741,
      w: 16,
      h: 31
    },
    browndesertcity: {
      x: 496,
      y: 741,
      w: 16,
      h: 22
    },
    browndesertbase: {
      x: 0,
      y: 772,
      w: 16,
      h: 25
    },
    browndesertairport: {
      x: 16,
      y: 772,
      w: 16,
      h: 18
    },
    browndesertport: {
      x: 32,
      y: 772,
      w: 16,
      h: 22
    },
    browndeserthq: {
      x: 48,
      y: 772,
      w: 16,
      h: 31
    },
    vpipe: {
      x: 192,
      y: 52,
      w: 16,
      h: 16
    },
    hpipe: {
      x: 208,
      y: 52,
      w: 16,
      h: 16
    },
    nepipe: {
      x: 224,
      y: 52,
      w: 16,
      h: 16
    },
    espipe: {
      x: 240,
      y: 52,
      w: 16,
      h: 16
    },
    swpipe: {
      x: 256,
      y: 52,
      w: 16,
      h: 16
    },
    wnpipe: {
      x: 272,
      y: 52,
      w: 16,
      h: 16
    },
    npipeend: {
      x: 288,
      y: 52,
      w: 16,
      h: 16
    },
    epipeend: {
      x: 304,
      y: 52,
      w: 16,
      h: 16
    },
    spipeend: {
      x: 320,
      y: 52,
      w: 16,
      h: 16
    },
    wpipeend: {
      x: 336,
      y: 52,
      w: 16,
      h: 16
    },
    missilesilo: {
      x: 352,
      y: 52,
      w: 16,
      h: 24
    },
    missilesiloempty: {
      x: 368,
      y: 52,
      w: 16,
      h: 16
    },
    hpipeseam: {
      x: 384,
      y: 52,
      w: 16,
      h: 16
    },
    vpipeseam: {
      x: 400,
      y: 52,
      w: 16,
      h: 16
    },
    hpiperubble: {
      x: 416,
      y: 52,
      w: 16,
      h: 16
    },
    vpiperubble: {
      x: 432,
      y: 52,
      w: 16,
      h: 16
    },
    amberblazeairport: {
      x: 64,
      y: 772,
      w: 16,
      h: 18
    },
    amberblazebase: {
      x: 80,
      y: 772,
      w: 16,
      h: 25
    },
    amberblazecity: {
      x: 96,
      y: 772,
      w: 16,
      h: 22
    },
    amberblazehq: {
      x: 112,
      y: 772,
      w: 16,
      h: 31
    },
    amberblazeport: {
      x: 128,
      y: 772,
      w: 16,
      h: 22
    },
    jadesunairport: {
      x: 144,
      y: 772,
      w: 16,
      h: 18
    },
    jadesunbase: {
      x: 160,
      y: 772,
      w: 16,
      h: 25
    },
    jadesuncity: {
      x: 176,
      y: 772,
      w: 16,
      h: 22
    },
    jadesunhq: {
      x: 192,
      y: 772,
      w: 16,
      h: 31
    },
    jadesunport: {
      x: 208,
      y: 772,
      w: 16,
      h: 22
    },
    amberblazecomtower: {
      x: 224,
      y: 772,
      w: 16,
      h: 25
    },
    blackholecomtower: {
      x: 240,
      y: 772,
      w: 16,
      h: 25
    },
    bluemooncomtower: {
      x: 256,
      y: 772,
      w: 16,
      h: 25
    },
    browndesertcomtower: {
      x: 272,
      y: 772,
      w: 16,
      h: 25
    },
    greenearthcomtower: {
      x: 288,
      y: 772,
      w: 16,
      h: 25
    },
    jadesuncomtower: {
      x: 304,
      y: 772,
      w: 16,
      h: 25
    },
    neutralcomtower: {
      x: 320,
      y: 772,
      w: 16,
      h: 25
    },
    orangestarcomtower: {
      x: 336,
      y: 772,
      w: 16,
      h: 25
    },
    redfirecomtower: {
      x: 352,
      y: 772,
      w: 16,
      h: 25
    },
    yellowcometcomtower: {
      x: 368,
      y: 772,
      w: 16,
      h: 25
    },
    greyskycomtower: {
      x: 384,
      y: 772,
      w: 16,
      h: 25
    },
    amberblazelab: {
      x: 400,
      y: 772,
      w: 16,
      h: 24
    },
    blackholelab: {
      x: 416,
      y: 772,
      w: 16,
      h: 24
    },
    bluemoonlab: {
      x: 432,
      y: 772,
      w: 16,
      h: 24
    },
    browndesertlab: {
      x: 448,
      y: 772,
      w: 16,
      h: 24
    },
    greenearthlab: {
      x: 464,
      y: 772,
      w: 16,
      h: 24
    },
    greyskylab: {
      x: 480,
      y: 772,
      w: 16,
      h: 24
    },
    jadesunlab: {
      x: 496,
      y: 772,
      w: 16,
      h: 24
    },
    neutrallab: {
      x: 0,
      y: 803,
      w: 16,
      h: 24
    },
    orangestarlab: {
      x: 16,
      y: 803,
      w: 16,
      h: 24
    },
    redfirelab: {
      x: 32,
      y: 803,
      w: 16,
      h: 24
    },
    yellowcometlab: {
      x: 48,
      y: 803,
      w: 16,
      h: 24
    },
    cobalticeairport: {
      x: 64,
      y: 803,
      w: 16,
      h: 18
    },
    cobalticebase: {
      x: 80,
      y: 803,
      w: 16,
      h: 25
    },
    cobalticecity: {
      x: 96,
      y: 803,
      w: 16,
      h: 22
    },
    cobalticecomtower: {
      x: 112,
      y: 803,
      w: 16,
      h: 25
    },
    cobalticehq: {
      x: 480,
      y: 622,
      w: 16,
      h: 29
    },
    cobalticelab: {
      x: 128,
      y: 803,
      w: 16,
      h: 24
    },
    cobalticeport: {
      x: 144,
      y: 803,
      w: 16,
      h: 22
    },
    pinkcosmosairport: {
      x: 160,
      y: 803,
      w: 16,
      h: 18
    },
    pinkcosmosbase: {
      x: 176,
      y: 803,
      w: 16,
      h: 25
    },
    pinkcosmoscity: {
      x: 192,
      y: 803,
      w: 16,
      h: 22
    },
    pinkcosmoscomtower: {
      x: 208,
      y: 803,
      w: 16,
      h: 25
    },
    pinkcosmoshq: {
      x: 224,
      y: 803,
      w: 16,
      h: 31
    },
    pinkcosmoslab: {
      x: 240,
      y: 803,
      w: 16,
      h: 24
    },
    pinkcosmosport: {
      x: 256,
      y: 803,
      w: 16,
      h: 22
    },
    tealgalaxyairport: {
      x: 272,
      y: 803,
      w: 16,
      h: 18
    },
    tealgalaxybase: {
      x: 288,
      y: 803,
      w: 16,
      h: 25
    },
    tealgalaxycity: {
      x: 304,
      y: 803,
      w: 16,
      h: 22
    },
    tealgalaxycomtower: {
      x: 320,
      y: 803,
      w: 16,
      h: 25
    },
    tealgalaxyhq: {
      x: 336,
      y: 803,
      w: 16,
      h: 31
    },
    tealgalaxylab: {
      x: 352,
      y: 803,
      w: 16,
      h: 24
    },
    tealgalaxyport: {
      x: 368,
      y: 803,
      w: 16,
      h: 22
    },
    purplelightningairport: {
      x: 384,
      y: 803,
      w: 16,
      h: 18
    },
    purplelightningbase: {
      x: 400,
      y: 803,
      w: 16,
      h: 25
    },
    purplelightningcity: {
      x: 416,
      y: 803,
      w: 16,
      h: 22
    },
    purplelightningcomtower: {
      x: 432,
      y: 803,
      w: 16,
      h: 25
    },
    purplelightninghq: {
      x: 448,
      y: 803,
      w: 16,
      h: 31
    },
    purplelightninglab: {
      x: 464,
      y: 803,
      w: 16,
      h: 24
    },
    purplelightningport: {
      x: 480,
      y: 803,
      w: 16,
      h: 22
    },
    acidrainairport: {
      x: 496,
      y: 803,
      w: 16,
      h: 18
    },
    acidrainbase: {
      x: 0,
      y: 834,
      w: 16,
      h: 25
    },
    acidraincity: {
      x: 16,
      y: 834,
      w: 16,
      h: 22
    },
    acidraincomtower: {
      x: 32,
      y: 834,
      w: 16,
      h: 25
    },
    acidrainhq: {
      x: 48,
      y: 834,
      w: 16,
      h: 31
    },
    acidrainlab: {
      x: 64,
      y: 834,
      w: 16,
      h: 24
    },
    acidrainport: {
      x: 80,
      y: 834,
      w: 16,
      h: 22
    },
    whitenovaairport: {
      x: 96,
      y: 834,
      w: 16,
      h: 18
    },
    whitenovabase: {
      x: 112,
      y: 834,
      w: 16,
      h: 25
    },
    whitenovacity: {
      x: 128,
      y: 834,
      w: 16,
      h: 22
    },
    whitenovacomtower: {
      x: 144,
      y: 834,
      w: 16,
      h: 25
    },
    whitenovahq: {
      x: 160,
      y: 834,
      w: 16,
      h: 31
    },
    whitenovalab: {
      x: 176,
      y: 834,
      w: 16,
      h: 24
    },
    whitenovaport: {
      x: 192,
      y: 834,
      w: 16,
      h: 22
    },
    teleporter: {
      x: 96,
      y: 145,
      w: 16,
      h: 16
    },
    azureasteroidairport: {
      x: 208,
      y: 834,
      w: 16,
      h: 18
    },
    azureasteroidbase: {
      x: 224,
      y: 834,
      w: 16,
      h: 25
    },
    azureasteroidcity: {
      x: 240,
      y: 834,
      w: 16,
      h: 22
    },
    azureasteroidcomtower: {
      x: 256,
      y: 834,
      w: 16,
      h: 25
    },
    azureasteroidhq: {
      x: 272,
      y: 834,
      w: 16,
      h: 31
    },
    azureasteroidlab: {
      x: 288,
      y: 834,
      w: 16,
      h: 24
    },
    azureasteroidport: {
      x: 304,
      y: 834,
      w: 16,
      h: 22
    },
    noireclipseairport: {
      x: 320,
      y: 834,
      w: 16,
      h: 18
    },
    noireclipsebase: {
      x: 336,
      y: 834,
      w: 16,
      h: 25
    },
    noireclipsecity: {
      x: 352,
      y: 834,
      w: 16,
      h: 22
    },
    noireclipsecomtower: {
      x: 368,
      y: 834,
      w: 16,
      h: 25
    },
    noireclipsehq: {
      x: 384,
      y: 834,
      w: 16,
      h: 31
    },
    noireclipselab: {
      x: 400,
      y: 834,
      w: 16,
      h: 24
    },
    noireclipseport: {
      x: 416,
      y: 834,
      w: 16,
      h: 22
    },
    silverclawairport: {
      x: 432,
      y: 834,
      w: 16,
      h: 18
    },
    silverclawbase: {
      x: 448,
      y: 834,
      w: 16,
      h: 25
    },
    silverclawcity: {
      x: 464,
      y: 834,
      w: 16,
      h: 22
    },
    silverclawcomtower: {
      x: 480,
      y: 834,
      w: 16,
      h: 25
    },
    silverclawhq: {
      x: 496,
      y: 834,
      w: 16,
      h: 32
    },
    silverclawlab: {
      x: 0,
      y: 866,
      w: 16,
      h: 24
    },
    silverclawport: {
      x: 16,
      y: 866,
      w: 16,
      h: 22
    },
    minimountain: {
      x: 32,
      y: 866,
      w: 16,
      h: 16
    },
    shoales: {
      x: 64,
      y: 459,
      w: 16,
      h: 16
    },
    shoalsw: {
      x: 80,
      y: 459,
      w: 16,
      h: 16
    },
    shoalwn: {
      x: 96,
      y: 459,
      w: 16,
      h: 16
    },
    shoalne: {
      x: 112,
      y: 459,
      w: 16,
      h: 16
    },
    shoal0: {
      x: 16,
      y: 177,
      w: 16,
      h: 16
    },
    shoal1: {
      x: 32,
      y: 177,
      w: 16,
      h: 16
    },
    shoal2: {
      x: 128,
      y: 459,
      w: 16,
      h: 16
    },
    shoal3: {
      x: 64,
      y: 177,
      w: 16,
      h: 16
    },
    shoal4: {
      x: 80,
      y: 177,
      w: 16,
      h: 16
    },
    shoal5: {
      x: 144,
      y: 459,
      w: 16,
      h: 16
    },
    shoal6: {
      x: 160,
      y: 459,
      w: 16,
      h: 16
    },
    shoal7: {
      x: 176,
      y: 459,
      w: 16,
      h: 16
    },
    shoal8: {
      x: 192,
      y: 459,
      w: 16,
      h: 16
    },
    shoal9: {
      x: 160,
      y: 177,
      w: 16,
      h: 16
    },
    shoal10: {
      x: 176,
      y: 177,
      w: 16,
      h: 16
    },
    shoal11: {
      x: 208,
      y: 459,
      w: 16,
      h: 16
    },
    shoal12: {
      x: 208,
      y: 177,
      w: 16,
      h: 16
    },
    shoal13: {
      x: 224,
      y: 177,
      w: 16,
      h: 16
    },
    shoal14: {
      x: 224,
      y: 459,
      w: 16,
      h: 16
    },
    shoal15: {
      x: 240,
      y: 459,
      w: 16,
      h: 16
    },
    shoal16: {
      x: 256,
      y: 459,
      w: 16,
      h: 16
    },
    shoal17: {
      x: 272,
      y: 459,
      w: 16,
      h: 16
    },
    shoal18: {
      x: 288,
      y: 459,
      w: 16,
      h: 16
    },
    shoal19: {
      x: 304,
      y: 459,
      w: 16,
      h: 16
    },
    shoal20: {
      x: 320,
      y: 459,
      w: 16,
      h: 16
    },
    shoal21: {
      x: 336,
      y: 459,
      w: 16,
      h: 16
    },
    shoal22: {
      x: 352,
      y: 459,
      w: 16,
      h: 16
    },
    shoal23: {
      x: 368,
      y: 459,
      w: 16,
      h: 16
    },
    shoal24: {
      x: 384,
      y: 459,
      w: 16,
      h: 16
    },
    shoal25: {
      x: 400,
      y: 459,
      w: 16,
      h: 16
    },
    shoal26: {
      x: 416,
      y: 459,
      w: 16,
      h: 16
    },
    shoal27: {
      x: 448,
      y: 177,
      w: 16,
      h: 16
    },
    shoal28: {
      x: 464,
      y: 177,
      w: 16,
      h: 16
    },
    shoal29: {
      x: 432,
      y: 459,
      w: 16,
      h: 16
    },
    shoal30: {
      x: 496,
      y: 177,
      w: 16,
      h: 16
    },
    shoal31: {
      x: 0,
      y: 193,
      w: 16,
      h: 16
    },
    shoal32: {
      x: 448,
      y: 459,
      w: 16,
      h: 16
    },
    shoal33: {
      x: 464,
      y: 459,
      w: 16,
      h: 16
    },
    shoal34: {
      x: 480,
      y: 459,
      w: 16,
      h: 16
    },
    shoal35: {
      x: 496,
      y: 459,
      w: 16,
      h: 16
    },
    shoal36: {
      x: 80,
      y: 193,
      w: 16,
      h: 16
    },
    shoal37: {
      x: 96,
      y: 193,
      w: 16,
      h: 16
    },
    shoal38: {
      x: 0,
      y: 491,
      w: 16,
      h: 16
    },
    shoal39: {
      x: 128,
      y: 193,
      w: 16,
      h: 16
    },
    shoal40: {
      x: 144,
      y: 193,
      w: 16,
      h: 16
    },
    shoal41: {
      x: 16,
      y: 491,
      w: 16,
      h: 16
    },
    shoal42: {
      x: 32,
      y: 491,
      w: 16,
      h: 16
    },
    shoal43: {
      x: 48,
      y: 491,
      w: 16,
      h: 16
    },
    shoal44: {
      x: 64,
      y: 491,
      w: 16,
      h: 16
    },
    shoal45: {
      x: 80,
      y: 491,
      w: 16,
      h: 16
    },
    shoal46: {
      x: 96,
      y: 491,
      w: 16,
      h: 16
    },
    shoal47: {
      x: 112,
      y: 491,
      w: 16,
      h: 16
    },
    shoal48: {
      x: 128,
      y: 491,
      w: 16,
      h: 16
    },
    shoal49: {
      x: 144,
      y: 491,
      w: 16,
      h: 16
    },
    shoal50: {
      x: 160,
      y: 491,
      w: 16,
      h: 16
    },
    shoal51: {
      x: 176,
      y: 491,
      w: 16,
      h: 16
    },
    shoal52: {
      x: 192,
      y: 491,
      w: 16,
      h: 16
    },
    shoal53: {
      x: 208,
      y: 491,
      w: 16,
      h: 16
    },
    shoal54: {
      x: 224,
      y: 491,
      w: 16,
      h: 16
    },
    shoal55: {
      x: 240,
      y: 491,
      w: 16,
      h: 16
    },
    shoal56: {
      x: 256,
      y: 491,
      w: 16,
      h: 16
    },
    shoal57: {
      x: 272,
      y: 491,
      w: 16,
      h: 16
    },
    shoal58: {
      x: 288,
      y: 491,
      w: 16,
      h: 16
    },
    shoal59: {
      x: 304,
      y: 491,
      w: 16,
      h: 16
    },
    shoal60: {
      x: 320,
      y: 491,
      w: 16,
      h: 16
    },
    shoal61: {
      x: 336,
      y: 491,
      w: 16,
      h: 16
    },
    shoal62: {
      x: 352,
      y: 491,
      w: 16,
      h: 16
    },
    shoal63: {
      x: 368,
      y: 491,
      w: 16,
      h: 16
    },
    shoal64: {
      x: 384,
      y: 491,
      w: 16,
      h: 16
    },
    shoal65: {
      x: 400,
      y: 491,
      w: 16,
      h: 16
    },
    shoal66: {
      x: 416,
      y: 491,
      w: 16,
      h: 16
    },
    shoal67: {
      x: 432,
      y: 491,
      w: 16,
      h: 16
    },
    shoal68: {
      x: 448,
      y: 491,
      w: 16,
      h: 16
    },
    shoal69: {
      x: 464,
      y: 491,
      w: 16,
      h: 16
    },
    shoal70: {
      x: 480,
      y: 491,
      w: 16,
      h: 16
    },
    shoal71: {
      x: 496,
      y: 491,
      w: 16,
      h: 16
    },
    shoal72: {
      x: 0,
      y: 507,
      w: 16,
      h: 16
    },
    shoal73: {
      x: 16,
      y: 507,
      w: 16,
      h: 16
    },
    shoal74: {
      x: 32,
      y: 507,
      w: 16,
      h: 16
    },
    shoal75: {
      x: 48,
      y: 507,
      w: 16,
      h: 16
    },
    shoal76: {
      x: 64,
      y: 507,
      w: 16,
      h: 16
    },
    shoal77: {
      x: 80,
      y: 507,
      w: 16,
      h: 16
    },
    shoal78: {
      x: 96,
      y: 507,
      w: 16,
      h: 16
    },
    shoal79: {
      x: 112,
      y: 507,
      w: 16,
      h: 16
    },
    shoal80: {
      x: 128,
      y: 507,
      w: 16,
      h: 16
    },
    sea0: {
      x: 288,
      y: 209,
      w: 16,
      h: 16
    },
    sea1: {
      x: 144,
      y: 507,
      w: 16,
      h: 16
    },
    sea2: {
      x: 160,
      y: 507,
      w: 16,
      h: 16
    },
    sea4: {
      x: 176,
      y: 507,
      w: 16,
      h: 16
    },
    sea5: {
      x: 192,
      y: 507,
      w: 16,
      h: 16
    },
    sea8: {
      x: 208,
      y: 507,
      w: 16,
      h: 16
    },
    sea9: {
      x: 224,
      y: 507,
      w: 16,
      h: 16
    },
    sea10: {
      x: 240,
      y: 507,
      w: 16,
      h: 16
    },
    sea16: {
      x: 256,
      y: 507,
      w: 16,
      h: 16
    },
    sea17: {
      x: 272,
      y: 507,
      w: 16,
      h: 16
    },
    sea18: {
      x: 288,
      y: 507,
      w: 16,
      h: 16
    },
    sea20: {
      x: 304,
      y: 507,
      w: 16,
      h: 16
    },
    sea21: {
      x: 320,
      y: 507,
      w: 16,
      h: 16
    },
    sea32: {
      x: 336,
      y: 507,
      w: 16,
      h: 16
    },
    sea33: {
      x: 352,
      y: 507,
      w: 16,
      h: 16
    },
    sea34: {
      x: 368,
      y: 507,
      w: 16,
      h: 16
    },
    sea36: {
      x: 384,
      y: 507,
      w: 16,
      h: 16
    },
    sea37: {
      x: 400,
      y: 507,
      w: 16,
      h: 16
    },
    sea40: {
      x: 416,
      y: 507,
      w: 16,
      h: 16
    },
    sea41: {
      x: 432,
      y: 507,
      w: 16,
      h: 16
    },
    sea42: {
      x: 448,
      y: 507,
      w: 16,
      h: 16
    },
    sea64: {
      x: 464,
      y: 507,
      w: 16,
      h: 16
    },
    sea65: {
      x: 480,
      y: 507,
      w: 16,
      h: 16
    },
    sea66: {
      x: 496,
      y: 507,
      w: 16,
      h: 16
    },
    sea68: {
      x: 0,
      y: 523,
      w: 16,
      h: 16
    },
    sea69: {
      x: 16,
      y: 523,
      w: 16,
      h: 16
    },
    sea72: {
      x: 32,
      y: 523,
      w: 16,
      h: 16
    },
    sea73: {
      x: 48,
      y: 523,
      w: 16,
      h: 16
    },
    sea74: {
      x: 64,
      y: 523,
      w: 16,
      h: 16
    },
    sea80: {
      x: 80,
      y: 523,
      w: 16,
      h: 16
    },
    sea81: {
      x: 96,
      y: 523,
      w: 16,
      h: 16
    },
    sea82: {
      x: 112,
      y: 523,
      w: 16,
      h: 16
    },
    sea84: {
      x: 128,
      y: 523,
      w: 16,
      h: 16
    },
    sea85: {
      x: 144,
      y: 523,
      w: 16,
      h: 16
    },
    sea128: {
      x: 160,
      y: 523,
      w: 16,
      h: 16
    },
    sea130: {
      x: 176,
      y: 523,
      w: 16,
      h: 16
    },
    sea132: {
      x: 192,
      y: 523,
      w: 16,
      h: 16
    },
    sea136: {
      x: 208,
      y: 523,
      w: 16,
      h: 16
    },
    sea138: {
      x: 224,
      y: 523,
      w: 16,
      h: 16
    },
    sea144: {
      x: 240,
      y: 523,
      w: 16,
      h: 16
    },
    sea146: {
      x: 256,
      y: 523,
      w: 16,
      h: 16
    },
    sea148: {
      x: 272,
      y: 523,
      w: 16,
      h: 16
    },
    sea160: {
      x: 288,
      y: 523,
      w: 16,
      h: 16
    },
    sea162: {
      x: 304,
      y: 523,
      w: 16,
      h: 16
    },
    sea164: {
      x: 320,
      y: 523,
      w: 16,
      h: 16
    },
    sea168: {
      x: 336,
      y: 523,
      w: 16,
      h: 16
    },
    sea170: {
      x: 352,
      y: 523,
      w: 16,
      h: 16
    }
  }
};

const _TS_tileSets = {
  'terrain/aw1/': {
    clear: {
      plain: {
        x: 0,
        y: 0,
        w: 16,
        h: 16
      },
      mountain: {
        x: 16,
        y: 0,
        w: 16,
        h: 21
      },
      wood: {
        x: 32,
        y: 0,
        w: 16,
        h: 16
      },
      hriver: {
        x: 48,
        y: 0,
        w: 16,
        h: 16
      },
      vriver: {
        x: 64,
        y: 0,
        w: 16,
        h: 16
      },
      criver: {
        x: 80,
        y: 0,
        w: 16,
        h: 16
      },
      esriver: {
        x: 96,
        y: 0,
        w: 16,
        h: 16
      },
      swriver: {
        x: 112,
        y: 0,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 128,
        y: 0,
        w: 16,
        h: 16
      },
      neriver: {
        x: 144,
        y: 0,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 160,
        y: 0,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 176,
        y: 0,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 192,
        y: 0,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 208,
        y: 0,
        w: 16,
        h: 16
      },
      hroad: {
        x: 224,
        y: 0,
        w: 16,
        h: 16
      },
      vroad: {
        x: 240,
        y: 0,
        w: 16,
        h: 16
      },
      croad: {
        x: 256,
        y: 0,
        w: 16,
        h: 16
      },
      esroad: {
        x: 272,
        y: 0,
        w: 16,
        h: 16
      },
      swroad: {
        x: 288,
        y: 0,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 304,
        y: 0,
        w: 16,
        h: 16
      },
      neroad: {
        x: 320,
        y: 0,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 336,
        y: 0,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 352,
        y: 0,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 368,
        y: 0,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 384,
        y: 0,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 400,
        y: 0,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 416,
        y: 0,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 432,
        y: 0,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 448,
        y: 0,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 464,
        y: 0,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 480,
        y: 0,
        w: 16,
        h: 16
      },
      reef: {
        x: 496,
        y: 0,
        w: 16,
        h: 16
      },
      neutralcity: {
        x: 0,
        y: 21,
        w: 16,
        h: 22
      },
      neutralbase: {
        x: 16,
        y: 21,
        w: 16,
        h: 25
      },
      neutralairport: {
        x: 32,
        y: 21,
        w: 16,
        h: 18
      },
      neutralport: {
        x: 48,
        y: 21,
        w: 16,
        h: 22
      },
      orangestarcity: {
        x: 64,
        y: 21,
        w: 16,
        h: 22
      },
      orangestarbase: {
        x: 80,
        y: 21,
        w: 16,
        h: 25
      },
      orangestarairport: {
        x: 96,
        y: 21,
        w: 16,
        h: 18
      },
      orangestarport: {
        x: 112,
        y: 21,
        w: 16,
        h: 22
      },
      orangestarhq: {
        x: 128,
        y: 21,
        w: 16,
        h: 31
      },
      bluemooncity: {
        x: 144,
        y: 21,
        w: 16,
        h: 22
      },
      bluemoonbase: {
        x: 160,
        y: 21,
        w: 16,
        h: 25
      },
      bluemoonairport: {
        x: 176,
        y: 21,
        w: 16,
        h: 18
      },
      bluemoonport: {
        x: 192,
        y: 21,
        w: 16,
        h: 22
      },
      bluemoonhq: {
        x: 208,
        y: 21,
        w: 16,
        h: 31
      },
      greenearthcity: {
        x: 224,
        y: 21,
        w: 16,
        h: 22
      },
      greenearthbase: {
        x: 240,
        y: 21,
        w: 16,
        h: 25
      },
      greenearthairport: {
        x: 256,
        y: 21,
        w: 16,
        h: 18
      },
      greenearthport: {
        x: 272,
        y: 21,
        w: 16,
        h: 22
      },
      greenearthhq: {
        x: 288,
        y: 21,
        w: 16,
        h: 31
      },
      yellowcometcity: {
        x: 304,
        y: 21,
        w: 16,
        h: 22
      },
      yellowcometbase: {
        x: 320,
        y: 21,
        w: 16,
        h: 25
      },
      yellowcometairport: {
        x: 336,
        y: 21,
        w: 16,
        h: 18
      },
      yellowcometport: {
        x: 352,
        y: 21,
        w: 16,
        h: 22
      },
      yellowcomethq: {
        x: 368,
        y: 21,
        w: 16,
        h: 31
      },
      redfirecity: {
        x: 384,
        y: 21,
        w: 16,
        h: 22
      },
      redfirebase: {
        x: 400,
        y: 21,
        w: 16,
        h: 25
      },
      redfireairport: {
        x: 416,
        y: 21,
        w: 16,
        h: 18
      },
      redfireport: {
        x: 432,
        y: 21,
        w: 16,
        h: 22
      },
      redfirehq: {
        x: 448,
        y: 21,
        w: 16,
        h: 31
      },
      greyskycity: {
        x: 464,
        y: 21,
        w: 16,
        h: 22
      },
      greyskybase: {
        x: 480,
        y: 21,
        w: 16,
        h: 25
      },
      greyskyairport: {
        x: 496,
        y: 21,
        w: 16,
        h: 18
      },
      greyskyport: {
        x: 0,
        y: 52,
        w: 16,
        h: 22
      },
      greyskyhq: {
        x: 16,
        y: 52,
        w: 16,
        h: 31
      },
      blackholecity: {
        x: 32,
        y: 52,
        w: 16,
        h: 22
      },
      blackholebase: {
        x: 48,
        y: 52,
        w: 16,
        h: 25
      },
      blackholeairport: {
        x: 64,
        y: 52,
        w: 16,
        h: 18
      },
      blackholeport: {
        x: 80,
        y: 52,
        w: 16,
        h: 22
      },
      blackholehq: {
        x: 96,
        y: 52,
        w: 16,
        h: 31
      },
      browndesertcity: {
        x: 112,
        y: 52,
        w: 16,
        h: 22
      },
      browndesertbase: {
        x: 128,
        y: 52,
        w: 16,
        h: 25
      },
      browndesertairport: {
        x: 144,
        y: 52,
        w: 16,
        h: 18
      },
      browndesertport: {
        x: 160,
        y: 52,
        w: 16,
        h: 22
      },
      browndeserthq: {
        x: 176,
        y: 52,
        w: 16,
        h: 31
      },
      vpipe: {
        x: 192,
        y: 52,
        w: 16,
        h: 16
      },
      hpipe: {
        x: 208,
        y: 52,
        w: 16,
        h: 16
      },
      nepipe: {
        x: 224,
        y: 52,
        w: 16,
        h: 16
      },
      espipe: {
        x: 240,
        y: 52,
        w: 16,
        h: 16
      },
      swpipe: {
        x: 256,
        y: 52,
        w: 16,
        h: 16
      },
      wnpipe: {
        x: 272,
        y: 52,
        w: 16,
        h: 16
      },
      npipeend: {
        x: 288,
        y: 52,
        w: 16,
        h: 16
      },
      epipeend: {
        x: 304,
        y: 52,
        w: 16,
        h: 16
      },
      spipeend: {
        x: 320,
        y: 52,
        w: 16,
        h: 16
      },
      wpipeend: {
        x: 336,
        y: 52,
        w: 16,
        h: 16
      },
      missilesilo: {
        x: 352,
        y: 52,
        w: 16,
        h: 24
      },
      missilesiloempty: {
        x: 368,
        y: 52,
        w: 16,
        h: 16
      },
      hpipeseam: {
        x: 384,
        y: 52,
        w: 16,
        h: 16
      },
      vpipeseam: {
        x: 400,
        y: 52,
        w: 16,
        h: 16
      },
      hpiperubble: {
        x: 416,
        y: 52,
        w: 16,
        h: 16
      },
      vpiperubble: {
        x: 432,
        y: 52,
        w: 16,
        h: 16
      },
      amberblazeairport: {
        x: 448,
        y: 52,
        w: 16,
        h: 18
      },
      amberblazebase: {
        x: 464,
        y: 52,
        w: 16,
        h: 25
      },
      amberblazecity: {
        x: 480,
        y: 52,
        w: 16,
        h: 22
      },
      amberblazehq: {
        x: 496,
        y: 52,
        w: 16,
        h: 31
      },
      amberblazeport: {
        x: 0,
        y: 83,
        w: 16,
        h: 22
      },
      jadesunairport: {
        x: 16,
        y: 83,
        w: 16,
        h: 18
      },
      jadesunbase: {
        x: 32,
        y: 83,
        w: 16,
        h: 25
      },
      jadesuncity: {
        x: 48,
        y: 83,
        w: 16,
        h: 22
      },
      jadesunhq: {
        x: 64,
        y: 83,
        w: 16,
        h: 31
      },
      jadesunport: {
        x: 80,
        y: 83,
        w: 16,
        h: 22
      },
      amberblazecomtower: {
        x: 96,
        y: 83,
        w: 16,
        h: 25
      },
      blackholecomtower: {
        x: 112,
        y: 83,
        w: 16,
        h: 25
      },
      bluemooncomtower: {
        x: 128,
        y: 83,
        w: 16,
        h: 25
      },
      browndesertcomtower: {
        x: 144,
        y: 83,
        w: 16,
        h: 25
      },
      greenearthcomtower: {
        x: 160,
        y: 83,
        w: 16,
        h: 25
      },
      jadesuncomtower: {
        x: 176,
        y: 83,
        w: 16,
        h: 25
      },
      neutralcomtower: {
        x: 192,
        y: 83,
        w: 16,
        h: 25
      },
      orangestarcomtower: {
        x: 208,
        y: 83,
        w: 16,
        h: 25
      },
      redfirecomtower: {
        x: 224,
        y: 83,
        w: 16,
        h: 25
      },
      yellowcometcomtower: {
        x: 240,
        y: 83,
        w: 16,
        h: 25
      },
      greyskycomtower: {
        x: 256,
        y: 83,
        w: 16,
        h: 25
      },
      amberblazelab: {
        x: 272,
        y: 83,
        w: 16,
        h: 24
      },
      blackholelab: {
        x: 288,
        y: 83,
        w: 16,
        h: 24
      },
      bluemoonlab: {
        x: 304,
        y: 83,
        w: 16,
        h: 24
      },
      browndesertlab: {
        x: 320,
        y: 83,
        w: 16,
        h: 24
      },
      greenearthlab: {
        x: 336,
        y: 83,
        w: 16,
        h: 24
      },
      greyskylab: {
        x: 352,
        y: 83,
        w: 16,
        h: 24
      },
      jadesunlab: {
        x: 368,
        y: 83,
        w: 16,
        h: 24
      },
      neutrallab: {
        x: 384,
        y: 83,
        w: 16,
        h: 24
      },
      orangestarlab: {
        x: 400,
        y: 83,
        w: 16,
        h: 24
      },
      redfirelab: {
        x: 416,
        y: 83,
        w: 16,
        h: 24
      },
      yellowcometlab: {
        x: 432,
        y: 83,
        w: 16,
        h: 24
      },
      cobalticeairport: {
        x: 448,
        y: 83,
        w: 16,
        h: 18
      },
      cobalticebase: {
        x: 464,
        y: 83,
        w: 16,
        h: 25
      },
      cobalticecity: {
        x: 480,
        y: 83,
        w: 16,
        h: 22
      },
      cobalticecomtower: {
        x: 496,
        y: 83,
        w: 16,
        h: 25
      },
      cobalticehq: {
        x: 0,
        y: 114,
        w: 16,
        h: 31
      },
      cobalticelab: {
        x: 16,
        y: 114,
        w: 16,
        h: 24
      },
      cobalticeport: {
        x: 32,
        y: 114,
        w: 16,
        h: 22
      },
      pinkcosmosairport: {
        x: 48,
        y: 114,
        w: 16,
        h: 18
      },
      pinkcosmosbase: {
        x: 64,
        y: 114,
        w: 16,
        h: 25
      },
      pinkcosmoscity: {
        x: 80,
        y: 114,
        w: 16,
        h: 22
      },
      pinkcosmoscomtower: {
        x: 96,
        y: 114,
        w: 16,
        h: 25
      },
      pinkcosmoshq: {
        x: 112,
        y: 114,
        w: 16,
        h: 31
      },
      pinkcosmoslab: {
        x: 128,
        y: 114,
        w: 16,
        h: 24
      },
      pinkcosmosport: {
        x: 144,
        y: 114,
        w: 16,
        h: 22
      },
      tealgalaxyairport: {
        x: 160,
        y: 114,
        w: 16,
        h: 18
      },
      tealgalaxybase: {
        x: 176,
        y: 114,
        w: 16,
        h: 25
      },
      tealgalaxycity: {
        x: 192,
        y: 114,
        w: 16,
        h: 22
      },
      tealgalaxycomtower: {
        x: 208,
        y: 114,
        w: 16,
        h: 25
      },
      tealgalaxyhq: {
        x: 224,
        y: 114,
        w: 16,
        h: 31
      },
      tealgalaxylab: {
        x: 240,
        y: 114,
        w: 16,
        h: 24
      },
      tealgalaxyport: {
        x: 256,
        y: 114,
        w: 16,
        h: 22
      },
      purplelightningairport: {
        x: 272,
        y: 114,
        w: 16,
        h: 18
      },
      purplelightningbase: {
        x: 288,
        y: 114,
        w: 16,
        h: 25
      },
      purplelightningcity: {
        x: 304,
        y: 114,
        w: 16,
        h: 22
      },
      purplelightningcomtower: {
        x: 320,
        y: 114,
        w: 16,
        h: 25
      },
      purplelightninghq: {
        x: 336,
        y: 114,
        w: 16,
        h: 31
      },
      purplelightninglab: {
        x: 352,
        y: 114,
        w: 16,
        h: 24
      },
      purplelightningport: {
        x: 368,
        y: 114,
        w: 16,
        h: 22
      },
      acidrainairport: {
        x: 384,
        y: 114,
        w: 16,
        h: 18
      },
      acidrainbase: {
        x: 400,
        y: 114,
        w: 16,
        h: 25
      },
      acidraincity: {
        x: 416,
        y: 114,
        w: 16,
        h: 22
      },
      acidraincomtower: {
        x: 432,
        y: 114,
        w: 16,
        h: 25
      },
      acidrainhq: {
        x: 448,
        y: 114,
        w: 16,
        h: 31
      },
      acidrainlab: {
        x: 464,
        y: 114,
        w: 16,
        h: 24
      },
      acidrainport: {
        x: 480,
        y: 114,
        w: 16,
        h: 22
      },
      whitenovaairport: {
        x: 496,
        y: 114,
        w: 16,
        h: 18
      },
      whitenovabase: {
        x: 0,
        y: 145,
        w: 16,
        h: 25
      },
      whitenovacity: {
        x: 16,
        y: 145,
        w: 16,
        h: 22
      },
      whitenovacomtower: {
        x: 32,
        y: 145,
        w: 16,
        h: 25
      },
      whitenovahq: {
        x: 48,
        y: 145,
        w: 16,
        h: 31
      },
      whitenovalab: {
        x: 64,
        y: 145,
        w: 16,
        h: 24
      },
      whitenovaport: {
        x: 80,
        y: 145,
        w: 16,
        h: 22
      },
      teleporter: {
        x: 96,
        y: 145,
        w: 16,
        h: 16
      },
      azureasteroidairport: {
        x: 112,
        y: 145,
        w: 16,
        h: 18
      },
      azureasteroidbase: {
        x: 128,
        y: 145,
        w: 16,
        h: 25
      },
      azureasteroidcity: {
        x: 144,
        y: 145,
        w: 16,
        h: 22
      },
      azureasteroidcomtower: {
        x: 160,
        y: 145,
        w: 16,
        h: 25
      },
      azureasteroidhq: {
        x: 176,
        y: 145,
        w: 16,
        h: 31
      },
      azureasteroidlab: {
        x: 192,
        y: 145,
        w: 16,
        h: 24
      },
      azureasteroidport: {
        x: 208,
        y: 145,
        w: 16,
        h: 22
      },
      noireclipseairport: {
        x: 224,
        y: 145,
        w: 16,
        h: 18
      },
      noireclipsebase: {
        x: 240,
        y: 145,
        w: 16,
        h: 25
      },
      noireclipsecity: {
        x: 256,
        y: 145,
        w: 16,
        h: 22
      },
      noireclipsecomtower: {
        x: 272,
        y: 145,
        w: 16,
        h: 25
      },
      noireclipsehq: {
        x: 288,
        y: 145,
        w: 16,
        h: 31
      },
      noireclipselab: {
        x: 304,
        y: 145,
        w: 16,
        h: 24
      },
      noireclipseport: {
        x: 320,
        y: 145,
        w: 16,
        h: 22
      },
      silverclawairport: {
        x: 336,
        y: 145,
        w: 16,
        h: 18
      },
      silverclawbase: {
        x: 352,
        y: 145,
        w: 16,
        h: 25
      },
      silverclawcity: {
        x: 368,
        y: 145,
        w: 16,
        h: 22
      },
      silverclawcomtower: {
        x: 384,
        y: 145,
        w: 16,
        h: 25
      },
      silverclawhq: {
        x: 400,
        y: 145,
        w: 16,
        h: 32
      },
      silverclawlab: {
        x: 416,
        y: 145,
        w: 16,
        h: 24
      },
      silverclawport: {
        x: 432,
        y: 145,
        w: 16,
        h: 22
      },
      minimountain: {
        x: 448,
        y: 145,
        w: 16,
        h: 16
      },
      shoales: {
        x: 464,
        y: 145,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 480,
        y: 145,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 496,
        y: 145,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 0,
        y: 177,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 16,
        y: 177,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 32,
        y: 177,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 48,
        y: 177,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 64,
        y: 177,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 80,
        y: 177,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 96,
        y: 177,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 112,
        y: 177,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 128,
        y: 177,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 144,
        y: 177,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 160,
        y: 177,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 176,
        y: 177,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 192,
        y: 177,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 208,
        y: 177,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 224,
        y: 177,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 240,
        y: 177,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 256,
        y: 177,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 272,
        y: 177,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 288,
        y: 177,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 304,
        y: 177,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 320,
        y: 177,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 336,
        y: 177,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 352,
        y: 177,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 368,
        y: 177,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 384,
        y: 177,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 400,
        y: 177,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 416,
        y: 177,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 432,
        y: 177,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 448,
        y: 177,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 464,
        y: 177,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 480,
        y: 177,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 496,
        y: 177,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 0,
        y: 193,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 16,
        y: 193,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 32,
        y: 193,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 48,
        y: 193,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 64,
        y: 193,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 80,
        y: 193,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 96,
        y: 193,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 112,
        y: 193,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 128,
        y: 193,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 144,
        y: 193,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 160,
        y: 193,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 176,
        y: 193,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 192,
        y: 193,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 208,
        y: 193,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 224,
        y: 193,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 240,
        y: 193,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 256,
        y: 193,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 272,
        y: 193,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 288,
        y: 193,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 304,
        y: 193,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 320,
        y: 193,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 336,
        y: 193,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 352,
        y: 193,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 368,
        y: 193,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 384,
        y: 193,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 400,
        y: 193,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 416,
        y: 193,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 432,
        y: 193,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 448,
        y: 193,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 464,
        y: 193,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 480,
        y: 193,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 496,
        y: 193,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 0,
        y: 209,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 16,
        y: 209,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 32,
        y: 209,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 48,
        y: 209,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 64,
        y: 209,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 80,
        y: 209,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 96,
        y: 209,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 112,
        y: 209,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 128,
        y: 209,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 144,
        y: 209,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 160,
        y: 209,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 176,
        y: 209,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 192,
        y: 209,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 208,
        y: 209,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 224,
        y: 209,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 240,
        y: 209,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 256,
        y: 209,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 272,
        y: 209,
        w: 16,
        h: 16
      },
      sea0: {
        x: 288,
        y: 209,
        w: 16,
        h: 16
      },
      sea1: {
        x: 304,
        y: 209,
        w: 16,
        h: 16
      },
      sea2: {
        x: 320,
        y: 209,
        w: 16,
        h: 16
      },
      sea4: {
        x: 336,
        y: 209,
        w: 16,
        h: 16
      },
      sea5: {
        x: 352,
        y: 209,
        w: 16,
        h: 16
      },
      sea8: {
        x: 368,
        y: 209,
        w: 16,
        h: 16
      },
      sea9: {
        x: 384,
        y: 209,
        w: 16,
        h: 16
      },
      sea10: {
        x: 400,
        y: 209,
        w: 16,
        h: 16
      },
      sea16: {
        x: 416,
        y: 209,
        w: 16,
        h: 16
      },
      sea17: {
        x: 432,
        y: 209,
        w: 16,
        h: 16
      },
      sea18: {
        x: 448,
        y: 209,
        w: 16,
        h: 16
      },
      sea20: {
        x: 464,
        y: 209,
        w: 16,
        h: 16
      },
      sea21: {
        x: 480,
        y: 209,
        w: 16,
        h: 16
      },
      sea32: {
        x: 496,
        y: 209,
        w: 16,
        h: 16
      },
      sea33: {
        x: 0,
        y: 225,
        w: 16,
        h: 16
      },
      sea34: {
        x: 16,
        y: 225,
        w: 16,
        h: 16
      },
      sea36: {
        x: 32,
        y: 225,
        w: 16,
        h: 16
      },
      sea37: {
        x: 48,
        y: 225,
        w: 16,
        h: 16
      },
      sea40: {
        x: 64,
        y: 225,
        w: 16,
        h: 16
      },
      sea41: {
        x: 80,
        y: 225,
        w: 16,
        h: 16
      },
      sea42: {
        x: 96,
        y: 225,
        w: 16,
        h: 16
      },
      sea64: {
        x: 112,
        y: 225,
        w: 16,
        h: 16
      },
      sea65: {
        x: 128,
        y: 225,
        w: 16,
        h: 16
      },
      sea66: {
        x: 144,
        y: 225,
        w: 16,
        h: 16
      },
      sea68: {
        x: 160,
        y: 225,
        w: 16,
        h: 16
      },
      sea69: {
        x: 176,
        y: 225,
        w: 16,
        h: 16
      },
      sea72: {
        x: 192,
        y: 225,
        w: 16,
        h: 16
      },
      sea73: {
        x: 208,
        y: 225,
        w: 16,
        h: 16
      },
      sea74: {
        x: 224,
        y: 225,
        w: 16,
        h: 16
      },
      sea80: {
        x: 240,
        y: 225,
        w: 16,
        h: 16
      },
      sea81: {
        x: 256,
        y: 225,
        w: 16,
        h: 16
      },
      sea82: {
        x: 272,
        y: 225,
        w: 16,
        h: 16
      },
      sea84: {
        x: 288,
        y: 225,
        w: 16,
        h: 16
      },
      sea85: {
        x: 304,
        y: 225,
        w: 16,
        h: 16
      },
      sea128: {
        x: 320,
        y: 225,
        w: 16,
        h: 16
      },
      sea130: {
        x: 336,
        y: 225,
        w: 16,
        h: 16
      },
      sea132: {
        x: 352,
        y: 225,
        w: 16,
        h: 16
      },
      sea136: {
        x: 368,
        y: 225,
        w: 16,
        h: 16
      },
      sea138: {
        x: 384,
        y: 225,
        w: 16,
        h: 16
      },
      sea144: {
        x: 400,
        y: 225,
        w: 16,
        h: 16
      },
      sea146: {
        x: 416,
        y: 225,
        w: 16,
        h: 16
      },
      sea148: {
        x: 432,
        y: 225,
        w: 16,
        h: 16
      },
      sea160: {
        x: 448,
        y: 225,
        w: 16,
        h: 16
      },
      sea162: {
        x: 464,
        y: 225,
        w: 16,
        h: 16
      },
      sea164: {
        x: 480,
        y: 225,
        w: 16,
        h: 16
      },
      sea168: {
        x: 496,
        y: 225,
        w: 16,
        h: 16
      },
      sea170: {
        x: 0,
        y: 241,
        w: 16,
        h: 16
      }
    },
    rain: {
      plain: {
        x: 16,
        y: 241,
        w: 16,
        h: 16
      },
      mountain: {
        x: 32,
        y: 241,
        w: 16,
        h: 21
      },
      wood: {
        x: 48,
        y: 241,
        w: 16,
        h: 16
      },
      hriver: {
        x: 64,
        y: 241,
        w: 16,
        h: 16
      },
      vriver: {
        x: 80,
        y: 241,
        w: 16,
        h: 16
      },
      criver: {
        x: 96,
        y: 241,
        w: 16,
        h: 16
      },
      esriver: {
        x: 112,
        y: 241,
        w: 16,
        h: 16
      },
      swriver: {
        x: 128,
        y: 241,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 144,
        y: 241,
        w: 16,
        h: 16
      },
      neriver: {
        x: 160,
        y: 241,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 176,
        y: 241,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 192,
        y: 241,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 208,
        y: 241,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 224,
        y: 241,
        w: 16,
        h: 16
      },
      hroad: {
        x: 224,
        y: 0,
        w: 16,
        h: 16
      },
      vroad: {
        x: 240,
        y: 0,
        w: 16,
        h: 16
      },
      croad: {
        x: 256,
        y: 0,
        w: 16,
        h: 16
      },
      esroad: {
        x: 240,
        y: 241,
        w: 16,
        h: 16
      },
      swroad: {
        x: 256,
        y: 241,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 272,
        y: 241,
        w: 16,
        h: 16
      },
      neroad: {
        x: 288,
        y: 241,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 336,
        y: 0,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 352,
        y: 0,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 368,
        y: 0,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 384,
        y: 0,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 400,
        y: 0,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 416,
        y: 0,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 432,
        y: 0,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 448,
        y: 0,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 464,
        y: 0,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 480,
        y: 0,
        w: 16,
        h: 16
      },
      reef: {
        x: 496,
        y: 0,
        w: 16,
        h: 16
      },
      neutralcity: {
        x: 0,
        y: 21,
        w: 16,
        h: 22
      },
      neutralbase: {
        x: 16,
        y: 21,
        w: 16,
        h: 25
      },
      neutralairport: {
        x: 32,
        y: 21,
        w: 16,
        h: 18
      },
      neutralport: {
        x: 48,
        y: 21,
        w: 16,
        h: 22
      },
      orangestarcity: {
        x: 64,
        y: 21,
        w: 16,
        h: 22
      },
      orangestarbase: {
        x: 80,
        y: 21,
        w: 16,
        h: 25
      },
      orangestarairport: {
        x: 96,
        y: 21,
        w: 16,
        h: 18
      },
      orangestarport: {
        x: 112,
        y: 21,
        w: 16,
        h: 22
      },
      orangestarhq: {
        x: 128,
        y: 21,
        w: 16,
        h: 31
      },
      bluemooncity: {
        x: 144,
        y: 21,
        w: 16,
        h: 22
      },
      bluemoonbase: {
        x: 160,
        y: 21,
        w: 16,
        h: 25
      },
      bluemoonairport: {
        x: 176,
        y: 21,
        w: 16,
        h: 18
      },
      bluemoonport: {
        x: 192,
        y: 21,
        w: 16,
        h: 22
      },
      bluemoonhq: {
        x: 208,
        y: 21,
        w: 16,
        h: 31
      },
      greenearthcity: {
        x: 224,
        y: 21,
        w: 16,
        h: 22
      },
      greenearthbase: {
        x: 240,
        y: 21,
        w: 16,
        h: 25
      },
      greenearthairport: {
        x: 256,
        y: 21,
        w: 16,
        h: 18
      },
      greenearthport: {
        x: 272,
        y: 21,
        w: 16,
        h: 22
      },
      greenearthhq: {
        x: 288,
        y: 21,
        w: 16,
        h: 31
      },
      yellowcometcity: {
        x: 304,
        y: 21,
        w: 16,
        h: 22
      },
      yellowcometbase: {
        x: 320,
        y: 21,
        w: 16,
        h: 25
      },
      yellowcometairport: {
        x: 336,
        y: 21,
        w: 16,
        h: 18
      },
      yellowcometport: {
        x: 352,
        y: 21,
        w: 16,
        h: 22
      },
      yellowcomethq: {
        x: 368,
        y: 21,
        w: 16,
        h: 31
      },
      redfirecity: {
        x: 384,
        y: 21,
        w: 16,
        h: 22
      },
      redfirebase: {
        x: 400,
        y: 21,
        w: 16,
        h: 25
      },
      redfireairport: {
        x: 416,
        y: 21,
        w: 16,
        h: 18
      },
      redfireport: {
        x: 432,
        y: 21,
        w: 16,
        h: 22
      },
      redfirehq: {
        x: 448,
        y: 21,
        w: 16,
        h: 31
      },
      greyskycity: {
        x: 464,
        y: 21,
        w: 16,
        h: 22
      },
      greyskybase: {
        x: 480,
        y: 21,
        w: 16,
        h: 25
      },
      greyskyairport: {
        x: 496,
        y: 21,
        w: 16,
        h: 18
      },
      greyskyport: {
        x: 0,
        y: 52,
        w: 16,
        h: 22
      },
      greyskyhq: {
        x: 16,
        y: 52,
        w: 16,
        h: 31
      },
      blackholecity: {
        x: 32,
        y: 52,
        w: 16,
        h: 22
      },
      blackholebase: {
        x: 48,
        y: 52,
        w: 16,
        h: 25
      },
      blackholeairport: {
        x: 64,
        y: 52,
        w: 16,
        h: 18
      },
      blackholeport: {
        x: 80,
        y: 52,
        w: 16,
        h: 22
      },
      blackholehq: {
        x: 96,
        y: 52,
        w: 16,
        h: 31
      },
      browndesertcity: {
        x: 112,
        y: 52,
        w: 16,
        h: 22
      },
      browndesertbase: {
        x: 128,
        y: 52,
        w: 16,
        h: 25
      },
      browndesertairport: {
        x: 144,
        y: 52,
        w: 16,
        h: 18
      },
      browndesertport: {
        x: 160,
        y: 52,
        w: 16,
        h: 22
      },
      browndeserthq: {
        x: 176,
        y: 52,
        w: 16,
        h: 31
      },
      vpipe: {
        x: 192,
        y: 52,
        w: 16,
        h: 16
      },
      hpipe: {
        x: 208,
        y: 52,
        w: 16,
        h: 16
      },
      nepipe: {
        x: 224,
        y: 52,
        w: 16,
        h: 16
      },
      espipe: {
        x: 240,
        y: 52,
        w: 16,
        h: 16
      },
      swpipe: {
        x: 256,
        y: 52,
        w: 16,
        h: 16
      },
      wnpipe: {
        x: 272,
        y: 52,
        w: 16,
        h: 16
      },
      npipeend: {
        x: 288,
        y: 52,
        w: 16,
        h: 16
      },
      epipeend: {
        x: 304,
        y: 52,
        w: 16,
        h: 16
      },
      spipeend: {
        x: 320,
        y: 52,
        w: 16,
        h: 16
      },
      wpipeend: {
        x: 336,
        y: 52,
        w: 16,
        h: 16
      },
      missilesilo: {
        x: 352,
        y: 52,
        w: 16,
        h: 24
      },
      missilesiloempty: {
        x: 368,
        y: 52,
        w: 16,
        h: 16
      },
      hpipeseam: {
        x: 384,
        y: 52,
        w: 16,
        h: 16
      },
      vpipeseam: {
        x: 400,
        y: 52,
        w: 16,
        h: 16
      },
      hpiperubble: {
        x: 416,
        y: 52,
        w: 16,
        h: 16
      },
      vpiperubble: {
        x: 432,
        y: 52,
        w: 16,
        h: 16
      },
      amberblazeairport: {
        x: 448,
        y: 52,
        w: 16,
        h: 18
      },
      amberblazebase: {
        x: 464,
        y: 52,
        w: 16,
        h: 25
      },
      amberblazecity: {
        x: 480,
        y: 52,
        w: 16,
        h: 22
      },
      amberblazehq: {
        x: 496,
        y: 52,
        w: 16,
        h: 31
      },
      amberblazeport: {
        x: 0,
        y: 83,
        w: 16,
        h: 22
      },
      jadesunairport: {
        x: 16,
        y: 83,
        w: 16,
        h: 18
      },
      jadesunbase: {
        x: 32,
        y: 83,
        w: 16,
        h: 25
      },
      jadesuncity: {
        x: 48,
        y: 83,
        w: 16,
        h: 22
      },
      jadesunhq: {
        x: 64,
        y: 83,
        w: 16,
        h: 31
      },
      jadesunport: {
        x: 80,
        y: 83,
        w: 16,
        h: 22
      },
      amberblazecomtower: {
        x: 96,
        y: 83,
        w: 16,
        h: 25
      },
      blackholecomtower: {
        x: 112,
        y: 83,
        w: 16,
        h: 25
      },
      bluemooncomtower: {
        x: 128,
        y: 83,
        w: 16,
        h: 25
      },
      browndesertcomtower: {
        x: 144,
        y: 83,
        w: 16,
        h: 25
      },
      greenearthcomtower: {
        x: 160,
        y: 83,
        w: 16,
        h: 25
      },
      jadesuncomtower: {
        x: 176,
        y: 83,
        w: 16,
        h: 25
      },
      neutralcomtower: {
        x: 192,
        y: 83,
        w: 16,
        h: 25
      },
      orangestarcomtower: {
        x: 208,
        y: 83,
        w: 16,
        h: 25
      },
      redfirecomtower: {
        x: 224,
        y: 83,
        w: 16,
        h: 25
      },
      yellowcometcomtower: {
        x: 240,
        y: 83,
        w: 16,
        h: 25
      },
      greyskycomtower: {
        x: 256,
        y: 83,
        w: 16,
        h: 25
      },
      amberblazelab: {
        x: 272,
        y: 83,
        w: 16,
        h: 24
      },
      blackholelab: {
        x: 288,
        y: 83,
        w: 16,
        h: 24
      },
      bluemoonlab: {
        x: 304,
        y: 83,
        w: 16,
        h: 24
      },
      browndesertlab: {
        x: 320,
        y: 83,
        w: 16,
        h: 24
      },
      greenearthlab: {
        x: 336,
        y: 83,
        w: 16,
        h: 24
      },
      greyskylab: {
        x: 352,
        y: 83,
        w: 16,
        h: 24
      },
      jadesunlab: {
        x: 368,
        y: 83,
        w: 16,
        h: 24
      },
      neutrallab: {
        x: 384,
        y: 83,
        w: 16,
        h: 24
      },
      orangestarlab: {
        x: 400,
        y: 83,
        w: 16,
        h: 24
      },
      redfirelab: {
        x: 416,
        y: 83,
        w: 16,
        h: 24
      },
      yellowcometlab: {
        x: 432,
        y: 83,
        w: 16,
        h: 24
      },
      cobalticeairport: {
        x: 448,
        y: 83,
        w: 16,
        h: 18
      },
      cobalticebase: {
        x: 464,
        y: 83,
        w: 16,
        h: 25
      },
      cobalticecity: {
        x: 480,
        y: 83,
        w: 16,
        h: 22
      },
      cobalticecomtower: {
        x: 496,
        y: 83,
        w: 16,
        h: 25
      },
      cobalticehq: {
        x: 0,
        y: 114,
        w: 16,
        h: 31
      },
      cobalticelab: {
        x: 16,
        y: 114,
        w: 16,
        h: 24
      },
      cobalticeport: {
        x: 32,
        y: 114,
        w: 16,
        h: 22
      },
      pinkcosmosairport: {
        x: 48,
        y: 114,
        w: 16,
        h: 18
      },
      pinkcosmosbase: {
        x: 64,
        y: 114,
        w: 16,
        h: 25
      },
      pinkcosmoscity: {
        x: 80,
        y: 114,
        w: 16,
        h: 22
      },
      pinkcosmoscomtower: {
        x: 96,
        y: 114,
        w: 16,
        h: 25
      },
      pinkcosmoshq: {
        x: 112,
        y: 114,
        w: 16,
        h: 31
      },
      pinkcosmoslab: {
        x: 128,
        y: 114,
        w: 16,
        h: 24
      },
      pinkcosmosport: {
        x: 144,
        y: 114,
        w: 16,
        h: 22
      },
      tealgalaxyairport: {
        x: 160,
        y: 114,
        w: 16,
        h: 18
      },
      tealgalaxybase: {
        x: 176,
        y: 114,
        w: 16,
        h: 25
      },
      tealgalaxycity: {
        x: 192,
        y: 114,
        w: 16,
        h: 22
      },
      tealgalaxycomtower: {
        x: 208,
        y: 114,
        w: 16,
        h: 25
      },
      tealgalaxyhq: {
        x: 224,
        y: 114,
        w: 16,
        h: 31
      },
      tealgalaxylab: {
        x: 240,
        y: 114,
        w: 16,
        h: 24
      },
      tealgalaxyport: {
        x: 256,
        y: 114,
        w: 16,
        h: 22
      },
      purplelightningairport: {
        x: 272,
        y: 114,
        w: 16,
        h: 18
      },
      purplelightningbase: {
        x: 288,
        y: 114,
        w: 16,
        h: 25
      },
      purplelightningcity: {
        x: 304,
        y: 114,
        w: 16,
        h: 22
      },
      purplelightningcomtower: {
        x: 320,
        y: 114,
        w: 16,
        h: 25
      },
      purplelightninghq: {
        x: 336,
        y: 114,
        w: 16,
        h: 31
      },
      purplelightninglab: {
        x: 352,
        y: 114,
        w: 16,
        h: 24
      },
      purplelightningport: {
        x: 368,
        y: 114,
        w: 16,
        h: 22
      },
      acidrainairport: {
        x: 384,
        y: 114,
        w: 16,
        h: 18
      },
      acidrainbase: {
        x: 400,
        y: 114,
        w: 16,
        h: 25
      },
      acidraincity: {
        x: 416,
        y: 114,
        w: 16,
        h: 22
      },
      acidraincomtower: {
        x: 432,
        y: 114,
        w: 16,
        h: 25
      },
      acidrainhq: {
        x: 448,
        y: 114,
        w: 16,
        h: 31
      },
      acidrainlab: {
        x: 464,
        y: 114,
        w: 16,
        h: 24
      },
      acidrainport: {
        x: 480,
        y: 114,
        w: 16,
        h: 22
      },
      whitenovaairport: {
        x: 496,
        y: 114,
        w: 16,
        h: 18
      },
      whitenovabase: {
        x: 0,
        y: 145,
        w: 16,
        h: 25
      },
      whitenovacity: {
        x: 16,
        y: 145,
        w: 16,
        h: 22
      },
      whitenovacomtower: {
        x: 32,
        y: 145,
        w: 16,
        h: 25
      },
      whitenovahq: {
        x: 48,
        y: 145,
        w: 16,
        h: 31
      },
      whitenovalab: {
        x: 64,
        y: 145,
        w: 16,
        h: 24
      },
      whitenovaport: {
        x: 80,
        y: 145,
        w: 16,
        h: 22
      },
      teleporter: {
        x: 96,
        y: 145,
        w: 16,
        h: 16
      },
      azureasteroidairport: {
        x: 112,
        y: 145,
        w: 16,
        h: 18
      },
      azureasteroidbase: {
        x: 128,
        y: 145,
        w: 16,
        h: 25
      },
      azureasteroidcity: {
        x: 144,
        y: 145,
        w: 16,
        h: 22
      },
      azureasteroidcomtower: {
        x: 160,
        y: 145,
        w: 16,
        h: 25
      },
      azureasteroidhq: {
        x: 176,
        y: 145,
        w: 16,
        h: 31
      },
      azureasteroidlab: {
        x: 192,
        y: 145,
        w: 16,
        h: 24
      },
      azureasteroidport: {
        x: 208,
        y: 145,
        w: 16,
        h: 22
      },
      noireclipseairport: {
        x: 224,
        y: 145,
        w: 16,
        h: 18
      },
      noireclipsebase: {
        x: 240,
        y: 145,
        w: 16,
        h: 25
      },
      noireclipsecity: {
        x: 256,
        y: 145,
        w: 16,
        h: 22
      },
      noireclipsecomtower: {
        x: 272,
        y: 145,
        w: 16,
        h: 25
      },
      noireclipsehq: {
        x: 288,
        y: 145,
        w: 16,
        h: 31
      },
      noireclipselab: {
        x: 304,
        y: 145,
        w: 16,
        h: 24
      },
      noireclipseport: {
        x: 320,
        y: 145,
        w: 16,
        h: 22
      },
      silverclawairport: {
        x: 336,
        y: 145,
        w: 16,
        h: 18
      },
      silverclawbase: {
        x: 352,
        y: 145,
        w: 16,
        h: 25
      },
      silverclawcity: {
        x: 368,
        y: 145,
        w: 16,
        h: 22
      },
      silverclawcomtower: {
        x: 384,
        y: 145,
        w: 16,
        h: 25
      },
      silverclawhq: {
        x: 400,
        y: 145,
        w: 16,
        h: 32
      },
      silverclawlab: {
        x: 416,
        y: 145,
        w: 16,
        h: 24
      },
      silverclawport: {
        x: 432,
        y: 145,
        w: 16,
        h: 22
      },
      minimountain: {
        x: 304,
        y: 241,
        w: 16,
        h: 16
      },
      shoales: {
        x: 320,
        y: 241,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 336,
        y: 241,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 352,
        y: 241,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 368,
        y: 241,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 16,
        y: 177,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 32,
        y: 177,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 384,
        y: 241,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 64,
        y: 177,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 80,
        y: 177,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 400,
        y: 241,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 416,
        y: 241,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 432,
        y: 241,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 448,
        y: 241,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 160,
        y: 177,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 176,
        y: 177,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 464,
        y: 241,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 208,
        y: 177,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 224,
        y: 177,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 480,
        y: 241,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 496,
        y: 241,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 0,
        y: 262,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 16,
        y: 262,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 32,
        y: 262,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 48,
        y: 262,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 64,
        y: 262,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 80,
        y: 262,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 96,
        y: 262,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 112,
        y: 262,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 128,
        y: 262,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 144,
        y: 262,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 160,
        y: 262,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 448,
        y: 177,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 464,
        y: 177,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 176,
        y: 262,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 496,
        y: 177,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 0,
        y: 193,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 192,
        y: 262,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 208,
        y: 262,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 224,
        y: 262,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 240,
        y: 262,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 80,
        y: 193,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 96,
        y: 193,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 256,
        y: 262,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 128,
        y: 193,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 144,
        y: 193,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 272,
        y: 262,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 288,
        y: 262,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 304,
        y: 262,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 320,
        y: 262,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 336,
        y: 262,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 352,
        y: 262,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 368,
        y: 262,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 384,
        y: 262,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 400,
        y: 262,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 416,
        y: 262,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 432,
        y: 262,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 448,
        y: 262,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 464,
        y: 262,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 480,
        y: 262,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 496,
        y: 262,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 0,
        y: 278,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 16,
        y: 278,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 32,
        y: 278,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 48,
        y: 278,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 64,
        y: 278,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 80,
        y: 278,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 96,
        y: 278,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 112,
        y: 278,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 128,
        y: 278,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 144,
        y: 278,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 160,
        y: 278,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 176,
        y: 278,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 192,
        y: 278,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 208,
        y: 278,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 224,
        y: 278,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 240,
        y: 278,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 256,
        y: 278,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 272,
        y: 278,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 288,
        y: 278,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 304,
        y: 278,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 320,
        y: 278,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 336,
        y: 278,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 352,
        y: 278,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 368,
        y: 278,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 384,
        y: 278,
        w: 16,
        h: 16
      },
      sea0: {
        x: 288,
        y: 209,
        w: 16,
        h: 16
      },
      sea1: {
        x: 400,
        y: 278,
        w: 16,
        h: 16
      },
      sea2: {
        x: 416,
        y: 278,
        w: 16,
        h: 16
      },
      sea4: {
        x: 432,
        y: 278,
        w: 16,
        h: 16
      },
      sea5: {
        x: 448,
        y: 278,
        w: 16,
        h: 16
      },
      sea8: {
        x: 464,
        y: 278,
        w: 16,
        h: 16
      },
      sea9: {
        x: 480,
        y: 278,
        w: 16,
        h: 16
      },
      sea10: {
        x: 496,
        y: 278,
        w: 16,
        h: 16
      },
      sea16: {
        x: 0,
        y: 294,
        w: 16,
        h: 16
      },
      sea17: {
        x: 16,
        y: 294,
        w: 16,
        h: 16
      },
      sea18: {
        x: 32,
        y: 294,
        w: 16,
        h: 16
      },
      sea20: {
        x: 48,
        y: 294,
        w: 16,
        h: 16
      },
      sea21: {
        x: 64,
        y: 294,
        w: 16,
        h: 16
      },
      sea32: {
        x: 80,
        y: 294,
        w: 16,
        h: 16
      },
      sea33: {
        x: 96,
        y: 294,
        w: 16,
        h: 16
      },
      sea34: {
        x: 112,
        y: 294,
        w: 16,
        h: 16
      },
      sea36: {
        x: 128,
        y: 294,
        w: 16,
        h: 16
      },
      sea37: {
        x: 144,
        y: 294,
        w: 16,
        h: 16
      },
      sea40: {
        x: 160,
        y: 294,
        w: 16,
        h: 16
      },
      sea41: {
        x: 176,
        y: 294,
        w: 16,
        h: 16
      },
      sea42: {
        x: 192,
        y: 294,
        w: 16,
        h: 16
      },
      sea64: {
        x: 208,
        y: 294,
        w: 16,
        h: 16
      },
      sea65: {
        x: 224,
        y: 294,
        w: 16,
        h: 16
      },
      sea66: {
        x: 240,
        y: 294,
        w: 16,
        h: 16
      },
      sea68: {
        x: 256,
        y: 294,
        w: 16,
        h: 16
      },
      sea69: {
        x: 272,
        y: 294,
        w: 16,
        h: 16
      },
      sea72: {
        x: 288,
        y: 294,
        w: 16,
        h: 16
      },
      sea73: {
        x: 304,
        y: 294,
        w: 16,
        h: 16
      },
      sea74: {
        x: 320,
        y: 294,
        w: 16,
        h: 16
      },
      sea80: {
        x: 336,
        y: 294,
        w: 16,
        h: 16
      },
      sea81: {
        x: 352,
        y: 294,
        w: 16,
        h: 16
      },
      sea82: {
        x: 368,
        y: 294,
        w: 16,
        h: 16
      },
      sea84: {
        x: 384,
        y: 294,
        w: 16,
        h: 16
      },
      sea85: {
        x: 400,
        y: 294,
        w: 16,
        h: 16
      },
      sea128: {
        x: 416,
        y: 294,
        w: 16,
        h: 16
      },
      sea130: {
        x: 432,
        y: 294,
        w: 16,
        h: 16
      },
      sea132: {
        x: 448,
        y: 294,
        w: 16,
        h: 16
      },
      sea136: {
        x: 464,
        y: 294,
        w: 16,
        h: 16
      },
      sea138: {
        x: 480,
        y: 294,
        w: 16,
        h: 16
      },
      sea144: {
        x: 496,
        y: 294,
        w: 16,
        h: 16
      },
      sea146: {
        x: 0,
        y: 310,
        w: 16,
        h: 16
      },
      sea148: {
        x: 16,
        y: 310,
        w: 16,
        h: 16
      },
      sea160: {
        x: 32,
        y: 310,
        w: 16,
        h: 16
      },
      sea162: {
        x: 48,
        y: 310,
        w: 16,
        h: 16
      },
      sea164: {
        x: 64,
        y: 310,
        w: 16,
        h: 16
      },
      sea168: {
        x: 80,
        y: 310,
        w: 16,
        h: 16
      },
      sea170: {
        x: 96,
        y: 310,
        w: 16,
        h: 16
      }
    },
    snow: {
      plain: {
        x: 112,
        y: 310,
        w: 16,
        h: 16
      },
      mountain: {
        x: 128,
        y: 310,
        w: 16,
        h: 21
      },
      wood: {
        x: 144,
        y: 310,
        w: 16,
        h: 16
      },
      hriver: {
        x: 160,
        y: 310,
        w: 16,
        h: 16
      },
      vriver: {
        x: 176,
        y: 310,
        w: 16,
        h: 16
      },
      criver: {
        x: 192,
        y: 310,
        w: 16,
        h: 16
      },
      esriver: {
        x: 208,
        y: 310,
        w: 16,
        h: 16
      },
      swriver: {
        x: 224,
        y: 310,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 240,
        y: 310,
        w: 16,
        h: 16
      },
      neriver: {
        x: 256,
        y: 310,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 272,
        y: 310,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 288,
        y: 310,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 304,
        y: 310,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 320,
        y: 310,
        w: 16,
        h: 16
      },
      hroad: {
        x: 224,
        y: 0,
        w: 16,
        h: 16
      },
      vroad: {
        x: 240,
        y: 0,
        w: 16,
        h: 16
      },
      croad: {
        x: 256,
        y: 0,
        w: 16,
        h: 16
      },
      esroad: {
        x: 336,
        y: 310,
        w: 16,
        h: 16
      },
      swroad: {
        x: 352,
        y: 310,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 368,
        y: 310,
        w: 16,
        h: 16
      },
      neroad: {
        x: 384,
        y: 310,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 336,
        y: 0,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 352,
        y: 0,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 368,
        y: 0,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 384,
        y: 0,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 400,
        y: 0,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 416,
        y: 0,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 432,
        y: 0,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 448,
        y: 0,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 464,
        y: 0,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 480,
        y: 0,
        w: 16,
        h: 16
      },
      reef: {
        x: 496,
        y: 0,
        w: 16,
        h: 16
      },
      neutralcity: {
        x: 400,
        y: 310,
        w: 16,
        h: 22
      },
      neutralbase: {
        x: 416,
        y: 310,
        w: 16,
        h: 25
      },
      neutralairport: {
        x: 432,
        y: 310,
        w: 16,
        h: 18
      },
      neutralport: {
        x: 448,
        y: 310,
        w: 16,
        h: 22
      },
      orangestarcity: {
        x: 464,
        y: 310,
        w: 16,
        h: 22
      },
      orangestarbase: {
        x: 480,
        y: 310,
        w: 16,
        h: 25
      },
      orangestarairport: {
        x: 496,
        y: 310,
        w: 16,
        h: 18
      },
      orangestarport: {
        x: 0,
        y: 335,
        w: 16,
        h: 22
      },
      orangestarhq: {
        x: 16,
        y: 335,
        w: 16,
        h: 31
      },
      bluemooncity: {
        x: 32,
        y: 335,
        w: 16,
        h: 22
      },
      bluemoonbase: {
        x: 48,
        y: 335,
        w: 16,
        h: 25
      },
      bluemoonairport: {
        x: 64,
        y: 335,
        w: 16,
        h: 18
      },
      bluemoonport: {
        x: 80,
        y: 335,
        w: 16,
        h: 22
      },
      bluemoonhq: {
        x: 96,
        y: 335,
        w: 16,
        h: 31
      },
      greenearthcity: {
        x: 112,
        y: 335,
        w: 16,
        h: 22
      },
      greenearthbase: {
        x: 128,
        y: 335,
        w: 16,
        h: 25
      },
      greenearthairport: {
        x: 144,
        y: 335,
        w: 16,
        h: 18
      },
      greenearthport: {
        x: 160,
        y: 335,
        w: 16,
        h: 22
      },
      greenearthhq: {
        x: 176,
        y: 335,
        w: 16,
        h: 31
      },
      yellowcometcity: {
        x: 192,
        y: 335,
        w: 16,
        h: 22
      },
      yellowcometbase: {
        x: 208,
        y: 335,
        w: 16,
        h: 25
      },
      yellowcometairport: {
        x: 224,
        y: 335,
        w: 16,
        h: 18
      },
      yellowcometport: {
        x: 240,
        y: 335,
        w: 16,
        h: 22
      },
      yellowcomethq: {
        x: 256,
        y: 335,
        w: 16,
        h: 31
      },
      redfirecity: {
        x: 272,
        y: 335,
        w: 16,
        h: 22
      },
      redfirebase: {
        x: 288,
        y: 335,
        w: 16,
        h: 25
      },
      redfireairport: {
        x: 304,
        y: 335,
        w: 16,
        h: 18
      },
      redfireport: {
        x: 320,
        y: 335,
        w: 16,
        h: 22
      },
      redfirehq: {
        x: 336,
        y: 335,
        w: 16,
        h: 31
      },
      greyskycity: {
        x: 352,
        y: 335,
        w: 16,
        h: 22
      },
      greyskybase: {
        x: 368,
        y: 335,
        w: 16,
        h: 25
      },
      greyskyairport: {
        x: 384,
        y: 335,
        w: 16,
        h: 18
      },
      greyskyport: {
        x: 400,
        y: 335,
        w: 16,
        h: 22
      },
      greyskyhq: {
        x: 416,
        y: 335,
        w: 16,
        h: 31
      },
      blackholecity: {
        x: 432,
        y: 335,
        w: 16,
        h: 22
      },
      blackholebase: {
        x: 448,
        y: 335,
        w: 16,
        h: 25
      },
      blackholeairport: {
        x: 464,
        y: 335,
        w: 16,
        h: 18
      },
      blackholeport: {
        x: 480,
        y: 335,
        w: 16,
        h: 22
      },
      blackholehq: {
        x: 496,
        y: 335,
        w: 16,
        h: 31
      },
      browndesertcity: {
        x: 0,
        y: 366,
        w: 16,
        h: 22
      },
      browndesertbase: {
        x: 16,
        y: 366,
        w: 16,
        h: 25
      },
      browndesertairport: {
        x: 32,
        y: 366,
        w: 16,
        h: 18
      },
      browndesertport: {
        x: 48,
        y: 366,
        w: 16,
        h: 22
      },
      browndeserthq: {
        x: 64,
        y: 366,
        w: 16,
        h: 31
      },
      vpipe: {
        x: 192,
        y: 52,
        w: 16,
        h: 16
      },
      hpipe: {
        x: 208,
        y: 52,
        w: 16,
        h: 16
      },
      nepipe: {
        x: 224,
        y: 52,
        w: 16,
        h: 16
      },
      espipe: {
        x: 240,
        y: 52,
        w: 16,
        h: 16
      },
      swpipe: {
        x: 256,
        y: 52,
        w: 16,
        h: 16
      },
      wnpipe: {
        x: 272,
        y: 52,
        w: 16,
        h: 16
      },
      npipeend: {
        x: 288,
        y: 52,
        w: 16,
        h: 16
      },
      epipeend: {
        x: 304,
        y: 52,
        w: 16,
        h: 16
      },
      spipeend: {
        x: 320,
        y: 52,
        w: 16,
        h: 16
      },
      wpipeend: {
        x: 336,
        y: 52,
        w: 16,
        h: 16
      },
      missilesilo: {
        x: 352,
        y: 52,
        w: 16,
        h: 24
      },
      missilesiloempty: {
        x: 368,
        y: 52,
        w: 16,
        h: 16
      },
      hpipeseam: {
        x: 384,
        y: 52,
        w: 16,
        h: 16
      },
      vpipeseam: {
        x: 400,
        y: 52,
        w: 16,
        h: 16
      },
      hpiperubble: {
        x: 416,
        y: 52,
        w: 16,
        h: 16
      },
      vpiperubble: {
        x: 432,
        y: 52,
        w: 16,
        h: 16
      },
      amberblazeairport: {
        x: 80,
        y: 366,
        w: 16,
        h: 18
      },
      amberblazebase: {
        x: 96,
        y: 366,
        w: 16,
        h: 25
      },
      amberblazecity: {
        x: 112,
        y: 366,
        w: 16,
        h: 22
      },
      amberblazehq: {
        x: 128,
        y: 366,
        w: 16,
        h: 31
      },
      amberblazeport: {
        x: 144,
        y: 366,
        w: 16,
        h: 22
      },
      jadesunairport: {
        x: 160,
        y: 366,
        w: 16,
        h: 18
      },
      jadesunbase: {
        x: 176,
        y: 366,
        w: 16,
        h: 25
      },
      jadesuncity: {
        x: 192,
        y: 366,
        w: 16,
        h: 22
      },
      jadesunhq: {
        x: 208,
        y: 366,
        w: 16,
        h: 31
      },
      jadesunport: {
        x: 224,
        y: 366,
        w: 16,
        h: 22
      },
      amberblazecomtower: {
        x: 240,
        y: 366,
        w: 16,
        h: 25
      },
      blackholecomtower: {
        x: 256,
        y: 366,
        w: 16,
        h: 25
      },
      bluemooncomtower: {
        x: 272,
        y: 366,
        w: 16,
        h: 25
      },
      browndesertcomtower: {
        x: 288,
        y: 366,
        w: 16,
        h: 25
      },
      greenearthcomtower: {
        x: 304,
        y: 366,
        w: 16,
        h: 25
      },
      jadesuncomtower: {
        x: 320,
        y: 366,
        w: 16,
        h: 25
      },
      neutralcomtower: {
        x: 336,
        y: 366,
        w: 16,
        h: 25
      },
      orangestarcomtower: {
        x: 352,
        y: 366,
        w: 16,
        h: 25
      },
      redfirecomtower: {
        x: 368,
        y: 366,
        w: 16,
        h: 25
      },
      yellowcometcomtower: {
        x: 384,
        y: 366,
        w: 16,
        h: 25
      },
      greyskycomtower: {
        x: 400,
        y: 366,
        w: 16,
        h: 25
      },
      amberblazelab: {
        x: 416,
        y: 366,
        w: 16,
        h: 24
      },
      blackholelab: {
        x: 432,
        y: 366,
        w: 16,
        h: 24
      },
      bluemoonlab: {
        x: 448,
        y: 366,
        w: 16,
        h: 24
      },
      browndesertlab: {
        x: 464,
        y: 366,
        w: 16,
        h: 24
      },
      greenearthlab: {
        x: 480,
        y: 366,
        w: 16,
        h: 24
      },
      greyskylab: {
        x: 496,
        y: 366,
        w: 16,
        h: 24
      },
      jadesunlab: {
        x: 0,
        y: 397,
        w: 16,
        h: 24
      },
      neutrallab: {
        x: 16,
        y: 397,
        w: 16,
        h: 24
      },
      orangestarlab: {
        x: 32,
        y: 397,
        w: 16,
        h: 24
      },
      redfirelab: {
        x: 48,
        y: 397,
        w: 16,
        h: 24
      },
      yellowcometlab: {
        x: 64,
        y: 397,
        w: 16,
        h: 24
      },
      cobalticeairport: {
        x: 80,
        y: 397,
        w: 16,
        h: 18
      },
      cobalticebase: {
        x: 96,
        y: 397,
        w: 16,
        h: 25
      },
      cobalticecity: {
        x: 112,
        y: 397,
        w: 16,
        h: 22
      },
      cobalticecomtower: {
        x: 128,
        y: 397,
        w: 16,
        h: 25
      },
      cobalticehq: {
        x: 0,
        y: 114,
        w: 16,
        h: 31
      },
      cobalticelab: {
        x: 144,
        y: 397,
        w: 16,
        h: 24
      },
      cobalticeport: {
        x: 160,
        y: 397,
        w: 16,
        h: 22
      },
      pinkcosmosairport: {
        x: 176,
        y: 397,
        w: 16,
        h: 18
      },
      pinkcosmosbase: {
        x: 192,
        y: 397,
        w: 16,
        h: 25
      },
      pinkcosmoscity: {
        x: 208,
        y: 397,
        w: 16,
        h: 22
      },
      pinkcosmoscomtower: {
        x: 224,
        y: 397,
        w: 16,
        h: 25
      },
      pinkcosmoshq: {
        x: 240,
        y: 397,
        w: 16,
        h: 31
      },
      pinkcosmoslab: {
        x: 256,
        y: 397,
        w: 16,
        h: 24
      },
      pinkcosmosport: {
        x: 272,
        y: 397,
        w: 16,
        h: 22
      },
      tealgalaxyairport: {
        x: 288,
        y: 397,
        w: 16,
        h: 18
      },
      tealgalaxybase: {
        x: 304,
        y: 397,
        w: 16,
        h: 25
      },
      tealgalaxycity: {
        x: 320,
        y: 397,
        w: 16,
        h: 22
      },
      tealgalaxycomtower: {
        x: 336,
        y: 397,
        w: 16,
        h: 25
      },
      tealgalaxyhq: {
        x: 352,
        y: 397,
        w: 16,
        h: 31
      },
      tealgalaxylab: {
        x: 368,
        y: 397,
        w: 16,
        h: 24
      },
      tealgalaxyport: {
        x: 384,
        y: 397,
        w: 16,
        h: 22
      },
      purplelightningairport: {
        x: 400,
        y: 397,
        w: 16,
        h: 18
      },
      purplelightningbase: {
        x: 416,
        y: 397,
        w: 16,
        h: 25
      },
      purplelightningcity: {
        x: 432,
        y: 397,
        w: 16,
        h: 22
      },
      purplelightningcomtower: {
        x: 448,
        y: 397,
        w: 16,
        h: 25
      },
      purplelightninghq: {
        x: 464,
        y: 397,
        w: 16,
        h: 31
      },
      purplelightninglab: {
        x: 480,
        y: 397,
        w: 16,
        h: 24
      },
      purplelightningport: {
        x: 496,
        y: 397,
        w: 16,
        h: 22
      },
      acidrainairport: {
        x: 0,
        y: 428,
        w: 16,
        h: 18
      },
      acidrainbase: {
        x: 16,
        y: 428,
        w: 16,
        h: 25
      },
      acidraincity: {
        x: 32,
        y: 428,
        w: 16,
        h: 22
      },
      acidraincomtower: {
        x: 48,
        y: 428,
        w: 16,
        h: 25
      },
      acidrainhq: {
        x: 64,
        y: 428,
        w: 16,
        h: 31
      },
      acidrainlab: {
        x: 80,
        y: 428,
        w: 16,
        h: 24
      },
      acidrainport: {
        x: 96,
        y: 428,
        w: 16,
        h: 22
      },
      whitenovaairport: {
        x: 112,
        y: 428,
        w: 16,
        h: 18
      },
      whitenovabase: {
        x: 128,
        y: 428,
        w: 16,
        h: 25
      },
      whitenovacity: {
        x: 144,
        y: 428,
        w: 16,
        h: 22
      },
      whitenovacomtower: {
        x: 160,
        y: 428,
        w: 16,
        h: 25
      },
      whitenovahq: {
        x: 176,
        y: 428,
        w: 16,
        h: 31
      },
      whitenovalab: {
        x: 192,
        y: 428,
        w: 16,
        h: 24
      },
      whitenovaport: {
        x: 208,
        y: 428,
        w: 16,
        h: 22
      },
      teleporter: {
        x: 96,
        y: 145,
        w: 16,
        h: 16
      },
      azureasteroidairport: {
        x: 224,
        y: 428,
        w: 16,
        h: 18
      },
      azureasteroidbase: {
        x: 240,
        y: 428,
        w: 16,
        h: 25
      },
      azureasteroidcity: {
        x: 256,
        y: 428,
        w: 16,
        h: 22
      },
      azureasteroidcomtower: {
        x: 272,
        y: 428,
        w: 16,
        h: 25
      },
      azureasteroidhq: {
        x: 288,
        y: 428,
        w: 16,
        h: 31
      },
      azureasteroidlab: {
        x: 304,
        y: 428,
        w: 16,
        h: 24
      },
      azureasteroidport: {
        x: 320,
        y: 428,
        w: 16,
        h: 22
      },
      noireclipseairport: {
        x: 336,
        y: 428,
        w: 16,
        h: 18
      },
      noireclipsebase: {
        x: 352,
        y: 428,
        w: 16,
        h: 25
      },
      noireclipsecity: {
        x: 368,
        y: 428,
        w: 16,
        h: 22
      },
      noireclipsecomtower: {
        x: 384,
        y: 428,
        w: 16,
        h: 25
      },
      noireclipsehq: {
        x: 400,
        y: 428,
        w: 16,
        h: 31
      },
      noireclipselab: {
        x: 416,
        y: 428,
        w: 16,
        h: 24
      },
      noireclipseport: {
        x: 432,
        y: 428,
        w: 16,
        h: 22
      },
      silverclawairport: {
        x: 448,
        y: 428,
        w: 16,
        h: 18
      },
      silverclawbase: {
        x: 464,
        y: 428,
        w: 16,
        h: 25
      },
      silverclawcity: {
        x: 480,
        y: 428,
        w: 16,
        h: 22
      },
      silverclawcomtower: {
        x: 496,
        y: 428,
        w: 16,
        h: 25
      },
      silverclawhq: {
        x: 0,
        y: 459,
        w: 16,
        h: 32
      },
      silverclawlab: {
        x: 16,
        y: 459,
        w: 16,
        h: 24
      },
      silverclawport: {
        x: 32,
        y: 459,
        w: 16,
        h: 22
      },
      minimountain: {
        x: 48,
        y: 459,
        w: 16,
        h: 16
      },
      shoales: {
        x: 64,
        y: 459,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 80,
        y: 459,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 96,
        y: 459,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 112,
        y: 459,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 16,
        y: 177,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 32,
        y: 177,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 128,
        y: 459,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 64,
        y: 177,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 80,
        y: 177,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 144,
        y: 459,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 160,
        y: 459,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 176,
        y: 459,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 192,
        y: 459,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 160,
        y: 177,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 176,
        y: 177,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 208,
        y: 459,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 208,
        y: 177,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 224,
        y: 177,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 224,
        y: 459,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 240,
        y: 459,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 256,
        y: 459,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 272,
        y: 459,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 288,
        y: 459,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 304,
        y: 459,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 320,
        y: 459,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 336,
        y: 459,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 352,
        y: 459,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 368,
        y: 459,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 384,
        y: 459,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 400,
        y: 459,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 416,
        y: 459,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 448,
        y: 177,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 464,
        y: 177,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 432,
        y: 459,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 496,
        y: 177,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 0,
        y: 193,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 448,
        y: 459,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 464,
        y: 459,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 480,
        y: 459,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 496,
        y: 459,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 80,
        y: 193,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 96,
        y: 193,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 0,
        y: 491,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 128,
        y: 193,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 144,
        y: 193,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 16,
        y: 491,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 32,
        y: 491,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 48,
        y: 491,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 64,
        y: 491,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 80,
        y: 491,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 96,
        y: 491,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 112,
        y: 491,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 128,
        y: 491,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 144,
        y: 491,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 160,
        y: 491,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 176,
        y: 491,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 192,
        y: 491,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 208,
        y: 491,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 224,
        y: 491,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 240,
        y: 491,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 256,
        y: 491,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 272,
        y: 491,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 288,
        y: 491,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 304,
        y: 491,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 320,
        y: 491,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 336,
        y: 491,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 352,
        y: 491,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 368,
        y: 491,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 384,
        y: 491,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 400,
        y: 491,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 416,
        y: 491,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 432,
        y: 491,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 448,
        y: 491,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 464,
        y: 491,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 480,
        y: 491,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 496,
        y: 491,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 0,
        y: 507,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 16,
        y: 507,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 32,
        y: 507,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 48,
        y: 507,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 64,
        y: 507,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 80,
        y: 507,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 96,
        y: 507,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 112,
        y: 507,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 128,
        y: 507,
        w: 16,
        h: 16
      },
      sea0: {
        x: 288,
        y: 209,
        w: 16,
        h: 16
      },
      sea1: {
        x: 144,
        y: 507,
        w: 16,
        h: 16
      },
      sea2: {
        x: 160,
        y: 507,
        w: 16,
        h: 16
      },
      sea4: {
        x: 176,
        y: 507,
        w: 16,
        h: 16
      },
      sea5: {
        x: 192,
        y: 507,
        w: 16,
        h: 16
      },
      sea8: {
        x: 208,
        y: 507,
        w: 16,
        h: 16
      },
      sea9: {
        x: 224,
        y: 507,
        w: 16,
        h: 16
      },
      sea10: {
        x: 240,
        y: 507,
        w: 16,
        h: 16
      },
      sea16: {
        x: 256,
        y: 507,
        w: 16,
        h: 16
      },
      sea17: {
        x: 272,
        y: 507,
        w: 16,
        h: 16
      },
      sea18: {
        x: 288,
        y: 507,
        w: 16,
        h: 16
      },
      sea20: {
        x: 304,
        y: 507,
        w: 16,
        h: 16
      },
      sea21: {
        x: 320,
        y: 507,
        w: 16,
        h: 16
      },
      sea32: {
        x: 336,
        y: 507,
        w: 16,
        h: 16
      },
      sea33: {
        x: 352,
        y: 507,
        w: 16,
        h: 16
      },
      sea34: {
        x: 368,
        y: 507,
        w: 16,
        h: 16
      },
      sea36: {
        x: 384,
        y: 507,
        w: 16,
        h: 16
      },
      sea37: {
        x: 400,
        y: 507,
        w: 16,
        h: 16
      },
      sea40: {
        x: 416,
        y: 507,
        w: 16,
        h: 16
      },
      sea41: {
        x: 432,
        y: 507,
        w: 16,
        h: 16
      },
      sea42: {
        x: 448,
        y: 507,
        w: 16,
        h: 16
      },
      sea64: {
        x: 464,
        y: 507,
        w: 16,
        h: 16
      },
      sea65: {
        x: 480,
        y: 507,
        w: 16,
        h: 16
      },
      sea66: {
        x: 496,
        y: 507,
        w: 16,
        h: 16
      },
      sea68: {
        x: 0,
        y: 523,
        w: 16,
        h: 16
      },
      sea69: {
        x: 16,
        y: 523,
        w: 16,
        h: 16
      },
      sea72: {
        x: 32,
        y: 523,
        w: 16,
        h: 16
      },
      sea73: {
        x: 48,
        y: 523,
        w: 16,
        h: 16
      },
      sea74: {
        x: 64,
        y: 523,
        w: 16,
        h: 16
      },
      sea80: {
        x: 80,
        y: 523,
        w: 16,
        h: 16
      },
      sea81: {
        x: 96,
        y: 523,
        w: 16,
        h: 16
      },
      sea82: {
        x: 112,
        y: 523,
        w: 16,
        h: 16
      },
      sea84: {
        x: 128,
        y: 523,
        w: 16,
        h: 16
      },
      sea85: {
        x: 144,
        y: 523,
        w: 16,
        h: 16
      },
      sea128: {
        x: 160,
        y: 523,
        w: 16,
        h: 16
      },
      sea130: {
        x: 176,
        y: 523,
        w: 16,
        h: 16
      },
      sea132: {
        x: 192,
        y: 523,
        w: 16,
        h: 16
      },
      sea136: {
        x: 208,
        y: 523,
        w: 16,
        h: 16
      },
      sea138: {
        x: 224,
        y: 523,
        w: 16,
        h: 16
      },
      sea144: {
        x: 240,
        y: 523,
        w: 16,
        h: 16
      },
      sea146: {
        x: 256,
        y: 523,
        w: 16,
        h: 16
      },
      sea148: {
        x: 272,
        y: 523,
        w: 16,
        h: 16
      },
      sea160: {
        x: 288,
        y: 523,
        w: 16,
        h: 16
      },
      sea162: {
        x: 304,
        y: 523,
        w: 16,
        h: 16
      },
      sea164: {
        x: 320,
        y: 523,
        w: 16,
        h: 16
      },
      sea168: {
        x: 336,
        y: 523,
        w: 16,
        h: 16
      },
      sea170: {
        x: 352,
        y: 523,
        w: 16,
        h: 16
      }
    }
  },
  'terrain/aw2/': __AW2_TILESET,
  'terrain/desert/': {
    clear: {
      plain: {
        x: 179,
        y: 866,
        w: 16,
        h: 16
      },
      mountain: {
        x: 195,
        y: 866,
        w: 16,
        h: 20
      },
      wood: {
        x: 211,
        y: 866,
        w: 16,
        h: 16
      },
      hriver: {
        x: 227,
        y: 866,
        w: 16,
        h: 16
      },
      vriver: {
        x: 243,
        y: 866,
        w: 16,
        h: 16
      },
      criver: {
        x: 259,
        y: 866,
        w: 16,
        h: 16
      },
      esriver: {
        x: 275,
        y: 866,
        w: 16,
        h: 16
      },
      swriver: {
        x: 291,
        y: 866,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 307,
        y: 866,
        w: 16,
        h: 16
      },
      neriver: {
        x: 323,
        y: 866,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 339,
        y: 866,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 355,
        y: 866,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 371,
        y: 866,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 387,
        y: 866,
        w: 16,
        h: 16
      },
      hroad: {
        x: 403,
        y: 866,
        w: 16,
        h: 16
      },
      vroad: {
        x: 419,
        y: 866,
        w: 16,
        h: 16
      },
      croad: {
        x: 435,
        y: 866,
        w: 16,
        h: 16
      },
      esroad: {
        x: 451,
        y: 866,
        w: 16,
        h: 16
      },
      swroad: {
        x: 467,
        y: 866,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 483,
        y: 866,
        w: 16,
        h: 16
      },
      neroad: {
        x: 0,
        y: 890,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 16,
        y: 890,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 32,
        y: 890,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 48,
        y: 890,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 64,
        y: 890,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 80,
        y: 890,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 96,
        y: 890,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 112,
        y: 890,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 128,
        y: 890,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 144,
        y: 890,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 160,
        y: 890,
        w: 16,
        h: 16
      },
      reef: {
        x: 176,
        y: 890,
        w: 16,
        h: 16
      },
      minimountain: {
        x: 192,
        y: 890,
        w: 16,
        h: 16
      },
      shoales: {
        x: 208,
        y: 890,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 224,
        y: 890,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 240,
        y: 890,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 256,
        y: 890,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 272,
        y: 890,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 288,
        y: 890,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 304,
        y: 890,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 320,
        y: 890,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 336,
        y: 890,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 352,
        y: 890,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 368,
        y: 890,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 384,
        y: 890,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 400,
        y: 890,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 416,
        y: 890,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 432,
        y: 890,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 448,
        y: 890,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 464,
        y: 890,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 480,
        y: 890,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 496,
        y: 890,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 0,
        y: 906,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 16,
        y: 906,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 32,
        y: 906,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 48,
        y: 906,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 64,
        y: 906,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 80,
        y: 906,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 96,
        y: 906,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 112,
        y: 906,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 128,
        y: 906,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 144,
        y: 906,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 160,
        y: 906,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 176,
        y: 906,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 192,
        y: 906,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 208,
        y: 906,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 224,
        y: 906,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 240,
        y: 906,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 256,
        y: 906,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 272,
        y: 906,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 288,
        y: 906,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 304,
        y: 906,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 320,
        y: 906,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 336,
        y: 906,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 352,
        y: 906,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 368,
        y: 906,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 384,
        y: 906,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 400,
        y: 906,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 416,
        y: 906,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 432,
        y: 906,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 448,
        y: 906,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 464,
        y: 906,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 480,
        y: 906,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 496,
        y: 906,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 0,
        y: 922,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 16,
        y: 922,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 32,
        y: 922,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 48,
        y: 922,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 64,
        y: 922,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 80,
        y: 922,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 96,
        y: 922,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 112,
        y: 922,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 128,
        y: 922,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 144,
        y: 922,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 160,
        y: 922,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 176,
        y: 922,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 192,
        y: 922,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 208,
        y: 922,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 224,
        y: 922,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 240,
        y: 922,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 256,
        y: 922,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 272,
        y: 922,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 288,
        y: 922,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 304,
        y: 922,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 320,
        y: 922,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 336,
        y: 922,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 352,
        y: 922,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 368,
        y: 922,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 384,
        y: 922,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 400,
        y: 922,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 416,
        y: 922,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 432,
        y: 922,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 448,
        y: 922,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 464,
        y: 922,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 480,
        y: 922,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 496,
        y: 922,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 0,
        y: 938,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 16,
        y: 938,
        w: 16,
        h: 16
      },
      sea0: {
        x: 32,
        y: 938,
        w: 16,
        h: 16
      },
      sea1: {
        x: 48,
        y: 938,
        w: 16,
        h: 16
      },
      sea2: {
        x: 64,
        y: 938,
        w: 16,
        h: 16
      },
      sea4: {
        x: 80,
        y: 938,
        w: 16,
        h: 16
      },
      sea5: {
        x: 96,
        y: 938,
        w: 16,
        h: 16
      },
      sea8: {
        x: 112,
        y: 938,
        w: 16,
        h: 16
      },
      sea9: {
        x: 128,
        y: 938,
        w: 16,
        h: 16
      },
      sea10: {
        x: 144,
        y: 938,
        w: 16,
        h: 16
      },
      sea16: {
        x: 160,
        y: 938,
        w: 16,
        h: 16
      },
      sea17: {
        x: 176,
        y: 938,
        w: 16,
        h: 16
      },
      sea18: {
        x: 192,
        y: 938,
        w: 16,
        h: 16
      },
      sea20: {
        x: 208,
        y: 938,
        w: 16,
        h: 16
      },
      sea21: {
        x: 224,
        y: 938,
        w: 16,
        h: 16
      },
      sea32: {
        x: 240,
        y: 938,
        w: 16,
        h: 16
      },
      sea33: {
        x: 256,
        y: 938,
        w: 16,
        h: 16
      },
      sea34: {
        x: 272,
        y: 938,
        w: 16,
        h: 16
      },
      sea36: {
        x: 288,
        y: 938,
        w: 16,
        h: 16
      },
      sea37: {
        x: 304,
        y: 938,
        w: 16,
        h: 16
      },
      sea40: {
        x: 320,
        y: 938,
        w: 16,
        h: 16
      },
      sea41: {
        x: 336,
        y: 938,
        w: 16,
        h: 16
      },
      sea42: {
        x: 352,
        y: 938,
        w: 16,
        h: 16
      },
      sea64: {
        x: 368,
        y: 938,
        w: 16,
        h: 16
      },
      sea65: {
        x: 384,
        y: 938,
        w: 16,
        h: 16
      },
      sea66: {
        x: 400,
        y: 938,
        w: 16,
        h: 16
      },
      sea68: {
        x: 416,
        y: 938,
        w: 16,
        h: 16
      },
      sea69: {
        x: 432,
        y: 938,
        w: 16,
        h: 16
      },
      sea72: {
        x: 448,
        y: 938,
        w: 16,
        h: 16
      },
      sea73: {
        x: 464,
        y: 938,
        w: 16,
        h: 16
      },
      sea74: {
        x: 480,
        y: 938,
        w: 16,
        h: 16
      },
      sea80: {
        x: 496,
        y: 938,
        w: 16,
        h: 16
      },
      sea81: {
        x: 0,
        y: 954,
        w: 16,
        h: 16
      },
      sea82: {
        x: 16,
        y: 954,
        w: 16,
        h: 16
      },
      sea84: {
        x: 32,
        y: 954,
        w: 16,
        h: 16
      },
      sea85: {
        x: 48,
        y: 954,
        w: 16,
        h: 16
      },
      sea128: {
        x: 64,
        y: 954,
        w: 16,
        h: 16
      },
      sea130: {
        x: 80,
        y: 954,
        w: 16,
        h: 16
      },
      sea132: {
        x: 96,
        y: 954,
        w: 16,
        h: 16
      },
      sea136: {
        x: 112,
        y: 954,
        w: 16,
        h: 16
      },
      sea138: {
        x: 128,
        y: 954,
        w: 16,
        h: 16
      },
      sea144: {
        x: 144,
        y: 954,
        w: 16,
        h: 16
      },
      sea146: {
        x: 160,
        y: 954,
        w: 16,
        h: 16
      },
      sea148: {
        x: 176,
        y: 954,
        w: 16,
        h: 16
      },
      sea160: {
        x: 192,
        y: 954,
        w: 16,
        h: 16
      },
      sea162: {
        x: 208,
        y: 954,
        w: 16,
        h: 16
      },
      sea164: {
        x: 224,
        y: 954,
        w: 16,
        h: 16
      },
      sea168: {
        x: 240,
        y: 954,
        w: 16,
        h: 16
      },
      sea170: {
        x: 256,
        y: 954,
        w: 16,
        h: 16
      }
    },
    rain: {
      plain: {
        x: 179,
        y: 866,
        w: 16,
        h: 16
      },
      mountain: {
        x: 195,
        y: 866,
        w: 16,
        h: 20
      },
      wood: {
        x: 211,
        y: 866,
        w: 16,
        h: 16
      },
      hriver: {
        x: 227,
        y: 866,
        w: 16,
        h: 16
      },
      vriver: {
        x: 243,
        y: 866,
        w: 16,
        h: 16
      },
      criver: {
        x: 259,
        y: 866,
        w: 16,
        h: 16
      },
      esriver: {
        x: 275,
        y: 866,
        w: 16,
        h: 16
      },
      swriver: {
        x: 291,
        y: 866,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 307,
        y: 866,
        w: 16,
        h: 16
      },
      neriver: {
        x: 323,
        y: 866,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 339,
        y: 866,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 355,
        y: 866,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 371,
        y: 866,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 387,
        y: 866,
        w: 16,
        h: 16
      },
      hroad: {
        x: 403,
        y: 866,
        w: 16,
        h: 16
      },
      vroad: {
        x: 419,
        y: 866,
        w: 16,
        h: 16
      },
      croad: {
        x: 435,
        y: 866,
        w: 16,
        h: 16
      },
      esroad: {
        x: 451,
        y: 866,
        w: 16,
        h: 16
      },
      swroad: {
        x: 467,
        y: 866,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 483,
        y: 866,
        w: 16,
        h: 16
      },
      neroad: {
        x: 0,
        y: 890,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 16,
        y: 890,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 32,
        y: 890,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 48,
        y: 890,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 64,
        y: 890,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 80,
        y: 890,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 96,
        y: 890,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 112,
        y: 890,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 128,
        y: 890,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 144,
        y: 890,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 160,
        y: 890,
        w: 16,
        h: 16
      },
      reef: {
        x: 176,
        y: 890,
        w: 16,
        h: 16
      },
      minimountain: {
        x: 192,
        y: 890,
        w: 16,
        h: 16
      },
      shoales: {
        x: 208,
        y: 890,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 224,
        y: 890,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 240,
        y: 890,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 256,
        y: 890,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 272,
        y: 890,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 288,
        y: 890,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 304,
        y: 890,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 320,
        y: 890,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 336,
        y: 890,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 352,
        y: 890,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 368,
        y: 890,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 384,
        y: 890,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 400,
        y: 890,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 416,
        y: 890,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 432,
        y: 890,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 448,
        y: 890,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 464,
        y: 890,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 480,
        y: 890,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 496,
        y: 890,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 0,
        y: 906,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 16,
        y: 906,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 32,
        y: 906,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 48,
        y: 906,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 64,
        y: 906,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 80,
        y: 906,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 96,
        y: 906,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 112,
        y: 906,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 128,
        y: 906,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 144,
        y: 906,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 160,
        y: 906,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 176,
        y: 906,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 192,
        y: 906,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 208,
        y: 906,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 224,
        y: 906,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 240,
        y: 906,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 256,
        y: 906,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 272,
        y: 906,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 288,
        y: 906,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 304,
        y: 906,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 320,
        y: 906,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 336,
        y: 906,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 352,
        y: 906,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 368,
        y: 906,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 384,
        y: 906,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 400,
        y: 906,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 416,
        y: 906,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 432,
        y: 906,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 448,
        y: 906,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 464,
        y: 906,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 480,
        y: 906,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 496,
        y: 906,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 0,
        y: 922,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 16,
        y: 922,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 32,
        y: 922,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 48,
        y: 922,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 64,
        y: 922,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 80,
        y: 922,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 96,
        y: 922,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 112,
        y: 922,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 128,
        y: 922,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 144,
        y: 922,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 160,
        y: 922,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 176,
        y: 922,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 192,
        y: 922,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 208,
        y: 922,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 224,
        y: 922,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 240,
        y: 922,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 256,
        y: 922,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 272,
        y: 922,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 288,
        y: 922,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 304,
        y: 922,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 320,
        y: 922,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 336,
        y: 922,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 352,
        y: 922,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 368,
        y: 922,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 384,
        y: 922,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 400,
        y: 922,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 416,
        y: 922,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 432,
        y: 922,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 448,
        y: 922,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 464,
        y: 922,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 480,
        y: 922,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 496,
        y: 922,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 0,
        y: 938,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 16,
        y: 938,
        w: 16,
        h: 16
      },
      sea0: {
        x: 32,
        y: 938,
        w: 16,
        h: 16
      },
      sea1: {
        x: 48,
        y: 938,
        w: 16,
        h: 16
      },
      sea2: {
        x: 64,
        y: 938,
        w: 16,
        h: 16
      },
      sea4: {
        x: 80,
        y: 938,
        w: 16,
        h: 16
      },
      sea5: {
        x: 96,
        y: 938,
        w: 16,
        h: 16
      },
      sea8: {
        x: 112,
        y: 938,
        w: 16,
        h: 16
      },
      sea9: {
        x: 128,
        y: 938,
        w: 16,
        h: 16
      },
      sea10: {
        x: 144,
        y: 938,
        w: 16,
        h: 16
      },
      sea16: {
        x: 160,
        y: 938,
        w: 16,
        h: 16
      },
      sea17: {
        x: 176,
        y: 938,
        w: 16,
        h: 16
      },
      sea18: {
        x: 192,
        y: 938,
        w: 16,
        h: 16
      },
      sea20: {
        x: 208,
        y: 938,
        w: 16,
        h: 16
      },
      sea21: {
        x: 224,
        y: 938,
        w: 16,
        h: 16
      },
      sea32: {
        x: 240,
        y: 938,
        w: 16,
        h: 16
      },
      sea33: {
        x: 256,
        y: 938,
        w: 16,
        h: 16
      },
      sea34: {
        x: 272,
        y: 938,
        w: 16,
        h: 16
      },
      sea36: {
        x: 288,
        y: 938,
        w: 16,
        h: 16
      },
      sea37: {
        x: 304,
        y: 938,
        w: 16,
        h: 16
      },
      sea40: {
        x: 320,
        y: 938,
        w: 16,
        h: 16
      },
      sea41: {
        x: 336,
        y: 938,
        w: 16,
        h: 16
      },
      sea42: {
        x: 352,
        y: 938,
        w: 16,
        h: 16
      },
      sea64: {
        x: 368,
        y: 938,
        w: 16,
        h: 16
      },
      sea65: {
        x: 384,
        y: 938,
        w: 16,
        h: 16
      },
      sea66: {
        x: 400,
        y: 938,
        w: 16,
        h: 16
      },
      sea68: {
        x: 416,
        y: 938,
        w: 16,
        h: 16
      },
      sea69: {
        x: 432,
        y: 938,
        w: 16,
        h: 16
      },
      sea72: {
        x: 448,
        y: 938,
        w: 16,
        h: 16
      },
      sea73: {
        x: 464,
        y: 938,
        w: 16,
        h: 16
      },
      sea74: {
        x: 480,
        y: 938,
        w: 16,
        h: 16
      },
      sea80: {
        x: 496,
        y: 938,
        w: 16,
        h: 16
      },
      sea81: {
        x: 0,
        y: 954,
        w: 16,
        h: 16
      },
      sea82: {
        x: 16,
        y: 954,
        w: 16,
        h: 16
      },
      sea84: {
        x: 32,
        y: 954,
        w: 16,
        h: 16
      },
      sea85: {
        x: 48,
        y: 954,
        w: 16,
        h: 16
      },
      sea128: {
        x: 64,
        y: 954,
        w: 16,
        h: 16
      },
      sea130: {
        x: 80,
        y: 954,
        w: 16,
        h: 16
      },
      sea132: {
        x: 96,
        y: 954,
        w: 16,
        h: 16
      },
      sea136: {
        x: 112,
        y: 954,
        w: 16,
        h: 16
      },
      sea138: {
        x: 128,
        y: 954,
        w: 16,
        h: 16
      },
      sea144: {
        x: 144,
        y: 954,
        w: 16,
        h: 16
      },
      sea146: {
        x: 160,
        y: 954,
        w: 16,
        h: 16
      },
      sea148: {
        x: 176,
        y: 954,
        w: 16,
        h: 16
      },
      sea160: {
        x: 192,
        y: 954,
        w: 16,
        h: 16
      },
      sea162: {
        x: 208,
        y: 954,
        w: 16,
        h: 16
      },
      sea164: {
        x: 224,
        y: 954,
        w: 16,
        h: 16
      },
      sea168: {
        x: 240,
        y: 954,
        w: 16,
        h: 16
      },
      sea170: {
        x: 256,
        y: 954,
        w: 16,
        h: 16
      }
    },
    snow: {
      plain: {
        x: 272,
        y: 954,
        w: 16,
        h: 16
      },
      mountain: {
        x: 288,
        y: 954,
        w: 16,
        h: 20
      },
      wood: {
        x: 304,
        y: 954,
        w: 16,
        h: 16
      },
      hriver: {
        x: 320,
        y: 954,
        w: 16,
        h: 16
      },
      vriver: {
        x: 336,
        y: 954,
        w: 16,
        h: 16
      },
      criver: {
        x: 352,
        y: 954,
        w: 16,
        h: 16
      },
      esriver: {
        x: 368,
        y: 954,
        w: 16,
        h: 16
      },
      swriver: {
        x: 384,
        y: 954,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 400,
        y: 954,
        w: 16,
        h: 16
      },
      neriver: {
        x: 416,
        y: 954,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 432,
        y: 954,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 448,
        y: 954,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 464,
        y: 954,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 480,
        y: 954,
        w: 16,
        h: 16
      },
      hroad: {
        x: 496,
        y: 954,
        w: 16,
        h: 16
      },
      vroad: {
        x: 0,
        y: 974,
        w: 16,
        h: 16
      },
      croad: {
        x: 16,
        y: 974,
        w: 16,
        h: 16
      },
      esroad: {
        x: 32,
        y: 974,
        w: 16,
        h: 16
      },
      swroad: {
        x: 48,
        y: 974,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 64,
        y: 974,
        w: 16,
        h: 16
      },
      neroad: {
        x: 80,
        y: 974,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 96,
        y: 974,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 112,
        y: 974,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 128,
        y: 974,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 144,
        y: 974,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 160,
        y: 974,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 176,
        y: 974,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 192,
        y: 974,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 208,
        y: 974,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 224,
        y: 974,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 240,
        y: 974,
        w: 16,
        h: 16
      },
      reef: {
        x: 256,
        y: 974,
        w: 16,
        h: 16
      },
      minimountain: {
        x: 272,
        y: 974,
        w: 16,
        h: 16
      },
      shoales: {
        x: 288,
        y: 974,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 304,
        y: 974,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 320,
        y: 974,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 336,
        y: 974,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 352,
        y: 974,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 368,
        y: 974,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 384,
        y: 974,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 400,
        y: 974,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 416,
        y: 974,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 432,
        y: 974,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 448,
        y: 974,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 464,
        y: 974,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 480,
        y: 974,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 496,
        y: 974,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 0,
        y: 990,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 16,
        y: 990,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 32,
        y: 990,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 48,
        y: 990,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 64,
        y: 990,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 80,
        y: 990,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 96,
        y: 990,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 112,
        y: 990,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 128,
        y: 990,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 144,
        y: 990,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 160,
        y: 990,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 176,
        y: 990,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 192,
        y: 990,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 208,
        y: 990,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 224,
        y: 990,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 240,
        y: 990,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 256,
        y: 990,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 272,
        y: 990,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 288,
        y: 990,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 304,
        y: 990,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 320,
        y: 990,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 336,
        y: 990,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 352,
        y: 990,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 368,
        y: 990,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 384,
        y: 990,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 400,
        y: 990,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 416,
        y: 990,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 432,
        y: 990,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 448,
        y: 990,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 464,
        y: 990,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 400,
        y: 906,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 480,
        y: 990,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 496,
        y: 990,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 0,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 16,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 32,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 48,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 64,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 80,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 96,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 112,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 128,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 144,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 160,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 176,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 192,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 208,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 224,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 240,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 256,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 272,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 288,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 304,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 320,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 336,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 352,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 368,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 384,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 400,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 416,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 432,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 448,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 464,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 480,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 496,
        y: 1006,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 0,
        y: 1022,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 16,
        y: 1022,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 32,
        y: 1022,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 48,
        y: 1022,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 64,
        y: 1022,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 80,
        y: 1022,
        w: 16,
        h: 16
      },
      sea0: {
        x: 96,
        y: 1022,
        w: 16,
        h: 16
      },
      sea1: {
        x: 112,
        y: 1022,
        w: 16,
        h: 16
      },
      sea2: {
        x: 128,
        y: 1022,
        w: 16,
        h: 16
      },
      sea4: {
        x: 144,
        y: 1022,
        w: 16,
        h: 16
      },
      sea5: {
        x: 160,
        y: 1022,
        w: 16,
        h: 16
      },
      sea8: {
        x: 176,
        y: 1022,
        w: 16,
        h: 16
      },
      sea9: {
        x: 192,
        y: 1022,
        w: 16,
        h: 16
      },
      sea10: {
        x: 208,
        y: 1022,
        w: 16,
        h: 16
      },
      sea16: {
        x: 224,
        y: 1022,
        w: 16,
        h: 16
      },
      sea17: {
        x: 240,
        y: 1022,
        w: 16,
        h: 16
      },
      sea18: {
        x: 256,
        y: 1022,
        w: 16,
        h: 16
      },
      sea20: {
        x: 272,
        y: 1022,
        w: 16,
        h: 16
      },
      sea21: {
        x: 288,
        y: 1022,
        w: 16,
        h: 16
      },
      sea32: {
        x: 304,
        y: 1022,
        w: 16,
        h: 16
      },
      sea33: {
        x: 320,
        y: 1022,
        w: 16,
        h: 16
      },
      sea34: {
        x: 336,
        y: 1022,
        w: 16,
        h: 16
      },
      sea36: {
        x: 352,
        y: 1022,
        w: 16,
        h: 16
      },
      sea37: {
        x: 368,
        y: 1022,
        w: 16,
        h: 16
      },
      sea40: {
        x: 384,
        y: 1022,
        w: 16,
        h: 16
      },
      sea41: {
        x: 400,
        y: 1022,
        w: 16,
        h: 16
      },
      sea42: {
        x: 416,
        y: 1022,
        w: 16,
        h: 16
      },
      sea64: {
        x: 432,
        y: 1022,
        w: 16,
        h: 16
      },
      sea65: {
        x: 448,
        y: 1022,
        w: 16,
        h: 16
      },
      sea66: {
        x: 464,
        y: 1022,
        w: 16,
        h: 16
      },
      sea68: {
        x: 480,
        y: 1022,
        w: 16,
        h: 16
      },
      sea69: {
        x: 496,
        y: 1022,
        w: 16,
        h: 16
      },
      sea72: {
        x: 0,
        y: 1038,
        w: 16,
        h: 16
      },
      sea73: {
        x: 16,
        y: 1038,
        w: 16,
        h: 16
      },
      sea74: {
        x: 32,
        y: 1038,
        w: 16,
        h: 16
      },
      sea80: {
        x: 48,
        y: 1038,
        w: 16,
        h: 16
      },
      sea81: {
        x: 64,
        y: 1038,
        w: 16,
        h: 16
      },
      sea82: {
        x: 80,
        y: 1038,
        w: 16,
        h: 16
      },
      sea84: {
        x: 96,
        y: 1038,
        w: 16,
        h: 16
      },
      sea85: {
        x: 112,
        y: 1038,
        w: 16,
        h: 16
      },
      sea128: {
        x: 128,
        y: 1038,
        w: 16,
        h: 16
      },
      sea130: {
        x: 144,
        y: 1038,
        w: 16,
        h: 16
      },
      sea132: {
        x: 160,
        y: 1038,
        w: 16,
        h: 16
      },
      sea136: {
        x: 176,
        y: 1038,
        w: 16,
        h: 16
      },
      sea138: {
        x: 192,
        y: 1038,
        w: 16,
        h: 16
      },
      sea144: {
        x: 208,
        y: 1038,
        w: 16,
        h: 16
      },
      sea146: {
        x: 224,
        y: 1038,
        w: 16,
        h: 16
      },
      sea148: {
        x: 240,
        y: 1038,
        w: 16,
        h: 16
      },
      sea160: {
        x: 256,
        y: 1038,
        w: 16,
        h: 16
      },
      sea162: {
        x: 272,
        y: 1038,
        w: 16,
        h: 16
      },
      sea164: {
        x: 288,
        y: 1038,
        w: 16,
        h: 16
      },
      sea168: {
        x: 304,
        y: 1038,
        w: 16,
        h: 16
      },
      sea170: {
        x: 320,
        y: 1038,
        w: 16,
        h: 16
      }
    }
  },
  'terrain/dor/': {
    clear: {
      plain: {
        x: 394,
        y: 1038,
        w: 16,
        h: 16
      },
      mountain: {
        x: 410,
        y: 1038,
        w: 16,
        h: 22
      },
      wood: {
        x: 426,
        y: 1038,
        w: 16,
        h: 16
      },
      hriver: {
        x: 442,
        y: 1038,
        w: 16,
        h: 16
      },
      vriver: {
        x: 458,
        y: 1038,
        w: 16,
        h: 16
      },
      criver: {
        x: 474,
        y: 1038,
        w: 16,
        h: 16
      },
      esriver: {
        x: 490,
        y: 1038,
        w: 16,
        h: 16
      },
      swriver: {
        x: 0,
        y: 1060,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 16,
        y: 1060,
        w: 16,
        h: 16
      },
      neriver: {
        x: 32,
        y: 1060,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 48,
        y: 1060,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 64,
        y: 1060,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 80,
        y: 1060,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 96,
        y: 1060,
        w: 16,
        h: 16
      },
      hroad: {
        x: 112,
        y: 1060,
        w: 16,
        h: 16
      },
      vroad: {
        x: 128,
        y: 1060,
        w: 16,
        h: 16
      },
      croad: {
        x: 144,
        y: 1060,
        w: 16,
        h: 16
      },
      esroad: {
        x: 160,
        y: 1060,
        w: 16,
        h: 16
      },
      swroad: {
        x: 176,
        y: 1060,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 192,
        y: 1060,
        w: 16,
        h: 16
      },
      neroad: {
        x: 208,
        y: 1060,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 224,
        y: 1060,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 240,
        y: 1060,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 256,
        y: 1060,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 272,
        y: 1060,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 288,
        y: 1060,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 304,
        y: 1060,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 320,
        y: 1060,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 336,
        y: 1060,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 352,
        y: 1060,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 368,
        y: 1060,
        w: 16,
        h: 16
      },
      reef: {
        x: 384,
        y: 1060,
        w: 16,
        h: 16
      },
      minimountain: {
        x: 400,
        y: 1060,
        w: 16,
        h: 16
      },
      shoales: {
        x: 416,
        y: 1060,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 432,
        y: 1060,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 448,
        y: 1060,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 464,
        y: 1060,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 480,
        y: 1060,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 496,
        y: 1060,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 0,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 16,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 32,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 48,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 64,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 80,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 96,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 112,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 128,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 144,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 160,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 176,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 192,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 208,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 224,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 240,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 256,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 272,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 288,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 304,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 320,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 336,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 352,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 368,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 384,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 400,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 416,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 432,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 448,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 464,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 480,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 496,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 0,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 16,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 32,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 48,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 64,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 80,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 96,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 112,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 128,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 144,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 160,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 176,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 192,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 208,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 224,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 240,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 256,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 272,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 288,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 304,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 320,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 336,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 352,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 368,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 384,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 400,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 416,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 432,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 448,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 464,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 480,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 496,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 0,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 16,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 32,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 48,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 64,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 80,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 96,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 112,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 128,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 144,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 160,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 176,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 192,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 208,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 224,
        y: 1108,
        w: 16,
        h: 16
      },
      sea0: {
        x: 240,
        y: 1108,
        w: 16,
        h: 16
      },
      sea1: {
        x: 256,
        y: 1108,
        w: 16,
        h: 16
      },
      sea2: {
        x: 272,
        y: 1108,
        w: 16,
        h: 16
      },
      sea4: {
        x: 288,
        y: 1108,
        w: 16,
        h: 16
      },
      sea5: {
        x: 304,
        y: 1108,
        w: 16,
        h: 16
      },
      sea8: {
        x: 320,
        y: 1108,
        w: 16,
        h: 16
      },
      sea9: {
        x: 336,
        y: 1108,
        w: 16,
        h: 16
      },
      sea10: {
        x: 352,
        y: 1108,
        w: 16,
        h: 16
      },
      sea16: {
        x: 368,
        y: 1108,
        w: 16,
        h: 16
      },
      sea17: {
        x: 384,
        y: 1108,
        w: 16,
        h: 16
      },
      sea18: {
        x: 400,
        y: 1108,
        w: 16,
        h: 16
      },
      sea20: {
        x: 416,
        y: 1108,
        w: 16,
        h: 16
      },
      sea21: {
        x: 432,
        y: 1108,
        w: 16,
        h: 16
      },
      sea32: {
        x: 448,
        y: 1108,
        w: 16,
        h: 16
      },
      sea33: {
        x: 464,
        y: 1108,
        w: 16,
        h: 16
      },
      sea34: {
        x: 480,
        y: 1108,
        w: 16,
        h: 16
      },
      sea36: {
        x: 496,
        y: 1108,
        w: 16,
        h: 16
      },
      sea37: {
        x: 0,
        y: 1124,
        w: 16,
        h: 16
      },
      sea40: {
        x: 16,
        y: 1124,
        w: 16,
        h: 16
      },
      sea41: {
        x: 32,
        y: 1124,
        w: 16,
        h: 16
      },
      sea42: {
        x: 48,
        y: 1124,
        w: 16,
        h: 16
      },
      sea64: {
        x: 64,
        y: 1124,
        w: 16,
        h: 16
      },
      sea65: {
        x: 80,
        y: 1124,
        w: 16,
        h: 16
      },
      sea66: {
        x: 96,
        y: 1124,
        w: 16,
        h: 16
      },
      sea68: {
        x: 112,
        y: 1124,
        w: 16,
        h: 16
      },
      sea69: {
        x: 128,
        y: 1124,
        w: 16,
        h: 16
      },
      sea72: {
        x: 144,
        y: 1124,
        w: 16,
        h: 16
      },
      sea73: {
        x: 160,
        y: 1124,
        w: 16,
        h: 16
      },
      sea74: {
        x: 176,
        y: 1124,
        w: 16,
        h: 16
      },
      sea80: {
        x: 192,
        y: 1124,
        w: 16,
        h: 16
      },
      sea81: {
        x: 208,
        y: 1124,
        w: 16,
        h: 16
      },
      sea82: {
        x: 224,
        y: 1124,
        w: 16,
        h: 16
      },
      sea84: {
        x: 240,
        y: 1124,
        w: 16,
        h: 16
      },
      sea85: {
        x: 256,
        y: 1124,
        w: 16,
        h: 16
      },
      sea128: {
        x: 272,
        y: 1124,
        w: 16,
        h: 16
      },
      sea130: {
        x: 288,
        y: 1124,
        w: 16,
        h: 16
      },
      sea132: {
        x: 304,
        y: 1124,
        w: 16,
        h: 16
      },
      sea136: {
        x: 320,
        y: 1124,
        w: 16,
        h: 16
      },
      sea138: {
        x: 336,
        y: 1124,
        w: 16,
        h: 16
      },
      sea144: {
        x: 352,
        y: 1124,
        w: 16,
        h: 16
      },
      sea146: {
        x: 368,
        y: 1124,
        w: 16,
        h: 16
      },
      sea148: {
        x: 384,
        y: 1124,
        w: 16,
        h: 16
      },
      sea160: {
        x: 400,
        y: 1124,
        w: 16,
        h: 16
      },
      sea162: {
        x: 416,
        y: 1124,
        w: 16,
        h: 16
      },
      sea164: {
        x: 432,
        y: 1124,
        w: 16,
        h: 16
      },
      sea168: {
        x: 448,
        y: 1124,
        w: 16,
        h: 16
      },
      sea170: {
        x: 464,
        y: 1124,
        w: 16,
        h: 16
      }
    },
    rain: {
      plain: {
        x: 394,
        y: 1038,
        w: 16,
        h: 16
      },
      mountain: {
        x: 410,
        y: 1038,
        w: 16,
        h: 22
      },
      wood: {
        x: 426,
        y: 1038,
        w: 16,
        h: 16
      },
      hriver: {
        x: 442,
        y: 1038,
        w: 16,
        h: 16
      },
      vriver: {
        x: 458,
        y: 1038,
        w: 16,
        h: 16
      },
      criver: {
        x: 474,
        y: 1038,
        w: 16,
        h: 16
      },
      esriver: {
        x: 490,
        y: 1038,
        w: 16,
        h: 16
      },
      swriver: {
        x: 0,
        y: 1060,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 16,
        y: 1060,
        w: 16,
        h: 16
      },
      neriver: {
        x: 32,
        y: 1060,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 48,
        y: 1060,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 64,
        y: 1060,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 80,
        y: 1060,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 96,
        y: 1060,
        w: 16,
        h: 16
      },
      hroad: {
        x: 112,
        y: 1060,
        w: 16,
        h: 16
      },
      vroad: {
        x: 128,
        y: 1060,
        w: 16,
        h: 16
      },
      croad: {
        x: 144,
        y: 1060,
        w: 16,
        h: 16
      },
      esroad: {
        x: 160,
        y: 1060,
        w: 16,
        h: 16
      },
      swroad: {
        x: 176,
        y: 1060,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 192,
        y: 1060,
        w: 16,
        h: 16
      },
      neroad: {
        x: 208,
        y: 1060,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 224,
        y: 1060,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 240,
        y: 1060,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 256,
        y: 1060,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 272,
        y: 1060,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 288,
        y: 1060,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 304,
        y: 1060,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 320,
        y: 1060,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 336,
        y: 1060,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 352,
        y: 1060,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 368,
        y: 1060,
        w: 16,
        h: 16
      },
      reef: {
        x: 384,
        y: 1060,
        w: 16,
        h: 16
      },
      minimountain: {
        x: 400,
        y: 1060,
        w: 16,
        h: 16
      },
      shoales: {
        x: 416,
        y: 1060,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 432,
        y: 1060,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 448,
        y: 1060,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 464,
        y: 1060,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 480,
        y: 1060,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 496,
        y: 1060,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 0,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 16,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 32,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 48,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 64,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 80,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 96,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 112,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 128,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 144,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 160,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 176,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 192,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 208,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 224,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 240,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 256,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 272,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 288,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 304,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 320,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 336,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 352,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 368,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 384,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 400,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 416,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 432,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 448,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 464,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 480,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 496,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 0,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 16,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 32,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 48,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 64,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 80,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 96,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 112,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 128,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 144,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 160,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 176,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 192,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 208,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 224,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 240,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 256,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 272,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 288,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 304,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 320,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 336,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 352,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 368,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 384,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 400,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 416,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 432,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 448,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 464,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 480,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 496,
        y: 1092,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 0,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 16,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 32,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 48,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 64,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 80,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 96,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 112,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 128,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 144,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 160,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 176,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 192,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 208,
        y: 1108,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 224,
        y: 1108,
        w: 16,
        h: 16
      },
      sea0: {
        x: 240,
        y: 1108,
        w: 16,
        h: 16
      },
      sea1: {
        x: 256,
        y: 1108,
        w: 16,
        h: 16
      },
      sea2: {
        x: 272,
        y: 1108,
        w: 16,
        h: 16
      },
      sea4: {
        x: 288,
        y: 1108,
        w: 16,
        h: 16
      },
      sea5: {
        x: 304,
        y: 1108,
        w: 16,
        h: 16
      },
      sea8: {
        x: 320,
        y: 1108,
        w: 16,
        h: 16
      },
      sea9: {
        x: 336,
        y: 1108,
        w: 16,
        h: 16
      },
      sea10: {
        x: 352,
        y: 1108,
        w: 16,
        h: 16
      },
      sea16: {
        x: 368,
        y: 1108,
        w: 16,
        h: 16
      },
      sea17: {
        x: 384,
        y: 1108,
        w: 16,
        h: 16
      },
      sea18: {
        x: 400,
        y: 1108,
        w: 16,
        h: 16
      },
      sea20: {
        x: 416,
        y: 1108,
        w: 16,
        h: 16
      },
      sea21: {
        x: 432,
        y: 1108,
        w: 16,
        h: 16
      },
      sea32: {
        x: 448,
        y: 1108,
        w: 16,
        h: 16
      },
      sea33: {
        x: 464,
        y: 1108,
        w: 16,
        h: 16
      },
      sea34: {
        x: 480,
        y: 1108,
        w: 16,
        h: 16
      },
      sea36: {
        x: 496,
        y: 1108,
        w: 16,
        h: 16
      },
      sea37: {
        x: 0,
        y: 1124,
        w: 16,
        h: 16
      },
      sea40: {
        x: 16,
        y: 1124,
        w: 16,
        h: 16
      },
      sea41: {
        x: 32,
        y: 1124,
        w: 16,
        h: 16
      },
      sea42: {
        x: 48,
        y: 1124,
        w: 16,
        h: 16
      },
      sea64: {
        x: 64,
        y: 1124,
        w: 16,
        h: 16
      },
      sea65: {
        x: 80,
        y: 1124,
        w: 16,
        h: 16
      },
      sea66: {
        x: 96,
        y: 1124,
        w: 16,
        h: 16
      },
      sea68: {
        x: 112,
        y: 1124,
        w: 16,
        h: 16
      },
      sea69: {
        x: 128,
        y: 1124,
        w: 16,
        h: 16
      },
      sea72: {
        x: 144,
        y: 1124,
        w: 16,
        h: 16
      },
      sea73: {
        x: 160,
        y: 1124,
        w: 16,
        h: 16
      },
      sea74: {
        x: 176,
        y: 1124,
        w: 16,
        h: 16
      },
      sea80: {
        x: 192,
        y: 1124,
        w: 16,
        h: 16
      },
      sea81: {
        x: 208,
        y: 1124,
        w: 16,
        h: 16
      },
      sea82: {
        x: 224,
        y: 1124,
        w: 16,
        h: 16
      },
      sea84: {
        x: 240,
        y: 1124,
        w: 16,
        h: 16
      },
      sea85: {
        x: 256,
        y: 1124,
        w: 16,
        h: 16
      },
      sea128: {
        x: 272,
        y: 1124,
        w: 16,
        h: 16
      },
      sea130: {
        x: 288,
        y: 1124,
        w: 16,
        h: 16
      },
      sea132: {
        x: 304,
        y: 1124,
        w: 16,
        h: 16
      },
      sea136: {
        x: 320,
        y: 1124,
        w: 16,
        h: 16
      },
      sea138: {
        x: 336,
        y: 1124,
        w: 16,
        h: 16
      },
      sea144: {
        x: 352,
        y: 1124,
        w: 16,
        h: 16
      },
      sea146: {
        x: 368,
        y: 1124,
        w: 16,
        h: 16
      },
      sea148: {
        x: 384,
        y: 1124,
        w: 16,
        h: 16
      },
      sea160: {
        x: 400,
        y: 1124,
        w: 16,
        h: 16
      },
      sea162: {
        x: 416,
        y: 1124,
        w: 16,
        h: 16
      },
      sea164: {
        x: 432,
        y: 1124,
        w: 16,
        h: 16
      },
      sea168: {
        x: 448,
        y: 1124,
        w: 16,
        h: 16
      },
      sea170: {
        x: 464,
        y: 1124,
        w: 16,
        h: 16
      }
    },
    snow: {
      plain: {
        x: 480,
        y: 1124,
        w: 16,
        h: 16
      },
      mountain: {
        x: 496,
        y: 1124,
        w: 16,
        h: 22
      },
      wood: {
        x: 0,
        y: 1146,
        w: 16,
        h: 16
      },
      hriver: {
        x: 16,
        y: 1146,
        w: 16,
        h: 16
      },
      vriver: {
        x: 32,
        y: 1146,
        w: 16,
        h: 16
      },
      criver: {
        x: 48,
        y: 1146,
        w: 16,
        h: 16
      },
      esriver: {
        x: 64,
        y: 1146,
        w: 16,
        h: 16
      },
      swriver: {
        x: 80,
        y: 1146,
        w: 16,
        h: 16
      },
      wnriver: {
        x: 96,
        y: 1146,
        w: 16,
        h: 16
      },
      neriver: {
        x: 112,
        y: 1146,
        w: 16,
        h: 16
      },
      eswriver: {
        x: 128,
        y: 1146,
        w: 16,
        h: 16
      },
      swnriver: {
        x: 144,
        y: 1146,
        w: 16,
        h: 16
      },
      wneriver: {
        x: 160,
        y: 1146,
        w: 16,
        h: 16
      },
      nesriver: {
        x: 176,
        y: 1146,
        w: 16,
        h: 16
      },
      hroad: {
        x: 192,
        y: 1146,
        w: 16,
        h: 16
      },
      vroad: {
        x: 208,
        y: 1146,
        w: 16,
        h: 16
      },
      croad: {
        x: 224,
        y: 1146,
        w: 16,
        h: 16
      },
      esroad: {
        x: 240,
        y: 1146,
        w: 16,
        h: 16
      },
      swroad: {
        x: 256,
        y: 1146,
        w: 16,
        h: 16
      },
      wnroad: {
        x: 272,
        y: 1146,
        w: 16,
        h: 16
      },
      neroad: {
        x: 288,
        y: 1146,
        w: 16,
        h: 16
      },
      eswroad: {
        x: 304,
        y: 1146,
        w: 16,
        h: 16
      },
      swnroad: {
        x: 320,
        y: 1146,
        w: 16,
        h: 16
      },
      wneroad: {
        x: 336,
        y: 1146,
        w: 16,
        h: 16
      },
      nesroad: {
        x: 352,
        y: 1146,
        w: 16,
        h: 16
      },
      hbridge: {
        x: 368,
        y: 1146,
        w: 16,
        h: 16
      },
      vbridge: {
        x: 384,
        y: 1146,
        w: 16,
        h: 16
      },
      hshoal: {
        x: 400,
        y: 1146,
        w: 16,
        h: 16
      },
      hshoaln: {
        x: 416,
        y: 1146,
        w: 16,
        h: 16
      },
      vshoal: {
        x: 432,
        y: 1146,
        w: 16,
        h: 16
      },
      vshoale: {
        x: 448,
        y: 1146,
        w: 16,
        h: 16
      },
      reef: {
        x: 464,
        y: 1146,
        w: 16,
        h: 16
      },
      minimountain: {
        x: 480,
        y: 1146,
        w: 16,
        h: 16
      },
      shoales: {
        x: 496,
        y: 1146,
        w: 16,
        h: 16
      },
      shoalsw: {
        x: 0,
        y: 1162,
        w: 16,
        h: 16
      },
      shoalwn: {
        x: 16,
        y: 1162,
        w: 16,
        h: 16
      },
      shoalne: {
        x: 32,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal0: {
        x: 480,
        y: 1060,
        w: 16,
        h: 16
      },
      shoal1: {
        x: 496,
        y: 1060,
        w: 16,
        h: 16
      },
      shoal2: {
        x: 48,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal3: {
        x: 16,
        y: 1076,
        w: 16,
        h: 16
      },
      shoal4: {
        x: 64,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal5: {
        x: 80,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal6: {
        x: 96,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal7: {
        x: 112,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal8: {
        x: 128,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal9: {
        x: 144,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal10: {
        x: 160,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal11: {
        x: 176,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal12: {
        x: 192,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal13: {
        x: 208,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal14: {
        x: 224,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal15: {
        x: 240,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal16: {
        x: 256,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal17: {
        x: 272,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal18: {
        x: 288,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal19: {
        x: 304,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal20: {
        x: 320,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal21: {
        x: 336,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal22: {
        x: 352,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal23: {
        x: 368,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal24: {
        x: 384,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal25: {
        x: 400,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal26: {
        x: 416,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal27: {
        x: 432,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal28: {
        x: 448,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal29: {
        x: 464,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal30: {
        x: 480,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal31: {
        x: 496,
        y: 1162,
        w: 16,
        h: 16
      },
      shoal32: {
        x: 0,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal33: {
        x: 16,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal34: {
        x: 32,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal35: {
        x: 48,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal36: {
        x: 64,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal37: {
        x: 80,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal38: {
        x: 96,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal39: {
        x: 112,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal40: {
        x: 128,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal41: {
        x: 144,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal42: {
        x: 160,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal43: {
        x: 176,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal44: {
        x: 192,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal45: {
        x: 208,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal46: {
        x: 224,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal47: {
        x: 240,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal48: {
        x: 256,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal49: {
        x: 272,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal50: {
        x: 288,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal51: {
        x: 304,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal52: {
        x: 320,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal53: {
        x: 336,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal54: {
        x: 352,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal55: {
        x: 368,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal56: {
        x: 384,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal57: {
        x: 400,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal58: {
        x: 416,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal59: {
        x: 432,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal60: {
        x: 448,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal61: {
        x: 464,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal62: {
        x: 480,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal63: {
        x: 496,
        y: 1178,
        w: 16,
        h: 16
      },
      shoal64: {
        x: 0,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal65: {
        x: 16,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal66: {
        x: 32,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal67: {
        x: 48,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal68: {
        x: 64,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal69: {
        x: 80,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal70: {
        x: 96,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal71: {
        x: 112,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal72: {
        x: 128,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal73: {
        x: 144,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal74: {
        x: 160,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal75: {
        x: 176,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal76: {
        x: 192,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal77: {
        x: 208,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal78: {
        x: 224,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal79: {
        x: 240,
        y: 1194,
        w: 16,
        h: 16
      },
      shoal80: {
        x: 256,
        y: 1194,
        w: 16,
        h: 16
      },
      sea0: {
        x: 272,
        y: 1194,
        w: 16,
        h: 16
      },
      sea1: {
        x: 288,
        y: 1194,
        w: 16,
        h: 16
      },
      sea2: {
        x: 304,
        y: 1194,
        w: 16,
        h: 16
      },
      sea4: {
        x: 320,
        y: 1194,
        w: 16,
        h: 16
      },
      sea5: {
        x: 336,
        y: 1194,
        w: 16,
        h: 16
      },
      sea8: {
        x: 352,
        y: 1194,
        w: 16,
        h: 16
      },
      sea9: {
        x: 368,
        y: 1194,
        w: 16,
        h: 16
      },
      sea10: {
        x: 384,
        y: 1194,
        w: 16,
        h: 16
      },
      sea16: {
        x: 400,
        y: 1194,
        w: 16,
        h: 16
      },
      sea17: {
        x: 416,
        y: 1194,
        w: 16,
        h: 16
      },
      sea18: {
        x: 432,
        y: 1194,
        w: 16,
        h: 16
      },
      sea20: {
        x: 448,
        y: 1194,
        w: 16,
        h: 16
      },
      sea21: {
        x: 464,
        y: 1194,
        w: 16,
        h: 16
      },
      sea32: {
        x: 480,
        y: 1194,
        w: 16,
        h: 16
      },
      sea33: {
        x: 496,
        y: 1194,
        w: 16,
        h: 16
      },
      sea34: {
        x: 0,
        y: 1210,
        w: 16,
        h: 16
      },
      sea36: {
        x: 16,
        y: 1210,
        w: 16,
        h: 16
      },
      sea37: {
        x: 32,
        y: 1210,
        w: 16,
        h: 16
      },
      sea40: {
        x: 48,
        y: 1210,
        w: 16,
        h: 16
      },
      sea41: {
        x: 64,
        y: 1210,
        w: 16,
        h: 16
      },
      sea42: {
        x: 80,
        y: 1210,
        w: 16,
        h: 16
      },
      sea64: {
        x: 96,
        y: 1210,
        w: 16,
        h: 16
      },
      sea65: {
        x: 112,
        y: 1210,
        w: 16,
        h: 16
      },
      sea66: {
        x: 128,
        y: 1210,
        w: 16,
        h: 16
      },
      sea68: {
        x: 144,
        y: 1210,
        w: 16,
        h: 16
      },
      sea69: {
        x: 160,
        y: 1210,
        w: 16,
        h: 16
      },
      sea72: {
        x: 176,
        y: 1210,
        w: 16,
        h: 16
      },
      sea73: {
        x: 192,
        y: 1210,
        w: 16,
        h: 16
      },
      sea74: {
        x: 208,
        y: 1210,
        w: 16,
        h: 16
      },
      sea80: {
        x: 224,
        y: 1210,
        w: 16,
        h: 16
      },
      sea81: {
        x: 240,
        y: 1210,
        w: 16,
        h: 16
      },
      sea82: {
        x: 256,
        y: 1210,
        w: 16,
        h: 16
      },
      sea84: {
        x: 272,
        y: 1210,
        w: 16,
        h: 16
      },
      sea85: {
        x: 288,
        y: 1210,
        w: 16,
        h: 16
      },
      sea128: {
        x: 304,
        y: 1210,
        w: 16,
        h: 16
      },
      sea130: {
        x: 320,
        y: 1210,
        w: 16,
        h: 16
      },
      sea132: {
        x: 336,
        y: 1210,
        w: 16,
        h: 16
      },
      sea136: {
        x: 352,
        y: 1210,
        w: 16,
        h: 16
      },
      sea138: {
        x: 368,
        y: 1210,
        w: 16,
        h: 16
      },
      sea144: {
        x: 384,
        y: 1210,
        w: 16,
        h: 16
      },
      sea146: {
        x: 400,
        y: 1210,
        w: 16,
        h: 16
      },
      sea148: {
        x: 416,
        y: 1210,
        w: 16,
        h: 16
      },
      sea160: {
        x: 432,
        y: 1210,
        w: 16,
        h: 16
      },
      sea162: {
        x: 448,
        y: 1210,
        w: 16,
        h: 16
      },
      sea164: {
        x: 464,
        y: 1210,
        w: 16,
        h: 16
      },
      sea168: {
        x: 480,
        y: 1210,
        w: 16,
        h: 16
      },
      sea170: {
        x: 496,
        y: 1210,
        w: 16,
        h: 16
      }
    }
  },
  'terrain/ani/': __AW2_TILESET,
} as const;
export const TS_tileSets: typeof _TS_tileSets & Record<string, Record<string, Record<string, Record<string, number>>>> = _TS_tileSets;

const __AW2_TILESHADOW = {
  mountain: {
    x: 368,
    y: 523,
    w: 19,
    h: 16
  },
  wood: {
    x: 48,
    y: 866,
    w: 19,
    h: 16
  },
  neutralcity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  neutralbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  neutralairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  neutralport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  orangestarcity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  orangestarbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  orangestarairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  orangestarport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  orangestarhq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  bluemooncity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  bluemoonbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  bluemoonairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  bluemoonport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  bluemoonhq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  greenearthcity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  greenearthbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  greenearthairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  greenearthport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  greenearthhq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  yellowcometcity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  yellowcometbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  yellowcometairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  yellowcometport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  yellowcomethq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  redfirecity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  redfirebase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  redfireairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  redfireport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  redfirehq: {
    x: 0,
    y: 539,
    w: 18,
    h: 16
  },
  greyskycity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  greyskybase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  greyskyairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  greyskyport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  greyskyhq: {
    x: 18,
    y: 539,
    w: 18,
    h: 16
  },
  blackholecity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  blackholebase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  blackholeairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  blackholeport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  blackholehq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  browndesertcity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  browndesertbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  browndesertairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  browndesertport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  browndeserthq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  vpipe: {
    x: 36,
    y: 539,
    w: 16,
    h: 16
  },
  hpipe: {
    x: 52,
    y: 539,
    w: 16,
    h: 16
  },
  nepipe: {
    x: 68,
    y: 539,
    w: 16,
    h: 16
  },
  espipe: {
    x: 84,
    y: 539,
    w: 16,
    h: 16
  },
  swpipe: {
    x: 100,
    y: 539,
    w: 16,
    h: 16
  },
  wnpipe: {
    x: 116,
    y: 539,
    w: 16,
    h: 16
  },
  npipeend: {
    x: 132,
    y: 539,
    w: 16,
    h: 16
  },
  epipeend: {
    x: 148,
    y: 539,
    w: 16,
    h: 16
  },
  spipeend: {
    x: 164,
    y: 539,
    w: 16,
    h: 16
  },
  wpipeend: {
    x: 180,
    y: 539,
    w: 16,
    h: 16
  },
  missilesilo: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  missilesiloempty: {
    x: 196,
    y: 539,
    w: 17,
    h: 16
  },
  hpipeseam: {
    x: 213,
    y: 539,
    w: 16,
    h: 16
  },
  vpipeseam: {
    x: 229,
    y: 539,
    w: 16,
    h: 16
  },
  hpiperubble: {
    x: 245,
    y: 539,
    w: 16,
    h: 16
  },
  vpiperubble: {
    x: 261,
    y: 539,
    w: 16,
    h: 16
  },
  amberblazeairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  amberblazebase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  amberblazecity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  amberblazehq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  amberblazeport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  jadesunairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  jadesunbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  jadesuncity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  jadesunhq: {
    x: 277,
    y: 539,
    w: 20,
    h: 16
  },
  jadesunport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  amberblazecomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  blackholecomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  bluemooncomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  browndesertcomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  greenearthcomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  jadesuncomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  neutralcomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  orangestarcomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  redfirecomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  yellowcometcomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  greyskycomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  amberblazelab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  blackholelab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  bluemoonlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  browndesertlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  greenearthlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  greyskylab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  jadesunlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  neutrallab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  orangestarlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  redfirelab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  yellowcometlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  cobalticeairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  cobalticebase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  cobalticecity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  cobalticecomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  cobalticehq: {
    x: 335,
    y: 539,
    w: 19,
    h: 16
  },
  cobalticelab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  cobalticeport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  pinkcosmosairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  pinkcosmosbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  pinkcosmoscity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  pinkcosmoscomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  pinkcosmoshq: {
    x: 354,
    y: 539,
    w: 19,
    h: 16
  },
  pinkcosmoslab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  pinkcosmosport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  tealgalaxyairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  tealgalaxybase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  tealgalaxycity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  tealgalaxycomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  tealgalaxyhq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  tealgalaxylab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  tealgalaxyport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  purplelightningairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  purplelightningbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  purplelightningcity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  purplelightningcomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  purplelightninghq: {
    x: 373,
    y: 539,
    w: 18,
    h: 16
  },
  purplelightninglab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  purplelightningport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  acidrainairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  acidrainbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  acidraincity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  acidraincomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  acidrainhq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  acidrainlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  acidrainport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  whitenovaairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  whitenovabase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  whitenovacity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  whitenovacomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  whitenovahq: {
    x: 391,
    y: 539,
    w: 19,
    h: 16
  },
  whitenovalab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  whitenovaport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  azureasteroidairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  azureasteroidbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  azureasteroidcity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  azureasteroidcomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  azureasteroidhq: {
    x: 161,
    y: 866,
    w: 18,
    h: 16
  },
  azureasteroidlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  azureasteroidport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  noireclipseairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  noireclipsebase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  noireclipsecity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  noireclipsecomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  noireclipsehq: {
    x: 481,
    y: 523,
    w: 19,
    h: 16
  },
  noireclipselab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  noireclipseport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  silverclawairport: {
    x: 105,
    y: 866,
    w: 19,
    h: 16
  },
  silverclawbase: {
    x: 86,
    y: 866,
    w: 19,
    h: 16
  },
  silverclawcity: {
    x: 67,
    y: 866,
    w: 19,
    h: 16
  },
  silverclawcomtower: {
    x: 124,
    y: 866,
    w: 19,
    h: 16
  },
  silverclawhq: {
    x: 428,
    y: 539,
    w: 19,
    h: 16
  },
  silverclawlab: {
    x: 143,
    y: 866,
    w: 18,
    h: 16
  },
  silverclawport: {
    x: 462,
    y: 523,
    w: 19,
    h: 16
  },
  minimountain: {
    x: 447,
    y: 539,
    w: 19,
    h: 16
  }
};

const _TS_tileShadows = {
  'terrain/aw1/': {
    mountain: {
      x: 368,
      y: 523,
      w: 19,
      h: 16
    },
    wood: {
      x: 387,
      y: 523,
      w: 19,
      h: 16
    },
    neutralcity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    neutralbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    neutralairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    neutralport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    orangestarcity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    orangestarbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    orangestarairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    orangestarport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    orangestarhq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    bluemooncity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    bluemoonbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    bluemoonairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    bluemoonport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    bluemoonhq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    greenearthcity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    greenearthbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    greenearthairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    greenearthport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    greenearthhq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    yellowcometcity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    yellowcometbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    yellowcometairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    yellowcometport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    yellowcomethq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    redfirecity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    redfirebase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    redfireairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    redfireport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    redfirehq: {
      x: 0,
      y: 539,
      w: 18,
      h: 16
    },
    greyskycity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    greyskybase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    greyskyairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    greyskyport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    greyskyhq: {
      x: 18,
      y: 539,
      w: 18,
      h: 16
    },
    blackholecity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    blackholebase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    blackholeairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    blackholeport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    blackholehq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    browndesertcity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    browndesertbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    browndesertairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    browndesertport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    browndeserthq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    vpipe: {
      x: 36,
      y: 539,
      w: 16,
      h: 16
    },
    hpipe: {
      x: 52,
      y: 539,
      w: 16,
      h: 16
    },
    nepipe: {
      x: 68,
      y: 539,
      w: 16,
      h: 16
    },
    espipe: {
      x: 84,
      y: 539,
      w: 16,
      h: 16
    },
    swpipe: {
      x: 100,
      y: 539,
      w: 16,
      h: 16
    },
    wnpipe: {
      x: 116,
      y: 539,
      w: 16,
      h: 16
    },
    npipeend: {
      x: 132,
      y: 539,
      w: 16,
      h: 16
    },
    epipeend: {
      x: 148,
      y: 539,
      w: 16,
      h: 16
    },
    spipeend: {
      x: 164,
      y: 539,
      w: 16,
      h: 16
    },
    wpipeend: {
      x: 180,
      y: 539,
      w: 16,
      h: 16
    },
    missilesilo: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    missilesiloempty: {
      x: 196,
      y: 539,
      w: 17,
      h: 16
    },
    hpipeseam: {
      x: 213,
      y: 539,
      w: 16,
      h: 16
    },
    vpipeseam: {
      x: 229,
      y: 539,
      w: 16,
      h: 16
    },
    hpiperubble: {
      x: 245,
      y: 539,
      w: 16,
      h: 16
    },
    vpiperubble: {
      x: 261,
      y: 539,
      w: 16,
      h: 16
    },
    amberblazeairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    amberblazebase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    amberblazecity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    amberblazehq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    amberblazeport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    jadesunairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    jadesunbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    jadesuncity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    jadesunhq: {
      x: 277,
      y: 539,
      w: 20,
      h: 16
    },
    jadesunport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    amberblazecomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    blackholecomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    bluemooncomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    browndesertcomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    greenearthcomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    jadesuncomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    neutralcomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    orangestarcomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    redfirecomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    yellowcometcomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    greyskycomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    amberblazelab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    blackholelab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    bluemoonlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    browndesertlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    greenearthlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    greyskylab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    jadesunlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    neutrallab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    orangestarlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    redfirelab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    yellowcometlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    cobalticeairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    cobalticebase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    cobalticecity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    cobalticecomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    cobalticehq: {
      x: 335,
      y: 539,
      w: 19,
      h: 16
    },
    cobalticelab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    cobalticeport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    pinkcosmosairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    pinkcosmosbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    pinkcosmoscity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    pinkcosmoscomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    pinkcosmoshq: {
      x: 354,
      y: 539,
      w: 19,
      h: 16
    },
    pinkcosmoslab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    pinkcosmosport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    tealgalaxyairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    tealgalaxybase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    tealgalaxycity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    tealgalaxycomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    tealgalaxyhq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    tealgalaxylab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    tealgalaxyport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    purplelightningairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    purplelightningbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    purplelightningcity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    purplelightningcomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    purplelightninghq: {
      x: 373,
      y: 539,
      w: 18,
      h: 16
    },
    purplelightninglab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    purplelightningport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    acidrainairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    acidrainbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    acidraincity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    acidraincomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    acidrainhq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    acidrainlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    acidrainport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    whitenovaairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    whitenovabase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    whitenovacity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    whitenovacomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    whitenovahq: {
      x: 391,
      y: 539,
      w: 19,
      h: 16
    },
    whitenovalab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    whitenovaport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    azureasteroidairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    azureasteroidbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    azureasteroidcity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    azureasteroidcomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    azureasteroidhq: {
      x: 410,
      y: 539,
      w: 18,
      h: 16
    },
    azureasteroidlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    azureasteroidport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    noireclipseairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    noireclipsebase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    noireclipsecity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    noireclipsecomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    noireclipsehq: {
      x: 481,
      y: 523,
      w: 19,
      h: 16
    },
    noireclipselab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    noireclipseport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    silverclawairport: {
      x: 443,
      y: 523,
      w: 19,
      h: 16
    },
    silverclawbase: {
      x: 425,
      y: 523,
      w: 18,
      h: 16
    },
    silverclawcity: {
      x: 406,
      y: 523,
      w: 19,
      h: 16
    },
    silverclawcomtower: {
      x: 297,
      y: 539,
      w: 19,
      h: 16
    },
    silverclawhq: {
      x: 428,
      y: 539,
      w: 19,
      h: 16
    },
    silverclawlab: {
      x: 316,
      y: 539,
      w: 19,
      h: 16
    },
    silverclawport: {
      x: 462,
      y: 523,
      w: 19,
      h: 16
    },
    minimountain: {
      x: 447,
      y: 539,
      w: 19,
      h: 16
    }
  },
  'terrain/aw2/': __AW2_TILESHADOW,
  'terrain/desert/': {
    mountain: {
      x: 336,
      y: 1038,
      w: 20,
      h: 16
    },
    wood: {
      x: 356,
      y: 1038,
      w: 18,
      h: 16
    },
    minimountain: {
      x: 374,
      y: 1038,
      w: 20,
      h: 16
    }
  },
  'terrain/dor/': {
    mountain: {
      x: 0,
      y: 1226,
      w: 22,
      h: 16
    },
    wood: {
      x: 48,
      y: 866,
      w: 19,
      h: 16
    },
    minimountain: {
      x: 22,
      y: 1226,
      w: 22,
      h: 16
    }
  },
  'terrain/ani/': __AW2_TILESHADOW,
} as const;
export const TS_tileShadows: typeof _TS_tileShadows & Record<string, Record<string, Record<string, number>>> = _TS_tileShadows;

export const TS_spriteSheet = 'terrain/terrain_spritesheet.png?v=1731118750';
