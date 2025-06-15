/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary ArchiveCutoff
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArchiveCutoff  ::=  GeneralizedTime
 * ```
 */
export type ArchiveCutoff = GeneralizedTime; // GeneralizedTime




export const _decode_ArchiveCutoff = $._decodeGeneralizedTime;




export const _encode_ArchiveCutoff = $._encodeGeneralizedTime;


/* eslint-enable */
