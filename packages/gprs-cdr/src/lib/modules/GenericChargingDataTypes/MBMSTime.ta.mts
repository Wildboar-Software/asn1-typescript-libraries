/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSTime    ::=  OCTET STRING ( SIZE( 8 ) )
 * ```
 */
export
type MBMSTime = OCTET_STRING; // OctetStringType

export const _decode_MBMSTime = (el: _Element): MBMSTime => {
    const value = $._decodeOctetString(el);
    if (value.length !== 8) {
        throw new ASN1SizeError("MBMSTime violates SIZE constraint");
    }
    return value;
};

export
const _encode_MBMSTime: $.ASN1Encoder<MBMSTime> = $._encodeOctetString;

/* eslint-enable */
