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

/* START_OF_SYMBOL_DEFINITION _enum_for_DesignatedISChange */
/**
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```@enum {number}
 */
export enum _enum_for_DesignatedISChange {
  resigned = 0,
  elected = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION DesignatedISChange */
/**
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```@enum {number}
 */
export type DesignatedISChange = _enum_for_DesignatedISChange;
/* END_OF_SYMBOL_DEFINITION DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION DesignatedISChange */
/**
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```@enum {number}
 */
export const DesignatedISChange = _enum_for_DesignatedISChange;
/* END_OF_SYMBOL_DEFINITION DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION DesignatedISChange_resigned */
/**
 * @summary DesignatedISChange_resigned
 * @constant
 * @type {number}
 */
export const DesignatedISChange_resigned: DesignatedISChange =
  DesignatedISChange.resigned; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DesignatedISChange_resigned */

/* START_OF_SYMBOL_DEFINITION resigned */
/**
 * @summary resigned
 * @constant
 * @type {number}
 */
export const resigned: DesignatedISChange =
  DesignatedISChange.resigned; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resigned */

/* START_OF_SYMBOL_DEFINITION DesignatedISChange_elected */
/**
 * @summary DesignatedISChange_elected
 * @constant
 * @type {number}
 */
export const DesignatedISChange_elected: DesignatedISChange =
  DesignatedISChange.elected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DesignatedISChange_elected */

/* START_OF_SYMBOL_DEFINITION elected */
/**
 * @summary elected
 * @constant
 * @type {number}
 */
export const elected: DesignatedISChange =
  DesignatedISChange.elected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION elected */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DesignatedISChange */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION _decode_DesignatedISChange */
export const _decode_DesignatedISChange = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DesignatedISChange */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION _encode_DesignatedISChange */
export const _encode_DesignatedISChange = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DesignatedISChange */

/* eslint-enable */
