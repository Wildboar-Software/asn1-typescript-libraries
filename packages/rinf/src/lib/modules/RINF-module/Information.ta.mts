/* eslint-disable */
import {
  OPTIONAL,
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
  HTMLString,
  _decode_HTMLString,
  _encode_HTMLString,
} from '../RINF-module/HTMLString.ta.mjs';
import {
  RegistrationDetails,
  _decode_RegistrationDetails,
  _encode_RegistrationDetails,
} from '../RINF-module/RegistrationDetails.ta.mjs';

/**
 * @summary Information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Information ::= SEQUENCE {
 *     description        HTMLString,
 *     additionalInformation    HTMLString OPTIONAL,
 *     firstRegistration    RegistrationDetails OPTIONAL,
 *     currentRegistration    RegistrationDetails OPTIONAL
 *     / * It is recommended that this information be provided if available. * /
 * }
 * ```
 *
 * @class
 */
export class Information {
  constructor(
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: HTMLString,
    /**
     * @summary `additionalInformation`.
     * @public
     * @readonly
     */
    readonly additionalInformation: OPTIONAL<HTMLString>,
    /**
     * @summary `firstRegistration`.
     * @public
     * @readonly
     */
    readonly firstRegistration: OPTIONAL<RegistrationDetails>,
    /**
     * @summary `currentRegistration`.
     * @public
     * @readonly
     */
    readonly currentRegistration: OPTIONAL<RegistrationDetails>
  ) {}

  /**
   * @summary Restructures an object into a Information
   * @description
   *
   * This takes an `object` and converts it to a `Information`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Information`.
   * @returns {Information}
   */
  public static _from_object(
    _o: { [_K in keyof Information]: Information[_K] }
  ): Information {
    return new Information(
      _o.description,
      _o.additionalInformation,
      _o.firstRegistration,
      _o.currentRegistration
    );
  }
}


/**
 * @summary The Leading Root Component Types of Information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Information: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'description',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'additionalInformation',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'firstRegistration',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'currentRegistration',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of Information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Information: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Information
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Information: $.ComponentSpec[] = [];


let _cached_decoder_for_Information: $.ASN1Decoder<Information> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Information
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Information} The decoded data structure.
 */
export function _decode_Information(el: _Element) {
  if (!_cached_decoder_for_Information) {
    _cached_decoder_for_Information = function (el: _Element): Information {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let description!: HTMLString;
      let additionalInformation: OPTIONAL<HTMLString>;
      let firstRegistration: OPTIONAL<RegistrationDetails>;
      let currentRegistration: OPTIONAL<RegistrationDetails>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        description: (_el: _Element): void => {
          description = _decode_HTMLString(_el);
        },
        additionalInformation: (_el: _Element): void => {
          additionalInformation = _decode_HTMLString(_el);
        },
        firstRegistration: (_el: _Element): void => {
          firstRegistration = _decode_RegistrationDetails(_el);
        },
        currentRegistration: (_el: _Element): void => {
          currentRegistration = _decode_RegistrationDetails(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Information,
        _extension_additions_list_spec_for_Information,
        _root_component_type_list_2_spec_for_Information,
        undefined
      );
      return new Information /* SEQUENCE_CONSTRUCTOR_CALL */(
        description,
        additionalInformation,
        firstRegistration,
        currentRegistration
      );
    };
  }
  return _cached_decoder_for_Information(el);
}


let _cached_encoder_for_Information: $.ASN1Encoder<Information> | null = null;


/**
 * @summary Encodes a(n) Information into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Information, encoded as an ASN.1 Element.
 */
export function _encode_Information(
  value: Information,
  elGetter: $.ASN1Encoder<Information>
) {
  if (!_cached_encoder_for_Information) {
    _cached_encoder_for_Information = function (
      value: Information    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_HTMLString(value.description, $.BER),
            /* IF_ABSENT  */ value.additionalInformation === undefined
              ? undefined
              : _encode_HTMLString(value.additionalInformation, $.BER),
            /* IF_ABSENT  */ value.firstRegistration === undefined
              ? undefined
              : _encode_RegistrationDetails(value.firstRegistration, $.BER),
            /* IF_ABSENT  */ value.currentRegistration === undefined
              ? undefined
              : _encode_RegistrationDetails(value.currentRegistration, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Information(value, elGetter);
}


/* eslint-enable */
