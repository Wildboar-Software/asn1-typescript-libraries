/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
  Concurrency_Key,
  Concurrency_Key_not_required /* IMPORTED_LONG_NAMED_BIT */,
  not_required /* IMPORTED_SHORT_NAMED_BIT */,
  Concurrency_Key_shared /* IMPORTED_LONG_NAMED_BIT */,
  shared /* IMPORTED_SHORT_NAMED_BIT */,
  Concurrency_Key_exclusive /* IMPORTED_LONG_NAMED_BIT */,
  exclusive /* IMPORTED_SHORT_NAMED_BIT */,
  Concurrency_Key_no_access /* IMPORTED_LONG_NAMED_BIT */,
  no_access /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Concurrency_Key,
  _encode_Concurrency_Key,
} from '../ISO8571-FTAM/Concurrency-Key.ta.js';
export {
  Concurrency_Key,
  Concurrency_Key_not_required /* IMPORTED_LONG_NAMED_BIT */,
  not_required /* IMPORTED_SHORT_NAMED_BIT */,
  Concurrency_Key_shared /* IMPORTED_LONG_NAMED_BIT */,
  shared /* IMPORTED_SHORT_NAMED_BIT */,
  Concurrency_Key_exclusive /* IMPORTED_LONG_NAMED_BIT */,
  exclusive /* IMPORTED_SHORT_NAMED_BIT */,
  Concurrency_Key_no_access /* IMPORTED_LONG_NAMED_BIT */,
  no_access /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Concurrency_Key,
  _encode_Concurrency_Key,
} from '../ISO8571-FTAM/Concurrency-Key.ta.js';

/* START_OF_SYMBOL_DEFINITION Concurrency_Access */
/**
 * @summary Concurrency_Access
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Concurrency-Access ::= SEQUENCE {
 *   read              [0] IMPLICIT Concurrency-Key,
 *   insert            [1] IMPLICIT Concurrency-Key,
 *   replace           [2] IMPLICIT Concurrency-Key,
 *   extend            [3] IMPLICIT Concurrency-Key,
 *   erase             [4] IMPLICIT Concurrency-Key,
 *   read-attribute    [5] IMPLICIT Concurrency-Key,
 *   change-attribute  [6] IMPLICIT Concurrency-Key,
 *   delete-Object     [7] IMPLICIT Concurrency-Key
 * }
 * ```
 *
 * @class
 */
export class Concurrency_Access {
  constructor(
    /**
     * @summary `read`.
     * @public
     * @readonly
     */
    readonly read: Concurrency_Key,
    /**
     * @summary `insert`.
     * @public
     * @readonly
     */
    readonly insert: Concurrency_Key,
    /**
     * @summary `replace`.
     * @public
     * @readonly
     */
    readonly replace: Concurrency_Key,
    /**
     * @summary `extend`.
     * @public
     * @readonly
     */
    readonly extend: Concurrency_Key,
    /**
     * @summary `erase`.
     * @public
     * @readonly
     */
    readonly erase: Concurrency_Key,
    /**
     * @summary `read_attribute`.
     * @public
     * @readonly
     */
    readonly read_attribute: Concurrency_Key,
    /**
     * @summary `change_attribute`.
     * @public
     * @readonly
     */
    readonly change_attribute: Concurrency_Key,
    /**
     * @summary `delete_Object`.
     * @public
     * @readonly
     */
    readonly delete_Object: Concurrency_Key
  ) {}

