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
import { MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
// export { MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
import { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
// export { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
import { TraceRecordType, _enum_for_TraceRecordType, TraceRecordType_traceStart /* IMPORTED_LONG_ENUMERATION_ITEM */, traceStart /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_cellTrafficTrace /* IMPORTED_LONG_ENUMERATION_ITEM */, cellTrafficTrace /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDataDelivery /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDataDelivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceRecordType, _encode_TraceRecordType } from "../TS33128Payloads/TraceRecordType.ta.mjs";
// export { TraceRecordType, _enum_for_TraceRecordType, TraceRecordType_traceStart /* IMPORTED_LONG_ENUMERATION_ITEM */, traceStart /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_cellTrafficTrace /* IMPORTED_LONG_ENUMERATION_ITEM */, cellTrafficTrace /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDataDelivery /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDataDelivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceRecordType, _encode_TraceRecordType } from "../TS33128Payloads/TraceRecordType.ta.mjs";
import { TraceDirection, _enum_for_TraceDirection, TraceDirection_toAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, toAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, fromAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_toMME /* IMPORTED_LONG_ENUMERATION_ITEM */, toMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromMME /* IMPORTED_LONG_ENUMERATION_ITEM */, fromMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDirection, _encode_TraceDirection } from "../TS33128Payloads/TraceDirection.ta.mjs";
// export { TraceDirection, _enum_for_TraceDirection, TraceDirection_toAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, toAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, fromAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_toMME /* IMPORTED_LONG_ENUMERATION_ITEM */, toMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromMME /* IMPORTED_LONG_ENUMERATION_ITEM */, fromMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDirection, _encode_TraceDirection } from "../TS33128Payloads/TraceDirection.ta.mjs";
import { TraceActivation, _decode_TraceActivation, _encode_TraceActivation } from "../TS33128Payloads/TraceActivation.ta.mjs";
// export { TraceActivation, _decode_TraceActivation, _encode_TraceActivation } from "../TS33128Payloads/TraceActivation.ta.mjs";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
import { TraceCollectionEntityInfo, _decode_TraceCollectionEntityInfo, _encode_TraceCollectionEntityInfo } from "../TS33128Payloads/TraceCollectionEntityInfo.ta.mjs";
// export { TraceCollectionEntityInfo, _decode_TraceCollectionEntityInfo, _encode_TraceCollectionEntityInfo } from "../TS33128Payloads/TraceCollectionEntityInfo.ta.mjs";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary MMERANTraceReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMERANTraceReport ::= SEQUENCE
 * {
 *     userIdentifiers           [1] UserIdentifiers,
 *     mMEUES1APID               [2] MMEUES1APID,
 *     eNBUES1APID               [3] RANUES1APID,
 *     traceRecordType           [4] TraceRecordType,
 *     traceDirection            [5] TraceDirection,
 *     traceActivationInfo       [6] TraceActivation OPTIONAL,
 *     eUTRANCGI                 [7] ECGI,
 *     globalRANNodeID           [8] GlobalRANNodeID,
 *     traceCollectionEntityInfo [9] TraceCollectionEntityInfo OPTIONAL,
 *     mMETraceData              [10] XMLType OPTIONAL,
 *     location                  [11] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMERANTraceReport {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `mMEUES1APID`.
         * @public
         * @readonly
         */
        readonly mMEUES1APID: MMEUES1APID,
        /**
         * @summary `eNBUES1APID`.
         * @public
         * @readonly
         */
        readonly eNBUES1APID: RANUES1APID,
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
         * @summary `traceActivationInfo`.
         * @public
         * @readonly
         */
        readonly traceActivationInfo: OPTIONAL<TraceActivation>,
        /**
         * @summary `eUTRANCGI`.
         * @public
         * @readonly
         */
        readonly eUTRANCGI: ECGI,
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
         * @summary `mMETraceData`.
         * @public
         * @readonly
         */
        readonly mMETraceData: OPTIONAL<XMLType>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>
    ) {}

    /**
     * @summary Restructures an object into a MMERANTraceReport
     * @description
     * 
     * This takes an `object` and converts it to a `MMERANTraceReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMERANTraceReport`.
     * @returns {MMERANTraceReport}
     */
    public static _from_object (_o: { [_K in keyof (MMERANTraceReport)]: (MMERANTraceReport)[_K] }): MMERANTraceReport {
        return new MMERANTraceReport(_o.userIdentifiers, _o.mMEUES1APID, _o.eNBUES1APID, _o.traceRecordType, _o.traceDirection, _o.traceActivationInfo, _o.eUTRANCGI, _o.globalRANNodeID, _o.traceCollectionEntityInfo, _o.mMETraceData, _o.location);
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
 * @summary The Leading Root Component Types of MMERANTraceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMERANTraceReport: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mMEUES1APID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eNBUES1APID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("traceRecordType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("traceDirection", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("traceActivationInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eUTRANCGI", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("globalRANNodeID", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("traceCollectionEntityInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mMETraceData", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of MMERANTraceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMERANTraceReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMERANTraceReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMERANTraceReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMERANTraceReport: $.ASN1Decoder<MMERANTraceReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMERANTraceReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMERANTraceReport (el: _Element): MMERANTraceReport {
    if (!_cached_decoder_for_MMERANTraceReport) { _cached_decoder_for_MMERANTraceReport = function (el: _Element): MMERANTraceReport {
    let userIdentifiers!: UserIdentifiers;
    let mMEUES1APID!: MMEUES1APID;
    let eNBUES1APID!: RANUES1APID;
    let traceRecordType!: TraceRecordType;
    let traceDirection!: TraceDirection;
    let traceActivationInfo: OPTIONAL<TraceActivation>;
    let eUTRANCGI!: ECGI;
    let globalRANNodeID!: GlobalRANNodeID;
    let traceCollectionEntityInfo: OPTIONAL<TraceCollectionEntityInfo>;
    let mMETraceData: OPTIONAL<XMLType>;
    let location: OPTIONAL<Location>;
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "mMEUES1APID": (_el: _Element): void => { mMEUES1APID = $._decode_implicit<MMEUES1APID>(() => _decode_MMEUES1APID)(_el); },
        "eNBUES1APID": (_el: _Element): void => { eNBUES1APID = $._decode_implicit<RANUES1APID>(() => _decode_RANUES1APID)(_el); },
        "traceRecordType": (_el: _Element): void => { traceRecordType = $._decode_implicit<TraceRecordType>(() => _decode_TraceRecordType)(_el); },
        "traceDirection": (_el: _Element): void => { traceDirection = $._decode_implicit<TraceDirection>(() => _decode_TraceDirection)(_el); },
        "traceActivationInfo": (_el: _Element): void => { traceActivationInfo = $._decode_implicit<TraceActivation>(() => _decode_TraceActivation)(_el); },
        "eUTRANCGI": (_el: _Element): void => { eUTRANCGI = $._decode_implicit<ECGI>(() => _decode_ECGI)(_el); },
        "globalRANNodeID": (_el: _Element): void => { globalRANNodeID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "traceCollectionEntityInfo": (_el: _Element): void => { traceCollectionEntityInfo = $._decode_implicit<TraceCollectionEntityInfo>(() => _decode_TraceCollectionEntityInfo)(_el); },
        "mMETraceData": (_el: _Element): void => { mMETraceData = $._decode_implicit<XMLType>(() => _decode_XMLType)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMERANTraceReport,
        _extension_additions_list_spec_for_MMERANTraceReport,
        _root_component_type_list_2_spec_for_MMERANTraceReport,
        undefined,
    );
    return new MMERANTraceReport(
        userIdentifiers,
        mMEUES1APID,
        eNBUES1APID,
        traceRecordType,
        traceDirection,
        traceActivationInfo,
        eUTRANCGI,
        globalRANNodeID,
        traceCollectionEntityInfo,
        mMETraceData,
        location
    );
}; }
    return _cached_decoder_for_MMERANTraceReport(el);
}

let _cached_encoder_for_MMERANTraceReport: $.ASN1Encoder<MMERANTraceReport> | null = null;

/**
 * @summary Encodes a(n) MMERANTraceReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMERANTraceReport, encoded as an ASN.1 Element.
 */
export
function _encode_MMERANTraceReport (value: MMERANTraceReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMERANTraceReport) { _cached_encoder_for_MMERANTraceReport = function (value: MMERANTraceReport, elGetter: $.ASN1Encoder<MMERANTraceReport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMEUES1APID, $.BER)(value.mMEUES1APID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RANUES1APID, $.BER)(value.eNBUES1APID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TraceRecordType, $.BER)(value.traceRecordType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_TraceDirection, $.BER)(value.traceDirection, $.BER),
            /* IF_ABSENT  */ ((value.traceActivationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TraceActivation, $.BER)(value.traceActivationInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_ECGI, $.BER)(value.eUTRANCGI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_GlobalRANNodeID, $.BER)(value.globalRANNodeID, $.BER),
            /* IF_ABSENT  */ ((value.traceCollectionEntityInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TraceCollectionEntityInfo, $.BER)(value.traceCollectionEntityInfo, $.BER)),
            /* IF_ABSENT  */ ((value.mMETraceData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_XMLType, $.BER)(value.mMETraceData, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Location, $.BER)(value.location, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMERANTraceReport(value, elGetter);
}


/* eslint-enable */
