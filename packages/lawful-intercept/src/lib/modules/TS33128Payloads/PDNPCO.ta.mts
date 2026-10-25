/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNPCO
 * @description
 * 
 * Shall be present if the Additional Protocol Configuration Options IE is
 * present in the response message. The value of this parameter shall contain a
 * copy of the value field of the PCO IE of the response message (see TS 29.274
 * [87] clause 8.94 starting with octet 5).
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNPCO  ::=  OCTET STRING
 * ```
 */
export
type PDNPCO = OCTET_STRING; // OctetStringType
export const _decode_PDNPCO: $.ASN1Decoder<PDNPCO> = $._decodeOctetString;
export const _encode_PDNPCO: $.ASN1Encoder<PDNPCO> = $._encodeOctetString;


/* eslint-enable */
