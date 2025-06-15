/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_PhysicalForwardingProhibited */
/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```@enum {number}
 */
export enum _enum_for_PhysicalForwardingProhibited {
    physical_forwarding_allowed = 0,
    physical_forwarding_prohibited = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited */
/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```@enum {number}
 */
export type PhysicalForwardingProhibited = _enum_for_PhysicalForwardingProhibited;
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited */
/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```@enum {number}
 */
export const PhysicalForwardingProhibited = _enum_for_PhysicalForwardingProhibited;
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited_physical_forwarding_allowed */
/**
 * @summary PhysicalForwardingProhibited_physical_forwarding_allowed
 * @constant
 * @type {number}
 */
export const PhysicalForwardingProhibited_physical_forwarding_allowed: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_allowed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited_physical_forwarding_allowed */

/* START_OF_SYMBOL_DEFINITION physical_forwarding_allowed */
/**
 * @summary physical_forwarding_allowed
 * @constant
 * @type {number}
 */
export const physical_forwarding_allowed: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_forwarding_allowed */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited_physical_forwarding_prohibited */
/**
 * @summary PhysicalForwardingProhibited_physical_forwarding_prohibited
 * @constant
 * @type {number}
 */
export const PhysicalForwardingProhibited_physical_forwarding_prohibited: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingProhibited_physical_forwarding_prohibited */

/* START_OF_SYMBOL_DEFINITION physical_forwarding_prohibited */
/**
 * @summary physical_forwarding_prohibited
 * @constant
 * @type {number}
 */
export const physical_forwarding_prohibited: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_forwarding_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalForwardingProhibited */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalForwardingProhibited */
export const _decode_PhysicalForwardingProhibited = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalForwardingProhibited */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalForwardingProhibited */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalForwardingProhibited */
export const _encode_PhysicalForwardingProhibited = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalForwardingProhibited */

/* eslint-enable */
