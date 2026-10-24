/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPBinV4Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPBinV4Address  ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type IPBinV4Address = OCTET_STRING; // OctetStringType

export const _decode_IPBinV4Address = (el: _Element): IPBinV4Address => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("IPBinV4Address violates SIZE constraint");
    }
    return value;
};

export
const _encode_IPBinV4Address: $.ASN1Encoder<IPBinV4Address> = $._encodeOctetString;

/* eslint-enable */
