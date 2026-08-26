/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Version
 * @description
 *
 * Version INTEGER for CKM recipient info structures (ITU-T X.894 | ISO/IEC 24824-4 Annex A.15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  INTEGER(1..MAX)
 * ```
 */
export type Version = INTEGER;




export const _decode_Version = $._decodeInteger;




export const _encode_Version = $._encodeInteger;


/* eslint-enable */
