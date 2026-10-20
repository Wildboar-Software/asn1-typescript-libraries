/* eslint-disable */
import {
    OCTET_STRING
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

export
const _decode_LocationRoutingNumber: $.ASN1Decoder<LocationRoutingNumber> = $._decodeOctetString;

export
const _encode_LocationRoutingNumber: $.ASN1Encoder<LocationRoutingNumber> = $._encodeOctetString;

/* eslint-enable */
