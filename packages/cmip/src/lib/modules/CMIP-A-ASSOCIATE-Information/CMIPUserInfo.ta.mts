/* eslint-disable */
import {
  OPTIONAL,
  EXTERNAL,
  TRUE_BIT,
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
  ProtocolVersion,
  ProtocolVersion_version1 /* IMPORTED_LONG_NAMED_BIT */,
  _decode_ProtocolVersion,
  _encode_ProtocolVersion,
} from '../CMIP-A-ASSOCIATE-Information/ProtocolVersion.ta.mjs';
import {
  FunctionalUnits,
  _decode_FunctionalUnits,
  _encode_FunctionalUnits,
} from '../CMIP-A-ASSOCIATE-Information/FunctionalUnits.ta.mjs';

/**
 * @summary CMIPUserInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPUserInfo ::= SEQUENCE {
 *   protocolVersion  [0] IMPLICIT ProtocolVersion DEFAULT {version1},
 *   functionalUnits  [1] IMPLICIT FunctionalUnits DEFAULT {},
 *   accessControl    [2]  EXTERNAL OPTIONAL,
 *   userInfo         [3]  EXTERNAL OPTIONAL
 * }
 * ```
 *
 */
export class CMIPUserInfo {
  constructor(
    /**
     * @summary `protocolVersion`.
     * @public
     * @readonly
     */
    readonly protocolVersion: OPTIONAL<ProtocolVersion>,
    /**
     * @summary `functionalUnits`.
     * @public
     * @readonly
     */
    readonly functionalUnits: OPTIONAL<FunctionalUnits>,
    /**
     * @summary `accessControl`.
     * @public
     * @readonly
     */
    readonly accessControl: OPTIONAL<EXTERNAL>,
    /**
     * @summary `userInfo`.
     * @public
     * @readonly
     */
    readonly userInfo: OPTIONAL<EXTERNAL>
  ) {}

  /**
   * @summary Restructures an object into a CMIPUserInfo
   * @description
   *
   * This takes an `object` and converts it to a `CMIPUserInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CMIPUserInfo`.
   * @returns {CMIPUserInfo}
   */
  public static _from_object(
    _o: { [_K in keyof CMIPUserInfo]: CMIPUserInfo[_K] }
  ): CMIPUserInfo {
    return new CMIPUserInfo(
      _o.protocolVersion,
      _o.functionalUnits,
      _o.accessControl,
      _o.userInfo
    );
  }

  /**
   * @summary Getter that returns the default value for `protocolVersion`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_protocolVersion(): ProtocolVersion {
    return (() => {
      const _ret = new Uint8ClampedArray(2);
      _ret[ProtocolVersion_version1] = TRUE_BIT;
      return _ret;
    })();
  }
  /**
   * @summary Getter that returns the default value for `functionalUnits`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_functionalUnits(): FunctionalUnits {
    return new Uint8ClampedArray([]);
  }
}


/**
 * @summary The Leading Root Component Types of CMIPUserInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CMIPUserInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'protocolVersion',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'functionalUnits',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'accessControl',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'userInfo',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of CMIPUserInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CMIPUserInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CMIPUserInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CMIPUserInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_CMIPUserInfo: $.ASN1Decoder<CMIPUserInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CMIPUserInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMIPUserInfo} The decoded data structure.
 */
export function _decode_CMIPUserInfo(el: _Element): CMIPUserInfo {
  if (!_cached_decoder_for_CMIPUserInfo) {
    _cached_decoder_for_CMIPUserInfo = function (el: _Element): CMIPUserInfo {
      let protocolVersion: OPTIONAL<ProtocolVersion> =
        CMIPUserInfo._default_value_for_protocolVersion;
      let functionalUnits: OPTIONAL<FunctionalUnits> =
        CMIPUserInfo._default_value_for_functionalUnits;
      let accessControl: OPTIONAL<EXTERNAL>;
      let userInfo: OPTIONAL<EXTERNAL>;
      const callbacks: $.DecodingMap = {
        protocolVersion: (_el: _Element): void => {
          protocolVersion = $._decode_implicit<ProtocolVersion>(
            () => _decode_ProtocolVersion
          )(_el);
        },
        functionalUnits: (_el: _Element): void => {
          functionalUnits = $._decode_implicit<FunctionalUnits>(
            () => _decode_FunctionalUnits
          )(_el);
        },
        accessControl: (_el: _Element): void => {
          accessControl = $._decode_explicit<EXTERNAL>(() => $._decodeExternal)(
            _el
          );
        },
        userInfo: (_el: _Element): void => {
          userInfo = $._decode_explicit<EXTERNAL>(() => $._decodeExternal)(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CMIPUserInfo,
        _extension_additions_list_spec_for_CMIPUserInfo,
        _root_component_type_list_2_spec_for_CMIPUserInfo,
        undefined
      );
      return new CMIPUserInfo (
        protocolVersion,
        functionalUnits,
        accessControl,
        userInfo
      );
    };
  }
  return _cached_decoder_for_CMIPUserInfo(el);
}


let _cached_encoder_for_CMIPUserInfo: $.ASN1Encoder<CMIPUserInfo> | null = null;


/**
 * @summary Encodes a(n) CMIPUserInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMIPUserInfo, encoded as an ASN.1 Element.
 */
export function _encode_CMIPUserInfo(
  value: CMIPUserInfo,
  elGetter: $.ASN1Encoder<CMIPUserInfo>
): _Element {
  if (!_cached_encoder_for_CMIPUserInfo) {
    _cached_encoder_for_CMIPUserInfo = function (
      value: CMIPUserInfo    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.protocolVersion === undefined ||
            $.deepEq(
              value.protocolVersion,
              CMIPUserInfo._default_value_for_protocolVersion
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_ProtocolVersion,
                  $.BER
                )(value.protocolVersion, $.BER),
            /* IF_DEFAULT */ value.functionalUnits === undefined ||
            $.deepEq(
              value.functionalUnits,
              CMIPUserInfo._default_value_for_functionalUnits
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  1,
                  () => _encode_FunctionalUnits,
                  $.BER
                )(value.functionalUnits, $.BER),
            /* IF_ABSENT  */ value.accessControl === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => $._encodeExternal,
                  $.BER
                )(value.accessControl, $.BER),
            /* IF_ABSENT  */ value.userInfo === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => $._encodeExternal,
                  $.BER
                )(value.userInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CMIPUserInfo(value, elGetter);
}


/* eslint-enable */
