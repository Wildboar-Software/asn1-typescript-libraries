/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
import { N3IWFIDNGAP, _decode_N3IWFIDNGAP, _encode_N3IWFIDNGAP } from "../TS33128Payloads/N3IWFIDNGAP.ta.mjs";
// export { N3IWFIDNGAP, _decode_N3IWFIDNGAP, _encode_N3IWFIDNGAP } from "../TS33128Payloads/N3IWFIDNGAP.ta.mjs";
import { IPAddr, _decode_IPAddr, _encode_IPAddr } from "../TS33128Payloads/IPAddr.ta.mjs";
// export { IPAddr, _decode_IPAddr, _encode_IPAddr } from "../TS33128Payloads/IPAddr.ta.mjs";
import { TNAPID, _decode_TNAPID, _encode_TNAPID } from "../TS33128Payloads/TNAPID.ta.mjs";
// export { TNAPID, _decode_TNAPID, _encode_TNAPID } from "../TS33128Payloads/TNAPID.ta.mjs";
import { TWAPID, _decode_TWAPID, _encode_TWAPID } from "../TS33128Payloads/TWAPID.ta.mjs";
// export { TWAPID, _decode_TWAPID, _encode_TWAPID } from "../TS33128Payloads/TWAPID.ta.mjs";
import { HFCNodeID, _decode_HFCNodeID, _encode_HFCNodeID } from "../TS33128Payloads/HFCNodeID.ta.mjs";
// export { HFCNodeID, _decode_HFCNodeID, _encode_HFCNodeID } from "../TS33128Payloads/HFCNodeID.ta.mjs";
import { GLI, _decode_GLI, _encode_GLI } from "../TS33128Payloads/GLI.ta.mjs";
// export { GLI, _decode_GLI, _encode_GLI } from "../TS33128Payloads/GLI.ta.mjs";
import { W5GBANLineType, _decode_W5GBANLineType, _encode_W5GBANLineType, _enum_for_W5GBANLineType } from "../TS33128Payloads/W5GBANLineType.ta.mjs";
// export { W5GBANLineType, _enum_for_W5GBANLineType, W5GBANLineType_dSL /* IMPORTED_LONG_ENUMERATION_ITEM */, dSL /* IMPORTED_SHORT_ENUMERATION_ITEM */, W5GBANLineType_pON /* IMPORTED_LONG_ENUMERATION_ITEM */, pON /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_W5GBANLineType, _encode_W5GBANLineType } from "../TS33128Payloads/W5GBANLineType.ta.mjs";
import { GCI, _decode_GCI, _encode_GCI } from "../TS33128Payloads/GCI.ta.mjs";
// export { GCI, _decode_GCI, _encode_GCI } from "../TS33128Payloads/GCI.ta.mjs";
import { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
// export { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { TransportProtocol, _decode_TransportProtocol, _encode_TransportProtocol, _enum_for_TransportProtocol } from "../TS33128Payloads/TransportProtocol.ta.mjs";
// export { TransportProtocol, _enum_for_TransportProtocol, TransportProtocol_uDP /* IMPORTED_LONG_ENUMERATION_ITEM */, uDP /* IMPORTED_SHORT_ENUMERATION_ITEM */, TransportProtocol_tCP /* IMPORTED_LONG_ENUMERATION_ITEM */, tCP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TransportProtocol, _encode_TransportProtocol } from "../TS33128Payloads/TransportProtocol.ta.mjs";


/**
 * @summary N3GALocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3GALocation ::= SEQUENCE
 * {
 *     tAI                         [1] TAI OPTIONAL,
 *     n3IWFID                     [2] N3IWFIDNGAP OPTIONAL,
 *     uEIPAddr                    [3] IPAddr OPTIONAL,
 *     portNumber                  [4] INTEGER OPTIONAL,
 *     tNAPID                      [5] TNAPID OPTIONAL,
 *     tWAPID                      [6] TWAPID OPTIONAL,
 *     hFCNodeID                   [7] HFCNodeID OPTIONAL,
 *     gLI                         [8] GLI OPTIONAL,
 *     w5GBANLineType              [9] W5GBANLineType OPTIONAL,
 *     gCI                         [10] GCI OPTIONAL,
 *     ageOfLocationInfo           [11] AgeOfLocation OPTIONAL,
 *     uELocationTimestamp         [12] Timestamp OPTIONAL,
 *     protocol                    [13] TransportProtocol OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class N3GALocation {
    constructor (
        /**
         * @summary `tAI`.
         * @public
         * @readonly
         */
        readonly tAI: OPTIONAL<TAI>,
        /**
         * @summary `n3IWFID`.
         * @public
         * @readonly
         */
        readonly n3IWFID: OPTIONAL<N3IWFIDNGAP>,
        /**
         * @summary `uEIPAddr`.
         * @public
         * @readonly
         */
        readonly uEIPAddr: OPTIONAL<IPAddr>,
        /**
         * @summary `portNumber`.
         * @public
         * @readonly
         */
        readonly portNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `tNAPID`.
         * @public
         * @readonly
         */
        readonly tNAPID: OPTIONAL<TNAPID>,
        /**
         * @summary `tWAPID`.
         * @public
         * @readonly
         */
        readonly tWAPID: OPTIONAL<TWAPID>,
        /**
         * @summary `hFCNodeID`.
         * @public
         * @readonly
         */
        readonly hFCNodeID: OPTIONAL<HFCNodeID>,
        /**
         * @summary `gLI`.
         * @public
         * @readonly
         */
        readonly gLI: OPTIONAL<GLI>,
        /**
         * @summary `w5GBANLineType`.
         * @public
         * @readonly
         */
        readonly w5GBANLineType: OPTIONAL<W5GBANLineType>,
        /**
         * @summary `gCI`.
         * @public
         * @readonly
         */
        readonly gCI: OPTIONAL<GCI>,
        /**
         * @summary `ageOfLocationInfo`.
         * @public
         * @readonly
         */
        readonly ageOfLocationInfo: OPTIONAL<AgeOfLocation>,
        /**
         * @summary `uELocationTimestamp`.
         * @public
         * @readonly
         */
        readonly uELocationTimestamp: OPTIONAL<Timestamp>,
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OPTIONAL<TransportProtocol>
    ) {}

    /**
     * @summary Restructures an object into a N3GALocation
     * @description
     * 
     * This takes an `object` and converts it to a `N3GALocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `N3GALocation`.
     * @returns {N3GALocation}
     */
    public static _from_object (_o: { [_K in keyof (N3GALocation)]: (N3GALocation)[_K] }): N3GALocation {
        return new N3GALocation(_o.tAI, _o.n3IWFID, _o.uEIPAddr, _o.portNumber, _o.tNAPID, _o.tWAPID, _o.hFCNodeID, _o.gLI, _o.w5GBANLineType, _o.gCI, _o.ageOfLocationInfo, _o.uELocationTimestamp, _o.protocol);
    }

        /**
         * @summary The enum used as the type of the component `w5GBANLineType`
         * @public
         * @static
         */

    public static _enum_for_w5GBANLineType = _enum_for_W5GBANLineType;        /**
         * @summary The enum used as the type of the component `protocol`
         * @public
         * @static
         */

    public static _enum_for_protocol = _enum_for_TransportProtocol;
}

