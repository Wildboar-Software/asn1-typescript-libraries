/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxSignalInfoLength } from "./maxSignalInfoLength.va.mjs";

/**
 * @summary SignalInfo
 * @description
 *
 * Opaque octets of external signal information. Size 1..`maxSignalInfoLength`
 * (200). The named value is a theoretical maximum for one instance without
 * network-layer segmentation; the actual maximum may be lower when other
 * information elements share the same component.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalInfo  ::=  OCTET STRING (SIZE (1..maxSignalInfoLength))
 * ```
 */
export
type SignalInfo = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SignalInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SignalInfo = (el: _Element): SignalInfo => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxSignalInfoLength) {
        throw new ASN1SizeError("SignalInfo violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SignalInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalInfo, encoded as an ASN.1 Element.
 */
export const _encode_SignalInfo = $._encodeOctetString;


/* eslint-enable */
