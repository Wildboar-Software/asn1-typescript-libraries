/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SkipCerts, _decode_SkipCerts, _encode_SkipCerts } from "../PKIX1Implicit88/SkipCerts.ta.mjs";
// export { SkipCerts, _decode_SkipCerts, _encode_SkipCerts } from "../PKIX1Implicit88/SkipCerts.ta.mjs";


/**
 * @summary InhibitAnyPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InhibitAnyPolicy  ::=  SkipCerts
 * ```
 */
export
type InhibitAnyPolicy = SkipCerts; // DefinedType

let _cached_decoder_for_InhibitAnyPolicy: $.ASN1Decoder<InhibitAnyPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InhibitAnyPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InhibitAnyPolicy (el: _Element): InhibitAnyPolicy {
    if (!_cached_decoder_for_InhibitAnyPolicy) { _cached_decoder_for_InhibitAnyPolicy = _decode_SkipCerts; }
    return _cached_decoder_for_InhibitAnyPolicy(el);
}

let _cached_encoder_for_InhibitAnyPolicy: $.ASN1Encoder<InhibitAnyPolicy> | null = null;

/**
 * @summary Encodes a(n) InhibitAnyPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InhibitAnyPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_InhibitAnyPolicy (value: InhibitAnyPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InhibitAnyPolicy) { _cached_encoder_for_InhibitAnyPolicy = _encode_SkipCerts; }
    return _cached_encoder_for_InhibitAnyPolicy(value, elGetter);
}


/* eslint-enable */
