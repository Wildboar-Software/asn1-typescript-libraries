/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNSClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNSClass     ::=  INTEGER (0..65535)
 * ```
 */
export
type DNSClass = INTEGER;

export
const _decode_DNSClass: $.ASN1Decoder<DNSClass> = $._decodeInteger;

export
const _encode_DNSClass: $.ASN1Encoder<DNSClass> = $._encodeInteger;

/* eslint-enable */
