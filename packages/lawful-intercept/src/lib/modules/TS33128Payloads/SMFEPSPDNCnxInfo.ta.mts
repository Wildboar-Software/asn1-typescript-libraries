/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFEPSPDNCnxInfo
 * @description
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
