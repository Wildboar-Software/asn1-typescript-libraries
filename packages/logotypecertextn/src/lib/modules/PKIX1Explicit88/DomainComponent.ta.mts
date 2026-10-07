/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DomainComponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainComponent  ::=      IA5String
 * ```
 */
export
type DomainComponent = IA5String; // IA5String
export const _decode_DomainComponent = $._decodeIA5String;
export const _encode_DomainComponent = $._encodeIA5String;


/* eslint-enable */
