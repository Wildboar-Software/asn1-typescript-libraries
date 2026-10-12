/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingIndicator
 * @description
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
