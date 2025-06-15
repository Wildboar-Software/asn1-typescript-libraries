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
  Pathname_Pattern,
  _decode_Pathname_Pattern,
  _encode_Pathname_Pattern,
} from '../ISO8571-FTAM/Pathname-Pattern.ta.mjs';
import {
  Integer_Pattern,
  _decode_Integer_Pattern,
  _encode_Integer_Pattern,
} from '../ISO8571-FTAM/Integer-Pattern.ta.mjs';
import {
  Bitstring_Pattern,
  _decode_Bitstring_Pattern,
  _encode_Bitstring_Pattern,
} from '../ISO8571-FTAM/Bitstring-Pattern.ta.mjs';
import {
  Contents_Type_Pattern,
  _decode_Contents_Type_Pattern,
  _encode_Contents_Type_Pattern,
} from '../ISO8571-FTAM/Contents-Type-Pattern.ta.mjs';
import {
  String_Pattern,
  _decode_String_Pattern,
  _encode_String_Pattern,
} from '../ISO8571-FTAM/String-Pattern.ta.mjs';
import {
  Date_and_Time_Pattern,
  _decode_Date_and_Time_Pattern,
  _encode_Date_and_Time_Pattern,
} from '../ISO8571-FTAM/Date-and-Time-Pattern.ta.mjs';
import {
  User_Identity_Pattern,
  _decode_User_Identity_Pattern,
  _encode_User_Identity_Pattern,
} from '../ISO8571-FTAM/User-Identity-Pattern.ta.mjs';
import {
  Boolean_Pattern,
  _decode_Boolean_Pattern,
  _encode_Boolean_Pattern,
} from '../ISO8571-FTAM/Boolean-Pattern.ta.mjs';
import {
  Attribute_Extensions_Pattern,
  _decode_Attribute_Extensions_Pattern,
  _encode_Attribute_Extensions_Pattern,
} from '../ISO8571-FTAM/Attribute-Extensions-Pattern.ta.mjs';

/**
 * @summary AND_Set_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AND-Set-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AND_Set_Item =
  | { pathname_Pattern: Pathname_Pattern } /* CHOICE_ALT_ROOT */
  | { object_type_Pattern: Integer_Pattern } /* CHOICE_ALT_ROOT */
  | { permitted_actions_Pattern: Bitstring_Pattern } /* CHOICE_ALT_ROOT */
  | { contents_type_Pattern: Contents_Type_Pattern } /* CHOICE_ALT_ROOT */
  | { linked_Object_Pattern: Pathname_Pattern } /* CHOICE_ALT_ROOT */
  | { child_objects_Pattern: Pathname_Pattern } /* CHOICE_ALT_ROOT */
  | { primaty_pathname_Pattern: Pathname_Pattern } /* CHOICE_ALT_ROOT */
  | { storage_account_Pattern: String_Pattern } /* CHOICE_ALT_ROOT */
  | {
      date_and_time_of_creation_Pattern: Date_and_Time_Pattern;
    } /* CHOICE_ALT_ROOT */
  | {
      date_and_time_of_last_modification_Pattern: Date_and_Time_Pattern;
    } /* CHOICE_ALT_ROOT */
  | {
      date_and_time_of_last_read_access_Pattern: Date_and_Time_Pattern;
    } /* CHOICE_ALT_ROOT */
  | {
      date_and_time_of_last_attribute_modification_Pattern: Date_and_Time_Pattern;
    } /* CHOICE_ALT_ROOT */
  | { identity_of_creator_Pattern: User_Identity_Pattern } /* CHOICE_ALT_ROOT */
  | {
      identity_of_last_modifier_Pattern: User_Identity_Pattern;
    } /* CHOICE_ALT_ROOT */
  | {
      identity_of_last_reader_Pattern: User_Identity_Pattern;
    } /* CHOICE_ALT_ROOT */
  | {
      identity_of_last_attribute_modifier_Pattern: User_Identity_Pattern;
    } /* CHOICE_ALT_ROOT */
  | { object_availabiiity_Pattern: Boolean_Pattern } /* CHOICE_ALT_ROOT */
  | { object_size_Pattern: Integer_Pattern } /* CHOICE_ALT_ROOT */
  | { future_object_size_Pattern: Integer_Pattern } /* CHOICE_ALT_ROOT */
  | { legal_quailfication_Pattern: String_Pattern } /* CHOICE_ALT_ROOT */
  | {
      attribute_extensions_pattern: Attribute_Extensions_Pattern;
    } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_AND_Set_Item: $.ASN1Decoder<AND_Set_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AND_Set_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AND_Set_Item} The decoded data structure.
 */
