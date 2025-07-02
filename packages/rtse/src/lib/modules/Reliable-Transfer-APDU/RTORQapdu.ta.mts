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
import {
  RTORQapdu_dialogueMode,
  monologue /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_RTORQapdu_dialogueMode,
  _encode_RTORQapdu_dialogueMode,
} from '../Reliable-Transfer-APDU/RTORQapdu-dialogueMode.ta.mjs';
import {
  ConnectionData,
  _decode_ConnectionData,
  _encode_ConnectionData,
} from '../Reliable-Transfer-APDU/ConnectionData.ta.mjs';

/**
 * @summary RTORQapdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTORQapdu ::= SET {
 *   checkpointSize       [0] IMPLICIT INTEGER DEFAULT 0,
 *   windowSize           [1] IMPLICIT INTEGER DEFAULT 3,
 *   dialogueMode
 *     [2] IMPLICIT INTEGER {monologue(0), twa(1)} DEFAULT monologue,
 *   connectionDataRQ     [3]  ConnectionData,
 *   applicationProtocol
 *     [4] IMPLICIT INTEGER OPTIONAL --solely in X.410-1984 mode--
 * }
 * ```
 *
 * @class
 */
export class RTORQapdu {
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
     * @summary `dialogueMode`.
     * @public
     * @readonly
     */
    readonly dialogueMode: OPTIONAL<RTORQapdu_dialogueMode>,
    /**
     * @summary `connectionDataRQ`.
     * @public
     * @readonly
     */
    readonly connectionDataRQ: ConnectionData,
    /**
     * @summary `applicationProtocol`.
     * @public
     * @readonly
     */
    readonly applicationProtocol: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a RTORQapdu
   * @description
   *
   * This takes an `object` and converts it to a `RTORQapdu`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RTORQapdu`.
   * @returns {RTORQapdu}
   */
  public static _from_object(
    _o: { [_K in keyof RTORQapdu]: RTORQapdu[_K] }
  ): RTORQapdu {
    return new RTORQapdu(
      _o.checkpointSize,
      _o.windowSize,
      _o.dialogueMode,
      _o.connectionDataRQ,
      _o.applicationProtocol
    );
  }

  /**
   * @summary Getter that returns the default value for `checkpointSize`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_checkpointSize(): INTEGER {
    return 0;
  }
  /**
   * @summary Getter that returns the default value for `windowSize`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_windowSize(): INTEGER {
    return 3;
  }
  /**
   * @summary Getter that returns the default value for `dialogueMode`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_dialogueMode(): RTORQapdu_dialogueMode {
    return monologue;
  }
}


/**
 * @summary The Leading Root Component Types of RTORQapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RTORQapdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'checkpointSize',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'windowSize',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'dialogueMode',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'connectionDataRQ',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'applicationProtocol',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of RTORQapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RTORQapdu: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RTORQapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RTORQapdu: $.ComponentSpec[] = [];


let _cached_decoder_for_RTORQapdu: $.ASN1Decoder<RTORQapdu> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RTORQapdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RTORQapdu} The decoded data structure.
 */
export function _decode_RTORQapdu(el: _Element): RTORQapdu {
  if (!_cached_decoder_for_RTORQapdu) {
    _cached_decoder_for_RTORQapdu = function (el: _Element): RTORQapdu {
      /* START_OF_SET_COMPONENT_DECLARATIONS */
      let checkpointSize: OPTIONAL<INTEGER> =
        RTORQapdu._default_value_for_checkpointSize;
      let windowSize: OPTIONAL<INTEGER> =
        RTORQapdu._default_value_for_windowSize;
      let dialogueMode: OPTIONAL<RTORQapdu_dialogueMode> =
        RTORQapdu._default_value_for_dialogueMode;
      let connectionDataRQ!: ConnectionData;
      let applicationProtocol: OPTIONAL<INTEGER>;
      /* END_OF_SET_COMPONENT_DECLARATIONS */
      const callbacks: $.DecodingMap = {
        checkpointSize: (_el: _Element): void => {
          checkpointSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
            _el
          );
        },
        windowSize: (_el: _Element): void => {
          windowSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
        },
        dialogueMode: (_el: _Element): void => {
          dialogueMode = $._decode_implicit<RTORQapdu_dialogueMode>(
            () => _decode_RTORQapdu_dialogueMode
          )(_el);
        },
        connectionDataRQ: (_el: _Element): void => {
          connectionDataRQ = $._decode_explicit<ConnectionData>(
            () => _decode_ConnectionData
          )(_el);
        },
        applicationProtocol: (_el: _Element): void => {
          applicationProtocol = $._decode_implicit<INTEGER>(
            () => $._decodeInteger
          )(_el);
        },
      };
      $._parse_set(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RTORQapdu,
        _extension_additions_list_spec_for_RTORQapdu,
        _root_component_type_list_2_spec_for_RTORQapdu,
        undefined
      );
      return new RTORQapdu /* SET_CONSTRUCTOR_CALL */(
        checkpointSize,
        windowSize,
        dialogueMode,
        connectionDataRQ,
        applicationProtocol
      );
    };
  }
  return _cached_decoder_for_RTORQapdu(el);
}


let _cached_encoder_for_RTORQapdu: $.ASN1Encoder<RTORQapdu> | null = null;


/**
 * @summary Encodes a(n) RTORQapdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTORQapdu, encoded as an ASN.1 Element.
 */
export function _encode_RTORQapdu(
  value: RTORQapdu,
  elGetter: $.ASN1Encoder<RTORQapdu>
): _Element {
  if (!_cached_encoder_for_RTORQapdu) {
    _cached_encoder_for_RTORQapdu = function (
      value: RTORQapdu    ): _Element {
      return $._encodeSet(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.checkpointSize === undefined ||
            $.deepEq(
              value.checkpointSize,
              RTORQapdu._default_value_for_checkpointSize
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => $._encodeInteger,
                  $.BER
                )(value.checkpointSize, $.BER),
            /* IF_DEFAULT */ value.windowSize === undefined ||
            $.deepEq(value.windowSize, RTORQapdu._default_value_for_windowSize)
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => $._encodeInteger,
                  $.BER
                )(value.windowSize, $.BER),
            /* IF_DEFAULT */ value.dialogueMode === undefined ||
            $.deepEq(
              value.dialogueMode,
              RTORQapdu._default_value_for_dialogueMode
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_RTORQapdu_dialogueMode,
                  $.BER
                )(value.dialogueMode, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              3,
              () => _encode_ConnectionData,
              $.BER
            )(value.connectionDataRQ, $.BER),
            /* IF_ABSENT  */ value.applicationProtocol === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  4,
                  () => $._encodeInteger,
                  $.BER
                )(value.applicationProtocol, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RTORQapdu(value, elGetter);
}


/* eslint-enable */
