/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
// export { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { TraceRecordType, _enum_for_TraceRecordType, TraceRecordType_traceStart /* IMPORTED_LONG_ENUMERATION_ITEM */, traceStart /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_cellTrafficTrace /* IMPORTED_LONG_ENUMERATION_ITEM */, cellTrafficTrace /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDataDelivery /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDataDelivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceRecordType, _encode_TraceRecordType } from "../TS33128Payloads/TraceRecordType.ta.mjs";
// export { TraceRecordType, _enum_for_TraceRecordType, TraceRecordType_traceStart /* IMPORTED_LONG_ENUMERATION_ITEM */, traceStart /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_cellTrafficTrace /* IMPORTED_LONG_ENUMERATION_ITEM */, cellTrafficTrace /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDataDelivery /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDataDelivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceRecordType, _encode_TraceRecordType } from "../TS33128Payloads/TraceRecordType.ta.mjs";
import { TraceDirection, _enum_for_TraceDirection, TraceDirection_toAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, toAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, fromAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_toMME /* IMPORTED_LONG_ENUMERATION_ITEM */, toMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromMME /* IMPORTED_LONG_ENUMERATION_ITEM */, fromMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDirection, _encode_TraceDirection } from "../TS33128Payloads/TraceDirection.ta.mjs";
// export { TraceDirection, _enum_for_TraceDirection, TraceDirection_toAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, toAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, fromAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_toMME /* IMPORTED_LONG_ENUMERATION_ITEM */, toMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromMME /* IMPORTED_LONG_ENUMERATION_ITEM */, fromMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDirection, _encode_TraceDirection } from "../TS33128Payloads/TraceDirection.ta.mjs";
import { TraceActivationInfo, _decode_TraceActivationInfo, _encode_TraceActivationInfo } from "../TS33128Payloads/TraceActivationInfo.ta.mjs";
// export { TraceActivationInfo, _decode_TraceActivationInfo, _encode_TraceActivationInfo } from "../TS33128Payloads/TraceActivationInfo.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
import { TraceCollectionEntityInfo, _decode_TraceCollectionEntityInfo, _encode_TraceCollectionEntityInfo } from "../TS33128Payloads/TraceCollectionEntityInfo.ta.mjs";
// export { TraceCollectionEntityInfo, _decode_TraceCollectionEntityInfo, _encode_TraceCollectionEntityInfo } from "../TS33128Payloads/TraceCollectionEntityInfo.ta.mjs";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { TraceActivation, _decode_TraceActivation, _encode_TraceActivation } from "../TS33128Payloads/TraceActivation.ta.mjs";
// export { TraceActivation, _decode_TraceActivation, _encode_TraceActivation } from "../TS33128Payloads/TraceActivation.ta.mjs";


/**
 * @summary AMFRANTraceReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRANTraceReport ::= SEQUENCE
 * {
 *     userIdentifiers               [1] UserIdentifiers,
 *     aMFUENGAPID                   [2] AMFUENGAPID,
 *     rANUENGAPID                   [3] RANUENGAPID,
 *     traceRecordType               [4] TraceRecordType,
 *     traceDirection                [5] TraceDirection,
 *     -- deprecatedTraceActivationInfo was deprecated in r18(18) version6(6) and shall not be reused.
 *     deprecatedTraceActivationInfo [6] TraceActivationInfo OPTIONAL,
 *     nGRANCGI                      [7] NCGI,
 *     globalRANNodeID               [8] GlobalRANNodeID,
 *     traceCollectionEntityInfo     [9] TraceCollectionEntityInfo OPTIONAL,
 *     aMFTraceData                  [10] XMLType,
 *     location                      [11] Location OPTIONAL,
 *     traceActivation               [12] TraceActivation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFRANTraceReport {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `aMFUENGAPID`.
         * @public
         * @readonly
         */
        readonly aMFUENGAPID: AMFUENGAPID,
        /**
         * @summary `rANUENGAPID`.
         * @public
         * @readonly
         */
        readonly rANUENGAPID: RANUENGAPID,
        /**
         * @summary `traceRecordType`.
         * @public
         * @readonly
         */
        readonly traceRecordType: TraceRecordType,
        /**
         * @summary `traceDirection`.
         * @public
         * @readonly
         */
        readonly traceDirection: TraceDirection,
        /**
         * @summary `deprecatedTraceActivationInfo`.
         * @public
         * @readonly
         */
        readonly deprecatedTraceActivationInfo: OPTIONAL<TraceActivationInfo>,
        /**
         * @summary `nGRANCGI`.
         * @public
         * @readonly
         */
        readonly nGRANCGI: NCGI,
        /**
         * @summary `globalRANNodeID`.
         * @public
         * @readonly
         */
        readonly globalRANNodeID: GlobalRANNodeID,
        /**
         * @summary `traceCollectionEntityInfo`.
         * @public
         * @readonly
         */
        readonly traceCollectionEntityInfo: OPTIONAL<TraceCollectionEntityInfo>,
        /**
         * @summary `aMFTraceData`.
         * @public
         * @readonly
         */
        readonly aMFTraceData: XMLType,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `traceActivation`.
         * @public
         * @readonly
         */
        readonly traceActivation: OPTIONAL<TraceActivation>
    ) {}

    /**
     * @summary Restructures an object into a AMFRANTraceReport
     * @description
     * 
     * This takes an `object` and converts it to a `AMFRANTraceReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFRANTraceReport`.
     * @returns {AMFRANTraceReport}
     */
    public static _from_object (_o: { [_K in keyof (AMFRANTraceReport)]: (AMFRANTraceReport)[_K] }): AMFRANTraceReport {
        return new AMFRANTraceReport(_o.userIdentifiers, _o.aMFUENGAPID, _o.rANUENGAPID, _o.traceRecordType, _o.traceDirection, _o.deprecatedTraceActivationInfo, _o.nGRANCGI, _o.globalRANNodeID, _o.traceCollectionEntityInfo, _o.aMFTraceData, _o.location, _o.traceActivation);
    }

        /**
         * @summary The enum used as the type of the component `traceRecordType`
         * @public
         * @static
         */

    public static _enum_for_traceRecordType = _enum_for_TraceRecordType;        /**
         * @summary The enum used as the type of the component `traceDirection`
         * @public
         * @static
         */

    public static _enum_for_traceDirection = _enum_for_TraceDirection;
}

