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
/* START_OF_SYMBOL_DEFINITION F_UNLINK_request */
/**
 * @summary F_UNLINK_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-UNLINK-request ::= SEQUENCE {
 *   shared-ASE-information  Shared-ASE-Information OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_UNLINK_request {
  constructor(
    /**
     * @summary `shared_ASE_information`.
     * @public
     * @readonly
     */
    readonly shared_ASE_information: OPTIONAL<Shared_ASE_Information>
  ) {}

  /**
   * @summary Restructures an object into a F_UNLINK_request
   * @description
   *
   * This takes an `object` and converts it to a `F_UNLINK_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_UNLINK_request`.
   * @returns {F_UNLINK_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_UNLINK_request]: F_UNLINK_request[_K] }
  ): F_UNLINK_request {
    return new F_UNLINK_request(_o.shared_ASE_information);
  }
}
/* END_OF_SYMBOL_DEFINITION F_UNLINK_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_UNLINK_request */
/**
 * @summary The Leading Root Component Types of F_UNLINK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_UNLINK_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'shared-ASE-information',
    true,
    $.hasTag(_TagClass.application, 20),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_UNLINK_request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_UNLINK_request */
/**
 * @summary The Trailing Root Component Types of F_UNLINK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_UNLINK_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_UNLINK_request */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_UNLINK_request */
/**
 * @summary The Extension Addition Component Types of F_UNLINK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_UNLINK_request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_UNLINK_request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_UNLINK_request */
let _cached_decoder_for_F_UNLINK_request: $.ASN1Decoder<F_UNLINK_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_UNLINK_request */

/* START_OF_SYMBOL_DEFINITION _decode_F_UNLINK_request */
/**
 * @summary Decodes an ASN.1 element into a(n) F_UNLINK_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_UNLINK_request} The decoded data structure.
 */
export function _decode_F_UNLINK_request(el: _Element) {
  if (!_cached_decoder_for_F_UNLINK_request) {
    _cached_decoder_for_F_UNLINK_request = function (
      el: _Element
    ): F_UNLINK_request {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let shared_ASE_information: OPTIONAL<Shared_ASE_Information>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'shared-ASE-information': (_el: _Element): void => {
          shared_ASE_information = _decode_Shared_ASE_Information(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_UNLINK_request,
        _extension_additions_list_spec_for_F_UNLINK_request,
        _root_component_type_list_2_spec_for_F_UNLINK_request,
        undefined
      );
      return new F_UNLINK_request /* SEQUENCE_CONSTRUCTOR_CALL */(
        shared_ASE_information
      );
    };
  }
  return _cached_decoder_for_F_UNLINK_request(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_UNLINK_request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_UNLINK_request */
let _cached_encoder_for_F_UNLINK_request: $.ASN1Encoder<F_UNLINK_request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_UNLINK_request */

/* START_OF_SYMBOL_DEFINITION _encode_F_UNLINK_request */
/**
 * @summary Encodes a(n) F_UNLINK_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_UNLINK_request, encoded as an ASN.1 Element.
 */
export function _encode_F_UNLINK_request(
  value: F_UNLINK_request,
  elGetter: $.ASN1Encoder<F_UNLINK_request>
) {
  if (!_cached_encoder_for_F_UNLINK_request) {
    _cached_encoder_for_F_UNLINK_request = function (
      value: F_UNLINK_request    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.shared_ASE_information === undefined
              ? undefined
              : _encode_Shared_ASE_Information(
                  value.shared_ASE_information,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_UNLINK_request(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_UNLINK_request */

/* eslint-enable */
