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
  NonIdentifyingStringOrIndex,
  _decode_NonIdentifyingStringOrIndex,
  _encode_NonIdentifyingStringOrIndex,
} from '../FastInfoset/NonIdentifyingStringOrIndex.ta.mjs';
/**
 * @summary Comment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Comment ::= SEQUENCE {content  NonIdentifyingStringOrIndex
 * }
 * ```
 *
 * @class
 */
export class Comment {
  constructor(
    /**
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: NonIdentifyingStringOrIndex
  ) {}

  /**
   * @summary Restructures an object into a Comment
   * @description
   *
   * This takes an `object` and converts it to a `Comment`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Comment`.
   * @returns {Comment}
   */
  public static _from_object(
    _o: { [_K in keyof Comment]: Comment[_K] }
  ): Comment {
    return new Comment(_o.content);
  }
}

/**
 * @summary The Leading Root Component Types of Comment
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Comment: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'content',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of Comment
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Comment: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Comment
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Comment: $.ComponentSpec[] = [];

let _cached_decoder_for_Comment: $.ASN1Decoder<Comment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Comment
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Comment} The decoded data structure.
 */
export function _decode_Comment(el: _Element) {
  if (!_cached_decoder_for_Comment) {
    _cached_decoder_for_Comment = function (el: _Element): Comment {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'Comment contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'content';
      let content!: NonIdentifyingStringOrIndex;
      content = _decode_NonIdentifyingStringOrIndex(sequence[0]);
      return new Comment(content);
    };
  }
  return _cached_decoder_for_Comment(el);
}

let _cached_encoder_for_Comment: $.ASN1Encoder<Comment> | null = null;

/**
 * @summary Encodes a(n) Comment into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Comment, encoded as an ASN.1 Element.
 */
export function _encode_Comment(
  value: Comment,
  elGetter: $.ASN1Encoder<Comment>
) {
  if (!_cached_encoder_for_Comment) {
    _cached_encoder_for_Comment = function (
      value: Comment    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_NonIdentifyingStringOrIndex(
              value.content,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Comment(value, elGetter);
}


/* eslint-enable */
