/* eslint-disable */
import {
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CaseId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CaseId  ::=  VisibleString (SIZE(1..25, ...))
 * ```
 */
export
type CaseId = VisibleString; // VisibleString
export const _decode_CaseId: $.ASN1Decoder<CaseId> = $._decodeVisibleString;
export const _encode_CaseId: $.ASN1Encoder<CaseId> = $._encodeVisibleString;


/* eslint-enable */
