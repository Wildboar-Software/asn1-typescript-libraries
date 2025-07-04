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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
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

let _cached_decoder_for_MSInvokeIds: $.ASN1Decoder<MSInvokeIds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSInvokeIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSInvokeIds} The decoded data structure.
 */
export function _decode_MSInvokeIds(el: _Element): MSInvokeIds {
    if (!_cached_decoder_for_MSInvokeIds) {
        _cached_decoder_for_MSInvokeIds = _decode_InvokeId;
    }
    return _cached_decoder_for_MSInvokeIds(el);
}

let _cached_encoder_for_MSInvokeIds: $.ASN1Encoder<MSInvokeIds> | null = null;

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
): _Element {
    if (!_cached_encoder_for_MSInvokeIds) {
        _cached_encoder_for_MSInvokeIds = _encode_InvokeId;
    }
    return _cached_encoder_for_MSInvokeIds(value, elGetter);
}


/* eslint-enable */
