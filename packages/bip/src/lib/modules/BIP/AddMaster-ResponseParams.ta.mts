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
  BioAPI_FRAMEWORK_SCHEMA,
  _decode_BioAPI_FRAMEWORK_SCHEMA,
  _encode_BioAPI_FRAMEWORK_SCHEMA,
} from '../BIP/BioAPI-FRAMEWORK-SCHEMA.ta.mjs';
import {
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta.mjs';
import {
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.mjs';

/**
 * @summary AddMaster_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddMaster-ResponseParams ::= SEQUENCE {
 *   fwSchema    BioAPI-FRAMEWORK-SCHEMA OPTIONAL,
 *   bspSchemas
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF bspSchema BioAPI-BSP-SCHEMA,
 *   bfpSchemas
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF bfpSchema BioAPI-BFP-SCHEMA
 * }
 * ```
 *
 * @class
 */
export class AddMaster_ResponseParams {
  constructor(
    /**
     * @summary `fwSchema`.
     * @public
     * @readonly
     */
    readonly fwSchema: OPTIONAL<BioAPI_FRAMEWORK_SCHEMA>,
    /**
     * @summary `bspSchemas`.
     * @public
     * @readonly
     */
    readonly bspSchemas: BioAPI_BSP_SCHEMA[],
    /**
     * @summary `bfpSchemas`.
     * @public
     * @readonly
     */
    readonly bfpSchemas: BioAPI_BFP_SCHEMA[]
  ) {}

  /**
   * @summary Restructures an object into a AddMaster_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `AddMaster_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AddMaster_ResponseParams`.
   * @returns {AddMaster_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof AddMaster_ResponseParams]: AddMaster_ResponseParams[_K] }
  ): AddMaster_ResponseParams {
    return new AddMaster_ResponseParams(
      _o.fwSchema,
      _o.bspSchemas,
      _o.bfpSchemas
    );
  }
}


/**
 * @summary The Leading Root Component Types of AddMaster_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddMaster_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'fwSchema',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'bspSchemas',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'bfpSchemas',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of AddMaster_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddMaster_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddMaster_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddMaster_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_AddMaster_ResponseParams: $.ASN1Decoder<AddMaster_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddMaster_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddMaster_ResponseParams} The decoded data structure.
 */
export function _decode_AddMaster_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_AddMaster_ResponseParams) {
    _cached_decoder_for_AddMaster_ResponseParams = function (
      el: _Element
    ): AddMaster_ResponseParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let fwSchema: OPTIONAL<BioAPI_FRAMEWORK_SCHEMA>;
      let bspSchemas!: BioAPI_BSP_SCHEMA[];
      let bfpSchemas!: BioAPI_BFP_SCHEMA[];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        fwSchema: (_el: _Element): void => {
          fwSchema = _decode_BioAPI_FRAMEWORK_SCHEMA(_el);
        },
        bspSchemas: (_el: _Element): void => {
          bspSchemas = $._decodeSequenceOf<BioAPI_BSP_SCHEMA>(
            () => _decode_BioAPI_BSP_SCHEMA
          )(_el);
        },
        bfpSchemas: (_el: _Element): void => {
          bfpSchemas = $._decodeSequenceOf<BioAPI_BFP_SCHEMA>(
            () => _decode_BioAPI_BFP_SCHEMA
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AddMaster_ResponseParams,
        _extension_additions_list_spec_for_AddMaster_ResponseParams,
        _root_component_type_list_2_spec_for_AddMaster_ResponseParams,
        undefined
      );
      return new AddMaster_ResponseParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        fwSchema,
        bspSchemas,
        bfpSchemas
      );
    };
  }
  return _cached_decoder_for_AddMaster_ResponseParams(el);
}


let _cached_encoder_for_AddMaster_ResponseParams: $.ASN1Encoder<AddMaster_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) AddMaster_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddMaster_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_AddMaster_ResponseParams(
  value: AddMaster_ResponseParams,
  elGetter: $.ASN1Encoder<AddMaster_ResponseParams>
) {
  if (!_cached_encoder_for_AddMaster_ResponseParams) {
    _cached_encoder_for_AddMaster_ResponseParams = function (
      value: AddMaster_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.fwSchema === undefined
              ? undefined
              : _encode_BioAPI_FRAMEWORK_SCHEMA(value.fwSchema, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_BSP_SCHEMA>(
              () => _encode_BioAPI_BSP_SCHEMA,
              $.BER
            )(value.bspSchemas, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_BFP_SCHEMA>(
              () => _encode_BioAPI_BFP_SCHEMA,
              $.BER
            )(value.bfpSchemas, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AddMaster_ResponseParams(value, elGetter);
}


/* eslint-enable */
