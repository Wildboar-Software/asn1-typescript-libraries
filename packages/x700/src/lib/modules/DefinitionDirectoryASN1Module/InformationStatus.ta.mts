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

/**
 * @summary InformationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```@enum {number}
 */
export enum _enum_for_InformationStatus {
    active = 0,
    deleted = 1,
    preliminary = 2,
}

/**
 * @summary InformationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```@enum {number}
 */
export type InformationStatus = _enum_for_InformationStatus;

/**
 * @summary InformationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```@enum {number}
 */
export const InformationStatus = _enum_for_InformationStatus;

/**
 * @summary InformationStatus_active
 * @constant
 * @type {number}
 */
export const InformationStatus_active: InformationStatus =
    InformationStatus.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export const active: InformationStatus =
    InformationStatus.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InformationStatus_deleted
 * @constant
 * @type {number}
 */
export const InformationStatus_deleted: InformationStatus =
    InformationStatus.deleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export const deleted: InformationStatus =
    InformationStatus.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InformationStatus_preliminary
 * @constant
 * @type {number}
 */
export const InformationStatus_preliminary: InformationStatus =
    InformationStatus.preliminary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preliminary
 * @constant
 * @type {number}
 */
export const preliminary: InformationStatus =
    InformationStatus.preliminary; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_InformationStatus = $._decodeEnumerated;


export const _encode_InformationStatus = $._encodeEnumerated;


/* eslint-enable */
