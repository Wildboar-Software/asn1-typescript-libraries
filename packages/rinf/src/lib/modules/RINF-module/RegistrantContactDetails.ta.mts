/* eslint-disable */
import {
  OPTIONAL,
  UTF8String,
  IA5String,
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

/* START_OF_SYMBOL_DEFINITION RegistrantContactDetails */
/**
 * @summary RegistrantContactDetails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrantContactDetails ::= SEQUENCE {
 *     familyNameOrOrganization     UTF8String    OPTIONAL,
 *     givenName            UTF8String    OPTIONAL,
 *     e-mailAddress            UTF8String    OPTIONAL,
 *     phone                IA5String     OPTIONAL / * Starting with "+" * /,
 *     fax                IA5String     OPTIONAL / * Starting with "+" * /,
 *     postalAddress            SEQUENCE OF UTF8String OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RegistrantContactDetails {
  constructor(
    /**
     * @summary `familyNameOrOrganization`.
     * @public
     * @readonly
     */
    readonly familyNameOrOrganization: OPTIONAL<UTF8String>,
    /**
     * @summary `givenName`.
     * @public
     * @readonly
     */
    readonly givenName: OPTIONAL<UTF8String>,
    /**
     * @summary `e_mailAddress`.
     * @public
     * @readonly
     */
    readonly e_mailAddress: OPTIONAL<UTF8String>,
    /**
     * @summary `phone`.
     * @public
     * @readonly
     */
    readonly phone: OPTIONAL<IA5String>,
    /**
     * @summary `fax`.
     * @public
     * @readonly
     */
    readonly fax: OPTIONAL<IA5String>,
    /**
     * @summary `postalAddress`.
     * @public
     * @readonly
     */
    readonly postalAddress: OPTIONAL<UTF8String[]>
  ) {}

  /**
   * @summary Restructures an object into a RegistrantContactDetails
   * @description
   *
   * This takes an `object` and converts it to a `RegistrantContactDetails`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RegistrantContactDetails`.
   * @returns {RegistrantContactDetails}
   */
  public static _from_object(
    _o: { [_K in keyof RegistrantContactDetails]: RegistrantContactDetails[_K] }
  ): RegistrantContactDetails {
    return new RegistrantContactDetails(
      _o.familyNameOrOrganization,
      _o.givenName,
      _o.e_mailAddress,
      _o.phone,
      _o.fax,
      _o.postalAddress
    );
  }
}
/* END_OF_SYMBOL_DEFINITION RegistrantContactDetails */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegistrantContactDetails */
/**
 * @summary The Leading Root Component Types of RegistrantContactDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegistrantContactDetails: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'familyNameOrOrganization',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'givenName',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'e-mailAddress',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'phone',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'fax',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'postalAddress',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegistrantContactDetails */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegistrantContactDetails */
/**
 * @summary The Trailing Root Component Types of RegistrantContactDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegistrantContactDetails: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegistrantContactDetails */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegistrantContactDetails */
/**
 * @summary The Extension Addition Component Types of RegistrantContactDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegistrantContactDetails: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegistrantContactDetails */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrantContactDetails */
let _cached_decoder_for_RegistrantContactDetails: $.ASN1Decoder<RegistrantContactDetails> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrantContactDetails */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrantContactDetails */
/**
 * @summary Decodes an ASN.1 element into a(n) RegistrantContactDetails
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrantContactDetails} The decoded data structure.
 */
export function _decode_RegistrantContactDetails(el: _Element) {
  if (!_cached_decoder_for_RegistrantContactDetails) {
    _cached_decoder_for_RegistrantContactDetails = function (
      el: _Element
    ): RegistrantContactDetails {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let familyNameOrOrganization: OPTIONAL<UTF8String>;
      let givenName: OPTIONAL<UTF8String>;
      let e_mailAddress: OPTIONAL<UTF8String>;
      let phone: OPTIONAL<IA5String>;
      let fax: OPTIONAL<IA5String>;
      let postalAddress: OPTIONAL<UTF8String[]>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        familyNameOrOrganization: (_el: _Element): void => {
          familyNameOrOrganization = $._decodeUTF8String(_el);
        },
        givenName: (_el: _Element): void => {
          givenName = $._decodeUTF8String(_el);
        },
        'e-mailAddress': (_el: _Element): void => {
          e_mailAddress = $._decodeUTF8String(_el);
        },
        phone: (_el: _Element): void => {
          phone = $._decodeIA5String(_el);
        },
        fax: (_el: _Element): void => {
          fax = $._decodeIA5String(_el);
        },
        postalAddress: (_el: _Element): void => {
          postalAddress = $._decodeSequenceOf<UTF8String>(
            () => $._decodeUTF8String
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RegistrantContactDetails,
        _extension_additions_list_spec_for_RegistrantContactDetails,
        _root_component_type_list_2_spec_for_RegistrantContactDetails,
        undefined
      );
      return new RegistrantContactDetails /* SEQUENCE_CONSTRUCTOR_CALL */(
        familyNameOrOrganization,
        givenName,
        e_mailAddress,
        phone,
        fax,
        postalAddress
      );
    };
  }
  return _cached_decoder_for_RegistrantContactDetails(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegistrantContactDetails */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrantContactDetails */
let _cached_encoder_for_RegistrantContactDetails: $.ASN1Encoder<RegistrantContactDetails> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrantContactDetails */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrantContactDetails */
/**
 * @summary Encodes a(n) RegistrantContactDetails into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrantContactDetails, encoded as an ASN.1 Element.
 */
export function _encode_RegistrantContactDetails(
  value: RegistrantContactDetails,
  elGetter: $.ASN1Encoder<RegistrantContactDetails>
) {
  if (!_cached_encoder_for_RegistrantContactDetails) {
    _cached_encoder_for_RegistrantContactDetails = function (
      value: RegistrantContactDetails    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.familyNameOrOrganization === undefined
              ? undefined
              : $._encodeUTF8String(value.familyNameOrOrganization, $.BER),
            /* IF_ABSENT  */ value.givenName === undefined
              ? undefined
              : $._encodeUTF8String(value.givenName, $.BER),
            /* IF_ABSENT  */ value.e_mailAddress === undefined
              ? undefined
              : $._encodeUTF8String(value.e_mailAddress, $.BER),
            /* IF_ABSENT  */ value.phone === undefined
              ? undefined
              : $._encodeIA5String(value.phone, $.BER),
            /* IF_ABSENT  */ value.fax === undefined
              ? undefined
              : $._encodeIA5String(value.fax, $.BER),
            /* IF_ABSENT  */ value.postalAddress === undefined
              ? undefined
              : $._encodeSequenceOf<UTF8String>(
                  () => $._encodeUTF8String,
                  $.BER
                )(value.postalAddress, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RegistrantContactDetails(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegistrantContactDetails */

/* eslint-enable */
