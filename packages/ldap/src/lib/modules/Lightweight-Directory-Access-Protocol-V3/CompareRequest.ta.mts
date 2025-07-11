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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.mjs';
import {
  AttributeValueAssertion,
  _decode_AttributeValueAssertion,
  _encode_AttributeValueAssertion,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeValueAssertion.ta.mjs';

/**
 * @summary CompareRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareRequest ::= [APPLICATION 14]  SEQUENCE {
 *   entry  LDAPDN,
 *   ava    AttributeValueAssertion
 * }
 * ```
 *
 */
export class CompareRequest {
  constructor(
    /**
     * @summary `entry`.
     * @public
     * @readonly
     */
    readonly entry: LDAPDN,
    /**
     * @summary `ava`.
     * @public
     * @readonly
     */
    readonly ava: AttributeValueAssertion,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a CompareRequest
   * @description
   *
   * This takes an `object` and converts it to a `CompareRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CompareRequest`.
   * @returns {CompareRequest}
   */
  public static _from_object(
    _o: { [_K in keyof CompareRequest]: CompareRequest[_K] }
  ): CompareRequest {
    return new CompareRequest(_o.entry, _o.ava, _o._unrecognizedExtensionsList);
  }
}


/**
 * @summary The Leading Root Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CompareRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'entry',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'ava',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CompareRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CompareRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_CompareRequest: $.ASN1Decoder<CompareRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CompareRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareRequest} The decoded data structure.
 */
export function _decode_CompareRequest(el: _Element): CompareRequest {
  if (!_cached_decoder_for_CompareRequest) {
    _cached_decoder_for_CompareRequest = $._decode_implicit<CompareRequest>(
      () =>
        function (el: _Element): CompareRequest {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 2) {
            throw new _ConstructionError(
              'CompareRequest contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'entry';
          sequence[1].name = 'ava';
          let entry!: LDAPDN;
          let ava!: AttributeValueAssertion;
          entry = _decode_LDAPDN(sequence[0]);
          ava = _decode_AttributeValueAssertion(sequence[1]);
          return new CompareRequest(entry, ava, sequence.slice(2));
        }
    );
  }
  return _cached_decoder_for_CompareRequest(el);
}


let _cached_encoder_for_CompareRequest: $.ASN1Encoder<CompareRequest> | null = null;


/**
 * @summary Encodes a(n) CompareRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareRequest, encoded as an ASN.1 Element.
 */
export function _encode_CompareRequest(
  value: CompareRequest,
  elGetter: $.ASN1Encoder<CompareRequest>
): _Element {
  if (!_cached_encoder_for_CompareRequest) {
    _cached_encoder_for_CompareRequest = $._encode_implicit(
      _TagClass.application,
      14,
      () =>
        function (
          value: CompareRequest        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* REQUIRED   */ _encode_LDAPDN(value.entry, $.BER),
                  /* REQUIRED   */ _encode_AttributeValueAssertion(
                    value.ava,
                    $.BER
                  ),
                ],
                value._unrecognizedExtensionsList
                  ? value._unrecognizedExtensionsList
                  : []
              )
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_CompareRequest(value, elGetter);
}


/* eslint-enable */
