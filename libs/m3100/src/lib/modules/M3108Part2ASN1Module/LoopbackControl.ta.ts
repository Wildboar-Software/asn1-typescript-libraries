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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  LoopbackControl_status,
  _enum_for_LoopbackControl_status,
  LoopbackControl_status_noLoopback /* IMPORTED_LONG_ENUMERATION_ITEM */,
  noLoopback /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  LoopbackControl_status_endALoopedBack /* IMPORTED_LONG_ENUMERATION_ITEM */,
  endALoopedBack /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  LoopbackControl_status_endBLoopedBack /* IMPORTED_LONG_ENUMERATION_ITEM */,
  endBLoopedBack /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_LoopbackControl_status,
  _encode_LoopbackControl_status,
} from '../M3108Part2ASN1Module/LoopbackControl-status.ta';
export {
  LoopbackControl_status,
  _enum_for_LoopbackControl_status,
  LoopbackControl_status_noLoopback /* IMPORTED_LONG_ENUMERATION_ITEM */,
  noLoopback /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  LoopbackControl_status_endALoopedBack /* IMPORTED_LONG_ENUMERATION_ITEM */,
  endALoopedBack /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  LoopbackControl_status_endBLoopedBack /* IMPORTED_LONG_ENUMERATION_ITEM */,
  endBLoopedBack /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_LoopbackControl_status,
  _encode_LoopbackControl_status,
} from '../M3108Part2ASN1Module/LoopbackControl-status.ta';

/* START_OF_SYMBOL_DEFINITION LoopbackControl */
/**
 * @summary LoopbackControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl ::= SEQUENCE {
 *   status
 *     [0]  ENUMERATED {noLoopback(0), endALoopedBack(1), endBLoopedBack(2)},
 *   terminationTime  [1]  UTCTime,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class LoopbackControl {
  constructor(
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: LoopbackControl_status,
    /**
     * @summary `terminationTime`.
     * @public
     * @readonly
     */
    readonly terminationTime: UTCTime,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a LoopbackControl
   * @description
   *
   * This takes an `object` and converts it to a `LoopbackControl`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `LoopbackControl`.
   * @returns {LoopbackControl}
   */
  public static _from_object(
    _o: { [_K in keyof LoopbackControl]: LoopbackControl[_K] }
  ): LoopbackControl {
    return new LoopbackControl(
      _o.status,
      _o.terminationTime,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `status`
   * @public
   * @static
   */

  public static _enum_for_status = _enum_for_LoopbackControl_status;
}
/* END_OF_SYMBOL_DEFINITION LoopbackControl */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LoopbackControl */
/**
 * @summary The Leading Root Component Types of LoopbackControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LoopbackControl: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'status',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'terminationTime',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LoopbackControl */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LoopbackControl */
/**
 * @summary The Trailing Root Component Types of LoopbackControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LoopbackControl: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LoopbackControl */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LoopbackControl */
/**
 * @summary The Extension Addition Component Types of LoopbackControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LoopbackControl: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LoopbackControl */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackControl */
let _cached_decoder_for_LoopbackControl: $.ASN1Decoder<LoopbackControl> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackControl */

/* START_OF_SYMBOL_DEFINITION _decode_LoopbackControl */
/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackControl
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackControl} The decoded data structure.
 */
export function _decode_LoopbackControl(el: _Element) {
  if (!_cached_decoder_for_LoopbackControl) {
    _cached_decoder_for_LoopbackControl = function (
      el: _Element
    ): LoopbackControl {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'LoopbackControl contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'status';
      sequence[1].name = 'terminationTime';
      let status!: LoopbackControl_status;
      let terminationTime!: UTCTime;
      status = $._decode_implicit<LoopbackControl_status>(
        () => _decode_LoopbackControl_status
      )(sequence[0]);
      terminationTime = $._decode_implicit<UTCTime>(() => $._decodeUTCTime)(
        sequence[1]
      );
      return new LoopbackControl(status, terminationTime, sequence.slice(2));
    };
  }
  return _cached_decoder_for_LoopbackControl(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LoopbackControl */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackControl */
let _cached_encoder_for_LoopbackControl: $.ASN1Encoder<LoopbackControl> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackControl */

/* START_OF_SYMBOL_DEFINITION _encode_LoopbackControl */
/**
 * @summary Encodes a(n) LoopbackControl into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackControl, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackControl(
  value: LoopbackControl,
  elGetter: $.ASN1Encoder<LoopbackControl>
) {
  if (!_cached_encoder_for_LoopbackControl) {
    _cached_encoder_for_LoopbackControl = function (
      value: LoopbackControl,
      elGetter: $.ASN1Encoder<LoopbackControl>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                0,
                () => _encode_LoopbackControl_status,
                $.BER
              )(value.status, $.BER),
              /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                1,
                () => $._encodeUTCTime,
                $.BER
              )(value.terminationTime, $.BER),
            ],
            value._unrecognizedExtensionsList
              ? value._unrecognizedExtensionsList
              : []
          )
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_LoopbackControl(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LoopbackControl */

/* eslint-enable */
