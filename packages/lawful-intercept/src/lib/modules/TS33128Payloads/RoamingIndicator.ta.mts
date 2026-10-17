/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingIndicator
 * @description
 * 
 * Boolean which indicates if the serving PLMN is different from the HPLMN. See
 * TS 29.503 [25] clause 6.4.6.2.8.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingIndicator  ::=  BOOLEAN
 * ```
 */
export
type RoamingIndicator = BOOLEAN; // BooleanType
export const _decode_RoamingIndicator: $.ASN1Decoder<RoamingIndicator> = $._decodeBoolean;
export const _encode_RoamingIndicator: $.ASN1Encoder<RoamingIndicator> = $._encodeBoolean;


/* eslint-enable */
