/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ArchiveCutoff
 * @description
 *
 * Archive cutoff date for the Archive Cutoff singleExtension
 * (`id-pkix-ocsp-archive-cutoff`)
 * ([RFC 6960 §4.4.4](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.4)).
 * Obtained by subtracting the responder's retention interval from
 * `producedAt`. Used to help prove that a digital signature was (or
 * was not) reliable on the date it was produced even if the
 * certificate needed to validate the signature has long since
 * expired. Example: with a 7-year retention policy and status
 * produced at `t1`, the value is (`t1` − 7 years).
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
