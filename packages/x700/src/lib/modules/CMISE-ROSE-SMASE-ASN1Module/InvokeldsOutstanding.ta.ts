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

/* START_OF_SYMBOL_DEFINITION InvokeldsOutstanding */
/**
 * @summary InvokeldsOutstanding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeldsOutstanding  ::=  SET OF INTEGER
 * ```
 */
export type InvokeldsOutstanding = INTEGER[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION InvokeldsOutstanding */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeldsOutstanding */
let _cached_decoder_for_InvokeldsOutstanding: $.ASN1Decoder<InvokeldsOutstanding> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeldsOutstanding */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeldsOutstanding */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeldsOutstanding
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeldsOutstanding} The decoded data structure.
 */
export function _decode_InvokeldsOutstanding(el: _Element) {
    if (!_cached_decoder_for_InvokeldsOutstanding) {
        _cached_decoder_for_InvokeldsOutstanding = $._decodeSetOf<INTEGER>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_InvokeldsOutstanding(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeldsOutstanding */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeldsOutstanding */
let _cached_encoder_for_InvokeldsOutstanding: $.ASN1Encoder<InvokeldsOutstanding> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeldsOutstanding */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeldsOutstanding */
/**
 * @summary Encodes a(n) InvokeldsOutstanding into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeldsOutstanding, encoded as an ASN.1 Element.
 */
export function _encode_InvokeldsOutstanding(
    value: InvokeldsOutstanding,
    elGetter: $.ASN1Encoder<InvokeldsOutstanding>
) {
    if (!_cached_encoder_for_InvokeldsOutstanding) {
        _cached_encoder_for_InvokeldsOutstanding = $._encodeSetOf<INTEGER>(
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_InvokeldsOutstanding(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeldsOutstanding */

/* eslint-enable */
