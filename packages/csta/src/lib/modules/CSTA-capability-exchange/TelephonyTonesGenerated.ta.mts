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
 * @summary TelephonyTonesGenerated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephonyTonesGenerated  ::=  BIT STRING
 * {     toneToSendBeep                 (  0),     -- optional parameters
 *     toneToSendBilling             (  1),     -- optional parameters
 *     toneToSendBusy                 (  2),     -- optional parameters
 *     toneToSendCarrier             (  3),     -- optional parameters
 *     toneToSendConfirmation             (  4),     -- optional parameters
 *     toneToSendDial                 (  5),     -- optional parameters
 *     toneToSendFaxCNG             (  6),     -- optional parameters
 *     toneToSendHold                 (  7),     -- optional parameters
 *     toneToSendHowler             (  8),     -- optional parameters
 *     toneToSendIntrusion             (  9),     -- optional parameters
 *     toneToSendModemCNG             ( 10),     -- optional parameters
 *     toneToSendPark                 ( 11),     -- optional parameters
 *     toneToSendRecordWarning         ( 12),     -- optional parameters
 *     toneToSendReorder             ( 13),     -- optional parameters
 *     toneToSendRingback             ( 14),     -- optional parameters
 *     toneToSendSilence             ( 15),     -- optional parameters
 *     toneToSendSitVC             ( 16),     -- optional parameters
 *     toneToSendSitIC             ( 17),     -- optional parameters
 *     toneToSendSitRO             ( 18),     -- optional parameters
 *     toneToSendSitNC             ( 19),     -- optional parameters
 *     toneToSendSf0                 ( 20),     -- optional parameters
 *     toneToSendSf1                 ( 21),     -- optional parameters
 *     toneToSendSf2                 ( 22),     -- optional parameters
 *     toneToSendSf3                 ( 23),     -- optional parameters
 *     toneToSendSf4                 ( 24),     -- optional parameters
 *     toneToSendSf5                 ( 25),     -- optional parameters
 *     toneToSendSf6                 ( 26),     -- optional parameters
 *     toneToSendSf7                 ( 27),     -- optional parameters
 *     toneToSendSf8                 ( 28),     -- optional parameters
 *     toneToSendSf9                 ( 29),     -- optional parameters
 *     toneToSendSf10                 ( 30),  -- optional parameters
 *     toneToSendSf11                 ( 31),     -- optional parameters
 *     toneToSendSf12                 ( 32),     -- optional parameters
 *     toneToSendSf13                 ( 33),     -- optional parameters
 *     toneToSendSf14                 ( 34),     -- optional parameters
 *     toneToSendSf15                 ( 35),     -- optional parameters
 *     toneToSendSf16                 ( 36),     -- optional parameters
 *     toneToSendSf17                 ( 37),     -- optional parameters
 *     toneToSendSf18                 ( 38),     -- optional parameters
 *     toneToSendSf19                 ( 39),     -- optional parameters
 *     toneToSendSf20                 ( 40),     -- optional parameters
 *     toneToSendSf21                 ( 41),     -- optional parameters
 *     toneToSendSf22                 ( 42),     -- optional parameters
 *     toneToSendSf23                 ( 43),     -- optional parameters
 *     toneToSendSf24                 ( 44),     -- optional parameters
 *     toneToSendSf25                 ( 45),     -- optional parameters
 *     toneToSendSf26                 ( 46),     -- optional parameters
 *     toneToSendSf27                 ( 47),     -- optional parameters
 *     toneToSendSf28                 ( 48),     -- optional parameters
 *     toneToSendSf29                 ( 49),     -- optional parameters
 *     toneToSendSf30                 ( 50),     -- optional parameters
 *     toneToSendSf31                 ( 51),     -- optional parameters
 *     toneToSendSf32                 ( 52),     -- optional parameters
 *     toneToSendSf33                 ( 53),     -- optional parameters
 *     toneToSendSf34                 ( 54),     -- optional parameters
 *     toneToSendSf35                 ( 55),     -- optional parameters
 *     toneToSendSf36                 ( 56),     -- optional parameters
 *     toneToSendSf37                 ( 57),     -- optional parameters
 *     toneToSendSf38                 ( 58),     -- optional parameters
 *     toneToSendSf39                 ( 59),     -- optional parameters
 *     toneToSendSf40                 ( 60),     -- optional parameters
 *     toneToSendSf41                 ( 61),     -- optional parameters
 *     toneToSendSf42                 ( 62),     -- optional parameters
 *     toneToSendSf43                 ( 63),     -- optional parameters
 *     toneToSendSf44                 ( 64),     -- optional parameters
 *     toneToSendSf45                 ( 65),     -- optional parameters
 *     toneToSendSf46                 ( 66),     -- optional parameters
 *     toneToSendSf47                 ( 67),     -- optional parameters
 *     toneToSendSf48                 ( 68),     -- optional parameters
 *     toneToSendSf49                 ( 69),     -- optional parameters
 *     toneToSendSf50                 ( 70),     -- optional parameters
 *     toneToSendSf51                 ( 71),     -- optional parameters
 *     toneToSendSf52                 ( 72),     -- optional parameters
 *     toneToSendSf53                 ( 73),     -- optional parameters
 *     toneToSendSf54                 ( 74),     -- optional parameters
 *     toneToSendSf55                 ( 75),     -- optional parameters
 *     toneToSendSf56                 ( 76),     -- optional parameters
 *     toneToSendSf57                 ( 77),     -- optional parameters
 *     toneToSendSf58                 ( 78),     -- optional parameters
 *     toneToSendSf59                 ( 79),     -- optional parameters
 *     toneToSendSf60                 ( 80),     -- optional parameters
 *     toneToSendSf61                 ( 81),     -- optional parameters
 *     toneToSendSf62                 ( 82),     -- optional parameters
 *     toneToSendSf63                 ( 83),     -- optional parameters
 *     toneToSendSf64                 ( 84),     -- optional parameters
 *     toneToSendSf65                 ( 85),     -- optional parameters
 *     toneToSendSf66                 ( 86),     -- optional parameters
 *     toneToSendSf67                 ( 87),     -- optional parameters
 *     toneToSendSf68                 ( 88),     -- optional parameters
 *     toneToSendSf69                 ( 89),     -- optional parameters
 *     toneToSendSf70                 ( 90),     -- optional parameters
 *     toneToSendSf71                 ( 91),     -- optional parameters
 *     toneToSendSf72                 ( 92),     -- optional parameters
 *     toneToSendSf73                 ( 93),     -- optional parameters
 *     toneToSendSf74                 ( 94),     -- optional parameters
 *     toneToSendSf75                 ( 95),     -- optional parameters
 *     toneToSendSf76                 ( 96),     -- optional parameters
 *     toneToSendSf77                 ( 97),     -- optional parameters
 *     toneToSendSf78                 ( 98),     -- optional parameters
 *     toneToSendSf79                 ( 99),     -- optional parameters
 *     toneToSendSf80                 (100),     -- optional parameters
 *     toneToSendSf81                 (101),     -- optional parameters
 *     toneToSendSf82                 (102),     -- optional parameters
 *     toneToSendSf83                 (103),     -- optional parameters
 *     toneToSendSf84                 (104),     -- optional parameters
 *     toneToSendSf85                 (105),     -- optional parameters
 *     toneToSendSf86                 (106),     -- optional parameters
 *     toneToSendSf87                 (107),     -- optional parameters
 *     toneToSendSf88                 (108),     -- optional parameters
 *     toneToSendSf89                 (109),     -- optional parameters
 *     toneToSendSf90                 (110),     -- optional parameters
 *     toneToSendSf91                 (111),     -- optional parameters
 *     toneToSendSf92                 (112),     -- optional parameters
 *     toneToSendSf93                 (113),     -- optional parameters
 *     toneToSendSf94                 (114),     -- optional parameters
 *     toneToSendSf95                 (115),     -- optional parameters
 *     toneToSendSf96                 (116),     -- optional parameters
 *     toneToSendSf97                 (117),     -- optional parameters
 *     toneToSendSf98                 (118),     -- optional parameters
 *     toneToSendSf99                 (119),     -- optional parameters
 *     toneToSendSf100             (120),     -- optional parameters
 *     toneFrequency                 (121),     -- optional parameters
 *     toneDuration                 (122),     -- optional parameters
 *     pauseDurationList             (123),     -- optional parameters
 *     connectionInfo                 (124),     -- optional parameters
 *     privateData                 (125) }
 * ```
 */
export
type TelephonyTonesGenerated = BIT_STRING;

/**
 * @summary TelephonyTonesGenerated_toneToSendBeep
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendBeep: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendBeep
 * @constant
 */
export
const toneToSendBeep: number = TelephonyTonesGenerated_toneToSendBeep; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendBilling
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendBilling: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendBilling
 * @constant
 */
export
const toneToSendBilling: number = TelephonyTonesGenerated_toneToSendBilling; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendBusy
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendBusy: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendBusy
 * @constant
 */
export
const toneToSendBusy: number = TelephonyTonesGenerated_toneToSendBusy; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendCarrier
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendCarrier: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendCarrier
 * @constant
 */
export
const toneToSendCarrier: number = TelephonyTonesGenerated_toneToSendCarrier; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendConfirmation
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendConfirmation: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendConfirmation
 * @constant
 */
export
const toneToSendConfirmation: number = TelephonyTonesGenerated_toneToSendConfirmation; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendDial
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendDial: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendDial
 * @constant
 */
export
const toneToSendDial: number = TelephonyTonesGenerated_toneToSendDial; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendFaxCNG
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendFaxCNG: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendFaxCNG
 * @constant
 */
export
const toneToSendFaxCNG: number = TelephonyTonesGenerated_toneToSendFaxCNG; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendHold
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendHold: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendHold
 * @constant
 */
export
const toneToSendHold: number = TelephonyTonesGenerated_toneToSendHold; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendHowler
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendHowler: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendHowler
 * @constant
 */
export
const toneToSendHowler: number = TelephonyTonesGenerated_toneToSendHowler; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendIntrusion
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendIntrusion: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendIntrusion
 * @constant
 */
export
const toneToSendIntrusion: number = TelephonyTonesGenerated_toneToSendIntrusion; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendModemCNG
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendModemCNG: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendModemCNG
 * @constant
 */
export
const toneToSendModemCNG: number = TelephonyTonesGenerated_toneToSendModemCNG; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendPark
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendPark: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendPark
 * @constant
 */
export
const toneToSendPark: number = TelephonyTonesGenerated_toneToSendPark; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendRecordWarning
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendRecordWarning: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendRecordWarning
 * @constant
 */
export
const toneToSendRecordWarning: number = TelephonyTonesGenerated_toneToSendRecordWarning; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendReorder
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendReorder: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendReorder
 * @constant
 */
export
const toneToSendReorder: number = TelephonyTonesGenerated_toneToSendReorder; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendRingback
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendRingback: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendRingback
 * @constant
 */
export
const toneToSendRingback: number = TelephonyTonesGenerated_toneToSendRingback; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSilence
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSilence: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSilence
 * @constant
 */
export
const toneToSendSilence: number = TelephonyTonesGenerated_toneToSendSilence; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSitVC
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSitVC: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSitVC
 * @constant
 */
export
const toneToSendSitVC: number = TelephonyTonesGenerated_toneToSendSitVC; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSitIC
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSitIC: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSitIC
 * @constant
 */
export
const toneToSendSitIC: number = TelephonyTonesGenerated_toneToSendSitIC; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSitRO
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSitRO: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSitRO
 * @constant
 */
export
const toneToSendSitRO: number = TelephonyTonesGenerated_toneToSendSitRO; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSitNC
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSitNC: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSitNC
 * @constant
 */
export
const toneToSendSitNC: number = TelephonyTonesGenerated_toneToSendSitNC; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf0
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf0: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf0
 * @constant
 */
export
const toneToSendSf0: number = TelephonyTonesGenerated_toneToSendSf0; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf1
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf1: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf1
 * @constant
 */
export
const toneToSendSf1: number = TelephonyTonesGenerated_toneToSendSf1; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf2
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf2: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf2
 * @constant
 */
export
const toneToSendSf2: number = TelephonyTonesGenerated_toneToSendSf2; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf3
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf3: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf3
 * @constant
 */
export
const toneToSendSf3: number = TelephonyTonesGenerated_toneToSendSf3; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf4
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf4: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf4
 * @constant
 */
export
const toneToSendSf4: number = TelephonyTonesGenerated_toneToSendSf4; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf5
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf5: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf5
 * @constant
 */
export
const toneToSendSf5: number = TelephonyTonesGenerated_toneToSendSf5; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf6
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf6: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf6
 * @constant
 */
export
const toneToSendSf6: number = TelephonyTonesGenerated_toneToSendSf6; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf7
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf7: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf7
 * @constant
 */
export
const toneToSendSf7: number = TelephonyTonesGenerated_toneToSendSf7; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf8
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf8: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf8
 * @constant
 */
export
const toneToSendSf8: number = TelephonyTonesGenerated_toneToSendSf8; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf9
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf9: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf9
 * @constant
 */
export
const toneToSendSf9: number = TelephonyTonesGenerated_toneToSendSf9; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf10
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf10: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf10
 * @constant
 */
export
const toneToSendSf10: number = TelephonyTonesGenerated_toneToSendSf10; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf11
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf11: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf11
 * @constant
 */
export
const toneToSendSf11: number = TelephonyTonesGenerated_toneToSendSf11; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf12
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf12: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf12
 * @constant
 */
export
const toneToSendSf12: number = TelephonyTonesGenerated_toneToSendSf12; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf13
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf13: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf13
 * @constant
 */
export
const toneToSendSf13: number = TelephonyTonesGenerated_toneToSendSf13; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf14
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf14: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf14
 * @constant
 */
export
const toneToSendSf14: number = TelephonyTonesGenerated_toneToSendSf14; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf15
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf15: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf15
 * @constant
 */
export
const toneToSendSf15: number = TelephonyTonesGenerated_toneToSendSf15; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf16
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf16: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf16
 * @constant
 */
export
const toneToSendSf16: number = TelephonyTonesGenerated_toneToSendSf16; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf17
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf17: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf17
 * @constant
 */
export
const toneToSendSf17: number = TelephonyTonesGenerated_toneToSendSf17; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf18
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf18: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf18
 * @constant
 */
export
const toneToSendSf18: number = TelephonyTonesGenerated_toneToSendSf18; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf19
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf19: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf19
 * @constant
 */
export
const toneToSendSf19: number = TelephonyTonesGenerated_toneToSendSf19; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf20
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf20: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf20
 * @constant
 */
export
const toneToSendSf20: number = TelephonyTonesGenerated_toneToSendSf20; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf21
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf21: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf21
 * @constant
 */
export
const toneToSendSf21: number = TelephonyTonesGenerated_toneToSendSf21; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf22
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf22: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf22
 * @constant
 */
export
const toneToSendSf22: number = TelephonyTonesGenerated_toneToSendSf22; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf23
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf23: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf23
 * @constant
 */
export
const toneToSendSf23: number = TelephonyTonesGenerated_toneToSendSf23; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf24
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf24: number = 44; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf24
 * @constant
 */
export
const toneToSendSf24: number = TelephonyTonesGenerated_toneToSendSf24; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf25
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf25: number = 45; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf25
 * @constant
 */
export
const toneToSendSf25: number = TelephonyTonesGenerated_toneToSendSf25; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf26
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf26: number = 46; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf26
 * @constant
 */
export
const toneToSendSf26: number = TelephonyTonesGenerated_toneToSendSf26; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf27
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf27: number = 47; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf27
 * @constant
 */
export
const toneToSendSf27: number = TelephonyTonesGenerated_toneToSendSf27; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf28
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf28: number = 48; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf28
 * @constant
 */
export
const toneToSendSf28: number = TelephonyTonesGenerated_toneToSendSf28; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf29
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf29: number = 49; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf29
 * @constant
 */
export
const toneToSendSf29: number = TelephonyTonesGenerated_toneToSendSf29; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf30
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf30: number = 50; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf30
 * @constant
 */
export
const toneToSendSf30: number = TelephonyTonesGenerated_toneToSendSf30; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf31
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf31: number = 51; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf31
 * @constant
 */
export
const toneToSendSf31: number = TelephonyTonesGenerated_toneToSendSf31; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf32
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf32: number = 52; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf32
 * @constant
 */
export
const toneToSendSf32: number = TelephonyTonesGenerated_toneToSendSf32; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf33
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf33: number = 53; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf33
 * @constant
 */
export
const toneToSendSf33: number = TelephonyTonesGenerated_toneToSendSf33; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf34
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf34: number = 54; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf34
 * @constant
 */
export
const toneToSendSf34: number = TelephonyTonesGenerated_toneToSendSf34; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf35
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf35: number = 55; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf35
 * @constant
 */
export
const toneToSendSf35: number = TelephonyTonesGenerated_toneToSendSf35; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf36
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf36: number = 56; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf36
 * @constant
 */
export
const toneToSendSf36: number = TelephonyTonesGenerated_toneToSendSf36; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf37
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf37: number = 57; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf37
 * @constant
 */
export
const toneToSendSf37: number = TelephonyTonesGenerated_toneToSendSf37; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf38
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf38: number = 58; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf38
 * @constant
 */
export
const toneToSendSf38: number = TelephonyTonesGenerated_toneToSendSf38; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf39
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf39: number = 59; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf39
 * @constant
 */
export
const toneToSendSf39: number = TelephonyTonesGenerated_toneToSendSf39; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf40
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf40: number = 60; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf40
 * @constant
 */
export
const toneToSendSf40: number = TelephonyTonesGenerated_toneToSendSf40; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf41
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf41: number = 61; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf41
 * @constant
 */
export
const toneToSendSf41: number = TelephonyTonesGenerated_toneToSendSf41; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf42
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf42: number = 62; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf42
 * @constant
 */
export
const toneToSendSf42: number = TelephonyTonesGenerated_toneToSendSf42; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf43
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf43: number = 63; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf43
 * @constant
 */
export
const toneToSendSf43: number = TelephonyTonesGenerated_toneToSendSf43; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf44
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf44: number = 64; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf44
 * @constant
 */
export
const toneToSendSf44: number = TelephonyTonesGenerated_toneToSendSf44; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf45
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf45: number = 65; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf45
 * @constant
 */
export
const toneToSendSf45: number = TelephonyTonesGenerated_toneToSendSf45; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf46
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf46: number = 66; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf46
 * @constant
 */
export
const toneToSendSf46: number = TelephonyTonesGenerated_toneToSendSf46; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf47
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf47: number = 67; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf47
 * @constant
 */
export
const toneToSendSf47: number = TelephonyTonesGenerated_toneToSendSf47; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf48
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf48: number = 68; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf48
 * @constant
 */
export
const toneToSendSf48: number = TelephonyTonesGenerated_toneToSendSf48; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf49
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf49: number = 69; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf49
 * @constant
 */
export
const toneToSendSf49: number = TelephonyTonesGenerated_toneToSendSf49; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf50
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf50: number = 70; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf50
 * @constant
 */
export
const toneToSendSf50: number = TelephonyTonesGenerated_toneToSendSf50; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf51
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf51: number = 71; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf51
 * @constant
 */
export
const toneToSendSf51: number = TelephonyTonesGenerated_toneToSendSf51; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf52
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf52: number = 72; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf52
 * @constant
 */
export
const toneToSendSf52: number = TelephonyTonesGenerated_toneToSendSf52; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf53
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf53: number = 73; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf53
 * @constant
 */
export
const toneToSendSf53: number = TelephonyTonesGenerated_toneToSendSf53; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf54
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf54: number = 74; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf54
 * @constant
 */
export
const toneToSendSf54: number = TelephonyTonesGenerated_toneToSendSf54; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf55
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf55: number = 75; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf55
 * @constant
 */
export
const toneToSendSf55: number = TelephonyTonesGenerated_toneToSendSf55; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf56
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf56: number = 76; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf56
 * @constant
 */
export
const toneToSendSf56: number = TelephonyTonesGenerated_toneToSendSf56; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf57
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf57: number = 77; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf57
 * @constant
 */
export
const toneToSendSf57: number = TelephonyTonesGenerated_toneToSendSf57; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf58
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf58: number = 78; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf58
 * @constant
 */
export
const toneToSendSf58: number = TelephonyTonesGenerated_toneToSendSf58; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf59
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf59: number = 79; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf59
 * @constant
 */
export
const toneToSendSf59: number = TelephonyTonesGenerated_toneToSendSf59; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf60
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf60: number = 80; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf60
 * @constant
 */
export
const toneToSendSf60: number = TelephonyTonesGenerated_toneToSendSf60; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf61
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf61: number = 81; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf61
 * @constant
 */
export
const toneToSendSf61: number = TelephonyTonesGenerated_toneToSendSf61; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf62
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf62: number = 82; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf62
 * @constant
 */
export
const toneToSendSf62: number = TelephonyTonesGenerated_toneToSendSf62; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf63
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf63: number = 83; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf63
 * @constant
 */
export
const toneToSendSf63: number = TelephonyTonesGenerated_toneToSendSf63; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf64
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf64: number = 84; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf64
 * @constant
 */
export
const toneToSendSf64: number = TelephonyTonesGenerated_toneToSendSf64; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf65
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf65: number = 85; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf65
 * @constant
 */
export
const toneToSendSf65: number = TelephonyTonesGenerated_toneToSendSf65; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf66
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf66: number = 86; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf66
 * @constant
 */
export
const toneToSendSf66: number = TelephonyTonesGenerated_toneToSendSf66; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf67
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf67: number = 87; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf67
 * @constant
 */
export
const toneToSendSf67: number = TelephonyTonesGenerated_toneToSendSf67; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf68
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf68: number = 88; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf68
 * @constant
 */
export
const toneToSendSf68: number = TelephonyTonesGenerated_toneToSendSf68; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf69
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf69: number = 89; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf69
 * @constant
 */
export
const toneToSendSf69: number = TelephonyTonesGenerated_toneToSendSf69; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf70
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf70: number = 90; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf70
 * @constant
 */
export
const toneToSendSf70: number = TelephonyTonesGenerated_toneToSendSf70; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf71
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf71: number = 91; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf71
 * @constant
 */
export
const toneToSendSf71: number = TelephonyTonesGenerated_toneToSendSf71; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf72
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf72: number = 92; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf72
 * @constant
 */
export
const toneToSendSf72: number = TelephonyTonesGenerated_toneToSendSf72; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf73
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf73: number = 93; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf73
 * @constant
 */
export
const toneToSendSf73: number = TelephonyTonesGenerated_toneToSendSf73; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf74
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf74: number = 94; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf74
 * @constant
 */
export
const toneToSendSf74: number = TelephonyTonesGenerated_toneToSendSf74; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf75
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf75: number = 95; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf75
 * @constant
 */
export
const toneToSendSf75: number = TelephonyTonesGenerated_toneToSendSf75; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf76
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf76: number = 96; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf76
 * @constant
 */
export
const toneToSendSf76: number = TelephonyTonesGenerated_toneToSendSf76; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf77
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf77: number = 97; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf77
 * @constant
 */
export
const toneToSendSf77: number = TelephonyTonesGenerated_toneToSendSf77; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf78
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf78: number = 98; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf78
 * @constant
 */
export
const toneToSendSf78: number = TelephonyTonesGenerated_toneToSendSf78; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf79
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf79: number = 99; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf79
 * @constant
 */
export
const toneToSendSf79: number = TelephonyTonesGenerated_toneToSendSf79; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf80
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf80: number = 100; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf80
 * @constant
 */
export
const toneToSendSf80: number = TelephonyTonesGenerated_toneToSendSf80; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf81
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf81: number = 101; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf81
 * @constant
 */
export
const toneToSendSf81: number = TelephonyTonesGenerated_toneToSendSf81; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf82
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf82: number = 102; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf82
 * @constant
 */
export
const toneToSendSf82: number = TelephonyTonesGenerated_toneToSendSf82; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf83
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf83: number = 103; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf83
 * @constant
 */
export
const toneToSendSf83: number = TelephonyTonesGenerated_toneToSendSf83; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf84
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf84: number = 104; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf84
 * @constant
 */
export
const toneToSendSf84: number = TelephonyTonesGenerated_toneToSendSf84; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf85
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf85: number = 105; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf85
 * @constant
 */
export
const toneToSendSf85: number = TelephonyTonesGenerated_toneToSendSf85; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf86
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf86: number = 106; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf86
 * @constant
 */
export
const toneToSendSf86: number = TelephonyTonesGenerated_toneToSendSf86; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf87
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf87: number = 107; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf87
 * @constant
 */
export
const toneToSendSf87: number = TelephonyTonesGenerated_toneToSendSf87; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf88
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf88: number = 108; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf88
 * @constant
 */
export
const toneToSendSf88: number = TelephonyTonesGenerated_toneToSendSf88; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf89
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf89: number = 109; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf89
 * @constant
 */
export
const toneToSendSf89: number = TelephonyTonesGenerated_toneToSendSf89; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf90
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf90: number = 110; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf90
 * @constant
 */
export
const toneToSendSf90: number = TelephonyTonesGenerated_toneToSendSf90; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf91
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf91: number = 111; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf91
 * @constant
 */
export
const toneToSendSf91: number = TelephonyTonesGenerated_toneToSendSf91; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf92
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf92: number = 112; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf92
 * @constant
 */
export
const toneToSendSf92: number = TelephonyTonesGenerated_toneToSendSf92; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf93
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf93: number = 113; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf93
 * @constant
 */
export
const toneToSendSf93: number = TelephonyTonesGenerated_toneToSendSf93; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf94
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf94: number = 114; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf94
 * @constant
 */
export
const toneToSendSf94: number = TelephonyTonesGenerated_toneToSendSf94; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf95
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf95: number = 115; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf95
 * @constant
 */
export
const toneToSendSf95: number = TelephonyTonesGenerated_toneToSendSf95; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf96
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf96: number = 116; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf96
 * @constant
 */
export
const toneToSendSf96: number = TelephonyTonesGenerated_toneToSendSf96; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf97
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf97: number = 117; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf97
 * @constant
 */
export
const toneToSendSf97: number = TelephonyTonesGenerated_toneToSendSf97; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf98
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf98: number = 118; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf98
 * @constant
 */
export
const toneToSendSf98: number = TelephonyTonesGenerated_toneToSendSf98; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf99
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf99: number = 119; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf99
 * @constant
 */
export
const toneToSendSf99: number = TelephonyTonesGenerated_toneToSendSf99; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneToSendSf100
 * @constant
 */
export
const TelephonyTonesGenerated_toneToSendSf100: number = 120; /* LONG_NAMED_BIT */

/**
 * @summary toneToSendSf100
 * @constant
 */
export
const toneToSendSf100: number = TelephonyTonesGenerated_toneToSendSf100; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneFrequency
 * @constant
 */
export
const TelephonyTonesGenerated_toneFrequency: number = 121; /* LONG_NAMED_BIT */

/**
 * @summary toneFrequency
 * @constant
 */
export
const toneFrequency: number = TelephonyTonesGenerated_toneFrequency; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_toneDuration
 * @constant
 */
export
const TelephonyTonesGenerated_toneDuration: number = 122; /* LONG_NAMED_BIT */

/**
 * @summary toneDuration
 * @constant
 */
export
const toneDuration: number = TelephonyTonesGenerated_toneDuration; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_pauseDurationList
 * @constant
 */
export
const TelephonyTonesGenerated_pauseDurationList: number = 123; /* LONG_NAMED_BIT */

/**
 * @summary pauseDurationList
 * @constant
 */
export
const pauseDurationList: number = TelephonyTonesGenerated_pauseDurationList; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_connectionInfo
 * @constant
 */
export
const TelephonyTonesGenerated_connectionInfo: number = 124; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 */
export
const connectionInfo: number = TelephonyTonesGenerated_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary TelephonyTonesGenerated_privateData
 * @constant
 */
export
const TelephonyTonesGenerated_privateData: number = 125; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = TelephonyTonesGenerated_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TelephonyTonesGenerated: $.ASN1Decoder<TelephonyTonesGenerated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelephonyTonesGenerated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TelephonyTonesGenerated (el: _Element): TelephonyTonesGenerated {
    if (!_cached_decoder_for_TelephonyTonesGenerated) { _cached_decoder_for_TelephonyTonesGenerated = $._decodeBitString; }
    return _cached_decoder_for_TelephonyTonesGenerated(el);
}

let _cached_encoder_for_TelephonyTonesGenerated: $.ASN1Encoder<TelephonyTonesGenerated> | null = null;

/**
 * @summary Encodes a(n) TelephonyTonesGenerated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephonyTonesGenerated, encoded as an ASN.1 Element.
 */
export
function _encode_TelephonyTonesGenerated (value: TelephonyTonesGenerated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TelephonyTonesGenerated) { _cached_encoder_for_TelephonyTonesGenerated = $._encodeBitString; }
    return _cached_encoder_for_TelephonyTonesGenerated(value, elGetter);
}


/* eslint-enable */
