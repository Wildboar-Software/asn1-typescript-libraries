/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSUENetworkCapability
 * @description
 * 
 * Contains the target UE network capability information encoded per TS 24.301
 * [51] clause 9.9.3.34, omitting the first two octets.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSUENetworkCapability  ::=  OCTET STRING (SIZE(2..13))
 * ```
 */
export
type EPSUENetworkCapability = OCTET_STRING; // OctetStringType
export const _decode_EPSUENetworkCapability: $.ASN1Decoder<EPSUENetworkCapability> = (el: _Element): EPSUENetworkCapability => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 13) {
        throw new ASN1SizeError("EPSUENetworkCapability violates SIZE constraint");
    }
    return value;
};
export const _encode_EPSUENetworkCapability: $.ASN1Encoder<EPSUENetworkCapability> = $._encodeOctetString;


/* eslint-enable */
