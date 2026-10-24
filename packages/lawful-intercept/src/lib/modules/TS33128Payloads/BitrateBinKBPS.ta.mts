/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BitrateBinKBPS
 * @description
 * 
 * Shall include the guaranteed downlink bitrate encoded as kilobits per second
 * in binary value (see TS 29.274 [87] clause 8.15) if present in the Request or
 * response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and 7.2.15), or
 * known in the context at the SGW or PGW.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BitrateBinKBPS  ::=  OCTET STRING
 * ```
 */
export
type BitrateBinKBPS = OCTET_STRING; // OctetStringType
export const _decode_BitrateBinKBPS: $.ASN1Decoder<BitrateBinKBPS> = $._decodeOctetString;
export const _encode_BitrateBinKBPS: $.ASN1Encoder<BitrateBinKBPS> = $._encodeOctetString;


/* eslint-enable */
