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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'slaveEndpointIPAddress',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'slaveEndpointMACAddress',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'slaveEndpointName',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'bipMessagePort',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'securityProtocols',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of Announcement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Announcement: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Announcement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Announcement: $.ComponentSpec[] = [];


let _cached_decoder_for_Announcement: $.ASN1Decoder<Announcement> | null = null;


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


let _cached_encoder_for_Announcement: $.ASN1Encoder<Announcement> | null = null;


/**
 * @summary Encodes a(n) Announcement into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
