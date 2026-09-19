/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthorizationData, _decode_AuthorizationData, _encode_AuthorizationData } from "../KerberosV5Spec2/AuthorizationData.ta.mjs";
// export { AuthorizationData, _decode_AuthorizationData, _encode_AuthorizationData } from "../KerberosV5Spec2/AuthorizationData.ta.mjs";


/**
 * @summary AD_MANDATORY_FOR_KDC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AD-MANDATORY-FOR-KDC     ::=  AuthorizationData
 * ```
 */
export
type AD_MANDATORY_FOR_KDC = AuthorizationData; // DefinedType

let _cached_decoder_for_AD_MANDATORY_FOR_KDC: $.ASN1Decoder<AD_MANDATORY_FOR_KDC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AD_MANDATORY_FOR_KDC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AD_MANDATORY_FOR_KDC (el: _Element): AD_MANDATORY_FOR_KDC {
    if (!_cached_decoder_for_AD_MANDATORY_FOR_KDC) { _cached_decoder_for_AD_MANDATORY_FOR_KDC = _decode_AuthorizationData; }
    return _cached_decoder_for_AD_MANDATORY_FOR_KDC(el);
}

let _cached_encoder_for_AD_MANDATORY_FOR_KDC: $.ASN1Encoder<AD_MANDATORY_FOR_KDC> | null = null;

/**
 * @summary Encodes a(n) AD_MANDATORY_FOR_KDC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_MANDATORY_FOR_KDC, encoded as an ASN.1 Element.
 */
export
function _encode_AD_MANDATORY_FOR_KDC (value: AD_MANDATORY_FOR_KDC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AD_MANDATORY_FOR_KDC) { _cached_encoder_for_AD_MANDATORY_FOR_KDC = _encode_AuthorizationData; }
    return _cached_encoder_for_AD_MANDATORY_FOR_KDC(value, elGetter);
}


/* eslint-enable */
