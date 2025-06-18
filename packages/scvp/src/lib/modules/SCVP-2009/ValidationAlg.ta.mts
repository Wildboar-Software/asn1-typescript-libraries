/* eslint-disable */
import {
  OPTIONAL,
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
/**
 * @summary ValidationAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidationAlg ::= SEQUENCE {
 *     valAlgId               POLICY.&id,
 *     parameters             POLICY.&Type OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ValidationAlg {
  constructor(
    /**
     * @summary `valAlgId`.
     * @public
     * @readonly
     */
    readonly valAlgId: OBJECT_IDENTIFIER,
    /**
     * @summary `parameters`.
     * @public
     * @readonly
     */
    readonly parameters: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a ValidationAlg
   * @description
   *
   * This takes an `object` and converts it to a `ValidationAlg`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ValidationAlg`.
   * @returns {ValidationAlg}
   */
  public static _from_object(
    _o: { [_K in keyof ValidationAlg]: ValidationAlg[_K] }
  ): ValidationAlg {
    return new ValidationAlg(_o.valAlgId, _o.parameters);
  }
}

/**
 * @summary The Leading Root Component Types of ValidationAlg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ValidationAlg: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'valAlgId',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec('parameters', true, $.hasAnyTag, undefined, undefined),
];

/**
 * @summary The Trailing Root Component Types of ValidationAlg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValidationAlg: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ValidationAlg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValidationAlg: $.ComponentSpec[] = [];

let _cached_decoder_for_ValidationAlg: $.ASN1Decoder<ValidationAlg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValidationAlg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidationAlg} The decoded data structure.
 */
export function _decode_ValidationAlg(el: _Element) {
  if (!_cached_decoder_for_ValidationAlg) {
    _cached_decoder_for_ValidationAlg = function (el: _Element): ValidationAlg {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let valAlgId!: OBJECT_IDENTIFIER;
      let parameters: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        valAlgId: (_el: _Element): void => {
          valAlgId = $._decodeObjectIdentifier(_el);
        },
        parameters: (_el: _Element): void => {
          parameters = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ValidationAlg,
        _extension_additions_list_spec_for_ValidationAlg,
        _root_component_type_list_2_spec_for_ValidationAlg,
        undefined
      );
      return new ValidationAlg /* SEQUENCE_CONSTRUCTOR_CALL */(
        valAlgId,
        parameters
      );
    };
  }
  return _cached_decoder_for_ValidationAlg(el);
}

let _cached_encoder_for_ValidationAlg: $.ASN1Encoder<ValidationAlg> | null = null;

/**
 * @summary Encodes a(n) ValidationAlg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidationAlg, encoded as an ASN.1 Element.
 */
export function _encode_ValidationAlg(
  value: ValidationAlg,
  elGetter: $.ASN1Encoder<ValidationAlg>
) {
  if (!_cached_encoder_for_ValidationAlg) {
    _cached_encoder_for_ValidationAlg = function (
      value: ValidationAlg    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.valAlgId, $.DER),
            /* IF_ABSENT  */ value.parameters === undefined
              ? undefined
              : $._encodeAny(value.parameters, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_ValidationAlg(value, elGetter);
}


/* eslint-enable */
