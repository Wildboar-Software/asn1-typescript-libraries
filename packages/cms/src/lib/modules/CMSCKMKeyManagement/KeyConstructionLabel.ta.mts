/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyConstructionLabel
 * @description
 *
 * CKM key-construction label/attribute (ITU-T X.894 | ISO/IEC 24824-4 Annex A.15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionLabel  ::=  INTEGER
 * ```
 */
export type KeyConstructionLabel = INTEGER;




export const _decode_KeyConstructionLabel: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_KeyConstructionLabel: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
