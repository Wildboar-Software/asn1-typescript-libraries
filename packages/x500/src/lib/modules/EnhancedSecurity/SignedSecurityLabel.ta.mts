/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta.mjs";
import {
    SignedSecurityLabelContent,
    _decode_SignedSecurityLabelContent,
    _encode_SignedSecurityLabelContent,
} from "../EnhancedSecurity/SignedSecurityLabelContent.ta.mjs";
/**
 * @summary SignedSecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedSecurityLabel  ::=  SIGNED{SignedSecurityLabelContent}
 * ```
 */
export type SignedSecurityLabel = SIGNED<SignedSecurityLabelContent>; // DefinedType

let _cached_decoder_for_SignedSecurityLabel: $.ASN1Decoder<SignedSecurityLabel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignedSecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedSecurityLabel} The decoded data structure.
 */
export function _decode_SignedSecurityLabel(el: _Element) {
    if (!_cached_decoder_for_SignedSecurityLabel) {
        _cached_decoder_for_SignedSecurityLabel = _get_decoder_for_SIGNED<SignedSecurityLabelContent>(
            _decode_SignedSecurityLabelContent
        );
    }
    return _cached_decoder_for_SignedSecurityLabel(el);
}

let _cached_encoder_for_SignedSecurityLabel: $.ASN1Encoder<SignedSecurityLabel> | null = null;

/**
 * @summary Encodes a(n) SignedSecurityLabel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedSecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_SignedSecurityLabel(
    value: SignedSecurityLabel,
    elGetter: $.ASN1Encoder<SignedSecurityLabel>
) {
    if (!_cached_encoder_for_SignedSecurityLabel) {
        _cached_encoder_for_SignedSecurityLabel = _get_encoder_for_SIGNED<SignedSecurityLabelContent>(
            _encode_SignedSecurityLabelContent
        );
    }
    return _cached_encoder_for_SignedSecurityLabel(value, elGetter);
}


/* eslint-enable */
