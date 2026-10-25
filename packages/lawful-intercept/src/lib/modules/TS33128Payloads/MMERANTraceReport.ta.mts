/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { type MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
// export { MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
import { type RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
// export { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
import { TraceRecordType, _decode_TraceRecordType, _encode_TraceRecordType, _enum_for_TraceRecordType } from "../TS33128Payloads/TraceRecordType.ta.mjs";
// export { TraceRecordType, _enum_for_TraceRecordType, TraceRecordType_traceStart /* IMPORTED_LONG_ENUMERATION_ITEM */, traceStart /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_cellTrafficTrace /* IMPORTED_LONG_ENUMERATION_ITEM */, cellTrafficTrace /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDataDelivery /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDataDelivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceRecordType_traceDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, traceDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceRecordType, _encode_TraceRecordType } from "../TS33128Payloads/TraceRecordType.ta.mjs";
import { TraceDirection, _decode_TraceDirection, _encode_TraceDirection, _enum_for_TraceDirection } from "../TS33128Payloads/TraceDirection.ta.mjs";
// export { TraceDirection, _enum_for_TraceDirection, TraceDirection_toAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, toAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, fromAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_toMME /* IMPORTED_LONG_ENUMERATION_ITEM */, toMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDirection_fromMME /* IMPORTED_LONG_ENUMERATION_ITEM */, fromMME /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDirection, _encode_TraceDirection } from "../TS33128Payloads/TraceDirection.ta.mjs";
import { type TraceActivation, _decode_TraceActivation, _encode_TraceActivation } from "../TS33128Payloads/TraceActivation.ta.mjs";
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
 * The IRI-POI in the MME shall generate an xIRI containing an MMERANTraceReport
 * record when the IRI-POI present in the MME has detected any of the following
 * events:
 *
 * - MME sent a TRACE START message to a RAN node in response to a Trace Session
 *   Activation message for the target.
 *
 * - MME received a CELL TRAFFIC TRACE message from the RAN for the target.
 *
 * - MME sent MDT or trace data to the trace collection entity for the target.
 *
 * - MME sent a deactivate trace message to the RAN for the target.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.10.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `userIdentifiers`.
     * @description
     *
     * List of identifiers, including the target identifier, associated with the
     * target UE registration stored in the MME context. See TS 23.401 [50]
     * clause 5.7.2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly userIdentifiers: UserIdentifiers;
    /**
     * @summary `mMEUES1APID`.
     * @description
     *
     * Identity that the MME uses to uniquely identify the target UE over the S1
     * Interface. See TS 36.413 [38] clause 9.2.3.3. This is correlated to the
     * IMSI known in the UE context at the MME.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly mMEUES1APID: MMEUES1APID;
    /**
     * @summary `eNBUES1APID`.
     * @public
     * @readonly
     */
    readonly eNBUES1APID: RANUES1APID;
    /**
     * @summary `traceRecordType`.
     * @description
     *
     * Identifies the type of trace record being generated. This parameter is
     * populated with either Trace Start, Cell Traffic Trace, Trace Data
     * Delivery, or Trace Deactivation.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly traceRecordType: TraceRecordType;
    /**
     * @summary `traceDirection`.
     * @description
     *
     * Identifies which network element is signalling the trace information.
     * This parameter is populated with a choice of either MME or RAN. See TS
     * 36.413 [38] clauses 9.1.11 and 9.1.18.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly traceDirection: TraceDirection;
    /**
     * @summary `traceActivationInfo`.
     * @description
     *
     * Information related to a trace session activation provided from the MME
     * to the NG-RAN node. Shall be populated if the traceRecordType is set to
     * Trace Start. See TS 36.413 [38] clause 9.2.1.4.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly traceActivationInfo: OPTIONAL<TraceActivation>;
    /**
     * @summary `eUTRANCGI`.
     * @description
     *
     * Identifies the eUTRAN Cell Global Identifier of the cell performing the
     * UE trace.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly eUTRANCGI: ECGI;
    /**
     * @summary `globalRANNodeID`.
     * @description
     *
     * Uniquely identifies the RAN node to which the TRACE START message is
     * sent. This is derived from the initial S1 Setup exchange between the RAN
     * node and the MME.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly globalRANNodeID: GlobalRANNodeID;
    /**
     * @summary `traceCollectionEntityInfo`.
     * @description
     *
     * Provides information related to the trace collection entity to which the
     * MME sends the MDT or Trace data of the target. Shall be populated if the
     * Trace Record Type is set to Trace Data Delivery. See TS 36.413 [38]
     * clauses 9.1.18 and 9.2.2.1.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly traceCollectionEntityInfo: OPTIONAL<TraceCollectionEntityInfo>;
    /**
     * @summary `mMETraceData`.
     * @description
     *
     * Includes the trace data (in raw XML format) sent from the MME to the
     * trace collection entity. Shall be present when the MME is the trace
     * collection NE. See TS 32.423 [112] clauses 4.18 and 5.2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly mMETraceData: OPTIONAL<XMLType>;
    /**
     * @summary `location`.
     * @description
     *
     * Provides the current location as known in the UE context at the MME or
     * supplemented by the MDF2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.10.2.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userIdentifiers: UserIdentifiers,
        mMEUES1APID: MMEUES1APID,
        eNBUES1APID: RANUES1APID,
        traceRecordType: TraceRecordType,
        traceDirection: TraceDirection,
        traceActivationInfo: OPTIONAL<TraceActivation>,
        eUTRANCGI: ECGI,
        globalRANNodeID: GlobalRANNodeID,
        traceCollectionEntityInfo?: OPTIONAL<TraceCollectionEntityInfo>,
        mMETraceData?: OPTIONAL<XMLType>,
        location?: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userIdentifiers = userIdentifiers;
        this.mMEUES1APID = mMEUES1APID;
        this.eNBUES1APID = eNBUES1APID;
        this.traceRecordType = traceRecordType;
        this.traceDirection = traceDirection;
        this.traceActivationInfo = traceActivationInfo;
        this.eUTRANCGI = eUTRANCGI;
        this.globalRANNodeID = globalRANNodeID;
        this.traceCollectionEntityInfo = traceCollectionEntityInfo;
        this.mMETraceData = mMETraceData;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new MMERANTraceReport(_o.userIdentifiers, _o.mMEUES1APID, _o.eNBUES1APID, _o.traceRecordType, _o.traceDirection, _o.traceActivationInfo, _o.eUTRANCGI, _o.globalRANNodeID, _o.traceCollectionEntityInfo, _o.mMETraceData, _o.location, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `traceRecordType`
         * @public
         * @static
         */

    public static _enum_for_traceRecordType: typeof _enum_for_TraceRecordType = _enum_for_TraceRecordType;        /**
         * @summary The enum used as the type of the component `traceDirection`
         * @public
         * @static
         */

    public static _enum_for_traceDirection: typeof _enum_for_TraceDirection = _enum_for_TraceDirection;
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
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
        location,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMEUES1APID, $.BER)(value.mMEUES1APID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RANUES1APID, $.BER)(value.eNBUES1APID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TraceRecordType, $.BER)(value.traceRecordType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_TraceDirection, $.BER)(value.traceDirection, $.BER);
    if (value.traceActivationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_TraceActivation, $.BER)(value.traceActivationInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_ECGI, $.BER)(value.eUTRANCGI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_GlobalRANNodeID, $.BER)(value.globalRANNodeID, $.BER);
    if (value.traceCollectionEntityInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_TraceCollectionEntityInfo, $.BER)(value.traceCollectionEntityInfo, $.BER);
    }
    if (value.mMETraceData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_XMLType, $.BER)(value.mMETraceData, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMERANTraceReport(value, elGetter);
}


/* eslint-enable */
