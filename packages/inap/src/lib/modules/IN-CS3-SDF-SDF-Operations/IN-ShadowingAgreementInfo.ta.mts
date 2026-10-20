/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ShadowingAgreementInfo, _decode_ShadowingAgreementInfo, _encode_ShadowingAgreementInfo } from "../DirectoryShadowAbstractService/ShadowingAgreementInfo.ta.mjs";
// export { ShadowingAgreementInfo, _decode_ShadowingAgreementInfo, _encode_ShadowingAgreementInfo } from "../DirectoryShadowAbstractService/ShadowingAgreementInfo.ta.mjs";


/**
 * @summary IN_ShadowingAgreementInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ShadowingAgreementInfo  ::= 
 *   ShadowingAgreementInfo(WITH COMPONENTS {
 *                            ...,
 *                            master  ABSENT
 *                          })
 * ```
 */
export
type IN_ShadowingAgreementInfo = ShadowingAgreementInfo; // DefinedType

let _cached_decoder_for_IN_ShadowingAgreementInfo: $.ASN1Decoder<IN_ShadowingAgreementInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ShadowingAgreementInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_ShadowingAgreementInfo (el: _Element): IN_ShadowingAgreementInfo {
    if (!_cached_decoder_for_IN_ShadowingAgreementInfo) { _cached_decoder_for_IN_ShadowingAgreementInfo = _decode_ShadowingAgreementInfo; }
    return _cached_decoder_for_IN_ShadowingAgreementInfo(el);
}

let _cached_encoder_for_IN_ShadowingAgreementInfo: $.ASN1Encoder<IN_ShadowingAgreementInfo> | null = null;

/**
 * @summary Encodes a(n) IN_ShadowingAgreementInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ShadowingAgreementInfo, encoded as an ASN.1 Element.
 */
export
function _encode_IN_ShadowingAgreementInfo (value: IN_ShadowingAgreementInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_ShadowingAgreementInfo) { _cached_encoder_for_IN_ShadowingAgreementInfo = _encode_ShadowingAgreementInfo; }
    return _cached_encoder_for_IN_ShadowingAgreementInfo(value, elGetter);
}


/* eslint-enable */