/**
 * @summary The Leading Root Component Types of N3GALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_N3GALocation: $.ComponentSpec[] = [
    new $.ComponentSpec("tAI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("n3IWFID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uEIPAddr", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("portNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("tNAPID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("tWAPID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("hFCNodeID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("gLI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("w5GBANLineType", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("gCI", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("ageOfLocationInfo", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("protocol", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of N3GALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_N3GALocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of N3GALocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_N3GALocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_N3GALocation: $.ASN1Decoder<N3GALocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) N3GALocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_N3GALocation (el: _Element): N3GALocation {
    if (!_cached_decoder_for_N3GALocation) { _cached_decoder_for_N3GALocation = function (el: _Element): N3GALocation {
    let tAI: OPTIONAL<TAI>;
    let n3IWFID: OPTIONAL<N3IWFIDNGAP>;
    let uEIPAddr: OPTIONAL<IPAddr>;
    let portNumber: OPTIONAL<INTEGER>;
    let tNAPID: OPTIONAL<TNAPID>;
    let tWAPID: OPTIONAL<TWAPID>;
    let hFCNodeID: OPTIONAL<HFCNodeID>;
    let gLI: OPTIONAL<GLI>;
    let w5GBANLineType: OPTIONAL<W5GBANLineType>;
    let gCI: OPTIONAL<GCI>;
    let ageOfLocationInfo: OPTIONAL<AgeOfLocation>;
    let uELocationTimestamp: OPTIONAL<Timestamp>;
    let protocol: OPTIONAL<TransportProtocol>;
    const callbacks: $.DecodingMap = {
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<TAI>(() => _decode_TAI)(_el); },
        "n3IWFID": (_el: _Element): void => { n3IWFID = $._decode_implicit<N3IWFIDNGAP>(() => _decode_N3IWFIDNGAP)(_el); },
        "uEIPAddr": (_el: _Element): void => { uEIPAddr = $._decode_implicit<IPAddr>(() => _decode_IPAddr)(_el); },
        "portNumber": (_el: _Element): void => { portNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "tNAPID": (_el: _Element): void => { tNAPID = $._decode_implicit<TNAPID>(() => _decode_TNAPID)(_el); },
        "tWAPID": (_el: _Element): void => { tWAPID = $._decode_implicit<TWAPID>(() => _decode_TWAPID)(_el); },
        "hFCNodeID": (_el: _Element): void => { hFCNodeID = $._decode_implicit<HFCNodeID>(() => _decode_HFCNodeID)(_el); },
        "gLI": (_el: _Element): void => { gLI = $._decode_implicit<GLI>(() => _decode_GLI)(_el); },
        "w5GBANLineType": (_el: _Element): void => { w5GBANLineType = $._decode_implicit<W5GBANLineType>(() => _decode_W5GBANLineType)(_el); },
        "gCI": (_el: _Element): void => { gCI = $._decode_implicit<GCI>(() => _decode_GCI)(_el); },
        "ageOfLocationInfo": (_el: _Element): void => { ageOfLocationInfo = $._decode_implicit<AgeOfLocation>(() => _decode_AgeOfLocation)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "protocol": (_el: _Element): void => { protocol = $._decode_implicit<TransportProtocol>(() => _decode_TransportProtocol)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_N3GALocation,
        _extension_additions_list_spec_for_N3GALocation,
        _root_component_type_list_2_spec_for_N3GALocation,
        undefined,
    );
    return new N3GALocation(
        tAI,
        n3IWFID,
        uEIPAddr,
        portNumber,
        tNAPID,
        tWAPID,
        hFCNodeID,
        gLI,
        w5GBANLineType,
        gCI,
        ageOfLocationInfo,
        uELocationTimestamp,
        protocol
    );
}; }
    return _cached_decoder_for_N3GALocation(el);
}

let _cached_encoder_for_N3GALocation: $.ASN1Encoder<N3GALocation> | null = null;

/**
 * @summary Encodes a(n) N3GALocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The N3GALocation, encoded as an ASN.1 Element.
 */
