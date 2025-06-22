/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


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
