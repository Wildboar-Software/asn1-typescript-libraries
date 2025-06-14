/* eslint-disable */
import {
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
  HashValueType,
  _decode_HashValueType,
  _encode_HashValueType,
} from '../CMAIL/HashValueType.ta.mjs';
import {
    String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ContentEnvelopeInformationType */
/**
 * @summary ContentEnvelopeInformationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEnvelopeInformationType ::= SEQUENCE {
 *     uncipheredEnvelopeHash    HashValueType,
 *     cipheredEnvelopeHash    HashValueType,
 *     messageId        String
 *     }
 * ```
 *
 * @class
 */
export class ContentEnvelopeInformationType {
  constructor(
    /**
     * @summary `uncipheredEnvelopeHash`.
     * @public
     * @readonly
     */
    readonly uncipheredEnvelopeHash: HashValueType,
    /**
     * @summary `cipheredEnvelopeHash`.
     * @public
     * @readonly
     */
    readonly cipheredEnvelopeHash: HashValueType,
    /**
     * @summary `messageId`.
     * @public
     * @readonly
     */
    readonly messageId: String
  ) {}

  /**
   * @summary Restructures an object into a ContentEnvelopeInformationType
   * @description
   *
   * This takes an `object` and converts it to a `ContentEnvelopeInformationType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ContentEnvelopeInformationType`.
   * @returns {ContentEnvelopeInformationType}
   */
  public static _from_object(
    _o: {
      [_K in keyof ContentEnvelopeInformationType]: ContentEnvelopeInformationType[_K];
    }
  ): ContentEnvelopeInformationType {
    return new ContentEnvelopeInformationType(
      _o.uncipheredEnvelopeHash,
      _o.cipheredEnvelopeHash,
      _o.messageId
    );
  }
}
/* END_OF_SYMBOL_DEFINITION ContentEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContentEnvelopeInformationType */
/**
 * @summary The Leading Root Component Types of ContentEnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContentEnvelopeInformationType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'uncipheredEnvelopeHash',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'cipheredEnvelopeHash',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  /* FIXME: messageId COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContentEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContentEnvelopeInformationType */
/**
 * @summary The Trailing Root Component Types of ContentEnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContentEnvelopeInformationType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContentEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContentEnvelopeInformationType */
/**
 * @summary The Extension Addition Component Types of ContentEnvelopeInformationType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContentEnvelopeInformationType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContentEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentEnvelopeInformationType */
let _cached_decoder_for_ContentEnvelopeInformationType: $.ASN1Decoder<ContentEnvelopeInformationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _decode_ContentEnvelopeInformationType */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentEnvelopeInformationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentEnvelopeInformationType} The decoded data structure.
 */
export function _decode_ContentEnvelopeInformationType(el: _Element) {
  if (!_cached_decoder_for_ContentEnvelopeInformationType) {
    _cached_decoder_for_ContentEnvelopeInformationType = function (
      el: _Element
    ): ContentEnvelopeInformationType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'ContentEnvelopeInformationType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'uncipheredEnvelopeHash';
      sequence[1].name = 'cipheredEnvelopeHash';
      sequence[2].name = 'messageId';
      let uncipheredEnvelopeHash!: HashValueType;
      let cipheredEnvelopeHash!: HashValueType;
      let messageId!: String;
      uncipheredEnvelopeHash = _decode_HashValueType(sequence[0]);
      cipheredEnvelopeHash = _decode_HashValueType(sequence[1]);
      messageId = _decode_String(sequence[2]);
      return new ContentEnvelopeInformationType(
        uncipheredEnvelopeHash,
        cipheredEnvelopeHash,
        messageId
      );
    };
  }
  return _cached_decoder_for_ContentEnvelopeInformationType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentEnvelopeInformationType */
let _cached_encoder_for_ContentEnvelopeInformationType: $.ASN1Encoder<ContentEnvelopeInformationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentEnvelopeInformationType */

/* START_OF_SYMBOL_DEFINITION _encode_ContentEnvelopeInformationType */
/**
 * @summary Encodes a(n) ContentEnvelopeInformationType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentEnvelopeInformationType, encoded as an ASN.1 Element.
 */
export function _encode_ContentEnvelopeInformationType(
  value: ContentEnvelopeInformationType,
  elGetter: $.ASN1Encoder<ContentEnvelopeInformationType>
) {
  if (!_cached_encoder_for_ContentEnvelopeInformationType) {
    _cached_encoder_for_ContentEnvelopeInformationType = function (
      value: ContentEnvelopeInformationType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_HashValueType(
              value.uncipheredEnvelopeHash,
              $.BER
            ),
            /* REQUIRED   */ _encode_HashValueType(
              value.cipheredEnvelopeHash,
              $.BER
            ),
            /* REQUIRED   */ _encode_String(value.messageId, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ContentEnvelopeInformationType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentEnvelopeInformationType */

/* eslint-enable */
