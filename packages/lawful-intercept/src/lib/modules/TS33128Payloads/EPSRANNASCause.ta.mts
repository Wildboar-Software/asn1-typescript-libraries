/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSRANNASCause
 * @description
 * 
 * Shall be sent as an Octet String encoded as specified in TS 29.274 [87]
 * clause 8.103.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANNASCause  ::=  OCTET STRING
 * ```
 */
export
type EPSRANNASCause = OCTET_STRING; // OctetStringType
export const _decode_EPSRANNASCause: $.ASN1Decoder<EPSRANNASCause> = $._decodeOctetString;
export const _encode_EPSRANNASCause: $.ASN1Encoder<EPSRANNASCause> = $._encodeOctetString;


/* eslint-enable */