  /**
   * @summary Restructures an object into a Concurrency_Access
   * @description
   *
   * This takes an `object` and converts it to a `Concurrency_Access`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Concurrency_Access`.
   * @returns {Concurrency_Access}
   */
  public static _from_object(
    _o: { [_K in keyof Concurrency_Access]: Concurrency_Access[_K] }
  ): Concurrency_Access {
    return new Concurrency_Access(
      _o.read,
      _o.insert,
      _o.replace,
      _o.extend,
      _o.erase,
      _o.read_attribute,
      _o.change_attribute,
      _o.delete_Object
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Concurrency_Access */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Concurrency_Access */
/**
 * @summary The Leading Root Component Types of Concurrency_Access
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Concurrency_Access: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'read',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'insert',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'replace',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'extend',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'erase',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'read-attribute',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'change-attribute',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'delete-Object',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Concurrency_Access */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Concurrency_Access */
/**
 * @summary The Trailing Root Component Types of Concurrency_Access
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Concurrency_Access: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Concurrency_Access */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Concurrency_Access */
/**
 * @summary The Extension Addition Component Types of Concurrency_Access
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Concurrency_Access: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Concurrency_Access */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Concurrency_Access */
let _cached_decoder_for_Concurrency_Access: $.ASN1Decoder<Concurrency_Access> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Concurrency_Access */

/* START_OF_SYMBOL_DEFINITION _decode_Concurrency_Access */
/**
 * @summary Decodes an ASN.1 element into a(n) Concurrency_Access
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Concurrency_Access} The decoded data structure.
 */
export function _decode_Concurrency_Access(el: _Element) {
  if (!_cached_decoder_for_Concurrency_Access) {
    _cached_decoder_for_Concurrency_Access = function (
      el: _Element
    ): Concurrency_Access {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 8) {
        throw new _ConstructionError(
          'Concurrency-Access contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'read';
      sequence[1].name = 'insert';
      sequence[2].name = 'replace';
      sequence[3].name = 'extend';
      sequence[4].name = 'erase';
      sequence[5].name = 'read-attribute';
      sequence[6].name = 'change-attribute';
      sequence[7].name = 'delete-Object';
      let read!: Concurrency_Key;
      let insert!: Concurrency_Key;
      let replace!: Concurrency_Key;
      let extend!: Concurrency_Key;
      let erase!: Concurrency_Key;
      let read_attribute!: Concurrency_Key;
      let change_attribute!: Concurrency_Key;
      let delete_Object!: Concurrency_Key;
      read = $._decode_implicit<Concurrency_Key>(() => _decode_Concurrency_Key)(
        sequence[0]
      );
      insert = $._decode_implicit<Concurrency_Key>(
        () => _decode_Concurrency_Key
      )(sequence[1]);
      replace = $._decode_implicit<Concurrency_Key>(
        () => _decode_Concurrency_Key
      )(sequence[2]);
      extend = $._decode_implicit<Concurrency_Key>(
        () => _decode_Concurrency_Key
      )(sequence[3]);
      erase = $._decode_implicit<Concurrency_Key>(
        () => _decode_Concurrency_Key
      )(sequence[4]);
      read_attribute = $._decode_implicit<Concurrency_Key>(
        () => _decode_Concurrency_Key
      )(sequence[5]);
      change_attribute = $._decode_implicit<Concurrency_Key>(
        () => _decode_Concurrency_Key
      )(sequence[6]);
      delete_Object = $._decode_implicit<Concurrency_Key>(
        () => _decode_Concurrency_Key
      )(sequence[7]);
      return new Concurrency_Access(
        read,
        insert,
        replace,
        extend,
        erase,
        read_attribute,
        change_attribute,
        delete_Object
      );
    };
  }
  return _cached_decoder_for_Concurrency_Access(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Concurrency_Access */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Concurrency_Access */
let _cached_encoder_for_Concurrency_Access: $.ASN1Encoder<Concurrency_Access> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Concurrency_Access */

/* START_OF_SYMBOL_DEFINITION _encode_Concurrency_Access */
/**
 * @summary Encodes a(n) Concurrency_Access into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Concurrency_Access, encoded as an ASN.1 Element.
 */
export function _encode_Concurrency_Access(
  value: Concurrency_Access,
  elGetter: $.ASN1Encoder<Concurrency_Access>
) {
  if (!_cached_encoder_for_Concurrency_Access) {
    _cached_encoder_for_Concurrency_Access = function (
      value: Concurrency_Access,
      elGetter: $.ASN1Encoder<Concurrency_Access>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Concurrency_Key,
              $.BER
            )(value.read, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => _encode_Concurrency_Key,
              $.BER
            )(value.insert, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              2,
              () => _encode_Concurrency_Key,
              $.BER
            )(value.replace, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              3,
              () => _encode_Concurrency_Key,
              $.BER
            )(value.extend, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              4,
              () => _encode_Concurrency_Key,
              $.BER
            )(value.erase, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              5,
              () => _encode_Concurrency_Key,
              $.BER
            )(value.read_attribute, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              6,
              () => _encode_Concurrency_Key,
              $.BER
            )(value.change_attribute, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              7,
              () => _encode_Concurrency_Key,
              $.BER
            )(value.delete_Object, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Concurrency_Access(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Concurrency_Access */

/* eslint-enable */
