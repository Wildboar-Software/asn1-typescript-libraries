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
import { PartyIdentity, _decode_PartyIdentity, _encode_PartyIdentity } from "../CONFHI2Operations/PartyIdentity.ta.mjs";
// export { PartyIdentity, _decode_PartyIdentity, _encode_PartyIdentity } from "../CONFHI2Operations/PartyIdentity.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { ConfEvent, _decode_ConfEvent, _encode_ConfEvent, _enum_for_ConfEvent } from "../CONFHI2Operations/ConfEvent.ta.mjs";
// export { ConfEvent, _enum_for_ConfEvent, ConfEvent_confStartSuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confStartSuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confStartUnsuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confStartUnsuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_startOfInterceptionConferenceActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionConferenceActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confPartyJoinSuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confPartyJoinSuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confPartyJoinUnsuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confPartyJoinUnsuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confPartyLeaveSuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confPartyLeaveSuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confPartyLeaveUnsuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confPartyLeaveUnsuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confPartyBearerModifySuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confPartyBearerModifySuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confPartyBearerModifyUnsuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confPartyBearerModifyUnsuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confEndSuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confEndSuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confEndUnsuccessfull /* IMPORTED_LONG_ENUMERATION_ITEM */, confEndUnsuccessfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confServCreation /* IMPORTED_LONG_ENUMERATION_ITEM */, confServCreation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConfEvent_confServUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, confServUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConfEvent, _encode_ConfEvent } from "../CONFHI2Operations/ConfEvent.ta.mjs";
import { ConfCorrelation, _decode_ConfCorrelation, _encode_ConfCorrelation } from "../CONFHI2Operations/ConfCorrelation.ta.mjs";
// export { ConfCorrelation, _decode_ConfCorrelation, _encode_ConfCorrelation } from "../CONFHI2Operations/ConfCorrelation.ta.mjs";
import { IMSIdentity, _decode_IMSIdentity, _encode_IMSIdentity } from "../CONFHI2Operations/IMSIdentity.ta.mjs";
// export { IMSIdentity, _decode_IMSIdentity, _encode_IMSIdentity } from "../CONFHI2Operations/IMSIdentity.ta.mjs";
import { ConfPartyInformation, _decode_ConfPartyInformation, _encode_ConfPartyInformation } from "../CONFHI2Operations/ConfPartyInformation.ta.mjs";
// export { ConfPartyInformation, _decode_ConfPartyInformation, _encode_ConfPartyInformation } from "../CONFHI2Operations/ConfPartyInformation.ta.mjs";
import { ConfEventInitiator, _decode_ConfEventInitiator, _encode_ConfEventInitiator } from "../CONFHI2Operations/ConfEventInitiator.ta.mjs";
// export { ConfEventInitiator, _decode_ConfEventInitiator, _encode_ConfEventInitiator } from "../CONFHI2Operations/ConfEventInitiator.ta.mjs";
import { ConfEventFailureReason, _decode_ConfEventFailureReason, _encode_ConfEventFailureReason } from "../CONFHI2Operations/ConfEventFailureReason.ta.mjs";
// export { ConfEventFailureReason, _decode_ConfEventFailureReason, _encode_ConfEventFailureReason } from "../CONFHI2Operations/ConfEventFailureReason.ta.mjs";
import { Reason, _decode_Reason, _encode_Reason } from "../CONFHI2Operations/Reason.ta.mjs";
// export { Reason, _decode_Reason, _encode_Reason } from "../CONFHI2Operations/Reason.ta.mjs";
import { RecurrenceInfo, _decode_RecurrenceInfo, _encode_RecurrenceInfo } from "../CONFHI2Operations/RecurrenceInfo.ta.mjs";
// export { RecurrenceInfo, _decode_RecurrenceInfo, _encode_RecurrenceInfo } from "../CONFHI2Operations/RecurrenceInfo.ta.mjs";
import { MediaModification, _decode_MediaModification, _encode_MediaModification, _enum_for_MediaModification } from "../CONFHI2Operations/MediaModification.ta.mjs";
// export { MediaModification, _enum_for_MediaModification, MediaModification_add /* IMPORTED_LONG_ENUMERATION_ITEM */, add /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaModification_remove /* IMPORTED_LONG_ENUMERATION_ITEM */, remove /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaModification_change /* IMPORTED_LONG_ENUMERATION_ITEM */, change /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaModification_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaModification, _encode_MediaModification } from "../CONFHI2Operations/MediaModification.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     hi2confDomainId                [0]    OBJECT IDENTIFIER,  -- 3GPP HI2 Conf domain
 *     lawfulInterceptionIdentifier    [1] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target.
 *     timeStamp                [2] TimeStamp,
 *         -- date and time of the event triggering the report.
 * 
 *     partyInformation         [3] SET SIZE (1..10) OF PartyIdentity OPTIONAL,
 *         -- This is the identity of the target.
 *         -- The sender shall only use one instance of PartyIdentity, the "SET SIZE" structure is
 *         -- kept for ASN.1 backward compatibility reasons only.
 * 
 *     national-Parameters        [4] National-Parameters OPTIONAL,
 *     networkIdentifier        [5] Network-Identifier OPTIONAL,
 *     confEvent                [6] ConfEvent,    
 *     correlation                [7] ConfCorrelation OPTIONAL,
 *     confID                    [8] IMSIdentity      OPTIONAL,
 *     tempConfID                [9] IMSIdentity      OPTIONAL,
 *     listOfPotConferees        [10] SET OF PartyIdentity     OPTIONAL,
 *     listOfConferees            [11] SET OF ConfPartyInformation     OPTIONAL,
 *     joinPartyID                [12] ConfPartyInformation    OPTIONAL,
 *     leavePartyID            [13] ConfPartyInformation    OPTIONAL,
 *     listOfBearerAffectedParties        [14] SET OF ConfPartyInformation    OPTIONAL,
 *     confEventInitiator        [15] ConfEventInitiator    OPTIONAL,
 *     confEventFailureReason    [16] ConfEventFailureReason    OPTIONAL,
 *     confEndReason            [17] Reason    OPTIONAL,
 *     potConfStartInfo        [18] TimeStamp  OPTIONAL,
 *     potConfEndInfo            [19] TimeStamp  OPTIONAL,
 *     recurrenceInfo            [20] RecurrenceInfo  OPTIONAL,
 *     confControllerIDs        [21] SET OF PartyIdentity     OPTIONAL,
 *     mediamodification        [23] MediaModification OPTIONAL,
 *     bearerModifyPartyID        [24] ConfPartyInformation OPTIONAL,
 *     listOfWaitConferees        [25] SET OF ConfPartyInformation OPTIONAL,
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
     * @summary `hi2confDomainId`.
     * @public
     * @readonly
     */
    readonly hi2confDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `partyInformation`.
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyIdentity[]>;
    /**
     * @summary `national_Parameters`.
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `networkIdentifier`.
     * @public
     * @readonly
     */
    readonly networkIdentifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `confEvent`.
     * @public
     * @readonly
     */
    readonly confEvent: ConfEvent;
    /**
     * @summary `correlation`.
     * @public
     * @readonly
     */
    readonly correlation: OPTIONAL<ConfCorrelation>;
    /**
     * @summary `confID`.
     * @public
     * @readonly
     */
    readonly confID: OPTIONAL<IMSIdentity>;
    /**
     * @summary `tempConfID`.
     * @public
     * @readonly
     */
    readonly tempConfID: OPTIONAL<IMSIdentity>;
    /**
     * @summary `listOfPotConferees`.
     * @public
     * @readonly
     */
    readonly listOfPotConferees: OPTIONAL<PartyIdentity[]>;
    /**
     * @summary `listOfConferees`.
     * @public
     * @readonly
     */
    readonly listOfConferees: OPTIONAL<ConfPartyInformation[]>;
    /**
     * @summary `joinPartyID`.
     * @public
     * @readonly
     */
    readonly joinPartyID: OPTIONAL<ConfPartyInformation>;
    /**
     * @summary `leavePartyID`.
     * @public
     * @readonly
     */
    readonly leavePartyID: OPTIONAL<ConfPartyInformation>;
    /**
     * @summary `listOfBearerAffectedParties`.
     * @public
     * @readonly
     */
    readonly listOfBearerAffectedParties: OPTIONAL<ConfPartyInformation[]>;
    /**
     * @summary `confEventInitiator`.
     * @public
     * @readonly
     */
    readonly confEventInitiator: OPTIONAL<ConfEventInitiator>;
    /**
     * @summary `confEventFailureReason`.
     * @public
     * @readonly
     */
    readonly confEventFailureReason: OPTIONAL<ConfEventFailureReason>;
    /**
     * @summary `confEndReason`.
     * @public
     * @readonly
     */
    readonly confEndReason: OPTIONAL<Reason>;
    /**
     * @summary `potConfStartInfo`.
     * @public
     * @readonly
     */
    readonly potConfStartInfo: OPTIONAL<TimeStamp>;
    /**
     * @summary `potConfEndInfo`.
     * @public
     * @readonly
     */
    readonly potConfEndInfo: OPTIONAL<TimeStamp>;
    /**
     * @summary `recurrenceInfo`.
     * @public
     * @readonly
     */
    readonly recurrenceInfo: OPTIONAL<RecurrenceInfo>;
    /**
     * @summary `confControllerIDs`.
     * @public
     * @readonly
     */
    readonly confControllerIDs: OPTIONAL<PartyIdentity[]>;
    /**
     * @summary `mediamodification`.
     * @public
     * @readonly
     */
    readonly mediamodification: OPTIONAL<MediaModification>;
    /**
     * @summary `bearerModifyPartyID`.
     * @public
     * @readonly
     */
    readonly bearerModifyPartyID: OPTIONAL<ConfPartyInformation>;
    /**
     * @summary `listOfWaitConferees`.
     * @public
     * @readonly
     */
    readonly listOfWaitConferees: OPTIONAL<ConfPartyInformation[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi2confDomainId: OBJECT_IDENTIFIER,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        timeStamp: TimeStamp,
        partyInformation: OPTIONAL<PartyIdentity[]>,
        national_Parameters: OPTIONAL<National_Parameters>,
        networkIdentifier: OPTIONAL<Network_Identifier>,
        confEvent: ConfEvent,
        correlation: OPTIONAL<ConfCorrelation>,
        confID: OPTIONAL<IMSIdentity>,
        tempConfID: OPTIONAL<IMSIdentity>,
        listOfPotConferees: OPTIONAL<PartyIdentity[]>,
        listOfConferees: OPTIONAL<ConfPartyInformation[]>,
        joinPartyID: OPTIONAL<ConfPartyInformation>,
        leavePartyID: OPTIONAL<ConfPartyInformation>,
        listOfBearerAffectedParties: OPTIONAL<ConfPartyInformation[]>,
        confEventInitiator: OPTIONAL<ConfEventInitiator>,
        confEventFailureReason: OPTIONAL<ConfEventFailureReason>,
        confEndReason: OPTIONAL<Reason>,
        potConfStartInfo: OPTIONAL<TimeStamp>,
        potConfEndInfo: OPTIONAL<TimeStamp>,
        recurrenceInfo: OPTIONAL<RecurrenceInfo>,
        confControllerIDs: OPTIONAL<PartyIdentity[]>,
        mediamodification: OPTIONAL<MediaModification>,
        bearerModifyPartyID: OPTIONAL<ConfPartyInformation>,
        listOfWaitConferees: OPTIONAL<ConfPartyInformation[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi2confDomainId = hi2confDomainId;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.timeStamp = timeStamp;
        this.partyInformation = partyInformation;
        this.national_Parameters = national_Parameters;
        this.networkIdentifier = networkIdentifier;
        this.confEvent = confEvent;
        this.correlation = correlation;
        this.confID = confID;
        this.tempConfID = tempConfID;
        this.listOfPotConferees = listOfPotConferees;
        this.listOfConferees = listOfConferees;
        this.joinPartyID = joinPartyID;
        this.leavePartyID = leavePartyID;
        this.listOfBearerAffectedParties = listOfBearerAffectedParties;
        this.confEventInitiator = confEventInitiator;
        this.confEventFailureReason = confEventFailureReason;
        this.confEndReason = confEndReason;
        this.potConfStartInfo = potConfStartInfo;
        this.potConfEndInfo = potConfEndInfo;
        this.recurrenceInfo = recurrenceInfo;
        this.confControllerIDs = confControllerIDs;
        this.mediamodification = mediamodification;
        this.bearerModifyPartyID = bearerModifyPartyID;
        this.listOfWaitConferees = listOfWaitConferees;
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
        return new IRI_Parameters(_o.hi2confDomainId, _o.lawfulInterceptionIdentifier, _o.timeStamp, _o.partyInformation, _o.national_Parameters, _o.networkIdentifier, _o.confEvent, _o.correlation, _o.confID, _o.tempConfID, _o.listOfPotConferees, _o.listOfConferees, _o.joinPartyID, _o.leavePartyID, _o.listOfBearerAffectedParties, _o.confEventInitiator, _o.confEventFailureReason, _o.confEndReason, _o.potConfStartInfo, _o.potConfEndInfo, _o.recurrenceInfo, _o.confControllerIDs, _o.mediamodification, _o.bearerModifyPartyID, _o.listOfWaitConferees, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `confEvent`
         * @public
         * @static
         */

    public static _enum_for_confEvent = _enum_for_ConfEvent;        /**
         * @summary The enum used as the type of the component `mediamodification`
         * @public
         * @static
         */

    public static _enum_for_mediamodification = _enum_for_MediaModification;
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
    new $.ComponentSpec("hi2confDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("partyInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("networkIdentifier", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("confEvent", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("correlation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("confID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("tempConfID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("listOfPotConferees", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("listOfConferees", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("joinPartyID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("leavePartyID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("listOfBearerAffectedParties", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("confEventInitiator", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("confEventFailureReason", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("confEndReason", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("potConfStartInfo", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("potConfEndInfo", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("recurrenceInfo", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("confControllerIDs", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("mediamodification", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("bearerModifyPartyID", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("listOfWaitConferees", true, $.hasTag(_TagClass.context, 25))
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
    let hi2confDomainId!: OBJECT_IDENTIFIER;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let timeStamp!: TimeStamp;
    let partyInformation: OPTIONAL<PartyIdentity[]>;
    let national_Parameters: OPTIONAL<National_Parameters>;
    let networkIdentifier: OPTIONAL<Network_Identifier>;
    let confEvent!: ConfEvent;
    let correlation: OPTIONAL<ConfCorrelation>;
    let confID: OPTIONAL<IMSIdentity>;
    let tempConfID: OPTIONAL<IMSIdentity>;
    let listOfPotConferees: OPTIONAL<PartyIdentity[]>;
    let listOfConferees: OPTIONAL<ConfPartyInformation[]>;
    let joinPartyID: OPTIONAL<ConfPartyInformation>;
    let leavePartyID: OPTIONAL<ConfPartyInformation>;
    let listOfBearerAffectedParties: OPTIONAL<ConfPartyInformation[]>;
    let confEventInitiator: OPTIONAL<ConfEventInitiator>;
    let confEventFailureReason: OPTIONAL<ConfEventFailureReason>;
    let confEndReason: OPTIONAL<Reason>;
    let potConfStartInfo: OPTIONAL<TimeStamp>;
    let potConfEndInfo: OPTIONAL<TimeStamp>;
    let recurrenceInfo: OPTIONAL<RecurrenceInfo>;
    let confControllerIDs: OPTIONAL<PartyIdentity[]>;
    let mediamodification: OPTIONAL<MediaModification>;
    let bearerModifyPartyID: OPTIONAL<ConfPartyInformation>;
    let listOfWaitConferees: OPTIONAL<ConfPartyInformation[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2confDomainId": (_el: _Element): void => { hi2confDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "partyInformation": (_el: _Element): void => { partyInformation = $._decode_implicit<PartyIdentity[]>(() => $._decodeSetOf<PartyIdentity>(() => _decode_PartyIdentity))(_el); },
        "national-Parameters": (_el: _Element): void => { national_Parameters = $._decode_implicit<National_Parameters>(() => _decode_National_Parameters)(_el); },
        "networkIdentifier": (_el: _Element): void => { networkIdentifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "confEvent": (_el: _Element): void => { confEvent = $._decode_implicit<ConfEvent>(() => _decode_ConfEvent)(_el); },
        "correlation": (_el: _Element): void => { correlation = $._decode_explicit<ConfCorrelation>(() => _decode_ConfCorrelation)(_el); },
        "confID": (_el: _Element): void => { confID = $._decode_implicit<IMSIdentity>(() => _decode_IMSIdentity)(_el); },
        "tempConfID": (_el: _Element): void => { tempConfID = $._decode_implicit<IMSIdentity>(() => _decode_IMSIdentity)(_el); },
        "listOfPotConferees": (_el: _Element): void => { listOfPotConferees = $._decode_implicit<PartyIdentity[]>(() => $._decodeSetOf<PartyIdentity>(() => _decode_PartyIdentity))(_el); },
        "listOfConferees": (_el: _Element): void => { listOfConferees = $._decode_implicit<ConfPartyInformation[]>(() => $._decodeSetOf<ConfPartyInformation>(() => _decode_ConfPartyInformation))(_el); },
        "joinPartyID": (_el: _Element): void => { joinPartyID = $._decode_implicit<ConfPartyInformation>(() => _decode_ConfPartyInformation)(_el); },
        "leavePartyID": (_el: _Element): void => { leavePartyID = $._decode_implicit<ConfPartyInformation>(() => _decode_ConfPartyInformation)(_el); },
        "listOfBearerAffectedParties": (_el: _Element): void => { listOfBearerAffectedParties = $._decode_implicit<ConfPartyInformation[]>(() => $._decodeSetOf<ConfPartyInformation>(() => _decode_ConfPartyInformation))(_el); },
        "confEventInitiator": (_el: _Element): void => { confEventInitiator = $._decode_explicit<ConfEventInitiator>(() => _decode_ConfEventInitiator)(_el); },
        "confEventFailureReason": (_el: _Element): void => { confEventFailureReason = $._decode_explicit<ConfEventFailureReason>(() => _decode_ConfEventFailureReason)(_el); },
        "confEndReason": (_el: _Element): void => { confEndReason = $._decode_implicit<Reason>(() => _decode_Reason)(_el); },
        "potConfStartInfo": (_el: _Element): void => { potConfStartInfo = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "potConfEndInfo": (_el: _Element): void => { potConfEndInfo = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "recurrenceInfo": (_el: _Element): void => { recurrenceInfo = $._decode_implicit<RecurrenceInfo>(() => _decode_RecurrenceInfo)(_el); },
        "confControllerIDs": (_el: _Element): void => { confControllerIDs = $._decode_implicit<PartyIdentity[]>(() => $._decodeSetOf<PartyIdentity>(() => _decode_PartyIdentity))(_el); },
        "mediamodification": (_el: _Element): void => { mediamodification = $._decode_implicit<MediaModification>(() => _decode_MediaModification)(_el); },
        "bearerModifyPartyID": (_el: _Element): void => { bearerModifyPartyID = $._decode_implicit<ConfPartyInformation>(() => _decode_ConfPartyInformation)(_el); },
        "listOfWaitConferees": (_el: _Element): void => { listOfWaitConferees = $._decode_implicit<ConfPartyInformation[]>(() => $._decodeSetOf<ConfPartyInformation>(() => _decode_ConfPartyInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters(
        hi2confDomainId,
        lawfulInterceptionIdentifier,
        timeStamp,
        partyInformation,
        national_Parameters,
        networkIdentifier,
        confEvent,
        correlation,
        confID,
        tempConfID,
        listOfPotConferees,
        listOfConferees,
        joinPartyID,
        leavePartyID,
        listOfBearerAffectedParties,
        confEventInitiator,
        confEventFailureReason,
        confEndReason,
        potConfStartInfo,
        potConfEndInfo,
        recurrenceInfo,
        confControllerIDs,
        mediamodification,
        bearerModifyPartyID,
        listOfWaitConferees,
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
    const _components: _Element[] = new Array(25 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2confDomainId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.partyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<PartyIdentity>(() => _encode_PartyIdentity, $.BER), $.BER)(value.partyInformation, $.BER);
    }
    if (value.national_Parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER);
    }
    if (value.networkIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Network_Identifier, $.BER)(value.networkIdentifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_ConfEvent, $.BER)(value.confEvent, $.BER);
    if (value.correlation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_ConfCorrelation, $.BER)(value.correlation, $.BER);
    }
    if (value.confID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_IMSIdentity, $.BER)(value.confID, $.BER);
    }
    if (value.tempConfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_IMSIdentity, $.BER)(value.tempConfID, $.BER);
    }
    if (value.listOfPotConferees !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSetOf<PartyIdentity>(() => _encode_PartyIdentity, $.BER), $.BER)(value.listOfPotConferees, $.BER);
    }
    if (value.listOfConferees !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSetOf<ConfPartyInformation>(() => _encode_ConfPartyInformation, $.BER), $.BER)(value.listOfConferees, $.BER);
    }
    if (value.joinPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ConfPartyInformation, $.BER)(value.joinPartyID, $.BER);
    }
    if (value.leavePartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ConfPartyInformation, $.BER)(value.leavePartyID, $.BER);
    }
    if (value.listOfBearerAffectedParties !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSetOf<ConfPartyInformation>(() => _encode_ConfPartyInformation, $.BER), $.BER)(value.listOfBearerAffectedParties, $.BER);
    }
    if (value.confEventInitiator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 15, () => _encode_ConfEventInitiator, $.BER)(value.confEventInitiator, $.BER);
    }
    if (value.confEventFailureReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_ConfEventFailureReason, $.BER)(value.confEventFailureReason, $.BER);
    }
    if (value.confEndReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_Reason, $.BER)(value.confEndReason, $.BER);
    }
    if (value.potConfStartInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 18, () => _encode_TimeStamp, $.BER)(value.potConfStartInfo, $.BER);
    }
    if (value.potConfEndInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 19, () => _encode_TimeStamp, $.BER)(value.potConfEndInfo, $.BER);
    }
    if (value.recurrenceInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_RecurrenceInfo, $.BER)(value.recurrenceInfo, $.BER);
    }
    if (value.confControllerIDs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSetOf<PartyIdentity>(() => _encode_PartyIdentity, $.BER), $.BER)(value.confControllerIDs, $.BER);
    }
    if (value.mediamodification !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_MediaModification, $.BER)(value.mediamodification, $.BER);
    }
    if (value.bearerModifyPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ConfPartyInformation, $.BER)(value.bearerModifyPartyID, $.BER);
    }
    if (value.listOfWaitConferees !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSetOf<ConfPartyInformation>(() => _encode_ConfPartyInformation, $.BER), $.BER)(value.listOfWaitConferees, $.BER);
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
