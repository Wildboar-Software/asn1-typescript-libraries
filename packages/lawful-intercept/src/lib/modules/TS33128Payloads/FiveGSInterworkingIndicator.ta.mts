/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSInterworkingIndicator
 * @description
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
