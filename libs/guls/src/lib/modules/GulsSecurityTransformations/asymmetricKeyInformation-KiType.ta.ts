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
import {
  SecurityIdentity,
  _decode_SecurityIdentity,
  _encode_SecurityIdentity,
} from '../Notation/SecurityIdentity.ta';
export {
  SecurityIdentity,
  _decode_SecurityIdentity,
  _encode_SecurityIdentity,
} from '../Notation/SecurityIdentity.ta';

/* START_OF_SYMBOL_DEFINITION asymmetricKeyInformation_KiType */
/**
 * @summary asymmetricKeyInformation_KiType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * asymmetricKeyInformation-KiType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class asymmetricKeyInformation_KiType {
  constructor(
    /**
     * @summary `issuerCAName`.
     * @public
     * @readonly
     */
    readonly issuerCAName: OPTIONAL<SecurityIdentity>,
    /**
     * @summary `certSerialNumber`.
     * @public
     * @readonly
     */
    readonly certSerialNumber: OPTIONAL<INTEGER>,
    /**
     * @summary `signerName`.
     * @public
     * @readonly
     */
    readonly signerName: OPTIONAL<SecurityIdentity>,
    /**
     * @summary `keyIdentifier`.
     * @public
     * @readonly
     */
    readonly keyIdentifier: OPTIONAL<BIT_STRING>
  ) {}

  /**
   * @summary Restructures an object into a asymmetricKeyInformation_KiType
   * @description
   *
   * This takes an `object` and converts it to a `asymmetricKeyInformation_KiType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `asymmetricKeyInformation_KiType`.
   * @returns {asymmetricKeyInformation_KiType}
   */
  public static _from_object(
    _o: {
      [_K in keyof asymmetricKeyInformation_KiType]: asymmetricKeyInformation_KiType[_K];
    }
  ): asymmetricKeyInformation_KiType {
    return new asymmetricKeyInformation_KiType(
      _o.issuerCAName,
      _o.certSerialNumber,
      _o.signerName,
      _o.keyIdentifier
    );
  }
}
/* END_OF_SYMBOL_DEFINITION asymmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_asymmetricKeyInformation_KiType */
/**
 * @summary The Leading Root Component Types of asymmetricKeyInformation_KiType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_asymmetricKeyInformation_KiType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'issuerCAName',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'certSerialNumber',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'signerName',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'keyIdentifier',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_asymmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_asymmetricKeyInformation_KiType */
/**
 * @summary The Trailing Root Component Types of asymmetricKeyInformation_KiType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_asymmetricKeyInformation_KiType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_asymmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_asymmetricKeyInformation_KiType */
/**
 * @summary The Extension Addition Component Types of asymmetricKeyInformation_KiType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_asymmetricKeyInformation_KiType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_asymmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_asymmetricKeyInformation_KiType */
let _cached_decoder_for_asymmetricKeyInformation_KiType: $.ASN1Decoder<asymmetricKeyInformation_KiType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_asymmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _decode_asymmetricKeyInformation_KiType */
/**
 * @summary Decodes an ASN.1 element into a(n) asymmetricKeyInformation_KiType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {asymmetricKeyInformation_KiType} The decoded data structure.
 */
export function _decode_asymmetricKeyInformation_KiType(el: _Element) {
  if (!_cached_decoder_for_asymmetricKeyInformation_KiType) {
    _cached_decoder_for_asymmetricKeyInformation_KiType = function (
      el: _Element
    ): asymmetricKeyInformation_KiType {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let issuerCAName: OPTIONAL<SecurityIdentity>;
      let certSerialNumber: OPTIONAL<INTEGER>;
      let signerName: OPTIONAL<SecurityIdentity>;
      let keyIdentifier: OPTIONAL<BIT_STRING>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        issuerCAName: (_el: _Element): void => {
          issuerCAName = _decode_SecurityIdentity(_el);
        },
        certSerialNumber: (_el: _Element): void => {
          certSerialNumber = $._decodeInteger(_el);
        },
        signerName: (_el: _Element): void => {
          signerName = _decode_SecurityIdentity(_el);
        },
        keyIdentifier: (_el: _Element): void => {
          keyIdentifier = $._decodeBitString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_asymmetricKeyInformation_KiType,
        _extension_additions_list_spec_for_asymmetricKeyInformation_KiType,
        _root_component_type_list_2_spec_for_asymmetricKeyInformation_KiType,
        undefined
      );
      return new asymmetricKeyInformation_KiType /* SEQUENCE_CONSTRUCTOR_CALL */(
        issuerCAName,
        certSerialNumber,
        signerName,
        keyIdentifier
      );
    };
  }
  return _cached_decoder_for_asymmetricKeyInformation_KiType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_asymmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_asymmetricKeyInformation_KiType */
let _cached_encoder_for_asymmetricKeyInformation_KiType: $.ASN1Encoder<asymmetricKeyInformation_KiType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_asymmetricKeyInformation_KiType */

/* START_OF_SYMBOL_DEFINITION _encode_asymmetricKeyInformation_KiType */
/**
 * @summary Encodes a(n) asymmetricKeyInformation_KiType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The asymmetricKeyInformation_KiType, encoded as an ASN.1 Element.
 */
export function _encode_asymmetricKeyInformation_KiType(
  value: asymmetricKeyInformation_KiType,
  elGetter: $.ASN1Encoder<asymmetricKeyInformation_KiType>
) {
  if (!_cached_encoder_for_asymmetricKeyInformation_KiType) {
    _cached_encoder_for_asymmetricKeyInformation_KiType = function (
      value: asymmetricKeyInformation_KiType,
      elGetter: $.ASN1Encoder<asymmetricKeyInformation_KiType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.issuerCAName === undefined
              ? undefined
              : _encode_SecurityIdentity(value.issuerCAName, $.BER),
            /* IF_ABSENT  */ value.certSerialNumber === undefined
              ? undefined
              : $._encodeInteger(value.certSerialNumber, $.BER),
            /* IF_ABSENT  */ value.signerName === undefined
              ? undefined
              : _encode_SecurityIdentity(value.signerName, $.BER),
            /* IF_ABSENT  */ value.keyIdentifier === undefined
              ? undefined
              : $._encodeBitString(value.keyIdentifier, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_asymmetricKeyInformation_KiType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_asymmetricKeyInformation_KiType */

/* eslint-enable */
