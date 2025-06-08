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
import { KEY_INFORMATION } from '../GulsSecurityTransformations/KEY-INFORMATION.oca';
export { KEY_INFORMATION } from '../GulsSecurityTransformations/KEY-INFORMATION.oca';

/* START_OF_SYMBOL_DEFINITION gulsSignatureTransformation_XformedDataType_keyInformation */
/**
 * @summary gulsSignatureTransformation_XformedDataType_keyInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsSignatureTransformation-XformedDataType-keyInformation ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class gulsSignatureTransformation_XformedDataType_keyInformation {
  constructor(
    /**
     * @summary `kiClass`.
     * @public
     * @readonly
     */
    readonly kiClass: { local: INTEGER } | { global: OBJECT_IDENTIFIER },
    /**
     * @summary `keyInfo`.
     * @public
     * @readonly
     */
    readonly keyInfo: _Element
  ) {}

  /**
   * @summary Restructures an object into a gulsSignatureTransformation_XformedDataType_keyInformation
   * @description
   *
   * This takes an `object` and converts it to a `gulsSignatureTransformation_XformedDataType_keyInformation`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `gulsSignatureTransformation_XformedDataType_keyInformation`.
   * @returns {gulsSignatureTransformation_XformedDataType_keyInformation}
   */
  public static _from_object(
    _o: {
      [_K in keyof gulsSignatureTransformation_XformedDataType_keyInformation]: gulsSignatureTransformation_XformedDataType_keyInformation[_K];
    }
  ): gulsSignatureTransformation_XformedDataType_keyInformation {
    return new gulsSignatureTransformation_XformedDataType_keyInformation(
      _o.kiClass,
      _o.keyInfo
    );
  }
}
/* END_OF_SYMBOL_DEFINITION gulsSignatureTransformation_XformedDataType_keyInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation */
/**
 * @summary The Leading Root Component Types of gulsSignatureTransformation_XformedDataType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'kiClass',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'keyInfo',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation */
/**
 * @summary The Trailing Root Component Types of gulsSignatureTransformation_XformedDataType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation */
/**
 * @summary The Extension Addition Component Types of gulsSignatureTransformation_XformedDataType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation */
let _cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ASN1Decoder<gulsSignatureTransformation_XformedDataType_keyInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation */

/* START_OF_SYMBOL_DEFINITION _decode_gulsSignatureTransformation_XformedDataType_keyInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) gulsSignatureTransformation_XformedDataType_keyInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {gulsSignatureTransformation_XformedDataType_keyInformation} The decoded data structure.
 */
export function _decode_gulsSignatureTransformation_XformedDataType_keyInformation(
  el: _Element
) {
  if (
    !_cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation
  ) {
    _cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation = function (
      el: _Element
    ): gulsSignatureTransformation_XformedDataType_keyInformation {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'gulsSignatureTransformation-XformedDataType-keyInformation contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'kiClass';
      sequence[1].name = 'keyInfo';
      let kiClass!: { local: INTEGER } | { global: OBJECT_IDENTIFIER };
      let keyInfo!: _Element;
      kiClass = $._decode_inextensible_choice<typeof kiClass>({
        'UNIVERSAL 2': ['local', $._decodeInteger],
        'UNIVERSAL 6': ['global', $._decodeObjectIdentifier],
      })(sequence[0]);
      keyInfo = $._decodeAny(sequence[1]);
      return new gulsSignatureTransformation_XformedDataType_keyInformation(
        kiClass,
        keyInfo
      );
    };
  }
  return _cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation(
    el
  );
}
/* END_OF_SYMBOL_DEFINITION _decode_gulsSignatureTransformation_XformedDataType_keyInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation */
let _cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ASN1Encoder<gulsSignatureTransformation_XformedDataType_keyInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation */

/* START_OF_SYMBOL_DEFINITION _encode_gulsSignatureTransformation_XformedDataType_keyInformation */
/**
 * @summary Encodes a(n) gulsSignatureTransformation_XformedDataType_keyInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The gulsSignatureTransformation_XformedDataType_keyInformation, encoded as an ASN.1 Element.
 */
export function _encode_gulsSignatureTransformation_XformedDataType_keyInformation(
  value: gulsSignatureTransformation_XformedDataType_keyInformation,
  elGetter: $.ASN1Encoder<gulsSignatureTransformation_XformedDataType_keyInformation>
) {
  if (
    !_cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation
  ) {
    _cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation = function (
      value: gulsSignatureTransformation_XformedDataType_keyInformation,
      elGetter: $.ASN1Encoder<gulsSignatureTransformation_XformedDataType_keyInformation>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            ,
            /* FIXME: kiClass COULD_NOT_COMPILE_TYPE_ENCODER */ /* REQUIRED   */ $._encodeAny(
              value.keyInfo,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_gulsSignatureTransformation_XformedDataType_keyInformation */

/* eslint-enable */
