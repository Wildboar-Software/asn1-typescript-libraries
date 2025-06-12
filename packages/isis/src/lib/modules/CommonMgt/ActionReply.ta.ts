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
  Parameter,
  _decode_Parameter,
  _encode_Parameter,
} from '../CommonMgt/Parameter.ta.js';
export {
  Parameter,
  _decode_Parameter,
  _encode_Parameter,
} from '../CommonMgt/Parameter.ta.js';

/* START_OF_SYMBOL_DEFINITION ActionReply */
/**
 * @summary ActionReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionReply ::= SEQUENCE {
 *   responseCode  OBJECT IDENTIFIER,
 *   responseArgs  SET OF Parameter OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ActionReply {
  constructor(
    /**
     * @summary `responseCode`.
     * @public
     * @readonly
     */
    readonly responseCode: OBJECT_IDENTIFIER,
    /**
     * @summary `responseArgs`.
     * @public
     * @readonly
     */
    readonly responseArgs: OPTIONAL<Parameter[]>
  ) {}

  /**
   * @summary Restructures an object into a ActionReply
   * @description
   *
   * This takes an `object` and converts it to a `ActionReply`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ActionReply`.
   * @returns {ActionReply}
   */
  public static _from_object(
    _o: { [_K in keyof ActionReply]: ActionReply[_K] }
  ): ActionReply {
    return new ActionReply(_o.responseCode, _o.responseArgs);
  }
}
/* END_OF_SYMBOL_DEFINITION ActionReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActionReply */
/**
 * @summary The Leading Root Component Types of ActionReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionReply: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'responseCode',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'responseArgs',
    true,
    $.hasTag(_TagClass.universal, 17),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActionReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActionReply */
/**
 * @summary The Trailing Root Component Types of ActionReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActionReply */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActionReply */
/**
 * @summary The Extension Addition Component Types of ActionReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActionReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionReply */
let _cached_decoder_for_ActionReply: $.ASN1Decoder<ActionReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionReply */

/* START_OF_SYMBOL_DEFINITION _decode_ActionReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionReply} The decoded data structure.
 */
export function _decode_ActionReply(el: _Element) {
  if (!_cached_decoder_for_ActionReply) {
    _cached_decoder_for_ActionReply = function (el: _Element): ActionReply {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let responseCode!: OBJECT_IDENTIFIER;
      let responseArgs: OPTIONAL<Parameter[]>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        responseCode: (_el: _Element): void => {
          responseCode = $._decodeObjectIdentifier(_el);
        },
        responseArgs: (_el: _Element): void => {
          responseArgs = $._decodeSetOf<Parameter>(() => _decode_Parameter)(
            _el
          );
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ActionReply,
        _extension_additions_list_spec_for_ActionReply,
        _root_component_type_list_2_spec_for_ActionReply,
        undefined
      );
      return new ActionReply /* SEQUENCE_CONSTRUCTOR_CALL */(
        responseCode,
        responseArgs
      );
    };
  }
  return _cached_decoder_for_ActionReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionReply */
let _cached_encoder_for_ActionReply: $.ASN1Encoder<ActionReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionReply */

/* START_OF_SYMBOL_DEFINITION _encode_ActionReply */
/**
 * @summary Encodes a(n) ActionReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionReply, encoded as an ASN.1 Element.
 */
export function _encode_ActionReply(
  value: ActionReply,
  elGetter: $.ASN1Encoder<ActionReply>
) {
  if (!_cached_encoder_for_ActionReply) {
    _cached_encoder_for_ActionReply = function (
      value: ActionReply,
      elGetter: $.ASN1Encoder<ActionReply>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(
              value.responseCode,
              $.BER
            ),
            /* IF_ABSENT  */ value.responseArgs === undefined
              ? undefined
              : $._encodeSetOf<Parameter>(() => _encode_Parameter, $.BER)(
                  value.responseArgs,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ActionReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionReply */

/* eslint-enable */
