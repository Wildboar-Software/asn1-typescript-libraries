/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { TBSCertificate, _decode_TBSCertificate, _encode_TBSCertificate } from "../AuthenticationFramework/TBSCertificate.ta.mjs";
// export { TBSCertificate, _decode_TBSCertificate, _encode_TBSCertificate } from "../AuthenticationFramework/TBSCertificate.ta.mjs";


/**
 * @summary Certificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Certificate  ::=  SIGNED{TBSCertificate}
 * ```
 */
export
type Certificate = SIGNED<TBSCertificate>; // DefinedType

let _cached_decoder_for_Certificate: $.ASN1Decoder<Certificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Certificate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Certificate (el: _Element): Certificate {
    if (!_cached_decoder_for_Certificate) { _cached_decoder_for_Certificate = _get_decoder_for_SIGNED<TBSCertificate>(_decode_TBSCertificate); }
    return _cached_decoder_for_Certificate(el);
}

let _cached_encoder_for_Certificate: $.ASN1Encoder<Certificate> | null = null;

/**
 * @summary Encodes a(n) Certificate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificate, encoded as an ASN.1 Element.
 */
export
function _encode_Certificate (value: Certificate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Certificate) { _cached_encoder_for_Certificate = _get_encoder_for_SIGNED<TBSCertificate>(_encode_TBSCertificate); }
    return _cached_encoder_for_Certificate(value, elGetter);
}


/* eslint-enable */
