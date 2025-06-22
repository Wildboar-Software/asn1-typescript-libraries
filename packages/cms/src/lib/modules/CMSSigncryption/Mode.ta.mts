/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mode  ::=  MODE.&id({ProcessingModes})
 * ```
 */
export type Mode = OBJECT_IDENTIFIER; // ObjectClassFieldType




export const _decode_Mode = $._decodeObjectIdentifier;




export const _encode_Mode = $._encodeObjectIdentifier;


/* eslint-enable */
