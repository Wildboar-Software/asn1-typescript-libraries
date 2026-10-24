/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ATSSSContainer
 * @description
 * 
 * Identifies the steering, switching, and splitting features for the
 * MA-Confirmed MA PDU session. Also indicates whether MPTCP or ATSSS-LL is to
 * be used for ATSSS. See clause 9.11.4.22 of TS 24.501 [13].
 *
 * 3GPP TS 33.128, clause 6.2.3.2.7.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ATSSSContainer  ::=  OCTET STRING
 * ```
 */
export
type ATSSSContainer = OCTET_STRING; // OctetStringType
export const _decode_ATSSSContainer: $.ASN1Decoder<ATSSSContainer> = $._decodeOctetString;
export const _encode_ATSSSContainer: $.ASN1Encoder<ATSSSContainer> = $._encodeOctetString;


/* eslint-enable */
