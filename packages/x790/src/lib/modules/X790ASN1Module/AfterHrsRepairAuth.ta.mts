/* eslint-disable */
import {
    BOOLEAN,
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
export const _decode_AfterHrsRepairAuth = $._decodeBoolean;
export const _encode_AfterHrsRepairAuth = $._encodeBoolean;


/* eslint-enable */
