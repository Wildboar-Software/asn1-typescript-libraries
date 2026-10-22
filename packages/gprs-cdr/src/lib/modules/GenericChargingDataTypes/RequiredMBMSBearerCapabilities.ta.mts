/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequiredMBMSBearerCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequiredMBMSBearerCapabilities  ::=  OCTET STRING ( SIZE( 3 .. 14 ) )
 * ```
 */
export
type RequiredMBMSBearerCapabilities = OCTET_STRING; // OctetStringType

export const _decode_RequiredMBMSBearerCapabilities = (el: _Element): RequiredMBMSBearerCapabilities => {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 14) {
        throw new ASN1SizeError("RequiredMBMSBearerCapabilities violates SIZE constraint");
    }
    return value;
};

export
const _encode_RequiredMBMSBearerCapabilities: $.ASN1Encoder<RequiredMBMSBearerCapabilities> = $._encodeOctetString;

/* eslint-enable */
