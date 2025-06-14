/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
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
  Access_Context_access_context,
  _decode_Access_Context_access_context,
  _encode_Access_Context_access_context,
} from '../ISO8571-FTAM/Access-Context-access-context.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Access_Context */
/**
 * @summary Access_Context
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Context ::= [APPLICATION 1] IMPLICIT SEQUENCE {
 *   access-context
 *     [0] IMPLICIT INTEGER {hierarchical-all-data-units(0),--HA--
 *                           hierarchical-no-data-units(1),--HN--
 *                           flat-all-data-units(2),--FA--
 *                           flat-one-level-data-unit(3),--FL--
 *                           flat-Single-data-unit(4),--FS--
 *                           unstructured-all-data-units(5),--UA--
 *                           unstructured-Single-data-unit(6)}, --US
 *   level-number    [1] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Access_Context {
  constructor(
    /**
     * @summary `access_context`.
     * @public
     * @readonly
     */
    readonly access_context: Access_Context_access_context,
    /**
     * @summary `level_number`.
     * @public
     * @readonly
     */
    readonly level_number: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a Access_Context
   * @description
   *
   * This takes an `object` and converts it to a `Access_Context`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Access_Context`.
   * @returns {Access_Context}
   */
  public static _from_object(
    _o: { [_K in keyof Access_Context]: Access_Context[_K] }
  ): Access_Context {
    return new Access_Context(_o.access_context, _o.level_number);
  }
}
/* END_OF_SYMBOL_DEFINITION Access_Context */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Access_Context */
/**
 * @summary The Leading Root Component Types of Access_Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Access_Context: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'access-context',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'level-number',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Access_Context */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Access_Context */
/**
 * @summary The Trailing Root Component Types of Access_Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Access_Context: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Access_Context */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Access_Context */
/**
 * @summary The Extension Addition Component Types of Access_Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Access_Context: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Access_Context */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Context */
let _cached_decoder_for_Access_Context: $.ASN1Decoder<Access_Context> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Context */

/* START_OF_SYMBOL_DEFINITION _decode_Access_Context */
/**
 * @summary Decodes an ASN.1 element into a(n) Access_Context
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Context} The decoded data structure.
 */
export function _decode_Access_Context(el: _Element) {
  if (!_cached_decoder_for_Access_Context) {
    _cached_decoder_for_Access_Context = $._decode_implicit<Access_Context>(
      () =>
        function (el: _Element): Access_Context {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let access_context!: Access_Context_access_context;
          let level_number: OPTIONAL<INTEGER>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'access-context': (_el: _Element): void => {
              access_context = $._decode_implicit<Access_Context_access_context>(
                () => _decode_Access_Context_access_context
              )(_el);
            },
            'level-number': (_el: _Element): void => {
              level_number = $._decode_implicit<INTEGER>(
                () => $._decodeInteger
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_Access_Context,
            _extension_additions_list_spec_for_Access_Context,
            _root_component_type_list_2_spec_for_Access_Context,
            undefined
          );
          return new Access_Context /* SEQUENCE_CONSTRUCTOR_CALL */(
            access_context,
            level_number
          );
        }
    );
  }
  return _cached_decoder_for_Access_Context(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Access_Context */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Context */
let _cached_encoder_for_Access_Context: $.ASN1Encoder<Access_Context> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Context */

/* START_OF_SYMBOL_DEFINITION _encode_Access_Context */
/**
 * @summary Encodes a(n) Access_Context into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Context, encoded as an ASN.1 Element.
 */
export function _encode_Access_Context(
  value: Access_Context,
  elGetter: $.ASN1Encoder<Access_Context>
) {
  if (!_cached_encoder_for_Access_Context) {
    _cached_encoder_for_Access_Context = $._encode_implicit(
      _TagClass.application,
      1,
      () =>
        function (
          value: Access_Context        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_Access_Context_access_context,
                  $.BER
                )(value.access_context, $.BER),
                /* IF_ABSENT  */ value.level_number === undefined
                  ? undefined
                  : $._encode_implicit(
                      _TagClass.context,
                      1,
                      () => $._encodeInteger,
                      $.BER
                    )(value.level_number, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_Access_Context(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Access_Context */

/* eslint-enable */
