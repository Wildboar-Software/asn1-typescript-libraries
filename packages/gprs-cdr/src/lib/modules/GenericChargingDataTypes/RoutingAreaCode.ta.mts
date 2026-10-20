/* eslint-disable */
import {
    OCTET_STRING
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

export
const _decode_RoutingAreaCode: $.ASN1Decoder<RoutingAreaCode> = $._decodeOctetString;

export
const _encode_RoutingAreaCode: $.ASN1Encoder<RoutingAreaCode> = $._encodeOctetString;

/* eslint-enable */
