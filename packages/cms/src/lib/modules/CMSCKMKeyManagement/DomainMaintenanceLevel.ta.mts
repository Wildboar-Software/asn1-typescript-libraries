/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DomainMaintenanceLevel
 * @description
 *
 * CKM domain maintenance level (ITU-T X.894 | ISO/IEC 24824-4 Annex A.15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainMaintenanceLevel  ::=  INTEGER (1..MAX)
 * ```
 */
export type DomainMaintenanceLevel = INTEGER;




export const _decode_DomainMaintenanceLevel = $._decodeInteger;




export const _encode_DomainMaintenanceLevel = $._encodeInteger;


/* eslint-enable */
