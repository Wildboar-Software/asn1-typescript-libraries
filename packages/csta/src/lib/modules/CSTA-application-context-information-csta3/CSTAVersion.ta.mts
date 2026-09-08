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
 * @summary CSTAVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAVersion     ::=   BIT STRING
 * {    versionOne            ( 0),  -- ECMA-180
 *         versionTwo            ( 1),  -- ECMA-218
 *         versionThree            ( 2),  -- ECMA-285, 1st Edition
 *         versionFour            ( 3),  -- ISO/IEC 18052
 *         versionFive            ( 4),  -- ECMA-285, 2nd Edition
 *         versionSix            ( 5),  -- ECMA-323
 *         versionSeven            ( 6),  -- ECMA-323, 2nd Edition
 *         versionEight            ( 7),  -- ECMA-323, 3rd Edition
 *         versionNine            ( 8),  -- ECMA-323, 4th Edition, Tag option
 *         versionTen            ( 9),  -- ECMA-323, 4th Edition, short Tag option
 *         versionEleven            (10),  -- ECMA-323, 4th Edition, dynamic transformation option
 *         versionTwelve            (11),  -- ECMA-323, 5th Edition, Tag option
 *         versionThirteen            (12),  -- ECMA-323, 5th Edition, short Tag option
 *         versionFourteen            (13),  -- ECMA-323, 5th Edition, dynamic transformation option
 *         versionFifteen            (14),  -- ECMA-285, 3rd Edition
 *     versionSixteen            (15),  -- ECMA-323, 6th Edition, Tag option
 *     versionSeventeen        (16),  -- ECMA-323, 6th Edition, short Tag option
 *     versionEighteen            (17),  -- ECMA-323, 6th Edition, dynamic transformation option
 *     versionNineteen            (18),  -- ECMA-285, 4th Edition
 *         versionTwenty            (19),  -- Reserved for future use
 *         versionTwentyone        (20),  -- Reserved for future use
 *         versionTwentytwo        (21),  -- Reserved for future use
 *         versionTwentythree        (22),  -- Reserved for future use
 *         versionTwentyfour        (23) }
 * ```
 */
export
type CSTAVersion = BIT_STRING;

/**
 * @summary CSTAVersion_versionOne
 * @constant
 */
export
const CSTAVersion_versionOne: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary versionOne
 * @constant
 */
export
const versionOne: number = CSTAVersion_versionOne; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionTwo
 * @constant
 */
export
const CSTAVersion_versionTwo: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary versionTwo
 * @constant
 */
export
const versionTwo: number = CSTAVersion_versionTwo; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionThree
 * @constant
 */
export
const CSTAVersion_versionThree: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary versionThree
 * @constant
 */
export
const versionThree: number = CSTAVersion_versionThree; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionFour
 * @constant
 */
export
const CSTAVersion_versionFour: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary versionFour
 * @constant
 */
export
const versionFour: number = CSTAVersion_versionFour; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionFive
 * @constant
 */
export
const CSTAVersion_versionFive: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary versionFive
 * @constant
 */
export
const versionFive: number = CSTAVersion_versionFive; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionSix
 * @constant
 */
export
const CSTAVersion_versionSix: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary versionSix
 * @constant
 */
export
const versionSix: number = CSTAVersion_versionSix; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionSeven
 * @constant
 */
export
const CSTAVersion_versionSeven: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary versionSeven
 * @constant
 */
export
const versionSeven: number = CSTAVersion_versionSeven; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionEight
 * @constant
 */
export
const CSTAVersion_versionEight: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary versionEight
 * @constant
 */
export
const versionEight: number = CSTAVersion_versionEight; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionNine
 * @constant
 */
export
const CSTAVersion_versionNine: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary versionNine
 * @constant
 */
export
const versionNine: number = CSTAVersion_versionNine; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionTen
 * @constant
 */
export
const CSTAVersion_versionTen: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary versionTen
 * @constant
 */
export
const versionTen: number = CSTAVersion_versionTen; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionEleven
 * @constant
 */
export
const CSTAVersion_versionEleven: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary versionEleven
 * @constant
 */
export
const versionEleven: number = CSTAVersion_versionEleven; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionTwelve
 * @constant
 */
export
const CSTAVersion_versionTwelve: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary versionTwelve
 * @constant
 */
export
const versionTwelve: number = CSTAVersion_versionTwelve; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionThirteen
 * @constant
 */
export
const CSTAVersion_versionThirteen: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary versionThirteen
 * @constant
 */
export
const versionThirteen: number = CSTAVersion_versionThirteen; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionFourteen
 * @constant
 */
export
const CSTAVersion_versionFourteen: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary versionFourteen
 * @constant
 */
export
const versionFourteen: number = CSTAVersion_versionFourteen; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionFifteen
 * @constant
 */
export
const CSTAVersion_versionFifteen: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary versionFifteen
 * @constant
 */
export
const versionFifteen: number = CSTAVersion_versionFifteen; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionSixteen
 * @constant
 */
export
const CSTAVersion_versionSixteen: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary versionSixteen
 * @constant
 */
export
const versionSixteen: number = CSTAVersion_versionSixteen; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionSeventeen
 * @constant
 */
export
const CSTAVersion_versionSeventeen: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary versionSeventeen
 * @constant
 */
export
const versionSeventeen: number = CSTAVersion_versionSeventeen; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionEighteen
 * @constant
 */
export
const CSTAVersion_versionEighteen: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary versionEighteen
 * @constant
 */
export
const versionEighteen: number = CSTAVersion_versionEighteen; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionNineteen
 * @constant
 */
export
const CSTAVersion_versionNineteen: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary versionNineteen
 * @constant
 */
export
const versionNineteen: number = CSTAVersion_versionNineteen; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionTwenty
 * @constant
 */
export
const CSTAVersion_versionTwenty: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary versionTwenty
 * @constant
 */
export
const versionTwenty: number = CSTAVersion_versionTwenty; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionTwentyone
 * @constant
 */
export
const CSTAVersion_versionTwentyone: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary versionTwentyone
 * @constant
 */
export
const versionTwentyone: number = CSTAVersion_versionTwentyone; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionTwentytwo
 * @constant
 */
export
const CSTAVersion_versionTwentytwo: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary versionTwentytwo
 * @constant
 */
export
const versionTwentytwo: number = CSTAVersion_versionTwentytwo; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionTwentythree
 * @constant
 */
export
const CSTAVersion_versionTwentythree: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary versionTwentythree
 * @constant
 */
export
const versionTwentythree: number = CSTAVersion_versionTwentythree; /* SHORT_NAMED_BIT */

/**
 * @summary CSTAVersion_versionTwentyfour
 * @constant
 */
export
const CSTAVersion_versionTwentyfour: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary versionTwentyfour
 * @constant
 */
export
const versionTwentyfour: number = CSTAVersion_versionTwentyfour; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CSTAVersion: $.ASN1Decoder<CSTAVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAVersion (el: _Element): CSTAVersion {
    if (!_cached_decoder_for_CSTAVersion) { _cached_decoder_for_CSTAVersion = $._decodeBitString; }
    return _cached_decoder_for_CSTAVersion(el);
}

let _cached_encoder_for_CSTAVersion: $.ASN1Encoder<CSTAVersion> | null = null;

/**
 * @summary Encodes a(n) CSTAVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAVersion, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAVersion (value: CSTAVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAVersion) { _cached_encoder_for_CSTAVersion = $._encodeBitString; }
    return _cached_encoder_for_CSTAVersion(value, elGetter);
}


/* eslint-enable */
