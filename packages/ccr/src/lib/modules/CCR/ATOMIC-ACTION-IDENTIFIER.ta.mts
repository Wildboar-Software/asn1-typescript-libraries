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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  ATOMIC_ACTION_IDENTIFIER_owners_name,
  _decode_ATOMIC_ACTION_IDENTIFIER_owners_name,
  _encode_ATOMIC_ACTION_IDENTIFIER_owners_name,
} from '../CCR/ATOMIC-ACTION-IDENTIFIER-owners-name.ta.mjs';
import {
  ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix,
  _decode_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix,
  _encode_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix,
} from '../CCR/ATOMIC-ACTION-IDENTIFIER-atomic-action-suffix.ta.mjs';

/**
 * @summary ATOMIC_ACTION_IDENTIFIER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATOMIC-ACTION-IDENTIFIER ::= SEQUENCE {
 *   owners-name
 *     CHOICE {name  [0] EXPLICIT AE-title,
 *             side  [1]  ENUMERATED {sender(0), receiver(1), ...
 *                                    },
 *             ...},
 *   atomic-action-suffix
 *     CHOICE {form1  [2]  OCTET STRING,
 *             form2  [3]  INTEGER,
 *             ...}
 * }
 * ```
 *
 */
export class ATOMIC_ACTION_IDENTIFIER {
  constructor(
    /**
     * @summary `owners_name`.
     * @public
     * @readonly
     */
    readonly owners_name: ATOMIC_ACTION_IDENTIFIER_owners_name,
    /**
     * @summary `atomic_action_suffix`.
     * @public
     * @readonly
     */
    readonly atomic_action_suffix: ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix
  ) {}

  /**
   * @summary Restructures an object into a ATOMIC_ACTION_IDENTIFIER
   * @description
   *
   * This takes an `object` and converts it to a `ATOMIC_ACTION_IDENTIFIER`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ATOMIC_ACTION_IDENTIFIER`.
   * @returns {ATOMIC_ACTION_IDENTIFIER}
   */
  public static _from_object(
    _o: { [_K in keyof ATOMIC_ACTION_IDENTIFIER]: ATOMIC_ACTION_IDENTIFIER[_K] }
  ): ATOMIC_ACTION_IDENTIFIER {
    return new ATOMIC_ACTION_IDENTIFIER(
      _o.owners_name,
      _o.atomic_action_suffix
    );
  }
}


/**
 * @summary The Leading Root Component Types of ATOMIC_ACTION_IDENTIFIER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ATOMIC_ACTION_IDENTIFIER: $.ComponentSpec[] = [
  new $.ComponentSpec('owners-name', false, $.hasAnyTag),
  new $.ComponentSpec(
    'atomic-action-suffix',
    false,
    $.hasAnyTag
  ),
];


/**
 * @summary The Trailing Root Component Types of ATOMIC_ACTION_IDENTIFIER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ATOMIC_ACTION_IDENTIFIER: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ATOMIC_ACTION_IDENTIFIER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ATOMIC_ACTION_IDENTIFIER: $.ComponentSpec[] = [];


let _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER: $.ASN1Decoder<ATOMIC_ACTION_IDENTIFIER> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ATOMIC_ACTION_IDENTIFIER
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ATOMIC_ACTION_IDENTIFIER} The decoded data structure.
 */
export function _decode_ATOMIC_ACTION_IDENTIFIER(el: _Element): ATOMIC_ACTION_IDENTIFIER {
  if (!_cached_decoder_for_ATOMIC_ACTION_IDENTIFIER) {
    _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER = function (
      el: _Element
    ): ATOMIC_ACTION_IDENTIFIER {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ATOMIC-ACTION-IDENTIFIER contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'owners-name';
      sequence[1].name = 'atomic-action-suffix';
      let owners_name!: ATOMIC_ACTION_IDENTIFIER_owners_name;
      let atomic_action_suffix!: ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix;
      owners_name = _decode_ATOMIC_ACTION_IDENTIFIER_owners_name(sequence[0]);
      atomic_action_suffix = _decode_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix(
        sequence[1]
      );
      return new ATOMIC_ACTION_IDENTIFIER(owners_name, atomic_action_suffix);
    };
  }
  return _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER(el);
}


let _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER: $.ASN1Encoder<ATOMIC_ACTION_IDENTIFIER> | null = null;


/**
 * @summary Encodes a(n) ATOMIC_ACTION_IDENTIFIER into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ATOMIC_ACTION_IDENTIFIER, encoded as an ASN.1 Element.
 */
export function _encode_ATOMIC_ACTION_IDENTIFIER(
  value: ATOMIC_ACTION_IDENTIFIER,
  elGetter: $.ASN1Encoder<ATOMIC_ACTION_IDENTIFIER>
): _Element {
  if (!_cached_encoder_for_ATOMIC_ACTION_IDENTIFIER) {
    _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER = function (
      value: ATOMIC_ACTION_IDENTIFIER    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ATOMIC_ACTION_IDENTIFIER_owners_name(
              value.owners_name,
              $.BER
            ),
            /* REQUIRED   */ _encode_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix(
              value.atomic_action_suffix,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER(value, elGetter);
}


/* eslint-enable */
