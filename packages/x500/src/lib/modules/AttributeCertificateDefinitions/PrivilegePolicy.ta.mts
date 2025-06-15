/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PrivilegePolicy */
/**
 * @summary PrivilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivilegePolicy  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PrivilegePolicy = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION PrivilegePolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivilegePolicy */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivilegePolicy */

/* START_OF_SYMBOL_DEFINITION _decode_PrivilegePolicy */
export const _decode_PrivilegePolicy = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_PrivilegePolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivilegePolicy */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivilegePolicy */

/* START_OF_SYMBOL_DEFINITION _encode_PrivilegePolicy */
export const _encode_PrivilegePolicy = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_PrivilegePolicy */

/* eslint-enable */
