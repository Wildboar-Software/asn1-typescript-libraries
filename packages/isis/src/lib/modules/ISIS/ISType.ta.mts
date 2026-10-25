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
 * @summary ISType
 * @description
 *
 * Type of this Intermediate System. Settable only via CREATE
 * (`supplyValueOnCreate-B`); read-only afterwards. Level 2 ISs also perform
 * Level 1 functions unless a circuit is in `manualL2OnlyMode`.
 *
 * (ISO/IEC 10589:2002 clauses 6.1, 11.2.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ISType {
  level1IS = 1,
  level2IS = 2,
}

/**
 * @summary ISType
 * @description
 *
 * Type of this Intermediate System. Settable only via CREATE
 * (`supplyValueOnCreate-B`); read-only afterwards. Level 2 ISs also perform
 * Level 1 functions unless a circuit is in `manualL2OnlyMode`.
 *
 * (ISO/IEC 10589:2002 clauses 6.1, 11.2.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```
 *
 * @enum {number}
 */
export type ISType = _enum_for_ISType;

/**
 * @summary ISType
 * @description
 *
 * Type of this Intermediate System. Settable only via CREATE
 * (`supplyValueOnCreate-B`); read-only afterwards. Level 2 ISs also perform
 * Level 1 functions unless a circuit is in `manualL2OnlyMode`.
 *
 * (ISO/IEC 10589:2002 clauses 6.1, 11.2.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```
 *
 * @enum {number}
 */
export const ISType = _enum_for_ISType;

/**
 * @summary ISType_level1IS
 * @description
 *
 * Level 1 Intermediate System (intra-area routeing).
 *
 * (ISO/IEC 10589:2002 clauses 6.1 and 11.2.4).
 *
 * @constant
 * @type {number}
 */
export const ISType_level1IS =
  ISType.level1IS satisfies ISType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1IS
 * @constant
 * @type {number}
 */
export const level1IS =
  ISType.level1IS satisfies ISType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ISType_level2IS
 * @description
 *
 * Level 2 Intermediate System (also participates in the Level 2 subdomain).
 *
 * (ISO/IEC 10589:2002 clauses 6.1 and 11.2.4).
 *
 * @constant
 * @type {number}
 */
export const ISType_level2IS =
  ISType.level2IS satisfies ISType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2IS
 * @constant
 * @type {number}
 */
export const level2IS =
  ISType.level2IS satisfies ISType; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_ISType(el: _Element): ISType {
  const enumerated = $._decodeEnumerated(el);
  switch (enumerated) {
    case ISType.level1IS: return ISType.level1IS;
    case ISType.level2IS: return ISType.level2IS;
    default:
      throw new _ConstructionError(
        'Invalid ENUMERATED value ' + enumerated + ' for ISType.',
        el,
      );
  }
}


export const _encode_ISType: $.ASN1Encoder<ISType> = $._encodeEnumerated as $.ASN1Encoder<ISType>;


/* eslint-enable */
