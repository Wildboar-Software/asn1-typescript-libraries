/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNS_RR_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNS-RR-Type  ::=  INTEGER (0..65535)
 * ```
 */
export
type DNS_RR_Type = INTEGER;

export
const _decode_DNS_RR_Type: $.ASN1Decoder<DNS_RR_Type> = $._decodeInteger;

export
const _encode_DNS_RR_Type: $.ASN1Encoder<DNS_RR_Type> = $._encodeInteger;

/* eslint-enable */
