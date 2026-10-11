/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BandwidthExt
 * @description
 *
 * Extended bit rate in kilobits per second, used in AMBR extended
 * uplink/downlink fields (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BandwidthExt  ::=  INTEGER
 * ```
 */
export
type BandwidthExt = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) BandwidthExt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BandwidthExt = $._decodeInteger;

/**
 * @summary Encodes a(n) BandwidthExt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BandwidthExt, encoded as an ASN.1 Element.
 */
export const _encode_BandwidthExt = $._encodeInteger;


/* eslint-enable */
