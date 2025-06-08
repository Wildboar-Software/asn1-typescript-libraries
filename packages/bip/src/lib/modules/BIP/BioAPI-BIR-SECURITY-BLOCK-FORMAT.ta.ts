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
  UnsignedShort,
  _decode_UnsignedShort,
  _encode_UnsignedShort,
} from '../BIP/UnsignedShort.ta';
export {
  UnsignedShort,
  _decode_UnsignedShort,
  _encode_UnsignedShort,
} from '../BIP/UnsignedShort.ta';

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SECURITY_BLOCK_FORMAT */
/**
 * @summary BioAPI_BIR_SECURITY_BLOCK_FORMAT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-SECURITY-BLOCK-FORMAT ::= SEQUENCE {
 *   formatOwner  UnsignedShort,
 *   formatType   UnsignedShort
 * }
 * ```
 *
 * @class
 */
export class BioAPI_BIR_SECURITY_BLOCK_FORMAT {
  constructor(
    /**
     * @summary `formatOwner`.
     * @public
     * @readonly
     */
    readonly formatOwner: UnsignedShort,
    /**
     * @summary `formatType`.
     * @public
     * @readonly
     */
    readonly formatType: UnsignedShort
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BIR_SECURITY_BLOCK_FORMAT
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BIR_SECURITY_BLOCK_FORMAT`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BIR_SECURITY_BLOCK_FORMAT`.
   * @returns {BioAPI_BIR_SECURITY_BLOCK_FORMAT}
   */
  public static _from_object(
    _o: {
      [_K in keyof BioAPI_BIR_SECURITY_BLOCK_FORMAT]: BioAPI_BIR_SECURITY_BLOCK_FORMAT[_K];
    }
  ): BioAPI_BIR_SECURITY_BLOCK_FORMAT {
    return new BioAPI_BIR_SECURITY_BLOCK_FORMAT(_o.formatOwner, _o.formatType);
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SECURITY_BLOCK_FORMAT */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */
/**
 * @summary The Leading Root Component Types of BioAPI_BIR_SECURITY_BLOCK_FORMAT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'formatOwner',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'formatType',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */
/**
 * @summary The Trailing Root Component Types of BioAPI_BIR_SECURITY_BLOCK_FORMAT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */
/**
 * @summary The Extension Addition Component Types of BioAPI_BIR_SECURITY_BLOCK_FORMAT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */
let _cached_decoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT: $.ASN1Decoder<BioAPI_BIR_SECURITY_BLOCK_FORMAT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SECURITY_BLOCK_FORMAT */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_SECURITY_BLOCK_FORMAT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_SECURITY_BLOCK_FORMAT} The decoded data structure.
 */
export function _decode_BioAPI_BIR_SECURITY_BLOCK_FORMAT(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT) {
    _cached_decoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT = function (
      el: _Element
    ): BioAPI_BIR_SECURITY_BLOCK_FORMAT {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-BIR-SECURITY-BLOCK-FORMAT contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'formatOwner';
      sequence[1].name = 'formatType';
      let formatOwner!: UnsignedShort;
      let formatType!: UnsignedShort;
      formatOwner = _decode_UnsignedShort(sequence[0]);
      formatType = _decode_UnsignedShort(sequence[1]);
      return new BioAPI_BIR_SECURITY_BLOCK_FORMAT(formatOwner, formatType);
    };
  }
  return _cached_decoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SECURITY_BLOCK_FORMAT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */
let _cached_encoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT: $.ASN1Encoder<BioAPI_BIR_SECURITY_BLOCK_FORMAT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SECURITY_BLOCK_FORMAT */
/**
 * @summary Encodes a(n) BioAPI_BIR_SECURITY_BLOCK_FORMAT into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_SECURITY_BLOCK_FORMAT, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_SECURITY_BLOCK_FORMAT(
  value: BioAPI_BIR_SECURITY_BLOCK_FORMAT,
  elGetter: $.ASN1Encoder<BioAPI_BIR_SECURITY_BLOCK_FORMAT>
) {
  if (!_cached_encoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT) {
    _cached_encoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT = function (
      value: BioAPI_BIR_SECURITY_BLOCK_FORMAT,
      elGetter: $.ASN1Encoder<BioAPI_BIR_SECURITY_BLOCK_FORMAT>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_UnsignedShort(value.formatOwner, $.BER),
            /* REQUIRED   */ _encode_UnsignedShort(value.formatType, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BIR_SECURITY_BLOCK_FORMAT(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SECURITY_BLOCK_FORMAT */

/* eslint-enable */
