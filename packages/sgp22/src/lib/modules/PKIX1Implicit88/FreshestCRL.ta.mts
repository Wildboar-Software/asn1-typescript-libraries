/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CRLDistributionPoints, _decode_CRLDistributionPoints, _encode_CRLDistributionPoints } from "../PKIX1Implicit88/CRLDistributionPoints.ta.mjs";
// export { CRLDistributionPoints, _decode_CRLDistributionPoints, _encode_CRLDistributionPoints } from "../PKIX1Implicit88/CRLDistributionPoints.ta.mjs";


/**
 * @summary FreshestCRL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FreshestCRL  ::=  CRLDistributionPoints
 * ```
 */
export
type FreshestCRL = CRLDistributionPoints; // DefinedType

let _cached_decoder_for_FreshestCRL: $.ASN1Decoder<FreshestCRL> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FreshestCRL
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FreshestCRL (el: _Element): FreshestCRL {
    if (!_cached_decoder_for_FreshestCRL) { _cached_decoder_for_FreshestCRL = _decode_CRLDistributionPoints; }
    return _cached_decoder_for_FreshestCRL(el);
}

let _cached_encoder_for_FreshestCRL: $.ASN1Encoder<FreshestCRL> | null = null;

/**
 * @summary Encodes a(n) FreshestCRL into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FreshestCRL, encoded as an ASN.1 Element.
 */
export
function _encode_FreshestCRL (value: FreshestCRL, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FreshestCRL) { _cached_encoder_for_FreshestCRL = _encode_CRLDistributionPoints; }
    return _cached_encoder_for_FreshestCRL(value, elGetter);
}


/* eslint-enable */
