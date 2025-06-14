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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
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
/* START_OF_SYMBOL_DEFINITION Discovery */
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
 * @class
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
  public static get _default_value_for_masterEndPort() {
    return 4376;
  }
}
/* END_OF_SYMBOL_DEFINITION Discovery */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Discovery */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'masterEndpointAddress',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'masterEndPort',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Discovery */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Discovery */
/**
 * @summary The Trailing Root Component Types of Discovery
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Discovery: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Discovery */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Discovery */
/**
 * @summary The Extension Addition Component Types of Discovery
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Discovery: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Discovery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Discovery */
let _cached_decoder_for_Discovery: $.ASN1Decoder<Discovery> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Discovery */

/* START_OF_SYMBOL_DEFINITION _decode_Discovery */
/**
 * @summary Decodes an ASN.1 element into a(n) Discovery
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Discovery} The decoded data structure.
 */
export function _decode_Discovery(el: _Element) {
  if (!_cached_decoder_for_Discovery) {
    _cached_decoder_for_Discovery = function (el: _Element): Discovery {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let protocolVersion!: ProtocolVersion;
      let masterEndpointAddress!: IPAddress;
      let masterEndPort: OPTIONAL<Port> =
        Discovery._default_value_for_masterEndPort;
      let _unrecognizedExtensionsList: _Element[] = [];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
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
      return new Discovery /* SEQUENCE_CONSTRUCTOR_CALL */(
        protocolVersion,
        masterEndpointAddress,
        masterEndPort,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_Discovery(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Discovery */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Discovery */
let _cached_encoder_for_Discovery: $.ASN1Encoder<Discovery> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Discovery */

/* START_OF_SYMBOL_DEFINITION _encode_Discovery */
/**
 * @summary Encodes a(n) Discovery into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Discovery, encoded as an ASN.1 Element.
 */
export function _encode_Discovery(
  value: Discovery,
  elGetter: $.ASN1Encoder<Discovery>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_Discovery */

/* eslint-enable */
