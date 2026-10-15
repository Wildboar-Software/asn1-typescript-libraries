/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSCorrelationNumber
 * @description
 * 
 * Correlation number the LEMF uses to tie IRI to CC, IRI to IRI, and a LALS
 * report to the IRI that triggered it.
 * 
 * For an EPS bearer or tunnel it is unique per bearer or tunnel (clause
 * 10.1.3). Different nodes may allocate different numbers for the same
 * communication when both GTP and PMIP are used. Across a Gn/Gp handover the
 * same number is kept for that bearer in one IRI transaction (clause 10.0 and
 * clause 10.1.3).
 * 
 * When the event is UMTS or GPRS, the IRI comment says this parameter carries
 * the GPRS correlation number: unique per PDP context (clause 6.1.3). A CSCF
 * may also place a GPRS or EPS correlation number here; it does not apply to
 * HSS interception (clause 7.1.3). Table 13.3.1-2 uses it to correlate CC and
 * IRI when the target is a ProSe remote UE.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCorrelationNumber  ::=  OCTET STRING
 * ```
 */
export
type EPSCorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_EPSCorrelationNumber: $.ASN1Decoder<EPSCorrelationNumber> = $._decodeOctetString;
export const _encode_EPSCorrelationNumber: $.ASN1Encoder<EPSCorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
