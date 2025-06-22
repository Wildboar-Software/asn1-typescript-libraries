/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
 * @summary Constraint_Set_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Constraint-Set-Name  ::=  [APPLICATION 11] IMPLICIT OBJECT IDENTIFIER
 * ```
 */
export type Constraint_Set_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType


let _cached_decoder_for_Constraint_Set_Name: $.ASN1Decoder<Constraint_Set_Name> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Constraint_Set_Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Constraint_Set_Name} The decoded data structure.
 */
export function _decode_Constraint_Set_Name(el: _Element) {
  if (!_cached_decoder_for_Constraint_Set_Name) {
    _cached_decoder_for_Constraint_Set_Name = $._decode_implicit<Constraint_Set_Name>(
      () => $._decodeObjectIdentifier
    );
  }
  return _cached_decoder_for_Constraint_Set_Name(el);
}


let _cached_encoder_for_Constraint_Set_Name: $.ASN1Encoder<Constraint_Set_Name> | null = null;


/**
 * @summary Encodes a(n) Constraint_Set_Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Constraint_Set_Name, encoded as an ASN.1 Element.
 */
export function _encode_Constraint_Set_Name(
  value: Constraint_Set_Name,
  elGetter: $.ASN1Encoder<Constraint_Set_Name>
) {
  if (!_cached_encoder_for_Constraint_Set_Name) {
    _cached_encoder_for_Constraint_Set_Name = $._encode_implicit(
      _TagClass.application,
      11,
      () => $._encodeObjectIdentifier,
      $.BER
    );
  }
  return _cached_encoder_for_Constraint_Set_Name(value, elGetter);
}


/* eslint-enable */
