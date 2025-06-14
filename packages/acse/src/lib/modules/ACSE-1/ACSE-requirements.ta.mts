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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ACSE_requirements */
/**
 * @summary ACSE_requirements
 * @description
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
/* END_OF_SYMBOL_DEFINITION ACSE_requirements */

/* START_OF_SYMBOL_DEFINITION ACSE_requirements_authentication */
/**
 * @summary ACSE_requirements_authentication
 * @constant
 */
export const ACSE_requirements_authentication: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ACSE_requirements_authentication */

/* START_OF_SYMBOL_DEFINITION authentication */
/**
 * @summary authentication
 * @constant
 */
export const authentication: number = ACSE_requirements_authentication; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION authentication */

/* START_OF_SYMBOL_DEFINITION ACSE_requirements_aSO_context_negotiation */
/**
 * @summary ACSE_requirements_aSO_context_negotiation
 * @constant
 */
export const ACSE_requirements_aSO_context_negotiation: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ACSE_requirements_aSO_context_negotiation */

/* START_OF_SYMBOL_DEFINITION aSO_context_negotiation */
/**
 * @summary aSO_context_negotiation
 * @constant
 */
export const aSO_context_negotiation: number = ACSE_requirements_aSO_context_negotiation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION aSO_context_negotiation */

/* START_OF_SYMBOL_DEFINITION ACSE_requirements_higher_level_association */
/**
 * @summary ACSE_requirements_higher_level_association
 * @constant
 */
export const ACSE_requirements_higher_level_association: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ACSE_requirements_higher_level_association */

/* START_OF_SYMBOL_DEFINITION higher_level_association */
/**
 * @summary higher_level_association
 * @constant
 */
export const higher_level_association: number = ACSE_requirements_higher_level_association; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION higher_level_association */

/* START_OF_SYMBOL_DEFINITION ACSE_requirements_nested_association */
/**
 * @summary ACSE_requirements_nested_association
 * @constant
 */
export const ACSE_requirements_nested_association: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ACSE_requirements_nested_association */

/* START_OF_SYMBOL_DEFINITION nested_association */
/**
 * @summary nested_association
 * @constant
 */
export const nested_association: number = ACSE_requirements_nested_association; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nested_association */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ACSE_requirements */
let _cached_decoder_for_ACSE_requirements: $.ASN1Decoder<ACSE_requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ACSE_requirements */

/* START_OF_SYMBOL_DEFINITION _decode_ACSE_requirements */
/**
 * @summary Decodes an ASN.1 element into a(n) ACSE_requirements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACSE_requirements} The decoded data structure.
 */
export function _decode_ACSE_requirements(el: _Element) {
  if (!_cached_decoder_for_ACSE_requirements) {
    _cached_decoder_for_ACSE_requirements = $._decodeBitString;
  }
  return _cached_decoder_for_ACSE_requirements(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ACSE_requirements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ACSE_requirements */
let _cached_encoder_for_ACSE_requirements: $.ASN1Encoder<ACSE_requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ACSE_requirements */

/* START_OF_SYMBOL_DEFINITION _encode_ACSE_requirements */
/**
 * @summary Encodes a(n) ACSE_requirements into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACSE_requirements, encoded as an ASN.1 Element.
 */
export function _encode_ACSE_requirements(
  value: ACSE_requirements,
  elGetter: $.ASN1Encoder<ACSE_requirements>
) {
  if (!_cached_encoder_for_ACSE_requirements) {
    _cached_encoder_for_ACSE_requirements = $._encodeBitString;
  }
  return _cached_encoder_for_ACSE_requirements(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ACSE_requirements */

/* eslint-enable */
