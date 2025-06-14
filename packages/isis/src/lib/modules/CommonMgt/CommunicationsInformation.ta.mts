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
  InformationType,
  _decode_InformationType,
  _encode_InformationType,
} from '../CommonMgt/InformationType.ta.mjs';
import {
  InformationData,
  _decode_InformationData,
  _encode_InformationData,
} from '../CommonMgt/InformationData.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CommunicationsInformation */
/**
 * @summary CommunicationsInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsInformation ::= SEQUENCE {
 *   informationType  InformationType,
 *   informationData  InformationData OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CommunicationsInformation {
  constructor(
    /**
     * @summary `informationType`.
     * @public
     * @readonly
     */
    readonly informationType: InformationType,
    /**
     * @summary `informationData`.
     * @public
     * @readonly
     */
    readonly informationData: OPTIONAL<InformationData>
  ) {}

  /**
   * @summary Restructures an object into a CommunicationsInformation
   * @description
   *
   * This takes an `object` and converts it to a `CommunicationsInformation`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CommunicationsInformation`.
   * @returns {CommunicationsInformation}
   */
  public static _from_object(
    _o: {
      [_K in keyof CommunicationsInformation]: CommunicationsInformation[_K];
    }
  ): CommunicationsInformation {
    return new CommunicationsInformation(
      _o.informationType,
      _o.informationData
    );
  }
}
/* END_OF_SYMBOL_DEFINITION CommunicationsInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommunicationsInformation */
/**
 * @summary The Leading Root Component Types of CommunicationsInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommunicationsInformation: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'informationType',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'informationData',
    true,
    $.hasTag(_TagClass.universal, 17),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommunicationsInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommunicationsInformation */
/**
 * @summary The Trailing Root Component Types of CommunicationsInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommunicationsInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommunicationsInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommunicationsInformation */
/**
 * @summary The Extension Addition Component Types of CommunicationsInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommunicationsInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommunicationsInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommunicationsInformation */
let _cached_decoder_for_CommunicationsInformation: $.ASN1Decoder<CommunicationsInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommunicationsInformation */

/* START_OF_SYMBOL_DEFINITION _decode_CommunicationsInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommunicationsInformation} The decoded data structure.
 */
export function _decode_CommunicationsInformation(el: _Element) {
  if (!_cached_decoder_for_CommunicationsInformation) {
    _cached_decoder_for_CommunicationsInformation = function (
      el: _Element
    ): CommunicationsInformation {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let informationType!: InformationType;
      let informationData: OPTIONAL<InformationData>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        informationType: (_el: _Element): void => {
          informationType = _decode_InformationType(_el);
        },
        informationData: (_el: _Element): void => {
          informationData = _decode_InformationData(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CommunicationsInformation,
        _extension_additions_list_spec_for_CommunicationsInformation,
        _root_component_type_list_2_spec_for_CommunicationsInformation,
        undefined
      );
      return new CommunicationsInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
        informationType,
        informationData
      );
    };
  }
  return _cached_decoder_for_CommunicationsInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommunicationsInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommunicationsInformation */
let _cached_encoder_for_CommunicationsInformation: $.ASN1Encoder<CommunicationsInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommunicationsInformation */

/* START_OF_SYMBOL_DEFINITION _encode_CommunicationsInformation */
/**
 * @summary Encodes a(n) CommunicationsInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsInformation, encoded as an ASN.1 Element.
 */
export function _encode_CommunicationsInformation(
  value: CommunicationsInformation,
  elGetter: $.ASN1Encoder<CommunicationsInformation>
) {
  if (!_cached_encoder_for_CommunicationsInformation) {
    _cached_encoder_for_CommunicationsInformation = function (
      value: CommunicationsInformation    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_InformationType(
              value.informationType,
              $.BER
            ),
            /* IF_ABSENT  */ value.informationData === undefined
              ? undefined
              : _encode_InformationData(value.informationData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CommunicationsInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommunicationsInformation */

/* eslint-enable */
