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


export enum _enum_for_BioAPI_GUI_MOMENT {
  beforeStart = 0,
  during = 1,
  afterEnd = 2,
}


/**
 * @summary BioAPI_GUI_MOMENT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-MOMENT  ::=  ENUMERATED {beforeStart, during, afterEnd, ...
 *                                   }
 * ```
 *
 * @enum {number}
 */
export type BioAPI_GUI_MOMENT = _enum_for_BioAPI_GUI_MOMENT | ENUMERATED;


/**
 * @summary BioAPI_GUI_MOMENT_beforeStart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_beforeStart: BioAPI_GUI_MOMENT = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary beforeStart
 * @constant
 * @type {number}
 */
export const beforeStart: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_beforeStart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_MOMENT_during
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_during: BioAPI_GUI_MOMENT = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary during
 * @constant
 * @type {number}
 */
export const during: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_during; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_MOMENT_afterEnd
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_afterEnd: BioAPI_GUI_MOMENT = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary afterEnd
 * @constant
 * @type {number}
 */
export const afterEnd: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_afterEnd; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_GUI_MOMENT = $._decodeEnumerated;




export const _encode_BioAPI_GUI_MOMENT = $._encodeEnumerated;


/* eslint-enable */
