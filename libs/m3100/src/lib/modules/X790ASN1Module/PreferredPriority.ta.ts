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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION _enum_for_PreferredPriority */
export enum _enum_for_PreferredPriority {
    undefined = 0,
    minor = 1,
    major = 2,
    serious = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PreferredPriority */

/* START_OF_SYMBOL_DEFINITION PreferredPriority */
/**
 * @summary PreferredPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredPriority  ::=  ENUMERATED {
 *   undefined(0), minor(1), major(2), serious(3), ...
 *   }
 * ```@enum {number}
 */
export type PreferredPriority = _enum_for_PreferredPriority | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION PreferredPriority */

/* START_OF_SYMBOL_DEFINITION PreferredPriority_undefined */
/**
 * @summary PreferredPriority_undefined
 * @constant
 * @type {number}
 */
export const PreferredPriority_undefined: PreferredPriority = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PreferredPriority_undefined */

/* START_OF_SYMBOL_DEFINITION undefined */
/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: PreferredPriority = PreferredPriority_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION undefined */

/* START_OF_SYMBOL_DEFINITION PreferredPriority_minor */
/**
 * @summary PreferredPriority_minor
 * @constant
 * @type {number}
 */
export const PreferredPriority_minor: PreferredPriority = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PreferredPriority_minor */

/* START_OF_SYMBOL_DEFINITION minor */
/**
 * @summary minor
 * @constant
 * @type {number}
 */
export const minor: PreferredPriority = PreferredPriority_minor; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION minor */

/* START_OF_SYMBOL_DEFINITION PreferredPriority_major */
/**
 * @summary PreferredPriority_major
 * @constant
 * @type {number}
 */
export const PreferredPriority_major: PreferredPriority = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PreferredPriority_major */

/* START_OF_SYMBOL_DEFINITION major */
/**
 * @summary major
 * @constant
 * @type {number}
 */
export const major: PreferredPriority = PreferredPriority_major; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION major */

/* START_OF_SYMBOL_DEFINITION PreferredPriority_serious */
/**
 * @summary PreferredPriority_serious
 * @constant
 * @type {number}
 */
export const PreferredPriority_serious: PreferredPriority = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PreferredPriority_serious */

/* START_OF_SYMBOL_DEFINITION serious */
/**
 * @summary serious
 * @constant
 * @type {number}
 */
export const serious: PreferredPriority = PreferredPriority_serious; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION serious */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PreferredPriority */
let _cached_decoder_for_PreferredPriority: $.ASN1Decoder<PreferredPriority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PreferredPriority */

/* START_OF_SYMBOL_DEFINITION _decode_PreferredPriority */
/**
 * @summary Decodes an ASN.1 element into a(n) PreferredPriority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PreferredPriority} The decoded data structure.
 */
export function _decode_PreferredPriority(el: _Element) {
    if (!_cached_decoder_for_PreferredPriority) {
        _cached_decoder_for_PreferredPriority = $._decodeEnumerated;
    }
    return _cached_decoder_for_PreferredPriority(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PreferredPriority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PreferredPriority */
let _cached_encoder_for_PreferredPriority: $.ASN1Encoder<PreferredPriority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PreferredPriority */

/* START_OF_SYMBOL_DEFINITION _encode_PreferredPriority */
/**
 * @summary Encodes a(n) PreferredPriority into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreferredPriority, encoded as an ASN.1 Element.
 */
export function _encode_PreferredPriority(
    value: PreferredPriority,
    elGetter: $.ASN1Encoder<PreferredPriority>
) {
    if (!_cached_encoder_for_PreferredPriority) {
        _cached_encoder_for_PreferredPriority = $._encodeEnumerated;
    }
    return _cached_encoder_for_PreferredPriority(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PreferredPriority */

/* eslint-enable */
