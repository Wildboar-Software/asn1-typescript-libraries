/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationAreaCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaCode  ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type LocationAreaCode = OCTET_STRING; // OctetStringType

export const _decode_LocationAreaCode = (el: _Element): LocationAreaCode => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("LocationAreaCode violates SIZE constraint");
    }
    return value;
};

export
const _encode_LocationAreaCode: $.ASN1Encoder<LocationAreaCode> = $._encodeOctetString;

/* eslint-enable */
