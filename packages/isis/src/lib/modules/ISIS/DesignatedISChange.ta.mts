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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DesignatedISChange
 * @description
 *
 * `notificationDesignatedIntermediateSystemChange` payload: whether this system
 * elected itself or resigned as LAN L1 or L2 Designated IS. Relative order of
 * these events must be preserved.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.1.3, 11.2.5.2 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DesignatedISChange {
  resigned = 0,
  elected = 1,
}

/**
 * @summary DesignatedISChange
 * @description
 *
 * `notificationDesignatedIntermediateSystemChange` payload: whether this system
 * elected itself or resigned as LAN L1 or L2 Designated IS. Relative order of
 * these events must be preserved.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.1.3, 11.2.5.2 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```
 *
 * @enum {number}
 */
export type DesignatedISChange = _enum_for_DesignatedISChange;

/**
 * @summary DesignatedISChange
 * @description
 *
 * `notificationDesignatedIntermediateSystemChange` payload: whether this system
 * elected itself or resigned as LAN L1 or L2 Designated IS. Relative order of
 * these events must be preserved.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.1.3, 11.2.5.2 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```
 *
 * @enum {number}
 */
export const DesignatedISChange = _enum_for_DesignatedISChange;

/**
 * @summary DesignatedISChange_resigned
 * @description
 *
 * This system resigned as LAN Designated IS.
 *
 * (ISO/IEC 10589:2002 clause 11.2.5.2).
 *
 * @constant
 * @type {number}
 */
export const DesignatedISChange_resigned: DesignatedISChange =
  DesignatedISChange.resigned; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resigned
 * @constant
 * @type {number}
 */
export const resigned: DesignatedISChange =
  DesignatedISChange.resigned; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DesignatedISChange_elected
 * @description
 *
 * This system elected itself as LAN Designated IS.
 *
 * (ISO/IEC 10589:2002 clause 11.2.5.2).
 *
 * @constant
 * @type {number}
 */
export const DesignatedISChange_elected: DesignatedISChange =
  DesignatedISChange.elected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary elected
 * @constant
 * @type {number}
 */
export const elected: DesignatedISChange =
  DesignatedISChange.elected; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DesignatedISChange = $._decodeEnumerated;


export const _encode_DesignatedISChange = $._encodeEnumerated;


/* eslint-enable */
