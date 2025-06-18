/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
  GeneralNames,
  _decode_GeneralNames,
  _encode_GeneralNames,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta.mjs';

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

/**
 * @summary The Trailing Root Component Types of NameValidationAlgParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameValidationAlgParams: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NameValidationAlgParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameValidationAlgParams: $.ComponentSpec[] = [];

let _cached_decoder_for_NameValidationAlgParams: $.ASN1Decoder<NameValidationAlgParams> | null = null;

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

let _cached_encoder_for_NameValidationAlgParams: $.ASN1Encoder<NameValidationAlgParams> | null = null;

/**
 * @summary Encodes a(n) NameValidationAlgParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameValidationAlgParams, encoded as an ASN.1 Element.
 */
export function _encode_NameValidationAlgParams(
  value: NameValidationAlgParams,
  elGetter: $.ASN1Encoder<NameValidationAlgParams>
) {
  if (!_cached_encoder_for_NameValidationAlgParams) {
    _cached_encoder_for_NameValidationAlgParams = function (
      value: NameValidationAlgParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(
              value.nameCompAlgId,
              $.DER
            ),
            /* REQUIRED   */ _encode_GeneralNames(value.validationNames, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_NameValidationAlgParams(value, elGetter);
}


/* eslint-enable */
