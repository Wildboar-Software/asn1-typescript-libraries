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
import { POLICY } from '../SCVP-2009/POLICY.oca.js';
export { POLICY } from '../SCVP-2009/POLICY.oca.js';

/* START_OF_SYMBOL_DEFINITION ValidationAlg */
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
/* END_OF_SYMBOL_DEFINITION ValidationAlg */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ValidationAlg */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ValidationAlg */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ValidationAlg */
/**
 * @summary The Trailing Root Component Types of ValidationAlg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValidationAlg: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ValidationAlg */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ValidationAlg */
/**
 * @summary The Extension Addition Component Types of ValidationAlg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValidationAlg: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ValidationAlg */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidationAlg */
let _cached_decoder_for_ValidationAlg: $.ASN1Decoder<ValidationAlg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidationAlg */

/* START_OF_SYMBOL_DEFINITION _decode_ValidationAlg */
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
/* END_OF_SYMBOL_DEFINITION _decode_ValidationAlg */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidationAlg */
let _cached_encoder_for_ValidationAlg: $.ASN1Encoder<ValidationAlg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidationAlg */

/* START_OF_SYMBOL_DEFINITION _encode_ValidationAlg */
/**
 * @summary Encodes a(n) ValidationAlg into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidationAlg, encoded as an ASN.1 Element.
 */
export function _encode_ValidationAlg(
  value: ValidationAlg,
  elGetter: $.ASN1Encoder<ValidationAlg>
) {
  if (!_cached_encoder_for_ValidationAlg) {
    _cached_encoder_for_ValidationAlg = function (
      value: ValidationAlg,
      elGetter: $.ASN1Encoder<ValidationAlg>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.valAlgId, $.BER),
            /* IF_ABSENT  */ value.parameters === undefined
              ? undefined
              : $._encodeAny(value.parameters, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ValidationAlg(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ValidationAlg */

/* eslint-enable */
