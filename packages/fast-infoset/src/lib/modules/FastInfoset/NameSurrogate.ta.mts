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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary NameSurrogate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameSurrogate ::= SEQUENCE {
 *   prefix-string-index          INTEGER(1..one-meg) OPTIONAL,
 *   namespace-name-string-index  INTEGER(1..one-meg) OPTIONAL,
 *   local-name-string-index      INTEGER(1..one-meg)
 * }(CONSTRAINED BY {})
 * ```
 *
 * @class
 */
export class NameSurrogate {
  constructor(
    /**
     * @summary `prefix_string_index`.
     * @public
     * @readonly
     */
    readonly prefix_string_index: OPTIONAL<INTEGER>,
    /**
     * @summary `namespace_name_string_index`.
     * @public
     * @readonly
     */
    readonly namespace_name_string_index: OPTIONAL<INTEGER>,
    /**
     * @summary `local_name_string_index`.
     * @public
     * @readonly
     */
    readonly local_name_string_index: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a NameSurrogate
   * @description
   *
   * This takes an `object` and converts it to a `NameSurrogate`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NameSurrogate`.
   * @returns {NameSurrogate}
   */
  public static _from_object(
    _o: { [_K in keyof NameSurrogate]: NameSurrogate[_K] }
  ): NameSurrogate {
    return new NameSurrogate(
      _o.prefix_string_index,
      _o.namespace_name_string_index,
      _o.local_name_string_index
    );
  }
}

/**
 * @summary The Leading Root Component Types of NameSurrogate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameSurrogate: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'prefix-string-index',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'namespace-name-string-index',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'local-name-string-index',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];

/**
 * @summary The Trailing Root Component Types of NameSurrogate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameSurrogate: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NameSurrogate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameSurrogate: $.ComponentSpec[] = [];

let _cached_decoder_for_NameSurrogate: $.ASN1Decoder<NameSurrogate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameSurrogate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameSurrogate} The decoded data structure.
 */
export function _decode_NameSurrogate(el: _Element) {
  if (!_cached_decoder_for_NameSurrogate) {
    _cached_decoder_for_NameSurrogate = function (el: _Element): NameSurrogate {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let prefix_string_index: OPTIONAL<INTEGER>;
      let namespace_name_string_index: OPTIONAL<INTEGER>;
      let local_name_string_index!: INTEGER;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'prefix-string-index': (_el: _Element): void => {
          prefix_string_index = $._decodeInteger(_el);
        },
        'namespace-name-string-index': (_el: _Element): void => {
          namespace_name_string_index = $._decodeInteger(_el);
        },
        'local-name-string-index': (_el: _Element): void => {
          local_name_string_index = $._decodeInteger(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NameSurrogate,
        _extension_additions_list_spec_for_NameSurrogate,
        _root_component_type_list_2_spec_for_NameSurrogate,
        undefined
      );
      return new NameSurrogate /* SEQUENCE_CONSTRUCTOR_CALL */(
        prefix_string_index,
        namespace_name_string_index,
        local_name_string_index
      );
    };
  }
  return _cached_decoder_for_NameSurrogate(el);
}

let _cached_encoder_for_NameSurrogate: $.ASN1Encoder<NameSurrogate> | null = null;

/**
 * @summary Encodes a(n) NameSurrogate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameSurrogate, encoded as an ASN.1 Element.
 */
export function _encode_NameSurrogate(
  value: NameSurrogate,
  elGetter: $.ASN1Encoder<NameSurrogate>
) {
  if (!_cached_encoder_for_NameSurrogate) {
    _cached_encoder_for_NameSurrogate = function (
      value: NameSurrogate    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.prefix_string_index === undefined
              ? undefined
              : $._encodeInteger(value.prefix_string_index, $.BER),
            /* IF_ABSENT  */ value.namespace_name_string_index === undefined
              ? undefined
              : $._encodeInteger(value.namespace_name_string_index, $.BER),
            /* REQUIRED   */ $._encodeInteger(
              value.local_name_string_index,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NameSurrogate(value, elGetter);
}


/* eslint-enable */
