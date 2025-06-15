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

/* START_OF_SYMBOL_DEFINITION _enum_for_InformationStatus */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_InformationStatus */

/* START_OF_SYMBOL_DEFINITION InformationStatus */
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
/* END_OF_SYMBOL_DEFINITION InformationStatus */

/* START_OF_SYMBOL_DEFINITION InformationStatus */
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
/* END_OF_SYMBOL_DEFINITION InformationStatus */

/* START_OF_SYMBOL_DEFINITION InformationStatus_active */
/**
 * @summary InformationStatus_active
 * @constant
 * @type {number}
 */
export const InformationStatus_active: InformationStatus =
    InformationStatus.active; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationStatus_active */

/* START_OF_SYMBOL_DEFINITION active */
/**
 * @summary active
 * @constant
 * @type {number}
 */
export const active: InformationStatus =
    InformationStatus.active; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION active */

/* START_OF_SYMBOL_DEFINITION InformationStatus_deleted */
/**
 * @summary InformationStatus_deleted
 * @constant
 * @type {number}
 */
export const InformationStatus_deleted: InformationStatus =
    InformationStatus.deleted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationStatus_deleted */

/* START_OF_SYMBOL_DEFINITION deleted */
/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export const deleted: InformationStatus =
    InformationStatus.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION deleted */

/* START_OF_SYMBOL_DEFINITION InformationStatus_preliminary */
/**
 * @summary InformationStatus_preliminary
 * @constant
 * @type {number}
 */
export const InformationStatus_preliminary: InformationStatus =
    InformationStatus.preliminary; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationStatus_preliminary */

/* START_OF_SYMBOL_DEFINITION preliminary */
/**
 * @summary preliminary
 * @constant
 * @type {number}
 */
export const preliminary: InformationStatus =
    InformationStatus.preliminary; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION preliminary */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationStatus */

/* START_OF_SYMBOL_DEFINITION _decode_InformationStatus */
export const _decode_InformationStatus = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_InformationStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationStatus */

/* START_OF_SYMBOL_DEFINITION _encode_InformationStatus */
export const _encode_InformationStatus = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_InformationStatus */

/* eslint-enable */
