/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary KEA_Parms_Id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEA-Parms-Id  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export type KEA_Parms_Id = OCTET_STRING; // OctetStringType


export const _decode_KEA_Parms_Id = $._decodeOctetString;


export const _encode_KEA_Parms_Id = $._encodeOctetString;


/* eslint-enable */
