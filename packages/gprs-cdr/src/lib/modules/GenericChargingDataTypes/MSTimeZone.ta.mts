/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSTimeZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSTimeZone  ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type MSTimeZone = OCTET_STRING; // OctetStringType

export const _decode_MSTimeZone = (el: _Element): MSTimeZone => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("MSTimeZone violates SIZE constraint");
    }
    return value;
};

export
const _encode_MSTimeZone: $.ASN1Encoder<MSTimeZone> = $._encodeOctetString;

/* eslint-enable */
