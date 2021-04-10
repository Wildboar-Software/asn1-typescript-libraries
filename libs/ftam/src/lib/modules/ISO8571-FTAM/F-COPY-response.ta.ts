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
  Action_Result,
    Action_Result_success,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta';
export {
  Action_Result,
  _decode_Action_Result,
  _encode_Action_Result,
} from '../ISO8571-FTAM/Action-Result.ta';
import {
  Destination_File_Directory,
  _decode_Destination_File_Directory,
  _encode_Destination_File_Directory,
} from '../ISO8571-FTAM/Destination-File-Directory.ta';
export {
  Destination_File_Directory,
  _decode_Destination_File_Directory,
  _encode_Destination_File_Directory,
} from '../ISO8571-FTAM/Destination-File-Directory.ta';
import {
  Change_Attributes,
  _decode_Change_Attributes,
  _encode_Change_Attributes,
} from '../ISO8571-FTAM/Change-Attributes.ta';
export {
  Change_Attributes,
  _decode_Change_Attributes,
  _encode_Change_Attributes,
} from '../ISO8571-FTAM/Change-Attributes.ta';
import {
  Diagnostic,
  _decode_Diagnostic,
  _encode_Diagnostic,
} from '../ISO8571-FTAM/Diagnostic.ta';
export {
  Diagnostic,
  _decode_Diagnostic,
  _encode_Diagnostic,
} from '../ISO8571-FTAM/Diagnostic.ta';

/* START_OF_SYMBOL_DEFINITION F_COPY_response */
/**
 * @summary F_COPY_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-COPY-response ::= SEQUENCE {
 *   action-result               Action-Result DEFAULT success,
 *   destination-file-directory  Destination-File-Directory OPTIONAL,
 *   attributes                  Change-Attributes OPTIONAL,
 *   diagnostic                  Diagnostic OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class F_COPY_response {
  constructor(
    /**
     * @summary `action_result`.
     * @public
     * @readonly
     */
    readonly action_result: OPTIONAL<Action_Result>,
    /**
     * @summary `destination_file_directory`.
     * @public
     * @readonly
     */
    readonly destination_file_directory: OPTIONAL<Destination_File_Directory>,
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: OPTIONAL<Change_Attributes>,
    /**
     * @summary `diagnostic`.
     * @public
     * @readonly
     */
    readonly diagnostic: OPTIONAL<Diagnostic>
  ) {}

  /**
   * @summary Restructures an object into a F_COPY_response
   * @description
   *
   * This takes an `object` and converts it to a `F_COPY_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_COPY_response`.
   * @returns {F_COPY_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_COPY_response]: F_COPY_response[_K] }
  ): F_COPY_response {
    return new F_COPY_response(
      _o.action_result,
      _o.destination_file_directory,
      _o.attributes,
      _o.diagnostic
    );
  }

  /**
   * @summary Getter that returns the default value for `action_result`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_action_result() {
    return Action_Result_success;
  }
}
/* END_OF_SYMBOL_DEFINITION F_COPY_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_COPY_response */
/**
 * @summary The Leading Root Component Types of F_COPY_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_COPY_response: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'action-result',
    true,
    $.hasTag(_TagClass.application, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'destination-file-directory',
    true,
    $.hasTag(_TagClass.application, 24),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'attributes',
    true,
    $.hasTag(_TagClass.application, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'diagnostic',
    true,
    $.hasTag(_TagClass.application, 13),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_COPY_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_COPY_response */
/**
 * @summary The Trailing Root Component Types of F_COPY_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_COPY_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_COPY_response */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_COPY_response */
/**
 * @summary The Extension Addition Component Types of F_COPY_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_COPY_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_COPY_response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_COPY_response */
let _cached_decoder_for_F_COPY_response: $.ASN1Decoder<F_COPY_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_COPY_response */

/* START_OF_SYMBOL_DEFINITION _decode_F_COPY_response */
/**
 * @summary Decodes an ASN.1 element into a(n) F_COPY_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_COPY_response} The decoded data structure.
 */
export function _decode_F_COPY_response(el: _Element) {
  if (!_cached_decoder_for_F_COPY_response) {
    _cached_decoder_for_F_COPY_response = function (
      el: _Element
    ): F_COPY_response {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let action_result: OPTIONAL<Action_Result> =
        F_COPY_response._default_value_for_action_result;
      let destination_file_directory: OPTIONAL<Destination_File_Directory>;
      let attributes: OPTIONAL<Change_Attributes>;
      let diagnostic: OPTIONAL<Diagnostic>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'action-result': (_el: _Element): void => {
          action_result = _decode_Action_Result(_el);
        },
        'destination-file-directory': (_el: _Element): void => {
          destination_file_directory = _decode_Destination_File_Directory(_el);
        },
        attributes: (_el: _Element): void => {
          attributes = _decode_Change_Attributes(_el);
        },
        diagnostic: (_el: _Element): void => {
          diagnostic = _decode_Diagnostic(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_F_COPY_response,
        _extension_additions_list_spec_for_F_COPY_response,
        _root_component_type_list_2_spec_for_F_COPY_response,
        undefined
      );
      return new F_COPY_response /* SEQUENCE_CONSTRUCTOR_CALL */(
        action_result,
        destination_file_directory,
        attributes,
        diagnostic
      );
    };
  }
  return _cached_decoder_for_F_COPY_response(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_COPY_response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_COPY_response */
let _cached_encoder_for_F_COPY_response: $.ASN1Encoder<F_COPY_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_COPY_response */

/* START_OF_SYMBOL_DEFINITION _encode_F_COPY_response */
/**
 * @summary Encodes a(n) F_COPY_response into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_COPY_response, encoded as an ASN.1 Element.
 */
export function _encode_F_COPY_response(
  value: F_COPY_response,
  elGetter: $.ASN1Encoder<F_COPY_response>
) {
  if (!_cached_encoder_for_F_COPY_response) {
    _cached_encoder_for_F_COPY_response = function (
      value: F_COPY_response,
      elGetter: $.ASN1Encoder<F_COPY_response>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.action_result === undefined ||
            $.deepEq(
              value.action_result,
              F_COPY_response._default_value_for_action_result
            )
              ? undefined
              : _encode_Action_Result(value.action_result, $.BER),
            /* IF_ABSENT  */ value.destination_file_directory === undefined
              ? undefined
              : _encode_Destination_File_Directory(
                  value.destination_file_directory,
                  $.BER
                ),
            /* IF_ABSENT  */ value.attributes === undefined
              ? undefined
              : _encode_Change_Attributes(value.attributes, $.BER),
            /* IF_ABSENT  */ value.diagnostic === undefined
              ? undefined
              : _encode_Diagnostic(value.diagnostic, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_COPY_response(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_COPY_response */

/* eslint-enable */