/**
 * @summary The Leading Root Component Types of AMFRANTraceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFRANTraceReport: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aMFUENGAPID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("traceRecordType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("traceDirection", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("deprecatedTraceActivationInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("nGRANCGI", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("globalRANNodeID", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("traceCollectionEntityInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("aMFTraceData", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("traceActivation", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of AMFRANTraceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFRANTraceReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFRANTraceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFRANTraceReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFRANTraceReport: $.ASN1Decoder<AMFRANTraceReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFRANTraceReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFRANTraceReport (el: _Element): AMFRANTraceReport {
    if (!_cached_decoder_for_AMFRANTraceReport) { _cached_decoder_for_AMFRANTraceReport = function (el: _Element): AMFRANTraceReport {
    let userIdentifiers!: UserIdentifiers;
    let aMFUENGAPID!: AMFUENGAPID;
    let rANUENGAPID!: RANUENGAPID;
    let traceRecordType!: TraceRecordType;
    let traceDirection!: TraceDirection;
    let deprecatedTraceActivationInfo: OPTIONAL<TraceActivationInfo>;
    let nGRANCGI!: NCGI;
    let globalRANNodeID!: GlobalRANNodeID;
    let traceCollectionEntityInfo: OPTIONAL<TraceCollectionEntityInfo>;
    let aMFTraceData!: XMLType;
    let location: OPTIONAL<Location>;
    let traceActivation: OPTIONAL<TraceActivation>;
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "aMFUENGAPID": (_el: _Element): void => { aMFUENGAPID = $._decode_implicit<AMFUENGAPID>(() => _decode_AMFUENGAPID)(_el); },
        "rANUENGAPID": (_el: _Element): void => { rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(_el); },
        "traceRecordType": (_el: _Element): void => { traceRecordType = $._decode_implicit<TraceRecordType>(() => _decode_TraceRecordType)(_el); },
        "traceDirection": (_el: _Element): void => { traceDirection = $._decode_implicit<TraceDirection>(() => _decode_TraceDirection)(_el); },
        "deprecatedTraceActivationInfo": (_el: _Element): void => { deprecatedTraceActivationInfo = $._decode_implicit<TraceActivationInfo>(() => _decode_TraceActivationInfo)(_el); },
        "nGRANCGI": (_el: _Element): void => { nGRANCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "globalRANNodeID": (_el: _Element): void => { globalRANNodeID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "traceCollectionEntityInfo": (_el: _Element): void => { traceCollectionEntityInfo = $._decode_implicit<TraceCollectionEntityInfo>(() => _decode_TraceCollectionEntityInfo)(_el); },
        "aMFTraceData": (_el: _Element): void => { aMFTraceData = $._decode_implicit<XMLType>(() => _decode_XMLType)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "traceActivation": (_el: _Element): void => { traceActivation = $._decode_implicit<TraceActivation>(() => _decode_TraceActivation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFRANTraceReport,
        _extension_additions_list_spec_for_AMFRANTraceReport,
        _root_component_type_list_2_spec_for_AMFRANTraceReport,
        undefined,
    );
    return new AMFRANTraceReport(
        userIdentifiers,
        aMFUENGAPID,
        rANUENGAPID,
        traceRecordType,
        traceDirection,
        deprecatedTraceActivationInfo,
        nGRANCGI,
        globalRANNodeID,
        traceCollectionEntityInfo,
        aMFTraceData,
        location,
        traceActivation
    );
}; }
    return _cached_decoder_for_AMFRANTraceReport(el);
}

let _cached_encoder_for_AMFRANTraceReport: $.ASN1Encoder<AMFRANTraceReport> | null = null;

/**
 * @summary Encodes a(n) AMFRANTraceReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFRANTraceReport, encoded as an ASN.1 Element.
 */
export
function _encode_AMFRANTraceReport (value: AMFRANTraceReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFRANTraceReport) { _cached_encoder_for_AMFRANTraceReport = function (value: AMFRANTraceReport, elGetter: $.ASN1Encoder<AMFRANTraceReport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AMFUENGAPID, $.BER)(value.aMFUENGAPID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TraceRecordType, $.BER)(value.traceRecordType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_TraceDirection, $.BER)(value.traceDirection, $.BER),
            /* IF_ABSENT  */ ((value.deprecatedTraceActivationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TraceActivationInfo, $.BER)(value.deprecatedTraceActivationInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_NCGI, $.BER)(value.nGRANCGI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_GlobalRANNodeID, $.BER)(value.globalRANNodeID, $.BER),
            /* IF_ABSENT  */ ((value.traceCollectionEntityInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TraceCollectionEntityInfo, $.BER)(value.traceCollectionEntityInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_XMLType, $.BER)(value.aMFTraceData, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.traceActivation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_TraceActivation, $.BER)(value.traceActivation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFRANTraceReport(value, elGetter);
}


/* eslint-enable */
