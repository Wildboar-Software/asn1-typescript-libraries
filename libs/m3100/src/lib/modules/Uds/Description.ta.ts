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
import { Lang, _decode_Lang, _encode_Lang } from '../Xml/Lang.ta';
export { Lang, _decode_Lang, _encode_Lang } from '../Xml/Lang.ta';
import { Ub1024, _decode_Ub1024, _encode_Ub1024 } from '../Uds/Ub1024.ta';
export { Ub1024, _decode_Ub1024, _encode_Ub1024 } from '../Uds/Ub1024.ta';

/* START_OF_SYMBOL_DEFINITION Description */
/**
 * @summary Description
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Description ::= SEQUENCE {lang  Lang OPTIONAL,
 *                           base  Ub1024
 * }
 * ```
 *
 * @class
 */
export class Description {
  constructor(
    /**
     * @summary `lang`.
     * @public
     * @readonly
     */
    readonly lang: OPTIONAL<Lang>,
    /**
     * @summary `base`.
     * @public
     * @readonly
     */
    readonly base: Ub1024
  ) {}

  /**
   * @summary Restructures an object into a Description
   * @description
   *
   * This takes an `object` and converts it to a `Description`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Description`.
   * @returns {Description}
   */
  public static _from_object(
    _o: { [_K in keyof Description]: Description[_K] }
  ): Description {
    return new Description(_o.lang, _o.base);
  }
}
/* END_OF_SYMBOL_DEFINITION Description */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Description */
/**
 * @summary The Leading Root Component Types of Description
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Description: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'lang',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'base',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Description */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Description */
/**
 * @summary The Trailing Root Component Types of Description
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Description: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Description */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Description */
/**
 * @summary The Extension Addition Component Types of Description
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Description: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Description */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Description */
let _cached_decoder_for_Description: $.ASN1Decoder<Description> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Description */

/* START_OF_SYMBOL_DEFINITION _decode_Description */
/**
 * @summary Decodes an ASN.1 element into a(n) Description
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Description} The decoded data structure.
 */
export function _decode_Description(el: _Element) {
  if (!_cached_decoder_for_Description) {
    _cached_decoder_for_Description = function (el: _Element): Description {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let lang: OPTIONAL<Lang>;
      let base!: Ub1024;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        lang: (_el: _Element): void => {
          lang = _decode_Lang(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_Ub1024(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Description,
        _extension_additions_list_spec_for_Description,
        _root_component_type_list_2_spec_for_Description,
        undefined
      );
      return new Description /* SEQUENCE_CONSTRUCTOR_CALL */(lang, base);
    };
  }
  return _cached_decoder_for_Description(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Description */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Description */
let _cached_encoder_for_Description: $.ASN1Encoder<Description> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Description */

/* START_OF_SYMBOL_DEFINITION _encode_Description */
/**
 * @summary Encodes a(n) Description into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Description, encoded as an ASN.1 Element.
 */
export function _encode_Description(
  value: Description,
  elGetter: $.ASN1Encoder<Description>
) {
  if (!_cached_encoder_for_Description) {
    _cached_encoder_for_Description = function (
      value: Description,
      elGetter: $.ASN1Encoder<Description>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.lang === undefined
              ? undefined
              : _encode_Lang(value.lang, $.BER),
            /* REQUIRED   */ _encode_Ub1024(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Description(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Description */

/* eslint-enable */
