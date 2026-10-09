/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SS_Code
 * @description
 *
 * Identifies a single supplementary service, a group of supplementary services,
 * or all supplementary services, as defined in 3GPP TS 22.004. MAP includes
 * CLIP, CLIR, COLP, COLR, CNAP, all call forwarding services (including Call
 * Deflection), CW, HOLD, MPTY, CUG, all charging services, all call restriction
 * services, ECT, eMLPP, CCBS-A, CCBS-B, all LCS privacy exceptions, MO-LR, and
 * Multicall (3GPP TS 29.002 V19.1.0 clauses 7.6.4.1 and 17.7.5).
 *
 * One octet: bits 8-5 are the group; bits 4-1 are the specific service.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-Code  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type SS_Code = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SS_Code
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SS_Code = (el: _Element): SS_Code => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("SS_Code violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SS_Code into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_Code, encoded as an ASN.1 Element.
 */
export const _encode_SS_Code = $._encodeOctetString;


/* eslint-enable */
