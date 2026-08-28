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
 * @summary ACSE_requirements
 * @description
 *
 * Functional units requested or accepted on A-ASSOCIATE. Kernel is
 * always available and is the default when this field is absent (there
 * is no Kernel bit). Bits: `authentication` (0),
 * `aSO-context-negotiation` (1), `higher-level-association` (2),
 * `nested-association` (3). Acceptor may select only units that were
 * requested; refusing Higher Level Association means the association
 * is not established. Nested Association FU adds no extra APDU fields
 * (X.217 bis Table 2). ITU-T Rec. X.227 bis (1998) §6.2; X.217 bis
 * (1998) §7.1.2, §8.1.1.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACSE-requirements  ::=  BIT STRING {
 *   authentication(0), aSO-context-negotiation(1), higher-level-association(2),
 *   nested-association(3)}
 * ```
 */
export type ACSE_requirements = BIT_STRING;

/**
 * @summary ACSE_requirements_authentication
 * @description
 *
 * Bit 0: Authentication FU — extra fields on AARQ/AARE/ABRT.
 *
 * @constant
 */
export const ACSE_requirements_authentication: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary authentication
 * @constant
 */
export const authentication: number = ACSE_requirements_authentication; /* SHORT_NAMED_BIT */

/**
 * @summary ACSE_requirements_aSO_context_negotiation
 * @description
 *
 * Bit 1: ASO-context negotiation FU — `aSO-context-name-list` on AARQ/AARE.
 *
 * @constant
 */
export const ACSE_requirements_aSO_context_negotiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary aSO_context_negotiation
 * @constant
 */
export const aSO_context_negotiation: number = ACSE_requirements_aSO_context_negotiation; /* SHORT_NAMED_BIT */

/**
 * @summary ACSE_requirements_higher_level_association
 * @description
 *
 * Bit 2: Higher Level Association FU — A-DATA, A-ALTER-CONTEXT, ASOI-tags.
 *
 * @constant
 */
export const ACSE_requirements_higher_level_association: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary higher_level_association
 * @constant
 */
export const higher_level_association: number = ACSE_requirements_higher_level_association; /* SHORT_NAMED_BIT */

/**
 * @summary ACSE_requirements_nested_association
 * @description
 *
 * Bit 3: Nested Association FU — nested ASO-associations (no extra APDU
 * fields; X.217 bis Table 2).
 *
 * @constant
 */
export const ACSE_requirements_nested_association: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nested_association
 * @constant
 */
export const nested_association: number = ACSE_requirements_nested_association; /* SHORT_NAMED_BIT */


export const _decode_ACSE_requirements = $._decodeBitString;


export const _encode_ACSE_requirements = $._encodeBitString;


/* eslint-enable */
