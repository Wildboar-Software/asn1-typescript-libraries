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
/**
 * @summary MTSInvokeIds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSInvokeIds  ::=  InvokeId(ALL EXCEPT absent:NULL)
 * ```
 */
export type MTSInvokeIds = InvokeId; // DefinedType

let _cached_decoder_for_MTSInvokeIds: $.ASN1Decoder<MTSInvokeIds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTSInvokeIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTSInvokeIds} The decoded data structure.
 */
export function _decode_MTSInvokeIds(el: _Element) {
    if (!_cached_decoder_for_MTSInvokeIds) {
        _cached_decoder_for_MTSInvokeIds = _decode_InvokeId;
    }
    return _cached_decoder_for_MTSInvokeIds(el);
}

let _cached_encoder_for_MTSInvokeIds: $.ASN1Encoder<MTSInvokeIds> | null = null;

/**
 * @summary Encodes a(n) MTSInvokeIds into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSInvokeIds, encoded as an ASN.1 Element.
 */
export function _encode_MTSInvokeIds(
    value: MTSInvokeIds,
    elGetter: $.ASN1Encoder<MTSInvokeIds>
) {
    if (!_cached_encoder_for_MTSInvokeIds) {
        _cached_encoder_for_MTSInvokeIds = _encode_InvokeId;
    }
    return _cached_encoder_for_MTSInvokeIds(value, elGetter);
}


/* eslint-enable */
