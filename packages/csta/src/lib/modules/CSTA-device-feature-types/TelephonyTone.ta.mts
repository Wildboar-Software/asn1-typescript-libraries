/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TelephonyTone
 * @description
 *
 * Named telephony tone, plus switching-function specific values
 * `switchSpec0`–`switchSpec100`. ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephonyTone  ::=  ENUMERATED
 * {     beep             (  0),
 *     billing         (  1),
 *     busy             (  2),
 *     carrier         (  3),
 *     confirmation         (  4),
 *     dial             (  5),
 *     faxCNG             (  6),
 *     hold             (  7),
 *     howler             (  8),
 *     intrusion         (  9),
 *     modemCNG         ( 10),
 *     park             ( 11),
 *     recordWarning         ( 12),
 *     reorder         ( 13),
 *     ringback         ( 14),
 *     silence         ( 15),
 *     sitVC             ( 16),
 *     sitIC             ( 17),
 *     sitRO             ( 18),
 *     sitNC             ( 19),
 *     switchSpec0         ( 20),
 *     switchSpec1         ( 21),
 *     switchSpec2         ( 22),
 *     switchSpec3         ( 23),
 *     switchSpec4         ( 24),
 *     switchSpec5         ( 25),
 *     switchSpec6         ( 26),
 *     switchSpec7         ( 27),
 *     switchSpec8         ( 28),
 *     switchSpec9         ( 29),
 *     switchSpec10         ( 30),
 *     switchSpec11         ( 31),
 *     switchSpec12         ( 32),
 *     switchSpec13         ( 33),
 *     switchSpec14         ( 34),
 *     switchSpec15         ( 35),
 *     switchSpec16         ( 36),
 *     switchSpec17         ( 37),
 *     switchSpec18         ( 38),
 *     switchSpec19         ( 39),
 *     switchSpec20         ( 40),
 *     switchSpec21         ( 41),
 *     switchSpec22         ( 42),
 *     switchSpec23         ( 43),
 *     switchSpec24         ( 44),
 *     switchSpec25         ( 45),
 *     switchSpec26         ( 46),
 *     switchSpec27         ( 47),
 *     switchSpec28         ( 48),
 *     switchSpec29         ( 49),
 *     switchSpec30         ( 50),
 *     switchSpec31         ( 51),
 *     switchSpec32         ( 52),
 *     switchSpec33         ( 53),
 *     switchSpec34         ( 54),
 *     switchSpec35         ( 55),
 *     switchSpec36         ( 56),
 *     switchSpec37         ( 57),
 *     switchSpec38         ( 58),
 *     switchSpec39         ( 59),
 *     switchSpec40         ( 60),
 *     switchSpec41         ( 61),
 *     switchSpec42         ( 62),
 *     switchSpec43         ( 63),
 *     switchSpec44         ( 64),
 *     switchSpec45         ( 65),
 *     switchSpec46         ( 66),
 *     switchSpec47         ( 67),
 *     switchSpec48         ( 68),
 *     switchSpec49         ( 69),
 *     switchSpec50         ( 70),
 *     switchSpec51         ( 71),
 *     switchSpec52         ( 72),
 *     switchSpec53         ( 73),
 *     switchSpec54         ( 74),
 *     switchSpec55         ( 75),
 *     switchSpec56         ( 76),
 *     switchSpec57         ( 77),
 *     switchSpec58         ( 78),
 *     switchSpec59         ( 79),
 *     switchSpec60         ( 80),
 *     switchSpec61         ( 81),
 *     switchSpec62         ( 82),
 *     switchSpec63         ( 83),
 *     switchSpec64         ( 84),
 *     switchSpec65         ( 85),
 *     switchSpec66         ( 86),
 *     switchSpec67         ( 87),
 *     switchSpec68         ( 88),
 *     switchSpec69         ( 89),
 *     switchSpec70         ( 90),
 *     switchSpec71         ( 91),
 *     switchSpec72         ( 92),
 *     switchSpec73         ( 93),
 *     switchSpec74         ( 94),
 *     switchSpec75         ( 95),
 *     switchSpec76         ( 96),
 *     switchSpec77         ( 97),
 *     switchSpec78         ( 98),
 *     switchSpec79         ( 99),
 *     switchSpec80         (100),
 *     switchSpec81         (101),
 *     switchSpec82         (102),
 *     switchSpec83         (103),
 *     switchSpec84         (104),
 *     switchSpec85         (105),
 *     switchSpec86         (106),
 *     switchSpec87         (107),
 *     switchSpec88         (108),
 *     switchSpec89         (109),
 *     switchSpec90         (110),
 *     switchSpec91         (111),
 *     switchSpec92         (112),
 *     switchSpec93         (113),
 *     switchSpec94         (114),
 *     switchSpec95         (115),
 *     switchSpec96         (116),
 *     switchSpec97         (117),
 *     switchSpec98         (118),
 *     switchSpec99         (119),
 *     switchSpec100        (120) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TelephonyTone {
    beep = 0,
    billing = 1,
    busy = 2,
    carrier = 3,
    confirmation = 4,
    dial = 5,
    faxCNG = 6,
    hold = 7,
    howler = 8,
    intrusion = 9,
    modemCNG = 10,
    park = 11,
    recordWarning = 12,
    reorder = 13,
    ringback = 14,
    silence = 15,
    sitVC = 16,
    sitIC = 17,
    sitRO = 18,
    sitNC = 19,
    switchSpec0 = 20,
    switchSpec1 = 21,
    switchSpec2 = 22,
    switchSpec3 = 23,
    switchSpec4 = 24,
    switchSpec5 = 25,
    switchSpec6 = 26,
    switchSpec7 = 27,
    switchSpec8 = 28,
    switchSpec9 = 29,
    switchSpec10 = 30,
    switchSpec11 = 31,
    switchSpec12 = 32,
    switchSpec13 = 33,
    switchSpec14 = 34,
    switchSpec15 = 35,
    switchSpec16 = 36,
    switchSpec17 = 37,
    switchSpec18 = 38,
    switchSpec19 = 39,
    switchSpec20 = 40,
    switchSpec21 = 41,
    switchSpec22 = 42,
    switchSpec23 = 43,
    switchSpec24 = 44,
    switchSpec25 = 45,
    switchSpec26 = 46,
    switchSpec27 = 47,
    switchSpec28 = 48,
    switchSpec29 = 49,
    switchSpec30 = 50,
    switchSpec31 = 51,
    switchSpec32 = 52,
    switchSpec33 = 53,
    switchSpec34 = 54,
    switchSpec35 = 55,
    switchSpec36 = 56,
    switchSpec37 = 57,
    switchSpec38 = 58,
    switchSpec39 = 59,
    switchSpec40 = 60,
    switchSpec41 = 61,
    switchSpec42 = 62,
    switchSpec43 = 63,
    switchSpec44 = 64,
    switchSpec45 = 65,
    switchSpec46 = 66,
    switchSpec47 = 67,
    switchSpec48 = 68,
    switchSpec49 = 69,
    switchSpec50 = 70,
    switchSpec51 = 71,
    switchSpec52 = 72,
    switchSpec53 = 73,
    switchSpec54 = 74,
    switchSpec55 = 75,
    switchSpec56 = 76,
    switchSpec57 = 77,
    switchSpec58 = 78,
    switchSpec59 = 79,
    switchSpec60 = 80,
    switchSpec61 = 81,
    switchSpec62 = 82,
    switchSpec63 = 83,
    switchSpec64 = 84,
    switchSpec65 = 85,
    switchSpec66 = 86,
    switchSpec67 = 87,
    switchSpec68 = 88,
    switchSpec69 = 89,
    switchSpec70 = 90,
    switchSpec71 = 91,
    switchSpec72 = 92,
    switchSpec73 = 93,
    switchSpec74 = 94,
    switchSpec75 = 95,
    switchSpec76 = 96,
    switchSpec77 = 97,
    switchSpec78 = 98,
    switchSpec79 = 99,
    switchSpec80 = 100,
    switchSpec81 = 101,
    switchSpec82 = 102,
    switchSpec83 = 103,
    switchSpec84 = 104,
    switchSpec85 = 105,
    switchSpec86 = 106,
    switchSpec87 = 107,
    switchSpec88 = 108,
    switchSpec89 = 109,
    switchSpec90 = 110,
    switchSpec91 = 111,
    switchSpec92 = 112,
    switchSpec93 = 113,
    switchSpec94 = 114,
    switchSpec95 = 115,
    switchSpec96 = 116,
    switchSpec97 = 117,
    switchSpec98 = 118,
    switchSpec99 = 119,
    switchSpec100 = 120,
}

/**
 * @summary TelephonyTone
 * @description
 *
 * Named telephony tone, plus switching-function specific values
 * `switchSpec0`–`switchSpec100`. ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephonyTone  ::=  ENUMERATED
 * {     beep             (  0),
 *     billing         (  1),
 *     busy             (  2),
 *     carrier         (  3),
 *     confirmation         (  4),
 *     dial             (  5),
 *     faxCNG             (  6),
 *     hold             (  7),
 *     howler             (  8),
 *     intrusion         (  9),
 *     modemCNG         ( 10),
 *     park             ( 11),
 *     recordWarning         ( 12),
 *     reorder         ( 13),
 *     ringback         ( 14),
 *     silence         ( 15),
 *     sitVC             ( 16),
 *     sitIC             ( 17),
 *     sitRO             ( 18),
 *     sitNC             ( 19),
 *     switchSpec0         ( 20),
 *     switchSpec1         ( 21),
 *     switchSpec2         ( 22),
 *     switchSpec3         ( 23),
 *     switchSpec4         ( 24),
 *     switchSpec5         ( 25),
 *     switchSpec6         ( 26),
 *     switchSpec7         ( 27),
 *     switchSpec8         ( 28),
 *     switchSpec9         ( 29),
 *     switchSpec10         ( 30),
 *     switchSpec11         ( 31),
 *     switchSpec12         ( 32),
 *     switchSpec13         ( 33),
 *     switchSpec14         ( 34),
 *     switchSpec15         ( 35),
 *     switchSpec16         ( 36),
 *     switchSpec17         ( 37),
 *     switchSpec18         ( 38),
 *     switchSpec19         ( 39),
 *     switchSpec20         ( 40),
 *     switchSpec21         ( 41),
 *     switchSpec22         ( 42),
 *     switchSpec23         ( 43),
 *     switchSpec24         ( 44),
 *     switchSpec25         ( 45),
 *     switchSpec26         ( 46),
 *     switchSpec27         ( 47),
 *     switchSpec28         ( 48),
 *     switchSpec29         ( 49),
 *     switchSpec30         ( 50),
 *     switchSpec31         ( 51),
 *     switchSpec32         ( 52),
 *     switchSpec33         ( 53),
 *     switchSpec34         ( 54),
 *     switchSpec35         ( 55),
 *     switchSpec36         ( 56),
 *     switchSpec37         ( 57),
 *     switchSpec38         ( 58),
 *     switchSpec39         ( 59),
 *     switchSpec40         ( 60),
 *     switchSpec41         ( 61),
 *     switchSpec42         ( 62),
 *     switchSpec43         ( 63),
 *     switchSpec44         ( 64),
 *     switchSpec45         ( 65),
 *     switchSpec46         ( 66),
 *     switchSpec47         ( 67),
 *     switchSpec48         ( 68),
 *     switchSpec49         ( 69),
 *     switchSpec50         ( 70),
 *     switchSpec51         ( 71),
 *     switchSpec52         ( 72),
 *     switchSpec53         ( 73),
 *     switchSpec54         ( 74),
 *     switchSpec55         ( 75),
 *     switchSpec56         ( 76),
 *     switchSpec57         ( 77),
 *     switchSpec58         ( 78),
 *     switchSpec59         ( 79),
 *     switchSpec60         ( 80),
 *     switchSpec61         ( 81),
 *     switchSpec62         ( 82),
 *     switchSpec63         ( 83),
 *     switchSpec64         ( 84),
 *     switchSpec65         ( 85),
 *     switchSpec66         ( 86),
 *     switchSpec67         ( 87),
 *     switchSpec68         ( 88),
 *     switchSpec69         ( 89),
 *     switchSpec70         ( 90),
 *     switchSpec71         ( 91),
 *     switchSpec72         ( 92),
 *     switchSpec73         ( 93),
 *     switchSpec74         ( 94),
 *     switchSpec75         ( 95),
 *     switchSpec76         ( 96),
 *     switchSpec77         ( 97),
 *     switchSpec78         ( 98),
 *     switchSpec79         ( 99),
 *     switchSpec80         (100),
 *     switchSpec81         (101),
 *     switchSpec82         (102),
 *     switchSpec83         (103),
 *     switchSpec84         (104),
 *     switchSpec85         (105),
 *     switchSpec86         (106),
 *     switchSpec87         (107),
 *     switchSpec88         (108),
 *     switchSpec89         (109),
 *     switchSpec90         (110),
 *     switchSpec91         (111),
 *     switchSpec92         (112),
 *     switchSpec93         (113),
 *     switchSpec94         (114),
 *     switchSpec95         (115),
 *     switchSpec96         (116),
 *     switchSpec97         (117),
 *     switchSpec98         (118),
 *     switchSpec99         (119),
 *     switchSpec100        (120) }
 * ```
 * 
 * @enum {number}
 */
export
type TelephonyTone = _enum_for_TelephonyTone;

/**
 * @summary TelephonyTone
 * @description
 *
 * Named telephony tone, plus switching-function specific values
 * `switchSpec0`–`switchSpec100`. ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephonyTone  ::=  ENUMERATED
 * {     beep             (  0),
 *     billing         (  1),
 *     busy             (  2),
 *     carrier         (  3),
 *     confirmation         (  4),
 *     dial             (  5),
 *     faxCNG             (  6),
 *     hold             (  7),
 *     howler             (  8),
 *     intrusion         (  9),
 *     modemCNG         ( 10),
 *     park             ( 11),
 *     recordWarning         ( 12),
 *     reorder         ( 13),
 *     ringback         ( 14),
 *     silence         ( 15),
 *     sitVC             ( 16),
 *     sitIC             ( 17),
 *     sitRO             ( 18),
 *     sitNC             ( 19),
 *     switchSpec0         ( 20),
 *     switchSpec1         ( 21),
 *     switchSpec2         ( 22),
 *     switchSpec3         ( 23),
 *     switchSpec4         ( 24),
 *     switchSpec5         ( 25),
 *     switchSpec6         ( 26),
 *     switchSpec7         ( 27),
 *     switchSpec8         ( 28),
 *     switchSpec9         ( 29),
 *     switchSpec10         ( 30),
 *     switchSpec11         ( 31),
 *     switchSpec12         ( 32),
 *     switchSpec13         ( 33),
 *     switchSpec14         ( 34),
 *     switchSpec15         ( 35),
 *     switchSpec16         ( 36),
 *     switchSpec17         ( 37),
 *     switchSpec18         ( 38),
 *     switchSpec19         ( 39),
 *     switchSpec20         ( 40),
 *     switchSpec21         ( 41),
 *     switchSpec22         ( 42),
 *     switchSpec23         ( 43),
 *     switchSpec24         ( 44),
 *     switchSpec25         ( 45),
 *     switchSpec26         ( 46),
 *     switchSpec27         ( 47),
 *     switchSpec28         ( 48),
 *     switchSpec29         ( 49),
 *     switchSpec30         ( 50),
 *     switchSpec31         ( 51),
 *     switchSpec32         ( 52),
 *     switchSpec33         ( 53),
 *     switchSpec34         ( 54),
 *     switchSpec35         ( 55),
 *     switchSpec36         ( 56),
 *     switchSpec37         ( 57),
 *     switchSpec38         ( 58),
 *     switchSpec39         ( 59),
 *     switchSpec40         ( 60),
 *     switchSpec41         ( 61),
 *     switchSpec42         ( 62),
 *     switchSpec43         ( 63),
 *     switchSpec44         ( 64),
 *     switchSpec45         ( 65),
 *     switchSpec46         ( 66),
 *     switchSpec47         ( 67),
 *     switchSpec48         ( 68),
 *     switchSpec49         ( 69),
 *     switchSpec50         ( 70),
 *     switchSpec51         ( 71),
 *     switchSpec52         ( 72),
 *     switchSpec53         ( 73),
 *     switchSpec54         ( 74),
 *     switchSpec55         ( 75),
 *     switchSpec56         ( 76),
 *     switchSpec57         ( 77),
 *     switchSpec58         ( 78),
 *     switchSpec59         ( 79),
 *     switchSpec60         ( 80),
 *     switchSpec61         ( 81),
 *     switchSpec62         ( 82),
 *     switchSpec63         ( 83),
 *     switchSpec64         ( 84),
 *     switchSpec65         ( 85),
 *     switchSpec66         ( 86),
 *     switchSpec67         ( 87),
 *     switchSpec68         ( 88),
 *     switchSpec69         ( 89),
 *     switchSpec70         ( 90),
 *     switchSpec71         ( 91),
 *     switchSpec72         ( 92),
 *     switchSpec73         ( 93),
 *     switchSpec74         ( 94),
 *     switchSpec75         ( 95),
 *     switchSpec76         ( 96),
 *     switchSpec77         ( 97),
 *     switchSpec78         ( 98),
 *     switchSpec79         ( 99),
 *     switchSpec80         (100),
 *     switchSpec81         (101),
 *     switchSpec82         (102),
 *     switchSpec83         (103),
 *     switchSpec84         (104),
 *     switchSpec85         (105),
 *     switchSpec86         (106),
 *     switchSpec87         (107),
 *     switchSpec88         (108),
 *     switchSpec89         (109),
 *     switchSpec90         (110),
 *     switchSpec91         (111),
 *     switchSpec92         (112),
 *     switchSpec93         (113),
 *     switchSpec94         (114),
 *     switchSpec95         (115),
 *     switchSpec96         (116),
 *     switchSpec97         (117),
 *     switchSpec98         (118),
 *     switchSpec99         (119),
 *     switchSpec100        (120) }
 * ```
 * 
 * @enum {number}
 */
export
const TelephonyTone = _enum_for_TelephonyTone;

/**
 * @summary TelephonyTone_beep
 * @description Beep. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_beep: TelephonyTone = TelephonyTone.beep; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary beep
 * @description Alias of {@link TelephonyTone_beep}.
 * @constant
 * @type {number}
 */
export
const beep: TelephonyTone = TelephonyTone.beep; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_billing
 * @description Billing. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_billing: TelephonyTone = TelephonyTone.billing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary billing
 * @description Alias of {@link TelephonyTone_billing}.
 * @constant
 * @type {number}
 */
export
const billing: TelephonyTone = TelephonyTone.billing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_busy
 * @description Busy. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_busy: TelephonyTone = TelephonyTone.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description Alias of {@link TelephonyTone_busy}.
 * @constant
 * @type {number}
 */
export
const busy: TelephonyTone = TelephonyTone.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_carrier
 * @description Carrier. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_carrier: TelephonyTone = TelephonyTone.carrier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary carrier
 * @description Alias of {@link TelephonyTone_carrier}.
 * @constant
 * @type {number}
 */
export
const carrier: TelephonyTone = TelephonyTone.carrier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_confirmation
 * @description Confirmation. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_confirmation: TelephonyTone = TelephonyTone.confirmation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confirmation
 * @description Alias of {@link TelephonyTone_confirmation}.
 * @constant
 * @type {number}
 */
export
const confirmation: TelephonyTone = TelephonyTone.confirmation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_dial
 * @description Dial. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_dial: TelephonyTone = TelephonyTone.dial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dial
 * @description Alias of {@link TelephonyTone_dial}.
 * @constant
 * @type {number}
 */
export
const dial: TelephonyTone = TelephonyTone.dial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_faxCNG
 * @description Fax CNG. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_faxCNG: TelephonyTone = TelephonyTone.faxCNG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxCNG
 * @description Alias of {@link TelephonyTone_faxCNG}.
 * @constant
 * @type {number}
 */
export
const faxCNG: TelephonyTone = TelephonyTone.faxCNG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_hold
 * @description Hold. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_hold: TelephonyTone = TelephonyTone.hold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hold
 * @description Alias of {@link TelephonyTone_hold}.
 * @constant
 * @type {number}
 */
export
const hold: TelephonyTone = TelephonyTone.hold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_howler
 * @description Howler. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_howler: TelephonyTone = TelephonyTone.howler; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary howler
 * @description Alias of {@link TelephonyTone_howler}.
 * @constant
 * @type {number}
 */
export
const howler: TelephonyTone = TelephonyTone.howler; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_intrusion
 * @description Intrusion. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_intrusion: TelephonyTone = TelephonyTone.intrusion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrusion
 * @description Alias of {@link TelephonyTone_intrusion}.
 * @constant
 * @type {number}
 */
export
const intrusion: TelephonyTone = TelephonyTone.intrusion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_modemCNG
 * @description Modem CNG. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_modemCNG: TelephonyTone = TelephonyTone.modemCNG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modemCNG
 * @description Alias of {@link TelephonyTone_modemCNG}.
 * @constant
 * @type {number}
 */
export
const modemCNG: TelephonyTone = TelephonyTone.modemCNG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_park
 * @description Park. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_park: TelephonyTone = TelephonyTone.park; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @description Alias of {@link TelephonyTone_park}.
 * @constant
 * @type {number}
 */
export
const park: TelephonyTone = TelephonyTone.park; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_recordWarning
 * @description Record warning. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_recordWarning: TelephonyTone = TelephonyTone.recordWarning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recordWarning
 * @description Alias of {@link TelephonyTone_recordWarning}.
 * @constant
 * @type {number}
 */
export
const recordWarning: TelephonyTone = TelephonyTone.recordWarning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_reorder
 * @description Reorder. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_reorder: TelephonyTone = TelephonyTone.reorder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorder
 * @description Alias of {@link TelephonyTone_reorder}.
 * @constant
 * @type {number}
 */
export
const reorder: TelephonyTone = TelephonyTone.reorder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_ringback
 * @description Ringback. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_ringback: TelephonyTone = TelephonyTone.ringback; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringback
 * @description Alias of {@link TelephonyTone_ringback}.
 * @constant
 * @type {number}
 */
export
const ringback: TelephonyTone = TelephonyTone.ringback; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_silence
 * @description Silence. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_silence: TelephonyTone = TelephonyTone.silence; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silence
 * @description Alias of {@link TelephonyTone_silence}.
 * @constant
 * @type {number}
 */
export
const silence: TelephonyTone = TelephonyTone.silence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_sitVC
 * @description SIT VC. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_sitVC: TelephonyTone = TelephonyTone.sitVC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitVC
 * @description Alias of {@link TelephonyTone_sitVC}.
 * @constant
 * @type {number}
 */
export
const sitVC: TelephonyTone = TelephonyTone.sitVC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_sitIC
 * @description SIT IC. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_sitIC: TelephonyTone = TelephonyTone.sitIC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitIC
 * @description Alias of {@link TelephonyTone_sitIC}.
 * @constant
 * @type {number}
 */
export
const sitIC: TelephonyTone = TelephonyTone.sitIC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_sitRO
 * @description SIT RO. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_sitRO: TelephonyTone = TelephonyTone.sitRO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitRO
 * @description Alias of {@link TelephonyTone_sitRO}.
 * @constant
 * @type {number}
 */
export
const sitRO: TelephonyTone = TelephonyTone.sitRO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_sitNC
 * @description SIT NC. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_sitNC: TelephonyTone = TelephonyTone.sitNC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sitNC
 * @description Alias of {@link TelephonyTone_sitNC}.
 * @constant
 * @type {number}
 */
export
const sitNC: TelephonyTone = TelephonyTone.sitNC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec0
 * @description Switching-function specific tone 0. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec0: TelephonyTone = TelephonyTone.switchSpec0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec0
 * @description Alias of {@link TelephonyTone_switchSpec0}.
 * @constant
 * @type {number}
 */
export
const switchSpec0: TelephonyTone = TelephonyTone.switchSpec0; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec1
 * @description Switching-function specific tone 1. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec1: TelephonyTone = TelephonyTone.switchSpec1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec1
 * @description Alias of {@link TelephonyTone_switchSpec1}.
 * @constant
 * @type {number}
 */
export
const switchSpec1: TelephonyTone = TelephonyTone.switchSpec1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec2
 * @description Switching-function specific tone 2. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec2: TelephonyTone = TelephonyTone.switchSpec2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec2
 * @description Alias of {@link TelephonyTone_switchSpec2}.
 * @constant
 * @type {number}
 */
export
const switchSpec2: TelephonyTone = TelephonyTone.switchSpec2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec3
 * @description Switching-function specific tone 3. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec3: TelephonyTone = TelephonyTone.switchSpec3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec3
 * @description Alias of {@link TelephonyTone_switchSpec3}.
 * @constant
 * @type {number}
 */
export
const switchSpec3: TelephonyTone = TelephonyTone.switchSpec3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec4
 * @description Switching-function specific tone 4. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec4: TelephonyTone = TelephonyTone.switchSpec4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec4
 * @description Alias of {@link TelephonyTone_switchSpec4}.
 * @constant
 * @type {number}
 */
export
const switchSpec4: TelephonyTone = TelephonyTone.switchSpec4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec5
 * @description Switching-function specific tone 5. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec5: TelephonyTone = TelephonyTone.switchSpec5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec5
 * @description Alias of {@link TelephonyTone_switchSpec5}.
 * @constant
 * @type {number}
 */
export
const switchSpec5: TelephonyTone = TelephonyTone.switchSpec5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec6
 * @description Switching-function specific tone 6. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec6: TelephonyTone = TelephonyTone.switchSpec6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec6
 * @description Alias of {@link TelephonyTone_switchSpec6}.
 * @constant
 * @type {number}
 */
export
const switchSpec6: TelephonyTone = TelephonyTone.switchSpec6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec7
 * @description Switching-function specific tone 7. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec7: TelephonyTone = TelephonyTone.switchSpec7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec7
 * @description Alias of {@link TelephonyTone_switchSpec7}.
 * @constant
 * @type {number}
 */
export
const switchSpec7: TelephonyTone = TelephonyTone.switchSpec7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec8
 * @description Switching-function specific tone 8. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec8: TelephonyTone = TelephonyTone.switchSpec8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec8
 * @description Alias of {@link TelephonyTone_switchSpec8}.
 * @constant
 * @type {number}
 */
export
const switchSpec8: TelephonyTone = TelephonyTone.switchSpec8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec9
 * @description Switching-function specific tone 9. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec9: TelephonyTone = TelephonyTone.switchSpec9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec9
 * @description Alias of {@link TelephonyTone_switchSpec9}.
 * @constant
 * @type {number}
 */
export
const switchSpec9: TelephonyTone = TelephonyTone.switchSpec9; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec10
 * @description Switching-function specific tone 10. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec10: TelephonyTone = TelephonyTone.switchSpec10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec10
 * @description Alias of {@link TelephonyTone_switchSpec10}.
 * @constant
 * @type {number}
 */
export
const switchSpec10: TelephonyTone = TelephonyTone.switchSpec10; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec11
 * @description Switching-function specific tone 11. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec11: TelephonyTone = TelephonyTone.switchSpec11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec11
 * @description Alias of {@link TelephonyTone_switchSpec11}.
 * @constant
 * @type {number}
 */
export
const switchSpec11: TelephonyTone = TelephonyTone.switchSpec11; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec12
 * @description Switching-function specific tone 12. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec12: TelephonyTone = TelephonyTone.switchSpec12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec12
 * @description Alias of {@link TelephonyTone_switchSpec12}.
 * @constant
 * @type {number}
 */
export
const switchSpec12: TelephonyTone = TelephonyTone.switchSpec12; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec13
 * @description Switching-function specific tone 13. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec13: TelephonyTone = TelephonyTone.switchSpec13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec13
 * @description Alias of {@link TelephonyTone_switchSpec13}.
 * @constant
 * @type {number}
 */
export
const switchSpec13: TelephonyTone = TelephonyTone.switchSpec13; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec14
 * @description Switching-function specific tone 14. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec14: TelephonyTone = TelephonyTone.switchSpec14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec14
 * @description Alias of {@link TelephonyTone_switchSpec14}.
 * @constant
 * @type {number}
 */
export
const switchSpec14: TelephonyTone = TelephonyTone.switchSpec14; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec15
 * @description Switching-function specific tone 15. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec15: TelephonyTone = TelephonyTone.switchSpec15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec15
 * @description Alias of {@link TelephonyTone_switchSpec15}.
 * @constant
 * @type {number}
 */
export
const switchSpec15: TelephonyTone = TelephonyTone.switchSpec15; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec16
 * @description Switching-function specific tone 16. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec16: TelephonyTone = TelephonyTone.switchSpec16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec16
 * @description Alias of {@link TelephonyTone_switchSpec16}.
 * @constant
 * @type {number}
 */
export
const switchSpec16: TelephonyTone = TelephonyTone.switchSpec16; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec17
 * @description Switching-function specific tone 17. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec17: TelephonyTone = TelephonyTone.switchSpec17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec17
 * @description Alias of {@link TelephonyTone_switchSpec17}.
 * @constant
 * @type {number}
 */
export
const switchSpec17: TelephonyTone = TelephonyTone.switchSpec17; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec18
 * @description Switching-function specific tone 18. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec18: TelephonyTone = TelephonyTone.switchSpec18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec18
 * @description Alias of {@link TelephonyTone_switchSpec18}.
 * @constant
 * @type {number}
 */
export
const switchSpec18: TelephonyTone = TelephonyTone.switchSpec18; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec19
 * @description Switching-function specific tone 19. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec19: TelephonyTone = TelephonyTone.switchSpec19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec19
 * @description Alias of {@link TelephonyTone_switchSpec19}.
 * @constant
 * @type {number}
 */
export
const switchSpec19: TelephonyTone = TelephonyTone.switchSpec19; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec20
 * @description Switching-function specific tone 20. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec20: TelephonyTone = TelephonyTone.switchSpec20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec20
 * @description Alias of {@link TelephonyTone_switchSpec20}.
 * @constant
 * @type {number}
 */
export
const switchSpec20: TelephonyTone = TelephonyTone.switchSpec20; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec21
 * @description Switching-function specific tone 21. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec21: TelephonyTone = TelephonyTone.switchSpec21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec21
 * @description Alias of {@link TelephonyTone_switchSpec21}.
 * @constant
 * @type {number}
 */
export
const switchSpec21: TelephonyTone = TelephonyTone.switchSpec21; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec22
 * @description Switching-function specific tone 22. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec22: TelephonyTone = TelephonyTone.switchSpec22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec22
 * @description Alias of {@link TelephonyTone_switchSpec22}.
 * @constant
 * @type {number}
 */
export
const switchSpec22: TelephonyTone = TelephonyTone.switchSpec22; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec23
 * @description Switching-function specific tone 23. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec23: TelephonyTone = TelephonyTone.switchSpec23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec23
 * @description Alias of {@link TelephonyTone_switchSpec23}.
 * @constant
 * @type {number}
 */
export
const switchSpec23: TelephonyTone = TelephonyTone.switchSpec23; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec24
 * @description Switching-function specific tone 24. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec24: TelephonyTone = TelephonyTone.switchSpec24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec24
 * @description Alias of {@link TelephonyTone_switchSpec24}.
 * @constant
 * @type {number}
 */
export
const switchSpec24: TelephonyTone = TelephonyTone.switchSpec24; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec25
 * @description Switching-function specific tone 25. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec25: TelephonyTone = TelephonyTone.switchSpec25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec25
 * @description Alias of {@link TelephonyTone_switchSpec25}.
 * @constant
 * @type {number}
 */
export
const switchSpec25: TelephonyTone = TelephonyTone.switchSpec25; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec26
 * @description Switching-function specific tone 26. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec26: TelephonyTone = TelephonyTone.switchSpec26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec26
 * @description Alias of {@link TelephonyTone_switchSpec26}.
 * @constant
 * @type {number}
 */
export
const switchSpec26: TelephonyTone = TelephonyTone.switchSpec26; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec27
 * @description Switching-function specific tone 27. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec27: TelephonyTone = TelephonyTone.switchSpec27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec27
 * @description Alias of {@link TelephonyTone_switchSpec27}.
 * @constant
 * @type {number}
 */
export
const switchSpec27: TelephonyTone = TelephonyTone.switchSpec27; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec28
 * @description Switching-function specific tone 28. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec28: TelephonyTone = TelephonyTone.switchSpec28; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec28
 * @description Alias of {@link TelephonyTone_switchSpec28}.
 * @constant
 * @type {number}
 */
export
const switchSpec28: TelephonyTone = TelephonyTone.switchSpec28; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec29
 * @description Switching-function specific tone 29. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec29: TelephonyTone = TelephonyTone.switchSpec29; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec29
 * @description Alias of {@link TelephonyTone_switchSpec29}.
 * @constant
 * @type {number}
 */
export
const switchSpec29: TelephonyTone = TelephonyTone.switchSpec29; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec30
 * @description Switching-function specific tone 30. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec30: TelephonyTone = TelephonyTone.switchSpec30; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec30
 * @description Alias of {@link TelephonyTone_switchSpec30}.
 * @constant
 * @type {number}
 */
export
const switchSpec30: TelephonyTone = TelephonyTone.switchSpec30; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec31
 * @description Switching-function specific tone 31. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec31: TelephonyTone = TelephonyTone.switchSpec31; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec31
 * @description Alias of {@link TelephonyTone_switchSpec31}.
 * @constant
 * @type {number}
 */
export
const switchSpec31: TelephonyTone = TelephonyTone.switchSpec31; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec32
 * @description Switching-function specific tone 32. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec32: TelephonyTone = TelephonyTone.switchSpec32; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec32
 * @description Alias of {@link TelephonyTone_switchSpec32}.
 * @constant
 * @type {number}
 */
export
const switchSpec32: TelephonyTone = TelephonyTone.switchSpec32; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec33
 * @description Switching-function specific tone 33. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec33: TelephonyTone = TelephonyTone.switchSpec33; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec33
 * @description Alias of {@link TelephonyTone_switchSpec33}.
 * @constant
 * @type {number}
 */
export
const switchSpec33: TelephonyTone = TelephonyTone.switchSpec33; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec34
 * @description Switching-function specific tone 34. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec34: TelephonyTone = TelephonyTone.switchSpec34; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec34
 * @description Alias of {@link TelephonyTone_switchSpec34}.
 * @constant
 * @type {number}
 */
export
const switchSpec34: TelephonyTone = TelephonyTone.switchSpec34; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec35
 * @description Switching-function specific tone 35. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec35: TelephonyTone = TelephonyTone.switchSpec35; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec35
 * @description Alias of {@link TelephonyTone_switchSpec35}.
 * @constant
 * @type {number}
 */
export
const switchSpec35: TelephonyTone = TelephonyTone.switchSpec35; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec36
 * @description Switching-function specific tone 36. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec36: TelephonyTone = TelephonyTone.switchSpec36; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec36
 * @description Alias of {@link TelephonyTone_switchSpec36}.
 * @constant
 * @type {number}
 */
export
const switchSpec36: TelephonyTone = TelephonyTone.switchSpec36; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec37
 * @description Switching-function specific tone 37. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec37: TelephonyTone = TelephonyTone.switchSpec37; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec37
 * @description Alias of {@link TelephonyTone_switchSpec37}.
 * @constant
 * @type {number}
 */
export
const switchSpec37: TelephonyTone = TelephonyTone.switchSpec37; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec38
 * @description Switching-function specific tone 38. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec38: TelephonyTone = TelephonyTone.switchSpec38; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec38
 * @description Alias of {@link TelephonyTone_switchSpec38}.
 * @constant
 * @type {number}
 */
export
const switchSpec38: TelephonyTone = TelephonyTone.switchSpec38; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec39
 * @description Switching-function specific tone 39. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec39: TelephonyTone = TelephonyTone.switchSpec39; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec39
 * @description Alias of {@link TelephonyTone_switchSpec39}.
 * @constant
 * @type {number}
 */
export
const switchSpec39: TelephonyTone = TelephonyTone.switchSpec39; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec40
 * @description Switching-function specific tone 40. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec40: TelephonyTone = TelephonyTone.switchSpec40; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec40
 * @description Alias of {@link TelephonyTone_switchSpec40}.
 * @constant
 * @type {number}
 */
export
const switchSpec40: TelephonyTone = TelephonyTone.switchSpec40; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec41
 * @description Switching-function specific tone 41. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec41: TelephonyTone = TelephonyTone.switchSpec41; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec41
 * @description Alias of {@link TelephonyTone_switchSpec41}.
 * @constant
 * @type {number}
 */
export
const switchSpec41: TelephonyTone = TelephonyTone.switchSpec41; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec42
 * @description Switching-function specific tone 42. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec42: TelephonyTone = TelephonyTone.switchSpec42; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec42
 * @description Alias of {@link TelephonyTone_switchSpec42}.
 * @constant
 * @type {number}
 */
export
const switchSpec42: TelephonyTone = TelephonyTone.switchSpec42; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec43
 * @description Switching-function specific tone 43. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec43: TelephonyTone = TelephonyTone.switchSpec43; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec43
 * @description Alias of {@link TelephonyTone_switchSpec43}.
 * @constant
 * @type {number}
 */
export
const switchSpec43: TelephonyTone = TelephonyTone.switchSpec43; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec44
 * @description Switching-function specific tone 44. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec44: TelephonyTone = TelephonyTone.switchSpec44; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec44
 * @description Alias of {@link TelephonyTone_switchSpec44}.
 * @constant
 * @type {number}
 */
export
const switchSpec44: TelephonyTone = TelephonyTone.switchSpec44; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec45
 * @description Switching-function specific tone 45. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec45: TelephonyTone = TelephonyTone.switchSpec45; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec45
 * @description Alias of {@link TelephonyTone_switchSpec45}.
 * @constant
 * @type {number}
 */
export
const switchSpec45: TelephonyTone = TelephonyTone.switchSpec45; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec46
 * @description Switching-function specific tone 46. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec46: TelephonyTone = TelephonyTone.switchSpec46; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec46
 * @description Alias of {@link TelephonyTone_switchSpec46}.
 * @constant
 * @type {number}
 */
export
const switchSpec46: TelephonyTone = TelephonyTone.switchSpec46; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec47
 * @description Switching-function specific tone 47. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec47: TelephonyTone = TelephonyTone.switchSpec47; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec47
 * @description Alias of {@link TelephonyTone_switchSpec47}.
 * @constant
 * @type {number}
 */
export
const switchSpec47: TelephonyTone = TelephonyTone.switchSpec47; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec48
 * @description Switching-function specific tone 48. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec48: TelephonyTone = TelephonyTone.switchSpec48; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec48
 * @description Alias of {@link TelephonyTone_switchSpec48}.
 * @constant
 * @type {number}
 */
export
const switchSpec48: TelephonyTone = TelephonyTone.switchSpec48; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec49
 * @description Switching-function specific tone 49. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec49: TelephonyTone = TelephonyTone.switchSpec49; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec49
 * @description Alias of {@link TelephonyTone_switchSpec49}.
 * @constant
 * @type {number}
 */
export
const switchSpec49: TelephonyTone = TelephonyTone.switchSpec49; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec50
 * @description Switching-function specific tone 50. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec50: TelephonyTone = TelephonyTone.switchSpec50; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec50
 * @description Alias of {@link TelephonyTone_switchSpec50}.
 * @constant
 * @type {number}
 */
export
const switchSpec50: TelephonyTone = TelephonyTone.switchSpec50; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec51
 * @description Switching-function specific tone 51. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec51: TelephonyTone = TelephonyTone.switchSpec51; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec51
 * @description Alias of {@link TelephonyTone_switchSpec51}.
 * @constant
 * @type {number}
 */
export
const switchSpec51: TelephonyTone = TelephonyTone.switchSpec51; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec52
 * @description Switching-function specific tone 52. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec52: TelephonyTone = TelephonyTone.switchSpec52; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec52
 * @description Alias of {@link TelephonyTone_switchSpec52}.
 * @constant
 * @type {number}
 */
export
const switchSpec52: TelephonyTone = TelephonyTone.switchSpec52; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec53
 * @description Switching-function specific tone 53. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec53: TelephonyTone = TelephonyTone.switchSpec53; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec53
 * @description Alias of {@link TelephonyTone_switchSpec53}.
 * @constant
 * @type {number}
 */
export
const switchSpec53: TelephonyTone = TelephonyTone.switchSpec53; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec54
 * @description Switching-function specific tone 54. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec54: TelephonyTone = TelephonyTone.switchSpec54; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec54
 * @description Alias of {@link TelephonyTone_switchSpec54}.
 * @constant
 * @type {number}
 */
export
const switchSpec54: TelephonyTone = TelephonyTone.switchSpec54; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec55
 * @description Switching-function specific tone 55. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec55: TelephonyTone = TelephonyTone.switchSpec55; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec55
 * @description Alias of {@link TelephonyTone_switchSpec55}.
 * @constant
 * @type {number}
 */
export
const switchSpec55: TelephonyTone = TelephonyTone.switchSpec55; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec56
 * @description Switching-function specific tone 56. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec56: TelephonyTone = TelephonyTone.switchSpec56; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec56
 * @description Alias of {@link TelephonyTone_switchSpec56}.
 * @constant
 * @type {number}
 */
export
const switchSpec56: TelephonyTone = TelephonyTone.switchSpec56; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec57
 * @description Switching-function specific tone 57. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec57: TelephonyTone = TelephonyTone.switchSpec57; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec57
 * @description Alias of {@link TelephonyTone_switchSpec57}.
 * @constant
 * @type {number}
 */
export
const switchSpec57: TelephonyTone = TelephonyTone.switchSpec57; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec58
 * @description Switching-function specific tone 58. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec58: TelephonyTone = TelephonyTone.switchSpec58; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec58
 * @description Alias of {@link TelephonyTone_switchSpec58}.
 * @constant
 * @type {number}
 */
export
const switchSpec58: TelephonyTone = TelephonyTone.switchSpec58; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec59
 * @description Switching-function specific tone 59. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec59: TelephonyTone = TelephonyTone.switchSpec59; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec59
 * @description Alias of {@link TelephonyTone_switchSpec59}.
 * @constant
 * @type {number}
 */
export
const switchSpec59: TelephonyTone = TelephonyTone.switchSpec59; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec60
 * @description Switching-function specific tone 60. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec60: TelephonyTone = TelephonyTone.switchSpec60; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec60
 * @description Alias of {@link TelephonyTone_switchSpec60}.
 * @constant
 * @type {number}
 */
export
const switchSpec60: TelephonyTone = TelephonyTone.switchSpec60; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec61
 * @description Switching-function specific tone 61. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec61: TelephonyTone = TelephonyTone.switchSpec61; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec61
 * @description Alias of {@link TelephonyTone_switchSpec61}.
 * @constant
 * @type {number}
 */
export
const switchSpec61: TelephonyTone = TelephonyTone.switchSpec61; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec62
 * @description Switching-function specific tone 62. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec62: TelephonyTone = TelephonyTone.switchSpec62; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec62
 * @description Alias of {@link TelephonyTone_switchSpec62}.
 * @constant
 * @type {number}
 */
export
const switchSpec62: TelephonyTone = TelephonyTone.switchSpec62; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec63
 * @description Switching-function specific tone 63. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec63: TelephonyTone = TelephonyTone.switchSpec63; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec63
 * @description Alias of {@link TelephonyTone_switchSpec63}.
 * @constant
 * @type {number}
 */
export
const switchSpec63: TelephonyTone = TelephonyTone.switchSpec63; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec64
 * @description Switching-function specific tone 64. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec64: TelephonyTone = TelephonyTone.switchSpec64; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec64
 * @description Alias of {@link TelephonyTone_switchSpec64}.
 * @constant
 * @type {number}
 */
export
const switchSpec64: TelephonyTone = TelephonyTone.switchSpec64; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec65
 * @description Switching-function specific tone 65. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec65: TelephonyTone = TelephonyTone.switchSpec65; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec65
 * @description Alias of {@link TelephonyTone_switchSpec65}.
 * @constant
 * @type {number}
 */
export
const switchSpec65: TelephonyTone = TelephonyTone.switchSpec65; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec66
 * @description Switching-function specific tone 66. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec66: TelephonyTone = TelephonyTone.switchSpec66; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec66
 * @description Alias of {@link TelephonyTone_switchSpec66}.
 * @constant
 * @type {number}
 */
export
const switchSpec66: TelephonyTone = TelephonyTone.switchSpec66; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec67
 * @description Switching-function specific tone 67. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec67: TelephonyTone = TelephonyTone.switchSpec67; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec67
 * @description Alias of {@link TelephonyTone_switchSpec67}.
 * @constant
 * @type {number}
 */
export
const switchSpec67: TelephonyTone = TelephonyTone.switchSpec67; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec68
 * @description Switching-function specific tone 68. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec68: TelephonyTone = TelephonyTone.switchSpec68; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec68
 * @description Alias of {@link TelephonyTone_switchSpec68}.
 * @constant
 * @type {number}
 */
export
const switchSpec68: TelephonyTone = TelephonyTone.switchSpec68; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec69
 * @description Switching-function specific tone 69. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec69: TelephonyTone = TelephonyTone.switchSpec69; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec69
 * @description Alias of {@link TelephonyTone_switchSpec69}.
 * @constant
 * @type {number}
 */
export
const switchSpec69: TelephonyTone = TelephonyTone.switchSpec69; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec70
 * @description Switching-function specific tone 70. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec70: TelephonyTone = TelephonyTone.switchSpec70; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec70
 * @description Alias of {@link TelephonyTone_switchSpec70}.
 * @constant
 * @type {number}
 */
export
const switchSpec70: TelephonyTone = TelephonyTone.switchSpec70; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec71
 * @description Switching-function specific tone 71. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec71: TelephonyTone = TelephonyTone.switchSpec71; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec71
 * @description Alias of {@link TelephonyTone_switchSpec71}.
 * @constant
 * @type {number}
 */
export
const switchSpec71: TelephonyTone = TelephonyTone.switchSpec71; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec72
 * @description Switching-function specific tone 72. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec72: TelephonyTone = TelephonyTone.switchSpec72; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec72
 * @description Alias of {@link TelephonyTone_switchSpec72}.
 * @constant
 * @type {number}
 */
export
const switchSpec72: TelephonyTone = TelephonyTone.switchSpec72; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec73
 * @description Switching-function specific tone 73. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec73: TelephonyTone = TelephonyTone.switchSpec73; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec73
 * @description Alias of {@link TelephonyTone_switchSpec73}.
 * @constant
 * @type {number}
 */
export
const switchSpec73: TelephonyTone = TelephonyTone.switchSpec73; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec74
 * @description Switching-function specific tone 74. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec74: TelephonyTone = TelephonyTone.switchSpec74; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec74
 * @description Alias of {@link TelephonyTone_switchSpec74}.
 * @constant
 * @type {number}
 */
export
const switchSpec74: TelephonyTone = TelephonyTone.switchSpec74; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec75
 * @description Switching-function specific tone 75. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec75: TelephonyTone = TelephonyTone.switchSpec75; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec75
 * @description Alias of {@link TelephonyTone_switchSpec75}.
 * @constant
 * @type {number}
 */
export
const switchSpec75: TelephonyTone = TelephonyTone.switchSpec75; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec76
 * @description Switching-function specific tone 76. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec76: TelephonyTone = TelephonyTone.switchSpec76; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec76
 * @description Alias of {@link TelephonyTone_switchSpec76}.
 * @constant
 * @type {number}
 */
export
const switchSpec76: TelephonyTone = TelephonyTone.switchSpec76; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec77
 * @description Switching-function specific tone 77. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec77: TelephonyTone = TelephonyTone.switchSpec77; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec77
 * @description Alias of {@link TelephonyTone_switchSpec77}.
 * @constant
 * @type {number}
 */
export
const switchSpec77: TelephonyTone = TelephonyTone.switchSpec77; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec78
 * @description Switching-function specific tone 78. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec78: TelephonyTone = TelephonyTone.switchSpec78; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec78
 * @description Alias of {@link TelephonyTone_switchSpec78}.
 * @constant
 * @type {number}
 */
export
const switchSpec78: TelephonyTone = TelephonyTone.switchSpec78; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec79
 * @description Switching-function specific tone 79. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec79: TelephonyTone = TelephonyTone.switchSpec79; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec79
 * @description Alias of {@link TelephonyTone_switchSpec79}.
 * @constant
 * @type {number}
 */
export
const switchSpec79: TelephonyTone = TelephonyTone.switchSpec79; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec80
 * @description Switching-function specific tone 80. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec80: TelephonyTone = TelephonyTone.switchSpec80; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec80
 * @description Alias of {@link TelephonyTone_switchSpec80}.
 * @constant
 * @type {number}
 */
export
const switchSpec80: TelephonyTone = TelephonyTone.switchSpec80; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec81
 * @description Switching-function specific tone 81. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec81: TelephonyTone = TelephonyTone.switchSpec81; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec81
 * @description Alias of {@link TelephonyTone_switchSpec81}.
 * @constant
 * @type {number}
 */
export
const switchSpec81: TelephonyTone = TelephonyTone.switchSpec81; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec82
 * @description Switching-function specific tone 82. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec82: TelephonyTone = TelephonyTone.switchSpec82; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec82
 * @description Alias of {@link TelephonyTone_switchSpec82}.
 * @constant
 * @type {number}
 */
export
const switchSpec82: TelephonyTone = TelephonyTone.switchSpec82; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec83
 * @description Switching-function specific tone 83. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec83: TelephonyTone = TelephonyTone.switchSpec83; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec83
 * @description Alias of {@link TelephonyTone_switchSpec83}.
 * @constant
 * @type {number}
 */
export
const switchSpec83: TelephonyTone = TelephonyTone.switchSpec83; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec84
 * @description Switching-function specific tone 84. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec84: TelephonyTone = TelephonyTone.switchSpec84; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec84
 * @description Alias of {@link TelephonyTone_switchSpec84}.
 * @constant
 * @type {number}
 */
export
const switchSpec84: TelephonyTone = TelephonyTone.switchSpec84; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec85
 * @description Switching-function specific tone 85. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec85: TelephonyTone = TelephonyTone.switchSpec85; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec85
 * @description Alias of {@link TelephonyTone_switchSpec85}.
 * @constant
 * @type {number}
 */
export
const switchSpec85: TelephonyTone = TelephonyTone.switchSpec85; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec86
 * @description Switching-function specific tone 86. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec86: TelephonyTone = TelephonyTone.switchSpec86; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec86
 * @description Alias of {@link TelephonyTone_switchSpec86}.
 * @constant
 * @type {number}
 */
export
const switchSpec86: TelephonyTone = TelephonyTone.switchSpec86; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec87
 * @description Switching-function specific tone 87. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec87: TelephonyTone = TelephonyTone.switchSpec87; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec87
 * @description Alias of {@link TelephonyTone_switchSpec87}.
 * @constant
 * @type {number}
 */
export
const switchSpec87: TelephonyTone = TelephonyTone.switchSpec87; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec88
 * @description Switching-function specific tone 88. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec88: TelephonyTone = TelephonyTone.switchSpec88; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec88
 * @description Alias of {@link TelephonyTone_switchSpec88}.
 * @constant
 * @type {number}
 */
export
const switchSpec88: TelephonyTone = TelephonyTone.switchSpec88; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec89
 * @description Switching-function specific tone 89. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec89: TelephonyTone = TelephonyTone.switchSpec89; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec89
 * @description Alias of {@link TelephonyTone_switchSpec89}.
 * @constant
 * @type {number}
 */
export
const switchSpec89: TelephonyTone = TelephonyTone.switchSpec89; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec90
 * @description Switching-function specific tone 90. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec90: TelephonyTone = TelephonyTone.switchSpec90; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec90
 * @description Alias of {@link TelephonyTone_switchSpec90}.
 * @constant
 * @type {number}
 */
export
const switchSpec90: TelephonyTone = TelephonyTone.switchSpec90; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec91
 * @description Switching-function specific tone 91. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec91: TelephonyTone = TelephonyTone.switchSpec91; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec91
 * @description Alias of {@link TelephonyTone_switchSpec91}.
 * @constant
 * @type {number}
 */
export
const switchSpec91: TelephonyTone = TelephonyTone.switchSpec91; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec92
 * @description Switching-function specific tone 92. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec92: TelephonyTone = TelephonyTone.switchSpec92; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec92
 * @description Alias of {@link TelephonyTone_switchSpec92}.
 * @constant
 * @type {number}
 */
export
const switchSpec92: TelephonyTone = TelephonyTone.switchSpec92; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec93
 * @description Switching-function specific tone 93. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec93: TelephonyTone = TelephonyTone.switchSpec93; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec93
 * @description Alias of {@link TelephonyTone_switchSpec93}.
 * @constant
 * @type {number}
 */
export
const switchSpec93: TelephonyTone = TelephonyTone.switchSpec93; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec94
 * @description Switching-function specific tone 94. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec94: TelephonyTone = TelephonyTone.switchSpec94; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec94
 * @description Alias of {@link TelephonyTone_switchSpec94}.
 * @constant
 * @type {number}
 */
export
const switchSpec94: TelephonyTone = TelephonyTone.switchSpec94; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec95
 * @description Switching-function specific tone 95. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec95: TelephonyTone = TelephonyTone.switchSpec95; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec95
 * @description Alias of {@link TelephonyTone_switchSpec95}.
 * @constant
 * @type {number}
 */
export
const switchSpec95: TelephonyTone = TelephonyTone.switchSpec95; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec96
 * @description Switching-function specific tone 96. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec96: TelephonyTone = TelephonyTone.switchSpec96; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec96
 * @description Alias of {@link TelephonyTone_switchSpec96}.
 * @constant
 * @type {number}
 */
export
const switchSpec96: TelephonyTone = TelephonyTone.switchSpec96; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec97
 * @description Switching-function specific tone 97. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec97: TelephonyTone = TelephonyTone.switchSpec97; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec97
 * @description Alias of {@link TelephonyTone_switchSpec97}.
 * @constant
 * @type {number}
 */
export
const switchSpec97: TelephonyTone = TelephonyTone.switchSpec97; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec98
 * @description Switching-function specific tone 98. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec98: TelephonyTone = TelephonyTone.switchSpec98; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec98
 * @description Alias of {@link TelephonyTone_switchSpec98}.
 * @constant
 * @type {number}
 */
export
const switchSpec98: TelephonyTone = TelephonyTone.switchSpec98; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec99
 * @description Switching-function specific tone 99. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec99: TelephonyTone = TelephonyTone.switchSpec99; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec99
 * @description Alias of {@link TelephonyTone_switchSpec99}.
 * @constant
 * @type {number}
 */
export
const switchSpec99: TelephonyTone = TelephonyTone.switchSpec99; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TelephonyTone_switchSpec100
 * @description Switching-function specific tone 100. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TelephonyTone_switchSpec100: TelephonyTone = TelephonyTone.switchSpec100; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchSpec100
 * @description Alias of {@link TelephonyTone_switchSpec100}.
 * @constant
 * @type {number}
 */
export
const switchSpec100: TelephonyTone = TelephonyTone.switchSpec100; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TelephonyTone: $.ASN1Decoder<TelephonyTone> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelephonyTone
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TelephonyTone (el: _Element): TelephonyTone {
    if (!_cached_decoder_for_TelephonyTone) { _cached_decoder_for_TelephonyTone = $._decodeEnumerated; }
    return _cached_decoder_for_TelephonyTone(el);
}

let _cached_encoder_for_TelephonyTone: $.ASN1Encoder<TelephonyTone> | null = null;

/**
 * @summary Encodes a(n) TelephonyTone into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephonyTone, encoded as an ASN.1 Element.
 */
export
function _encode_TelephonyTone (value: TelephonyTone, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TelephonyTone) { _cached_encoder_for_TelephonyTone = $._encodeEnumerated; }
    return _cached_encoder_for_TelephonyTone(value, elGetter);
}


/* eslint-enable */
