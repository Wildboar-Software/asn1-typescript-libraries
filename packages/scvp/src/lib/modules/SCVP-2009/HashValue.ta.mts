/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
  HashAlgorithm,
  _decode_HashAlgorithm,
  _encode_HashAlgorithm,
} from '../SCVP-2009/HashAlgorithm.ta.mjs';
import {
    AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import { mda_sha1 } from '../PKIXAlgs-2009/mda-sha1.oa.mjs';
/**
 * @summary HashValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValue ::= SEQUENCE {
 *     algorithm         HashAlgorithm
 *                         DEFAULT { algorithm mda-sha1.&id },
 *     value             OCTET STRING }
 * ```
 *
 * @class
 */
export class HashValue {
  constructor(
    /**
     * @summary `algorithm`.
     * @public
     * @readonly
     */
    readonly algorithm: OPTIONAL<HashAlgorithm>,
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a HashValue
   * @description
   *
   * This takes an `object` and converts it to a `HashValue`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `HashValue`.
   * @returns {HashValue}
   */
  public static _from_object(
    _o: { [_K in keyof HashValue]: HashValue[_K] }
  ): HashValue {
    return new HashValue(_o.algorithm, _o.value);
  }

  /**
   * @summary Getter that returns the default value for `algorithm`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_algorithm() {
    return AlgorithmIdentifier._from_object({
        algorithm: mda_sha1['&id'],
        parameters: undefined,
        _unrecognizedExtensionsList: [],
    });
  }
}

/**
 * @summary The Leading Root Component Types of HashValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HashValue: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'algorithm',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'value',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
];

/**
 * @summary The Trailing Root Component Types of HashValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HashValue: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of HashValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HashValue: $.ComponentSpec[] = [];

let _cached_decoder_for_HashValue: $.ASN1Decoder<HashValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashValue} The decoded data structure.
 */
export function _decode_HashValue(el: _Element) {
  if (!_cached_decoder_for_HashValue) {
    _cached_decoder_for_HashValue = function (el: _Element): HashValue {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let algorithm: OPTIONAL<HashAlgorithm> =
        HashValue._default_value_for_algorithm;
      let value!: OCTET_STRING;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        algorithm: (_el: _Element): void => {
          algorithm = _decode_HashAlgorithm(_el);
        },
        value: (_el: _Element): void => {
          value = $._decodeOctetString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_HashValue,
        _extension_additions_list_spec_for_HashValue,
        _root_component_type_list_2_spec_for_HashValue,
        undefined
      );
      return new HashValue /* SEQUENCE_CONSTRUCTOR_CALL */(algorithm, value);
    };
  }
  return _cached_decoder_for_HashValue(el);
}

let _cached_encoder_for_HashValue: $.ASN1Encoder<HashValue> | null = null;

/**
 * @summary Encodes a(n) HashValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashValue, encoded as an ASN.1 Element.
 */
export function _encode_HashValue(
  value: HashValue,
  elGetter: $.ASN1Encoder<HashValue>
) {
  if (!_cached_encoder_for_HashValue) {
    _cached_encoder_for_HashValue = function (
      value: HashValue    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.algorithm === undefined ||
            $.deepEq(value.algorithm, HashValue._default_value_for_algorithm)
              ? undefined
              : _encode_HashAlgorithm(value.algorithm, $.DER),
            /* REQUIRED   */ $._encodeOctetString(value.value, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_HashValue(value, elGetter);
}


/* eslint-enable */
