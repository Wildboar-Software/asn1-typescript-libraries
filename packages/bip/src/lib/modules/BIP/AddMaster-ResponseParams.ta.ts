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
  BioAPI_FRAMEWORK_SCHEMA,
  _decode_BioAPI_FRAMEWORK_SCHEMA,
  _encode_BioAPI_FRAMEWORK_SCHEMA,
} from '../BIP/BioAPI-FRAMEWORK-SCHEMA.ta';
export {
  BioAPI_FRAMEWORK_SCHEMA,
  _decode_BioAPI_FRAMEWORK_SCHEMA,
  _encode_BioAPI_FRAMEWORK_SCHEMA,
} from '../BIP/BioAPI-FRAMEWORK-SCHEMA.ta';
import {
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta';
export {
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta';
import {
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta';
export {
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta';

/* START_OF_SYMBOL_DEFINITION AddMaster_ResponseParams */
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
/* END_OF_SYMBOL_DEFINITION AddMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddMaster_ResponseParams */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspSchemas',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bfpSchemas',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddMaster_ResponseParams */
/**
 * @summary The Trailing Root Component Types of AddMaster_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddMaster_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddMaster_ResponseParams */
/**
 * @summary The Extension Addition Component Types of AddMaster_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddMaster_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddMaster_ResponseParams */
let _cached_decoder_for_AddMaster_ResponseParams: $.ASN1Decoder<AddMaster_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_AddMaster_ResponseParams */
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
/* END_OF_SYMBOL_DEFINITION _decode_AddMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddMaster_ResponseParams */
let _cached_encoder_for_AddMaster_ResponseParams: $.ASN1Encoder<AddMaster_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_AddMaster_ResponseParams */
/**
 * @summary Encodes a(n) AddMaster_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddMaster_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_AddMaster_ResponseParams(
  value: AddMaster_ResponseParams,
  elGetter: $.ASN1Encoder<AddMaster_ResponseParams>
) {
  if (!_cached_encoder_for_AddMaster_ResponseParams) {
    _cached_encoder_for_AddMaster_ResponseParams = function (
      value: AddMaster_ResponseParams,
      elGetter: $.ASN1Encoder<AddMaster_ResponseParams>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_AddMaster_ResponseParams */

/* eslint-enable */
