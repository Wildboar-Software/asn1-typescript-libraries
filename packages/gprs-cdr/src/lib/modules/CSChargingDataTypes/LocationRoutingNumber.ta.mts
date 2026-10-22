/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationRoutingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationRoutingNumber  ::=  OCTET STRING ( SIZE( 5 ) )
 * ```
 */
export
type LocationRoutingNumber = OCTET_STRING; // OctetStringType

export const _decode_LocationRoutingNumber = (el: _Element): LocationRoutingNumber => {
    const value = $._decodeOctetString(el);
    if (value.length !== 5) {
        throw new ASN1SizeError("LocationRoutingNumber violates SIZE constraint");
    }
    return value;
};

export
const _encode_LocationRoutingNumber: $.ASN1Encoder<LocationRoutingNumber> = $._encodeOctetString;

/* eslint-enable */
