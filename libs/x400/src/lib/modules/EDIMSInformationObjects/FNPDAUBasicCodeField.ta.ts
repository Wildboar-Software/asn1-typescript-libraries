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

/* START_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField */
/**
 * @summary FNPDAUBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNPDAUBasicCodeField  ::=  INTEGER {
 *   unspecified(0), forwarded-for-physical-rendition-and-delivery(1)
 * }(0..ub-reason-code)
 * ```
 */
export type FNPDAUBasicCodeField = INTEGER;
/* END_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField_unspecified */
/**
 * @summary FNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const FNPDAUBasicCodeField_unspecified: FNPDAUBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary FNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: FNPDAUBasicCodeField = FNPDAUBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery */
/**
 * @summary FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery
 * @constant
 * @type {number}
 */
export const FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery: FNPDAUBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery */

/* START_OF_SYMBOL_DEFINITION forwarded_for_physical_rendition_and_delivery */
/**
 * @summary FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery
 * @constant
 * @type {number}
 */
export const forwarded_for_physical_rendition_and_delivery: FNPDAUBasicCodeField = FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_for_physical_rendition_and_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNPDAUBasicCodeField */
let _cached_decoder_for_FNPDAUBasicCodeField: $.ASN1Decoder<FNPDAUBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_FNPDAUBasicCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNPDAUBasicCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNPDAUBasicCodeField} The decoded data structure.
 */
export function _decode_FNPDAUBasicCodeField(el: _Element) {
    if (!_cached_decoder_for_FNPDAUBasicCodeField) {
        _cached_decoder_for_FNPDAUBasicCodeField = $._decodeInteger;
    }
    return _cached_decoder_for_FNPDAUBasicCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNPDAUBasicCodeField */
let _cached_encoder_for_FNPDAUBasicCodeField: $.ASN1Encoder<FNPDAUBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_FNPDAUBasicCodeField */
/**
 * @summary Encodes a(n) FNPDAUBasicCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNPDAUBasicCodeField, encoded as an ASN.1 Element.
 */
export function _encode_FNPDAUBasicCodeField(
    value: FNPDAUBasicCodeField,
    elGetter: $.ASN1Encoder<FNPDAUBasicCodeField>
) {
    if (!_cached_encoder_for_FNPDAUBasicCodeField) {
        _cached_encoder_for_FNPDAUBasicCodeField = $._encodeInteger;
    }
    return _cached_encoder_for_FNPDAUBasicCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNPDAUBasicCodeField */

/* eslint-enable */
