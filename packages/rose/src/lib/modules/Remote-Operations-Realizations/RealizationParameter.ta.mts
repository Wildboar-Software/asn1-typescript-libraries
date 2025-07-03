/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
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
  RealizationParameter_realization_type,
  _enum_for_RealizationParameter_realization_type,
  _decode_RealizationParameter_realization_type,
  _encode_RealizationParameter_realization_type,
} from '../Remote-Operations-Realizations/RealizationParameter-realization-type.ta.mjs';

/**
 * @summary RealizationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RealizationParameter ::= SEQUENCE {
 *   realization-type  ENUMERATED {association-service(0), transfer-service(1)},
 *   concatenation     BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 */
export class RealizationParameter {
  constructor(
    /**
     * @summary `realization_type`.
     * @public
     * @readonly
     */
    readonly realization_type: RealizationParameter_realization_type,
    /**
     * @summary `concatenation`.
     * @public
     * @readonly
     */
    readonly concatenation: OPTIONAL<BOOLEAN>
  ) {}

  /**
   * @summary Restructures an object into a RealizationParameter
   * @description
   *
   * This takes an `object` and converts it to a `RealizationParameter`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RealizationParameter`.
   * @returns {RealizationParameter}
   */
  public static _from_object(
    _o: { [_K in keyof RealizationParameter]: RealizationParameter[_K] }
  ): RealizationParameter {
    return new RealizationParameter(_o.realization_type, _o.concatenation);
  }

  /**
   * @summary Getter that returns the default value for `concatenation`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_concatenation(): BOOLEAN {
    return false;
  }
  /**
   * @summary The enum used as the type of the component `realization_type`
   * @public
   * @static
   */

  public static _enum_for_realization_type = _enum_for_RealizationParameter_realization_type;
}


/**
 * @summary The Leading Root Component Types of RealizationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RealizationParameter: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'realization-type',
    false,
    $.hasTag(_TagClass.universal, 10)
  ),
  new $.ComponentSpec(
    'concatenation',
    true,
    $.hasTag(_TagClass.universal, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of RealizationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RealizationParameter: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RealizationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RealizationParameter: $.ComponentSpec[] = [];


let _cached_decoder_for_RealizationParameter: $.ASN1Decoder<RealizationParameter> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RealizationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RealizationParameter} The decoded data structure.
 */
export function _decode_RealizationParameter(el: _Element): RealizationParameter {
  if (!_cached_decoder_for_RealizationParameter) {
    _cached_decoder_for_RealizationParameter = function (
      el: _Element
    ): RealizationParameter {
      let realization_type!: RealizationParameter_realization_type;
      let concatenation: OPTIONAL<BOOLEAN> =
        RealizationParameter._default_value_for_concatenation;
      const callbacks: $.DecodingMap = {
        'realization-type': (_el: _Element): void => {
          realization_type = _decode_RealizationParameter_realization_type(_el);
        },
        concatenation: (_el: _Element): void => {
          concatenation = $._decodeBoolean(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RealizationParameter,
        _extension_additions_list_spec_for_RealizationParameter,
        _root_component_type_list_2_spec_for_RealizationParameter,
        undefined
      );
      return new RealizationParameter (
        realization_type,
        concatenation
      );
    };
  }
  return _cached_decoder_for_RealizationParameter(el);
}


let _cached_encoder_for_RealizationParameter: $.ASN1Encoder<RealizationParameter> | null = null;


/**
 * @summary Encodes a(n) RealizationParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RealizationParameter, encoded as an ASN.1 Element.
 */
export function _encode_RealizationParameter(
  value: RealizationParameter,
  elGetter: $.ASN1Encoder<RealizationParameter>
): _Element {
  if (!_cached_encoder_for_RealizationParameter) {
    _cached_encoder_for_RealizationParameter = function (
      value: RealizationParameter    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_RealizationParameter_realization_type(
              value.realization_type,
              $.BER
            ),
            /* IF_DEFAULT */ value.concatenation === undefined ||
            $.deepEq(
              value.concatenation,
              RealizationParameter._default_value_for_concatenation
            )
              ? undefined
              : $._encodeBoolean(value.concatenation, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RealizationParameter(value, elGetter);
}


/* eslint-enable */
