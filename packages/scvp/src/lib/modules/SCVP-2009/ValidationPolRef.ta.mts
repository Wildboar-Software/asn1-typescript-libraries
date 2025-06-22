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
import * as $ from '@wildboar/asn1/functional';
/**
 * @summary ValidationPolRef
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidationPolRef ::= SEQUENCE {
 *     valPolId             POLICY.&id,
 *     valPolParams         POLICY.&Type OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ValidationPolRef {
  constructor(
    /**
     * @summary `valPolId`.
     * @public
     * @readonly
     */
    readonly valPolId: OBJECT_IDENTIFIER,
    /**
     * @summary `valPolParams`.
     * @public
     * @readonly
     */
    readonly valPolParams: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a ValidationPolRef
   * @description
   *
   * This takes an `object` and converts it to a `ValidationPolRef`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ValidationPolRef`.
   * @returns {ValidationPolRef}
   */
  public static _from_object(
    _o: { [_K in keyof ValidationPolRef]: ValidationPolRef[_K] }
  ): ValidationPolRef {
    return new ValidationPolRef(_o.valPolId, _o.valPolParams);
  }
}

/**
 * @summary The Leading Root Component Types of ValidationPolRef
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ValidationPolRef: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'valPolId',
    false,
    $.hasTag(_TagClass.universal, 6)
  ),
  new $.ComponentSpec('valPolParams', true, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of ValidationPolRef
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValidationPolRef: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ValidationPolRef
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValidationPolRef: $.ComponentSpec[] = [];

let _cached_decoder_for_ValidationPolRef: $.ASN1Decoder<ValidationPolRef> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValidationPolRef
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidationPolRef} The decoded data structure.
 */
export function _decode_ValidationPolRef(el: _Element) {
  if (!_cached_decoder_for_ValidationPolRef) {
    _cached_decoder_for_ValidationPolRef = function (
      el: _Element
    ): ValidationPolRef {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let valPolId!: OBJECT_IDENTIFIER;
      let valPolParams: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        valPolId: (_el: _Element): void => {
          valPolId = $._decodeObjectIdentifier(_el);
        },
        valPolParams: (_el: _Element): void => {
          valPolParams = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ValidationPolRef,
        _extension_additions_list_spec_for_ValidationPolRef,
        _root_component_type_list_2_spec_for_ValidationPolRef,
        undefined
      );
      return new ValidationPolRef /* SEQUENCE_CONSTRUCTOR_CALL */(
        valPolId,
        valPolParams
      );
    };
  }
  return _cached_decoder_for_ValidationPolRef(el);
}

let _cached_encoder_for_ValidationPolRef: $.ASN1Encoder<ValidationPolRef> | null = null;

/**
 * @summary Encodes a(n) ValidationPolRef into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidationPolRef, encoded as an ASN.1 Element.
 */
export function _encode_ValidationPolRef(
  value: ValidationPolRef,
  elGetter: $.ASN1Encoder<ValidationPolRef>
) {
  if (!_cached_encoder_for_ValidationPolRef) {
    _cached_encoder_for_ValidationPolRef = function (
      value: ValidationPolRef    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.valPolId, $.DER),
            /* IF_ABSENT  */ value.valPolParams === undefined
              ? undefined
              : $._encodeAny(value.valPolParams, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_ValidationPolRef(value, elGetter);
}


/* eslint-enable */
