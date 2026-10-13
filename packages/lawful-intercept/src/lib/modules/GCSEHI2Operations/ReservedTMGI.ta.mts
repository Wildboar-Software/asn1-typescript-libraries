/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReservedTMGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservedTMGI  ::=  OCTET STRING
 * ```
 */
export
type ReservedTMGI = OCTET_STRING; // OctetStringType
export const _decode_ReservedTMGI: $.ASN1Decoder<ReservedTMGI> = $._decodeOctetString;
export const _encode_ReservedTMGI: $.ASN1Encoder<ReservedTMGI> = $._encodeOctetString;


/* eslint-enable */
