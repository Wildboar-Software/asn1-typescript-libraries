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
  ConnectionData,
  _decode_ConnectionData,
  _encode_ConnectionData,
} from '../Reliable-Transfer-APDU/ConnectionData.ta';
export {
  ConnectionData,
  _decode_ConnectionData,
  _encode_ConnectionData,
} from '../Reliable-Transfer-APDU/ConnectionData.ta';

/* START_OF_SYMBOL_DEFINITION RTOACapdu */
/**
 * @summary RTOACapdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTOACapdu ::= SET {
 *   checkpointSize    [0] IMPLICIT INTEGER DEFAULT 0,
 *   windowSize        [1] IMPLICIT INTEGER DEFAULT 3,
 *   connectionDataAC  [2]  ConnectionData
 * }
 * ```
 *
 * @class
 */
export class RTOACapdu {
  constructor(
    /**
     * @summary `checkpointSize`.
     * @public
     * @readonly
     */
    readonly checkpointSize: OPTIONAL<INTEGER>,
    /**
     * @summary `windowSize`.
     * @public
     * @readonly
     */
    readonly windowSize: OPTIONAL<INTEGER>,
    /**
     * @summary `connectionDataAC`.
     * @public
     * @readonly
     */
    readonly connectionDataAC: ConnectionData
  ) {}

  /**
   * @summary Restructures an object into a RTOACapdu
   * @description
   *
   * This takes an `object` and converts it to a `RTOACapdu`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RTOACapdu`.
   * @returns {RTOACapdu}
   */
  public static _from_object(
    _o: { [_K in keyof RTOACapdu]: RTOACapdu[_K] }
  ): RTOACapdu {
    return new RTOACapdu(_o.checkpointSize, _o.windowSize, _o.connectionDataAC);
  }

  /**
   * @summary Getter that returns the default value for `checkpointSize`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_checkpointSize() {
    return 0;
  }
  /**
   * @summary Getter that returns the default value for `windowSize`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_windowSize() {
    return 3;
  }
}
/* END_OF_SYMBOL_DEFINITION RTOACapdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RTOACapdu */
/**
 * @summary The Leading Root Component Types of RTOACapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RTOACapdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'checkpointSize',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'windowSize',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'connectionDataAC',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RTOACapdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RTOACapdu */
/**
 * @summary The Trailing Root Component Types of RTOACapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RTOACapdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RTOACapdu */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RTOACapdu */
/**
 * @summary The Extension Addition Component Types of RTOACapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RTOACapdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RTOACapdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RTOACapdu */
let _cached_decoder_for_RTOACapdu: $.ASN1Decoder<RTOACapdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RTOACapdu */

/* START_OF_SYMBOL_DEFINITION _decode_RTOACapdu */
/**
 * @summary Decodes an ASN.1 element into a(n) RTOACapdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RTOACapdu} The decoded data structure.
 */
export function _decode_RTOACapdu(el: _Element) {
  if (!_cached_decoder_for_RTOACapdu) {
    _cached_decoder_for_RTOACapdu = function (el: _Element): RTOACapdu {
      /* START_OF_SET_COMPONENT_DECLARATIONS */
      let checkpointSize: OPTIONAL<INTEGER> =
        RTOACapdu._default_value_for_checkpointSize;
      let windowSize: OPTIONAL<INTEGER> =
        RTOACapdu._default_value_for_windowSize;
      let connectionDataAC!: ConnectionData;
      /* END_OF_SET_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        checkpointSize: (_el: _Element): void => {
          checkpointSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
        windowSize: (_el: _Element): void => {
          windowSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
        },
        connectionDataAC: (_el: _Element): void => {
          connectionDataAC = $._decode_explicit<ConnectionData>(
            () => _decode_ConnectionData
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_set(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RTOACapdu,
        _extension_additions_list_spec_for_RTOACapdu,
        _root_component_type_list_2_spec_for_RTOACapdu,
        undefined
      );
      return new RTOACapdu /* SET_CONSTRUCTOR_CALL */(
        checkpointSize,
        windowSize,
        connectionDataAC
      );
    };
  }
  return _cached_decoder_for_RTOACapdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RTOACapdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RTOACapdu */
let _cached_encoder_for_RTOACapdu: $.ASN1Encoder<RTOACapdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RTOACapdu */

/* START_OF_SYMBOL_DEFINITION _encode_RTOACapdu */
/**
 * @summary Encodes a(n) RTOACapdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTOACapdu, encoded as an ASN.1 Element.
 */
export function _encode_RTOACapdu(
  value: RTOACapdu,
  elGetter: $.ASN1Encoder<RTOACapdu>
) {
  if (!_cached_encoder_for_RTOACapdu) {
    _cached_encoder_for_RTOACapdu = function (
      value: RTOACapdu,
      elGetter: $.ASN1Encoder<RTOACapdu>
    ): _Element {
      return $._encodeSet(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.checkpointSize === undefined ||
            $.deepEq(
              value.checkpointSize,
              RTOACapdu._default_value_for_checkpointSize
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => $._encodeInteger,
                  $.BER
                )(value.checkpointSize, $.BER),
            /* IF_DEFAULT */ value.windowSize === undefined ||
            $.deepEq(value.windowSize, RTOACapdu._default_value_for_windowSize)
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeInteger,
                  $.BER
                )(value.windowSize, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              2,
              () => _encode_ConnectionData,
              $.BER
            )(value.connectionDataAC, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RTOACapdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RTOACapdu */

/* eslint-enable */
