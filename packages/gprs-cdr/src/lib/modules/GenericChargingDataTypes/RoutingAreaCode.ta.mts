/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoutingAreaCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingAreaCode  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type RoutingAreaCode = OCTET_STRING; // OctetStringType

export const _decode_RoutingAreaCode = (el: _Element): RoutingAreaCode => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("RoutingAreaCode violates SIZE constraint");
    }
    return value;
};

export
const _encode_RoutingAreaCode: $.ASN1Encoder<RoutingAreaCode> = $._encodeOctetString;

/* eslint-enable */
