/* eslint-disable */
import {
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
import {
  AlgorithmIdentifier,
  _decode_AlgorithmIdentifier,
  _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';


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


/**
 * @summary The Trailing Root Component Types of DHBMParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DHBMParameter: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DHBMParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DHBMParameter: $.ComponentSpec[] = [];


let _cached_decoder_for_DHBMParameter: $.ASN1Decoder<DHBMParameter> | null = null;


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


let _cached_encoder_for_DHBMParameter: $.ASN1Encoder<DHBMParameter> | null = null;


/**
 * @summary Encodes a(n) DHBMParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHBMParameter, encoded as an ASN.1 Element.
 */
export function _encode_DHBMParameter(
  value: DHBMParameter,
  elGetter: $.ASN1Encoder<DHBMParameter>
) {
  if (!_cached_encoder_for_DHBMParameter) {
    _cached_encoder_for_DHBMParameter = function (
      value: DHBMParameter    ): _Element {
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


/* eslint-enable */
