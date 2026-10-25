/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VisitedNetworkID
 * @description
 * 
 * PLMN identity of the PLMN serving the UE. Coded according to reference 53 of
 * 3GPP TS 33.108 (3GPP TS 29.273). 3GPP TS 33.108, annex B.14.1 and table 14.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisitedNetworkID  ::=  UTF8String
 * ```
 */
export
type VisitedNetworkID = UTF8String; // UTF8String
export const _decode_VisitedNetworkID: $.ASN1Decoder<VisitedNetworkID> = $._decodeUTF8String;
export const _encode_VisitedNetworkID: $.ASN1Encoder<VisitedNetworkID> = $._encodeUTF8String;


/* eslint-enable */
