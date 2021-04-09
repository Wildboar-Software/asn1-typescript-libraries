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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta';
export {
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta';

/* START_OF_SYMBOL_DEFINITION PA_DATA */
/**
 * @summary PA_DATA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PA-DATA ::= SEQUENCE {
 *         -- NOTE: first tag is [1], not [0]
 *         padata-type     [1] Int32,
 *         padata-value    [2] OCTET STRING -- might be encoded AP-REQ
 * }
 * ```
 *
 * @class
 */
export class PA_DATA {
  constructor(
    /**
     * @summary `padata_type`.
     * @public
     * @readonly
     */
    readonly padata_type: Int32,
    /**
     * @summary `padata_value`.
     * @public
     * @readonly
     */
    readonly padata_value: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a PA_DATA
   * @description
   *
   * This takes an `object` and converts it to a `PA_DATA`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PA_DATA`.
   * @returns {PA_DATA}
   */
  public static _from_object(
    _o: { [_K in keyof PA_DATA]: PA_DATA[_K] }
  ): PA_DATA {
    return new PA_DATA(_o.padata_type, _o.padata_value);
  }
}
/* END_OF_SYMBOL_DEFINITION PA_DATA */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PA_DATA */
/**
 * @summary The Leading Root Component Types of PA_DATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PA_DATA: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'padata-type',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'padata-value',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PA_DATA */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PA_DATA */
/**
 * @summary The Trailing Root Component Types of PA_DATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PA_DATA: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PA_DATA */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PA_DATA */
/**
 * @summary The Extension Addition Component Types of PA_DATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PA_DATA: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PA_DATA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PA_DATA */
let _cached_decoder_for_PA_DATA: $.ASN1Decoder<PA_DATA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PA_DATA */

/* START_OF_SYMBOL_DEFINITION _decode_PA_DATA */
/**
 * @summary Decodes an ASN.1 element into a(n) PA_DATA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PA_DATA} The decoded data structure.
 */
export function _decode_PA_DATA(el: _Element) {
  if (!_cached_decoder_for_PA_DATA) {
    _cached_decoder_for_PA_DATA = function (el: _Element): PA_DATA {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'PA-DATA contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'padata-type';
      sequence[1].name = 'padata-value';
      let padata_type!: Int32;
      let padata_value!: OCTET_STRING;
      padata_type = $._decode_explicit<Int32>(() => _decode_Int32)(sequence[0]);
      padata_value = $._decode_explicit<OCTET_STRING>(
        () => $._decodeOctetString
      )(sequence[1]);
      return new PA_DATA(padata_type, padata_value);
    };
  }
  return _cached_decoder_for_PA_DATA(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PA_DATA */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PA_DATA */
let _cached_encoder_for_PA_DATA: $.ASN1Encoder<PA_DATA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PA_DATA */

/* START_OF_SYMBOL_DEFINITION _encode_PA_DATA */
/**
 * @summary Encodes a(n) PA_DATA into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_DATA, encoded as an ASN.1 Element.
 */
export function _encode_PA_DATA(
  value: PA_DATA,
  elGetter: $.ASN1Encoder<PA_DATA>
) {
  if (!_cached_encoder_for_PA_DATA) {
    _cached_encoder_for_PA_DATA = function (
      value: PA_DATA,
      elGetter: $.ASN1Encoder<PA_DATA>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_Int32,
              $.BER
            )(value.padata_type, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              2,
              () => $._encodeOctetString,
              $.BER
            )(value.padata_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PA_DATA(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PA_DATA */

/* eslint-enable */
