/* eslint-disable */
import {
  OPTIONAL,
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
  Access_Control_Element,
  _decode_Access_Control_Element,
  _encode_Access_Control_Element,
} from '../ISO8571-FTAM/Access-Control-Element.ta.mjs';

/**
 * @summary Access_Control_Change_Attribute_actual_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Control-Change-Attribute-actual-values ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class Access_Control_Change_Attribute_actual_values {
  constructor(
    /**
     * @summary `insert_values`.
     * @public
     * @readonly
     */
    readonly insert_values: OPTIONAL<Access_Control_Element[]>,
    /**
     * @summary `delete_values`.
     * @public
     * @readonly
     */
    readonly delete_values: OPTIONAL<Access_Control_Element[]>
  ) {}

  /**
   * @summary Restructures an object into a Access_Control_Change_Attribute_actual_values
   * @description
   *
   * This takes an `object` and converts it to a `Access_Control_Change_Attribute_actual_values`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Access_Control_Change_Attribute_actual_values`.
   * @returns {Access_Control_Change_Attribute_actual_values}
   */
  public static _from_object(
    _o: {
      [_K in keyof Access_Control_Change_Attribute_actual_values]: Access_Control_Change_Attribute_actual_values[_K];
    }
  ): Access_Control_Change_Attribute_actual_values {
    return new Access_Control_Change_Attribute_actual_values(
      _o.insert_values,
      _o.delete_values
    );
  }
}


/**
 * @summary The Leading Root Component Types of Access_Control_Change_Attribute_actual_values
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Access_Control_Change_Attribute_actual_values: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'insert-values',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'delete-values',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of Access_Control_Change_Attribute_actual_values
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Access_Control_Change_Attribute_actual_values: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Access_Control_Change_Attribute_actual_values
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Access_Control_Change_Attribute_actual_values: $.ComponentSpec[] = [];


let _cached_decoder_for_Access_Control_Change_Attribute_actual_values: $.ASN1Decoder<Access_Control_Change_Attribute_actual_values> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Access_Control_Change_Attribute_actual_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Control_Change_Attribute_actual_values} The decoded data structure.
 */
export function _decode_Access_Control_Change_Attribute_actual_values(
  el: _Element
): Access_Control_Change_Attribute_actual_values {
  if (!_cached_decoder_for_Access_Control_Change_Attribute_actual_values) {
    _cached_decoder_for_Access_Control_Change_Attribute_actual_values = function (
      el: _Element
    ): Access_Control_Change_Attribute_actual_values {
      let insert_values: OPTIONAL<Access_Control_Element[]>;
      let delete_values: OPTIONAL<Access_Control_Element[]>;
      const callbacks: $.DecodingMap = {
        'insert-values': (_el: _Element): void => {
          insert_values = $._decode_implicit<Access_Control_Element[]>(() =>
            $._decodeSetOf<Access_Control_Element>(
              () => _decode_Access_Control_Element
            )
          )(_el);
        },
        'delete-values': (_el: _Element): void => {
          delete_values = $._decode_implicit<Access_Control_Element[]>(() =>
            $._decodeSetOf<Access_Control_Element>(
              () => _decode_Access_Control_Element
            )
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Access_Control_Change_Attribute_actual_values,
        _extension_additions_list_spec_for_Access_Control_Change_Attribute_actual_values,
        _root_component_type_list_2_spec_for_Access_Control_Change_Attribute_actual_values,
        undefined
      );
      return new Access_Control_Change_Attribute_actual_values (
        insert_values,
        delete_values
      );
    };
  }
  return _cached_decoder_for_Access_Control_Change_Attribute_actual_values(el);
}


let _cached_encoder_for_Access_Control_Change_Attribute_actual_values: $.ASN1Encoder<Access_Control_Change_Attribute_actual_values> | null = null;


/**
 * @summary Encodes a(n) Access_Control_Change_Attribute_actual_values into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Control_Change_Attribute_actual_values, encoded as an ASN.1 Element.
 */
export function _encode_Access_Control_Change_Attribute_actual_values(
  value: Access_Control_Change_Attribute_actual_values,
  elGetter: $.ASN1Encoder<Access_Control_Change_Attribute_actual_values>
): _Element {
  if (!_cached_encoder_for_Access_Control_Change_Attribute_actual_values) {
    _cached_encoder_for_Access_Control_Change_Attribute_actual_values = function (
      value: Access_Control_Change_Attribute_actual_values    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.insert_values === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () =>
                    $._encodeSetOf<Access_Control_Element>(
                      () => _encode_Access_Control_Element,
                      $.BER
                    ),
                  $.BER
                )(value.insert_values, $.BER),
            /* IF_ABSENT  */ value.delete_values === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () =>
                    $._encodeSetOf<Access_Control_Element>(
                      () => _encode_Access_Control_Element,
                      $.BER
                    ),
                  $.BER
                )(value.delete_values, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Access_Control_Change_Attribute_actual_values(
    value,
    elGetter
  );
}


/* eslint-enable */
