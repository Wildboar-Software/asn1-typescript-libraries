/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSInterworkingIndicator
 * @description
 * 
 * Shall be set to TRUE if the 5GSIWKI flag in the Indication IE of the request
 * or response is set to 1. Indicates that the UE supports N1 mode and the PDN
 * connection is not restricted from interworking by the 5GS user subscription.
 * See TS 29.274 [87] clauses 7.2.1 and 8.12.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSInterworkingIndicator  ::=  BOOLEAN
 * ```
 */
export
type FiveGSInterworkingIndicator = BOOLEAN; // BooleanType
export const _decode_FiveGSInterworkingIndicator: $.ASN1Decoder<FiveGSInterworkingIndicator> = $._decodeBoolean;
export const _encode_FiveGSInterworkingIndicator: $.ASN1Encoder<FiveGSInterworkingIndicator> = $._encodeBoolean;


/* eslint-enable */
