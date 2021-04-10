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
  ContentEnvelopeInformationType,
  _decode_ContentEnvelopeInformationType,
  _encode_ContentEnvelopeInformationType,
} from '../CMAIL/ContentEnvelopeInformationType.ta';
export {
  ContentEnvelopeInformationType,
  _decode_ContentEnvelopeInformationType,
  _encode_ContentEnvelopeInformationType,
} from '../CMAIL/ContentEnvelopeInformationType.ta';
import {
  EntitiesType,
  _decode_EntitiesType,
  _encode_EntitiesType,
} from '../CMAIL/EntitiesType.ta';
export {
  EntitiesType,
  _decode_EntitiesType,
  _encode_EntitiesType,
} from '../CMAIL/EntitiesType.ta';
import {
  SignatureType,
  _decode_SignatureType,
  _encode_SignatureType,
} from '../CMAIL/SignatureType.ta';
export {
  SignatureType,
  _decode_SignatureType,
  _encode_SignatureType,
} from '../CMAIL/SignatureType.ta';

/* START_OF_SYMBOL_DEFINITION EnvelopeInformationType */
/**
 * @summary EnvelopeInformationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopeInformationType ::= SEQUENCE {
 *     contentEnvelopeInformation    ContentEnvelopeInformationType,
 *     entities            EntitiesType,
 *     signature        SEQUENCE (SIZE(0..MAX)) OF
 *         signature SignatureType
 *     }
 * ```
 *
 * @class
 */
export class EnvelopeInformationType {
  constructor(
    /**
     * @summary `contentEnvelopeInformation`.
     * @public
     * @readonly
     */
    readonly contentEnvelopeInformation: ContentEnvelopeInformationType,
    /**
     * @summary `entities`.
     * @public
     * @readonly
     */
    readonly entities: EntitiesType,
    /**
     * @summary `signature`.
     * @public
     * @readonly
     */
    readonly signature: SignatureType[]
  ) {}

  /**
   * @summary Restructures an object into a EnvelopeInformationType
   * @description
   *
   * This takes an `object` and converts it to a `EnvelopeInformationType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EnvelopeInformationType`.
   * @returns {EnvelopeInformationType}
   */
  public static _from_object(
    _o: { [_K in keyof EnvelopeInformationType]: EnvelopeInformationType[_K] }
  ): EnvelopeInformationType {
    return new EnvelopeInformationType(
      _o.contentEnvelopeInformation,
      _o.entities,
      _o.signature
    );
  }
}
/* END_OF_SYMBOL_DEFINITION EnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnvelopeInformationType */
/**
 * @summary The Leading Root Component Types of EnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnvelopeInformationType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'contentEnvelopeInformation',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'entities',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'signature',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnvelopeInformationType */
/**
 * @summary The Trailing Root Component Types of EnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnvelopeInformationType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnvelopeInformationType */
/**
 * @summary The Extension Addition Component Types of EnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnvelopeInformationType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopeInformationType */
let _cached_decoder_for_EnvelopeInformationType: $.ASN1Decoder<EnvelopeInformationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _decode_EnvelopeInformationType */
/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopeInformationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnvelopeInformationType} The decoded data structure.
 */
export function _decode_EnvelopeInformationType(el: _Element) {
  if (!_cached_decoder_for_EnvelopeInformationType) {
    _cached_decoder_for_EnvelopeInformationType = function (
      el: _Element
    ): EnvelopeInformationType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'EnvelopeInformationType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'contentEnvelopeInformation';
      sequence[1].name = 'entities';
      sequence[2].name = 'signature';
      let contentEnvelopeInformation!: ContentEnvelopeInformationType;
      let entities!: EntitiesType;
      let signature!: SignatureType[];
      contentEnvelopeInformation = _decode_ContentEnvelopeInformationType(
        sequence[0]
      );
      entities = _decode_EntitiesType(sequence[1]);
      signature = $._decodeSequenceOf<SignatureType>(
        () => _decode_SignatureType
      )(sequence[2]);
      return new EnvelopeInformationType(
        contentEnvelopeInformation,
        entities,
        signature
      );
    };
  }
  return _cached_decoder_for_EnvelopeInformationType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopeInformationType */
let _cached_encoder_for_EnvelopeInformationType: $.ASN1Encoder<EnvelopeInformationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _encode_EnvelopeInformationType */
/**
 * @summary Encodes a(n) EnvelopeInformationType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopeInformationType, encoded as an ASN.1 Element.
 */
export function _encode_EnvelopeInformationType(
  value: EnvelopeInformationType,
  elGetter: $.ASN1Encoder<EnvelopeInformationType>
) {
  if (!_cached_encoder_for_EnvelopeInformationType) {
    _cached_encoder_for_EnvelopeInformationType = function (
      value: EnvelopeInformationType,
      elGetter: $.ASN1Encoder<EnvelopeInformationType>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ContentEnvelopeInformationType(
              value.contentEnvelopeInformation,
              $.BER
            ),
            /* REQUIRED   */ _encode_EntitiesType(value.entities, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<SignatureType>(
              () => _encode_SignatureType,
              $.BER
            )(value.signature, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EnvelopeInformationType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnvelopeInformationType */

/* eslint-enable */
