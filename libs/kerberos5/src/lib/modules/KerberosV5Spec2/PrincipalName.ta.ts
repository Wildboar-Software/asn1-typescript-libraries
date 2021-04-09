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
import {
  KerberosString,
  _decode_KerberosString,
  _encode_KerberosString,
} from '../KerberosV5Spec2/KerberosString.ta';
export {
  KerberosString,
  _decode_KerberosString,
  _encode_KerberosString,
} from '../KerberosV5Spec2/KerberosString.ta';

/* START_OF_SYMBOL_DEFINITION PrincipalName */
/**
 * @summary PrincipalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrincipalName ::= SEQUENCE {
 *         name-type       [0] Int32,
 *         name-string     [1] SEQUENCE OF KerberosString
 * }
 * ```
 *
 * @class
 */
export class PrincipalName {
  constructor(
    /**
     * @summary `name_type`.
     * @public
     * @readonly
     */
    readonly name_type: Int32,
    /**
     * @summary `name_string`.
     * @public
     * @readonly
     */
    readonly name_string: KerberosString[]
  ) {}

  /**
   * @summary Restructures an object into a PrincipalName
   * @description
   *
   * This takes an `object` and converts it to a `PrincipalName`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PrincipalName`.
   * @returns {PrincipalName}
   */
  public static _from_object(
    _o: { [_K in keyof PrincipalName]: PrincipalName[_K] }
  ): PrincipalName {
    return new PrincipalName(_o.name_type, _o.name_string);
  }
}
/* END_OF_SYMBOL_DEFINITION PrincipalName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrincipalName */
/**
 * @summary The Leading Root Component Types of PrincipalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrincipalName: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'name-type',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'name-string',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrincipalName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrincipalName */
/**
 * @summary The Trailing Root Component Types of PrincipalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrincipalName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrincipalName */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrincipalName */
/**
 * @summary The Extension Addition Component Types of PrincipalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrincipalName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrincipalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrincipalName */
let _cached_decoder_for_PrincipalName: $.ASN1Decoder<PrincipalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrincipalName */

/* START_OF_SYMBOL_DEFINITION _decode_PrincipalName */
/**
 * @summary Decodes an ASN.1 element into a(n) PrincipalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrincipalName} The decoded data structure.
 */
export function _decode_PrincipalName(el: _Element) {
  if (!_cached_decoder_for_PrincipalName) {
    _cached_decoder_for_PrincipalName = function (el: _Element): PrincipalName {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'PrincipalName contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'name-type';
      sequence[1].name = 'name-string';
      let name_type!: Int32;
      let name_string!: KerberosString[];
      name_type = $._decode_explicit<Int32>(() => _decode_Int32)(sequence[0]);
      name_string = $._decode_explicit<KerberosString[]>(() =>
        $._decodeSequenceOf<KerberosString>(() => _decode_KerberosString)
      )(sequence[1]);
      return new PrincipalName(name_type, name_string);
    };
  }
  return _cached_decoder_for_PrincipalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrincipalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrincipalName */
let _cached_encoder_for_PrincipalName: $.ASN1Encoder<PrincipalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrincipalName */

/* START_OF_SYMBOL_DEFINITION _encode_PrincipalName */
/**
 * @summary Encodes a(n) PrincipalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrincipalName, encoded as an ASN.1 Element.
 */
export function _encode_PrincipalName(
  value: PrincipalName,
  elGetter: $.ASN1Encoder<PrincipalName>
) {
  if (!_cached_encoder_for_PrincipalName) {
    _cached_encoder_for_PrincipalName = function (
      value: PrincipalName,
      elGetter: $.ASN1Encoder<PrincipalName>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.BER
            )(value.name_type, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () =>
                $._encodeSequenceOf<KerberosString>(
                  () => _encode_KerberosString,
                  $.BER
                ),
              $.BER
            )(value.name_string, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PrincipalName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrincipalName */

/* eslint-enable */
