/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNumber  ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type RoamingNumber = OCTET_STRING; // OctetStringType

export const _decode_RoamingNumber = (el: _Element): RoamingNumber => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 9) {
        throw new ASN1SizeError("RoamingNumber violates SIZE constraint");
    }
    return value;
};

export
const _encode_RoamingNumber: $.ASN1Encoder<RoamingNumber> = $._encodeOctetString;

/* eslint-enable */
