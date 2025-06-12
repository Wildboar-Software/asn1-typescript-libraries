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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  RegistrationDetails_registrant,
  _decode_RegistrationDetails_registrant,
  _encode_RegistrationDetails_registrant,
} from '../RINF-module/RegistrationDetails-registrant.ta.mjs';
export {
  RegistrationDetails_registrant,
  _decode_RegistrationDetails_registrant,
  _encode_RegistrationDetails_registrant,
} from '../RINF-module/RegistrationDetails-registrant.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RegistrationDetails */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION RegistrationDetails */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegistrationDetails */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'registrant',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegistrationDetails */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegistrationDetails */
/**
 * @summary The Trailing Root Component Types of RegistrationDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegistrationDetails: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegistrationDetails */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegistrationDetails */
/**
 * @summary The Extension Addition Component Types of RegistrationDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegistrationDetails: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegistrationDetails */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationDetails */
let _cached_decoder_for_RegistrationDetails: $.ASN1Decoder<RegistrationDetails> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationDetails */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationDetails */
/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationDetails
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationDetails} The decoded data structure.
 */
export function _decode_RegistrationDetails(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationDetails */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationDetails */
let _cached_encoder_for_RegistrationDetails: $.ASN1Encoder<RegistrationDetails> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationDetails */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationDetails */
/**
 * @summary Encodes a(n) RegistrationDetails into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationDetails, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationDetails(
  value: RegistrationDetails,
  elGetter: $.ASN1Encoder<RegistrationDetails>
) {
  if (!_cached_encoder_for_RegistrationDetails) {
    _cached_encoder_for_RegistrationDetails = function (
      value: RegistrationDetails,
      elGetter: $.ASN1Encoder<RegistrationDetails>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationDetails */

/* eslint-enable */
