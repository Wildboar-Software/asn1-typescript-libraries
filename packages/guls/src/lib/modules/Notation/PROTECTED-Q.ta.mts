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
import {
  PROTECTED,
  _get_decoder_for_PROTECTED,
  _get_encoder_for_PROTECTED,
} from '../Notation/PROTECTED.ta.mjs';

/**
 * @summary PROTECTED_Q
 * @description
 *
 * `PROTECTED` plus a qualifier made available to the security
 * transformation. Typical uses: identify an externally
 * established security association, or pass algorithm / mode /
 * key identifiers. If the mapping allows several transformations,
 * the one used must have a `&QualifierType` consistent with the
 * supplied value. The qualifier may (but need not) appear in the
 * protecting transfer syntax. ITU-T Rec. X.830 (04/95)
 * [§8.2](https://www.itu.int/rec/T-REC-X.830-199504-I), Annex A.
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


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PROTECTED_Q
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PROTECTED_Q<BaseType>(
  _decode_BaseType: $.ASN1Decoder<BaseType>
): $.ASN1Decoder<PROTECTED_Q<BaseType>> {
  return _get_decoder_for_PROTECTED<BaseType>(_decode_BaseType);
}


/**
 * @summary Returns a function that will encode a(n) PROTECTED_Q into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PROTECTED_Q as an ASN.1 element.
 */
export function _get_encoder_for_PROTECTED_Q<BaseType>(
  _encode_BaseType: $.ASN1Encoder<BaseType>
): $.ASN1Encoder<PROTECTED_Q<BaseType>> {
  return _get_encoder_for_PROTECTED<BaseType>(_encode_BaseType);
}

/* eslint-enable */
