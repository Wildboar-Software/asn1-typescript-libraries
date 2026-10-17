/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HFCNodeID
 * @description
 * 
 * Contains the identifier of the HFC node Id as described in TS 29.571 [17]
 * clause 5.4.4.36 and table 5.4.2-1. It is provisioned by the wireline operator
 * as part of wireline operations and may contain up to six characters.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HFCNodeID  ::=  UTF8String
 * ```
 */
export
type HFCNodeID = UTF8String; // UTF8String
export const _decode_HFCNodeID: $.ASN1Decoder<HFCNodeID> = $._decodeUTF8String;
export const _encode_HFCNodeID: $.ASN1Encoder<HFCNodeID> = $._encodeUTF8String;


/* eslint-enable */