export function _decode_AND_Set_Item(el: _Element) {
  if (!_cached_decoder_for_AND_Set_Item) {
    _cached_decoder_for_AND_Set_Item = $._decode_inextensible_choice<AND_Set_Item>(
      {
        'CONTEXT 0': [
          'pathname_Pattern',
          $._decode_implicit<Pathname_Pattern>(() => _decode_Pathname_Pattern),
        ],
        'CONTEXT 18': [
          'object_type_Pattern',
          $._decode_implicit<Integer_Pattern>(() => _decode_Integer_Pattern),
        ],
        'CONTEXT 1': [
          'permitted_actions_Pattern',
          $._decode_implicit<Bitstring_Pattern>(
            () => _decode_Bitstring_Pattern
          ),
        ],
        'CONTEXT 2': [
          'contents_type_Pattern',
          $._decode_explicit<Contents_Type_Pattern>(
            () => _decode_Contents_Type_Pattern
          ),
        ],
        'CONTEXT 19': [
          'linked_Object_Pattern',
          $._decode_implicit<Pathname_Pattern>(() => _decode_Pathname_Pattern),
        ],
        'CONTEXT 23': [
          'child_objects_Pattern',
          $._decode_implicit<Pathname_Pattern>(() => _decode_Pathname_Pattern),
        ],
        'CONTEXT 20': [
          'primaty_pathname_Pattern',
          $._decode_implicit<Pathname_Pattern>(() => _decode_Pathname_Pattern),
        ],
        'CONTEXT 3': [
          'storage_account_Pattern',
          $._decode_implicit<String_Pattern>(() => _decode_String_Pattern),
        ],
        'CONTEXT 4': [
          'date_and_time_of_creation_Pattern',
          $._decode_implicit<Date_and_Time_Pattern>(
            () => _decode_Date_and_Time_Pattern
          ),
        ],
        'CONTEXT 5': [
          'date_and_time_of_last_modification_Pattern',
          $._decode_implicit<Date_and_Time_Pattern>(
            () => _decode_Date_and_Time_Pattern
          ),
        ],
        'CONTEXT 6': [
          'date_and_time_of_last_read_access_Pattern',
          $._decode_implicit<Date_and_Time_Pattern>(
            () => _decode_Date_and_Time_Pattern
          ),
        ],
        'CONTEXT 7': [
          'date_and_time_of_last_attribute_modification_Pattern',
          $._decode_implicit<Date_and_Time_Pattern>(
            () => _decode_Date_and_Time_Pattern
          ),
        ],
        'CONTEXT 8': [
          'identity_of_creator_Pattern',
          $._decode_implicit<User_Identity_Pattern>(
            () => _decode_User_Identity_Pattern
          ),
        ],
        'CONTEXT 9': [
          'identity_of_last_modifier_Pattern',
          $._decode_implicit<User_Identity_Pattern>(
            () => _decode_User_Identity_Pattern
          ),
        ],
        'CONTEXT 10': [
          'identity_of_last_reader_Pattern',
          $._decode_implicit<User_Identity_Pattern>(
            () => _decode_User_Identity_Pattern
          ),
        ],
        'CONTEXT 11': [
          'identity_of_last_attribute_modifier_Pattern',
          $._decode_implicit<User_Identity_Pattern>(
            () => _decode_User_Identity_Pattern
          ),
        ],
        'CONTEXT 12': [
          'object_availabiiity_Pattern',
          $._decode_implicit<Boolean_Pattern>(() => _decode_Boolean_Pattern),
        ],
        'CONTEXT 13': [
          'object_size_Pattern',
          $._decode_implicit<Integer_Pattern>(() => _decode_Integer_Pattern),
        ],
        'CONTEXT 14': [
          'future_object_size_Pattern',
          $._decode_implicit<Integer_Pattern>(() => _decode_Integer_Pattern),
        ],
        'CONTEXT 16': [
          'legal_quailfication_Pattern',
          $._decode_implicit<String_Pattern>(() => _decode_String_Pattern),
        ],
        'CONTEXT 22': [
          'attribute_extensions_pattern',
          $._decode_implicit<Attribute_Extensions_Pattern>(
            () => _decode_Attribute_Extensions_Pattern
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_AND_Set_Item(el);
}


let _cached_encoder_for_AND_Set_Item: $.ASN1Encoder<AND_Set_Item> | null = null;


/**
 * @summary Encodes a(n) AND_Set_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AND_Set_Item, encoded as an ASN.1 Element.
 */
export function _encode_AND_Set_Item(
  value: AND_Set_Item,
  elGetter: $.ASN1Encoder<AND_Set_Item>
) {
  if (!_cached_encoder_for_AND_Set_Item) {
    _cached_encoder_for_AND_Set_Item = $._encode_choice<AND_Set_Item>(
      {
        pathname_Pattern: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Pathname_Pattern,
          $.BER
        ),
        object_type_Pattern: $._encode_implicit(
          _TagClass.context,
          18,
          () => _encode_Integer_Pattern,
          $.BER
        ),
        permitted_actions_Pattern: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_Bitstring_Pattern,
          $.BER
        ),
        contents_type_Pattern: $._encode_explicit(
          _TagClass.context,
          2,
          () => _encode_Contents_Type_Pattern,
          $.BER
        ),
        linked_Object_Pattern: $._encode_implicit(
          _TagClass.context,
          19,
          () => _encode_Pathname_Pattern,
          $.BER
        ),
        child_objects_Pattern: $._encode_implicit(
          _TagClass.context,
          23,
          () => _encode_Pathname_Pattern,
          $.BER
        ),
        primaty_pathname_Pattern: $._encode_implicit(
          _TagClass.context,
          20,
          () => _encode_Pathname_Pattern,
          $.BER
        ),
        storage_account_Pattern: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_String_Pattern,
          $.BER
        ),
        date_and_time_of_creation_Pattern: $._encode_implicit(
          _TagClass.context,
          4,
          () => _encode_Date_and_Time_Pattern,
          $.BER
        ),
        date_and_time_of_last_modification_Pattern: $._encode_implicit(
          _TagClass.context,
          5,
          () => _encode_Date_and_Time_Pattern,
          $.BER
        ),
        date_and_time_of_last_read_access_Pattern: $._encode_implicit(
          _TagClass.context,
          6,
          () => _encode_Date_and_Time_Pattern,
          $.BER
        ),
        date_and_time_of_last_attribute_modification_Pattern: $._encode_implicit(
          _TagClass.context,
          7,
          () => _encode_Date_and_Time_Pattern,
          $.BER
        ),
        identity_of_creator_Pattern: $._encode_implicit(
          _TagClass.context,
          8,
          () => _encode_User_Identity_Pattern,
          $.BER
        ),
        identity_of_last_modifier_Pattern: $._encode_implicit(
          _TagClass.context,
          9,
          () => _encode_User_Identity_Pattern,
          $.BER
        ),
        identity_of_last_reader_Pattern: $._encode_implicit(
          _TagClass.context,
          10,
          () => _encode_User_Identity_Pattern,
          $.BER
        ),
        identity_of_last_attribute_modifier_Pattern: $._encode_implicit(
          _TagClass.context,
          11,
          () => _encode_User_Identity_Pattern,
          $.BER
        ),
        object_availabiiity_Pattern: $._encode_implicit(
          _TagClass.context,
          12,
          () => _encode_Boolean_Pattern,
          $.BER
        ),
        object_size_Pattern: $._encode_implicit(
          _TagClass.context,
          13,
          () => _encode_Integer_Pattern,
          $.BER
        ),
        future_object_size_Pattern: $._encode_implicit(
          _TagClass.context,
          14,
          () => _encode_Integer_Pattern,
          $.BER
        ),
        legal_quailfication_Pattern: $._encode_implicit(
          _TagClass.context,
          16,
          () => _encode_String_Pattern,
          $.BER
        ),
        attribute_extensions_pattern: $._encode_implicit(
          _TagClass.context,
          22,
          () => _encode_Attribute_Extensions_Pattern,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_AND_Set_Item(value, elGetter);
}


/* eslint-enable */
