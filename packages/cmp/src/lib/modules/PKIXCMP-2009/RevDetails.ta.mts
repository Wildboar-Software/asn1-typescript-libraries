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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  CertTemplate,
  _decode_CertTemplate,
  _encode_CertTemplate,
} from '@wildboar/crmf/src/lib/modules/PKIXCRMF-2009/CertTemplate.ta.mjs';
import {
  Extensions,
  _decode_Extensions,
  _encode_Extensions,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta.mjs';


/**
 * @summary RevDetails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevDetails ::= SEQUENCE {
 *     certDetails         CertTemplate,
 *     -- allows requester to specify as much as they can about
 *     -- the cert. for which revocation is requested
 *     -- (e.g., for cases in which serialNumber is not available)
 *     crlEntryDetails     Extensions{{...}}    OPTIONAL
 *
 *     -- requested crlEntryExtensions
 * }
 * ```
 *
 * @class
 */
export class RevDetails {
  constructor(
    /**
     * @summary `certDetails`.
     * @public
     * @readonly
     */
    readonly certDetails: CertTemplate,
    /**
     * @summary `crlEntryDetails`.
     * @public
     * @readonly
     */
    readonly crlEntryDetails: OPTIONAL<Extensions>
  ) {}

  /**
   * @summary Restructures an object into a RevDetails
   * @description
   *
   * This takes an `object` and converts it to a `RevDetails`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RevDetails`.
   * @returns {RevDetails}
   */
  public static _from_object(
    _o: { [_K in keyof RevDetails]: RevDetails[_K] }
  ): RevDetails {
    return new RevDetails(_o.certDetails, _o.crlEntryDetails);
  }
}


/**
 * @summary The Leading Root Component Types of RevDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevDetails: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'certDetails',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'crlEntryDetails',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of RevDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevDetails: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RevDetails
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevDetails: $.ComponentSpec[] = [];


let _cached_decoder_for_RevDetails: $.ASN1Decoder<RevDetails> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RevDetails
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevDetails} The decoded data structure.
 */
export function _decode_RevDetails(el: _Element) {
  if (!_cached_decoder_for_RevDetails) {
    _cached_decoder_for_RevDetails = function (el: _Element): RevDetails {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let certDetails!: CertTemplate;
      let crlEntryDetails: OPTIONAL<Extensions>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        certDetails: (_el: _Element): void => {
          certDetails = _decode_CertTemplate(_el);
        },
        crlEntryDetails: (_el: _Element): void => {
          crlEntryDetails = _decode_Extensions(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RevDetails,
        _extension_additions_list_spec_for_RevDetails,
        _root_component_type_list_2_spec_for_RevDetails,
        undefined
      );
      return new RevDetails /* SEQUENCE_CONSTRUCTOR_CALL */(
        certDetails,
        crlEntryDetails
      );
    };
  }
  return _cached_decoder_for_RevDetails(el);
}


let _cached_encoder_for_RevDetails: $.ASN1Encoder<RevDetails> | null = null;


/**
 * @summary Encodes a(n) RevDetails into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevDetails, encoded as an ASN.1 Element.
 */
export function _encode_RevDetails(
  value: RevDetails,
  elGetter: $.ASN1Encoder<RevDetails>
) {
  if (!_cached_encoder_for_RevDetails) {
    _cached_encoder_for_RevDetails = function (
      value: RevDetails    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_CertTemplate(value.certDetails, $.BER),
            /* IF_ABSENT  */ value.crlEntryDetails === undefined
              ? undefined
              : _encode_Extensions(value.crlEntryDetails, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RevDetails(value, elGetter);
}


/* eslint-enable */
