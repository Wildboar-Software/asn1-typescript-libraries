/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSPDNConnectionReleaseScopeIndication
 * @description
 * 
 * This flag shall be present and set to True, if the request corresponds to
 * TAU/RAU/Handover with SGW change/SRNS Relocation Cancel Using S4 with SGW
 * change, Inter RAT handover Cancel procedure with SGW change, S1 Based
 * handover Cancel procedure with SGW change. If this parameter is absent, it
 * shall be interpreted as False.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionReleaseScopeIndication  ::=  BOOLEAN
 * ```
 */
export
type EPSPDNConnectionReleaseScopeIndication = BOOLEAN; // BooleanType
export const _decode_EPSPDNConnectionReleaseScopeIndication: $.ASN1Decoder<EPSPDNConnectionReleaseScopeIndication> = $._decodeBoolean;
export const _encode_EPSPDNConnectionReleaseScopeIndication: $.ASN1Encoder<EPSPDNConnectionReleaseScopeIndication> = $._encodeBoolean;


/* eslint-enable */
