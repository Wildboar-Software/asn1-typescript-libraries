/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistributionPoint, _decode_DistributionPoint, _encode_DistributionPoint } from "../PKIX1Implicit88/DistributionPoint.ta.mjs";
// export { DistributionPoint, _decode_DistributionPoint, _encode_DistributionPoint } from "../PKIX1Implicit88/DistributionPoint.ta.mjs";


/**
 * @summary CRLDistributionPoints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLDistributionPoints  ::=  SEQUENCE SIZE (1..MAX) OF DistributionPoint
 * ```
 */
export
type CRLDistributionPoints = DistributionPoint[]; // SequenceOfType

let _cached_decoder_for_CRLDistributionPoints: $.ASN1Decoder<CRLDistributionPoints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CRLDistributionPoints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CRLDistributionPoints (el: _Element): CRLDistributionPoints {
    if (!_cached_decoder_for_CRLDistributionPoints) { _cached_decoder_for_CRLDistributionPoints = $._decodeSequenceOf<DistributionPoint>(() => _decode_DistributionPoint); }
    return _cached_decoder_for_CRLDistributionPoints(el);
}

let _cached_encoder_for_CRLDistributionPoints: $.ASN1Encoder<CRLDistributionPoints> | null = null;

/**
 * @summary Encodes a(n) CRLDistributionPoints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLDistributionPoints, encoded as an ASN.1 Element.
 */
export
function _encode_CRLDistributionPoints (value: CRLDistributionPoints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CRLDistributionPoints) { _cached_encoder_for_CRLDistributionPoints = $._encodeSequenceOf<DistributionPoint>(() => _encode_DistributionPoint, $.BER); }
    return _cached_encoder_for_CRLDistributionPoints(value, elGetter);
}


/* eslint-enable */
