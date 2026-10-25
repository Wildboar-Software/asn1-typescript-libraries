/* eslint-disable */
import {
    type BOOLEAN,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AfterHrsRepairAuth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AfterHrsRepairAuth  ::=  BOOLEAN
 * ```
 */
export
type AfterHrsRepairAuth = BOOLEAN; // BooleanType
export const _decode_AfterHrsRepairAuth: $.ASN1Decoder<boolean> = $._decodeBoolean;
export const _encode_AfterHrsRepairAuth: $.ASN1Encoder<boolean> = $._encodeBoolean;


/* eslint-enable */
