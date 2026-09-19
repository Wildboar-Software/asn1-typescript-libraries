/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFEventType, _decode_AMFEventType, _encode_AMFEventType, _enum_for_AMFEventType } from "../TS33128Payloads/AMFEventType.ta.mjs";
// export { AMFEventType, _enum_for_AMFEventType, AMFEventType_locationReport /* IMPORTED_LONG_ENUMERATION_ITEM */, locationReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFEventType_presenceInAOIReport /* IMPORTED_LONG_ENUMERATION_ITEM */, presenceInAOIReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFEventType, _encode_AMFEventType } from "../TS33128Payloads/AMFEventType.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { AMFEventArea, _decode_AMFEventArea, _encode_AMFEventArea } from "../TS33128Payloads/AMFEventArea.ta.mjs";
// export { AMFEventArea, _decode_AMFEventArea, _encode_AMFEventArea } from "../TS33128Payloads/AMFEventArea.ta.mjs";
import { TimeZone, _decode_TimeZone, _encode_TimeZone } from "../TS33128Payloads/TimeZone.ta.mjs";
// export { TimeZone, _decode_TimeZone, _encode_TimeZone } from "../TS33128Payloads/TimeZone.ta.mjs";
import { AccessType, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RMInfo, _decode_RMInfo, _encode_RMInfo } from "../TS33128Payloads/RMInfo.ta.mjs";
// export { RMInfo, _decode_RMInfo, _encode_RMInfo } from "../TS33128Payloads/RMInfo.ta.mjs";
import { CMInfo, _decode_CMInfo, _encode_CMInfo } from "../TS33128Payloads/CMInfo.ta.mjs";
// export { CMInfo, _decode_CMInfo, _encode_CMInfo } from "../TS33128Payloads/CMInfo.ta.mjs";
import { UEReachability, _decode_UEReachability, _encode_UEReachability, _enum_for_UEReachability } from "../TS33128Payloads/UEReachability.ta.mjs";
// export { UEReachability, _enum_for_UEReachability, UEReachability_unreachable /* IMPORTED_LONG_ENUMERATION_ITEM */, unreachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, UEReachability_reachable /* IMPORTED_LONG_ENUMERATION_ITEM */, reachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, UEReachability_regulatoryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, regulatoryOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UEReachability, _encode_UEReachability } from "../TS33128Payloads/UEReachability.ta.mjs";
import { UserLocation, _decode_UserLocation, _encode_UserLocation } from "../TS33128Payloads/UserLocation.ta.mjs";
// export { UserLocation, _decode_UserLocation, _encode_UserLocation } from "../TS33128Payloads/UserLocation.ta.mjs";
import { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";
// export { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";


/**
 * @summary LocationPresenceReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationPresenceReport ::= SEQUENCE
 * {
 *     type                        [1] AMFEventType,
 *     timestamp                   [2] Timestamp,
 *     areaList                    [3] SET OF AMFEventArea OPTIONAL,
 *     timeZone                    [4] TimeZone OPTIONAL,
 *     accessTypes                 [5] SET OF AccessType OPTIONAL,
 *     rMInfoList                  [6] SET OF RMInfo OPTIONAL,
 *     cMInfoList                  [7] SET OF CMInfo OPTIONAL,
 *     reachability                [8] UEReachability OPTIONAL,
 *     location                    [9] UserLocation OPTIONAL,
 *     additionalCellIDs           [10] SEQUENCE OF CellInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LocationPresenceReport {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AMFEventType,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: Timestamp,
        /**
         * @summary `areaList`.
         * @public
         * @readonly
         */
        readonly areaList: OPTIONAL<AMFEventArea[]>,
        /**
         * @summary `timeZone`.
         * @public
         * @readonly
         */
        readonly timeZone: OPTIONAL<TimeZone>,
        /**
         * @summary `accessTypes`.
         * @public
         * @readonly
         */
        readonly accessTypes: OPTIONAL<AccessType[]>,
        /**
         * @summary `rMInfoList`.
         * @public
         * @readonly
         */
        readonly rMInfoList: OPTIONAL<RMInfo[]>,
        /**
         * @summary `cMInfoList`.
         * @public
         * @readonly
         */
        readonly cMInfoList: OPTIONAL<CMInfo[]>,
        /**
         * @summary `reachability`.
         * @public
         * @readonly
         */
        readonly reachability: OPTIONAL<UEReachability>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<UserLocation>,
        /**
         * @summary `additionalCellIDs`.
         * @public
         * @readonly
         */
        readonly additionalCellIDs: OPTIONAL<CellInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a LocationPresenceReport
     * @description
     * 
     * This takes an `object` and converts it to a `LocationPresenceReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationPresenceReport`.
     * @returns {LocationPresenceReport}
     */
    public static _from_object (_o: { [_K in keyof (LocationPresenceReport)]: (LocationPresenceReport)[_K] }): LocationPresenceReport {
        return new LocationPresenceReport(_o.type_, _o.timestamp, _o.areaList, _o.timeZone, _o.accessTypes, _o.rMInfoList, _o.cMInfoList, _o.reachability, _o.location, _o.additionalCellIDs);
    }

        /**
         * @summary The enum used as the type of the component `type_`
         * @public
         * @static
         */

    public static _enum_for_type_ = _enum_for_AMFEventType;        /**
         * @summary The enum used as the type of the component `reachability`
         * @public
         * @static
         */

    public static _enum_for_reachability = _enum_for_UEReachability;
}

