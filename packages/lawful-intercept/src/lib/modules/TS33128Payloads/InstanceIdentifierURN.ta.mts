/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InstanceIdentifierURN
 * @description
 * 
 * Identity of the target MC service terminal.
 *
 * 3GPP TS 33.128, clause 7.20.2.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InstanceIdentifierURN  ::=  UTF8String
 * ```
 */
export
type InstanceIdentifierURN = UTF8String; // UTF8String
export const _decode_InstanceIdentifierURN: $.ASN1Decoder<InstanceIdentifierURN> = $._decodeUTF8String;
export const _encode_InstanceIdentifierURN: $.ASN1Encoder<InstanceIdentifierURN> = $._encodeUTF8String;


/* eslint-enable */
