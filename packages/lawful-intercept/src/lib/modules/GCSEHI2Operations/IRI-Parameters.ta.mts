/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { GcsePartyIdentity, _decode_GcsePartyIdentity, _encode_GcsePartyIdentity } from "../GCSEHI2Operations/GcsePartyIdentity.ta.mjs";
// export { GcsePartyIdentity, _decode_GcsePartyIdentity, _encode_GcsePartyIdentity } from "../GCSEHI2Operations/GcsePartyIdentity.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { GcseEvent, _decode_GcseEvent, _encode_GcseEvent, _enum_for_GcseEvent } from "../GCSEHI2Operations/GcseEvent.ta.mjs";
// export { GcseEvent, _enum_for_GcseEvent, GcseEvent_activationOfGcseGroupComms /* IMPORTED_LONG_ENUMERATION_ITEM */, activationOfGcseGroupComms /* IMPORTED_SHORT_ENUMERATION_ITEM */, GcseEvent_startOfInterceptionGcseGroupComms /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionGcseGroupComms /* IMPORTED_SHORT_ENUMERATION_ITEM */, GcseEvent_userAdded /* IMPORTED_LONG_ENUMERATION_ITEM */, userAdded /* IMPORTED_SHORT_ENUMERATION_ITEM */, GcseEvent_userDropped /* IMPORTED_LONG_ENUMERATION_ITEM */, userDropped /* IMPORTED_SHORT_ENUMERATION_ITEM */, GcseEvent_targetConnectionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, targetConnectionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, GcseEvent_targetdropped /* IMPORTED_LONG_ENUMERATION_ITEM */, targetdropped /* IMPORTED_SHORT_ENUMERATION_ITEM */, GcseEvent_deactivationOfGcseGroupComms /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivationOfGcseGroupComms /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GcseEvent, _encode_GcseEvent } from "../GCSEHI2Operations/GcseEvent.ta.mjs";
import { GcseCorrelation, _decode_GcseCorrelation, _encode_GcseCorrelation } from "../GCSEHI2Operations/GcseCorrelation.ta.mjs";
// export { GcseCorrelation, _decode_GcseCorrelation, _encode_GcseCorrelation } from "../GCSEHI2Operations/GcseCorrelation.ta.mjs";
import { TargetConnectionMethod, _decode_TargetConnectionMethod, _encode_TargetConnectionMethod } from "../GCSEHI2Operations/TargetConnectionMethod.ta.mjs";
// export { TargetConnectionMethod, _decode_TargetConnectionMethod, _encode_TargetConnectionMethod } from "../GCSEHI2Operations/TargetConnectionMethod.ta.mjs";
import { GcseGroup, _decode_GcseGroup, _encode_GcseGroup } from "../GCSEHI2Operations/GcseGroup.ta.mjs";
// export { GcseGroup, _decode_GcseGroup, _encode_GcseGroup } from "../GCSEHI2Operations/GcseGroup.ta.mjs";
import { GcseGroupID, _decode_GcseGroupID, _encode_GcseGroupID } from "../GCSEHI2Operations/GcseGroupID.ta.mjs";
// export { GcseGroupID, _decode_GcseGroupID, _encode_GcseGroupID } from "../GCSEHI2Operations/GcseGroupID.ta.mjs";
import { GcseGroupCharacteristics, _decode_GcseGroupCharacteristics, _encode_GcseGroupCharacteristics } from "../GCSEHI2Operations/GcseGroupCharacteristics.ta.mjs";
// export { GcseGroupCharacteristics, _decode_GcseGroupCharacteristics, _encode_GcseGroupCharacteristics } from "../GCSEHI2Operations/GcseGroupCharacteristics.ta.mjs";
import { ReservedTMGI, _decode_ReservedTMGI, _encode_ReservedTMGI } from "../GCSEHI2Operations/ReservedTMGI.ta.mjs";
// export { ReservedTMGI, _decode_ReservedTMGI, _encode_ReservedTMGI } from "../GCSEHI2Operations/ReservedTMGI.ta.mjs";
import { TMGIReservationDuration, _decode_TMGIReservationDuration, _encode_TMGIReservationDuration } from "../GCSEHI2Operations/TMGIReservationDuration.ta.mjs";
// export { TMGIReservationDuration, _decode_TMGIReservationDuration, _encode_TMGIReservationDuration } from "../GCSEHI2Operations/TMGIReservationDuration.ta.mjs";
import { VisitedNetworkID, _decode_VisitedNetworkID, _encode_VisitedNetworkID } from "../GCSEHI2Operations/VisitedNetworkID.ta.mjs";
// export { VisitedNetworkID, _decode_VisitedNetworkID, _encode_VisitedNetworkID } from "../GCSEHI2Operations/VisitedNetworkID.ta.mjs";
import { Reason, _decode_Reason, _encode_Reason } from "../GCSEHI2Operations/Reason.ta.mjs";
// export { Reason, _decode_Reason, _encode_Reason } from "../GCSEHI2Operations/Reason.ta.mjs";
import { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
// export { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * Parameters of one GCSE IRI produced for a target at the GCS AS. Stage 2
 * inclusion in tables 14.3 to 14.8 overrides module syntax that marks a
 * parameter optional. The ICE or DF2 may extend the set for a specific country.
 * 3GPP TS 33.108, clause 14.2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     hi2gcseDomainId                [0]    OBJECT IDENTIFIER,  -- 3GPP HI2 GCSE domain
 *     lawfulInterceptionIdentifier    [1] LawfulInterceptionIdentifier,
 *         -- This identifier is associated with the target.
 *     timeStamp                [2] TimeStamp,
 *         -- date and time of the event triggering the report.
 * 
 *     partyInformation         [3] SET OF GcsePartyIdentity,
 *         -- This is the identity of the target.
 * 
 *     national-Parameters        [4] National-Parameters OPTIONAL,
 *     networkIdentifier        [5] Network-Identifier,
 *     gcseEvent                [6] GcseEvent,    
 *     correlation                [7] GcseCorrelation OPTIONAL,
 *     targetConnectionMethod    [8] TargetConnectionMethod      OPTIONAL,
 *     gcseGroupMembers        [9] GcseGroup      OPTIONAL,
 *     gcseGroupParticipants    [10] GcseGroup    OPTIONAL,
 *     gcseGroupID                [11] GcseGroupID    OPTIONAL,
 *     gcseGroupCharacteristics[12] GcseGroupCharacteristics    OPTIONAL,
 *     reservedTMGI            [13] ReservedTMGI    OPTIONAL,
 *     tMGIReservationDuration    [14] TMGIReservationDuration    OPTIONAL,
 *     visitedNetworkID        [15] VisitedNetworkID     OPTIONAL,
 *     addedUserID                [16] GcsePartyIdentity    OPTIONAL,
 *     droppedUserID            [17] GcsePartyIdentity    OPTIONAL,
 *     reasonForCommsEnd        [18] Reason    OPTIONAL,
 *     gcseLocationOfTheTarget    [19] EPSLocation OPTIONAL,
 *     
 * 
 * 
 * ...
 * 
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    /**
     * @summary `hi2gcseDomainId`.
     * @description
     * 
     * 3GPP HI2 GCSE domain identifier. Present on the IRI. 3GPP TS 33.108,
     * annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly hi2gcseDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     * 
     * LIID for the target. Required on every record. The table calls it a
     * unique number for each lawful authorization. 3GPP TS 33.108, clause
     * 14.2.2.2 and table 14.2. The module marks the association with the
     * target.
     * 
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time of the event at the GCS AS, from the GCS AS clock. Required
     * on every GCSE record. Distinct from the time at which a reported location
     * was obtained. 3GPP TS 33.108, clause 14.2.6, table 14.2.
     * 
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `partyInformation`.
     * @description
     * 
     * Identities of the target. Stage 2: provide at least one of IMEI, IMSI,
     * ProSe UE ID, or other identity, and any other that is available. 3GPP TS
     * 33.108, clause 14.2.6, tables 14.3 to 14.8.
     * 
     * @public
     * @readonly
     */
    readonly partyInformation: GcsePartyIdentity[];
    /**
     * @summary `national_Parameters`.
     * @description
     * 
     * National extension. Clause 14 allows a country-specific extension at the
     * ICE or DF2. The layout is not defined. 3GPP TS 33.108, clause 14.2.6.1.
     * 
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `networkIdentifier`.
     * @description
     * 
     * Operator identifier plus a unique identifier of the GCS AS. Required. The
     * operator identifier should be internationally unique. A network-element
     * identifier is optional; national regulation may require it. 3GPP TS
     * 33.108, clauses 14.2.2.3 and 14.2.6.
     * 
     * @public
     * @readonly
     */
    readonly networkIdentifier: Network_Identifier;
    /**
     * @summary `gcseEvent`.
     * @description
     * 
     * Which GCSE event this record reports. Required. Table 14.1 maps the named
     * events onto begin, continue, and end. Tables 14.4 to 14.8 repeat the
     * parenthetical "Activation of GCSE Communications Group" in the event-type
     * condition; that text does not match table 14.1. 3GPP TS 33.108, clause
     * 14.2.6.
     * 
     * @public
     * @readonly
     */
    readonly gcseEvent: GcseEvent;
    /**
     * @summary `correlation`.
     * @description
     * 
     * Correlates content of communication with IRI, and correlates IRI records.
     * Required on every GCSE record in tables 14.3 to 14.8 even though the
     * module marks it optional. The octet layout is not defined. 3GPP TS
     * 33.108, clause 14.2.2.3 and table 14.2.
     * 
     * @public
     * @readonly
     */
    readonly correlation: OPTIONAL<GcseCorrelation>;
    /**
     * @summary `targetConnectionMethod`.
     * @description
     * 
     * How the target sends and receives group communications at the GCS AS.
     * Conditional when available on activation, start of interception, and end.
     * Required when the event is a modification of that connection. Upstream
     * and downstream are omitted when the target is not connected. 3GPP TS
     * 33.108, clause 14.2.6, tables 14.3, 14.4, 14.7, and 14.8, and annex
     * B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly targetConnectionMethod: OPTIONAL<TargetConnectionMethod>;
    /**
     * @summary `gcseGroupMembers`.
     * @description
     * 
     * Members who could participate in the group. Required on the records in
     * tables 14.3 to 14.8. Also updated when a user is added to or removed from
     * the membership list (clause 14.2.6.2.3). 3GPP TS 33.108, clause 14.2.6.
     * 
     * @public
     * @readonly
     */
    readonly gcseGroupMembers: OPTIONAL<GcseGroup>;
    /**
     * @summary `gcseGroupParticipants`.
     * @description
     * 
     * Parties actually participating in the active group. Conditional on
     * activation, if any member is participating. Required on start of
     * interception, user added, user dropped, connection modification, and end.
     * 3GPP TS 33.108, clause 14.2.6, tables 14.3 to 14.8.
     * 
     * @public
     * @readonly
     */
    readonly gcseGroupParticipants: OPTIONAL<GcseGroup>;
    /**
     * @summary `gcseGroupID`.
     * @description
     * 
     * Identity of the GCSE communications group. Table 14.2 uses this both as
     * the group identity and as the observed communications group identity.
     * Required on the records in tables 14.3 to 14.8. 3GPP TS 33.108, clause
     * 14.2.6.
     * 
     * @public
     * @readonly
     */
    readonly gcseGroupID: OPTIONAL<GcseGroupID>;
    /**
     * @summary `gcseGroupCharacteristics`.
     * @description
     * 
     * Characteristics of the group communications, for example voice or video.
     * Required on activation, start of interception, connection modification,
     * and end. Not listed on user-added or user-dropped continue records. 3GPP
     * TS 33.108, clause 14.2.6, table 14.2.
     * 
     * @public
     * @readonly
     */
    readonly gcseGroupCharacteristics: OPTIONAL<GcseGroupCharacteristics>;
    /**
     * @summary `reservedTMGI`.
     * @description
     * 
     * Stage 2: the TMGI assigned for downstream multicast delivery to the
     * target. Conditional: provide when known (tables 14.3 to 14.8).
     *
     * Annex B.14.1 says these octets shall be coded as the
     * MBMS-Session-Duration attribute of 3GPP TS 29.468. That comment does not
     * match the stage 2 meaning. The specification does not resolve the
     * contradiction.
     * 
     * @public
     * @readonly
     */
    readonly reservedTMGI: OPTIONAL<ReservedTMGI>;
    /**
     * @summary `tMGIReservationDuration`.
     * @description
     * 
     * Stage 2: how long the BM-SC has reserved the TMGI for the GCS AS.
     * Conditional when a TMGI is reserved or renewed and is the one used for
     * the target's downstream communications (tables 14.3, 14.4, 14.7, and
     * 14.8).
     *
     * Annex B.14.1 says these octets shall be coded as the TMGI attribute of
     * 3GPP TS 29.468. That comment does not match the stage 2 meaning. The
     * specification does not resolve the contradiction.
     * 
     * @public
     * @readonly
     */
    readonly tMGIReservationDuration: OPTIONAL<TMGIReservationDuration>;
    /**
     * @summary `visitedNetworkID`.
     * @description
     * 
     * PLMN serving the UE, for the target's connection, when available.
     * Conditional on the records in tables 14.3 to 14.8. Coded as specified by
     * reference 53 of 3GPP TS 33.108, which is 3GPP TS 29.273. 3GPP TS 33.108,
     * annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly visitedNetworkID: OPTIONAL<VisitedNetworkID>;
    /**
     * @summary `addedUserID`.
     * @description
     * 
     * User added to an active GCSE group. Required on the user-added continue
     * record. 3GPP TS 33.108, clause 14.2.6, tables 14.2 and 14.5.
     * 
     * @public
     * @readonly
     */
    readonly addedUserID: OPTIONAL<GcsePartyIdentity>;
    /**
     * @summary `droppedUserID`.
     * @description
     * 
     * User dropped from an active GCSE group. Required on the user-dropped
     * continue record. 3GPP TS 33.108, clause 14.2.6, tables 14.2 and 14.6.
     * 
     * @public
     * @readonly
     */
    readonly droppedUserID: OPTIONAL<GcsePartyIdentity>;
    /**
     * @summary `reasonForCommsEnd`.
     * @description
     * 
     * Why the group communications ended, when available. Conditional on the
     * end record. The table's example is that the target was dropped from the
     * group. The text layout is not further defined. 3GPP TS 33.108, clause
     * 14.2.6, tables 14.2 and 14.8.
     * 
     * @public
     * @readonly
     */
    readonly reasonForCommsEnd: OPTIONAL<Reason>;
    /**
     * @summary `gcseLocationOfTheTarget`.
     * @description
     * 
     * Location of the target known at the GCS AS when the record is produced.
     * Conditional, and only when location is authorized. Table 14.2 also maps
     * the time at which the location was obtained onto this same parameter. Not
     * listed on user-added or user-dropped records. 3GPP TS 33.108, clause
     * 14.2.6, tables 14.3, 14.4, 14.7, and 14.8.
     * 
     * @public
     * @readonly
     */
    readonly gcseLocationOfTheTarget: OPTIONAL<EPSLocation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi2gcseDomainId: OBJECT_IDENTIFIER,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        timeStamp: TimeStamp,
        partyInformation: GcsePartyIdentity[],
        national_Parameters: OPTIONAL<National_Parameters>,
        networkIdentifier: Network_Identifier,
        gcseEvent: GcseEvent,
        correlation?: OPTIONAL<GcseCorrelation>,
        targetConnectionMethod?: OPTIONAL<TargetConnectionMethod>,
        gcseGroupMembers?: OPTIONAL<GcseGroup>,
        gcseGroupParticipants?: OPTIONAL<GcseGroup>,
        gcseGroupID?: OPTIONAL<GcseGroupID>,
        gcseGroupCharacteristics?: OPTIONAL<GcseGroupCharacteristics>,
        reservedTMGI?: OPTIONAL<ReservedTMGI>,
        tMGIReservationDuration?: OPTIONAL<TMGIReservationDuration>,
        visitedNetworkID?: OPTIONAL<VisitedNetworkID>,
        addedUserID?: OPTIONAL<GcsePartyIdentity>,
        droppedUserID?: OPTIONAL<GcsePartyIdentity>,
        reasonForCommsEnd?: OPTIONAL<Reason>,
        gcseLocationOfTheTarget?: OPTIONAL<EPSLocation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi2gcseDomainId = hi2gcseDomainId;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.timeStamp = timeStamp;
        this.partyInformation = partyInformation;
        this.national_Parameters = national_Parameters;
        this.networkIdentifier = networkIdentifier;
        this.gcseEvent = gcseEvent;
        this.correlation = correlation;
        this.targetConnectionMethod = targetConnectionMethod;
        this.gcseGroupMembers = gcseGroupMembers;
        this.gcseGroupParticipants = gcseGroupParticipants;
        this.gcseGroupID = gcseGroupID;
        this.gcseGroupCharacteristics = gcseGroupCharacteristics;
        this.reservedTMGI = reservedTMGI;
        this.tMGIReservationDuration = tMGIReservationDuration;
        this.visitedNetworkID = visitedNetworkID;
        this.addedUserID = addedUserID;
        this.droppedUserID = droppedUserID;
        this.reasonForCommsEnd = reasonForCommsEnd;
        this.gcseLocationOfTheTarget = gcseLocationOfTheTarget;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IRI_Parameters
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_Parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_Parameters`.
     * @returns {IRI_Parameters}
     */
    public static _from_object (_o: { [_K in keyof (IRI_Parameters)]: (IRI_Parameters)[_K] }): IRI_Parameters {
        return new IRI_Parameters(_o.hi2gcseDomainId, _o.lawfulInterceptionIdentifier, _o.timeStamp, _o.partyInformation, _o.national_Parameters, _o.networkIdentifier, _o.gcseEvent, _o.correlation, _o.targetConnectionMethod, _o.gcseGroupMembers, _o.gcseGroupParticipants, _o.gcseGroupID, _o.gcseGroupCharacteristics, _o.reservedTMGI, _o.tMGIReservationDuration, _o.visitedNetworkID, _o.addedUserID, _o.droppedUserID, _o.reasonForCommsEnd, _o.gcseLocationOfTheTarget, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `gcseEvent`
         * @public
         * @static
         */

    public static _enum_for_gcseEvent = _enum_for_GcseEvent;
}

/**
 * @summary The Leading Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("hi2gcseDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("partyInformation", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("networkIdentifier", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gcseEvent", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("correlation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("targetConnectionMethod", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("gcseGroupMembers", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("gcseGroupParticipants", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("gcseGroupID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("gcseGroupCharacteristics", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("reservedTMGI", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("tMGIReservationDuration", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("visitedNetworkID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("addedUserID", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("droppedUserID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("reasonForCommsEnd", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("gcseLocationOfTheTarget", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRI_Parameters: $.ASN1Decoder<IRI_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters (el: _Element): IRI_Parameters {
    if (!_cached_decoder_for_IRI_Parameters) { _cached_decoder_for_IRI_Parameters = function (el: _Element): IRI_Parameters {
    let hi2gcseDomainId!: OBJECT_IDENTIFIER;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let timeStamp!: TimeStamp;
    let partyInformation!: GcsePartyIdentity[];
    let national_Parameters: OPTIONAL<National_Parameters>;
    let networkIdentifier!: Network_Identifier;
    let gcseEvent!: GcseEvent;
    let correlation: OPTIONAL<GcseCorrelation>;
    let targetConnectionMethod: OPTIONAL<TargetConnectionMethod>;
    let gcseGroupMembers: OPTIONAL<GcseGroup>;
    let gcseGroupParticipants: OPTIONAL<GcseGroup>;
    let gcseGroupID: OPTIONAL<GcseGroupID>;
    let gcseGroupCharacteristics: OPTIONAL<GcseGroupCharacteristics>;
    let reservedTMGI: OPTIONAL<ReservedTMGI>;
    let tMGIReservationDuration: OPTIONAL<TMGIReservationDuration>;
    let visitedNetworkID: OPTIONAL<VisitedNetworkID>;
    let addedUserID: OPTIONAL<GcsePartyIdentity>;
    let droppedUserID: OPTIONAL<GcsePartyIdentity>;
    let reasonForCommsEnd: OPTIONAL<Reason>;
    let gcseLocationOfTheTarget: OPTIONAL<EPSLocation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2gcseDomainId": (_el: _Element): void => { hi2gcseDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "partyInformation": (_el: _Element): void => { partyInformation = $._decode_implicit<GcsePartyIdentity[]>(() => $._decodeSetOf<GcsePartyIdentity>(() => _decode_GcsePartyIdentity))(_el); },
        "national-Parameters": (_el: _Element): void => { national_Parameters = $._decode_implicit<National_Parameters>(() => _decode_National_Parameters)(_el); },
        "networkIdentifier": (_el: _Element): void => { networkIdentifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "gcseEvent": (_el: _Element): void => { gcseEvent = $._decode_implicit<GcseEvent>(() => _decode_GcseEvent)(_el); },
        "correlation": (_el: _Element): void => { correlation = $._decode_implicit<GcseCorrelation>(() => _decode_GcseCorrelation)(_el); },
        "targetConnectionMethod": (_el: _Element): void => { targetConnectionMethod = $._decode_implicit<TargetConnectionMethod>(() => _decode_TargetConnectionMethod)(_el); },
        "gcseGroupMembers": (_el: _Element): void => { gcseGroupMembers = $._decode_implicit<GcseGroup>(() => _decode_GcseGroup)(_el); },
        "gcseGroupParticipants": (_el: _Element): void => { gcseGroupParticipants = $._decode_implicit<GcseGroup>(() => _decode_GcseGroup)(_el); },
        "gcseGroupID": (_el: _Element): void => { gcseGroupID = $._decode_implicit<GcseGroupID>(() => _decode_GcseGroupID)(_el); },
        "gcseGroupCharacteristics": (_el: _Element): void => { gcseGroupCharacteristics = $._decode_implicit<GcseGroupCharacteristics>(() => _decode_GcseGroupCharacteristics)(_el); },
        "reservedTMGI": (_el: _Element): void => { reservedTMGI = $._decode_implicit<ReservedTMGI>(() => _decode_ReservedTMGI)(_el); },
        "tMGIReservationDuration": (_el: _Element): void => { tMGIReservationDuration = $._decode_implicit<TMGIReservationDuration>(() => _decode_TMGIReservationDuration)(_el); },
        "visitedNetworkID": (_el: _Element): void => { visitedNetworkID = $._decode_implicit<VisitedNetworkID>(() => _decode_VisitedNetworkID)(_el); },
        "addedUserID": (_el: _Element): void => { addedUserID = $._decode_implicit<GcsePartyIdentity>(() => _decode_GcsePartyIdentity)(_el); },
        "droppedUserID": (_el: _Element): void => { droppedUserID = $._decode_implicit<GcsePartyIdentity>(() => _decode_GcsePartyIdentity)(_el); },
        "reasonForCommsEnd": (_el: _Element): void => { reasonForCommsEnd = $._decode_implicit<Reason>(() => _decode_Reason)(_el); },
        "gcseLocationOfTheTarget": (_el: _Element): void => { gcseLocationOfTheTarget = $._decode_implicit<EPSLocation>(() => _decode_EPSLocation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters(
        hi2gcseDomainId,
        lawfulInterceptionIdentifier,
        timeStamp,
        partyInformation,
        national_Parameters,
        networkIdentifier,
        gcseEvent,
        correlation,
        targetConnectionMethod,
        gcseGroupMembers,
        gcseGroupParticipants,
        gcseGroupID,
        gcseGroupCharacteristics,
        reservedTMGI,
        tMGIReservationDuration,
        visitedNetworkID,
        addedUserID,
        droppedUserID,
        reasonForCommsEnd,
        gcseLocationOfTheTarget,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRI_Parameters(el);
}

let _cached_encoder_for_IRI_Parameters: $.ASN1Encoder<IRI_Parameters> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters (value: IRI_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters) { _cached_encoder_for_IRI_Parameters = function (value: IRI_Parameters, elGetter: $.ASN1Encoder<IRI_Parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(20 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2gcseDomainId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<GcsePartyIdentity>(() => _encode_GcsePartyIdentity, $.BER), $.BER)(value.partyInformation, $.BER);
    if (value.national_Parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Network_Identifier, $.BER)(value.networkIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_GcseEvent, $.BER)(value.gcseEvent, $.BER);
    if (value.correlation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_GcseCorrelation, $.BER)(value.correlation, $.BER);
    }
    if (value.targetConnectionMethod !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_TargetConnectionMethod, $.BER)(value.targetConnectionMethod, $.BER);
    }
    if (value.gcseGroupMembers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_GcseGroup, $.BER)(value.gcseGroupMembers, $.BER);
    }
    if (value.gcseGroupParticipants !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_GcseGroup, $.BER)(value.gcseGroupParticipants, $.BER);
    }
    if (value.gcseGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_GcseGroupID, $.BER)(value.gcseGroupID, $.BER);
    }
    if (value.gcseGroupCharacteristics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_GcseGroupCharacteristics, $.BER)(value.gcseGroupCharacteristics, $.BER);
    }
    if (value.reservedTMGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ReservedTMGI, $.BER)(value.reservedTMGI, $.BER);
    }
    if (value.tMGIReservationDuration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_TMGIReservationDuration, $.BER)(value.tMGIReservationDuration, $.BER);
    }
    if (value.visitedNetworkID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_VisitedNetworkID, $.BER)(value.visitedNetworkID, $.BER);
    }
    if (value.addedUserID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_GcsePartyIdentity, $.BER)(value.addedUserID, $.BER);
    }
    if (value.droppedUserID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_GcsePartyIdentity, $.BER)(value.droppedUserID, $.BER);
    }
    if (value.reasonForCommsEnd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_Reason, $.BER)(value.reasonForCommsEnd, $.BER);
    }
    if (value.gcseLocationOfTheTarget !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_EPSLocation, $.BER)(value.gcseLocationOfTheTarget, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRI_Parameters(value, elGetter);
}


/* eslint-enable */
