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
import {
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.mjs';
import {
  ProcessingInstruction,
  _decode_ProcessingInstruction,
  _encode_ProcessingInstruction,
} from '../FastInfoset/ProcessingInstruction.ta.mjs';
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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'public-identifier',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'children',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];

/**
 * @summary The Trailing Root Component Types of DocumentTypeDeclaration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DocumentTypeDeclaration: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DocumentTypeDeclaration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DocumentTypeDeclaration: $.ComponentSpec[] = [];

let _cached_decoder_for_DocumentTypeDeclaration: $.ASN1Decoder<DocumentTypeDeclaration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DocumentTypeDeclaration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DocumentTypeDeclaration} The decoded data structure.
 */
export function _decode_DocumentTypeDeclaration(el: _Element): DocumentTypeDeclaration {
  if (!_cached_decoder_for_DocumentTypeDeclaration) {
    _cached_decoder_for_DocumentTypeDeclaration = function (
      el: _Element
    ): DocumentTypeDeclaration {
      let system_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      let public_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      let children!: ProcessingInstruction[];
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DocumentTypeDeclaration,
        _extension_additions_list_spec_for_DocumentTypeDeclaration,
        _root_component_type_list_2_spec_for_DocumentTypeDeclaration,
        undefined
      );
      return new DocumentTypeDeclaration (
        system_identifier,
        public_identifier,
        children
      );
    };
  }
  return _cached_decoder_for_DocumentTypeDeclaration(el);
}

let _cached_encoder_for_DocumentTypeDeclaration: $.ASN1Encoder<DocumentTypeDeclaration> | null = null;

/**
 * @summary Encodes a(n) DocumentTypeDeclaration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentTypeDeclaration, encoded as an ASN.1 Element.
 */
export function _encode_DocumentTypeDeclaration(
  value: DocumentTypeDeclaration,
  elGetter: $.ASN1Encoder<DocumentTypeDeclaration>
): _Element {
  if (!_cached_encoder_for_DocumentTypeDeclaration) {
    _cached_encoder_for_DocumentTypeDeclaration = function (
      value: DocumentTypeDeclaration    ): _Element {
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


/* eslint-enable */
