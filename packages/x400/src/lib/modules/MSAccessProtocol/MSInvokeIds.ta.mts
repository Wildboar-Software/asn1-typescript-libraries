/* eslint-disable */
import {
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
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MSInvokeIds */
/**
 * @summary MSInvokeIds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSInvokeIds  ::=  InvokeId(ALL EXCEPT absent:NULL)
 * ```
 */
export type MSInvokeIds = InvokeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION MSInvokeIds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSInvokeIds */
let _cached_decoder_for_MSInvokeIds: $.ASN1Decoder<MSInvokeIds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSInvokeIds */

/* START_OF_SYMBOL_DEFINITION _decode_MSInvokeIds */
/**
 * @summary Decodes an ASN.1 element into a(n) MSInvokeIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSInvokeIds} The decoded data structure.
 */
export function _decode_MSInvokeIds(el: _Element) {
    if (!_cached_decoder_for_MSInvokeIds) {
        _cached_decoder_for_MSInvokeIds = _decode_InvokeId;
    }
    return _cached_decoder_for_MSInvokeIds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MSInvokeIds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSInvokeIds */
let _cached_encoder_for_MSInvokeIds: $.ASN1Encoder<MSInvokeIds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSInvokeIds */

/* START_OF_SYMBOL_DEFINITION _encode_MSInvokeIds */
/**
 * @summary Encodes a(n) MSInvokeIds into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSInvokeIds, encoded as an ASN.1 Element.
 */
export function _encode_MSInvokeIds(
    value: MSInvokeIds,
    elGetter: $.ASN1Encoder<MSInvokeIds>
) {
    if (!_cached_encoder_for_MSInvokeIds) {
        _cached_encoder_for_MSInvokeIds = _encode_InvokeId;
    }
    return _cached_encoder_for_MSInvokeIds(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MSInvokeIds */

/* eslint-enable */
