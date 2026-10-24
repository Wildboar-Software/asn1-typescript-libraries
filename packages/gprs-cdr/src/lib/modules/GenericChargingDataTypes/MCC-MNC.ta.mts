/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCC_MNC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCC-MNC     ::=  OCTET STRING ( SIZE( 3 ) )
 * ```
 */
export
type MCC_MNC = OCTET_STRING; // OctetStringType

export const _decode_MCC_MNC = (el: _Element): MCC_MNC => {
    const value = $._decodeOctetString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("MCC_MNC violates SIZE constraint");
    }
    return value;
};

export
const _encode_MCC_MNC: $.ASN1Encoder<MCC_MNC> = $._encodeOctetString;

/* eslint-enable */
