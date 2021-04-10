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

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR */
/**
 * @summary BioAPI_BIR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR ::= SEQUENCE {
 *   patronFormatOwner  UnsignedShort,
 *   patronFormatType   UnsignedShort,
 *   formattedBIR       OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class BioAPI_BIR {
  constructor(
    /**
     * @summary `patronFormatOwner`.
     * @public
     * @readonly
     */
    readonly patronFormatOwner: UnsignedShort,
    /**
     * @summary `patronFormatType`.
     * @public
     * @readonly
     */
    readonly patronFormatType: UnsignedShort,
    /**
     * @summary `formattedBIR`.
     * @public
     * @readonly
     */
    readonly formattedBIR: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BIR
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BIR`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BIR`.
   * @returns {BioAPI_BIR}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_BIR]: BioAPI_BIR[_K] }
  ): BioAPI_BIR {
    return new BioAPI_BIR(
      _o.patronFormatOwner,
      _o.patronFormatType,
      _o.formattedBIR
    );
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_BIR */
/**
 * @summary The Leading Root Component Types of BioAPI_BIR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BIR: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'patronFormatOwner',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'patronFormatType',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'formattedBIR',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_BIR */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_BIR */
/**
 * @summary The Trailing Root Component Types of BioAPI_BIR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BIR: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_BIR */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_BIR */
/**
 * @summary The Extension Addition Component Types of BioAPI_BIR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BIR: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_BIR */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR */
let _cached_decoder_for_BioAPI_BIR: $.ASN1Decoder<BioAPI_BIR> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR} The decoded data structure.
 */
export function _decode_BioAPI_BIR(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BIR) {
    _cached_decoder_for_BioAPI_BIR = function (el: _Element): BioAPI_BIR {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'BioAPI-BIR contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'patronFormatOwner';
      sequence[1].name = 'patronFormatType';
      sequence[2].name = 'formattedBIR';
      let patronFormatOwner!: UnsignedShort;
      let patronFormatType!: UnsignedShort;
      let formattedBIR!: OCTET_STRING;
      patronFormatOwner = _decode_UnsignedShort(sequence[0]);
      patronFormatType = _decode_UnsignedShort(sequence[1]);
      formattedBIR = $._decodeOctetString(sequence[2]);
      return new BioAPI_BIR(patronFormatOwner, patronFormatType, formattedBIR);
    };
  }
  return _cached_decoder_for_BioAPI_BIR(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR */
let _cached_encoder_for_BioAPI_BIR: $.ASN1Encoder<BioAPI_BIR> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR */
/**
 * @summary Encodes a(n) BioAPI_BIR into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR(
  value: BioAPI_BIR,
  elGetter: $.ASN1Encoder<BioAPI_BIR>
) {
  if (!_cached_encoder_for_BioAPI_BIR) {
    _cached_encoder_for_BioAPI_BIR = function (
      value: BioAPI_BIR,
      elGetter: $.ASN1Encoder<BioAPI_BIR>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_UnsignedShort(
              value.patronFormatOwner,
              $.BER
            ),
            /* REQUIRED   */ _encode_UnsignedShort(
              value.patronFormatType,
              $.BER
            ),
            /* REQUIRED   */ $._encodeOctetString(value.formattedBIR, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BIR(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR */

/* eslint-enable */
