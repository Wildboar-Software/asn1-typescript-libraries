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
    AttributeIDList,
    _decode_AttributeIDList,
    _encode_AttributeIDList,
} from '../X790ASN1Module/AttributeIDList.ta.mjs';

/**
 * @summary TRMustBePresentAttributeMissing
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TRMustBePresentAttributeMissing  ::=  AttributeIDList
 * ```
 */
export type TRMustBePresentAttributeMissing = AttributeIDList; // DefinedType


let _cached_decoder_for_TRMustBePresentAttributeMissing: $.ASN1Decoder<TRMustBePresentAttributeMissing> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TRMustBePresentAttributeMissing
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TRMustBePresentAttributeMissing} The decoded data structure.
 */
export function _decode_TRMustBePresentAttributeMissing(el: _Element): TRMustBePresentAttributeMissing {
    if (!_cached_decoder_for_TRMustBePresentAttributeMissing) {
        _cached_decoder_for_TRMustBePresentAttributeMissing = _decode_AttributeIDList;
    }
    return _cached_decoder_for_TRMustBePresentAttributeMissing(el);
}


let _cached_encoder_for_TRMustBePresentAttributeMissing: $.ASN1Encoder<TRMustBePresentAttributeMissing> | null = null;


/**
 * @summary Encodes a(n) TRMustBePresentAttributeMissing into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TRMustBePresentAttributeMissing, encoded as an ASN.1 Element.
 */
export function _encode_TRMustBePresentAttributeMissing(
    value: TRMustBePresentAttributeMissing,
    elGetter: $.ASN1Encoder<TRMustBePresentAttributeMissing>
): _Element {
    if (!_cached_encoder_for_TRMustBePresentAttributeMissing) {
        _cached_encoder_for_TRMustBePresentAttributeMissing = _encode_AttributeIDList;
    }
    return _cached_encoder_for_TRMustBePresentAttributeMissing(value, elGetter);
}


/* eslint-enable */
