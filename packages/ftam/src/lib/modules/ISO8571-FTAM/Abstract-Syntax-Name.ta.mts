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
 * @summary Abstract_Syntax_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abstract-Syntax-Name  ::=  [APPLICATION 0] IMPLICIT OBJECT IDENTIFIER
 * ```
 */
export type Abstract_Syntax_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType


let _cached_decoder_for_Abstract_Syntax_Name: $.ASN1Decoder<Abstract_Syntax_Name> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Abstract_Syntax_Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abstract_Syntax_Name} The decoded data structure.
 */
export function _decode_Abstract_Syntax_Name(el: _Element) {
  if (!_cached_decoder_for_Abstract_Syntax_Name) {
    _cached_decoder_for_Abstract_Syntax_Name = $._decode_implicit<Abstract_Syntax_Name>(
      () => $._decodeObjectIdentifier
    );
  }
  return _cached_decoder_for_Abstract_Syntax_Name(el);
}


let _cached_encoder_for_Abstract_Syntax_Name: $.ASN1Encoder<Abstract_Syntax_Name> | null = null;


/**
 * @summary Encodes a(n) Abstract_Syntax_Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abstract_Syntax_Name, encoded as an ASN.1 Element.
 */
export function _encode_Abstract_Syntax_Name(
  value: Abstract_Syntax_Name,
  elGetter: $.ASN1Encoder<Abstract_Syntax_Name>
) {
  if (!_cached_encoder_for_Abstract_Syntax_Name) {
    _cached_encoder_for_Abstract_Syntax_Name = $._encode_implicit(
      _TagClass.application,
      0,
      () => $._encodeObjectIdentifier,
      $.BER
    );
  }
  return _cached_encoder_for_Abstract_Syntax_Name(value, elGetter);
}


/* eslint-enable */
