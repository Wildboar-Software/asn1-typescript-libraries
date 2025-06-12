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
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';
export { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION SubsequentPdv */
/**
 * @summary SubsequentPdv
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubsequentPdv{SECURITY-TRANSFORMATION:ValidSTs} ::= SEQUENCE {
 *   dynamicUnprotParm
 *     SECURITY-TRANSFORMATION.&DynamicUnprotectedParm({ValidSTs}) OPTIONAL,
 *   xformedData        SECURITY-TRANSFORMATION.&XformedDataType({ValidSTs})
 *   -- Actual member of ValidSTs is implied
 *   -- by presentation context
 * }
 * ```
 *
 * @class
 */
export class SubsequentPdv {
  constructor(
    /**
     * @summary `dynamicUnprotParm`.
     * @public
     * @readonly
     */
    readonly dynamicUnprotParm: OPTIONAL<_Element>,
    /**
     * @summary `xformedData`.
     * @public
     * @readonly
     */
    readonly xformedData: _Element
  ) {}

  /**
   * @summary Restructures an object into a SubsequentPdv
   * @description
   *
   * This takes an `object` and converts it to a `SubsequentPdv`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SubsequentPdv`.
   * @returns {SubsequentPdv}
   */
  public static _from_object(
    _o: { [_K in keyof SubsequentPdv]: SubsequentPdv[_K] }
  ): SubsequentPdv {
    return new SubsequentPdv(_o.dynamicUnprotParm, _o.xformedData);
  }
}
/* END_OF_SYMBOL_DEFINITION SubsequentPdv */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubsequentPdv */
/**
 * @summary The Leading Root Component Types of SubsequentPdv
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubsequentPdv: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'dynamicUnprotParm',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'xformedData',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubsequentPdv */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubsequentPdv */
/**
 * @summary The Trailing Root Component Types of SubsequentPdv
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubsequentPdv: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubsequentPdv */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubsequentPdv */
/**
 * @summary The Extension Addition Component Types of SubsequentPdv
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubsequentPdv: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubsequentPdv */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubsequentPdv */
let _cached_decoder_for_SubsequentPdv: $.ASN1Decoder<SubsequentPdv> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubsequentPdv */

/* START_OF_SYMBOL_DEFINITION _decode_SubsequentPdv */
/**
 * @summary Decodes an ASN.1 element into a(n) SubsequentPdv
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubsequentPdv} The decoded data structure.
 */
export function _decode_SubsequentPdv(el: _Element) {
  if (!_cached_decoder_for_SubsequentPdv) {
    _cached_decoder_for_SubsequentPdv = function (el: _Element): SubsequentPdv {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let dynamicUnprotParm: OPTIONAL<_Element>;
      let xformedData!: _Element;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        dynamicUnprotParm: (_el: _Element): void => {
          dynamicUnprotParm = $._decodeAny(_el);
        },
        xformedData: (_el: _Element): void => {
          xformedData = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SubsequentPdv,
        _extension_additions_list_spec_for_SubsequentPdv,
        _root_component_type_list_2_spec_for_SubsequentPdv,
        undefined
      );
      return new SubsequentPdv /* SEQUENCE_CONSTRUCTOR_CALL */(
        dynamicUnprotParm,
        xformedData
      );
    };
  }
  return _cached_decoder_for_SubsequentPdv(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubsequentPdv */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubsequentPdv */
let _cached_encoder_for_SubsequentPdv: $.ASN1Encoder<SubsequentPdv> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubsequentPdv */

/* START_OF_SYMBOL_DEFINITION _encode_SubsequentPdv */
/**
 * @summary Encodes a(n) SubsequentPdv into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubsequentPdv, encoded as an ASN.1 Element.
 */
export function _encode_SubsequentPdv(
  value: SubsequentPdv,
  elGetter: $.ASN1Encoder<SubsequentPdv>
) {
  if (!_cached_encoder_for_SubsequentPdv) {
    _cached_encoder_for_SubsequentPdv = function (
      value: SubsequentPdv,
      elGetter: $.ASN1Encoder<SubsequentPdv>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.dynamicUnprotParm === undefined
              ? undefined
              : $._encodeAny(value.dynamicUnprotParm, $.BER),
            /* REQUIRED   */ $._encodeAny(value.xformedData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SubsequentPdv(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubsequentPdv */

/* eslint-enable */
