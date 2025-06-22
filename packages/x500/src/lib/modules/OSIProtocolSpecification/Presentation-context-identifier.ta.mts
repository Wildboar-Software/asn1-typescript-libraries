/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Presentation_context_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier  ::=  INTEGER(1..127, ..., 128..MAX)
 * ```
 */
export type Presentation_context_identifier = INTEGER;


export const _decode_Presentation_context_identifier = $._decodeInteger;


export const _encode_Presentation_context_identifier = $._encodeInteger;


/* eslint-enable */
