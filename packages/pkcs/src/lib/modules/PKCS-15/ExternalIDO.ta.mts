/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta.mjs";

/**
 * @summary ExternalIDO
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalIDO  ::=  ObjectValue {PKCS15-OPAQUE.&Type} (CONSTRAINED BY {
 *     -- All data objects must be defined in
 *     -- accordance with ISO/IEC 7816-6 --})
 * ```
 */
export type ExternalIDO = ObjectValue<_Element>; // DefinedType


let _cached_decoder_for_ExternalIDO: $.ASN1Decoder<ExternalIDO> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExternalIDO
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExternalIDO} The decoded data structure.
 */
export function _decode_ExternalIDO(el: _Element): ExternalIDO {
    if (!_cached_decoder_for_ExternalIDO) {
        _cached_decoder_for_ExternalIDO = _get_decoder_for_ObjectValue<_Element>(
            $._decodeAny
        );
    }
    return _cached_decoder_for_ExternalIDO(el);
}


let _cached_encoder_for_ExternalIDO: $.ASN1Encoder<ExternalIDO> | null = null;


/**
 * @summary Encodes a(n) ExternalIDO into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalIDO, encoded as an ASN.1 Element.
 */
export function _encode_ExternalIDO(
    value: ExternalIDO,
    elGetter: $.ASN1Encoder<ExternalIDO>
): _Element {
    if (!_cached_encoder_for_ExternalIDO) {
        _cached_encoder_for_ExternalIDO = _get_encoder_for_ObjectValue<_Element>(
            $._encodeAny
        );
    }
    return _cached_encoder_for_ExternalIDO(value, elGetter);
}


/* eslint-enable */
