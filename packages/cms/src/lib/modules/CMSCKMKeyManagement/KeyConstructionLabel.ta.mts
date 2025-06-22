/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyConstructionLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionLabel  ::=  INTEGER
 * ```
 */
export type KeyConstructionLabel = INTEGER;




export const _decode_KeyConstructionLabel = $._decodeInteger;




export const _encode_KeyConstructionLabel = $._encodeInteger;


/* eslint-enable */
