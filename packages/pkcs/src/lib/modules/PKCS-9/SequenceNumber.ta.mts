/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumber  ::=  INTEGER (1..MAX)
 * ```
 */
export type SequenceNumber = INTEGER;




export const _decode_SequenceNumber = $._decodeInteger;




export const _encode_SequenceNumber = $._encodeInteger;


/* eslint-enable */
