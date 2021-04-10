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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  BRANCH_IDENTIFIER_initiators_name,
  _decode_BRANCH_IDENTIFIER_initiators_name,
  _encode_BRANCH_IDENTIFIER_initiators_name,
} from '../CCR/BRANCH-IDENTIFIER-initiators-name.ta';
export {
  BRANCH_IDENTIFIER_initiators_name,
  _decode_BRANCH_IDENTIFIER_initiators_name,
  _encode_BRANCH_IDENTIFIER_initiators_name,
} from '../CCR/BRANCH-IDENTIFIER-initiators-name.ta';
import {
  BRANCH_IDENTIFIER_branch_suffix,
  _decode_BRANCH_IDENTIFIER_branch_suffix,
  _encode_BRANCH_IDENTIFIER_branch_suffix,
} from '../CCR/BRANCH-IDENTIFIER-branch-suffix.ta';
export {
  BRANCH_IDENTIFIER_branch_suffix,
  _decode_BRANCH_IDENTIFIER_branch_suffix,
  _encode_BRANCH_IDENTIFIER_branch_suffix,
} from '../CCR/BRANCH-IDENTIFIER-branch-suffix.ta';

/* START_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER */
/**
 * @summary BRANCH_IDENTIFIER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRANCH-IDENTIFIER ::= SEQUENCE {
 *   initiators-name
 *     CHOICE {name  [0] EXPLICIT AE-title,
 *             side  [1]  ENUMERATED {sender(0), receiver(1), ...
 *                                    },
 *             ...},
 *   branch-suffix    CHOICE {form1  [2]  OCTET STRING,
 *                            form2  [3]  INTEGER,
 *                            ...}
 * }
 * ```
 *
 * @class
 */
export class BRANCH_IDENTIFIER {
  constructor(
    /**
     * @summary `initiators_name`.
     * @public
     * @readonly
     */
    readonly initiators_name: BRANCH_IDENTIFIER_initiators_name,
    /**
     * @summary `branch_suffix`.
     * @public
     * @readonly
     */
    readonly branch_suffix: BRANCH_IDENTIFIER_branch_suffix
  ) {}

  /**
   * @summary Restructures an object into a BRANCH_IDENTIFIER
   * @description
   *
   * This takes an `object` and converts it to a `BRANCH_IDENTIFIER`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BRANCH_IDENTIFIER`.
   * @returns {BRANCH_IDENTIFIER}
   */
  public static _from_object(
    _o: { [_K in keyof BRANCH_IDENTIFIER]: BRANCH_IDENTIFIER[_K] }
  ): BRANCH_IDENTIFIER {
    return new BRANCH_IDENTIFIER(_o.initiators_name, _o.branch_suffix);
  }
}
/* END_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BRANCH_IDENTIFIER */
/**
 * @summary The Leading Root Component Types of BRANCH_IDENTIFIER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BRANCH_IDENTIFIER: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'initiators-name',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'branch-suffix',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BRANCH_IDENTIFIER */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BRANCH_IDENTIFIER */
/**
 * @summary The Trailing Root Component Types of BRANCH_IDENTIFIER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BRANCH_IDENTIFIER: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BRANCH_IDENTIFIER */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BRANCH_IDENTIFIER */
/**
 * @summary The Extension Addition Component Types of BRANCH_IDENTIFIER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BRANCH_IDENTIFIER: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BRANCH_IDENTIFIER */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BRANCH_IDENTIFIER */
let _cached_decoder_for_BRANCH_IDENTIFIER: $.ASN1Decoder<BRANCH_IDENTIFIER> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BRANCH_IDENTIFIER */

/* START_OF_SYMBOL_DEFINITION _decode_BRANCH_IDENTIFIER */
/**
 * @summary Decodes an ASN.1 element into a(n) BRANCH_IDENTIFIER
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRANCH_IDENTIFIER} The decoded data structure.
 */
export function _decode_BRANCH_IDENTIFIER(el: _Element) {
  if (!_cached_decoder_for_BRANCH_IDENTIFIER) {
    _cached_decoder_for_BRANCH_IDENTIFIER = function (
      el: _Element
    ): BRANCH_IDENTIFIER {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BRANCH-IDENTIFIER contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'initiators-name';
      sequence[1].name = 'branch-suffix';
      let initiators_name!: BRANCH_IDENTIFIER_initiators_name;
      let branch_suffix!: BRANCH_IDENTIFIER_branch_suffix;
      initiators_name = _decode_BRANCH_IDENTIFIER_initiators_name(sequence[0]);
      branch_suffix = _decode_BRANCH_IDENTIFIER_branch_suffix(sequence[1]);
      return new BRANCH_IDENTIFIER(initiators_name, branch_suffix);
    };
  }
  return _cached_decoder_for_BRANCH_IDENTIFIER(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BRANCH_IDENTIFIER */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BRANCH_IDENTIFIER */
let _cached_encoder_for_BRANCH_IDENTIFIER: $.ASN1Encoder<BRANCH_IDENTIFIER> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BRANCH_IDENTIFIER */

/* START_OF_SYMBOL_DEFINITION _encode_BRANCH_IDENTIFIER */
/**
 * @summary Encodes a(n) BRANCH_IDENTIFIER into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRANCH_IDENTIFIER, encoded as an ASN.1 Element.
 */
export function _encode_BRANCH_IDENTIFIER(
  value: BRANCH_IDENTIFIER,
  elGetter: $.ASN1Encoder<BRANCH_IDENTIFIER>
) {
  if (!_cached_encoder_for_BRANCH_IDENTIFIER) {
    _cached_encoder_for_BRANCH_IDENTIFIER = function (
      value: BRANCH_IDENTIFIER,
      elGetter: $.ASN1Encoder<BRANCH_IDENTIFIER>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BRANCH_IDENTIFIER_initiators_name(
              value.initiators_name,
              $.BER
            ),
            /* REQUIRED   */ _encode_BRANCH_IDENTIFIER_branch_suffix(
              value.branch_suffix,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BRANCH_IDENTIFIER(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BRANCH_IDENTIFIER */

/* eslint-enable */
