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

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_GUI_MOMENT */
export enum _enum_for_BioAPI_GUI_MOMENT {
  beforeStart = 0,
  during = 1,
  afterEnd = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT */
/**
 * @summary BioAPI_GUI_MOMENT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-MOMENT  ::=  ENUMERATED {beforeStart, during, afterEnd, ...
 *                                   }
 * ```@enum {number}
 */
export type BioAPI_GUI_MOMENT = _enum_for_BioAPI_GUI_MOMENT | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_beforeStart */
/**
 * @summary BioAPI_GUI_MOMENT_beforeStart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_beforeStart: BioAPI_GUI_MOMENT = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_beforeStart */

/* START_OF_SYMBOL_DEFINITION beforeStart */
/**
 * @summary beforeStart
 * @constant
 * @type {number}
 */
export const beforeStart: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_beforeStart; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION beforeStart */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_during */
/**
 * @summary BioAPI_GUI_MOMENT_during
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_during: BioAPI_GUI_MOMENT = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_during */

/* START_OF_SYMBOL_DEFINITION during */
/**
 * @summary during
 * @constant
 * @type {number}
 */
export const during: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_during; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION during */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_afterEnd */
/**
 * @summary BioAPI_GUI_MOMENT_afterEnd
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_afterEnd: BioAPI_GUI_MOMENT = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_afterEnd */

/* START_OF_SYMBOL_DEFINITION afterEnd */
/**
 * @summary afterEnd
 * @constant
 * @type {number}
 */
export const afterEnd: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_afterEnd; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION afterEnd */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_MOMENT */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_MOMENT */
export const _decode_BioAPI_GUI_MOMENT = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_MOMENT */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_MOMENT */
export const _encode_BioAPI_GUI_MOMENT = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_MOMENT */

/* eslint-enable */
