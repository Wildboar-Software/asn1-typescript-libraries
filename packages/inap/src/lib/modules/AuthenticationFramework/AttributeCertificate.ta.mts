/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { AttributeCertificateInfo, _decode_AttributeCertificateInfo, _encode_AttributeCertificateInfo } from "../AuthenticationFramework/AttributeCertificateInfo.ta.mjs";
// export { AttributeCertificateInfo, _decode_AttributeCertificateInfo, _encode_AttributeCertificateInfo } from "../AuthenticationFramework/AttributeCertificateInfo.ta.mjs";


/**
 * @summary AttributeCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCertificate  ::=  SIGNED{AttributeCertificateInfo}
 * ```
 */
export
type AttributeCertificate = SIGNED<AttributeCertificateInfo>; // DefinedType

let _cached_decoder_for_AttributeCertificate: $.ASN1Decoder<AttributeCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCertificate (el: _Element): AttributeCertificate {
    if (!_cached_decoder_for_AttributeCertificate) { _cached_decoder_for_AttributeCertificate = _get_decoder_for_SIGNED<AttributeCertificateInfo>(_decode_AttributeCertificateInfo); }
    return _cached_decoder_for_AttributeCertificate(el);
}

let _cached_encoder_for_AttributeCertificate: $.ASN1Encoder<AttributeCertificate> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificate (value: AttributeCertificate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCertificate) { _cached_encoder_for_AttributeCertificate = _get_encoder_for_SIGNED<AttributeCertificateInfo>(_encode_AttributeCertificateInfo); }
    return _cached_encoder_for_AttributeCertificate(value, elGetter);
}


/* eslint-enable */
