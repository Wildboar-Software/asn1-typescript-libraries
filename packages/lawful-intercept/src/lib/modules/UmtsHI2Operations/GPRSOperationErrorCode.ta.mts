/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSOperationErrorCode
 * @description
 * 
 * GMM cause or SM cause from 3GPP TS 24.008, without the information-element
 * identifier.
 * 
 * Mandatory reason for a failed PDP-context activation (table 6.5) and for a
 * PDP-context deactivation (table 6.14). Conditional reason for a failed attach
 * (table 6.3). Annex B.3 does not restate the cause-value assignments.
 * 
 * 3GPP TS 33.108, clause 6.5.1 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSOperationErrorCode  ::=  OCTET STRING
 * ```
 */
export
type GPRSOperationErrorCode = OCTET_STRING; // OctetStringType
export const _decode_GPRSOperationErrorCode: $.ASN1Decoder<GPRSOperationErrorCode> = $._decodeOctetString;
export const _encode_GPRSOperationErrorCode: $.ASN1Encoder<GPRSOperationErrorCode> = $._encodeOctetString;


/* eslint-enable */
