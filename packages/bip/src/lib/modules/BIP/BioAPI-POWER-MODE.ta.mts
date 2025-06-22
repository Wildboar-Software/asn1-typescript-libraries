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
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_BioAPI_POWER_MODE {
  normal = 0,
  detect = 1,
  sleep = 2,
}


/**
 * @summary BioAPI_POWER_MODE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-POWER-MODE  ::=  ENUMERATED {normal, detect, sleep, ...
 *                                   }
 * ```
 *
 * @enum {number}
 */
export type BioAPI_POWER_MODE = _enum_for_BioAPI_POWER_MODE | ENUMERATED;


/**
 * @summary BioAPI_POWER_MODE_normal
 * @constant
 * @type {number}
 */
export const BioAPI_POWER_MODE_normal: BioAPI_POWER_MODE = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary normal
 * @constant
 * @type {number}
 */
export const normal: BioAPI_POWER_MODE = BioAPI_POWER_MODE_normal; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_POWER_MODE_detect
 * @constant
 * @type {number}
 */
export const BioAPI_POWER_MODE_detect: BioAPI_POWER_MODE = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary detect
 * @constant
 * @type {number}
 */
export const detect: BioAPI_POWER_MODE = BioAPI_POWER_MODE_detect; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_POWER_MODE_sleep
 * @constant
 * @type {number}
 */
export const BioAPI_POWER_MODE_sleep: BioAPI_POWER_MODE = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sleep
 * @constant
 * @type {number}
 */
export const sleep: BioAPI_POWER_MODE = BioAPI_POWER_MODE_sleep; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_POWER_MODE = $._decodeEnumerated;




export const _encode_BioAPI_POWER_MODE = $._encodeEnumerated;


/* eslint-enable */
