/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DomainMaintenanceLevel
 * @description
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
