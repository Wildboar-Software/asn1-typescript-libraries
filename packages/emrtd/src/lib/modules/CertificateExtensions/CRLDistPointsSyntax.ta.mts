/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistributionPoint, _decode_DistributionPoint, _encode_DistributionPoint } from "../CertificateExtensions/DistributionPoint.ta.mjs";
// export { DistributionPoint, _decode_DistributionPoint, _encode_DistributionPoint } from "../CertificateExtensions/DistributionPoint.ta.mjs";


/**
 * @summary CRLDistPointsSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLDistPointsSyntax  ::=  SEQUENCE SIZE (1..MAX) OF DistributionPoint
 * ```
 */
export
type CRLDistPointsSyntax = DistributionPoint[]; // SequenceOfType

let _cached_decoder_for_CRLDistPointsSyntax: $.ASN1Decoder<CRLDistPointsSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CRLDistPointsSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CRLDistPointsSyntax (el: _Element): CRLDistPointsSyntax {
    if (!_cached_decoder_for_CRLDistPointsSyntax) { _cached_decoder_for_CRLDistPointsSyntax = $._decodeSequenceOf<DistributionPoint>(() => _decode_DistributionPoint); }
    return _cached_decoder_for_CRLDistPointsSyntax(el);
}

let _cached_encoder_for_CRLDistPointsSyntax: $.ASN1Encoder<CRLDistPointsSyntax> | null = null;

/**
 * @summary Encodes a(n) CRLDistPointsSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLDistPointsSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_CRLDistPointsSyntax (value: CRLDistPointsSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CRLDistPointsSyntax) { _cached_encoder_for_CRLDistPointsSyntax = $._encodeSequenceOf<DistributionPoint>(() => _encode_DistributionPoint, $.BER); }
    return _cached_encoder_for_CRLDistPointsSyntax(value, elGetter);
}


/* eslint-enable */
