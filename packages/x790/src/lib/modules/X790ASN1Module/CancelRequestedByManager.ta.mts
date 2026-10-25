/* eslint-disable */
import {
    type BOOLEAN,
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
export const _decode_CancelRequestedByManager: $.ASN1Decoder<boolean> = $._decodeBoolean;
export const _encode_CancelRequestedByManager: $.ASN1Encoder<boolean> = $._encodeBoolean;


/* eslint-enable */
