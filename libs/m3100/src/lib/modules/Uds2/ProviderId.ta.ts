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
import { Country, _decode_Country, _encode_Country } from '../Uds2/Country.ta';
export { Country, _decode_Country, _encode_Country } from '../Uds2/Country.ta';
import { DmdName, _decode_DmdName, _encode_DmdName } from '../Uds2/DmdName.ta';
export { DmdName, _decode_DmdName, _encode_DmdName } from '../Uds2/DmdName.ta';

/* START_OF_SYMBOL_DEFINITION ProviderId */
/**
 * @summary ProviderId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProviderId ::= SEQUENCE {country  Country,
 *                          dmdName  DmdName OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ProviderId {
  constructor(
    /**
     * @summary `country`.
     * @public
     * @readonly
     */
    readonly country: Country,
    /**
     * @summary `dmdName`.
     * @public
     * @readonly
     */
    readonly dmdName: OPTIONAL<DmdName>
  ) {}

  /**
   * @summary Restructures an object into a ProviderId
   * @description
   *
   * This takes an `object` and converts it to a `ProviderId`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ProviderId`.
   * @returns {ProviderId}
   */
  public static _from_object(
    _o: { [_K in keyof ProviderId]: ProviderId[_K] }
  ): ProviderId {
    return new ProviderId(_o.country, _o.dmdName);
  }
}
/* END_OF_SYMBOL_DEFINITION ProviderId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProviderId */
/**
 * @summary The Leading Root Component Types of ProviderId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProviderId: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'country',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'dmdName',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProviderId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProviderId */
/**
 * @summary The Trailing Root Component Types of ProviderId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProviderId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProviderId */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProviderId */
/**
 * @summary The Extension Addition Component Types of ProviderId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProviderId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProviderId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProviderId */
let _cached_decoder_for_ProviderId: $.ASN1Decoder<ProviderId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProviderId */

/* START_OF_SYMBOL_DEFINITION _decode_ProviderId */
/**
 * @summary Decodes an ASN.1 element into a(n) ProviderId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProviderId} The decoded data structure.
 */
export function _decode_ProviderId(el: _Element) {
  if (!_cached_decoder_for_ProviderId) {
    _cached_decoder_for_ProviderId = function (el: _Element): ProviderId {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let country!: Country;
      let dmdName: OPTIONAL<DmdName>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        country: (_el: _Element): void => {
          country = _decode_Country(_el);
        },
        dmdName: (_el: _Element): void => {
          dmdName = _decode_DmdName(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ProviderId,
        _extension_additions_list_spec_for_ProviderId,
        _root_component_type_list_2_spec_for_ProviderId,
        undefined
      );
      return new ProviderId /* SEQUENCE_CONSTRUCTOR_CALL */(country, dmdName);
    };
  }
  return _cached_decoder_for_ProviderId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProviderId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProviderId */
let _cached_encoder_for_ProviderId: $.ASN1Encoder<ProviderId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProviderId */

/* START_OF_SYMBOL_DEFINITION _encode_ProviderId */
/**
 * @summary Encodes a(n) ProviderId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProviderId, encoded as an ASN.1 Element.
 */
export function _encode_ProviderId(
  value: ProviderId,
  elGetter: $.ASN1Encoder<ProviderId>
) {
  if (!_cached_encoder_for_ProviderId) {
    _cached_encoder_for_ProviderId = function (
      value: ProviderId,
      elGetter: $.ASN1Encoder<ProviderId>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Country(value.country, $.BER),
            /* IF_ABSENT  */ value.dmdName === undefined
              ? undefined
              : _encode_DmdName(value.dmdName, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ProviderId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProviderId */

/* eslint-enable */
