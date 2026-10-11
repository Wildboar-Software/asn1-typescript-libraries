/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCreasonValueOctetStr
 * @description
 * 
 * One octet string in the double-wrapped ServiceChange reason. The reason text
 * is BER-encoded as an IA5String, and that encoding is the contents of this
 * octet string (Annex A). `ServiceChangeReasonStr` is that IA5String before
 * wrapping.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCreasonValueOctetStr  ::=  OCTET STRING
 * ```
 */
export
type SCreasonValueOctetStr = OCTET_STRING; // OctetStringType
export const _decode_SCreasonValueOctetStr = $._decodeOctetString;
export const _encode_SCreasonValueOctetStr = $._encodeOctetString;


/* eslint-enable */
