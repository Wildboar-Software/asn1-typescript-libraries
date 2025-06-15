/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DomainMaintenanceLevel */
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
/* END_OF_SYMBOL_DEFINITION DomainMaintenanceLevel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainMaintenanceLevel */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainMaintenanceLevel */

/* START_OF_SYMBOL_DEFINITION _decode_DomainMaintenanceLevel */
export const _decode_DomainMaintenanceLevel = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DomainMaintenanceLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainMaintenanceLevel */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainMaintenanceLevel */

/* START_OF_SYMBOL_DEFINITION _encode_DomainMaintenanceLevel */
export const _encode_DomainMaintenanceLevel = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DomainMaintenanceLevel */

/* eslint-enable */
