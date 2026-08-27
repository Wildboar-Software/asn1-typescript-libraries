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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RevocationInfoTypes
 * @description
 *
 * BIT STRING advertising which revocation information types the
 * server can process ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)). Bit set to one if capable.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfoTypes  ::=  BIT STRING {
 *     fullCRLs                   (0),
 *     deltaCRLs                  (1),
 *     indirectCRLs               (2),
 *     oCSPResponses              (3)
 * }
 * ```
 */
export type RevocationInfoTypes = BIT_STRING;

/**
 * @summary RevocationInfoTypes_fullCRLs
 * @description
 *
 * Bit 0: full CRLs ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
 *
 * @constant
 */
export const RevocationInfoTypes_fullCRLs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary fullCRLs
 * @description
 *
 * Short name for `RevocationInfoTypes_fullCRLs` ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
 *
 * @constant
 */
export const fullCRLs: number = RevocationInfoTypes_fullCRLs; /* SHORT_NAMED_BIT */

/**
 * @summary RevocationInfoTypes_deltaCRLs
 * @description
 *
 * Bit 1: delta-CRLs ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
 *
 * @constant
 */
export const RevocationInfoTypes_deltaCRLs: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deltaCRLs
 * @description
 *
 * Short name for `RevocationInfoTypes_deltaCRLs` ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
 *
 * @constant
 */
export const deltaCRLs: number = RevocationInfoTypes_deltaCRLs; /* SHORT_NAMED_BIT */

/**
 * @summary RevocationInfoTypes_indirectCRLs
 * @description
 *
 * Bit 2: indirect CRLs ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
 *
 * @constant
 */
export const RevocationInfoTypes_indirectCRLs: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary indirectCRLs
 * @description
 *
 * Short name for `RevocationInfoTypes_indirectCRLs` ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
 *
 * @constant
 */
export const indirectCRLs: number = RevocationInfoTypes_indirectCRLs; /* SHORT_NAMED_BIT */

/**
 * @summary RevocationInfoTypes_oCSPResponses
 * @description
 *
 * Bit 3: OCSP responses ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
 *
 * @constant
 */
export const RevocationInfoTypes_oCSPResponses: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary oCSPResponses
 * @description
 *
 * Short name for `RevocationInfoTypes_oCSPResponses` ([RFC 5055 §6.13](https://datatracker.ietf.org/doc/html/rfc5055#section-6.13)).
 *
 * @constant
 */
export const oCSPResponses: number = RevocationInfoTypes_oCSPResponses; /* SHORT_NAMED_BIT */


export const _decode_RevocationInfoTypes = $._decodeBitString;


export const _encode_RevocationInfoTypes = $._encodeBitString;


/* eslint-enable */
