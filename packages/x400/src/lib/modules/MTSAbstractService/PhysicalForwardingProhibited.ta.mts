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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_PhysicalForwardingProhibited {
    physical_forwarding_allowed = 0,
    physical_forwarding_prohibited = 1,
}

/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```
 *
 * @enum {number}
 */
export type PhysicalForwardingProhibited = _enum_for_PhysicalForwardingProhibited;

/**
 * @summary PhysicalForwardingProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingProhibited  ::=  ENUMERATED {
 *   physical-forwarding-allowed(0), physical-forwarding-prohibited(1)}
 * ```
 *
 * @enum {number}
 */
export const PhysicalForwardingProhibited = _enum_for_PhysicalForwardingProhibited;

/**
 * @summary PhysicalForwardingProhibited_physical_forwarding_allowed
 * @constant
 * @type {number}
 */
export const PhysicalForwardingProhibited_physical_forwarding_allowed: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary physical_forwarding_allowed
 * @constant
 * @type {number}
 */
export const physical_forwarding_allowed: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PhysicalForwardingProhibited_physical_forwarding_prohibited
 * @constant
 * @type {number}
 */
export const PhysicalForwardingProhibited_physical_forwarding_prohibited: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary physical_forwarding_prohibited
 * @constant
 * @type {number}
 */
export const physical_forwarding_prohibited: PhysicalForwardingProhibited =
    PhysicalForwardingProhibited.physical_forwarding_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_PhysicalForwardingProhibited = $._decodeEnumerated;


export const _encode_PhysicalForwardingProhibited = $._encodeEnumerated;


/* eslint-enable */
