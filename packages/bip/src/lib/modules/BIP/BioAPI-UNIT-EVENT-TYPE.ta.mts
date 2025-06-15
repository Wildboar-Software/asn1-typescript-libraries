/* eslint-disable */
import {
  ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_UNIT_EVENT_TYPE */
export enum _enum_for_BioAPI_UNIT_EVENT_TYPE {
  insert = 0,
  remove = 1,
  fault = 2,
  sourcePresent = 3,
  sourceRemoved = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_UNIT_EVENT_TYPE */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-UNIT-EVENT-TYPE  ::=  ENUMERATED {
 *   insert, remove, fault, sourcePresent, sourceRemoved, ...
 *   }
 * ```@enum {number}
 */
export type BioAPI_UNIT_EVENT_TYPE =
  | _enum_for_BioAPI_UNIT_EVENT_TYPE
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_insert */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_insert
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_insert: BioAPI_UNIT_EVENT_TYPE = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_insert */

/* START_OF_SYMBOL_DEFINITION insert */
/**
 * @summary insert
 * @constant
 * @type {number}
 */
export const insert: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_insert; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION insert */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_remove */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_remove
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_remove: BioAPI_UNIT_EVENT_TYPE = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_remove */

/* START_OF_SYMBOL_DEFINITION remove */
/**
 * @summary remove
 * @constant
 * @type {number}
 */
export const remove: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_remove; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION remove */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_fault */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_fault
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_fault: BioAPI_UNIT_EVENT_TYPE = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_fault */

/* START_OF_SYMBOL_DEFINITION fault */
/**
 * @summary fault
 * @constant
 * @type {number}
 */
export const fault: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_fault; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fault */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_sourcePresent */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_sourcePresent
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_sourcePresent: BioAPI_UNIT_EVENT_TYPE = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_sourcePresent */

/* START_OF_SYMBOL_DEFINITION sourcePresent */
/**
 * @summary sourcePresent
 * @constant
 * @type {number}
 */
export const sourcePresent: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_sourcePresent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sourcePresent */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_sourceRemoved */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_sourceRemoved
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_sourceRemoved: BioAPI_UNIT_EVENT_TYPE = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_sourceRemoved */

/* START_OF_SYMBOL_DEFINITION sourceRemoved */
/**
 * @summary sourceRemoved
 * @constant
 * @type {number}
 */
export const sourceRemoved: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_sourceRemoved; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sourceRemoved */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_UNIT_EVENT_TYPE */
export const _decode_BioAPI_UNIT_EVENT_TYPE = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_UNIT_EVENT_TYPE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_UNIT_EVENT_TYPE */
export const _encode_BioAPI_UNIT_EVENT_TYPE = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_UNIT_EVENT_TYPE */

/* eslint-enable */
