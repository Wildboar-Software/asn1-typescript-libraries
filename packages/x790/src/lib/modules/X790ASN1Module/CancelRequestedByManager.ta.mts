/* eslint-disable */
import {
    BOOLEAN,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelRequestedByManager
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelRequestedByManager  ::=  BOOLEAN
 * ```
 */
export
type CancelRequestedByManager = BOOLEAN; // BooleanType
export const _decode_CancelRequestedByManager = $._decodeBoolean;
export const _encode_CancelRequestedByManager = $._encodeBoolean;


/* eslint-enable */
