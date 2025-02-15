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
import {
    Restriction,
    _decode_Restriction,
    _encode_Restriction,
} from '../MTSAbstractService/Restriction.ta';
export {
    Restriction,
    _decode_Restriction,
    _encode_Restriction,
} from '../MTSAbstractService/Restriction.ta';

/* START_OF_SYMBOL_DEFINITION RestrictedDelivery */
/**
 * @summary RestrictedDelivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestrictedDelivery  ::=  SEQUENCE SIZE (1..ub-restrictions) OF Restriction
 * ```
 */
export type RestrictedDelivery = Restriction[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RestrictedDelivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RestrictedDelivery */
let _cached_decoder_for_RestrictedDelivery: $.ASN1Decoder<RestrictedDelivery> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RestrictedDelivery */

/* START_OF_SYMBOL_DEFINITION _decode_RestrictedDelivery */
/**
 * @summary Decodes an ASN.1 element into a(n) RestrictedDelivery
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestrictedDelivery} The decoded data structure.
 */
export function _decode_RestrictedDelivery(el: _Element) {
    if (!_cached_decoder_for_RestrictedDelivery) {
        _cached_decoder_for_RestrictedDelivery = $._decodeSequenceOf<Restriction>(
            () => _decode_Restriction
        );
    }
    return _cached_decoder_for_RestrictedDelivery(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RestrictedDelivery */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RestrictedDelivery */
let _cached_encoder_for_RestrictedDelivery: $.ASN1Encoder<RestrictedDelivery> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RestrictedDelivery */

/* START_OF_SYMBOL_DEFINITION _encode_RestrictedDelivery */
/**
 * @summary Encodes a(n) RestrictedDelivery into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestrictedDelivery, encoded as an ASN.1 Element.
 */
export function _encode_RestrictedDelivery(
    value: RestrictedDelivery,
    elGetter: $.ASN1Encoder<RestrictedDelivery>
) {
    if (!_cached_encoder_for_RestrictedDelivery) {
        _cached_encoder_for_RestrictedDelivery = $._encodeSequenceOf<Restriction>(
            () => _encode_Restriction,
            $.BER
        );
    }
    return _cached_encoder_for_RestrictedDelivery(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RestrictedDelivery */

/* eslint-enable */
