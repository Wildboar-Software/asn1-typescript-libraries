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
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta';
export {
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta';

/* START_OF_SYMBOL_DEFINITION BSPRegistrationEvent_NotificationParams */
/**
 * @summary BSPRegistrationEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPRegistrationEvent-NotificationParams ::= SEQUENCE {
 *   bspSchema  BioAPI-BSP-SCHEMA,
 *   update     BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class BSPRegistrationEvent_NotificationParams {
  constructor(
    /**
     * @summary `bspSchema`.
     * @public
     * @readonly
     */
    readonly bspSchema: BioAPI_BSP_SCHEMA,
    /**
     * @summary `update`.
     * @public
     * @readonly
     */
    readonly update: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a BSPRegistrationEvent_NotificationParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPRegistrationEvent_NotificationParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPRegistrationEvent_NotificationParams`.
   * @returns {BSPRegistrationEvent_NotificationParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof BSPRegistrationEvent_NotificationParams]: BSPRegistrationEvent_NotificationParams[_K];
    }
  ): BSPRegistrationEvent_NotificationParams {
    return new BSPRegistrationEvent_NotificationParams(_o.bspSchema, _o.update);
  }
}
/* END_OF_SYMBOL_DEFINITION BSPRegistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BSPRegistrationEvent_NotificationParams */
/**
 * @summary The Leading Root Component Types of BSPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspSchema',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'update',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BSPRegistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BSPRegistrationEvent_NotificationParams */
/**
 * @summary The Trailing Root Component Types of BSPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BSPRegistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BSPRegistrationEvent_NotificationParams */
/**
 * @summary The Extension Addition Component Types of BSPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BSPRegistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BSPRegistrationEvent_NotificationParams */
let _cached_decoder_for_BSPRegistrationEvent_NotificationParams: $.ASN1Decoder<BSPRegistrationEvent_NotificationParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BSPRegistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _decode_BSPRegistrationEvent_NotificationParams */
/**
 * @summary Decodes an ASN.1 element into a(n) BSPRegistrationEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPRegistrationEvent_NotificationParams} The decoded data structure.
 */
export function _decode_BSPRegistrationEvent_NotificationParams(el: _Element) {
  if (!_cached_decoder_for_BSPRegistrationEvent_NotificationParams) {
    _cached_decoder_for_BSPRegistrationEvent_NotificationParams = function (
      el: _Element
    ): BSPRegistrationEvent_NotificationParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BSPRegistrationEvent-NotificationParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspSchema';
      sequence[1].name = 'update';
      let bspSchema!: BioAPI_BSP_SCHEMA;
      let update!: BOOLEAN;
      bspSchema = _decode_BioAPI_BSP_SCHEMA(sequence[0]);
      update = $._decodeBoolean(sequence[1]);
      return new BSPRegistrationEvent_NotificationParams(bspSchema, update);
    };
  }
  return _cached_decoder_for_BSPRegistrationEvent_NotificationParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BSPRegistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BSPRegistrationEvent_NotificationParams */
let _cached_encoder_for_BSPRegistrationEvent_NotificationParams: $.ASN1Encoder<BSPRegistrationEvent_NotificationParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BSPRegistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _encode_BSPRegistrationEvent_NotificationParams */
/**
 * @summary Encodes a(n) BSPRegistrationEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPRegistrationEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPRegistrationEvent_NotificationParams(
  value: BSPRegistrationEvent_NotificationParams,
  elGetter: $.ASN1Encoder<BSPRegistrationEvent_NotificationParams>
) {
  if (!_cached_encoder_for_BSPRegistrationEvent_NotificationParams) {
    _cached_encoder_for_BSPRegistrationEvent_NotificationParams = function (
      value: BSPRegistrationEvent_NotificationParams,
      elGetter: $.ASN1Encoder<BSPRegistrationEvent_NotificationParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BSP_SCHEMA(value.bspSchema, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.update, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPRegistrationEvent_NotificationParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_BSPRegistrationEvent_NotificationParams */

/* eslint-enable */
