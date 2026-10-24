/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFMAAcceptedIndication
 * @description
 * 
 * Indicates that a request to establish an MA PDU session was accepted or if a
 * single access PDU session request was upgraded into a MA PDU session (see
 * clauses 4.22.2 and 4.22.3 of TS 23.502 [4]). It shall be set as follows: -
 * true: MA-Confirmed MA PDU session was established. - false: single access
 * MA-Upgrade-Allowed MA PDU session was established that may be upgraded to an
 * MA-Confirmed MA PDU session.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.7.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAAcceptedIndication  ::=  BOOLEAN
 * ```
 */
export
type SMFMAAcceptedIndication = BOOLEAN; // BooleanType
export const _decode_SMFMAAcceptedIndication: $.ASN1Decoder<SMFMAAcceptedIndication> = $._decodeBoolean;
export const _encode_SMFMAAcceptedIndication: $.ASN1Encoder<SMFMAAcceptedIndication> = $._encodeBoolean;


/* eslint-enable */
