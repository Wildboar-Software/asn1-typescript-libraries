/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GroupStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupStatus  ::=  BOOLEAN
 * ```
 */
export
type GroupStatus = BOOLEAN; // BooleanType
export const _decode_GroupStatus: $.ASN1Decoder<GroupStatus> = $._decodeBoolean;
export const _encode_GroupStatus: $.ASN1Encoder<GroupStatus> = $._encodeBoolean;


/* eslint-enable */
