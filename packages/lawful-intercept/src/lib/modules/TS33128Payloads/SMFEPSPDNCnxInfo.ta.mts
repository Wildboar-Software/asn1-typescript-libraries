/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFEPSPDNCnxInfo
 * @description
 * 
 * Indicates if the PDU session may be moved to EPS during its lifetime (see TS
 * 29.502 [16] clause 6.1.6.2.31). Include if known.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.7.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFEPSPDNCnxInfo  ::=  UTF8String
 * ```
 */
export
type SMFEPSPDNCnxInfo = UTF8String; // UTF8String
export const _decode_SMFEPSPDNCnxInfo: $.ASN1Decoder<SMFEPSPDNCnxInfo> = $._decodeUTF8String;
export const _encode_SMFEPSPDNCnxInfo: $.ASN1Encoder<SMFEPSPDNCnxInfo> = $._encodeUTF8String;


/* eslint-enable */
