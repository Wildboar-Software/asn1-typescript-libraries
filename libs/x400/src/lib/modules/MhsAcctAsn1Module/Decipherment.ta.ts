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

/* START_OF_SYMBOL_DEFINITION Decipherment */
/**
 * @summary Decipherment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Decipherment  ::=  INTEGER {success(1), failure(2)}
 * ```
 */
export type Decipherment = INTEGER;
/* END_OF_SYMBOL_DEFINITION Decipherment */

/* START_OF_SYMBOL_DEFINITION Decipherment_success */
/**
 * @summary Decipherment_success
 * @constant
 * @type {number}
 */
export const Decipherment_success: Decipherment = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Decipherment_success */

/* START_OF_SYMBOL_DEFINITION success */
/**
 * @summary Decipherment_success
 * @constant
 * @type {number}
 */
export const success: Decipherment = Decipherment_success; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION success */

/* START_OF_SYMBOL_DEFINITION Decipherment_failure */
/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const Decipherment_failure: Decipherment = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Decipherment_failure */

/* START_OF_SYMBOL_DEFINITION failure */
/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const failure: Decipherment = Decipherment_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Decipherment */
let _cached_decoder_for_Decipherment: $.ASN1Decoder<Decipherment> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Decipherment */

/* START_OF_SYMBOL_DEFINITION _decode_Decipherment */
/**
 * @summary Decodes an ASN.1 element into a(n) Decipherment
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Decipherment} The decoded data structure.
 */
export function _decode_Decipherment(el: _Element) {
    if (!_cached_decoder_for_Decipherment) {
        _cached_decoder_for_Decipherment = $._decodeInteger;
    }
    return _cached_decoder_for_Decipherment(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Decipherment */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Decipherment */
let _cached_encoder_for_Decipherment: $.ASN1Encoder<Decipherment> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Decipherment */

/* START_OF_SYMBOL_DEFINITION _encode_Decipherment */
/**
 * @summary Encodes a(n) Decipherment into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Decipherment, encoded as an ASN.1 Element.
 */
export function _encode_Decipherment(
    value: Decipherment,
    elGetter: $.ASN1Encoder<Decipherment>
) {
    if (!_cached_encoder_for_Decipherment) {
        _cached_encoder_for_Decipherment = $._encodeInteger;
    }
    return _cached_encoder_for_Decipherment(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Decipherment */

/* eslint-enable */
