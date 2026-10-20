/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAvailable  ::=  OCTET STRING(SIZE (minIPAvailableLength..maxIPAvailableLength))
 * ```
 */
export
type IPAvailable = OCTET_STRING; // OctetStringType

export
const _decode_IPAvailable: $.ASN1Decoder<IPAvailable> = $._decodeOctetString;

export
const _encode_IPAvailable: $.ASN1Encoder<IPAvailable> = $._encodeOctetString;

/* eslint-enable */
