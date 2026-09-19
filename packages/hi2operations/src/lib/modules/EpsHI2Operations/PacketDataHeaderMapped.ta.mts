/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
import { TPDU_direction, _decode_TPDU_direction, _encode_TPDU_direction, _enum_for_TPDU_direction } from "../EpsHI2Operations/TPDU-direction.ta.mjs";
// export { TPDU_direction, _enum_for_TPDU_direction, TPDU_direction_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_to_target /* IMPORTED_LONG_ENUMERATION_ITEM */, to_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TPDU_direction, _encode_TPDU_direction } from "../EpsHI2Operations/TPDU-direction.ta.mjs";


/**
 * @summary PacketDataHeaderMapped
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketDataHeaderMapped ::= SEQUENCE
 * {
 *  sourceIPAddress [1] IPAddress,
 *  sourcePortNumber [2] INTEGER (0..65535) OPTIONAL,
 *  destinationIPAddress [3] IPAddress,
 *  destinationPortNumber [4] INTEGER (0..65535) OPTIONAL,
 *  transportProtocol [5] INTEGER,
 *  -- For IPv4, report the "Protocol" field and for IPv6 report "Next Header" field.
 *  -- Assigned Internet Protocol Numbers can be found at
 *  -- http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xml
 *  packetsize [6] INTEGER OPTIONAL,
 *  flowLabel [7] INTEGER OPTIONAL,
 *  packetCount [8] INTEGER OPTIONAL,
 *  direction [9] TPDU-direction,
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class PacketDataHeaderMapped {
    constructor (
        /**
         * @summary `sourceIPAddress`.
         * @public
         * @readonly
         */
        readonly sourceIPAddress: IPAddress,
        /**
         * @summary `sourcePortNumber`.
         * @public
         * @readonly
         */
        readonly sourcePortNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `destinationIPAddress`.
         * @public
         * @readonly
         */
        readonly destinationIPAddress: IPAddress,
        /**
         * @summary `destinationPortNumber`.
         * @public
         * @readonly
         */
        readonly destinationPortNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `transportProtocol`.
         * @public
         * @readonly
         */
        readonly transportProtocol: INTEGER,
        /**
         * @summary `packetsize`.
         * @public
         * @readonly
         */
        readonly packetsize: OPTIONAL<INTEGER>,
        /**
         * @summary `flowLabel`.
         * @public
         * @readonly
         */
        readonly flowLabel: OPTIONAL<INTEGER>,
        /**
         * @summary `packetCount`.
         * @public
         * @readonly
         */
        readonly packetCount: OPTIONAL<INTEGER>,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: TPDU_direction,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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

    public static _enum_for_direction = _enum_for_TPDU_direction;
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
    new $.ComponentSpec("sourceIPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sourcePortNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("destinationIPAddress", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationPortNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("transportProtocol", false, $.hasTag(_TagClass.context, 5)),
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
    let sourceIPAddress!: IPAddress;
    let sourcePortNumber: OPTIONAL<INTEGER>;
    let destinationIPAddress!: IPAddress;
    let destinationPortNumber: OPTIONAL<INTEGER>;
    let transportProtocol!: INTEGER;
    let packetsize: OPTIONAL<INTEGER>;
    let flowLabel: OPTIONAL<INTEGER>;
    let packetCount: OPTIONAL<INTEGER>;
    let direction!: TPDU_direction;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sourceIPAddress": (_el: _Element): void => { sourceIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "sourcePortNumber": (_el: _Element): void => { sourcePortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "destinationIPAddress": (_el: _Element): void => { destinationIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "destinationPortNumber": (_el: _Element): void => { destinationPortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.sourceIPAddress, $.BER),
            /* IF_ABSENT  */ ((value.sourcePortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.sourcePortNumber, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPAddress, $.BER)(value.destinationIPAddress, $.BER),
            /* IF_ABSENT  */ ((value.destinationPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.destinationPortNumber, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.transportProtocol, $.BER),
            /* IF_ABSENT  */ ((value.packetsize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.packetsize, $.BER)),
            /* IF_ABSENT  */ ((value.flowLabel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.flowLabel, $.BER)),
            /* IF_ABSENT  */ ((value.packetCount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.packetCount, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_TPDU_direction, $.BER)(value.direction, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PacketDataHeaderMapped(value, elGetter);
}


/* eslint-enable */
