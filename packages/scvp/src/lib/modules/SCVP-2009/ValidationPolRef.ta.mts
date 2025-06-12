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
import { POLICY } from '../SCVP-2009/POLICY.oca.mjs';
export { POLICY } from '../SCVP-2009/POLICY.oca.mjs';

/* START_OF_SYMBOL_DEFINITION ValidationPolRef */
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
/* END_OF_SYMBOL_DEFINITION ValidationPolRef */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ValidationPolRef */
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
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec('valPolParams', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ValidationPolRef */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ValidationPolRef */
/**
 * @summary The Trailing Root Component Types of ValidationPolRef
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValidationPolRef: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ValidationPolRef */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ValidationPolRef */
/**
 * @summary The Extension Addition Component Types of ValidationPolRef
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValidationPolRef: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ValidationPolRef */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidationPolRef */
let _cached_decoder_for_ValidationPolRef: $.ASN1Decoder<ValidationPolRef> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidationPolRef */

/* START_OF_SYMBOL_DEFINITION _decode_ValidationPolRef */
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
/* END_OF_SYMBOL_DEFINITION _decode_ValidationPolRef */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidationPolRef */
let _cached_encoder_for_ValidationPolRef: $.ASN1Encoder<ValidationPolRef> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidationPolRef */

/* START_OF_SYMBOL_DEFINITION _encode_ValidationPolRef */
/**
 * @summary Encodes a(n) ValidationPolRef into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidationPolRef, encoded as an ASN.1 Element.
 */
export function _encode_ValidationPolRef(
  value: ValidationPolRef,
  elGetter: $.ASN1Encoder<ValidationPolRef>
) {
  if (!_cached_encoder_for_ValidationPolRef) {
    _cached_encoder_for_ValidationPolRef = function (
      value: ValidationPolRef,
      elGetter: $.ASN1Encoder<ValidationPolRef>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.valPolId, $.BER),
            /* IF_ABSENT  */ value.valPolParams === undefined
              ? undefined
              : $._encodeAny(value.valPolParams, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ValidationPolRef(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ValidationPolRef */

/* eslint-enable */
