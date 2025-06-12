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



/* START_OF_SYMBOL_DEFINITION _enum_for_PerceivedSeverity */
/**
 * @summary PerceivedSeverity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```@enum {number}
 */
export
enum _enum_for_PerceivedSeverity {
    indeterminate = 0,
    critical = 1,
    major = 2,
    minor = 3,
    warning = 4,
    cleared = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PerceivedSeverity */

/* START_OF_SYMBOL_DEFINITION PerceivedSeverity */
/**
 * @summary PerceivedSeverity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```@enum {number}
 */
export
type PerceivedSeverity = _enum_for_PerceivedSeverity;
/* END_OF_SYMBOL_DEFINITION PerceivedSeverity */

/* START_OF_SYMBOL_DEFINITION PerceivedSeverity */
/**
 * @summary PerceivedSeverity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```@enum {number}
 */
export
const PerceivedSeverity = _enum_for_PerceivedSeverity;
/* END_OF_SYMBOL_DEFINITION PerceivedSeverity */

/* START_OF_SYMBOL_DEFINITION PerceivedSeverity_indeterminate */
/**
 * @summary PerceivedSeverity_indeterminate
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_indeterminate: PerceivedSeverity = PerceivedSeverity.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedSeverity_indeterminate */

/* START_OF_SYMBOL_DEFINITION indeterminate */
/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: PerceivedSeverity = PerceivedSeverity.indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION indeterminate */

/* START_OF_SYMBOL_DEFINITION PerceivedSeverity_critical */
/**
 * @summary PerceivedSeverity_critical
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_critical: PerceivedSeverity = PerceivedSeverity.critical; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedSeverity_critical */

/* START_OF_SYMBOL_DEFINITION critical */
/**
 * @summary critical
 * @constant
 * @type {number}
 */
export
const critical: PerceivedSeverity = PerceivedSeverity.critical; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION critical */

/* START_OF_SYMBOL_DEFINITION PerceivedSeverity_major */
/**
 * @summary PerceivedSeverity_major
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_major: PerceivedSeverity = PerceivedSeverity.major; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedSeverity_major */

/* START_OF_SYMBOL_DEFINITION major */
/**
 * @summary major
 * @constant
 * @type {number}
 */
export
const major: PerceivedSeverity = PerceivedSeverity.major; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION major */

/* START_OF_SYMBOL_DEFINITION PerceivedSeverity_minor */
/**
 * @summary PerceivedSeverity_minor
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_minor: PerceivedSeverity = PerceivedSeverity.minor; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedSeverity_minor */

/* START_OF_SYMBOL_DEFINITION minor */
/**
 * @summary minor
 * @constant
 * @type {number}
 */
export
const minor: PerceivedSeverity = PerceivedSeverity.minor; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION minor */

/* START_OF_SYMBOL_DEFINITION PerceivedSeverity_warning */
/**
 * @summary PerceivedSeverity_warning
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_warning: PerceivedSeverity = PerceivedSeverity.warning; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedSeverity_warning */

/* START_OF_SYMBOL_DEFINITION warning */
/**
 * @summary warning
 * @constant
 * @type {number}
 */
export
const warning: PerceivedSeverity = PerceivedSeverity.warning; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION warning */

/* START_OF_SYMBOL_DEFINITION PerceivedSeverity_cleared */
/**
 * @summary PerceivedSeverity_cleared
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_cleared: PerceivedSeverity = PerceivedSeverity.cleared; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedSeverity_cleared */

/* START_OF_SYMBOL_DEFINITION cleared */
/**
 * @summary cleared
 * @constant
 * @type {number}
 */
export
const cleared: PerceivedSeverity = PerceivedSeverity.cleared; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cleared */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerceivedSeverity */
let _cached_decoder_for_PerceivedSeverity: $.ASN1Decoder<PerceivedSeverity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerceivedSeverity */

/* START_OF_SYMBOL_DEFINITION _decode_PerceivedSeverity */
/**
 * @summary Decodes an ASN.1 element into a(n) PerceivedSeverity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerceivedSeverity} The decoded data structure.
 */
export
function _decode_PerceivedSeverity (el: _Element) {
    if (!_cached_decoder_for_PerceivedSeverity) { _cached_decoder_for_PerceivedSeverity = $._decodeEnumerated; }
    return _cached_decoder_for_PerceivedSeverity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerceivedSeverity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerceivedSeverity */
let _cached_encoder_for_PerceivedSeverity: $.ASN1Encoder<PerceivedSeverity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerceivedSeverity */

/* START_OF_SYMBOL_DEFINITION _encode_PerceivedSeverity */
/**
 * @summary Encodes a(n) PerceivedSeverity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerceivedSeverity, encoded as an ASN.1 Element.
 */
export
function _encode_PerceivedSeverity (value: PerceivedSeverity, elGetter: $.ASN1Encoder<PerceivedSeverity>) {
    if (!_cached_encoder_for_PerceivedSeverity) { _cached_encoder_for_PerceivedSeverity = $._encodeEnumerated; }
    return _cached_encoder_for_PerceivedSeverity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerceivedSeverity */

/* eslint-enable */
