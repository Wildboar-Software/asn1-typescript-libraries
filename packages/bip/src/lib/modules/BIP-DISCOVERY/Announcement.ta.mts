/* eslint-disable */
import {
  OPTIONAL,
  IA5String,
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
import {
  MACAddress,
  _decode_MACAddress,
  _encode_MACAddress,
} from '../BIP-DISCOVERY/MACAddress.ta.mjs';
import { Port, _decode_Port, _encode_Port } from '../BIP-DISCOVERY/Port.ta.mjs';
import {
  SecurityProtocol,
  _decode_SecurityProtocol,
  _encode_SecurityProtocol,
} from '../BIP-DISCOVERY/SecurityProtocol.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Announcement */
/**
 * @summary Announcement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Announcement ::= SEQUENCE {
 *   protocolVersion          ProtocolVersion,
 *   slaveEndpointIPAddress   IPAddress,
 *   slaveEndpointMACAddress  MACAddress,
 *   slaveEndpointName        IA5String(SIZE (1..32)),
 *   bipMessagePort           Port DEFAULT 4376,
 *   securityProtocols        SEQUENCE OF SecurityProtocol OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class Announcement {
  constructor(
    /**
     * @summary `protocolVersion`.
     * @public
     * @readonly
     */
    readonly protocolVersion: ProtocolVersion,
    /**
     * @summary `slaveEndpointIPAddress`.
     * @public
     * @readonly
     */
    readonly slaveEndpointIPAddress: IPAddress,
    /**
     * @summary `slaveEndpointMACAddress`.
     * @public
     * @readonly
     */
    readonly slaveEndpointMACAddress: MACAddress,
    /**
     * @summary `slaveEndpointName`.
     * @public
     * @readonly
     */
    readonly slaveEndpointName: IA5String,
    /**
     * @summary `bipMessagePort`.
     * @public
     * @readonly
     */
    readonly bipMessagePort: OPTIONAL<Port>,
    /**
     * @summary `securityProtocols`.
     * @public
     * @readonly
     */
    readonly securityProtocols: OPTIONAL<SecurityProtocol[]>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a Announcement
   * @description
   *
   * This takes an `object` and converts it to a `Announcement`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Announcement`.
   * @returns {Announcement}
   */
  public static _from_object(
    _o: { [_K in keyof Announcement]: Announcement[_K] }
  ): Announcement {
    return new Announcement(
      _o.protocolVersion,
      _o.slaveEndpointIPAddress,
      _o.slaveEndpointMACAddress,
      _o.slaveEndpointName,
      _o.bipMessagePort,
      _o.securityProtocols,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary Getter that returns the default value for `bipMessagePort`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_bipMessagePort() {
    return 4376;
  }
}
/* END_OF_SYMBOL_DEFINITION Announcement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Announcement */
/**
 * @summary The Leading Root Component Types of Announcement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Announcement: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'protocolVersion',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'slaveEndpointIPAddress',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'slaveEndpointMACAddress',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'slaveEndpointName',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bipMessagePort',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'securityProtocols',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Announcement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Announcement */
/**
 * @summary The Trailing Root Component Types of Announcement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Announcement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Announcement */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Announcement */
/**
 * @summary The Extension Addition Component Types of Announcement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Announcement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Announcement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Announcement */
let _cached_decoder_for_Announcement: $.ASN1Decoder<Announcement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Announcement */

/* START_OF_SYMBOL_DEFINITION _decode_Announcement */
/**
 * @summary Decodes an ASN.1 element into a(n) Announcement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Announcement} The decoded data structure.
 */
export function _decode_Announcement(el: _Element) {
  if (!_cached_decoder_for_Announcement) {
    _cached_decoder_for_Announcement = function (el: _Element): Announcement {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let protocolVersion!: ProtocolVersion;
      let slaveEndpointIPAddress!: IPAddress;
      let slaveEndpointMACAddress!: MACAddress;
      let slaveEndpointName!: IA5String;
      let bipMessagePort: OPTIONAL<Port> =
        Announcement._default_value_for_bipMessagePort;
      let securityProtocols: OPTIONAL<SecurityProtocol[]>;
      let _unrecognizedExtensionsList: _Element[] = [];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        protocolVersion: (_el: _Element): void => {
          protocolVersion = _decode_ProtocolVersion(_el);
        },
        slaveEndpointIPAddress: (_el: _Element): void => {
          slaveEndpointIPAddress = _decode_IPAddress(_el);
        },
        slaveEndpointMACAddress: (_el: _Element): void => {
          slaveEndpointMACAddress = _decode_MACAddress(_el);
        },
        slaveEndpointName: (_el: _Element): void => {
          slaveEndpointName = $._decodeIA5String(_el);
        },
        bipMessagePort: (_el: _Element): void => {
          bipMessagePort = _decode_Port(_el);
        },
        securityProtocols: (_el: _Element): void => {
          securityProtocols = $._decodeSequenceOf<SecurityProtocol>(
            () => _decode_SecurityProtocol
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Announcement,
        _extension_additions_list_spec_for_Announcement,
        _root_component_type_list_2_spec_for_Announcement,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new Announcement /* SEQUENCE_CONSTRUCTOR_CALL */(
        protocolVersion,
        slaveEndpointIPAddress,
        slaveEndpointMACAddress,
        slaveEndpointName,
        bipMessagePort,
        securityProtocols,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_Announcement(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Announcement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Announcement */
let _cached_encoder_for_Announcement: $.ASN1Encoder<Announcement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Announcement */

/* START_OF_SYMBOL_DEFINITION _encode_Announcement */
/**
 * @summary Encodes a(n) Announcement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Announcement, encoded as an ASN.1 Element.
 */
export function _encode_Announcement(
  value: Announcement,
  elGetter: $.ASN1Encoder<Announcement>
) {
  if (!_cached_encoder_for_Announcement) {
    _cached_encoder_for_Announcement = function (
      value: Announcement    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ProtocolVersion(
                value.protocolVersion,
                $.BER
              ),
              /* REQUIRED   */ _encode_IPAddress(
                value.slaveEndpointIPAddress,
                $.BER
              ),
              /* REQUIRED   */ _encode_MACAddress(
                value.slaveEndpointMACAddress,
                $.BER
              ),
              /* REQUIRED   */ $._encodeIA5String(
                value.slaveEndpointName,
                $.BER
              ),
              /* IF_DEFAULT */ value.bipMessagePort === undefined ||
              $.deepEq(
                value.bipMessagePort,
                Announcement._default_value_for_bipMessagePort
              )
                ? undefined
                : _encode_Port(value.bipMessagePort, $.BER),
              /* IF_ABSENT  */ value.securityProtocols === undefined
                ? undefined
                : $._encodeSequenceOf<SecurityProtocol>(
                    () => _encode_SecurityProtocol,
                    $.BER
                  )(value.securityProtocols, $.BER),
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
  return _cached_encoder_for_Announcement(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Announcement */

/* eslint-enable */
