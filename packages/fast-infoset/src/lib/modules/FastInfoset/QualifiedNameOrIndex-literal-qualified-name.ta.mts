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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.mjs';
/* START_OF_SYMBOL_DEFINITION QualifiedNameOrIndex_literal_qualified_name */
/**
 * @summary QualifiedNameOrIndex_literal_qualified_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QualifiedNameOrIndex-literal-qualified-name ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class QualifiedNameOrIndex_literal_qualified_name {
  constructor(
    /**
     * @summary `prefix`.
     * @public
     * @readonly
     */
    readonly prefix: OPTIONAL<IdentifyingStringOrIndex>,
    /**
     * @summary `namespace_name`.
     * @public
     * @readonly
     */
    readonly namespace_name: OPTIONAL<IdentifyingStringOrIndex>,
    /**
     * @summary `local_name`.
     * @public
     * @readonly
     */
    readonly local_name: IdentifyingStringOrIndex
  ) {}

  /**
   * @summary Restructures an object into a QualifiedNameOrIndex_literal_qualified_name
   * @description
   *
   * This takes an `object` and converts it to a `QualifiedNameOrIndex_literal_qualified_name`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `QualifiedNameOrIndex_literal_qualified_name`.
   * @returns {QualifiedNameOrIndex_literal_qualified_name}
   */
  public static _from_object(
    _o: {
      [_K in keyof QualifiedNameOrIndex_literal_qualified_name]: QualifiedNameOrIndex_literal_qualified_name[_K];
    }
  ): QualifiedNameOrIndex_literal_qualified_name {
    return new QualifiedNameOrIndex_literal_qualified_name(
      _o.prefix,
      _o.namespace_name,
      _o.local_name
    );
  }
}
/* END_OF_SYMBOL_DEFINITION QualifiedNameOrIndex_literal_qualified_name */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_QualifiedNameOrIndex_literal_qualified_name */
/**
 * @summary The Leading Root Component Types of QualifiedNameOrIndex_literal_qualified_name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_QualifiedNameOrIndex_literal_qualified_name: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'prefix',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'namespace-name',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'local-name',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_QualifiedNameOrIndex_literal_qualified_name */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_QualifiedNameOrIndex_literal_qualified_name */
/**
 * @summary The Trailing Root Component Types of QualifiedNameOrIndex_literal_qualified_name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_QualifiedNameOrIndex_literal_qualified_name: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_QualifiedNameOrIndex_literal_qualified_name */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_QualifiedNameOrIndex_literal_qualified_name */
/**
 * @summary The Extension Addition Component Types of QualifiedNameOrIndex_literal_qualified_name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_QualifiedNameOrIndex_literal_qualified_name: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_QualifiedNameOrIndex_literal_qualified_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_QualifiedNameOrIndex_literal_qualified_name */
let _cached_decoder_for_QualifiedNameOrIndex_literal_qualified_name: $.ASN1Decoder<QualifiedNameOrIndex_literal_qualified_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_QualifiedNameOrIndex_literal_qualified_name */

/* START_OF_SYMBOL_DEFINITION _decode_QualifiedNameOrIndex_literal_qualified_name */
/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedNameOrIndex_literal_qualified_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QualifiedNameOrIndex_literal_qualified_name} The decoded data structure.
 */
export function _decode_QualifiedNameOrIndex_literal_qualified_name(
  el: _Element
) {
  if (!_cached_decoder_for_QualifiedNameOrIndex_literal_qualified_name) {
    _cached_decoder_for_QualifiedNameOrIndex_literal_qualified_name = function (
      el: _Element
    ): QualifiedNameOrIndex_literal_qualified_name {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let prefix: OPTIONAL<IdentifyingStringOrIndex>;
      let namespace_name: OPTIONAL<IdentifyingStringOrIndex>;
      let local_name!: IdentifyingStringOrIndex;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        prefix: (_el: _Element): void => {
          prefix = _decode_IdentifyingStringOrIndex(_el);
        },
        'namespace-name': (_el: _Element): void => {
          namespace_name = _decode_IdentifyingStringOrIndex(_el);
        },
        'local-name': (_el: _Element): void => {
          local_name = _decode_IdentifyingStringOrIndex(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_QualifiedNameOrIndex_literal_qualified_name,
        _extension_additions_list_spec_for_QualifiedNameOrIndex_literal_qualified_name,
        _root_component_type_list_2_spec_for_QualifiedNameOrIndex_literal_qualified_name,
        undefined
      );
      return new QualifiedNameOrIndex_literal_qualified_name /* SEQUENCE_CONSTRUCTOR_CALL */(
        prefix,
        namespace_name,
        local_name
      );
    };
  }
  return _cached_decoder_for_QualifiedNameOrIndex_literal_qualified_name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_QualifiedNameOrIndex_literal_qualified_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_QualifiedNameOrIndex_literal_qualified_name */
let _cached_encoder_for_QualifiedNameOrIndex_literal_qualified_name: $.ASN1Encoder<QualifiedNameOrIndex_literal_qualified_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_QualifiedNameOrIndex_literal_qualified_name */

/* START_OF_SYMBOL_DEFINITION _encode_QualifiedNameOrIndex_literal_qualified_name */
/**
 * @summary Encodes a(n) QualifiedNameOrIndex_literal_qualified_name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedNameOrIndex_literal_qualified_name, encoded as an ASN.1 Element.
 */
export function _encode_QualifiedNameOrIndex_literal_qualified_name(
  value: QualifiedNameOrIndex_literal_qualified_name,
  elGetter: $.ASN1Encoder<QualifiedNameOrIndex_literal_qualified_name>
) {
  if (!_cached_encoder_for_QualifiedNameOrIndex_literal_qualified_name) {
    _cached_encoder_for_QualifiedNameOrIndex_literal_qualified_name = function (
      value: QualifiedNameOrIndex_literal_qualified_name    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.prefix === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(value.prefix, $.BER),
            /* IF_ABSENT  */ value.namespace_name === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(value.namespace_name, $.BER),
            /* REQUIRED   */ _encode_IdentifyingStringOrIndex(
              value.local_name,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_QualifiedNameOrIndex_literal_qualified_name(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_QualifiedNameOrIndex_literal_qualified_name */

/* eslint-enable */
