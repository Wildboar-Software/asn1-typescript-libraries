/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSInterworkingWithoutN26
 * @description
 * 
 * Shall be set to TRUE if the 5GS Interworking without N26 Indication flag in
 * the Indication IE of the request or response is set to 1. If the 5GS
 * Interworking without N26 Indication flag in the Indication IE of the request
 * or response is set to 0 or not present, this parameter shall be set to FALSE.
 * See TS 29.274 [87] clauses 7.2.1 and 8.12.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSInterworkingWithoutN26  ::=  BOOLEAN
 * ```
 */
export
type FiveGSInterworkingWithoutN26 = BOOLEAN; // BooleanType
export const _decode_FiveGSInterworkingWithoutN26: $.ASN1Decoder<FiveGSInterworkingWithoutN26> = $._decodeBoolean;
export const _encode_FiveGSInterworkingWithoutN26: $.ASN1Encoder<FiveGSInterworkingWithoutN26> = $._encodeBoolean;


/* eslint-enable */
