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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_BioAPI_UNIT_EVENT_TYPE {
  insert = 0,
  remove = 1,
  fault = 2,
  sourcePresent = 3,
  sourceRemoved = 4,
}


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
 * ```
 *
 * @enum {number}
 */
export type BioAPI_UNIT_EVENT_TYPE =
  | _enum_for_BioAPI_UNIT_EVENT_TYPE
  | ENUMERATED;


/**
 * @summary BioAPI_UNIT_EVENT_TYPE_insert
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_insert: BioAPI_UNIT_EVENT_TYPE = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary insert
 * @constant
 * @type {number}
 */
export const insert: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_insert; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_UNIT_EVENT_TYPE_remove
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_remove: BioAPI_UNIT_EVENT_TYPE = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary remove
 * @constant
 * @type {number}
 */
export const remove: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_remove; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_UNIT_EVENT_TYPE_fault
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_fault: BioAPI_UNIT_EVENT_TYPE = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fault
 * @constant
 * @type {number}
 */
export const fault: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_fault; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_UNIT_EVENT_TYPE_sourcePresent
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_sourcePresent: BioAPI_UNIT_EVENT_TYPE = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sourcePresent
 * @constant
 * @type {number}
 */
export const sourcePresent: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_sourcePresent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_UNIT_EVENT_TYPE_sourceRemoved
 * @constant
 * @type {number}
 */
export const BioAPI_UNIT_EVENT_TYPE_sourceRemoved: BioAPI_UNIT_EVENT_TYPE = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sourceRemoved
 * @constant
 * @type {number}
 */
export const sourceRemoved: BioAPI_UNIT_EVENT_TYPE = BioAPI_UNIT_EVENT_TYPE_sourceRemoved; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_UNIT_EVENT_TYPE = $._decodeEnumerated;




export const _encode_BioAPI_UNIT_EVENT_TYPE = $._encodeEnumerated;


/* eslint-enable */
