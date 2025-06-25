/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary MgtName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtName  ::=  Name
 * ```
 */
export type MgtName = Name; // DefinedType

let _cached_decoder_for_MgtName: $.ASN1Decoder<MgtName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MgtName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtName} The decoded data structure.
 */
export function _decode_MgtName(el: _Element): MgtName {
    if (!_cached_decoder_for_MgtName) {
        _cached_decoder_for_MgtName = _decode_Name;
    }
    return _cached_decoder_for_MgtName(el);
}

let _cached_encoder_for_MgtName: $.ASN1Encoder<MgtName> | null = null;

/**
 * @summary Encodes a(n) MgtName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtName, encoded as an ASN.1 Element.
 */
export function _encode_MgtName(
    value: MgtName,
    elGetter: $.ASN1Encoder<MgtName>
): _Element {
    if (!_cached_encoder_for_MgtName) {
        _cached_encoder_for_MgtName = _encode_Name;
    }
    return _cached_encoder_for_MgtName(value, elGetter);
}


/* eslint-enable */
