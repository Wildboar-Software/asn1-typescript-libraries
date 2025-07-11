/* eslint-disable */
import {
  OPTIONAL,
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
  _decode_ProtocolVersion,
  _encode_ProtocolVersion,
} from '../BIP-DISCOVERY/ProtocolVersion.ta.mjs';
import {
  IPAddress,
  _decode_IPAddress,
  _encode_IPAddress,
} from '../BIP-DISCOVERY/IPAddress.ta.mjs';
import { Port, _decode_Port, _encode_Port } from '../BIP-DISCOVERY/Port.ta.mjs';

/**
 * @summary Discovery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Discovery ::= SEQUENCE {
 *   protocolVersion        ProtocolVersion,
 *   masterEndpointAddress  IPAddress,
 *   masterEndPort          Port DEFAULT 4376,
 *   ...
 * }
 * ```
 *
 */
export class Discovery {
  constructor(
    /**
     * @summary `protocolVersion`.
     * @public
     * @readonly
     */
    readonly protocolVersion: ProtocolVersion,
    /**
     * @summary `masterEndpointAddress`.
     * @public
     * @readonly
     */
    readonly masterEndpointAddress: IPAddress,
    /**
     * @summary `masterEndPort`.
     * @public
     * @readonly
     */
    readonly masterEndPort: OPTIONAL<Port>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a Discovery
   * @description
   *
   * This takes an `object` and converts it to a `Discovery`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Discovery`.
   * @returns {Discovery}
   */
  public static _from_object(
    _o: { [_K in keyof Discovery]: Discovery[_K] }
  ): Discovery {
    return new Discovery(
      _o.protocolVersion,
      _o.masterEndpointAddress,
      _o.masterEndPort,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary Getter that returns the default value for `masterEndPort`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_masterEndPort(): Port {
    return 4376;
  }
}


/**
 * @summary The Leading Root Component Types of Discovery
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Discovery: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'protocolVersion',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'masterEndpointAddress',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'masterEndPort',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of Discovery
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Discovery: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Discovery
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Discovery: $.ComponentSpec[] = [];


let _cached_decoder_for_Discovery: $.ASN1Decoder<Discovery> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Discovery
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Discovery} The decoded data structure.
 */
export function _decode_Discovery(el: _Element): Discovery {
  if (!_cached_decoder_for_Discovery) {
    _cached_decoder_for_Discovery = function (el: _Element): Discovery {
      let protocolVersion!: ProtocolVersion;
      let masterEndpointAddress!: IPAddress;
      let masterEndPort: OPTIONAL<Port> =
        Discovery._default_value_for_masterEndPort;
      let _unrecognizedExtensionsList: _Element[] = [];
      const callbacks: $.DecodingMap = {
        protocolVersion: (_el: _Element): void => {
          protocolVersion = _decode_ProtocolVersion(_el);
        },
        masterEndpointAddress: (_el: _Element): void => {
          masterEndpointAddress = _decode_IPAddress(_el);
        },
        masterEndPort: (_el: _Element): void => {
          masterEndPort = _decode_Port(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Discovery,
        _extension_additions_list_spec_for_Discovery,
        _root_component_type_list_2_spec_for_Discovery,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new Discovery (
        protocolVersion,
        masterEndpointAddress,
        masterEndPort,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_Discovery(el);
}


let _cached_encoder_for_Discovery: $.ASN1Encoder<Discovery> | null = null;


/**
 * @summary Encodes a(n) Discovery into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Discovery, encoded as an ASN.1 Element.
 */
export function _encode_Discovery(
  value: Discovery,
  elGetter: $.ASN1Encoder<Discovery>
): _Element {
  if (!_cached_encoder_for_Discovery) {
    _cached_encoder_for_Discovery = function (
      value: Discovery    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ProtocolVersion(
                value.protocolVersion,
                $.BER
              ),
              /* REQUIRED   */ _encode_IPAddress(
                value.masterEndpointAddress,
                $.BER
              ),
              /* IF_DEFAULT */ value.masterEndPort === undefined ||
              $.deepEq(
                value.masterEndPort,
                Discovery._default_value_for_masterEndPort
              )
                ? undefined
                : _encode_Port(value.masterEndPort, $.BER),
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
  return _cached_encoder_for_Discovery(value, elGetter);
}


/* eslint-enable */
