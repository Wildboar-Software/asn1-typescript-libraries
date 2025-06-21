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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Shared_ASE_Information,
  _decode_Shared_ASE_Information,
  _encode_Shared_ASE_Information,
} from '../ISO8571-FTAM/Shared-ASE-Information.ta.mjs';
import {
  Charging,
  _decode_Charging,
  _encode_Charging,
} from '../ISO8571-FTAM/Charging.ta.mjs';

/**
 * @summary F_TERMINATE_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-TERMINATE-response ::= SEQUENCE {
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL,
 *   charging                Charging OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_TERMINATE_response {
  constructor(
    /**
     * @summary `shared_ASE_information`.
     * @public
     * @readonly
     */
    readonly shared_ASE_information: OPTIONAL<Shared_ASE_Information>,
    /**
     * @summary `charging`.
     * @public
     * @readonly
     */
    readonly charging: OPTIONAL<Charging>
  ) {}

  /**
   * @summary Restructures an object into a F_TERMINATE_response
   * @description
   *
   * This takes an `object` and converts it to a `F_TERMINATE_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_TERMINATE_response`.
   * @returns {F_TERMINATE_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_TERMINATE_response]: F_TERMINATE_response[_K] }
  ): F_TERMINATE_response {
    return new F_TERMINATE_response(_o.shared_ASE_information, _o.charging);
  }
}


/**
 * @summary The Leading Root Component Types of F_TERMINATE_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_TERMINATE_response: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20)
  ),
  new $.ComponentSpec(
    'charging',
    true,
    $.hasTag(_TagClass.application, 9)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_TERMINATE_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_TERMINATE_response: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_TERMINATE_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_TERMINATE_response: $.ComponentSpec[] = [];


let _cached_decoder_for_F_TERMINATE_response: $.ASN1Decoder<F_TERMINATE_response> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_TERMINATE_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_TERMINATE_response} The decoded data structure.
 */
export function _decode_F_TERMINATE_response(el: _Element) {
  if (!_cached_decoder_for_F_TERMINATE_response) {
    _cached_decoder_for_F_TERMINATE_response = function (
      el: _Element
    ): F_TERMINATE_response {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      let charging: OPTIONAL<Charging>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
        charging: (_el: _Element): void => {
          charging = _decode_Charging(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_TERMINATE_response,
        _extension_additions_list_spec_for_F_TERMINATE_response,
        _root_component_type_list_2_spec_for_F_TERMINATE_response,
        undefined
      );
      return new F_TERMINATE_response /* SEQUENCE_CONSTRUCTOR_CALL */(
        shared_ASE_information,
        charging
      );
    };
  }
  return _cached_decoder_for_F_TERMINATE_response(el);
}


let _cached_encoder_for_F_TERMINATE_response: $.ASN1Encoder<F_TERMINATE_response> | null = null;


/**
 * @summary Encodes a(n) F_TERMINATE_response into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_TERMINATE_response, encoded as an ASN.1 Element.
 */
export function _encode_F_TERMINATE_response(
  value: F_TERMINATE_response,
  elGetter: $.ASN1Encoder<F_TERMINATE_response>
) {
  if (!_cached_encoder_for_F_TERMINATE_response) {
    _cached_encoder_for_F_TERMINATE_response = function (
      value: F_TERMINATE_response    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
            /* IF_ABSENT  */ value.charging === undefined
              ? undefined
              : _encode_Charging(value.charging, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_TERMINATE_response(value, elGetter);
}


/* eslint-enable */
