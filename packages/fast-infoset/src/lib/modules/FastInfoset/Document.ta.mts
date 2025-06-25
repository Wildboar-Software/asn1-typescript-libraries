/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
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
import {
  Document_additional_data_additional_datum,
  _decode_Document_additional_data_additional_datum,
  _encode_Document_additional_data_additional_datum,
} from '../FastInfoset/Document-additional-data-additional-datum.ta.mjs';
import {
  Document_initial_vocabulary,
  _decode_Document_initial_vocabulary,
  _encode_Document_initial_vocabulary,
} from '../FastInfoset/Document-initial-vocabulary.ta.mjs';
import {
  Notation,
  _decode_Notation,
  _encode_Notation,
} from '../FastInfoset/Notation.ta.mjs';
import {
  UnparsedEntity,
  _decode_UnparsedEntity,
  _encode_UnparsedEntity,
} from '../FastInfoset/UnparsedEntity.ta.mjs';
import {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta.mjs';
import {
  NonIdentifyingStringOrIndex,
  _decode_NonIdentifyingStringOrIndex,
  _encode_NonIdentifyingStringOrIndex,
} from '../FastInfoset/NonIdentifyingStringOrIndex.ta.mjs';
import {
  Document_children_Item,
  _decode_Document_children_Item,
  _encode_Document_children_Item,
} from '../FastInfoset/Document-children-Item.ta.mjs';
/**
 * @summary Document
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Document ::= SEQUENCE {
 *   additional-data
 *     SEQUENCE (SIZE (1..one-meg)) OF additional-datum
 *       SEQUENCE {id    URI,
 *                 data  NonEmptyOctetString} OPTIONAL,
 *   initial-vocabulary
 *     SEQUENCE {external-vocabulary        URI OPTIONAL,
 *               restricted-alphabets
 *                 SEQUENCE (SIZE (1..256)) OF NonEmptyOctetString OPTIONAL,
 *               encoding-algorithms
 *                 SEQUENCE (SIZE (1..256)) OF NonEmptyOctetString OPTIONAL,
 *               prefixes
 *                 SEQUENCE (SIZE (1..one-meg)) OF NonEmptyOctetString OPTIONAL,
 *               namespace-names
 *                 SEQUENCE (SIZE (1..one-meg)) OF NonEmptyOctetString OPTIONAL,
 *               local-names
 *                 SEQUENCE (SIZE (1..one-meg)) OF NonEmptyOctetString OPTIONAL,
 *               other-ncnames
 *                 SEQUENCE (SIZE (1..one-meg)) OF NonEmptyOctetString OPTIONAL,
 *               other-uris
 *                 SEQUENCE (SIZE (1..one-meg)) OF NonEmptyOctetString OPTIONAL,
 *               attribute-values
 *                 SEQUENCE (SIZE (1..one-meg)) OF EncodedCharacterString OPTIONAL,
 *               content-character-chunks
 *                 SEQUENCE (SIZE (1..one-meg)) OF EncodedCharacterString OPTIONAL,
 *               other-strings
 *                 SEQUENCE (SIZE (1..one-meg)) OF EncodedCharacterString OPTIONAL,
 *               element-name-surrogates
 *                 SEQUENCE (SIZE (1..one-meg)) OF NameSurrogate OPTIONAL,
 *               attribute-name-surrogates
 *                 SEQUENCE (SIZE (1..one-meg)) OF NameSurrogate OPTIONAL
 *   }
 *   (CONSTRAINED BY {
 *      -- If the initial-vocabulary component is present, at least
 *      -- one of its components shall be present --}) OPTIONAL,
 *   notations                  SEQUENCE (SIZE (1..MAX)) OF Notation OPTIONAL,
 *   unparsed-entities
 *     SEQUENCE (SIZE (1..MAX)) OF UnparsedEntity OPTIONAL,
 *   character-encoding-scheme  NonEmptyOctetString OPTIONAL,
 *   standalone                 BOOLEAN OPTIONAL,
 *   version                    NonIdentifyingStringOrIndex OPTIONAL-- OTHER STRING category --,
 *   children
 *     SEQUENCE (SIZE (0..MAX)) OF
 *       CHOICE {element                    Element,
 *               processing-instruction     ProcessingInstruction,
 *               comment                    Comment,
 *               document-type-declaration  DocumentTypeDeclaration}
 * }
 * ```
 *
 * @class
 */
export class Document {
  constructor(
    /**
     * @summary `additional_data`.
     * @public
     * @readonly
     */
    readonly additional_data: OPTIONAL<
      Document_additional_data_additional_datum[]
    >,
    /**
     * @summary `initial_vocabulary`.
     * @public
     * @readonly
     */
    readonly initial_vocabulary: OPTIONAL<Document_initial_vocabulary>,
    /**
     * @summary `notations`.
     * @public
     * @readonly
     */
    readonly notations: OPTIONAL<Notation[]>,
    /**
     * @summary `unparsed_entities`.
     * @public
     * @readonly
     */
    readonly unparsed_entities: OPTIONAL<UnparsedEntity[]>,
    /**
     * @summary `character_encoding_scheme`.
     * @public
     * @readonly
     */
    readonly character_encoding_scheme: OPTIONAL<NonEmptyOctetString>,
    /**
     * @summary `standalone`.
     * @public
     * @readonly
     */
    readonly standalone: OPTIONAL<BOOLEAN>,
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: OPTIONAL<NonIdentifyingStringOrIndex>,
    /**
     * @summary `children`.
     * @public
     * @readonly
     */
    readonly children: Document_children_Item[]
  ) {}

  /**
   * @summary Restructures an object into a Document
   * @description
   *
   * This takes an `object` and converts it to a `Document`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Document`.
   * @returns {Document}
   */
  public static _from_object(
    _o: { [_K in keyof Document]: Document[_K] }
  ): Document {
    return new Document(
      _o.additional_data,
      _o.initial_vocabulary,
      _o.notations,
      _o.unparsed_entities,
      _o.character_encoding_scheme,
      _o.standalone,
      _o.version,
      _o.children
    );
  }
}

/**
 * @summary The Leading Root Component Types of Document
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Document: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'additional-data',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'initial-vocabulary',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'notations',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'unparsed-entities',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'character-encoding-scheme',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'standalone',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'version',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'children',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
];

/**
 * @summary The Trailing Root Component Types of Document
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Document: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Document
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Document: $.ComponentSpec[] = [];

let _cached_decoder_for_Document: $.ASN1Decoder<Document> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Document
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Document} The decoded data structure.
 */
export function _decode_Document(el: _Element): Document {
  if (!_cached_decoder_for_Document) {
    _cached_decoder_for_Document = function (el: _Element): Document {
      let additional_data: OPTIONAL<
        Document_additional_data_additional_datum[]
      >;
      let initial_vocabulary: OPTIONAL<Document_initial_vocabulary>;
      let notations: OPTIONAL<Notation[]>;
      let unparsed_entities: OPTIONAL<UnparsedEntity[]>;
      let character_encoding_scheme: OPTIONAL<NonEmptyOctetString>;
      let standalone: OPTIONAL<BOOLEAN>;
      let version: OPTIONAL<NonIdentifyingStringOrIndex>;
      let children!: Document_children_Item[];
      const callbacks: $.DecodingMap = {
        'additional-data': (_el: _Element): void => {
          additional_data = $._decodeSequenceOf<Document_additional_data_additional_datum>(
            () => _decode_Document_additional_data_additional_datum
          )(_el);
        },
        'initial-vocabulary': (_el: _Element): void => {
          initial_vocabulary = _decode_Document_initial_vocabulary(_el);
        },
        notations: (_el: _Element): void => {
          notations = $._decodeSequenceOf<Notation>(() => _decode_Notation)(
            _el
          );
        },
        'unparsed-entities': (_el: _Element): void => {
          unparsed_entities = $._decodeSequenceOf<UnparsedEntity>(
            () => _decode_UnparsedEntity
          )(_el);
        },
        'character-encoding-scheme': (_el: _Element): void => {
          character_encoding_scheme = _decode_NonEmptyOctetString(_el);
        },
        standalone: (_el: _Element): void => {
          standalone = $._decodeBoolean(_el);
        },
        version: (_el: _Element): void => {
          version = _decode_NonIdentifyingStringOrIndex(_el);
        },
        children: (_el: _Element): void => {
          children = $._decodeSequenceOf<Document_children_Item>(
            () => _decode_Document_children_Item
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Document,
        _extension_additions_list_spec_for_Document,
        _root_component_type_list_2_spec_for_Document,
        undefined
      );
      return new Document (
        additional_data,
        initial_vocabulary,
        notations,
        unparsed_entities,
        character_encoding_scheme,
        standalone,
        version,
        children
      );
    };
  }
  return _cached_decoder_for_Document(el);
}

let _cached_encoder_for_Document: $.ASN1Encoder<Document> | null = null;

/**
 * @summary Encodes a(n) Document into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Document, encoded as an ASN.1 Element.
 */
export function _encode_Document(
  value: Document,
  elGetter: $.ASN1Encoder<Document>
): _Element {
  if (!_cached_encoder_for_Document) {
    _cached_encoder_for_Document = function (
      value: Document    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.additional_data === undefined
              ? undefined
              : $._encodeSequenceOf<Document_additional_data_additional_datum>(
                  () => _encode_Document_additional_data_additional_datum,
                  $.BER
                )(value.additional_data, $.BER),
            /* IF_ABSENT  */ value.initial_vocabulary === undefined
              ? undefined
              : _encode_Document_initial_vocabulary(
                  value.initial_vocabulary,
                  $.BER
                ),
            /* IF_ABSENT  */ value.notations === undefined
              ? undefined
              : $._encodeSequenceOf<Notation>(() => _encode_Notation, $.BER)(
                  value.notations,
                  $.BER
                ),
            /* IF_ABSENT  */ value.unparsed_entities === undefined
              ? undefined
              : $._encodeSequenceOf<UnparsedEntity>(
                  () => _encode_UnparsedEntity,
                  $.BER
                )(value.unparsed_entities, $.BER),
            /* IF_ABSENT  */ value.character_encoding_scheme === undefined
              ? undefined
              : _encode_NonEmptyOctetString(
                  value.character_encoding_scheme,
                  $.BER
                ),
            /* IF_ABSENT  */ value.standalone === undefined
              ? undefined
              : $._encodeBoolean(value.standalone, $.BER),
            /* IF_ABSENT  */ value.version === undefined
              ? undefined
              : _encode_NonIdentifyingStringOrIndex(value.version, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<Document_children_Item>(
              () => _encode_Document_children_Item,
              $.BER
            )(value.children, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Document(value, elGetter);
}


/* eslint-enable */
