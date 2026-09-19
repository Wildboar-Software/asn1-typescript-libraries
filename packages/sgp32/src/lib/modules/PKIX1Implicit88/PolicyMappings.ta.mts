/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PolicyMappings_Item, _decode_PolicyMappings_Item, _encode_PolicyMappings_Item } from "../PKIX1Implicit88/PolicyMappings-Item.ta.mjs";
// export { PolicyMappings_Item, _decode_PolicyMappings_Item, _encode_PolicyMappings_Item } from "../PKIX1Implicit88/PolicyMappings-Item.ta.mjs";


/**
 * @summary PolicyMappings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicyMappings  ::=  SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *      issuerDomainPolicy      CertPolicyId,
 *      subjectDomainPolicy     CertPolicyId }
 * ```
 */
export
type PolicyMappings = PolicyMappings_Item[]; // SequenceOfType

let _cached_decoder_for_PolicyMappings: $.ASN1Decoder<PolicyMappings> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyMappings
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PolicyMappings (el: _Element): PolicyMappings {
    if (!_cached_decoder_for_PolicyMappings) { _cached_decoder_for_PolicyMappings = $._decodeSequenceOf<PolicyMappings_Item>(() => _decode_PolicyMappings_Item); }
    return _cached_decoder_for_PolicyMappings(el);
}

let _cached_encoder_for_PolicyMappings: $.ASN1Encoder<PolicyMappings> | null = null;

/**
 * @summary Encodes a(n) PolicyMappings into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyMappings, encoded as an ASN.1 Element.
 */
export
function _encode_PolicyMappings (value: PolicyMappings, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PolicyMappings) { _cached_encoder_for_PolicyMappings = $._encodeSequenceOf<PolicyMappings_Item>(() => _encode_PolicyMappings_Item, $.BER); }
    return _cached_encoder_for_PolicyMappings(value, elGetter);
}


/* eslint-enable */
