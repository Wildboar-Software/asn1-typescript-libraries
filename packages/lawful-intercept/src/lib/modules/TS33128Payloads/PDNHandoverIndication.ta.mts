/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNHandoverIndication
 * @description
 * 
 * Shall be present if the Handover Indication is set to 1 in the Create Session
 * Request (see TS 29.274 [87] clauses 7.2.1 and 8.12).
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNHandoverIndication  ::=  BOOLEAN
 * ```
 */
export
type PDNHandoverIndication = BOOLEAN; // BooleanType
export const _decode_PDNHandoverIndication: $.ASN1Decoder<PDNHandoverIndication> = $._decodeBoolean;
export const _encode_PDNHandoverIndication: $.ASN1Encoder<PDNHandoverIndication> = $._encodeBoolean;


/* eslint-enable */
