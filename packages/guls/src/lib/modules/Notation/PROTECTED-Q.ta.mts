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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  PROTECTED,
  _get_decoder_for_PROTECTED,
  _get_encoder_for_PROTECTED,
} from '../Notation/PROTECTED.ta.mjs';
/* START_OF_SYMBOL_DEFINITION PROTECTED_Q */
/**
 * @summary PROTECTED_Q
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PROTECTED-Q{BaseType, PROTECTION-MAPPING:protectionReqd,
 *             PROTECTION-MAPPING.&SecurityTransformation.&QualifierType:qualifier}
 *    ::=
 *   PROTECTED{BaseType, protectionReqd}
 *     (CONSTRAINED BY {
 *        protectionReqd.&SecurityTransformation.&QualifierType:qualifier
 *        -- The value of qualifier must be made available to
 *        -- the security transformation used
 *        })
 * ```
 */
export type PROTECTED_Q<BaseType> = PROTECTED<BaseType>; // DefinedType
/* END_OF_SYMBOL_DEFINITION PROTECTED_Q */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_PROTECTED_Q */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PROTECTED_Q
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PROTECTED_Q<BaseType>(
  _decode_BaseType: $.ASN1Decoder<BaseType>
) {
  return _get_decoder_for_PROTECTED<BaseType>(_decode_BaseType);
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_PROTECTED_Q */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_PROTECTED_Q */
/**
 * @summary Returns a function that will encode a(n) PROTECTED_Q into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PROTECTED_Q as an ASN.1 element.
 */
export function _get_encoder_for_PROTECTED_Q<BaseType>(
  _encode_BaseType: $.ASN1Encoder<BaseType>
) {
  return _get_encoder_for_PROTECTED<BaseType>(_encode_BaseType);
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_PROTECTED_Q */

/* eslint-enable */
