/* eslint-disable */
import {
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-UNIT-EVENT-TYPE-MASK  ::=  BIT STRING {
 *   insert(0), remove(1), fault(2), sourcePresent(3), sourceRemoved(4)
 * }(SIZE (32))
 * ```
 */
export type BioAPI_UNIT_EVENT_TYPE_MASK = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_insert */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_insert
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_insert: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_insert */

/* START_OF_SYMBOL_DEFINITION insert */
/**
 * @summary insert
 * @constant
 */
export const insert: number = BioAPI_UNIT_EVENT_TYPE_MASK_insert; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION insert */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_remove */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_remove
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_remove: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_remove */

/* START_OF_SYMBOL_DEFINITION remove */
/**
 * @summary remove
 * @constant
 */
export const remove: number = BioAPI_UNIT_EVENT_TYPE_MASK_remove; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION remove */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_fault */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_fault
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_fault: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_fault */

/* START_OF_SYMBOL_DEFINITION fault */
/**
 * @summary fault
 * @constant
 */
export const fault: number = BioAPI_UNIT_EVENT_TYPE_MASK_fault; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fault */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent */

/* START_OF_SYMBOL_DEFINITION sourcePresent */
/**
 * @summary sourcePresent
 * @constant
 */
export const sourcePresent: number = BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sourcePresent */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved */

/* START_OF_SYMBOL_DEFINITION sourceRemoved */
/**
 * @summary sourceRemoved
 * @constant
 */
export const sourceRemoved: number = BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sourceRemoved */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE_MASK */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_UNIT_EVENT_TYPE_MASK */
export const _decode_BioAPI_UNIT_EVENT_TYPE_MASK = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_UNIT_EVENT_TYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE_MASK */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_UNIT_EVENT_TYPE_MASK */
export const _encode_BioAPI_UNIT_EVENT_TYPE_MASK = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_UNIT_EVENT_TYPE_MASK */

/* eslint-enable */
