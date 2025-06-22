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
import * as $ from '@wildboar/asn1/functional';
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary ForwardedTo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardedTo  ::=  ORName
 * ```
 */
export type ForwardedTo = ORName; // DefinedType

let _cached_decoder_for_ForwardedTo: $.ASN1Decoder<ForwardedTo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedTo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardedTo} The decoded data structure.
 */
export function _decode_ForwardedTo(el: _Element) {
    if (!_cached_decoder_for_ForwardedTo) {
        _cached_decoder_for_ForwardedTo = _decode_ORName;
    }
    return _cached_decoder_for_ForwardedTo(el);
}

let _cached_encoder_for_ForwardedTo: $.ASN1Encoder<ForwardedTo> | null = null;

/**
 * @summary Encodes a(n) ForwardedTo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedTo, encoded as an ASN.1 Element.
 */
export function _encode_ForwardedTo(
    value: ForwardedTo,
    elGetter: $.ASN1Encoder<ForwardedTo>
) {
    if (!_cached_encoder_for_ForwardedTo) {
        _cached_encoder_for_ForwardedTo = _encode_ORName;
    }
    return _cached_encoder_for_ForwardedTo(value, elGetter);
}


/* eslint-enable */
