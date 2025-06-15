/* eslint-disable */
import {
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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  AlgorithmIdentifier,
  _decode_AlgorithmIdentifier,
  _encode_AlgorithmIdentifier,
} from '@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs';

/**
 * @summary RegistrationDetails_registrant_enciphered_registrant
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationDetails-registrant-enciphered-registrant ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class RegistrationDetails_registrant_enciphered_registrant {
  constructor(
    /**
     * @summary `algorithmIdentifier`.
     * @public
     * @readonly
     */
    readonly algorithmIdentifier: AlgorithmIdentifier,
    /**
     * @summary `enciphered`.
     * @public
     * @readonly
     */
    readonly enciphered: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a RegistrationDetails_registrant_enciphered_registrant
   * @description
   *
   * This takes an `object` and converts it to a `RegistrationDetails_registrant_enciphered_registrant`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RegistrationDetails_registrant_enciphered_registrant`.
   * @returns {RegistrationDetails_registrant_enciphered_registrant}
   */
  public static _from_object(
    _o: {
      [_K in keyof RegistrationDetails_registrant_enciphered_registrant]: RegistrationDetails_registrant_enciphered_registrant[_K];
    }
  ): RegistrationDetails_registrant_enciphered_registrant {
    return new RegistrationDetails_registrant_enciphered_registrant(
      _o.algorithmIdentifier,
      _o.enciphered
    );
  }
}

/**
 * @summary The Leading Root Component Types of RegistrationDetails_registrant_enciphered_registrant
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegistrationDetails_registrant_enciphered_registrant: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'algorithmIdentifier',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'enciphered',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of RegistrationDetails_registrant_enciphered_registrant
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegistrationDetails_registrant_enciphered_registrant: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RegistrationDetails_registrant_enciphered_registrant
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegistrationDetails_registrant_enciphered_registrant: $.ComponentSpec[] = [];

let _cached_decoder_for_RegistrationDetails_registrant_enciphered_registrant: $.ASN1Decoder<RegistrationDetails_registrant_enciphered_registrant> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationDetails_registrant_enciphered_registrant
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationDetails_registrant_enciphered_registrant} The decoded data structure.
 */
export function _decode_RegistrationDetails_registrant_enciphered_registrant(
  el: _Element
) {
  if (
    !_cached_decoder_for_RegistrationDetails_registrant_enciphered_registrant
  ) {
    _cached_decoder_for_RegistrationDetails_registrant_enciphered_registrant = function (
      el: _Element
    ): RegistrationDetails_registrant_enciphered_registrant {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'RegistrationDetails-registrant-enciphered-registrant contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'algorithmIdentifier';
      sequence[1].name = 'enciphered';
      let algorithmIdentifier!: AlgorithmIdentifier;
      let enciphered!: OCTET_STRING;
      algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
      enciphered = $._decodeOctetString(sequence[1]);
      return new RegistrationDetails_registrant_enciphered_registrant(
        algorithmIdentifier,
        enciphered
      );
    };
  }
  return _cached_decoder_for_RegistrationDetails_registrant_enciphered_registrant(
    el
  );
}

let _cached_encoder_for_RegistrationDetails_registrant_enciphered_registrant: $.ASN1Encoder<RegistrationDetails_registrant_enciphered_registrant> | null = null;

/**
 * @summary Encodes a(n) RegistrationDetails_registrant_enciphered_registrant into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationDetails_registrant_enciphered_registrant, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationDetails_registrant_enciphered_registrant(
  value: RegistrationDetails_registrant_enciphered_registrant,
  elGetter: $.ASN1Encoder<RegistrationDetails_registrant_enciphered_registrant>
) {
  if (
    !_cached_encoder_for_RegistrationDetails_registrant_enciphered_registrant
  ) {
    _cached_encoder_for_RegistrationDetails_registrant_enciphered_registrant = function (
      value: RegistrationDetails_registrant_enciphered_registrant    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_AlgorithmIdentifier(
              value.algorithmIdentifier,
              $.BER
            ),
            /* REQUIRED   */ $._encodeOctetString(value.enciphered, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RegistrationDetails_registrant_enciphered_registrant(
    value,
    elGetter
  );
}


/* eslint-enable */
