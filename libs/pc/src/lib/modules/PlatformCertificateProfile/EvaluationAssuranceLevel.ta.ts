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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION _enum_for_EvaluationAssuranceLevel */
/**
 * @summary EvaluationAssuranceLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     levell (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
 * ```@enum {number}
 */
export
enum _enum_for_EvaluationAssuranceLevel {
    levell = 1,
    level2 = 2,
    level3 = 3,
    level4 = 4,
    level5 = 5,
    level6 = 6,
    level7 = 7,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel */
/**
 * @summary EvaluationAssuranceLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     levell (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
 * ```@enum {number}
 */
export
type EvaluationAssuranceLevel = _enum_for_EvaluationAssuranceLevel;
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel */
/**
 * @summary EvaluationAssuranceLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     levell (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
 * ```@enum {number}
 */
export
const EvaluationAssuranceLevel = _enum_for_EvaluationAssuranceLevel;
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_levell */
/**
 * @summary EvaluationAssuranceLevel_levell
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_levell: EvaluationAssuranceLevel = EvaluationAssuranceLevel.levell; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_levell */

/* START_OF_SYMBOL_DEFINITION levell */
/**
 * @summary levell
 * @constant
 * @type {number}
 */
export
const levell: EvaluationAssuranceLevel = EvaluationAssuranceLevel.levell; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION levell */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level2 */
/**
 * @summary EvaluationAssuranceLevel_level2
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level2: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level2 */

/* START_OF_SYMBOL_DEFINITION level2 */
/**
 * @summary level2
 * @constant
 * @type {number}
 */
export
const level2: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level2 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level3 */
/**
 * @summary EvaluationAssuranceLevel_level3
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level3: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level3 */

/* START_OF_SYMBOL_DEFINITION level3 */
/**
 * @summary level3
 * @constant
 * @type {number}
 */
export
const level3: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level3; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level3 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level4 */
/**
 * @summary EvaluationAssuranceLevel_level4
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level4: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level4 */

/* START_OF_SYMBOL_DEFINITION level4 */
/**
 * @summary level4
 * @constant
 * @type {number}
 */
export
const level4: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level4; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level4 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level5 */
/**
 * @summary EvaluationAssuranceLevel_level5
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level5: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level5 */

/* START_OF_SYMBOL_DEFINITION level5 */
/**
 * @summary level5
 * @constant
 * @type {number}
 */
export
const level5: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level5; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level5 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level6 */
/**
 * @summary EvaluationAssuranceLevel_level6
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level6: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level6 */

/* START_OF_SYMBOL_DEFINITION level6 */
/**
 * @summary level6
 * @constant
 * @type {number}
 */
export
const level6: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level6; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level6 */

/* START_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level7 */
/**
 * @summary EvaluationAssuranceLevel_level7
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level7: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EvaluationAssuranceLevel_level7 */

/* START_OF_SYMBOL_DEFINITION level7 */
/**
 * @summary level7
 * @constant
 * @type {number}
 */
export
const level7: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level7; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level7 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EvaluationAssuranceLevel */
let _cached_decoder_for_EvaluationAssuranceLevel: $.ASN1Decoder<EvaluationAssuranceLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION _decode_EvaluationAssuranceLevel */
/**
 * @summary Decodes an ASN.1 element into a(n) EvaluationAssuranceLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EvaluationAssuranceLevel} The decoded data structure.
 */
export
function _decode_EvaluationAssuranceLevel (el: _Element) {
    if (!_cached_decoder_for_EvaluationAssuranceLevel) { _cached_decoder_for_EvaluationAssuranceLevel = $._decodeEnumerated; }
    return _cached_decoder_for_EvaluationAssuranceLevel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EvaluationAssuranceLevel */
let _cached_encoder_for_EvaluationAssuranceLevel: $.ASN1Encoder<EvaluationAssuranceLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EvaluationAssuranceLevel */

/* START_OF_SYMBOL_DEFINITION _encode_EvaluationAssuranceLevel */
/**
 * @summary Encodes a(n) EvaluationAssuranceLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EvaluationAssuranceLevel, encoded as an ASN.1 Element.
 */
export
function _encode_EvaluationAssuranceLevel (value: EvaluationAssuranceLevel, elGetter: $.ASN1Encoder<EvaluationAssuranceLevel>) {
    if (!_cached_encoder_for_EvaluationAssuranceLevel) { _cached_encoder_for_EvaluationAssuranceLevel = $._encodeEnumerated; }
    return _cached_encoder_for_EvaluationAssuranceLevel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EvaluationAssuranceLevel */

/* eslint-enable */
