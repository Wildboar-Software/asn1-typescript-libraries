/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSISDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSISDN      ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type MSISDN = OCTET_STRING; // OctetStringType

export
const _decode_MSISDN: $.ASN1Decoder<MSISDN> = $._decodeOctetString;

export
const _encode_MSISDN: $.ASN1Encoder<MSISDN> = $._encodeOctetString;

/* eslint-enable */
