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
  Lock,
  Lock_not_required /* IMPORTED_LONG_NAMED_INTEGER */,
  not_required /* IMPORTED_SHORT_NAMED_INTEGER */,
  Lock_shared /* IMPORTED_LONG_NAMED_INTEGER */,
  shared /* IMPORTED_SHORT_NAMED_INTEGER */,
  Lock_exclusive /* IMPORTED_LONG_NAMED_INTEGER */,
  exclusive /* IMPORTED_SHORT_NAMED_INTEGER */,
  Lock_no_access /* IMPORTED_LONG_NAMED_INTEGER */,
  no_access /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Lock,
  _encode_Lock,
} from '../ISO8571-FTAM/Lock.ta.js';
export {
  Lock,
  Lock_not_required /* IMPORTED_LONG_NAMED_INTEGER */,
  not_required /* IMPORTED_SHORT_NAMED_INTEGER */,
  Lock_shared /* IMPORTED_LONG_NAMED_INTEGER */,
  shared /* IMPORTED_SHORT_NAMED_INTEGER */,
  Lock_exclusive /* IMPORTED_LONG_NAMED_INTEGER */,
  exclusive /* IMPORTED_SHORT_NAMED_INTEGER */,
  Lock_no_access /* IMPORTED_LONG_NAMED_INTEGER */,
  no_access /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Lock,
  _encode_Lock,
} from '../ISO8571-FTAM/Lock.ta.js';

/* START_OF_SYMBOL_DEFINITION Concurrency_Control */
/**
 * @summary Concurrency_Control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Concurrency-Control ::= [APPLICATION 10] IMPLICIT SEQUENCE {
 *   read              [0] IMPLICIT Lock,
 *   insert            [1] IMPLICIT Lock,
 *   replace           [2] IMPLICIT Lock,
 *   extend            [3] IMPLICIT Lock,
 *   erase             [4] IMPLICIT Lock,
 *   read-attribute    [5] IMPLICIT Lock,
 *   change-attribute  [6] IMPLICIT Lock,
 *   delete-Object     [7] IMPLICIT Lock
 * }
 * ```
 *
 * @class
 */
export class Concurrency_Control {
  constructor(
    /**
     * @summary `read`.
     * @public
     * @readonly
     */
    readonly read: Lock,
    /**
     * @summary `insert`.
     * @public
     * @readonly
     */
    readonly insert: Lock,
    /**
     * @summary `replace`.
     * @public
     * @readonly
     */
    readonly replace: Lock,
    /**
     * @summary `extend`.
     * @public
     * @readonly
     */
    readonly extend: Lock,
    /**
     * @summary `erase`.
     * @public
     * @readonly
     */
    readonly erase: Lock,
    /**
     * @summary `read_attribute`.
     * @public
     * @readonly
     */
    readonly read_attribute: Lock,
    /**
     * @summary `change_attribute`.
     * @public
     * @readonly
     */
    readonly change_attribute: Lock,
    /**
     * @summary `delete_Object`.
     * @public
     * @readonly
     */
    readonly delete_Object: Lock
  ) {}

  /**
   * @summary Restructures an object into a Concurrency_Control
   * @description
   *
   * This takes an `object` and converts it to a `Concurrency_Control`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Concurrency_Control`.
   * @returns {Concurrency_Control}
   */
  public static _from_object(
    _o: { [_K in keyof Concurrency_Control]: Concurrency_Control[_K] }
  ): Concurrency_Control {
    return new Concurrency_Control(
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
/* END_OF_SYMBOL_DEFINITION Concurrency_Control */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Concurrency_Control */
/**
 * @summary The Leading Root Component Types of Concurrency_Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Concurrency_Control: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Concurrency_Control */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Concurrency_Control */
/**
 * @summary The Trailing Root Component Types of Concurrency_Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Concurrency_Control: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Concurrency_Control */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Concurrency_Control */
/**
 * @summary The Extension Addition Component Types of Concurrency_Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Concurrency_Control: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Concurrency_Control */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Concurrency_Control */
let _cached_decoder_for_Concurrency_Control: $.ASN1Decoder<Concurrency_Control> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Concurrency_Control */

/* START_OF_SYMBOL_DEFINITION _decode_Concurrency_Control */
/**
 * @summary Decodes an ASN.1 element into a(n) Concurrency_Control
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Concurrency_Control} The decoded data structure.
 */
export function _decode_Concurrency_Control(el: _Element) {
  if (!_cached_decoder_for_Concurrency_Control) {
    _cached_decoder_for_Concurrency_Control = $._decode_implicit<Concurrency_Control>(
      () =>
        function (el: _Element): Concurrency_Control {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 8) {
            throw new _ConstructionError(
              'Concurrency-Control contained only ' +
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
          let read!: Lock;
          let insert!: Lock;
          let replace!: Lock;
          let extend!: Lock;
          let erase!: Lock;
          let read_attribute!: Lock;
          let change_attribute!: Lock;
          let delete_Object!: Lock;
          read = $._decode_implicit<Lock>(() => _decode_Lock)(sequence[0]);
          insert = $._decode_implicit<Lock>(() => _decode_Lock)(sequence[1]);
          replace = $._decode_implicit<Lock>(() => _decode_Lock)(sequence[2]);
          extend = $._decode_implicit<Lock>(() => _decode_Lock)(sequence[3]);
          erase = $._decode_implicit<Lock>(() => _decode_Lock)(sequence[4]);
          read_attribute = $._decode_implicit<Lock>(() => _decode_Lock)(
            sequence[5]
          );
          change_attribute = $._decode_implicit<Lock>(() => _decode_Lock)(
            sequence[6]
          );
          delete_Object = $._decode_implicit<Lock>(() => _decode_Lock)(
            sequence[7]
          );
          return new Concurrency_Control(
            read,
            insert,
            replace,
            extend,
            erase,
            read_attribute,
            change_attribute,
            delete_Object
          );
        }
    );
  }
  return _cached_decoder_for_Concurrency_Control(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Concurrency_Control */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Concurrency_Control */
let _cached_encoder_for_Concurrency_Control: $.ASN1Encoder<Concurrency_Control> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Concurrency_Control */

/* START_OF_SYMBOL_DEFINITION _encode_Concurrency_Control */
/**
 * @summary Encodes a(n) Concurrency_Control into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Concurrency_Control, encoded as an ASN.1 Element.
 */
export function _encode_Concurrency_Control(
  value: Concurrency_Control,
  elGetter: $.ASN1Encoder<Concurrency_Control>
) {
  if (!_cached_encoder_for_Concurrency_Control) {
    _cached_encoder_for_Concurrency_Control = $._encode_implicit(
      _TagClass.application,
      10,
      () =>
        function (
          value: Concurrency_Control,
          elGetter: $.ASN1Encoder<Concurrency_Control>
        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_Lock,
                  $.BER
                )(value.read, $.BER),
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => _encode_Lock,
                  $.BER
                )(value.insert, $.BER),
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_Lock,
                  $.BER
                )(value.replace, $.BER),
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => _encode_Lock,
                  $.BER
                )(value.extend, $.BER),
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => _encode_Lock,
                  $.BER
                )(value.erase, $.BER),
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  5,
                  () => _encode_Lock,
                  $.BER
                )(value.read_attribute, $.BER),
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  6,
                  () => _encode_Lock,
                  $.BER
                )(value.change_attribute, $.BER),
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  7,
                  () => _encode_Lock,
                  $.BER
                )(value.delete_Object, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_Concurrency_Control(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Concurrency_Control */

/* eslint-enable */
