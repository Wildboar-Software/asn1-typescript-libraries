/* eslint-disable */
import {
  INTEGER,
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
  Scope_namedNumbers,
  _decode_Scope_namedNumbers,
  _encode_Scope_namedNumbers,
} from '../CMIP-1/Scope-namedNumbers.ta.mjs';


/**
 * @summary Scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope  ::=  CHOICE {
 *   namedNumbers      INTEGER {baseObject(0), firstLevelOnly(1), wholeSubtree(2)},
 *   individualLevels  [1] IMPLICIT INTEGER, -- POSITIVE integer indicates the level to be selected
 *   baseToNthLevel    [2] IMPLICIT INTEGER
 * }
 * ```
 */
export type Scope =
  | { namedNumbers: Scope_namedNumbers } /* CHOICE_ALT_ROOT */
  | { individualLevels: INTEGER } /* CHOICE_ALT_ROOT */
  | { baseToNthLevel: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Scope: $.ASN1Decoder<Scope> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scope} The decoded data structure.
 */
export function _decode_Scope(el: _Element): Scope {
  if (!_cached_decoder_for_Scope) {
    _cached_decoder_for_Scope = $._decode_inextensible_choice<Scope>({
      'UNIVERSAL 2': ['namedNumbers', _decode_Scope_namedNumbers],
      'CONTEXT 1': [
        'individualLevels',
        $._decode_implicit<INTEGER>(() => $._decodeInteger),
      ],
      'CONTEXT 2': [
        'baseToNthLevel',
        $._decode_implicit<INTEGER>(() => $._decodeInteger),
      ],
    });
  }
  return _cached_decoder_for_Scope(el);
}


let _cached_encoder_for_Scope: $.ASN1Encoder<Scope> | null = null;


/**
 * @summary Encodes a(n) Scope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope, encoded as an ASN.1 Element.
 */
export function _encode_Scope(value: Scope, elGetter: $.ASN1Encoder<Scope>): _Element {
  if (!_cached_encoder_for_Scope) {
    _cached_encoder_for_Scope = $._encode_choice<Scope>(
      {
        namedNumbers: _encode_Scope_namedNumbers,
        individualLevels: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeInteger,
          $.BER
        ),
        baseToNthLevel: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Scope(value, elGetter);
}


/* eslint-enable */
