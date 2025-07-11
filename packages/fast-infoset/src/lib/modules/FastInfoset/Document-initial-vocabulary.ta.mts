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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { URI, _decode_URI, _encode_URI } from '../FastInfoset/URI.ta.mjs';
import {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta.mjs';
import {
  EncodedCharacterString,
  _decode_EncodedCharacterString,
  _encode_EncodedCharacterString,
} from '../FastInfoset/EncodedCharacterString.ta.mjs';
import {
  NameSurrogate,
  _decode_NameSurrogate,
  _encode_NameSurrogate,
} from '../FastInfoset/NameSurrogate.ta.mjs';
/**
 * @summary Document_initial_vocabulary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Document-initial-vocabulary ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class Document_initial_vocabulary {
  constructor(
    /**
     * @summary `external_vocabulary`.
     * @public
     * @readonly
     */
    readonly external_vocabulary: OPTIONAL<URI>,
    /**
     * @summary `restricted_alphabets`.
     * @public
     * @readonly
     */
    readonly restricted_alphabets: OPTIONAL<NonEmptyOctetString[]>,
    /**
     * @summary `encoding_algorithms`.
     * @public
     * @readonly
     */
    readonly encoding_algorithms: OPTIONAL<NonEmptyOctetString[]>,
    /**
     * @summary `prefixes`.
     * @public
     * @readonly
     */
    readonly prefixes: OPTIONAL<NonEmptyOctetString[]>,
    /**
     * @summary `namespace_names`.
     * @public
     * @readonly
     */
    readonly namespace_names: OPTIONAL<NonEmptyOctetString[]>,
    /**
     * @summary `local_names`.
     * @public
     * @readonly
     */
    readonly local_names: OPTIONAL<NonEmptyOctetString[]>,
    /**
     * @summary `other_ncnames`.
     * @public
     * @readonly
     */
    readonly other_ncnames: OPTIONAL<NonEmptyOctetString[]>,
    /**
     * @summary `other_uris`.
     * @public
     * @readonly
     */
    readonly other_uris: OPTIONAL<NonEmptyOctetString[]>,
    /**
     * @summary `attribute_values`.
     * @public
     * @readonly
     */
    readonly attribute_values: OPTIONAL<EncodedCharacterString[]>,
    /**
     * @summary `content_character_chunks`.
     * @public
     * @readonly
     */
    readonly content_character_chunks: OPTIONAL<EncodedCharacterString[]>,
    /**
     * @summary `other_strings`.
     * @public
     * @readonly
     */
    readonly other_strings: OPTIONAL<EncodedCharacterString[]>,
    /**
     * @summary `element_name_surrogates`.
     * @public
     * @readonly
     */
    readonly element_name_surrogates: OPTIONAL<NameSurrogate[]>,
    /**
     * @summary `attribute_name_surrogates`.
     * @public
     * @readonly
     */
    readonly attribute_name_surrogates: OPTIONAL<NameSurrogate[]>
  ) {}

  /**
   * @summary Restructures an object into a Document_initial_vocabulary
   * @description
   *
   * This takes an `object` and converts it to a `Document_initial_vocabulary`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Document_initial_vocabulary`.
   * @returns {Document_initial_vocabulary}
   */
  public static _from_object(
    _o: {
      [_K in keyof Document_initial_vocabulary]: Document_initial_vocabulary[_K];
    }
  ): Document_initial_vocabulary {
    return new Document_initial_vocabulary(
      _o.external_vocabulary,
      _o.restricted_alphabets,
      _o.encoding_algorithms,
      _o.prefixes,
      _o.namespace_names,
      _o.local_names,
      _o.other_ncnames,
      _o.other_uris,
      _o.attribute_values,
      _o.content_character_chunks,
      _o.other_strings,
      _o.element_name_surrogates,
      _o.attribute_name_surrogates
    );
  }
}

/**
 * @summary The Leading Root Component Types of Document_initial_vocabulary
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Document_initial_vocabulary: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'external-vocabulary',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'restricted-alphabets',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'encoding-algorithms',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'prefixes',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'namespace-names',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'local-names',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'other-ncnames',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'other-uris',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'attribute-values',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'content-character-chunks',
    true,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'other-strings',
    true,
    $.hasTag(_TagClass.context, 10)
  ),
  new $.ComponentSpec(
    'element-name-surrogates',
    true,
    $.hasTag(_TagClass.context, 11)
  ),
  new $.ComponentSpec(
    'attribute-name-surrogates',
    true,
    $.hasTag(_TagClass.context, 12)
  ),
];

/**
 * @summary The Trailing Root Component Types of Document_initial_vocabulary
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Document_initial_vocabulary: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Document_initial_vocabulary
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Document_initial_vocabulary: $.ComponentSpec[] = [];

let _cached_decoder_for_Document_initial_vocabulary: $.ASN1Decoder<Document_initial_vocabulary> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Document_initial_vocabulary
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Document_initial_vocabulary} The decoded data structure.
 */
