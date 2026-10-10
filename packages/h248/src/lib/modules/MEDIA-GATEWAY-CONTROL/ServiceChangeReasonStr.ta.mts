/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceChangeReasonStr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeReasonStr  ::=  IA5String
 * ```
 */
export
type ServiceChangeReasonStr = IA5String; // IA5String
export const _decode_ServiceChangeReasonStr = $._decodeIA5String;
export const _encode_ServiceChangeReasonStr = $._encodeIA5String;


/* eslint-enable */
