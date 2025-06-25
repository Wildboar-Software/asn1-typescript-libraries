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
  Path_Access_Passwords_Item,
  _decode_Path_Access_Passwords_Item,
  _encode_Path_Access_Passwords_Item,
} from '../ISO8571-FTAM/Path-Access-Passwords-Item.ta.mjs';

/**
 * @summary Path_Access_Passwords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Path-Access-Passwords  ::=
 *   [APPLICATION 27] IMPLICIT
 *     SEQUENCE OF
 *       SEQUENCE {read-password              [0] IMPLICIT Password,
 *                 insert-password            [1] IMPLICIT Password,
 *                 replace-password           [2] IMPLICIT Password,
 *                 extend-password            [3] IMPLICIT Password,
 *                 erase-password             [4] IMPLICIT Password,
 *                 read-attribute-password    [5] IMPLICIT Password,
 *                 change-attribute-password  [6] IMPLICIT Password,
 *                 delete-password            [7] IMPLICIT Password,
 *                 pass-passwords             [8] IMPLICIT Pass-Passwords,
 *                 link-password              [9] IMPLICIT Password}
 * ```
 */
export type Path_Access_Passwords = Path_Access_Passwords_Item[]; // SequenceOfType


let _cached_decoder_for_Path_Access_Passwords: $.ASN1Decoder<Path_Access_Passwords> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Path_Access_Passwords
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Path_Access_Passwords} The decoded data structure.
 */
export function _decode_Path_Access_Passwords(el: _Element): Path_Access_Passwords {
  if (!_cached_decoder_for_Path_Access_Passwords) {
    _cached_decoder_for_Path_Access_Passwords = $._decode_implicit<Path_Access_Passwords>(
      () =>
        $._decodeSequenceOf<Path_Access_Passwords_Item>(
          () => _decode_Path_Access_Passwords_Item
        )
    );
  }
  return _cached_decoder_for_Path_Access_Passwords(el);
}


let _cached_encoder_for_Path_Access_Passwords: $.ASN1Encoder<Path_Access_Passwords> | null = null;


/**
 * @summary Encodes a(n) Path_Access_Passwords into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_Access_Passwords, encoded as an ASN.1 Element.
 */
export function _encode_Path_Access_Passwords(
  value: Path_Access_Passwords,
  elGetter: $.ASN1Encoder<Path_Access_Passwords>
): _Element {
  if (!_cached_encoder_for_Path_Access_Passwords) {
    _cached_encoder_for_Path_Access_Passwords = $._encode_implicit(
      _TagClass.application,
      27,
      () =>
        $._encodeSequenceOf<Path_Access_Passwords_Item>(
          () => _encode_Path_Access_Passwords_Item,
          $.BER
        ),
      $.BER
    );
  }
  return _cached_encoder_for_Path_Access_Passwords(value, elGetter);
}


/* eslint-enable */
