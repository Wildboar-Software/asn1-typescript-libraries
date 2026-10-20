/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DomainName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainName  ::=  UTF8String (CONSTRAINED BY {
 * -- Conforms to the format of an (internationalized) domain name. -- })
 * ```
 */
export
type DomainName = UTF8String; // UTF8String

export
const _decode_DomainName: $.ASN1Decoder<DomainName> = $._decodeUTF8String;

export
const _encode_DomainName: $.ASN1Encoder<DomainName> = $._encodeUTF8String;

/* eslint-enable */
