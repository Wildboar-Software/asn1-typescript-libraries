/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSNetworkCapability
 * @description
 *
 * This MS Network Capability field contains the MS network capability value
 * of the MS network capability information element of the served MS on PDP
 * context activation or on GPRS attachment as defined in TS 24.008 [208].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.33.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSNetworkCapability  ::=  OCTET STRING ( SIZE( 1 .. 8 ) )
 * ```
 */
export
type MSNetworkCapability = OCTET_STRING; // OctetStringType

export const _decode_MSNetworkCapability = (el: _Element): MSNetworkCapability => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("MSNetworkCapability violates SIZE constraint");
    }
    return value;
};

export
const _encode_MSNetworkCapability: $.ASN1Encoder<MSNetworkCapability> = $._encodeOctetString;

/* eslint-enable */
