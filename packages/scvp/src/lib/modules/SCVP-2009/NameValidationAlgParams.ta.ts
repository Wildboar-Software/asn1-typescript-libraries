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
  GeneralNames,
  _decode_GeneralNames,
  _encode_GeneralNames,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta';

/* START_OF_SYMBOL_DEFINITION NameValidationAlgParams */
/**
 * @summary NameValidationAlgParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameValidationAlgParams ::= SEQUENCE {
 *     nameCompAlgId          OBJECT IDENTIFIER (NameCompAlgSet, ... ),
 *     validationNames        GeneralNames
 * }
 * ```
 *
 * @class
 */
export class NameValidationAlgParams {
  constructor(
    /**
     * @summary `nameCompAlgId`.
     * @public
     * @readonly
     */
    readonly nameCompAlgId: OBJECT_IDENTIFIER,
    /**
     * @summary `validationNames`.
     * @public
     * @readonly
     */
    readonly validationNames: GeneralNames
  ) {}

  /**
   * @summary Restructures an object into a NameValidationAlgParams
   * @description
   *
   * This takes an `object` and converts it to a `NameValidationAlgParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NameValidationAlgParams`.
   * @returns {NameValidationAlgParams}
   */
  public static _from_object(
    _o: { [_K in keyof NameValidationAlgParams]: NameValidationAlgParams[_K] }
  ): NameValidationAlgParams {
    return new NameValidationAlgParams(_o.nameCompAlgId, _o.validationNames);
  }
}
/* END_OF_SYMBOL_DEFINITION NameValidationAlgParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameValidationAlgParams */
/**
 * @summary The Leading Root Component Types of NameValidationAlgParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameValidationAlgParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'nameCompAlgId',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'validationNames',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameValidationAlgParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameValidationAlgParams */
/**
 * @summary The Trailing Root Component Types of NameValidationAlgParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameValidationAlgParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameValidationAlgParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameValidationAlgParams */
/**
 * @summary The Extension Addition Component Types of NameValidationAlgParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameValidationAlgParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameValidationAlgParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameValidationAlgParams */
let _cached_decoder_for_NameValidationAlgParams: $.ASN1Decoder<NameValidationAlgParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameValidationAlgParams */

/* START_OF_SYMBOL_DEFINITION _decode_NameValidationAlgParams */
/**
 * @summary Decodes an ASN.1 element into a(n) NameValidationAlgParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameValidationAlgParams} The decoded data structure.
 */
export function _decode_NameValidationAlgParams(el: _Element) {
  if (!_cached_decoder_for_NameValidationAlgParams) {
    _cached_decoder_for_NameValidationAlgParams = function (
      el: _Element
    ): NameValidationAlgParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'NameValidationAlgParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'nameCompAlgId';
      sequence[1].name = 'validationNames';
      let nameCompAlgId!: OBJECT_IDENTIFIER;
      let validationNames!: GeneralNames;
      nameCompAlgId = $._decodeObjectIdentifier(sequence[0]);
      validationNames = _decode_GeneralNames(sequence[1]);
      return new NameValidationAlgParams(nameCompAlgId, validationNames);
    };
  }
  return _cached_decoder_for_NameValidationAlgParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameValidationAlgParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameValidationAlgParams */
let _cached_encoder_for_NameValidationAlgParams: $.ASN1Encoder<NameValidationAlgParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameValidationAlgParams */

/* START_OF_SYMBOL_DEFINITION _encode_NameValidationAlgParams */
/**
 * @summary Encodes a(n) NameValidationAlgParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameValidationAlgParams, encoded as an ASN.1 Element.
 */
export function _encode_NameValidationAlgParams(
  value: NameValidationAlgParams,
  elGetter: $.ASN1Encoder<NameValidationAlgParams>
) {
  if (!_cached_encoder_for_NameValidationAlgParams) {
    _cached_encoder_for_NameValidationAlgParams = function (
      value: NameValidationAlgParams,
      elGetter: $.ASN1Encoder<NameValidationAlgParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(
              value.nameCompAlgId,
              $.BER
            ),
            /* REQUIRED   */ _encode_GeneralNames(value.validationNames, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NameValidationAlgParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameValidationAlgParams */

/* eslint-enable */
