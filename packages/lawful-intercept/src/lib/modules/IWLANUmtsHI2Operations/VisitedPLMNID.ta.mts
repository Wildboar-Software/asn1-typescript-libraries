/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VisitedPLMNID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisitedPLMNID  ::=  OCTET STRING
 * ```
 */
export
type VisitedPLMNID = OCTET_STRING; // OctetStringType

export const _decode_VisitedPLMNID: $.ASN1Decoder<VisitedPLMNID> = $._decodeOctetString;

export const _encode_VisitedPLMNID: $.ASN1Encoder<VisitedPLMNID> = $._encodeOctetString;


/* eslint-enable */
