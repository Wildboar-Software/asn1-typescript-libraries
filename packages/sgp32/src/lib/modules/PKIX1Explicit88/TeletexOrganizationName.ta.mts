/* eslint-disable */
import {
    ASN1Element as _Element,
    TeletexString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TeletexOrganizationName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeletexOrganizationName  ::= 
 *                 TeletexString (SIZE (1..ub-organization-name-length))
 * ```
 */
export
type TeletexOrganizationName = TeletexString; // TeletexString

let _cached_decoder_for_TeletexOrganizationName: $.ASN1Decoder<TeletexOrganizationName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TeletexOrganizationName (el: _Element): TeletexOrganizationName {
    if (!_cached_decoder_for_TeletexOrganizationName) { _cached_decoder_for_TeletexOrganizationName = $._decodeTeletexString; }
    return _cached_decoder_for_TeletexOrganizationName(el);
}

let _cached_encoder_for_TeletexOrganizationName: $.ASN1Encoder<TeletexOrganizationName> | null = null;

/**
 * @summary Encodes a(n) TeletexOrganizationName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationName, encoded as an ASN.1 Element.
 */
export
function _encode_TeletexOrganizationName (value: TeletexOrganizationName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TeletexOrganizationName) { _cached_encoder_for_TeletexOrganizationName = $._encodeTeletexString; }
    return _cached_encoder_for_TeletexOrganizationName(value, elGetter);
}


/* eslint-enable */
