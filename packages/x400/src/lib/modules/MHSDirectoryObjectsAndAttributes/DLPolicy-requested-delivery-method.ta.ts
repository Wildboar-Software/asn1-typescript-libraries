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
    RequestedDeliveryMethod,
    _decode_RequestedDeliveryMethod,
    _encode_RequestedDeliveryMethod,
} from '../MTSAbstractService/RequestedDeliveryMethod.ta.js';
export {
    RequestedDeliveryMethod,
    _decode_RequestedDeliveryMethod,
    _encode_RequestedDeliveryMethod,
} from '../MTSAbstractService/RequestedDeliveryMethod.ta.js';

/* START_OF_SYMBOL_DEFINITION DLPolicy_requested_delivery_method */
/**
 * @summary DLPolicy_requested_delivery_method
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-requested-delivery-method ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_requested_delivery_method =
    | { unchanged: NULL } /* CHOICE_ALT_ROOT */
    | { removed: NULL } /* CHOICE_ALT_ROOT */
    | { replaced: RequestedDeliveryMethod } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DLPolicy_requested_delivery_method */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_requested_delivery_method */
let _cached_decoder_for_DLPolicy_requested_delivery_method: $.ASN1Decoder<DLPolicy_requested_delivery_method> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_requested_delivery_method */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_requested_delivery_method */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_requested_delivery_method
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_requested_delivery_method} The decoded data structure.
 */
export function _decode_DLPolicy_requested_delivery_method(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_requested_delivery_method) {
        _cached_decoder_for_DLPolicy_requested_delivery_method = $._decode_inextensible_choice<DLPolicy_requested_delivery_method>(
            {
                'CONTEXT 0': [
                    'unchanged',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'removed',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'UNIVERSAL 16': ['replaced', _decode_RequestedDeliveryMethod],
            }
        );
    }
    return _cached_decoder_for_DLPolicy_requested_delivery_method(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_requested_delivery_method */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_requested_delivery_method */
let _cached_encoder_for_DLPolicy_requested_delivery_method: $.ASN1Encoder<DLPolicy_requested_delivery_method> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_requested_delivery_method */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_requested_delivery_method */
/**
 * @summary Encodes a(n) DLPolicy_requested_delivery_method into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_requested_delivery_method, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_requested_delivery_method(
    value: DLPolicy_requested_delivery_method,
    elGetter: $.ASN1Encoder<DLPolicy_requested_delivery_method>
) {
    if (!_cached_encoder_for_DLPolicy_requested_delivery_method) {
        _cached_encoder_for_DLPolicy_requested_delivery_method = $._encode_choice<DLPolicy_requested_delivery_method>(
            {
                unchanged: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                removed: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
                replaced: _encode_RequestedDeliveryMethod,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DLPolicy_requested_delivery_method(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_requested_delivery_method */

/* eslint-enable */
