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
  ActionErrorInfo_errorStatus,
  _enum_for_ActionErrorInfo_errorStatus,
  _decode_ActionErrorInfo_errorStatus,
  _encode_ActionErrorInfo_errorStatus,
} from '../CMIP-1/ActionErrorInfo-errorStatus.ta.mjs';
import {
  ActionErrorInfo_errorInfo,
  _decode_ActionErrorInfo_errorInfo,
  _encode_ActionErrorInfo_errorInfo,
} from '../CMIP-1/ActionErrorInfo-errorInfo.ta.mjs';

/**
 * @summary ActionErrorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionErrorInfo ::= SEQUENCE {
 *   errorStatus
 *     ENUMERATED {accessDenied(2), noSuchAction(9), noSuchArgument(14),
 *                 invalidArgumentValue(15), ...
 *                 },
 *   errorInfo
 *     CHOICE {actionType      CMIP-ACTION.&id({ActionSet}),
 *             actionArgument  [0]  NoSuchArgument,
 *             argumentValue   [1]  InvalidArgumentValue},
 *   ...
 * }
 * ```
 *
 */
export class ActionErrorInfo {
  constructor(
    /**
     * @summary `errorStatus`.
     * @public
     * @readonly
     */
    readonly errorStatus: ActionErrorInfo_errorStatus,
    /**
     * @summary `errorInfo`.
     * @public
     * @readonly
     */
    readonly errorInfo: ActionErrorInfo_errorInfo,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ActionErrorInfo
   * @description
   *
   * This takes an `object` and converts it to a `ActionErrorInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ActionErrorInfo`.
   * @returns {ActionErrorInfo}
   */
  public static _from_object(
    _o: { [_K in keyof ActionErrorInfo]: ActionErrorInfo[_K] }
  ): ActionErrorInfo {
    return new ActionErrorInfo(
      _o.errorStatus,
      _o.errorInfo,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `errorStatus`
   * @public
   * @static
   */

  public static _enum_for_errorStatus = _enum_for_ActionErrorInfo_errorStatus;
}


/**
 * @summary The Leading Root Component Types of ActionErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionErrorInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'errorStatus',
    false,
    $.hasTag(_TagClass.universal, 10)
  ),
  new $.ComponentSpec('errorInfo', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of ActionErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionErrorInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ActionErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionErrorInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_ActionErrorInfo: $.ASN1Decoder<ActionErrorInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionErrorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionErrorInfo} The decoded data structure.
 */
export function _decode_ActionErrorInfo(el: _Element): ActionErrorInfo {
  if (!_cached_decoder_for_ActionErrorInfo) {
    _cached_decoder_for_ActionErrorInfo = function (
      el: _Element
    ): ActionErrorInfo {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ActionErrorInfo contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'errorStatus';
      sequence[1].name = 'errorInfo';
      let errorStatus!: ActionErrorInfo_errorStatus;
      let errorInfo!: ActionErrorInfo_errorInfo;
      errorStatus = _decode_ActionErrorInfo_errorStatus(sequence[0]);
      errorInfo = _decode_ActionErrorInfo_errorInfo(sequence[1]);
      return new ActionErrorInfo(errorStatus, errorInfo, sequence.slice(2));
    };
  }
  return _cached_decoder_for_ActionErrorInfo(el);
}


let _cached_encoder_for_ActionErrorInfo: $.ASN1Encoder<ActionErrorInfo> | null = null;


/**
 * @summary Encodes a(n) ActionErrorInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionErrorInfo, encoded as an ASN.1 Element.
 */
export function _encode_ActionErrorInfo(
  value: ActionErrorInfo,
  elGetter: $.ASN1Encoder<ActionErrorInfo>
): _Element {
  if (!_cached_encoder_for_ActionErrorInfo) {
    _cached_encoder_for_ActionErrorInfo = function (
      value: ActionErrorInfo    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ActionErrorInfo_errorStatus(
                value.errorStatus,
                $.BER
              ),
              /* REQUIRED   */ _encode_ActionErrorInfo_errorInfo(
                value.errorInfo,
                $.BER
              ),
            ],
            value._unrecognizedExtensionsList
              ? value._unrecognizedExtensionsList
              : []
          )
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ActionErrorInfo(value, elGetter);
}


/* eslint-enable */
