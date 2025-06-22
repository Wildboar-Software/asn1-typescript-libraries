/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    SuperiorToSubordinate,
    _decode_SuperiorToSubordinate,
    _encode_SuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinate.ta.mjs";
/**
 * @summary NHOBSuperiorToSubordinate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NHOBSuperiorToSubordinate  ::=  SuperiorToSubordinate (
 *   WITH COMPONENTS {..., entryInfo  ABSENT } )
 * ```
 */
export type NHOBSuperiorToSubordinate = SuperiorToSubordinate; // DefinedType

let _cached_decoder_for_NHOBSuperiorToSubordinate: $.ASN1Decoder<NHOBSuperiorToSubordinate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NHOBSuperiorToSubordinate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NHOBSuperiorToSubordinate} The decoded data structure.
 */
export function _decode_NHOBSuperiorToSubordinate(el: _Element) {
    if (!_cached_decoder_for_NHOBSuperiorToSubordinate) {
        _cached_decoder_for_NHOBSuperiorToSubordinate = _decode_SuperiorToSubordinate;
    }
    return _cached_decoder_for_NHOBSuperiorToSubordinate(el);
}

let _cached_encoder_for_NHOBSuperiorToSubordinate: $.ASN1Encoder<NHOBSuperiorToSubordinate> | null = null;

/**
 * @summary Encodes a(n) NHOBSuperiorToSubordinate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NHOBSuperiorToSubordinate, encoded as an ASN.1 Element.
 */
export function _encode_NHOBSuperiorToSubordinate(
    value: NHOBSuperiorToSubordinate,
    elGetter: $.ASN1Encoder<NHOBSuperiorToSubordinate>
) {
    if (!_cached_encoder_for_NHOBSuperiorToSubordinate) {
        _cached_encoder_for_NHOBSuperiorToSubordinate = _encode_SuperiorToSubordinate;
    }
    return _cached_encoder_for_NHOBSuperiorToSubordinate(value, elGetter);
}


/* eslint-enable */