export
function _encode_N3GALocation (value: N3GALocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_N3GALocation) { _cached_encoder_for_N3GALocation = function (value: N3GALocation, elGetter: $.ASN1Encoder<N3GALocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.tAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TAI, $.BER)(value.tAI, $.BER)),
            /* IF_ABSENT  */ ((value.n3IWFID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_N3IWFIDNGAP, $.BER)(value.n3IWFID, $.BER)),
            /* IF_ABSENT  */ ((value.uEIPAddr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IPAddr, $.BER)(value.uEIPAddr, $.BER)),
            /* IF_ABSENT  */ ((value.portNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.portNumber, $.BER)),
            /* IF_ABSENT  */ ((value.tNAPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TNAPID, $.BER)(value.tNAPID, $.BER)),
            /* IF_ABSENT  */ ((value.tWAPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TWAPID, $.BER)(value.tWAPID, $.BER)),
            /* IF_ABSENT  */ ((value.hFCNodeID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_HFCNodeID, $.BER)(value.hFCNodeID, $.BER)),
            /* IF_ABSENT  */ ((value.gLI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_GLI, $.BER)(value.gLI, $.BER)),
            /* IF_ABSENT  */ ((value.w5GBANLineType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_W5GBANLineType, $.BER)(value.w5GBANLineType, $.BER)),
            /* IF_ABSENT  */ ((value.gCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_GCI, $.BER)(value.gCI, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_AgeOfLocation, $.BER)(value.ageOfLocationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.uELocationTimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Timestamp, $.BER)(value.uELocationTimestamp, $.BER)),
            /* IF_ABSENT  */ ((value.protocol === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_TransportProtocol, $.BER)(value.protocol, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_N3GALocation(value, elGetter);
}


/* eslint-enable */
