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

/* START_OF_SYMBOL_DEFINITION SBFormat */
/**
 * @summary SBFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SBFormat ::= SEQUENCE {
 *   sb-owner  INTEGER(1..65535) OPTIONAL,
 *   sb-type   INTEGER(1..65535) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SBFormat {
  constructor(
    /**
     * @summary `sb_owner`.
     * @public
     * @readonly
     */
    readonly sb_owner: OPTIONAL<INTEGER>,
    /**
     * @summary `sb_type`.
     * @public
     * @readonly
     */
    readonly sb_type: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a SBFormat
   * @description
   *
   * This takes an `object` and converts it to a `SBFormat`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SBFormat`.
   * @returns {SBFormat}
   */
  public static _from_object(
    _o: { [_K in keyof SBFormat]: SBFormat[_K] }
  ): SBFormat {
    return new SBFormat(_o.sb_owner, _o.sb_type);
  }
}
/* END_OF_SYMBOL_DEFINITION SBFormat */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SBFormat */
/**
 * @summary The Leading Root Component Types of SBFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SBFormat: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'sb-owner',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'sb-type',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SBFormat */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SBFormat */
/**
 * @summary The Trailing Root Component Types of SBFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SBFormat: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SBFormat */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SBFormat */
/**
 * @summary The Extension Addition Component Types of SBFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SBFormat: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SBFormat */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SBFormat */
let _cached_decoder_for_SBFormat: $.ASN1Decoder<SBFormat> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SBFormat */

/* START_OF_SYMBOL_DEFINITION _decode_SBFormat */
/**
 * @summary Decodes an ASN.1 element into a(n) SBFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SBFormat} The decoded data structure.
 */
export function _decode_SBFormat(el: _Element) {
  if (!_cached_decoder_for_SBFormat) {
    _cached_decoder_for_SBFormat = function (el: _Element): SBFormat {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let sb_owner: OPTIONAL<INTEGER>;
      let sb_type: OPTIONAL<INTEGER>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'sb-owner': (_el: _Element): void => {
          sb_owner = $._decodeInteger(_el);
        },
        'sb-type': (_el: _Element): void => {
          sb_type = $._decodeInteger(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SBFormat,
        _extension_additions_list_spec_for_SBFormat,
        _root_component_type_list_2_spec_for_SBFormat,
        undefined
      );
      return new SBFormat /* SEQUENCE_CONSTRUCTOR_CALL */(sb_owner, sb_type);
    };
  }
  return _cached_decoder_for_SBFormat(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SBFormat */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SBFormat */
let _cached_encoder_for_SBFormat: $.ASN1Encoder<SBFormat> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SBFormat */

/* START_OF_SYMBOL_DEFINITION _encode_SBFormat */
/**
 * @summary Encodes a(n) SBFormat into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBFormat, encoded as an ASN.1 Element.
 */
export function _encode_SBFormat(
  value: SBFormat,
  elGetter: $.ASN1Encoder<SBFormat>
) {
  if (!_cached_encoder_for_SBFormat) {
    _cached_encoder_for_SBFormat = function (
      value: SBFormat,
      elGetter: $.ASN1Encoder<SBFormat>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.sb_owner === undefined
              ? undefined
              : $._encodeInteger(value.sb_owner, $.BER),
            /* IF_ABSENT  */ value.sb_type === undefined
              ? undefined
              : $._encodeInteger(value.sb_type, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SBFormat(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SBFormat */

/* eslint-enable */
