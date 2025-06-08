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

/* START_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery */
/**
 * @summary DLPolicy_proof_of_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-proof-of-delivery ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_proof_of_delivery = INTEGER;
/* END_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery */

/* START_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery_dl_expansion_point */
/**
 * @summary DLPolicy_proof_of_delivery_dl_expansion_point
 * @constant
 * @type {number}
 */
export const DLPolicy_proof_of_delivery_dl_expansion_point: DLPolicy_proof_of_delivery = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery_dl_expansion_point */

/* START_OF_SYMBOL_DEFINITION dl_expansion_point */
/**
 * @summary DLPolicy_proof_of_delivery_dl_expansion_point
 * @constant
 * @type {number}
 */
export const dl_expansion_point: DLPolicy_proof_of_delivery = DLPolicy_proof_of_delivery_dl_expansion_point; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dl_expansion_point */

/* START_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery_dl_members */
/**
 * @summary DLPolicy_proof_of_delivery_dl_members
 * @constant
 * @type {number}
 */
export const DLPolicy_proof_of_delivery_dl_members: DLPolicy_proof_of_delivery = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery_dl_members */

/* START_OF_SYMBOL_DEFINITION dl_members */
/**
 * @summary DLPolicy_proof_of_delivery_dl_members
 * @constant
 * @type {number}
 */
export const dl_members: DLPolicy_proof_of_delivery = DLPolicy_proof_of_delivery_dl_members; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dl_members */

/* START_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery_both */
/**
 * @summary DLPolicy_proof_of_delivery_both
 * @constant
 * @type {number}
 */
export const DLPolicy_proof_of_delivery_both: DLPolicy_proof_of_delivery = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary DLPolicy_proof_of_delivery_both
 * @constant
 * @type {number}
 */
export const both: DLPolicy_proof_of_delivery = DLPolicy_proof_of_delivery_both; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery_neither */
/**
 * @summary DLPolicy_proof_of_delivery_neither
 * @constant
 * @type {number}
 */
export const DLPolicy_proof_of_delivery_neither: DLPolicy_proof_of_delivery = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_proof_of_delivery_neither */

/* START_OF_SYMBOL_DEFINITION neither */
/**
 * @summary DLPolicy_proof_of_delivery_neither
 * @constant
 * @type {number}
 */
export const neither: DLPolicy_proof_of_delivery = DLPolicy_proof_of_delivery_neither; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION neither */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_proof_of_delivery */
let _cached_decoder_for_DLPolicy_proof_of_delivery: $.ASN1Decoder<DLPolicy_proof_of_delivery> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_proof_of_delivery */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_proof_of_delivery */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_proof_of_delivery
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_proof_of_delivery} The decoded data structure.
 */
export function _decode_DLPolicy_proof_of_delivery(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_proof_of_delivery) {
        _cached_decoder_for_DLPolicy_proof_of_delivery = $._decodeInteger;
    }
    return _cached_decoder_for_DLPolicy_proof_of_delivery(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_proof_of_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_proof_of_delivery */
let _cached_encoder_for_DLPolicy_proof_of_delivery: $.ASN1Encoder<DLPolicy_proof_of_delivery> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_proof_of_delivery */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_proof_of_delivery */
/**
 * @summary Encodes a(n) DLPolicy_proof_of_delivery into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_proof_of_delivery, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_proof_of_delivery(
    value: DLPolicy_proof_of_delivery,
    elGetter: $.ASN1Encoder<DLPolicy_proof_of_delivery>
) {
    if (!_cached_encoder_for_DLPolicy_proof_of_delivery) {
        _cached_encoder_for_DLPolicy_proof_of_delivery = $._encodeInteger;
    }
    return _cached_encoder_for_DLPolicy_proof_of_delivery(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_proof_of_delivery */

/* eslint-enable */
