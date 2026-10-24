/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Reason
 * @description
 * 
 * An undifferentiated reason string. Used for conference-end and for the
 * failure alternatives. The specification does not define the contents.
 *
 * Table 11.2 also names a parameter `reason` for why a party left. That
 * parameter is not a component of the IRI. Do not assume this value is that
 * party-leave reason. 3GPP TS 33.108, clause 11.5 and annex B.11.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason  ::=  OCTET STRING
 * ```
 */
export
type Reason = OCTET_STRING; // OctetStringType
export const _decode_Reason: $.ASN1Decoder<Reason> = $._decodeOctetString;
export const _encode_Reason: $.ASN1Encoder<Reason> = $._encodeOctetString;


/* eslint-enable */
