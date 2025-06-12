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
import {
    RequestedDeliveryMethod_Item,
    RequestedDeliveryMethod_Item_any_delivery_method /* IMPORTED_LONG_NAMED_INTEGER */,
    any_delivery_method /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_mhs_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    mhs_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_physical_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_telex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_teletex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_g3_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    g3_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_g4_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    g4_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_ia5_terminal_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_terminal_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_videotex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_telephone_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telephone_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RequestedDeliveryMethod_Item,
    _encode_RequestedDeliveryMethod_Item,
} from '../MTSAbstractService/RequestedDeliveryMethod-Item.ta.mjs';
export {
    RequestedDeliveryMethod_Item,
    RequestedDeliveryMethod_Item_any_delivery_method /* IMPORTED_LONG_NAMED_INTEGER */,
    any_delivery_method /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_mhs_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    mhs_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_physical_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_telex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_teletex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_g3_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    g3_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_g4_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    g4_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_ia5_terminal_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_terminal_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_videotex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RequestedDeliveryMethod_Item_telephone_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telephone_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RequestedDeliveryMethod_Item,
    _encode_RequestedDeliveryMethod_Item,
} from '../MTSAbstractService/RequestedDeliveryMethod-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod */
/**
 * @summary RequestedDeliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedDeliveryMethod  ::=
 *   SEQUENCE OF INTEGER { -- each different in order of preference,
 *       -- most preferred first
 *       any-delivery-method(0), mhs-delivery(1), physical-delivery(2),
 *       telex-delivery(3), teletex-delivery(4), g3-facsimile-delivery(5),
 *       g4-facsimile-delivery(6), ia5-terminal-delivery(7), videotex-delivery(8),
 *       telephone-delivery(9)}(0..ub-integer-options)
 * ```
 */
export type RequestedDeliveryMethod = RequestedDeliveryMethod_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestedDeliveryMethod */
let _cached_decoder_for_RequestedDeliveryMethod: $.ASN1Decoder<RequestedDeliveryMethod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestedDeliveryMethod */

/* START_OF_SYMBOL_DEFINITION _decode_RequestedDeliveryMethod */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestedDeliveryMethod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestedDeliveryMethod} The decoded data structure.
 */
export function _decode_RequestedDeliveryMethod(el: _Element) {
    if (!_cached_decoder_for_RequestedDeliveryMethod) {
        _cached_decoder_for_RequestedDeliveryMethod = $._decodeSequenceOf<RequestedDeliveryMethod_Item>(
            () => _decode_RequestedDeliveryMethod_Item
        );
    }
    return _cached_decoder_for_RequestedDeliveryMethod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestedDeliveryMethod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestedDeliveryMethod */
let _cached_encoder_for_RequestedDeliveryMethod: $.ASN1Encoder<RequestedDeliveryMethod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestedDeliveryMethod */

/* START_OF_SYMBOL_DEFINITION _encode_RequestedDeliveryMethod */
/**
 * @summary Encodes a(n) RequestedDeliveryMethod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedDeliveryMethod, encoded as an ASN.1 Element.
 */
export function _encode_RequestedDeliveryMethod(
    value: RequestedDeliveryMethod,
    elGetter: $.ASN1Encoder<RequestedDeliveryMethod>
) {
    if (!_cached_encoder_for_RequestedDeliveryMethod) {
        _cached_encoder_for_RequestedDeliveryMethod = $._encodeSequenceOf<RequestedDeliveryMethod_Item>(
            () => _encode_RequestedDeliveryMethod_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RequestedDeliveryMethod(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestedDeliveryMethod */

/* eslint-enable */
