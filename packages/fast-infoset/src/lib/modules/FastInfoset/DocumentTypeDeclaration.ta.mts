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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.mjs';
export {
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.mjs';
import {
  ProcessingInstruction,
  _decode_ProcessingInstruction,
  _encode_ProcessingInstruction,
} from '../FastInfoset/ProcessingInstruction.ta.mjs';
export {
  ProcessingInstruction,
  _decode_ProcessingInstruction,
  _encode_ProcessingInstruction,
} from '../FastInfoset/ProcessingInstruction.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DocumentTypeDeclaration */
/**
 * @summary DocumentTypeDeclaration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentTypeDeclaration ::= SEQUENCE {
 *   system-identifier  IdentifyingStringOrIndex OPTIONAL-- OTHER URI category --,
 *   public-identifier  IdentifyingStringOrIndex OPTIONAL-- OTHER URI category --,
 *   children           SEQUENCE (SIZE (0..MAX)) OF ProcessingInstruction
 * }
 * ```
 *
 * @class
 */
export class DocumentTypeDeclaration {
  constructor(
    /**
     * @summary `system_identifier`.
     * @public
     * @readonly
     */
    readonly system_identifier: OPTIONAL<IdentifyingStringOrIndex>,
    /**
     * @summary `public_identifier`.
     * @public
     * @readonly
     */
    readonly public_identifier: OPTIONAL<IdentifyingStringOrIndex>,
    /**
     * @summary `children`.
     * @public
     * @readonly
     */
    readonly children: ProcessingInstruction[]
  ) {}

  /**
   * @summary Restructures an object into a DocumentTypeDeclaration
   * @description
   *
   * This takes an `object` and converts it to a `DocumentTypeDeclaration`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DocumentTypeDeclaration`.
   * @returns {DocumentTypeDeclaration}
   */
  public static _from_object(
    _o: { [_K in keyof DocumentTypeDeclaration]: DocumentTypeDeclaration[_K] }
  ): DocumentTypeDeclaration {
    return new DocumentTypeDeclaration(
      _o.system_identifier,
      _o.public_identifier,
      _o.children
    );
  }
}
/* END_OF_SYMBOL_DEFINITION DocumentTypeDeclaration */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DocumentTypeDeclaration */
/**
 * @summary The Leading Root Component Types of DocumentTypeDeclaration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DocumentTypeDeclaration: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'system-identifier',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'public-identifier',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'children',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DocumentTypeDeclaration */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DocumentTypeDeclaration */
/**
 * @summary The Trailing Root Component Types of DocumentTypeDeclaration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DocumentTypeDeclaration: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DocumentTypeDeclaration */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DocumentTypeDeclaration */
/**
 * @summary The Extension Addition Component Types of DocumentTypeDeclaration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DocumentTypeDeclaration: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DocumentTypeDeclaration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentTypeDeclaration */
let _cached_decoder_for_DocumentTypeDeclaration: $.ASN1Decoder<DocumentTypeDeclaration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentTypeDeclaration */

/* START_OF_SYMBOL_DEFINITION _decode_DocumentTypeDeclaration */
/**
 * @summary Decodes an ASN.1 element into a(n) DocumentTypeDeclaration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DocumentTypeDeclaration} The decoded data structure.
 */
export function _decode_DocumentTypeDeclaration(el: _Element) {
  if (!_cached_decoder_for_DocumentTypeDeclaration) {
    _cached_decoder_for_DocumentTypeDeclaration = function (
      el: _Element
    ): DocumentTypeDeclaration {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let system_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      let public_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      let children!: ProcessingInstruction[];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'system-identifier': (_el: _Element): void => {
          system_identifier = _decode_IdentifyingStringOrIndex(_el);
        },
        'public-identifier': (_el: _Element): void => {
          public_identifier = _decode_IdentifyingStringOrIndex(_el);
        },
        children: (_el: _Element): void => {
          children = $._decodeSequenceOf<ProcessingInstruction>(
            () => _decode_ProcessingInstruction
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DocumentTypeDeclaration,
        _extension_additions_list_spec_for_DocumentTypeDeclaration,
        _root_component_type_list_2_spec_for_DocumentTypeDeclaration,
        undefined
      );
      return new DocumentTypeDeclaration /* SEQUENCE_CONSTRUCTOR_CALL */(
        system_identifier,
        public_identifier,
        children
      );
    };
  }
  return _cached_decoder_for_DocumentTypeDeclaration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DocumentTypeDeclaration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentTypeDeclaration */
let _cached_encoder_for_DocumentTypeDeclaration: $.ASN1Encoder<DocumentTypeDeclaration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentTypeDeclaration */

/* START_OF_SYMBOL_DEFINITION _encode_DocumentTypeDeclaration */
/**
 * @summary Encodes a(n) DocumentTypeDeclaration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentTypeDeclaration, encoded as an ASN.1 Element.
 */
export function _encode_DocumentTypeDeclaration(
  value: DocumentTypeDeclaration,
  elGetter: $.ASN1Encoder<DocumentTypeDeclaration>
) {
  if (!_cached_encoder_for_DocumentTypeDeclaration) {
    _cached_encoder_for_DocumentTypeDeclaration = function (
      value: DocumentTypeDeclaration,
      elGetter: $.ASN1Encoder<DocumentTypeDeclaration>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.system_identifier === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(
                  value.system_identifier,
                  $.BER
                ),
            /* IF_ABSENT  */ value.public_identifier === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(
                  value.public_identifier,
                  $.BER
                ),
            /* REQUIRED   */ $._encodeSequenceOf<ProcessingInstruction>(
              () => _encode_ProcessingInstruction,
              $.BER
            )(value.children, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DocumentTypeDeclaration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DocumentTypeDeclaration */

/* eslint-enable */
