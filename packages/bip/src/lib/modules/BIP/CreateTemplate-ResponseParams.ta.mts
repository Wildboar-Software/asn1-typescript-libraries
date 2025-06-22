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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary CreateTemplate_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateTemplate-ResponseParams ::= SEQUENCE {
 *   newTemplate   BioAPI-BIR-HANDLE,
 *   templateUuid  BioAPI-UUID OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CreateTemplate_ResponseParams {
  constructor(
    /**
     * @summary `newTemplate`.
     * @public
     * @readonly
     */
    readonly newTemplate: BioAPI_BIR_HANDLE,
    /**
     * @summary `templateUuid`.
     * @public
     * @readonly
     */
    readonly templateUuid: OPTIONAL<BioAPI_UUID>
  ) {}

  /**
   * @summary Restructures an object into a CreateTemplate_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `CreateTemplate_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CreateTemplate_ResponseParams`.
   * @returns {CreateTemplate_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof CreateTemplate_ResponseParams]: CreateTemplate_ResponseParams[_K];
    }
  ): CreateTemplate_ResponseParams {
    return new CreateTemplate_ResponseParams(_o.newTemplate, _o.templateUuid);
  }
}


/**
 * @summary The Leading Root Component Types of CreateTemplate_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CreateTemplate_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'newTemplate',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'templateUuid',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of CreateTemplate_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CreateTemplate_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CreateTemplate_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CreateTemplate_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_CreateTemplate_ResponseParams: $.ASN1Decoder<CreateTemplate_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CreateTemplate_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateTemplate_ResponseParams} The decoded data structure.
 */
export function _decode_CreateTemplate_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_CreateTemplate_ResponseParams) {
    _cached_decoder_for_CreateTemplate_ResponseParams = function (
      el: _Element
    ): CreateTemplate_ResponseParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let newTemplate!: BioAPI_BIR_HANDLE;
      let templateUuid: OPTIONAL<BioAPI_UUID>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        newTemplate: (_el: _Element): void => {
          newTemplate = _decode_BioAPI_BIR_HANDLE(_el);
        },
        templateUuid: (_el: _Element): void => {
          templateUuid = _decode_BioAPI_UUID(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CreateTemplate_ResponseParams,
        _extension_additions_list_spec_for_CreateTemplate_ResponseParams,
        _root_component_type_list_2_spec_for_CreateTemplate_ResponseParams,
        undefined
      );
      return new CreateTemplate_ResponseParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        newTemplate,
        templateUuid
      );
    };
  }
  return _cached_decoder_for_CreateTemplate_ResponseParams(el);
}


let _cached_encoder_for_CreateTemplate_ResponseParams: $.ASN1Encoder<CreateTemplate_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) CreateTemplate_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateTemplate_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_CreateTemplate_ResponseParams(
  value: CreateTemplate_ResponseParams,
  elGetter: $.ASN1Encoder<CreateTemplate_ResponseParams>
) {
  if (!_cached_encoder_for_CreateTemplate_ResponseParams) {
    _cached_encoder_for_CreateTemplate_ResponseParams = function (
      value: CreateTemplate_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.newTemplate,
              $.BER
            ),
            /* IF_ABSENT  */ value.templateUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.templateUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CreateTemplate_ResponseParams(value, elGetter);
}


/* eslint-enable */
