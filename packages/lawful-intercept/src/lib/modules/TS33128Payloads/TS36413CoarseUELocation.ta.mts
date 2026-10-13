/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TS36413CoarseUELocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TS36413CoarseUELocation  ::=  OCTET STRING
 * ```
 */
export
type TS36413CoarseUELocation = OCTET_STRING; // OctetStringType
export const _decode_TS36413CoarseUELocation: $.ASN1Decoder<TS36413CoarseUELocation> = $._decodeOctetString;
export const _encode_TS36413CoarseUELocation: $.ASN1Encoder<TS36413CoarseUELocation> = $._encodeOctetString;


/* eslint-enable */
