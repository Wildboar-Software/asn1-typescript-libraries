/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta.mjs";

/**
 * @summary SecurityPolicyName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityPolicyName  ::=  DirectoryString{ubObjectIdNameLength}
 * ```
 */
export type SecurityPolicyName = DirectoryString; // DefinedType


let _cached_decoder_for_SecurityPolicyName: $.ASN1Decoder<SecurityPolicyName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SecurityPolicyName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityPolicyName} The decoded data structure.
 */
export function _decode_SecurityPolicyName(el: _Element): SecurityPolicyName {
    if (!_cached_decoder_for_SecurityPolicyName) {
        _cached_decoder_for_SecurityPolicyName = _decode_DirectoryString;
    }
    return _cached_decoder_for_SecurityPolicyName(el);
}


let _cached_encoder_for_SecurityPolicyName: $.ASN1Encoder<SecurityPolicyName> | null = null;


/**
 * @summary Encodes a(n) SecurityPolicyName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityPolicyName, encoded as an ASN.1 Element.
 */
export function _encode_SecurityPolicyName(
    value: SecurityPolicyName,
    elGetter: $.ASN1Encoder<SecurityPolicyName>
): _Element {
    if (!_cached_encoder_for_SecurityPolicyName) {
        _cached_encoder_for_SecurityPolicyName = _encode_DirectoryString;
    }
    return _cached_encoder_for_SecurityPolicyName(value, elGetter);
}


/* eslint-enable */
