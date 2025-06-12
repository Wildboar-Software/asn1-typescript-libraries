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
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.js';
export {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.js';

/* START_OF_SYMBOL_DEFINITION ControlUnit_ResponseParams */
/**
 * @summary ControlUnit_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlUnit-ResponseParams ::= SEQUENCE {outputData  BioAPI-DATA
 * }
 * ```
 *
 * @class
 */
export class ControlUnit_ResponseParams {
  constructor(
    /**
     * @summary `outputData`.
     * @public
     * @readonly
     */
    readonly outputData: BioAPI_DATA
  ) {}

  /**
   * @summary Restructures an object into a ControlUnit_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `ControlUnit_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ControlUnit_ResponseParams`.
   * @returns {ControlUnit_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof ControlUnit_ResponseParams]: ControlUnit_ResponseParams[_K];
    }
  ): ControlUnit_ResponseParams {
    return new ControlUnit_ResponseParams(_o.outputData);
  }
}
/* END_OF_SYMBOL_DEFINITION ControlUnit_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ControlUnit_ResponseParams */
/**
 * @summary The Leading Root Component Types of ControlUnit_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ControlUnit_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'outputData',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ControlUnit_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ControlUnit_ResponseParams */
/**
 * @summary The Trailing Root Component Types of ControlUnit_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ControlUnit_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ControlUnit_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ControlUnit_ResponseParams */
/**
 * @summary The Extension Addition Component Types of ControlUnit_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ControlUnit_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ControlUnit_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlUnit_ResponseParams */
let _cached_decoder_for_ControlUnit_ResponseParams: $.ASN1Decoder<ControlUnit_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlUnit_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_ControlUnit_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlUnit_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlUnit_ResponseParams} The decoded data structure.
 */
export function _decode_ControlUnit_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_ControlUnit_ResponseParams) {
    _cached_decoder_for_ControlUnit_ResponseParams = function (
      el: _Element
    ): ControlUnit_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'ControlUnit-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'outputData';
      let outputData!: BioAPI_DATA;
      outputData = _decode_BioAPI_DATA(sequence[0]);
      return new ControlUnit_ResponseParams(outputData);
    };
  }
  return _cached_decoder_for_ControlUnit_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlUnit_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlUnit_ResponseParams */
let _cached_encoder_for_ControlUnit_ResponseParams: $.ASN1Encoder<ControlUnit_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlUnit_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_ControlUnit_ResponseParams */
/**
 * @summary Encodes a(n) ControlUnit_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlUnit_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_ControlUnit_ResponseParams(
  value: ControlUnit_ResponseParams,
  elGetter: $.ASN1Encoder<ControlUnit_ResponseParams>
) {
  if (!_cached_encoder_for_ControlUnit_ResponseParams) {
    _cached_encoder_for_ControlUnit_ResponseParams = function (
      value: ControlUnit_ResponseParams,
      elGetter: $.ASN1Encoder<ControlUnit_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_DATA(value.outputData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ControlUnit_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlUnit_ResponseParams */

/* eslint-enable */
