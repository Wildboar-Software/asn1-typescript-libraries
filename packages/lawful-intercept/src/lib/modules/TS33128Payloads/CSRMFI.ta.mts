/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSRMFI
 * @description
 * 
 * Shall be present if the Create Session Request Message Forwarded Indication
 * (CSRMFI) is present in the Create Session Request (see TS 29.274 [87] clauses
 * 7.2.1 and 8.12). Indicates the Create Session Request message has been
 * forwarded by a PGW.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSRMFI  ::=  BOOLEAN
 * ```
 */
export
type CSRMFI = BOOLEAN; // BooleanType
export const _decode_CSRMFI: $.ASN1Decoder<CSRMFI> = $._decodeBoolean;
export const _encode_CSRMFI: $.ASN1Encoder<CSRMFI> = $._encodeBoolean;


/* eslint-enable */
