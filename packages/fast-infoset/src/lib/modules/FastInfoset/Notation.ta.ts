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
} from '../FastInfoset/IdentifyingStringOrIndex.ta.js';
export {
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.js';

/* START_OF_SYMBOL_DEFINITION Notation */
/**
 * @summary Notation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Notation ::= SEQUENCE {
 *   name               IdentifyingStringOrIndex-- OTHER NCNAME category --,
 *   system-identifier  IdentifyingStringOrIndex OPTIONAL-- OTHER URI category --,
 *   public-identifier  IdentifyingStringOrIndex OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Notation {
  constructor(
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: IdentifyingStringOrIndex,
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
    readonly public_identifier: OPTIONAL<IdentifyingStringOrIndex>
  ) {}

  /**
   * @summary Restructures an object into a Notation
   * @description
   *
   * This takes an `object` and converts it to a `Notation`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Notation`.
   * @returns {Notation}
   */
  public static _from_object(
    _o: { [_K in keyof Notation]: Notation[_K] }
  ): Notation {
    return new Notation(_o.name, _o.system_identifier, _o.public_identifier);
  }
}
/* END_OF_SYMBOL_DEFINITION Notation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Notation */
/**
 * @summary The Leading Root Component Types of Notation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Notation: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'name',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'system-identifier',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'public-identifier',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Notation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Notation */
/**
 * @summary The Trailing Root Component Types of Notation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Notation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Notation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Notation */
/**
 * @summary The Extension Addition Component Types of Notation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Notation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Notation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Notation */
let _cached_decoder_for_Notation: $.ASN1Decoder<Notation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Notation */

/* START_OF_SYMBOL_DEFINITION _decode_Notation */
/**
 * @summary Decodes an ASN.1 element into a(n) Notation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notation} The decoded data structure.
 */
export function _decode_Notation(el: _Element) {
  if (!_cached_decoder_for_Notation) {
    _cached_decoder_for_Notation = function (el: _Element): Notation {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let name!: IdentifyingStringOrIndex;
      let system_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      let public_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        name: (_el: _Element): void => {
          name = _decode_IdentifyingStringOrIndex(_el);
        },
        'system-identifier': (_el: _Element): void => {
          system_identifier = _decode_IdentifyingStringOrIndex(_el);
        },
        'public-identifier': (_el: _Element): void => {
          public_identifier = _decode_IdentifyingStringOrIndex(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Notation,
        _extension_additions_list_spec_for_Notation,
        _root_component_type_list_2_spec_for_Notation,
        undefined
      );
      return new Notation /* SEQUENCE_CONSTRUCTOR_CALL */(
        name,
        system_identifier,
        public_identifier
      );
    };
  }
  return _cached_decoder_for_Notation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Notation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Notation */
let _cached_encoder_for_Notation: $.ASN1Encoder<Notation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Notation */

/* START_OF_SYMBOL_DEFINITION _encode_Notation */
/**
 * @summary Encodes a(n) Notation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notation, encoded as an ASN.1 Element.
 */
export function _encode_Notation(
  value: Notation,
  elGetter: $.ASN1Encoder<Notation>
) {
  if (!_cached_encoder_for_Notation) {
    _cached_encoder_for_Notation = function (
      value: Notation,
      elGetter: $.ASN1Encoder<Notation>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_IdentifyingStringOrIndex(
              value.name,
              $.BER
            ),
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
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Notation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Notation */

/* eslint-enable */
