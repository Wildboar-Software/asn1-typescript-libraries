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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_DenialGranularity */
/**
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```@enum {number}
 */
export enum _enum_for_DenialGranularity {
    request = 0,
    object = 1,
    attribute = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DenialGranularity */

/* START_OF_SYMBOL_DEFINITION DenialGranularity */
/**
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```@enum {number}
 */
export type DenialGranularity = _enum_for_DenialGranularity;
/* END_OF_SYMBOL_DEFINITION DenialGranularity */

/* START_OF_SYMBOL_DEFINITION DenialGranularity */
/**
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```@enum {number}
 */
export const DenialGranularity = _enum_for_DenialGranularity;
/* END_OF_SYMBOL_DEFINITION DenialGranularity */

/* START_OF_SYMBOL_DEFINITION DenialGranularity_request */
/**
 * @summary DenialGranularity_request
 * @constant
 * @type {number}
 */
export const DenialGranularity_request: DenialGranularity =
    DenialGranularity.request; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialGranularity_request */

/* START_OF_SYMBOL_DEFINITION request */
/**
 * @summary request
 * @constant
 * @type {number}
 */
export const request: DenialGranularity =
    DenialGranularity.request; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION request */

/* START_OF_SYMBOL_DEFINITION DenialGranularity_object */
/**
 * @summary DenialGranularity_object
 * @constant
 * @type {number}
 */
export const DenialGranularity_object: DenialGranularity =
    DenialGranularity.object; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialGranularity_object */

/* START_OF_SYMBOL_DEFINITION object */
/**
 * @summary object
 * @constant
 * @type {number}
 */
export const object: DenialGranularity =
    DenialGranularity.object; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION object */

/* START_OF_SYMBOL_DEFINITION DenialGranularity_attribute */
/**
 * @summary DenialGranularity_attribute
 * @constant
 * @type {number}
 */
export const DenialGranularity_attribute: DenialGranularity =
    DenialGranularity.attribute; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialGranularity_attribute */

/* START_OF_SYMBOL_DEFINITION attribute */
/**
 * @summary attribute
 * @constant
 * @type {number}
 */
export const attribute: DenialGranularity =
    DenialGranularity.attribute; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DenialGranularity */
let _cached_decoder_for_DenialGranularity: $.ASN1Decoder<DenialGranularity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DenialGranularity */

/* START_OF_SYMBOL_DEFINITION _decode_DenialGranularity */
/**
 * @summary Decodes an ASN.1 element into a(n) DenialGranularity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DenialGranularity} The decoded data structure.
 */
export function _decode_DenialGranularity(el: _Element) {
    if (!_cached_decoder_for_DenialGranularity) {
        _cached_decoder_for_DenialGranularity = $._decodeEnumerated;
    }
    return _cached_decoder_for_DenialGranularity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DenialGranularity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DenialGranularity */
let _cached_encoder_for_DenialGranularity: $.ASN1Encoder<DenialGranularity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DenialGranularity */

/* START_OF_SYMBOL_DEFINITION _encode_DenialGranularity */
/**
 * @summary Encodes a(n) DenialGranularity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DenialGranularity, encoded as an ASN.1 Element.
 */
export function _encode_DenialGranularity(
    value: DenialGranularity,
    elGetter: $.ASN1Encoder<DenialGranularity>
) {
    if (!_cached_encoder_for_DenialGranularity) {
        _cached_encoder_for_DenialGranularity = $._encodeEnumerated;
    }
    return _cached_encoder_for_DenialGranularity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DenialGranularity */

/* eslint-enable */
