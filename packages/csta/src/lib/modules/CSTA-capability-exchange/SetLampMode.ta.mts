/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary SetLampMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetLampMode  ::=  BIT STRING
 * {     lampModeBrokenFlutter             (  0),     -- optional parameter
 *     lampModeFlutter             (  1),     -- optional parameter
 *     lampModeOff                 (  2),     -- optional parameter
 *     lampModeSteady                 (  3),     -- optional parameter
 *     lampModeWink                 (  4),     -- optional parameter
 *     lampModeReserved             (  5),     -- optional parameter
 *     lampModeSf0                 (  6),     -- optional parameters
 *     lampModeSf1                 (  7),     -- optional parameters
 *     lampModeSf2                 (  8),     -- optional parameters
 *     lampModeSf3                 (  9),     -- optional parameters
 *     lampModeSf4                 ( 10),     -- optional parameters
 *     lampModeSf5                 ( 11),     -- optional parameters
 *     lampModeSf6                 ( 12),     -- optional parameters
 *     lampModeSf7                 ( 13),     -- optional parameters
 *     lampModeSf8                 ( 14),     -- optional parameters
 *     lampModeSf9                 ( 15),     -- optional parameters
 *     lampModeSf10                 ( 16),     -- optional parameters
 *     lampModeSf11                 ( 17),     -- optional parameters
 *     lampModeSf12                 ( 18),     -- optional parameters
 *     lampModeSf13                 ( 19),     -- optional parameters
 *     lampModeSf14                 ( 20),     -- optional parameters
 *     lampModeSf15                 ( 21),     -- optional parameters
 *     lampModeSf16                 ( 22),     -- optional parameters
 *     lampModeSf17                 ( 23),     -- optional parameters
 *     lampModeSf18                 ( 24),     -- optional parameters
 *     lampModeSf19                 ( 25),     -- optional parameters
 *     lampModeSf20                 ( 26),     -- optional parameters
 *     lampModeSf21                 ( 27),     -- optional parameters
 *     lampModeSf22                 ( 28),     -- optional parameters
 *     lampModeSf23                 ( 29),     -- optional parameters
 *     lampModeSf24                 ( 30),     -- optional parameters
 *     lampModeSf25                 ( 31),     -- optional parameters
 *     lampModeSf26                 ( 32),     -- optional parameters
 *     lampModeSf27                 ( 33),     -- optional parameters
 *     lampModeSf28                 ( 34),     -- optional parameters
 *     lampModeSf29                 ( 35),     -- optional parameters
 *     lampModeSf30                 ( 36),     -- optional parameters
 *     lampModeSf31                 ( 37),     -- optional parameters
 *     lampModeSf32                 ( 38),     -- optional parameters
 *     lampModeSf33                 ( 39),     -- optional parameters
 *     lampModeSf34                 ( 40),     -- optional parameters
 *     lampModeSf35                 ( 41),     -- optional parameters
 *     lampModeSf36                 ( 42),     -- optional parameters
 *     lampModeSf37                 ( 43),     -- optional parameters
 *     lampModeSf38                 ( 44),     -- optional parameters
 *     lampModeSf39                 ( 45),     -- optional parameters
 *     lampModeSf40                 ( 46),     -- optional parameters
 *     lampModeSf41                 ( 47),     -- optional parameters
 *     lampModeSf42                 ( 48),     -- optional parameters
 *     lampModeSf43                 ( 49),     -- optional parameters
 *     lampModeSf44                 ( 50),     -- optional parameters
 *     lampModeSf45                 ( 51),     -- optional parameters
 *     lampModeSf46                 ( 52),     -- optional parameters
 *     lampModeSf47                 ( 53),     -- optional parameters
 *     lampModeSf48                 ( 54),     -- optional parameters
 *     lampModeSf49                 ( 55),     -- optional parameters
 *     lampModeSf50                 ( 56),     -- optional parameters
 *     lampModeSf51                 ( 57),     -- optional parameters
 *     lampModeSf52                 ( 58),     -- optional parameters
 *     lampModeSf53                 ( 59),     -- optional parameters
 *     lampModeSf54                 ( 60),     -- optional parameters
 *     lampModeSf55                 ( 61),     -- optional parameters
 *     lampModeSf56                 ( 62),     -- optional parameters
 *     lampModeSf57                 ( 63),     -- optional parameters
 *     lampModeSf58                 ( 64),     -- optional parameters
 *     lampModeSf59                 ( 65),     -- optional parameters
 *     lampModeSf60                 ( 66),     -- optional parameters
 *     lampModeSf61                 ( 67),     -- optional parameters
 *     lampModeSf62                 ( 68),     -- optional parameters
 *     lampModeSf63                 ( 69),     -- optional parameters
 *     lampModeSf64                 ( 70),     -- optional parameters
 *     lampModeSf65                 ( 71),     -- optional parameters
 *     lampModeSf66                 ( 72),     -- optional parameters
 *     lampModeSf67                 ( 73),     -- optional parameters
 *     lampModeSf68                 ( 74),     -- optional parameters
 *     lampModeSf69                 ( 75),     -- optional parameters
 *     lampModeSf70                 ( 76),     -- optional parameters
 *     lampModeSf71                 ( 77),     -- optional parameters
 *     lampModeSf72                 ( 78),     -- optional parameters
 *     lampModeSf73                 ( 79),     -- optional parameters
 *     lampModeSf74                 ( 80),     -- optional parameters
 *     lampModeSf75                 ( 81),     -- optional parameters
 *     lampModeSf76                 ( 82),     -- optional parameters
 *     lampModeSf77                 ( 83),     -- optional parameters
 *     lampModeSf78                 ( 84),     -- optional parameters
 *     lampModeSf79                 ( 85),     -- optional parameters
 *     lampModeSf80                 ( 86),     -- optional parameters
 *     lampModeSf81                 ( 87),     -- optional parameters
 *     lampModeSf82                 ( 88),     -- optional parameters
 *     lampModeSf83                 ( 89),     -- optional parameters
 *     lampModeSf84                 ( 90),     -- optional parameters
 *     lampModeSf85                 ( 91),     -- optional parameters
 *     lampModeSf86                 ( 92),     -- optional parameters
 *     lampModeSf87                 ( 93),     -- optional parameters
 *     lampModeSf88                 ( 94),     -- optional parameters
 *     lampModeSf89                 ( 95),     -- optional parameters
 *     lampModeSf90                 ( 96),     -- optional parameters
 *     lampModeSf91                 ( 97),     -- optional parameters
 *     lampModeSf92                 ( 98),     -- optional parameters
 *     lampModeSf93                 ( 99),     -- optional parameters
 *     lampModeSf94                 (100),     -- optional parameters
 *     lampBrightnessNormal             (101),     -- optional parameters
 *     lampBrightnessDim             (102),     -- optional parameters
 *     lampBrightnessBright             (103),     -- optional parameters
 *     lampColorNoColor             (104),     -- optional parameters
 *     lampColorRed                 (105),     -- optional parameters
 *     lampColorYellow             (106),     -- optional parameters
 *     lampColorGreen                 (107),     -- optional parameters
 *     lampColorBlue                 (108),     -- optional parameters
 *     lampColorReserved             (109),     -- optional parameters
 *     lampColorSf0                 (110),     -- optional parameters
 *     lampColorSf1                 (111),     -- optional parameters
 *     lampColorSf2                 (112),     -- optional parameters
 *     lampColorSf3                 (113),     -- optional parameters
 *     lampColorSf4                 (114),     -- optional parameters
 *     lampColorSf5                 (115),     -- optional parameters
 *     lampColorSf6                 (116),     -- optional parameters
 *     lampColorSf7                 (117),     -- optional parameters
 *     lampColorSf8                 (118),     -- optional parameters
 *     lampColorSf9                 (119),     -- optional parameters
 *     lampColorSf10                 (120),     -- optional parameters
 *     lampColorSf11                 (121),     -- optional parameters
 *     lampColorSf12                 (122),     -- optional parameters
 *     lampColorSf13                 (123),     -- optional parameters
 *     lampColorSf14                 (124),     -- optional parameters
 *     lampColorSf15                 (125),     -- optional parameters
 *     lampColorSf16                 (126),     -- optional parameters
 *     lampColorSf17                 (127),     -- optional parameters
 *     lampColorSf18                 (128),     -- optional parameters
 *     lampColorSf19                 (129),     -- optional parameters
 *     lampColorSf20                 (130),     -- optional parameters
 *     lampColorSf21                 (131),     -- optional parameters
 *     lampColorSf22                 (132),     -- optional parameters
 *     lampColorSf23                 (133),     -- optional parameters
 *     lampColorSf24                 (134),     -- optional parameters
 *     lampColorSf25                 (135),     -- optional parameters
 *     lampColorSf26                 (136),     -- optional parameters
 *     lampColorSf27                 (137),     -- optional parameters
 *     lampColorSf28                 (138),     -- optional parameters
 *     lampColorSf29                 (139),     -- optional parameters
 *     lampColorSf30                 (140),     -- optional parameters
 *     lampColorSf31                 (141),     -- optional parameters
 *     lampColorSf32                 (142),     -- optional parameters
 *     lampColorSf33                 (143),     -- optional parameters
 *     lampColorSf34                 (144),     -- optional parameters
 *     lampColorSf35                 (145),     -- optional parameters
 *     lampColorSf36                 (146),     -- optional parameters
 *     lampColorSf37                 (147),     -- optional parameters
 *     lampColorSf38                 (148),     -- optional parameters
 *     lampColorSf39                 (149),     -- optional parameters
 *     lampColorSf40                 (150),     -- optional parameters
 *     lampColorSf41                 (151),     -- optional parameters
 *     lampColorSf42                 (152),     -- optional parameters
 *     lampColorSf43                 (153),     -- optional parameters
 *     lampColorSf44                 (154),     -- optional parameters
 *     lampColorSf45                 (155),     -- optional parameters
 *     lampColorSf46                 (156),     -- optional parameters
 *     lampColorSf47                 (157),     -- optional parameters
 *     lampColorSf48                 (158),     -- optional parameters
 *     lampColorSf49                 (159),     -- optional parameters
 *     lampColorSf50                 (160),     -- optional parameters
 *     lampColorSf51                 (161),     -- optional parameters
 *     lampColorSf52                 (162),     -- optional parameters
 *     lampColorSf53                 (163),     -- optional parameters
 *     lampColorSf54                 (164),     -- optional parameters
 *     lampColorSf55                 (165),     -- optional parameters
 *     lampColorSf56                 (166),     -- optional parameters
 *     lampColorSf57                 (167),     -- optional parameters
 *     lampColorSf58                 (168),     -- optional parameters
 *     lampColorSf59                 (169),     -- optional parameters
 *     lampColorSf60                 (170),     -- optional parameters
 *     lampColorSf61                 (171),     -- optional parameters
 *     lampColorSf62                 (172),     -- optional parameters
 *     lampColorSf63                 (173),     -- optional parameters
 *     lampColorSf64                 (174),     -- optional parameters
 *     lampColorSf65                 (175),     -- optional parameters
 *     lampColorSf66                 (176),     -- optional parameters
 *     lampColorSf67                 (177),     -- optional parameters
 *     lampColorSf68                 (178),     -- optional parameters
 *     lampColorSf69                 (179),     -- optional parameters
 *     lampColorSf70                 (180),     -- optional parameters
 *     lampColorSf71                 (181),     -- optional parameters
 *     lampColorSf72                 (182),     -- optional parameters
 *     lampColorSf73                 (183),     -- optional parameters
 *     lampColorSf74                 (184),     -- optional parameters
 *     lampColorSf75                 (185),     -- optional parameters
 *     lampColorSf76                 (186),     -- optional parameters
 *     lampColorSf77                 (187),     -- optional parameters
 *     lampColorSf78                 (188),     -- optional parameters
 *     lampColorSf79                 (189),     -- optional parameters
 *     lampColorSf80                 (190),     -- optional parameters
 *     lampColorSf81                 (191),     -- optional parameters
 *     lampColorSf82                 (192),     -- optional parameters
 *     lampColorSf83                 (193),     -- optional parameters
 *     lampColorSf84                 (194),     -- optional parameters
 *     lampColorSf85                 (195),     -- optional parameters
 *     lampColorSf86                 (196),     -- optional parameters
 *     lampColorSf87                 (197),     -- optional parameters
 *     lampColorSf88                 (198),     -- optional parameters
 *     lampColorSf89                 (199),     -- optional parameters
 *     lampColorSf90                 (200),     -- optional parameters
 *     lampColorSf91                 (201),     -- optional parameters
 *     lampColorSf92                 (202),     -- optional parameters
 *     lampColorSf93                 (203),     -- optional parameters
 *     lampColorSf94                 (204),     -- optional parameters
 *     privateData                 (205),     -- optional parameters
 *     privateDataInAck             (206),     -- optional parameters
 *     ackModelMultiStep             (207) }
 * ```
 */
export
type SetLampMode = BIT_STRING;

/**
 * @summary SetLampMode_lampModeBrokenFlutter
 * @constant
 */
export
const SetLampMode_lampModeBrokenFlutter: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lampModeBrokenFlutter
 * @constant
 */
export
const lampModeBrokenFlutter: number = SetLampMode_lampModeBrokenFlutter; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeFlutter
 * @constant
 */
export
const SetLampMode_lampModeFlutter: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary lampModeFlutter
 * @constant
 */
export
const lampModeFlutter: number = SetLampMode_lampModeFlutter; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeOff
 * @constant
 */
export
const SetLampMode_lampModeOff: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary lampModeOff
 * @constant
 */
export
const lampModeOff: number = SetLampMode_lampModeOff; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSteady
 * @constant
 */
export
const SetLampMode_lampModeSteady: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSteady
 * @constant
 */
export
const lampModeSteady: number = SetLampMode_lampModeSteady; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeWink
 * @constant
 */
export
const SetLampMode_lampModeWink: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary lampModeWink
 * @constant
 */
export
const lampModeWink: number = SetLampMode_lampModeWink; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeReserved
 * @constant
 */
export
const SetLampMode_lampModeReserved: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary lampModeReserved
 * @constant
 */
export
const lampModeReserved: number = SetLampMode_lampModeReserved; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf0
 * @constant
 */
export
const SetLampMode_lampModeSf0: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf0
 * @constant
 */
export
const lampModeSf0: number = SetLampMode_lampModeSf0; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf1
 * @constant
 */
export
const SetLampMode_lampModeSf1: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf1
 * @constant
 */
export
const lampModeSf1: number = SetLampMode_lampModeSf1; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf2
 * @constant
 */
export
const SetLampMode_lampModeSf2: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf2
 * @constant
 */
export
const lampModeSf2: number = SetLampMode_lampModeSf2; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf3
 * @constant
 */
export
const SetLampMode_lampModeSf3: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf3
 * @constant
 */
export
const lampModeSf3: number = SetLampMode_lampModeSf3; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf4
 * @constant
 */
export
const SetLampMode_lampModeSf4: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf4
 * @constant
 */
export
const lampModeSf4: number = SetLampMode_lampModeSf4; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf5
 * @constant
 */
export
const SetLampMode_lampModeSf5: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf5
 * @constant
 */
export
const lampModeSf5: number = SetLampMode_lampModeSf5; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf6
 * @constant
 */
export
const SetLampMode_lampModeSf6: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf6
 * @constant
 */
export
const lampModeSf6: number = SetLampMode_lampModeSf6; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf7
 * @constant
 */
export
const SetLampMode_lampModeSf7: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf7
 * @constant
 */
export
const lampModeSf7: number = SetLampMode_lampModeSf7; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf8
 * @constant
 */
export
const SetLampMode_lampModeSf8: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf8
 * @constant
 */
export
const lampModeSf8: number = SetLampMode_lampModeSf8; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf9
 * @constant
 */
export
const SetLampMode_lampModeSf9: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf9
 * @constant
 */
export
const lampModeSf9: number = SetLampMode_lampModeSf9; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf10
 * @constant
 */
export
const SetLampMode_lampModeSf10: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf10
 * @constant
 */
export
const lampModeSf10: number = SetLampMode_lampModeSf10; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf11
 * @constant
 */
export
const SetLampMode_lampModeSf11: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf11
 * @constant
 */
export
const lampModeSf11: number = SetLampMode_lampModeSf11; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf12
 * @constant
 */
export
const SetLampMode_lampModeSf12: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf12
 * @constant
 */
export
const lampModeSf12: number = SetLampMode_lampModeSf12; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf13
 * @constant
 */
export
const SetLampMode_lampModeSf13: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf13
 * @constant
 */
export
const lampModeSf13: number = SetLampMode_lampModeSf13; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf14
 * @constant
 */
export
const SetLampMode_lampModeSf14: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf14
 * @constant
 */
export
const lampModeSf14: number = SetLampMode_lampModeSf14; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf15
 * @constant
 */
export
const SetLampMode_lampModeSf15: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf15
 * @constant
 */
export
const lampModeSf15: number = SetLampMode_lampModeSf15; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf16
 * @constant
 */
export
const SetLampMode_lampModeSf16: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf16
 * @constant
 */
export
const lampModeSf16: number = SetLampMode_lampModeSf16; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf17
 * @constant
 */
export
const SetLampMode_lampModeSf17: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf17
 * @constant
 */
export
const lampModeSf17: number = SetLampMode_lampModeSf17; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf18
 * @constant
 */
export
const SetLampMode_lampModeSf18: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf18
 * @constant
 */
export
const lampModeSf18: number = SetLampMode_lampModeSf18; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf19
 * @constant
 */
export
const SetLampMode_lampModeSf19: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf19
 * @constant
 */
export
const lampModeSf19: number = SetLampMode_lampModeSf19; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf20
 * @constant
 */
export
const SetLampMode_lampModeSf20: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf20
 * @constant
 */
export
const lampModeSf20: number = SetLampMode_lampModeSf20; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf21
 * @constant
 */
export
const SetLampMode_lampModeSf21: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf21
 * @constant
 */
export
const lampModeSf21: number = SetLampMode_lampModeSf21; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf22
 * @constant
 */
export
const SetLampMode_lampModeSf22: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf22
 * @constant
 */
export
const lampModeSf22: number = SetLampMode_lampModeSf22; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf23
 * @constant
 */
export
const SetLampMode_lampModeSf23: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf23
 * @constant
 */
export
const lampModeSf23: number = SetLampMode_lampModeSf23; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf24
 * @constant
 */
export
const SetLampMode_lampModeSf24: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf24
 * @constant
 */
export
const lampModeSf24: number = SetLampMode_lampModeSf24; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf25
 * @constant
 */
export
const SetLampMode_lampModeSf25: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf25
 * @constant
 */
export
const lampModeSf25: number = SetLampMode_lampModeSf25; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf26
 * @constant
 */
export
const SetLampMode_lampModeSf26: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf26
 * @constant
 */
export
const lampModeSf26: number = SetLampMode_lampModeSf26; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf27
 * @constant
 */
export
const SetLampMode_lampModeSf27: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf27
 * @constant
 */
export
const lampModeSf27: number = SetLampMode_lampModeSf27; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf28
 * @constant
 */
export
const SetLampMode_lampModeSf28: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf28
 * @constant
 */
export
const lampModeSf28: number = SetLampMode_lampModeSf28; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf29
 * @constant
 */
export
const SetLampMode_lampModeSf29: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf29
 * @constant
 */
export
const lampModeSf29: number = SetLampMode_lampModeSf29; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf30
 * @constant
 */
export
const SetLampMode_lampModeSf30: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf30
 * @constant
 */
export
const lampModeSf30: number = SetLampMode_lampModeSf30; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf31
 * @constant
 */
export
const SetLampMode_lampModeSf31: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf31
 * @constant
 */
export
const lampModeSf31: number = SetLampMode_lampModeSf31; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf32
 * @constant
 */
export
const SetLampMode_lampModeSf32: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf32
 * @constant
 */
export
const lampModeSf32: number = SetLampMode_lampModeSf32; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf33
 * @constant
 */
export
const SetLampMode_lampModeSf33: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf33
 * @constant
 */
export
const lampModeSf33: number = SetLampMode_lampModeSf33; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf34
 * @constant
 */
export
const SetLampMode_lampModeSf34: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf34
 * @constant
 */
export
const lampModeSf34: number = SetLampMode_lampModeSf34; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf35
 * @constant
 */
export
const SetLampMode_lampModeSf35: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf35
 * @constant
 */
export
const lampModeSf35: number = SetLampMode_lampModeSf35; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf36
 * @constant
 */
export
const SetLampMode_lampModeSf36: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf36
 * @constant
 */
export
const lampModeSf36: number = SetLampMode_lampModeSf36; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf37
 * @constant
 */
export
const SetLampMode_lampModeSf37: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf37
 * @constant
 */
export
const lampModeSf37: number = SetLampMode_lampModeSf37; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf38
 * @constant
 */
export
const SetLampMode_lampModeSf38: number = 44; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf38
 * @constant
 */
export
const lampModeSf38: number = SetLampMode_lampModeSf38; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf39
 * @constant
 */
export
const SetLampMode_lampModeSf39: number = 45; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf39
 * @constant
 */
export
const lampModeSf39: number = SetLampMode_lampModeSf39; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf40
 * @constant
 */
export
const SetLampMode_lampModeSf40: number = 46; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf40
 * @constant
 */
export
const lampModeSf40: number = SetLampMode_lampModeSf40; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf41
 * @constant
 */
export
const SetLampMode_lampModeSf41: number = 47; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf41
 * @constant
 */
export
const lampModeSf41: number = SetLampMode_lampModeSf41; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf42
 * @constant
 */
export
const SetLampMode_lampModeSf42: number = 48; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf42
 * @constant
 */
export
const lampModeSf42: number = SetLampMode_lampModeSf42; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf43
 * @constant
 */
export
const SetLampMode_lampModeSf43: number = 49; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf43
 * @constant
 */
export
const lampModeSf43: number = SetLampMode_lampModeSf43; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf44
 * @constant
 */
export
const SetLampMode_lampModeSf44: number = 50; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf44
 * @constant
 */
export
const lampModeSf44: number = SetLampMode_lampModeSf44; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf45
 * @constant
 */
export
const SetLampMode_lampModeSf45: number = 51; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf45
 * @constant
 */
export
const lampModeSf45: number = SetLampMode_lampModeSf45; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf46
 * @constant
 */
export
const SetLampMode_lampModeSf46: number = 52; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf46
 * @constant
 */
export
const lampModeSf46: number = SetLampMode_lampModeSf46; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf47
 * @constant
 */
export
const SetLampMode_lampModeSf47: number = 53; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf47
 * @constant
 */
export
const lampModeSf47: number = SetLampMode_lampModeSf47; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf48
 * @constant
 */
export
const SetLampMode_lampModeSf48: number = 54; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf48
 * @constant
 */
export
const lampModeSf48: number = SetLampMode_lampModeSf48; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf49
 * @constant
 */
export
const SetLampMode_lampModeSf49: number = 55; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf49
 * @constant
 */
export
const lampModeSf49: number = SetLampMode_lampModeSf49; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf50
 * @constant
 */
export
const SetLampMode_lampModeSf50: number = 56; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf50
 * @constant
 */
export
const lampModeSf50: number = SetLampMode_lampModeSf50; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf51
 * @constant
 */
export
const SetLampMode_lampModeSf51: number = 57; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf51
 * @constant
 */
export
const lampModeSf51: number = SetLampMode_lampModeSf51; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf52
 * @constant
 */
export
const SetLampMode_lampModeSf52: number = 58; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf52
 * @constant
 */
export
const lampModeSf52: number = SetLampMode_lampModeSf52; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf53
 * @constant
 */
export
const SetLampMode_lampModeSf53: number = 59; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf53
 * @constant
 */
export
const lampModeSf53: number = SetLampMode_lampModeSf53; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf54
 * @constant
 */
export
const SetLampMode_lampModeSf54: number = 60; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf54
 * @constant
 */
export
const lampModeSf54: number = SetLampMode_lampModeSf54; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf55
 * @constant
 */
export
const SetLampMode_lampModeSf55: number = 61; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf55
 * @constant
 */
export
const lampModeSf55: number = SetLampMode_lampModeSf55; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf56
 * @constant
 */
export
const SetLampMode_lampModeSf56: number = 62; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf56
 * @constant
 */
export
const lampModeSf56: number = SetLampMode_lampModeSf56; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf57
 * @constant
 */
export
const SetLampMode_lampModeSf57: number = 63; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf57
 * @constant
 */
export
const lampModeSf57: number = SetLampMode_lampModeSf57; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf58
 * @constant
 */
export
const SetLampMode_lampModeSf58: number = 64; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf58
 * @constant
 */
export
const lampModeSf58: number = SetLampMode_lampModeSf58; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf59
 * @constant
 */
export
const SetLampMode_lampModeSf59: number = 65; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf59
 * @constant
 */
export
const lampModeSf59: number = SetLampMode_lampModeSf59; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf60
 * @constant
 */
export
const SetLampMode_lampModeSf60: number = 66; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf60
 * @constant
 */
export
const lampModeSf60: number = SetLampMode_lampModeSf60; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf61
 * @constant
 */
export
const SetLampMode_lampModeSf61: number = 67; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf61
 * @constant
 */
export
const lampModeSf61: number = SetLampMode_lampModeSf61; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf62
 * @constant
 */
export
const SetLampMode_lampModeSf62: number = 68; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf62
 * @constant
 */
export
const lampModeSf62: number = SetLampMode_lampModeSf62; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf63
 * @constant
 */
export
const SetLampMode_lampModeSf63: number = 69; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf63
 * @constant
 */
export
const lampModeSf63: number = SetLampMode_lampModeSf63; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf64
 * @constant
 */
export
const SetLampMode_lampModeSf64: number = 70; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf64
 * @constant
 */
export
const lampModeSf64: number = SetLampMode_lampModeSf64; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf65
 * @constant
 */
export
const SetLampMode_lampModeSf65: number = 71; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf65
 * @constant
 */
export
const lampModeSf65: number = SetLampMode_lampModeSf65; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf66
 * @constant
 */
export
const SetLampMode_lampModeSf66: number = 72; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf66
 * @constant
 */
export
const lampModeSf66: number = SetLampMode_lampModeSf66; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf67
 * @constant
 */
export
const SetLampMode_lampModeSf67: number = 73; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf67
 * @constant
 */
export
const lampModeSf67: number = SetLampMode_lampModeSf67; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf68
 * @constant
 */
export
const SetLampMode_lampModeSf68: number = 74; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf68
 * @constant
 */
export
const lampModeSf68: number = SetLampMode_lampModeSf68; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf69
 * @constant
 */
export
const SetLampMode_lampModeSf69: number = 75; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf69
 * @constant
 */
export
const lampModeSf69: number = SetLampMode_lampModeSf69; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf70
 * @constant
 */
export
const SetLampMode_lampModeSf70: number = 76; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf70
 * @constant
 */
export
const lampModeSf70: number = SetLampMode_lampModeSf70; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf71
 * @constant
 */
export
const SetLampMode_lampModeSf71: number = 77; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf71
 * @constant
 */
export
const lampModeSf71: number = SetLampMode_lampModeSf71; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf72
 * @constant
 */
export
const SetLampMode_lampModeSf72: number = 78; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf72
 * @constant
 */
export
const lampModeSf72: number = SetLampMode_lampModeSf72; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf73
 * @constant
 */
export
const SetLampMode_lampModeSf73: number = 79; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf73
 * @constant
 */
export
const lampModeSf73: number = SetLampMode_lampModeSf73; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf74
 * @constant
 */
export
const SetLampMode_lampModeSf74: number = 80; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf74
 * @constant
 */
export
const lampModeSf74: number = SetLampMode_lampModeSf74; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf75
 * @constant
 */
export
const SetLampMode_lampModeSf75: number = 81; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf75
 * @constant
 */
export
const lampModeSf75: number = SetLampMode_lampModeSf75; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf76
 * @constant
 */
export
const SetLampMode_lampModeSf76: number = 82; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf76
 * @constant
 */
export
const lampModeSf76: number = SetLampMode_lampModeSf76; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf77
 * @constant
 */
export
const SetLampMode_lampModeSf77: number = 83; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf77
 * @constant
 */
export
const lampModeSf77: number = SetLampMode_lampModeSf77; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf78
 * @constant
 */
export
const SetLampMode_lampModeSf78: number = 84; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf78
 * @constant
 */
export
const lampModeSf78: number = SetLampMode_lampModeSf78; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf79
 * @constant
 */
export
const SetLampMode_lampModeSf79: number = 85; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf79
 * @constant
 */
export
const lampModeSf79: number = SetLampMode_lampModeSf79; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf80
 * @constant
 */
export
const SetLampMode_lampModeSf80: number = 86; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf80
 * @constant
 */
export
const lampModeSf80: number = SetLampMode_lampModeSf80; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf81
 * @constant
 */
export
const SetLampMode_lampModeSf81: number = 87; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf81
 * @constant
 */
export
const lampModeSf81: number = SetLampMode_lampModeSf81; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf82
 * @constant
 */
export
const SetLampMode_lampModeSf82: number = 88; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf82
 * @constant
 */
export
const lampModeSf82: number = SetLampMode_lampModeSf82; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf83
 * @constant
 */
export
const SetLampMode_lampModeSf83: number = 89; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf83
 * @constant
 */
export
const lampModeSf83: number = SetLampMode_lampModeSf83; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf84
 * @constant
 */
export
const SetLampMode_lampModeSf84: number = 90; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf84
 * @constant
 */
export
const lampModeSf84: number = SetLampMode_lampModeSf84; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf85
 * @constant
 */
export
const SetLampMode_lampModeSf85: number = 91; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf85
 * @constant
 */
export
const lampModeSf85: number = SetLampMode_lampModeSf85; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf86
 * @constant
 */
export
const SetLampMode_lampModeSf86: number = 92; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf86
 * @constant
 */
export
const lampModeSf86: number = SetLampMode_lampModeSf86; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf87
 * @constant
 */
export
const SetLampMode_lampModeSf87: number = 93; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf87
 * @constant
 */
export
const lampModeSf87: number = SetLampMode_lampModeSf87; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf88
 * @constant
 */
export
const SetLampMode_lampModeSf88: number = 94; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf88
 * @constant
 */
export
const lampModeSf88: number = SetLampMode_lampModeSf88; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf89
 * @constant
 */
export
const SetLampMode_lampModeSf89: number = 95; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf89
 * @constant
 */
export
const lampModeSf89: number = SetLampMode_lampModeSf89; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf90
 * @constant
 */
export
const SetLampMode_lampModeSf90: number = 96; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf90
 * @constant
 */
export
const lampModeSf90: number = SetLampMode_lampModeSf90; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf91
 * @constant
 */
export
const SetLampMode_lampModeSf91: number = 97; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf91
 * @constant
 */
export
const lampModeSf91: number = SetLampMode_lampModeSf91; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf92
 * @constant
 */
export
const SetLampMode_lampModeSf92: number = 98; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf92
 * @constant
 */
export
const lampModeSf92: number = SetLampMode_lampModeSf92; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf93
 * @constant
 */
export
const SetLampMode_lampModeSf93: number = 99; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf93
 * @constant
 */
export
const lampModeSf93: number = SetLampMode_lampModeSf93; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampModeSf94
 * @constant
 */
export
const SetLampMode_lampModeSf94: number = 100; /* LONG_NAMED_BIT */

/**
 * @summary lampModeSf94
 * @constant
 */
export
const lampModeSf94: number = SetLampMode_lampModeSf94; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampBrightnessNormal
 * @constant
 */
export
const SetLampMode_lampBrightnessNormal: number = 101; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessNormal
 * @constant
 */
export
const lampBrightnessNormal: number = SetLampMode_lampBrightnessNormal; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampBrightnessDim
 * @constant
 */
export
const SetLampMode_lampBrightnessDim: number = 102; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessDim
 * @constant
 */
export
const lampBrightnessDim: number = SetLampMode_lampBrightnessDim; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampBrightnessBright
 * @constant
 */
export
const SetLampMode_lampBrightnessBright: number = 103; /* LONG_NAMED_BIT */

/**
 * @summary lampBrightnessBright
 * @constant
 */
export
const lampBrightnessBright: number = SetLampMode_lampBrightnessBright; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorNoColor
 * @constant
 */
export
const SetLampMode_lampColorNoColor: number = 104; /* LONG_NAMED_BIT */

/**
 * @summary lampColorNoColor
 * @constant
 */
export
const lampColorNoColor: number = SetLampMode_lampColorNoColor; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorRed
 * @constant
 */
export
const SetLampMode_lampColorRed: number = 105; /* LONG_NAMED_BIT */

/**
 * @summary lampColorRed
 * @constant
 */
export
const lampColorRed: number = SetLampMode_lampColorRed; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorYellow
 * @constant
 */
export
const SetLampMode_lampColorYellow: number = 106; /* LONG_NAMED_BIT */

/**
 * @summary lampColorYellow
 * @constant
 */
export
const lampColorYellow: number = SetLampMode_lampColorYellow; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorGreen
 * @constant
 */
export
const SetLampMode_lampColorGreen: number = 107; /* LONG_NAMED_BIT */

/**
 * @summary lampColorGreen
 * @constant
 */
export
const lampColorGreen: number = SetLampMode_lampColorGreen; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorBlue
 * @constant
 */
export
const SetLampMode_lampColorBlue: number = 108; /* LONG_NAMED_BIT */

/**
 * @summary lampColorBlue
 * @constant
 */
export
const lampColorBlue: number = SetLampMode_lampColorBlue; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorReserved
 * @constant
 */
export
const SetLampMode_lampColorReserved: number = 109; /* LONG_NAMED_BIT */

/**
 * @summary lampColorReserved
 * @constant
 */
export
const lampColorReserved: number = SetLampMode_lampColorReserved; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf0
 * @constant
 */
export
const SetLampMode_lampColorSf0: number = 110; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf0
 * @constant
 */
export
const lampColorSf0: number = SetLampMode_lampColorSf0; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf1
 * @constant
 */
export
const SetLampMode_lampColorSf1: number = 111; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf1
 * @constant
 */
export
const lampColorSf1: number = SetLampMode_lampColorSf1; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf2
 * @constant
 */
export
const SetLampMode_lampColorSf2: number = 112; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf2
 * @constant
 */
export
const lampColorSf2: number = SetLampMode_lampColorSf2; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf3
 * @constant
 */
export
const SetLampMode_lampColorSf3: number = 113; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf3
 * @constant
 */
export
const lampColorSf3: number = SetLampMode_lampColorSf3; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf4
 * @constant
 */
export
const SetLampMode_lampColorSf4: number = 114; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf4
 * @constant
 */
export
const lampColorSf4: number = SetLampMode_lampColorSf4; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf5
 * @constant
 */
export
const SetLampMode_lampColorSf5: number = 115; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf5
 * @constant
 */
export
const lampColorSf5: number = SetLampMode_lampColorSf5; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf6
 * @constant
 */
export
const SetLampMode_lampColorSf6: number = 116; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf6
 * @constant
 */
export
const lampColorSf6: number = SetLampMode_lampColorSf6; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf7
 * @constant
 */
export
const SetLampMode_lampColorSf7: number = 117; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf7
 * @constant
 */
export
const lampColorSf7: number = SetLampMode_lampColorSf7; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf8
 * @constant
 */
export
const SetLampMode_lampColorSf8: number = 118; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf8
 * @constant
 */
export
const lampColorSf8: number = SetLampMode_lampColorSf8; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf9
 * @constant
 */
export
const SetLampMode_lampColorSf9: number = 119; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf9
 * @constant
 */
export
const lampColorSf9: number = SetLampMode_lampColorSf9; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf10
 * @constant
 */
export
const SetLampMode_lampColorSf10: number = 120; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf10
 * @constant
 */
export
const lampColorSf10: number = SetLampMode_lampColorSf10; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf11
 * @constant
 */
export
const SetLampMode_lampColorSf11: number = 121; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf11
 * @constant
 */
export
const lampColorSf11: number = SetLampMode_lampColorSf11; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf12
 * @constant
 */
export
const SetLampMode_lampColorSf12: number = 122; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf12
 * @constant
 */
export
const lampColorSf12: number = SetLampMode_lampColorSf12; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf13
 * @constant
 */
export
const SetLampMode_lampColorSf13: number = 123; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf13
 * @constant
 */
export
const lampColorSf13: number = SetLampMode_lampColorSf13; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf14
 * @constant
 */
export
const SetLampMode_lampColorSf14: number = 124; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf14
 * @constant
 */
export
const lampColorSf14: number = SetLampMode_lampColorSf14; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf15
 * @constant
 */
export
const SetLampMode_lampColorSf15: number = 125; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf15
 * @constant
 */
export
const lampColorSf15: number = SetLampMode_lampColorSf15; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf16
 * @constant
 */
export
const SetLampMode_lampColorSf16: number = 126; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf16
 * @constant
 */
export
const lampColorSf16: number = SetLampMode_lampColorSf16; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf17
 * @constant
 */
export
const SetLampMode_lampColorSf17: number = 127; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf17
 * @constant
 */
export
const lampColorSf17: number = SetLampMode_lampColorSf17; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf18
 * @constant
 */
export
const SetLampMode_lampColorSf18: number = 128; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf18
 * @constant
 */
export
const lampColorSf18: number = SetLampMode_lampColorSf18; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf19
 * @constant
 */
export
const SetLampMode_lampColorSf19: number = 129; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf19
 * @constant
 */
export
const lampColorSf19: number = SetLampMode_lampColorSf19; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf20
 * @constant
 */
export
const SetLampMode_lampColorSf20: number = 130; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf20
 * @constant
 */
export
const lampColorSf20: number = SetLampMode_lampColorSf20; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf21
 * @constant
 */
export
const SetLampMode_lampColorSf21: number = 131; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf21
 * @constant
 */
export
const lampColorSf21: number = SetLampMode_lampColorSf21; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf22
 * @constant
 */
export
const SetLampMode_lampColorSf22: number = 132; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf22
 * @constant
 */
export
const lampColorSf22: number = SetLampMode_lampColorSf22; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf23
 * @constant
 */
export
const SetLampMode_lampColorSf23: number = 133; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf23
 * @constant
 */
export
const lampColorSf23: number = SetLampMode_lampColorSf23; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf24
 * @constant
 */
export
const SetLampMode_lampColorSf24: number = 134; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf24
 * @constant
 */
export
const lampColorSf24: number = SetLampMode_lampColorSf24; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf25
 * @constant
 */
export
const SetLampMode_lampColorSf25: number = 135; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf25
 * @constant
 */
export
const lampColorSf25: number = SetLampMode_lampColorSf25; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf26
 * @constant
 */
export
const SetLampMode_lampColorSf26: number = 136; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf26
 * @constant
 */
export
const lampColorSf26: number = SetLampMode_lampColorSf26; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf27
 * @constant
 */
export
const SetLampMode_lampColorSf27: number = 137; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf27
 * @constant
 */
export
const lampColorSf27: number = SetLampMode_lampColorSf27; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf28
 * @constant
 */
export
const SetLampMode_lampColorSf28: number = 138; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf28
 * @constant
 */
export
const lampColorSf28: number = SetLampMode_lampColorSf28; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf29
 * @constant
 */
export
const SetLampMode_lampColorSf29: number = 139; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf29
 * @constant
 */
export
const lampColorSf29: number = SetLampMode_lampColorSf29; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf30
 * @constant
 */
export
const SetLampMode_lampColorSf30: number = 140; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf30
 * @constant
 */
export
const lampColorSf30: number = SetLampMode_lampColorSf30; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf31
 * @constant
 */
export
const SetLampMode_lampColorSf31: number = 141; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf31
 * @constant
 */
export
const lampColorSf31: number = SetLampMode_lampColorSf31; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf32
 * @constant
 */
export
const SetLampMode_lampColorSf32: number = 142; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf32
 * @constant
 */
export
const lampColorSf32: number = SetLampMode_lampColorSf32; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf33
 * @constant
 */
export
const SetLampMode_lampColorSf33: number = 143; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf33
 * @constant
 */
export
const lampColorSf33: number = SetLampMode_lampColorSf33; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf34
 * @constant
 */
export
const SetLampMode_lampColorSf34: number = 144; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf34
 * @constant
 */
export
const lampColorSf34: number = SetLampMode_lampColorSf34; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf35
 * @constant
 */
export
const SetLampMode_lampColorSf35: number = 145; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf35
 * @constant
 */
export
const lampColorSf35: number = SetLampMode_lampColorSf35; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf36
 * @constant
 */
export
const SetLampMode_lampColorSf36: number = 146; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf36
 * @constant
 */
export
const lampColorSf36: number = SetLampMode_lampColorSf36; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf37
 * @constant
 */
export
const SetLampMode_lampColorSf37: number = 147; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf37
 * @constant
 */
export
const lampColorSf37: number = SetLampMode_lampColorSf37; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf38
 * @constant
 */
export
const SetLampMode_lampColorSf38: number = 148; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf38
 * @constant
 */
export
const lampColorSf38: number = SetLampMode_lampColorSf38; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf39
 * @constant
 */
export
const SetLampMode_lampColorSf39: number = 149; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf39
 * @constant
 */
export
const lampColorSf39: number = SetLampMode_lampColorSf39; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf40
 * @constant
 */
export
const SetLampMode_lampColorSf40: number = 150; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf40
 * @constant
 */
export
const lampColorSf40: number = SetLampMode_lampColorSf40; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf41
 * @constant
 */
export
const SetLampMode_lampColorSf41: number = 151; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf41
 * @constant
 */
export
const lampColorSf41: number = SetLampMode_lampColorSf41; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf42
 * @constant
 */
export
const SetLampMode_lampColorSf42: number = 152; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf42
 * @constant
 */
export
const lampColorSf42: number = SetLampMode_lampColorSf42; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf43
 * @constant
 */
export
const SetLampMode_lampColorSf43: number = 153; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf43
 * @constant
 */
export
const lampColorSf43: number = SetLampMode_lampColorSf43; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf44
 * @constant
 */
export
const SetLampMode_lampColorSf44: number = 154; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf44
 * @constant
 */
export
const lampColorSf44: number = SetLampMode_lampColorSf44; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf45
 * @constant
 */
export
const SetLampMode_lampColorSf45: number = 155; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf45
 * @constant
 */
export
const lampColorSf45: number = SetLampMode_lampColorSf45; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf46
 * @constant
 */
export
const SetLampMode_lampColorSf46: number = 156; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf46
 * @constant
 */
export
const lampColorSf46: number = SetLampMode_lampColorSf46; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf47
 * @constant
 */
export
const SetLampMode_lampColorSf47: number = 157; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf47
 * @constant
 */
export
const lampColorSf47: number = SetLampMode_lampColorSf47; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf48
 * @constant
 */
export
const SetLampMode_lampColorSf48: number = 158; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf48
 * @constant
 */
export
const lampColorSf48: number = SetLampMode_lampColorSf48; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf49
 * @constant
 */
export
const SetLampMode_lampColorSf49: number = 159; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf49
 * @constant
 */
export
const lampColorSf49: number = SetLampMode_lampColorSf49; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf50
 * @constant
 */
export
const SetLampMode_lampColorSf50: number = 160; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf50
 * @constant
 */
export
const lampColorSf50: number = SetLampMode_lampColorSf50; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf51
 * @constant
 */
export
const SetLampMode_lampColorSf51: number = 161; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf51
 * @constant
 */
export
const lampColorSf51: number = SetLampMode_lampColorSf51; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf52
 * @constant
 */
export
const SetLampMode_lampColorSf52: number = 162; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf52
 * @constant
 */
export
const lampColorSf52: number = SetLampMode_lampColorSf52; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf53
 * @constant
 */
export
const SetLampMode_lampColorSf53: number = 163; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf53
 * @constant
 */
export
const lampColorSf53: number = SetLampMode_lampColorSf53; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf54
 * @constant
 */
export
const SetLampMode_lampColorSf54: number = 164; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf54
 * @constant
 */
export
const lampColorSf54: number = SetLampMode_lampColorSf54; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf55
 * @constant
 */
export
const SetLampMode_lampColorSf55: number = 165; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf55
 * @constant
 */
export
const lampColorSf55: number = SetLampMode_lampColorSf55; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf56
 * @constant
 */
export
const SetLampMode_lampColorSf56: number = 166; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf56
 * @constant
 */
export
const lampColorSf56: number = SetLampMode_lampColorSf56; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf57
 * @constant
 */
export
const SetLampMode_lampColorSf57: number = 167; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf57
 * @constant
 */
export
const lampColorSf57: number = SetLampMode_lampColorSf57; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf58
 * @constant
 */
export
const SetLampMode_lampColorSf58: number = 168; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf58
 * @constant
 */
export
const lampColorSf58: number = SetLampMode_lampColorSf58; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf59
 * @constant
 */
export
const SetLampMode_lampColorSf59: number = 169; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf59
 * @constant
 */
export
const lampColorSf59: number = SetLampMode_lampColorSf59; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf60
 * @constant
 */
export
const SetLampMode_lampColorSf60: number = 170; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf60
 * @constant
 */
export
const lampColorSf60: number = SetLampMode_lampColorSf60; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf61
 * @constant
 */
export
const SetLampMode_lampColorSf61: number = 171; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf61
 * @constant
 */
export
const lampColorSf61: number = SetLampMode_lampColorSf61; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf62
 * @constant
 */
export
const SetLampMode_lampColorSf62: number = 172; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf62
 * @constant
 */
export
const lampColorSf62: number = SetLampMode_lampColorSf62; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf63
 * @constant
 */
export
const SetLampMode_lampColorSf63: number = 173; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf63
 * @constant
 */
export
const lampColorSf63: number = SetLampMode_lampColorSf63; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf64
 * @constant
 */
export
const SetLampMode_lampColorSf64: number = 174; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf64
 * @constant
 */
export
const lampColorSf64: number = SetLampMode_lampColorSf64; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf65
 * @constant
 */
export
const SetLampMode_lampColorSf65: number = 175; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf65
 * @constant
 */
export
const lampColorSf65: number = SetLampMode_lampColorSf65; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf66
 * @constant
 */
export
const SetLampMode_lampColorSf66: number = 176; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf66
 * @constant
 */
export
const lampColorSf66: number = SetLampMode_lampColorSf66; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf67
 * @constant
 */
export
const SetLampMode_lampColorSf67: number = 177; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf67
 * @constant
 */
export
const lampColorSf67: number = SetLampMode_lampColorSf67; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf68
 * @constant
 */
export
const SetLampMode_lampColorSf68: number = 178; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf68
 * @constant
 */
export
const lampColorSf68: number = SetLampMode_lampColorSf68; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf69
 * @constant
 */
export
const SetLampMode_lampColorSf69: number = 179; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf69
 * @constant
 */
export
const lampColorSf69: number = SetLampMode_lampColorSf69; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf70
 * @constant
 */
export
const SetLampMode_lampColorSf70: number = 180; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf70
 * @constant
 */
export
const lampColorSf70: number = SetLampMode_lampColorSf70; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf71
 * @constant
 */
export
const SetLampMode_lampColorSf71: number = 181; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf71
 * @constant
 */
export
const lampColorSf71: number = SetLampMode_lampColorSf71; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf72
 * @constant
 */
export
const SetLampMode_lampColorSf72: number = 182; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf72
 * @constant
 */
export
const lampColorSf72: number = SetLampMode_lampColorSf72; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf73
 * @constant
 */
export
const SetLampMode_lampColorSf73: number = 183; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf73
 * @constant
 */
export
const lampColorSf73: number = SetLampMode_lampColorSf73; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf74
 * @constant
 */
export
const SetLampMode_lampColorSf74: number = 184; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf74
 * @constant
 */
export
const lampColorSf74: number = SetLampMode_lampColorSf74; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf75
 * @constant
 */
export
const SetLampMode_lampColorSf75: number = 185; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf75
 * @constant
 */
export
const lampColorSf75: number = SetLampMode_lampColorSf75; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf76
 * @constant
 */
export
const SetLampMode_lampColorSf76: number = 186; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf76
 * @constant
 */
export
const lampColorSf76: number = SetLampMode_lampColorSf76; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf77
 * @constant
 */
export
const SetLampMode_lampColorSf77: number = 187; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf77
 * @constant
 */
export
const lampColorSf77: number = SetLampMode_lampColorSf77; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf78
 * @constant
 */
export
const SetLampMode_lampColorSf78: number = 188; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf78
 * @constant
 */
export
const lampColorSf78: number = SetLampMode_lampColorSf78; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf79
 * @constant
 */
export
const SetLampMode_lampColorSf79: number = 189; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf79
 * @constant
 */
export
const lampColorSf79: number = SetLampMode_lampColorSf79; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf80
 * @constant
 */
export
const SetLampMode_lampColorSf80: number = 190; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf80
 * @constant
 */
export
const lampColorSf80: number = SetLampMode_lampColorSf80; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf81
 * @constant
 */
export
const SetLampMode_lampColorSf81: number = 191; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf81
 * @constant
 */
export
const lampColorSf81: number = SetLampMode_lampColorSf81; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf82
 * @constant
 */
export
const SetLampMode_lampColorSf82: number = 192; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf82
 * @constant
 */
export
const lampColorSf82: number = SetLampMode_lampColorSf82; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf83
 * @constant
 */
export
const SetLampMode_lampColorSf83: number = 193; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf83
 * @constant
 */
export
const lampColorSf83: number = SetLampMode_lampColorSf83; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf84
 * @constant
 */
export
const SetLampMode_lampColorSf84: number = 194; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf84
 * @constant
 */
export
const lampColorSf84: number = SetLampMode_lampColorSf84; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf85
 * @constant
 */
export
const SetLampMode_lampColorSf85: number = 195; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf85
 * @constant
 */
export
const lampColorSf85: number = SetLampMode_lampColorSf85; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf86
 * @constant
 */
export
const SetLampMode_lampColorSf86: number = 196; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf86
 * @constant
 */
export
const lampColorSf86: number = SetLampMode_lampColorSf86; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf87
 * @constant
 */
export
const SetLampMode_lampColorSf87: number = 197; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf87
 * @constant
 */
export
const lampColorSf87: number = SetLampMode_lampColorSf87; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf88
 * @constant
 */
export
const SetLampMode_lampColorSf88: number = 198; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf88
 * @constant
 */
export
const lampColorSf88: number = SetLampMode_lampColorSf88; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf89
 * @constant
 */
export
const SetLampMode_lampColorSf89: number = 199; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf89
 * @constant
 */
export
const lampColorSf89: number = SetLampMode_lampColorSf89; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf90
 * @constant
 */
export
const SetLampMode_lampColorSf90: number = 200; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf90
 * @constant
 */
export
const lampColorSf90: number = SetLampMode_lampColorSf90; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf91
 * @constant
 */
export
const SetLampMode_lampColorSf91: number = 201; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf91
 * @constant
 */
export
const lampColorSf91: number = SetLampMode_lampColorSf91; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf92
 * @constant
 */
export
const SetLampMode_lampColorSf92: number = 202; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf92
 * @constant
 */
export
const lampColorSf92: number = SetLampMode_lampColorSf92; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf93
 * @constant
 */
export
const SetLampMode_lampColorSf93: number = 203; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf93
 * @constant
 */
export
const lampColorSf93: number = SetLampMode_lampColorSf93; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_lampColorSf94
 * @constant
 */
export
const SetLampMode_lampColorSf94: number = 204; /* LONG_NAMED_BIT */

/**
 * @summary lampColorSf94
 * @constant
 */
export
const lampColorSf94: number = SetLampMode_lampColorSf94; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_privateData
 * @constant
 */
export
const SetLampMode_privateData: number = 205; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetLampMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_privateDataInAck
 * @constant
 */
export
const SetLampMode_privateDataInAck: number = 206; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetLampMode_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetLampMode_ackModelMultiStep
 * @constant
 */
export
const SetLampMode_ackModelMultiStep: number = 207; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetLampMode_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetLampMode: $.ASN1Decoder<SetLampMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetLampMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetLampMode (el: _Element): SetLampMode {
    if (!_cached_decoder_for_SetLampMode) { _cached_decoder_for_SetLampMode = $._decodeBitString; }
    return _cached_decoder_for_SetLampMode(el);
}

let _cached_encoder_for_SetLampMode: $.ASN1Encoder<SetLampMode> | null = null;

/**
 * @summary Encodes a(n) SetLampMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetLampMode, encoded as an ASN.1 Element.
 */
export
function _encode_SetLampMode (value: SetLampMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetLampMode) { _cached_encoder_for_SetLampMode = $._encodeBitString; }
    return _cached_encoder_for_SetLampMode(value, elGetter);
}


/* eslint-enable */
