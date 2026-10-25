/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationNumber  ::= 
 *   OCTET STRING
 * ```
 */
export
type LocationNumber = OCTET_STRING; // OctetStringType

export
const _decode_LocationNumber: $.ASN1Decoder<LocationNumber> = $._decodeOctetString;

export
const _encode_LocationNumber: $.ASN1Encoder<LocationNumber> = $._encodeOctetString;

/* eslint-enable */
