/* eslint-disable */
import {
  type ENUMERATED,
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


export const _enum_for_BioAPI_GUI_MOMENT = {
  beforeStart: 0,
  during: 1,
  afterEnd: 2,
} as const;

export type _enum_for_BioAPI_GUI_MOMENT = (typeof _enum_for_BioAPI_GUI_MOMENT)[keyof typeof _enum_for_BioAPI_GUI_MOMENT];


/**
 * @summary BioAPI_GUI_MOMENT
 * @description
 *
 * When a GUI event occurs relative to an operation. ASN.1
 * enumerators are 0-based; C values are 1–3 (`beforeStart` = C
 * 1). Other C values are unconvertible.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.37](https://www.itu.int/rec/T-REC-X.1083-200711-I).
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
export const BioAPI_GUI_MOMENT_beforeStart: 0 = _enum_for_BioAPI_GUI_MOMENT.beforeStart; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary beforeStart
 * @constant
 * @type {number}
 */
export const beforeStart: 0 = BioAPI_GUI_MOMENT_beforeStart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_MOMENT_during
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_during: 1 = _enum_for_BioAPI_GUI_MOMENT.during; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary during
 * @constant
 * @type {number}
 */
export const during: 1 = BioAPI_GUI_MOMENT_during; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_MOMENT_afterEnd
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_afterEnd: 2 = _enum_for_BioAPI_GUI_MOMENT.afterEnd; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary afterEnd
 * @constant
 * @type {number}
 */
export const afterEnd: 2 = BioAPI_GUI_MOMENT_afterEnd; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_GUI_MOMENT: $.ASN1Decoder<BioAPI_GUI_MOMENT> = $._decodeEnumerated as $.ASN1Decoder<BioAPI_GUI_MOMENT>;




export const _encode_BioAPI_GUI_MOMENT: $.ASN1Encoder<BioAPI_GUI_MOMENT> = $._encodeEnumerated as $.ASN1Encoder<BioAPI_GUI_MOMENT>;


/* eslint-enable */
