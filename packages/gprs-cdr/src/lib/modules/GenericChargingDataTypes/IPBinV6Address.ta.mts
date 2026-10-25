/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPBinV6Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPBinV6Address  ::=  OCTET STRING ( SIZE( 16 ) )
 * ```
 */
export
type IPBinV6Address = OCTET_STRING; // OctetStringType

export const _decode_IPBinV6Address = (el: _Element): IPBinV6Address => {
    const value = $._decodeOctetString(el);
    if (value.length !== 16) {
        throw new ASN1SizeError("IPBinV6Address violates SIZE constraint");
    }
    return value;
};

export
const _encode_IPBinV6Address: $.ASN1Encoder<IPBinV6Address> = $._encodeOctetString;

/* eslint-enable */