export function _decode_Document_initial_vocabulary(el: _Element): Document_initial_vocabulary {
  if (!_cached_decoder_for_Document_initial_vocabulary) {
    _cached_decoder_for_Document_initial_vocabulary = function (
      el: _Element
    ): Document_initial_vocabulary {
      let external_vocabulary: OPTIONAL<URI>;
      let restricted_alphabets: OPTIONAL<NonEmptyOctetString[]>;
      let encoding_algorithms: OPTIONAL<NonEmptyOctetString[]>;
      let prefixes: OPTIONAL<NonEmptyOctetString[]>;
      let namespace_names: OPTIONAL<NonEmptyOctetString[]>;
      let local_names: OPTIONAL<NonEmptyOctetString[]>;
      let other_ncnames: OPTIONAL<NonEmptyOctetString[]>;
      let other_uris: OPTIONAL<NonEmptyOctetString[]>;
      let attribute_values: OPTIONAL<EncodedCharacterString[]>;
      let content_character_chunks: OPTIONAL<EncodedCharacterString[]>;
      let other_strings: OPTIONAL<EncodedCharacterString[]>;
      let element_name_surrogates: OPTIONAL<NameSurrogate[]>;
      let attribute_name_surrogates: OPTIONAL<NameSurrogate[]>;
      const callbacks: $.DecodingMap = {
        'external-vocabulary': (_el: _Element): void => {
          external_vocabulary = _decode_URI(_el);
        },
        'restricted-alphabets': (_el: _Element): void => {
          restricted_alphabets = $._decodeSequenceOf<NonEmptyOctetString>(
            () => _decode_NonEmptyOctetString
          )(_el);
        },
        'encoding-algorithms': (_el: _Element): void => {
          encoding_algorithms = $._decodeSequenceOf<NonEmptyOctetString>(
            () => _decode_NonEmptyOctetString
          )(_el);
        },
        prefixes: (_el: _Element): void => {
          prefixes = $._decodeSequenceOf<NonEmptyOctetString>(
            () => _decode_NonEmptyOctetString
          )(_el);
        },
        'namespace-names': (_el: _Element): void => {
          namespace_names = $._decodeSequenceOf<NonEmptyOctetString>(
            () => _decode_NonEmptyOctetString
          )(_el);
        },
        'local-names': (_el: _Element): void => {
          local_names = $._decodeSequenceOf<NonEmptyOctetString>(
            () => _decode_NonEmptyOctetString
          )(_el);
        },
        'other-ncnames': (_el: _Element): void => {
          other_ncnames = $._decodeSequenceOf<NonEmptyOctetString>(
            () => _decode_NonEmptyOctetString
          )(_el);
        },
        'other-uris': (_el: _Element): void => {
          other_uris = $._decodeSequenceOf<NonEmptyOctetString>(
            () => _decode_NonEmptyOctetString
          )(_el);
        },
        'attribute-values': (_el: _Element): void => {
          attribute_values = $._decodeSequenceOf<EncodedCharacterString>(
            () => _decode_EncodedCharacterString
          )(_el);
        },
        'content-character-chunks': (_el: _Element): void => {
          content_character_chunks = $._decodeSequenceOf<EncodedCharacterString>(
            () => _decode_EncodedCharacterString
          )(_el);
        },
        'other-strings': (_el: _Element): void => {
          other_strings = $._decodeSequenceOf<EncodedCharacterString>(
            () => _decode_EncodedCharacterString
          )(_el);
        },
        'element-name-surrogates': (_el: _Element): void => {
          element_name_surrogates = $._decodeSequenceOf<NameSurrogate>(
            () => _decode_NameSurrogate
          )(_el);
        },
        'attribute-name-surrogates': (_el: _Element): void => {
          attribute_name_surrogates = $._decodeSequenceOf<NameSurrogate>(
            () => _decode_NameSurrogate
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Document_initial_vocabulary,
        _extension_additions_list_spec_for_Document_initial_vocabulary,
        _root_component_type_list_2_spec_for_Document_initial_vocabulary,
        undefined
      );
      return new Document_initial_vocabulary (
        external_vocabulary,
        restricted_alphabets,
        encoding_algorithms,
        prefixes,
        namespace_names,
        local_names,
        other_ncnames,
        other_uris,
        attribute_values,
        content_character_chunks,
        other_strings,
        element_name_surrogates,
        attribute_name_surrogates
      );
    };
  }
  return _cached_decoder_for_Document_initial_vocabulary(el);
}

let _cached_encoder_for_Document_initial_vocabulary: $.ASN1Encoder<Document_initial_vocabulary> | null = null;

/**
 * @summary Encodes a(n) Document_initial_vocabulary into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Document_initial_vocabulary, encoded as an ASN.1 Element.
 */
export function _encode_Document_initial_vocabulary(
  value: Document_initial_vocabulary,
  elGetter: $.ASN1Encoder<Document_initial_vocabulary>
): _Element {
  if (!_cached_encoder_for_Document_initial_vocabulary) {
    _cached_encoder_for_Document_initial_vocabulary = function (
      value: Document_initial_vocabulary    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.external_vocabulary === undefined
              ? undefined
              : _encode_URI(value.external_vocabulary, $.BER),
            /* IF_ABSENT  */ value.restricted_alphabets === undefined
              ? undefined
              : $._encodeSequenceOf<NonEmptyOctetString>(
                  () => _encode_NonEmptyOctetString,
                  $.BER
                )(value.restricted_alphabets, $.BER),
            /* IF_ABSENT  */ value.encoding_algorithms === undefined
              ? undefined
              : $._encodeSequenceOf<NonEmptyOctetString>(
                  () => _encode_NonEmptyOctetString,
                  $.BER
                )(value.encoding_algorithms, $.BER),
            /* IF_ABSENT  */ value.prefixes === undefined
              ? undefined
              : $._encodeSequenceOf<NonEmptyOctetString>(
                  () => _encode_NonEmptyOctetString,
                  $.BER
                )(value.prefixes, $.BER),
            /* IF_ABSENT  */ value.namespace_names === undefined
              ? undefined
              : $._encodeSequenceOf<NonEmptyOctetString>(
                  () => _encode_NonEmptyOctetString,
                  $.BER
                )(value.namespace_names, $.BER),
            /* IF_ABSENT  */ value.local_names === undefined
              ? undefined
              : $._encodeSequenceOf<NonEmptyOctetString>(
                  () => _encode_NonEmptyOctetString,
                  $.BER
                )(value.local_names, $.BER),
            /* IF_ABSENT  */ value.other_ncnames === undefined
              ? undefined
              : $._encodeSequenceOf<NonEmptyOctetString>(
                  () => _encode_NonEmptyOctetString,
                  $.BER
                )(value.other_ncnames, $.BER),
            /* IF_ABSENT  */ value.other_uris === undefined
              ? undefined
              : $._encodeSequenceOf<NonEmptyOctetString>(
                  () => _encode_NonEmptyOctetString,
                  $.BER
                )(value.other_uris, $.BER),
            /* IF_ABSENT  */ value.attribute_values === undefined
              ? undefined
              : $._encodeSequenceOf<EncodedCharacterString>(
                  () => _encode_EncodedCharacterString,
                  $.BER
                )(value.attribute_values, $.BER),
            /* IF_ABSENT  */ value.content_character_chunks === undefined
              ? undefined
              : $._encodeSequenceOf<EncodedCharacterString>(
                  () => _encode_EncodedCharacterString,
                  $.BER
                )(value.content_character_chunks, $.BER),
            /* IF_ABSENT  */ value.other_strings === undefined
              ? undefined
              : $._encodeSequenceOf<EncodedCharacterString>(
                  () => _encode_EncodedCharacterString,
                  $.BER
                )(value.other_strings, $.BER),
            /* IF_ABSENT  */ value.element_name_surrogates === undefined
              ? undefined
              : $._encodeSequenceOf<NameSurrogate>(
                  () => _encode_NameSurrogate,
                  $.BER
                )(value.element_name_surrogates, $.BER),
            /* IF_ABSENT  */ value.attribute_name_surrogates === undefined
              ? undefined
              : $._encodeSequenceOf<NameSurrogate>(
                  () => _encode_NameSurrogate,
                  $.BER
                )(value.attribute_name_surrogates, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Document_initial_vocabulary(value, elGetter);
}


/* eslint-enable */
