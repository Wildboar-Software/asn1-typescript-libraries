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
  SecretQuestionType,
  _decode_SecretQuestionType,
  _encode_SecretQuestionType,
} from '../CMAIL/SecretQuestionType.ta';
export {
  SecretQuestionType,
  _decode_SecretQuestionType,
  _encode_SecretQuestionType,
} from '../CMAIL/SecretQuestionType.ta';
import {
  CipheredEnvelopeKeyType,
  _decode_CipheredEnvelopeKeyType,
  _encode_CipheredEnvelopeKeyType,
} from '../CMAIL/CipheredEnvelopeKeyType.ta';
export {
  CipheredEnvelopeKeyType,
  _decode_CipheredEnvelopeKeyType,
  _encode_CipheredEnvelopeKeyType,
} from '../CMAIL/CipheredEnvelopeKeyType.ta';
import {
  CertificateType,
  _decode_CertificateType,
  _encode_CertificateType,
} from '../CMAIL/CertificateType.ta';
export {
  CertificateType,
  _decode_CertificateType,
  _encode_CertificateType,
} from '../CMAIL/CertificateType.ta';
import {
  EntityType_type,
  _enum_for_EntityType_type,
  EntityType_type_from_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  from_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  EntityType_type_to /* IMPORTED_LONG_ENUMERATION_ITEM */,
  to /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  EntityType_type_cc /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cc /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  EntityType_type_transit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  transit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_EntityType_type,
  _encode_EntityType_type,
} from '../CMAIL/EntityType-type.ta';
export {
  EntityType_type,
  _enum_for_EntityType_type,
  EntityType_type_from_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  from_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  EntityType_type_to /* IMPORTED_LONG_ENUMERATION_ITEM */,
  to /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  EntityType_type_cc /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cc /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  EntityType_type_transit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  transit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_EntityType_type,
  _encode_EntityType_type,
} from '../CMAIL/EntityType-type.ta';
import {
    String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta';

/* START_OF_SYMBOL_DEFINITION EntityType */
/**
 * @summary EntityType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityType ::= SEQUENCE {
 *     secretQuestion        SecretQuestionType,
 *     cipheredEnvelopeKey    CipheredEnvelopeKeyType,
 *     certificate        CertificateType,
 *     emailAddress        String
 *         (CONSTRAINED BY
 *         {-- "Email address has to be in IETF RFC 822 format --}),
 *     type    ENUMERATED {
 *         from,
 *         to,
 *         cc,
 *         transit
 *         }
 *     }
 * ```
 *
 * @class
 */
export class EntityType {
  constructor(
    /**
     * @summary `secretQuestion`.
     * @public
     * @readonly
     */
    readonly secretQuestion: SecretQuestionType,
    /**
     * @summary `cipheredEnvelopeKey`.
     * @public
     * @readonly
     */
    readonly cipheredEnvelopeKey: CipheredEnvelopeKeyType,
    /**
     * @summary `certificate`.
     * @public
     * @readonly
     */
    readonly certificate: CertificateType,
    /**
     * @summary `emailAddress`.
     * @public
     * @readonly
     */
    readonly emailAddress: String,
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: EntityType_type
  ) {}

  /**
   * @summary Restructures an object into a EntityType
   * @description
   *
   * This takes an `object` and converts it to a `EntityType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EntityType`.
   * @returns {EntityType}
   */
  public static _from_object(
    _o: { [_K in keyof EntityType]: EntityType[_K] }
  ): EntityType {
    return new EntityType(
      _o.secretQuestion,
      _o.cipheredEnvelopeKey,
      _o.certificate,
      _o.emailAddress,
      _o.type_
    );
  }

  /**
   * @summary The enum used as the type of the component `type_`
   * @public
   * @static
   */

  public static _enum_for_type_ = _enum_for_EntityType_type;
}
/* END_OF_SYMBOL_DEFINITION EntityType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntityType */
/**
 * @summary The Leading Root Component Types of EntityType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntityType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'secretQuestion',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'cipheredEnvelopeKey',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'certificate',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  ,
  /* FIXME: emailAddress COULD_NOT_RESOLVE_TYPE_DEF */ new $.ComponentSpec(
    'type',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntityType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntityType */
/**
 * @summary The Trailing Root Component Types of EntityType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntityType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntityType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntityType */
/**
 * @summary The Extension Addition Component Types of EntityType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntityType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntityType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntityType */
let _cached_decoder_for_EntityType: $.ASN1Decoder<EntityType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntityType */

/* START_OF_SYMBOL_DEFINITION _decode_EntityType */
/**
 * @summary Decodes an ASN.1 element into a(n) EntityType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntityType} The decoded data structure.
 */
export function _decode_EntityType(el: _Element) {
  if (!_cached_decoder_for_EntityType) {
    _cached_decoder_for_EntityType = function (el: _Element): EntityType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 5) {
        throw new _ConstructionError(
          'EntityType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'secretQuestion';
      sequence[1].name = 'cipheredEnvelopeKey';
      sequence[2].name = 'certificate';
      sequence[3].name = 'emailAddress';
      sequence[4].name = 'type';
      let secretQuestion!: SecretQuestionType;
      let cipheredEnvelopeKey!: CipheredEnvelopeKeyType;
      let certificate!: CertificateType;
      let emailAddress!: String;
      let type_!: EntityType_type;
      secretQuestion = _decode_SecretQuestionType(sequence[0]);
      cipheredEnvelopeKey = _decode_CipheredEnvelopeKeyType(sequence[1]);
      certificate = _decode_CertificateType(sequence[2]);
      emailAddress = _decode_String(sequence[3]);
      type_ = _decode_EntityType_type(sequence[4]);
      return new EntityType(
        secretQuestion,
        cipheredEnvelopeKey,
        certificate,
        emailAddress,
        type_
      );
    };
  }
  return _cached_decoder_for_EntityType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntityType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntityType */
let _cached_encoder_for_EntityType: $.ASN1Encoder<EntityType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntityType */

/* START_OF_SYMBOL_DEFINITION _encode_EntityType */
/**
 * @summary Encodes a(n) EntityType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityType, encoded as an ASN.1 Element.
 */
export function _encode_EntityType(
  value: EntityType,
  elGetter: $.ASN1Encoder<EntityType>
) {
  if (!_cached_encoder_for_EntityType) {
    _cached_encoder_for_EntityType = function (
      value: EntityType,
      elGetter: $.ASN1Encoder<EntityType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_SecretQuestionType(
              value.secretQuestion,
              $.BER
            ),
            /* REQUIRED   */ _encode_CipheredEnvelopeKeyType(
              value.cipheredEnvelopeKey,
              $.BER
            ),
            /* REQUIRED   */ _encode_CertificateType(value.certificate, $.BER),
            /* REQUIRED   */ _encode_String(value.emailAddress, $.BER),
            /* REQUIRED   */ _encode_EntityType_type(value.type_, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EntityType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntityType */

/* eslint-enable */
