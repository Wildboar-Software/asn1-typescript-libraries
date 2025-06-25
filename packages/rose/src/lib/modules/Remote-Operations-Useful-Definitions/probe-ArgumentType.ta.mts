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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';

/**
 * @summary probe_ArgumentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * probe-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class probe_ArgumentType {
  constructor(
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId
  ) {}

  /**
   * @summary Restructures an object into a probe_ArgumentType
   * @description
   *
   * This takes an `object` and converts it to a `probe_ArgumentType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `probe_ArgumentType`.
   * @returns {probe_ArgumentType}
   */
  public static _from_object(
    _o: { [_K in keyof probe_ArgumentType]: probe_ArgumentType[_K] }
  ): probe_ArgumentType {
    return new probe_ArgumentType(_o.invokeId);
  }
}


/**
 * @summary The Leading Root Component Types of probe_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_probe_ArgumentType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'invokeId',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of probe_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_probe_ArgumentType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of probe_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_probe_ArgumentType: $.ComponentSpec[] = [];


let _cached_decoder_for_probe_ArgumentType: $.ASN1Decoder<probe_ArgumentType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) probe_ArgumentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {probe_ArgumentType} The decoded data structure.
 */
export function _decode_probe_ArgumentType(el: _Element): probe_ArgumentType {
  if (!_cached_decoder_for_probe_ArgumentType) {
    _cached_decoder_for_probe_ArgumentType = function (
      el: _Element
    ): probe_ArgumentType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'probe-ArgumentType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'invokeId';
      let invokeId!: InvokeId;
      invokeId = $._decode_explicit<InvokeId>(() => _decode_InvokeId)(
        sequence[0]
      );
      return new probe_ArgumentType(invokeId);
    };
  }
  return _cached_decoder_for_probe_ArgumentType(el);
}


let _cached_encoder_for_probe_ArgumentType: $.ASN1Encoder<probe_ArgumentType> | null = null;


/**
 * @summary Encodes a(n) probe_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The probe_ArgumentType, encoded as an ASN.1 Element.
 */
export function _encode_probe_ArgumentType(
  value: probe_ArgumentType,
  elGetter: $.ASN1Encoder<probe_ArgumentType>
): _Element {
  if (!_cached_encoder_for_probe_ArgumentType) {
    _cached_encoder_for_probe_ArgumentType = function (
      value: probe_ArgumentType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_InvokeId,
              $.BER
            )(value.invokeId, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_probe_ArgumentType(value, elGetter);
}


/* eslint-enable */
