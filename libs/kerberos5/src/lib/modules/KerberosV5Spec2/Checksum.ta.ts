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

/* START_OF_SYMBOL_DEFINITION Checksum */
/**
 * @summary Checksum
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Checksum ::= SEQUENCE {
 *         cksumtype       [0] Int32,
 *         checksum        [1] OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class Checksum {
  constructor(
    /**
     * @summary `cksumtype`.
     * @public
     * @readonly
     */
    readonly cksumtype: Int32,
    /**
     * @summary `checksum`.
     * @public
     * @readonly
     */
    readonly checksum: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a Checksum
   * @description
   *
   * This takes an `object` and converts it to a `Checksum`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Checksum`.
   * @returns {Checksum}
   */
  public static _from_object(
    _o: { [_K in keyof Checksum]: Checksum[_K] }
  ): Checksum {
    return new Checksum(_o.cksumtype, _o.checksum);
  }
}
/* END_OF_SYMBOL_DEFINITION Checksum */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Checksum */
/**
 * @summary The Leading Root Component Types of Checksum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Checksum: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'cksumtype',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'checksum',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Checksum */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Checksum */
/**
 * @summary The Trailing Root Component Types of Checksum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Checksum: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Checksum */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Checksum */
/**
 * @summary The Extension Addition Component Types of Checksum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Checksum: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Checksum */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Checksum */
let _cached_decoder_for_Checksum: $.ASN1Decoder<Checksum> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Checksum */

/* START_OF_SYMBOL_DEFINITION _decode_Checksum */
/**
 * @summary Decodes an ASN.1 element into a(n) Checksum
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Checksum} The decoded data structure.
 */
export function _decode_Checksum(el: _Element) {
  if (!_cached_decoder_for_Checksum) {
    _cached_decoder_for_Checksum = function (el: _Element): Checksum {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Checksum contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'cksumtype';
      sequence[1].name = 'checksum';
      let cksumtype!: Int32;
      let checksum!: OCTET_STRING;
      cksumtype = $._decode_explicit<Int32>(() => _decode_Int32)(sequence[0]);
      checksum = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(
        sequence[1]
      );
      return new Checksum(cksumtype, checksum);
    };
  }
  return _cached_decoder_for_Checksum(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Checksum */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Checksum */
let _cached_encoder_for_Checksum: $.ASN1Encoder<Checksum> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Checksum */

/* START_OF_SYMBOL_DEFINITION _encode_Checksum */
/**
 * @summary Encodes a(n) Checksum into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Checksum, encoded as an ASN.1 Element.
 */
export function _encode_Checksum(
  value: Checksum,
  elGetter: $.ASN1Encoder<Checksum>
) {
  if (!_cached_encoder_for_Checksum) {
    _cached_encoder_for_Checksum = function (
      value: Checksum,
      elGetter: $.ASN1Encoder<Checksum>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.BER
            )(value.cksumtype, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => $._encodeOctetString,
              $.BER
            )(value.checksum, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Checksum(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Checksum */

/* eslint-enable */