/**
 * @summary The Leading Root Component Types of LocationPresenceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationPresenceReport: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("areaList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeZone", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("accessTypes", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rMInfoList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cMInfoList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("reachability", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("additionalCellIDs", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of LocationPresenceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationPresenceReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationPresenceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationPresenceReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationPresenceReport: $.ASN1Decoder<LocationPresenceReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationPresenceReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationPresenceReport (el: _Element): LocationPresenceReport {
    if (!_cached_decoder_for_LocationPresenceReport) { _cached_decoder_for_LocationPresenceReport = function (el: _Element): LocationPresenceReport {
    let type_!: AMFEventType;
    let timestamp!: Timestamp;
    let areaList: OPTIONAL<AMFEventArea[]>;
    let timeZone: OPTIONAL<TimeZone>;
    let accessTypes: OPTIONAL<AccessType[]>;
    let rMInfoList: OPTIONAL<RMInfo[]>;
    let cMInfoList: OPTIONAL<CMInfo[]>;
    let reachability: OPTIONAL<UEReachability>;
    let location: OPTIONAL<UserLocation>;
    let additionalCellIDs: OPTIONAL<CellInformation[]>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<AMFEventType>(() => _decode_AMFEventType)(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "areaList": (_el: _Element): void => { areaList = $._decode_implicit<AMFEventArea[]>(() => $._decodeSetOf<AMFEventArea>(() => _decode_AMFEventArea))(_el); },
        "timeZone": (_el: _Element): void => { timeZone = $._decode_implicit<TimeZone>(() => _decode_TimeZone)(_el); },
        "accessTypes": (_el: _Element): void => { accessTypes = $._decode_implicit<AccessType[]>(() => $._decodeSetOf<AccessType>(() => _decode_AccessType))(_el); },
        "rMInfoList": (_el: _Element): void => { rMInfoList = $._decode_implicit<RMInfo[]>(() => $._decodeSetOf<RMInfo>(() => _decode_RMInfo))(_el); },
        "cMInfoList": (_el: _Element): void => { cMInfoList = $._decode_implicit<CMInfo[]>(() => $._decodeSetOf<CMInfo>(() => _decode_CMInfo))(_el); },
        "reachability": (_el: _Element): void => { reachability = $._decode_implicit<UEReachability>(() => _decode_UEReachability)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<UserLocation>(() => _decode_UserLocation)(_el); },
        "additionalCellIDs": (_el: _Element): void => { additionalCellIDs = $._decode_implicit<CellInformation[]>(() => $._decodeSequenceOf<CellInformation>(() => _decode_CellInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationPresenceReport,
        _extension_additions_list_spec_for_LocationPresenceReport,
        _root_component_type_list_2_spec_for_LocationPresenceReport,
        undefined,
    );
    return new LocationPresenceReport(
        type_,
        timestamp,
        areaList,
        timeZone,
        accessTypes,
        rMInfoList,
        cMInfoList,
        reachability,
        location,
        additionalCellIDs
    );
}; }
    return _cached_decoder_for_LocationPresenceReport(el);
}

let _cached_encoder_for_LocationPresenceReport: $.ASN1Encoder<LocationPresenceReport> | null = null;

/**
 * @summary Encodes a(n) LocationPresenceReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationPresenceReport, encoded as an ASN.1 Element.
 */
export
function _encode_LocationPresenceReport (value: LocationPresenceReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationPresenceReport) { _cached_encoder_for_LocationPresenceReport = function (value: LocationPresenceReport, elGetter: $.ASN1Encoder<LocationPresenceReport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFEventType, $.BER)(value.type_, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Timestamp, $.BER)(value.timestamp, $.BER),
            /* IF_ABSENT  */ ((value.areaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<AMFEventArea>(() => _encode_AMFEventArea, $.BER), $.BER)(value.areaList, $.BER)),
            /* IF_ABSENT  */ ((value.timeZone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TimeZone, $.BER)(value.timeZone, $.BER)),
            /* IF_ABSENT  */ ((value.accessTypes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<AccessType>(() => _encode_AccessType, $.BER), $.BER)(value.accessTypes, $.BER)),
            /* IF_ABSENT  */ ((value.rMInfoList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSetOf<RMInfo>(() => _encode_RMInfo, $.BER), $.BER)(value.rMInfoList, $.BER)),
            /* IF_ABSENT  */ ((value.cMInfoList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<CMInfo>(() => _encode_CMInfo, $.BER), $.BER)(value.cMInfoList, $.BER)),
            /* IF_ABSENT  */ ((value.reachability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_UEReachability, $.BER)(value.reachability, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_UserLocation, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.additionalCellIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<CellInformation>(() => _encode_CellInformation, $.BER), $.BER)(value.additionalCellIDs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationPresenceReport(value, elGetter);
}


/* eslint-enable */
