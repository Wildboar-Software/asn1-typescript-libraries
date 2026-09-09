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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HighLayerCompatibilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HighLayerCompatibilities  ::=  BIT STRING {
 *   telephony(0), facsimileGroup2-3(1), facsimileGroup4classeI(2),
 *   teletexMixedMode(3), teletexProcessableMode(4), teletexBasicMode(5),
 *   syntaxBasedVideotex(6), internationalVideotex(7), telexService(8),
 *   messageHandlingSystem(9), osiApplication(10), audioVisual(11)}
 * ```
 */
export
type HighLayerCompatibilities = BIT_STRING;

/**
 * @summary HighLayerCompatibilities_telephony
 * @constant
 */
export
const HighLayerCompatibilities_telephony: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary telephony
 * @constant
 */
export
const telephony: number = HighLayerCompatibilities_telephony; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_facsimileGroup2_3
 * @constant
 */
export
const HighLayerCompatibilities_facsimileGroup2_3: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary facsimileGroup2_3
 * @constant
 */
export
const facsimileGroup2_3: number = HighLayerCompatibilities_facsimileGroup2_3; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_facsimileGroup4classeI
 * @constant
 */
export
const HighLayerCompatibilities_facsimileGroup4classeI: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary facsimileGroup4classeI
 * @constant
 */
export
const facsimileGroup4classeI: number = HighLayerCompatibilities_facsimileGroup4classeI; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_teletexMixedMode
 * @constant
 */
export
const HighLayerCompatibilities_teletexMixedMode: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary teletexMixedMode
 * @constant
 */
export
const teletexMixedMode: number = HighLayerCompatibilities_teletexMixedMode; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_teletexProcessableMode
 * @constant
 */
export
const HighLayerCompatibilities_teletexProcessableMode: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary teletexProcessableMode
 * @constant
 */
export
const teletexProcessableMode: number = HighLayerCompatibilities_teletexProcessableMode; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_teletexBasicMode
 * @constant
 */
export
const HighLayerCompatibilities_teletexBasicMode: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary teletexBasicMode
 * @constant
 */
export
const teletexBasicMode: number = HighLayerCompatibilities_teletexBasicMode; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_syntaxBasedVideotex
 * @constant
 */
export
const HighLayerCompatibilities_syntaxBasedVideotex: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary syntaxBasedVideotex
 * @constant
 */
export
const syntaxBasedVideotex: number = HighLayerCompatibilities_syntaxBasedVideotex; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_internationalVideotex
 * @constant
 */
export
const HighLayerCompatibilities_internationalVideotex: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary internationalVideotex
 * @constant
 */
export
const internationalVideotex: number = HighLayerCompatibilities_internationalVideotex; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_telexService
 * @constant
 */
export
const HighLayerCompatibilities_telexService: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary telexService
 * @constant
 */
export
const telexService: number = HighLayerCompatibilities_telexService; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_messageHandlingSystem
 * @constant
 */
export
const HighLayerCompatibilities_messageHandlingSystem: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary messageHandlingSystem
 * @constant
 */
export
const messageHandlingSystem: number = HighLayerCompatibilities_messageHandlingSystem; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_osiApplication
 * @constant
 */
export
const HighLayerCompatibilities_osiApplication: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary osiApplication
 * @constant
 */
export
const osiApplication: number = HighLayerCompatibilities_osiApplication; /* SHORT_NAMED_BIT */

/**
 * @summary HighLayerCompatibilities_audioVisual
 * @constant
 */
export
const HighLayerCompatibilities_audioVisual: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary audioVisual
 * @constant
 */
export
const audioVisual: number = HighLayerCompatibilities_audioVisual; /* SHORT_NAMED_BIT */
export const _decode_HighLayerCompatibilities = $._decodeBitString;
export const _encode_HighLayerCompatibilities = $._encodeBitString;


/* eslint-enable */
