/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmConCapability
 * @description
 *
 * Whether the entry can enter EMCON (radio silence).
 * The current believed state is {@link EmConState}.
 * ACP 133 SUPP-1(A) does not say which boolean value
 * means the entry is capable.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConCapability  ::=  BOOLEAN
 * ```
 */
export
type EmConCapability = BOOLEAN; // BooleanType
export const _decode_EmConCapability = $._decodeBoolean;
export const _encode_EmConCapability = $._encodeBoolean;


/* eslint-enable */
