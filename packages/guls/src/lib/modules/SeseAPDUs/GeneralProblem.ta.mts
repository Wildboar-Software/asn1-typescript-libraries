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
 * @summary GeneralProblem
 * @description
 *
 * SE-P-ABORT problem not peculiar to one APDU type. ITU-T Rec.
 * X.832 (04/95) [§6.4.1, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_GeneralProblem {
  invalidAPDU = 0,
}


/**
 * @summary GeneralProblem
 * @description
 *
 * SE-P-ABORT problem not peculiar to one APDU type. ITU-T Rec.
 * X.832 (04/95) [§6.4.1, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```
 *
 * @enum {number}
 */
export type GeneralProblem = _enum_for_GeneralProblem;


/**
 * @summary GeneralProblem
 * @description
 *
 * SE-P-ABORT problem not peculiar to one APDU type. ITU-T Rec.
 * X.832 (04/95) [§6.4.1, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```
 *
 * @enum {number}
 */
export const GeneralProblem = _enum_for_GeneralProblem;


/**
 * @summary GeneralProblem_invalidAPDU
 * @description
 *
 * `invalidAPDU` (0): structure and/or encoding is not a
 * SETR, SEAB, or SEPA. ITU-T Rec. X.832 (04/95) §6.4.1.
 *
 * @constant
 * @type {number}
 */
export const GeneralProblem_invalidAPDU =
  GeneralProblem.invalidAPDU satisfies GeneralProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAPDU
 * @constant
 * @type {number}
 */
export const invalidAPDU =
  GeneralProblem.invalidAPDU satisfies GeneralProblem; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_GeneralProblem(el: _Element): GeneralProblem {
  const enumerated = $._decodeEnumerated(el);
  switch (enumerated) {
    case GeneralProblem.invalidAPDU: return GeneralProblem.invalidAPDU;
    default:
      throw new _ConstructionError(
        'Invalid ENUMERATED value ' + enumerated + ' for GeneralProblem.',
        el,
      );
  }
}




export const _encode_GeneralProblem: $.ASN1Encoder<GeneralProblem> = $._encodeEnumerated as $.ASN1Encoder<GeneralProblem>;


/* eslint-enable */
