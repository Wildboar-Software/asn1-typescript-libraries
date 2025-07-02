/* eslint-disable */
import {
  TIME,
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
  RegistrationDetails_registrant,
  _decode_RegistrationDetails_registrant,
  _encode_RegistrationDetails_registrant,
} from '../RINF-module/RegistrationDetails-registrant.ta.mjs';
/**
 * @summary RegistrationDetails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationDetails ::= SEQUENCE {
 *     registrationDate    TIME(SETTINGS "Basic=Date Date=YMD") ,
 *     registrant        CHOICE {
 *         non-enciphered         RegistrantContactDetails,
 *         enciphered-registrant    SEQUENCE {
 *             algorithmIdentifier    AlgorithmIdentifier{{SupportedAlgorithms}},
 *             enciphered        OCTET STRING (CONSTRAINED BY {
 *             / * Shall contain the result of applying the encipherment procedure
 *             to the EXTENDED-XER encoding * / RegistrantContactDetails})
 *         }
 *         / * See Rec. ITU-T X.509 | ISO/IEC 9594-8, clause 6.1,"Digital signatures", for how to encipher
 *            data.  To obtain encryption keys, consult the parent node. * /
 *     }
 * }
 * ```
 *
 */
export class RegistrationDetails {
  constructor(
    /**
     * @summary `registrationDate`.
     * @public
     * @readonly
     */
    readonly registrationDate: TIME,
    /**
     * @summary `registrant`.
     * @public
     * @readonly
     */
    readonly registrant: RegistrationDetails_registrant
  ) {}

  /**
   * @summary Restructures an object into a RegistrationDetails
   * @description
   *
   * This takes an `object` and converts it to a `RegistrationDetails`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RegistrationDetails`.
   * @returns {RegistrationDetails}
   */
  public static _from_object(
    _o: { [_K in keyof RegistrationDetails]: RegistrationDetails[_K] }
  ): RegistrationDetails {
    return new RegistrationDetails(_o.registrationDate, _o.registrant);
  }
}

/**
 * @summary The Leading Root Component Types of RegistrationDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegistrationDetails: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'registrationDate',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'registrant',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];

/**
 * @summary The Trailing Root Component Types of RegistrationDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegistrationDetails: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RegistrationDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegistrationDetails: $.ComponentSpec[] = [];

let _cached_decoder_for_RegistrationDetails: $.ASN1Decoder<RegistrationDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationDetails
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationDetails} The decoded data structure.
 */
export function _decode_RegistrationDetails(el: _Element): RegistrationDetails {
  if (!_cached_decoder_for_RegistrationDetails) {
    _cached_decoder_for_RegistrationDetails = function (
      el: _Element
    ): RegistrationDetails {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'RegistrationDetails contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'registrationDate';
      sequence[1].name = 'registrant';
      let registrationDate!: TIME;
      let registrant!: RegistrationDetails_registrant;
      registrationDate = $._decodeTime(sequence[0]);
      registrant = _decode_RegistrationDetails_registrant(sequence[1]);
      return new RegistrationDetails(registrationDate, registrant);
    };
  }
  return _cached_decoder_for_RegistrationDetails(el);
}

let _cached_encoder_for_RegistrationDetails: $.ASN1Encoder<RegistrationDetails> | null = null;

/**
 * @summary Encodes a(n) RegistrationDetails into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationDetails, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationDetails(
  value: RegistrationDetails,
  elGetter: $.ASN1Encoder<RegistrationDetails>
): _Element {
  if (!_cached_encoder_for_RegistrationDetails) {
    _cached_encoder_for_RegistrationDetails = function (
      value: RegistrationDetails    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeTime(value.registrationDate, $.BER),
            /* REQUIRED   */ _encode_RegistrationDetails_registrant(
              value.registrant,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RegistrationDetails(value, elGetter);
}


/* eslint-enable */
