/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
import { TPDU_direction, _decode_TPDU_direction, _encode_TPDU_direction, _enum_for_TPDU_direction } from "../IWLANUmtsHI2Operations/TPDU-direction.ta.mjs";
// export { TPDU_direction, _enum_for_TPDU_direction, TPDU_direction_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_to_target /* IMPORTED_LONG_ENUMERATION_ITEM */, to_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TPDU_direction, _encode_TPDU_direction } from "../IWLANUmtsHI2Operations/TPDU-direction.ta.mjs";


/**
 * @summary PacketDataHeaderMapped
 * @description
 * 
 * Mapped header of one packet, used when individual header fields are reported
 * instead of a header copy.
 * 
 * 3GPP TS 33.108, table 8.9 and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketDataHeaderMapped ::= SEQUENCE
 * {
 *     sourceIPAddress            [1] IPAddress    type OPTIONAL,
 *     sourcePortNumber        [2] INTEGER (0..65535) OPTIONAL,    
 *     destinationIPAddress    [3] IPAddress    type OPTIONAL,
 *     destinationPortNumber    [4] INTEGER (0..65535) OPTIONAL,
 *     transportProtocol        [5] INTEGER  OPTIONAL,
 *     -- For IPv4, report the "Protocol" field and for IPv6 report "Next Header" field.
 *     -- Assigned Internet Protocol Numbers can be found at
 *     -- http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xml
 *     packetsize                [6] INTEGER OPTIONAL,
 *     flowLabel                [7] INTEGER OPTIONAL,
 *     packetCount                [8] INTEGER OPTIONAL,
 *     direction                [9] TPDU-direction,
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class PacketDataHeaderMapped {
    /**
     * @summary `sourceIPAddress`.
     * @description
     * 
     * Source IP address of the packet. Conditional when header fields are
     * mapped (table 8.9).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.9.
     * @public
     * @readonly
     */
    readonly sourceIPAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `sourcePortNumber`.
     * @description
     * 
     * Source port of the packet. Conditional when header fields are mapped and
     * the transport protocol supports port numbers (table 8.9).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.9.
     * @public
     * @readonly
     */
    readonly sourcePortNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `destinationIPAddress`.
     * @description
     * 
     * Destination IP address of the packet. Conditional when header fields are
     * mapped (table 8.9).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.9.
     * @public
     * @readonly
     */
    readonly destinationIPAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `destinationPortNumber`.
     * @description
     * 
     * Destination port of the packet. Conditional when header fields are mapped
     * and the transport protocol supports port numbers (table 8.9).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.9.
     * @public
     * @readonly
     */
    readonly destinationPortNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `transportProtocol`.
     * @description
     * 
     * Transport protocol of the packet. For IPv4 report the Protocol field; for
     * IPv6 report the Next Header field. Conditional when header fields are
     * mapped (table 8.9).
     * 
     * Assigned Internet Protocol Numbers are listed at
     * http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xml
     * 
     * 3GPP TS 33.108, table 8.2, table 8.9, and annex B.7.
     * @public
     * @readonly
     */
    readonly transportProtocol: OPTIONAL<INTEGER>;
    /**
     * @summary `packetsize`.
     * @description
     * 
     * Size of the packet: Total Length in IPv4, or Payload Length in IPv6.
     * Optional when header fields are mapped (table 8.9). Table 8.2 names this
     * packet size.
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.9.
     * @public
     * @readonly
     */
    readonly packetsize: OPTIONAL<INTEGER>;
    /**
     * @summary `flowLabel`.
     * @description
     * 
     * IPv6 flow label, the header field a source uses to label packets of a
     * flow (RFC 3697). Conditional, and only for IPv6, when header fields are
     * mapped (table 8.9).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.9.
     * @public
     * @readonly
     */
    readonly flowLabel: OPTIONAL<INTEGER>;
    /**
     * @summary `packetCount`.
     * @description
     * 
     * Table 8.9 does not list a packet count for the mapped per-packet header.
     * Table 8.2 defines packet count as the number of packets detected in a
     * summary report. TS 33.108 does not further define this component of the
     * mapped header.
     * @public
     * @readonly
     */
    readonly packetCount: OPTIONAL<INTEGER>;
    /**
     * @summary `direction`.
     * @description
     * 
     * Direction of the packet, from the target or to the target. Mandatory when
     * header fields are mapped (table 8.9). Table 8.2 names this
     * packetDirection.
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.9.
     * @public
     * @readonly
     */
    readonly direction: TPDU_direction;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sourceIPAddress: OPTIONAL<IPAddress>,
        sourcePortNumber: OPTIONAL<INTEGER>,
        destinationIPAddress: OPTIONAL<IPAddress>,
        destinationPortNumber: OPTIONAL<INTEGER>,
        transportProtocol: OPTIONAL<INTEGER>,
        packetsize: OPTIONAL<INTEGER>,
        flowLabel: OPTIONAL<INTEGER>,
        packetCount: OPTIONAL<INTEGER>,
        direction: TPDU_direction,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sourceIPAddress = sourceIPAddress;
        this.sourcePortNumber = sourcePortNumber;
        this.destinationIPAddress = destinationIPAddress;
        this.destinationPortNumber = destinationPortNumber;
        this.transportProtocol = transportProtocol;
        this.packetsize = packetsize;
        this.flowLabel = flowLabel;
        this.packetCount = packetCount;
        this.direction = direction;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PacketDataHeaderMapped
     * @description
     * 
     * This takes an `object` and converts it to a `PacketDataHeaderMapped`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketDataHeaderMapped`.
     * @returns {PacketDataHeaderMapped}
     */
    public static _from_object (_o: { [_K in keyof (PacketDataHeaderMapped)]: (PacketDataHeaderMapped)[_K] }): PacketDataHeaderMapped {
        return new PacketDataHeaderMapped(_o.sourceIPAddress, _o.sourcePortNumber, _o.destinationIPAddress, _o.destinationPortNumber, _o.transportProtocol, _o.packetsize, _o.flowLabel, _o.packetCount, _o.direction, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction: typeof _enum_for_TPDU_direction = _enum_for_TPDU_direction;
}

/**
 * @summary The Leading Root Component Types of PacketDataHeaderMapped
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketDataHeaderMapped: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceIPAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sourcePortNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("destinationIPAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationPortNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("transportProtocol", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("packetsize", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("flowLabel", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("packetCount", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of PacketDataHeaderMapped
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketDataHeaderMapped: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketDataHeaderMapped
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketDataHeaderMapped: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PacketDataHeaderMapped: $.ASN1Decoder<PacketDataHeaderMapped> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketDataHeaderMapped
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketDataHeaderMapped (el: _Element): PacketDataHeaderMapped {
    if (!_cached_decoder_for_PacketDataHeaderMapped) { _cached_decoder_for_PacketDataHeaderMapped = function (el: _Element): PacketDataHeaderMapped {
    let sourceIPAddress: OPTIONAL<IPAddress>;
    let sourcePortNumber: OPTIONAL<INTEGER>;
    let destinationIPAddress: OPTIONAL<IPAddress>;
    let destinationPortNumber: OPTIONAL<INTEGER>;
    let transportProtocol: OPTIONAL<INTEGER>;
    let packetsize: OPTIONAL<INTEGER>;
    let flowLabel: OPTIONAL<INTEGER>;
    let packetCount: OPTIONAL<INTEGER>;
    let direction!: TPDU_direction;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sourceIPAddress": (_el: _Element): void => { sourceIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "sourcePortNumber": (_el: _Element): void => {
            sourcePortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sourcePortNumber === "bigint" ? sourcePortNumber : BigInt(sourcePortNumber);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("PacketDataHeaderMapped.sourcePortNumber violates INTEGER range");
            }
        },
        "destinationIPAddress": (_el: _Element): void => { destinationIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "destinationPortNumber": (_el: _Element): void => {
            destinationPortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof destinationPortNumber === "bigint" ? destinationPortNumber : BigInt(destinationPortNumber);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("PacketDataHeaderMapped.destinationPortNumber violates INTEGER range");
            }
        },
        "transportProtocol": (_el: _Element): void => { transportProtocol = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "packetsize": (_el: _Element): void => { packetsize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "flowLabel": (_el: _Element): void => { flowLabel = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "packetCount": (_el: _Element): void => { packetCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<TPDU_direction>(() => _decode_TPDU_direction)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PacketDataHeaderMapped,
        _extension_additions_list_spec_for_PacketDataHeaderMapped,
        _root_component_type_list_2_spec_for_PacketDataHeaderMapped,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PacketDataHeaderMapped(
        sourceIPAddress,
        sourcePortNumber,
        destinationIPAddress,
        destinationPortNumber,
        transportProtocol,
        packetsize,
        flowLabel,
        packetCount,
        direction,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PacketDataHeaderMapped(el);
}

let _cached_encoder_for_PacketDataHeaderMapped: $.ASN1Encoder<PacketDataHeaderMapped> | null = null;

/**
 * @summary Encodes a(n) PacketDataHeaderMapped into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketDataHeaderMapped, encoded as an ASN.1 Element.
 */
export
function _encode_PacketDataHeaderMapped (value: PacketDataHeaderMapped, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketDataHeaderMapped) { _cached_encoder_for_PacketDataHeaderMapped = function (value: PacketDataHeaderMapped, elGetter: $.ASN1Encoder<PacketDataHeaderMapped>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sourceIPAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.sourceIPAddress, $.BER);
    }
    if (value.sourcePortNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.sourcePortNumber, $.BER);
    }
    if (value.destinationIPAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPAddress, $.BER)(value.destinationIPAddress, $.BER);
    }
    if (value.destinationPortNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.destinationPortNumber, $.BER);
    }
    if (value.transportProtocol !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.transportProtocol, $.BER);
    }
    if (value.packetsize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.packetsize, $.BER);
    }
    if (value.flowLabel !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.flowLabel, $.BER);
    }
    if (value.packetCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.packetCount, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_TPDU_direction, $.BER)(value.direction, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PacketDataHeaderMapped(value, elGetter);
}


/* eslint-enable */
