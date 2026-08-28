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


/**
 * CMTP `DELV` delivery mode on a digital postmark. Only
 * `certifiedMail` is named; the type is extensible (`...`).
 * XER text is `CertifiedMail`. ITU-T Rec. X.1341 (09/2015)
 * Table 1, §8.3, Annex B.
 */
export enum _enum_for_DigitalPostmarkType_deliveryType {
  /** Sole named mode; CMTP `DELV certifiedMail`. */
  certifiedMail = 0,
}


/**
 * @summary DigitalPostmarkType_deliveryType
 * @description
 *
 * CMTP `DELV` mode. Root `certifiedMail`; unknown values
 * remain legal because the ENUMERATED is extensible. ITU-T
 * Rec. X.1341 (09/2015) Table 1, Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigitalPostmarkType-deliveryType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type DigitalPostmarkType_deliveryType =
  | _enum_for_DigitalPostmarkType_deliveryType
  | ENUMERATED;


/**
 * @summary DigitalPostmarkType_deliveryType_certifiedMail
 * @description Sole named delivery mode (`DELV`).
 * @constant
 * @type {number}
 */
export const DigitalPostmarkType_deliveryType_certifiedMail: DigitalPostmarkType_deliveryType = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary certifiedMail
 * @description Sole named delivery mode (`DELV`).
 * @constant
 * @type {number}
 */
export const certifiedMail: DigitalPostmarkType_deliveryType = DigitalPostmarkType_deliveryType_certifiedMail; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DigitalPostmarkType_deliveryType = $._decodeEnumerated;




export const _encode_DigitalPostmarkType_deliveryType = $._encodeEnumerated;


/* eslint-enable */
