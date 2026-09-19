/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StatusReferral, _decode_StatusReferral, _encode_StatusReferral } from "../CertificateExtensions/StatusReferral.ta.mjs";
// export { StatusReferral, _decode_StatusReferral, _encode_StatusReferral } from "../CertificateExtensions/StatusReferral.ta.mjs";


/**
 * @summary StatusReferrals
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusReferrals  ::=  SEQUENCE SIZE (1..MAX) OF StatusReferral
 * ```
 */
export
type StatusReferrals = StatusReferral[]; // SequenceOfType

let _cached_decoder_for_StatusReferrals: $.ASN1Decoder<StatusReferrals> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusReferrals
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusReferrals (el: _Element): StatusReferrals {
    if (!_cached_decoder_for_StatusReferrals) { _cached_decoder_for_StatusReferrals = $._decodeSequenceOf<StatusReferral>(() => _decode_StatusReferral); }
    return _cached_decoder_for_StatusReferrals(el);
}

let _cached_encoder_for_StatusReferrals: $.ASN1Encoder<StatusReferrals> | null = null;

/**
 * @summary Encodes a(n) StatusReferrals into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReferrals, encoded as an ASN.1 Element.
 */
export
function _encode_StatusReferrals (value: StatusReferrals, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusReferrals) { _cached_encoder_for_StatusReferrals = $._encodeSequenceOf<StatusReferral>(() => _encode_StatusReferral, $.BER); }
    return _cached_encoder_for_StatusReferrals(value, elGetter);
}


/* eslint-enable */
