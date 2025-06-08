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
  AlgorithmIdentifier,
  _decode_AlgorithmIdentifier,
  _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION DHBMParameter */
/**
 * @summary DHBMParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHBMParameter ::= SEQUENCE {
 *     owf                 AlgorithmIdentifier{DIGEST-ALGORITHM, {...}},
 *     -- AlgId for a One-Way Function (SHA-1 recommended)
 *     mac                 AlgorithmIdentifier{MAC-ALGORITHM, {...}}
 *     -- the MAC AlgId (e.g., DES-MAC, Triple-DES-MAC [PKCS11],
 *     -- or HMAC [RFC2104, RFC2202])
 * }
 * ```
 *
 * @class
 */
export class DHBMParameter {
  constructor(
    /**
     * @summary `owf`.
     * @public
     * @readonly
     */
    readonly owf: AlgorithmIdentifier,
    /**
     * @summary `mac`.
     * @public
     * @readonly
     */
    readonly mac: AlgorithmIdentifier
  ) {}

  /**
   * @summary Restructures an object into a DHBMParameter
   * @description
   *
   * This takes an `object` and converts it to a `DHBMParameter`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DHBMParameter`.
   * @returns {DHBMParameter}
   */
  public static _from_object(
    _o: { [_K in keyof DHBMParameter]: DHBMParameter[_K] }
  ): DHBMParameter {
    return new DHBMParameter(_o.owf, _o.mac);
  }
}
/* END_OF_SYMBOL_DEFINITION DHBMParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DHBMParameter */
/**
 * @summary The Leading Root Component Types of DHBMParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DHBMParameter: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'owf',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'mac',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DHBMParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DHBMParameter */
/**
 * @summary The Trailing Root Component Types of DHBMParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DHBMParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DHBMParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DHBMParameter */
/**
 * @summary The Extension Addition Component Types of DHBMParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DHBMParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DHBMParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DHBMParameter */
let _cached_decoder_for_DHBMParameter: $.ASN1Decoder<DHBMParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DHBMParameter */

/* START_OF_SYMBOL_DEFINITION _decode_DHBMParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) DHBMParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DHBMParameter} The decoded data structure.
 */
export function _decode_DHBMParameter(el: _Element) {
  if (!_cached_decoder_for_DHBMParameter) {
    _cached_decoder_for_DHBMParameter = function (el: _Element): DHBMParameter {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'DHBMParameter contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'owf';
      sequence[1].name = 'mac';
      let owf!: AlgorithmIdentifier;
      let mac!: AlgorithmIdentifier;
      owf = _decode_AlgorithmIdentifier(sequence[0]);
      mac = _decode_AlgorithmIdentifier(sequence[1]);
      return new DHBMParameter(owf, mac);
    };
  }
  return _cached_decoder_for_DHBMParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DHBMParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DHBMParameter */
let _cached_encoder_for_DHBMParameter: $.ASN1Encoder<DHBMParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DHBMParameter */

/* START_OF_SYMBOL_DEFINITION _encode_DHBMParameter */
/**
 * @summary Encodes a(n) DHBMParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHBMParameter, encoded as an ASN.1 Element.
 */
export function _encode_DHBMParameter(
  value: DHBMParameter,
  elGetter: $.ASN1Encoder<DHBMParameter>
) {
  if (!_cached_encoder_for_DHBMParameter) {
    _cached_encoder_for_DHBMParameter = function (
      value: DHBMParameter,
      elGetter: $.ASN1Encoder<DHBMParameter>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.owf, $.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.mac, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DHBMParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DHBMParameter */

/* eslint-enable */
