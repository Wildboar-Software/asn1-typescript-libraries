/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSNetworkPolicy
 * @description
 * 
 * Indicates network policy information to the UE. Encoded per TS 24.301 [38]
 * clause 9.9.3.52.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSNetworkPolicy  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type EPSNetworkPolicy = OCTET_STRING; // OctetStringType
export const _decode_EPSNetworkPolicy: $.ASN1Decoder<EPSNetworkPolicy> = (el: _Element): EPSNetworkPolicy => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("EPSNetworkPolicy violates SIZE constraint");
    }
    return value;
};
export const _encode_EPSNetworkPolicy: $.ASN1Encoder<EPSNetworkPolicy> = $._encodeOctetString;


/* eslint-enable */
