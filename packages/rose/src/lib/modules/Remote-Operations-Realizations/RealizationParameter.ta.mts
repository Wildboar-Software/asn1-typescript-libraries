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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  RealizationParameter_realization_type,
  _enum_for_RealizationParameter_realization_type,
  RealizationParameter_realization_type_association_service /* IMPORTED_LONG_ENUMERATION_ITEM */,
  association_service /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RealizationParameter_realization_type_transfer_service /* IMPORTED_LONG_ENUMERATION_ITEM */,
  transfer_service /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_RealizationParameter_realization_type,
  _encode_RealizationParameter_realization_type,
} from '../Remote-Operations-Realizations/RealizationParameter-realization-type.ta.mjs';
export {
  RealizationParameter_realization_type,
  _enum_for_RealizationParameter_realization_type,
  RealizationParameter_realization_type_association_service /* IMPORTED_LONG_ENUMERATION_ITEM */,
  association_service /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  RealizationParameter_realization_type_transfer_service /* IMPORTED_LONG_ENUMERATION_ITEM */,
  transfer_service /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_RealizationParameter_realization_type,
  _encode_RealizationParameter_realization_type,
} from '../Remote-Operations-Realizations/RealizationParameter-realization-type.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RealizationParameter */
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
 * @class
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
  public static get _default_value_for_concatenation() {
    return false;
  }
  /**
   * @summary The enum used as the type of the component `realization_type`
   * @public
   * @static
   */

  public static _enum_for_realization_type = _enum_for_RealizationParameter_realization_type;
}
/* END_OF_SYMBOL_DEFINITION RealizationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RealizationParameter */
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
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'concatenation',
    true,
    $.hasTag(_TagClass.universal, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RealizationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RealizationParameter */
/**
 * @summary The Trailing Root Component Types of RealizationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RealizationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RealizationParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RealizationParameter */
/**
 * @summary The Extension Addition Component Types of RealizationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RealizationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RealizationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RealizationParameter */
let _cached_decoder_for_RealizationParameter: $.ASN1Decoder<RealizationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RealizationParameter */

/* START_OF_SYMBOL_DEFINITION _decode_RealizationParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) RealizationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RealizationParameter} The decoded data structure.
 */
export function _decode_RealizationParameter(el: _Element) {
  if (!_cached_decoder_for_RealizationParameter) {
    _cached_decoder_for_RealizationParameter = function (
      el: _Element
    ): RealizationParameter {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let realization_type!: RealizationParameter_realization_type;
      let concatenation: OPTIONAL<BOOLEAN> =
        RealizationParameter._default_value_for_concatenation;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'realization-type': (_el: _Element): void => {
          realization_type = _decode_RealizationParameter_realization_type(_el);
        },
        concatenation: (_el: _Element): void => {
          concatenation = $._decodeBoolean(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RealizationParameter,
        _extension_additions_list_spec_for_RealizationParameter,
        _root_component_type_list_2_spec_for_RealizationParameter,
        undefined
      );
      return new RealizationParameter /* SEQUENCE_CONSTRUCTOR_CALL */(
        realization_type,
        concatenation
      );
    };
  }
  return _cached_decoder_for_RealizationParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RealizationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RealizationParameter */
let _cached_encoder_for_RealizationParameter: $.ASN1Encoder<RealizationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RealizationParameter */

/* START_OF_SYMBOL_DEFINITION _encode_RealizationParameter */
/**
 * @summary Encodes a(n) RealizationParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RealizationParameter, encoded as an ASN.1 Element.
 */
export function _encode_RealizationParameter(
  value: RealizationParameter,
  elGetter: $.ASN1Encoder<RealizationParameter>
) {
  if (!_cached_encoder_for_RealizationParameter) {
    _cached_encoder_for_RealizationParameter = function (
      value: RealizationParameter,
      elGetter: $.ASN1Encoder<RealizationParameter>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_RealizationParameter */

/* eslint-enable */
