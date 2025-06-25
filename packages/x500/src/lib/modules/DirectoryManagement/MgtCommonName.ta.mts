/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary MgtCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtCommonName  ::=  UnboundedDirectoryString
 * ```
 */
export type MgtCommonName = UnboundedDirectoryString; // DefinedType

let _cached_decoder_for_MgtCommonName: $.ASN1Decoder<MgtCommonName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MgtCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtCommonName} The decoded data structure.
 */
export function _decode_MgtCommonName(el: _Element): MgtCommonName {
    if (!_cached_decoder_for_MgtCommonName) {
        _cached_decoder_for_MgtCommonName = _decode_UnboundedDirectoryString;
    }
    return _cached_decoder_for_MgtCommonName(el);
}

let _cached_encoder_for_MgtCommonName: $.ASN1Encoder<MgtCommonName> | null = null;

/**
 * @summary Encodes a(n) MgtCommonName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtCommonName, encoded as an ASN.1 Element.
 */
export function _encode_MgtCommonName(
    value: MgtCommonName,
    elGetter: $.ASN1Encoder<MgtCommonName>
): _Element {
    if (!_cached_encoder_for_MgtCommonName) {
        _cached_encoder_for_MgtCommonName = _encode_UnboundedDirectoryString;
    }
    return _cached_encoder_for_MgtCommonName(value, elGetter);
}


/* eslint-enable */
