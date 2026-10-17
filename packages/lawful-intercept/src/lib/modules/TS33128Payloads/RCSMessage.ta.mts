/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
import { RCSGroupChatSessionID, _decode_RCSGroupChatSessionID, _encode_RCSGroupChatSessionID } from "../TS33128Payloads/RCSGroupChatSessionID.ta.mjs";
// export { RCSGroupChatSessionID, _decode_RCSGroupChatSessionID, _encode_RCSGroupChatSessionID } from "../TS33128Payloads/RCSGroupChatSessionID.ta.mjs";
import { RCSDestinations, _decode_RCSDestinations, _encode_RCSDestinations } from "../TS33128Payloads/RCSDestinations.ta.mjs";
// export { RCSDestinations, _decode_RCSDestinations, _encode_RCSDestinations } from "../TS33128Payloads/RCSDestinations.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { RCSMessageType, _decode_RCSMessageType, _encode_RCSMessageType, _enum_for_RCSMessageType } from "../TS33128Payloads/RCSMessageType.ta.mjs";
// export { RCSMessageType, _enum_for_RCSMessageType, RCSMessageType_messageWithUserContent /* IMPORTED_LONG_ENUMERATION_ITEM */, messageWithUserContent /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSMessageType_fileTransferMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, fileTransferMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSMessageType_geoLocationPUSHMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, geoLocationPUSHMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSMessageType_iMDNNotification /* IMPORTED_LONG_ENUMERATION_ITEM */, iMDNNotification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSMessageType, _encode_RCSMessageType } from "../TS33128Payloads/RCSMessageType.ta.mjs";
import { RCSConversationID, _decode_RCSConversationID, _encode_RCSConversationID } from "../TS33128Payloads/RCSConversationID.ta.mjs";
// export { RCSConversationID, _decode_RCSConversationID, _encode_RCSConversationID } from "../TS33128Payloads/RCSConversationID.ta.mjs";
import { RCSContributionID, _decode_RCSContributionID, _encode_RCSContributionID } from "../TS33128Payloads/RCSContributionID.ta.mjs";
// export { RCSContributionID, _decode_RCSContributionID, _encode_RCSContributionID } from "../TS33128Payloads/RCSContributionID.ta.mjs";
import { IMDNMessageID, _decode_IMDNMessageID, _encode_IMDNMessageID } from "../TS33128Payloads/IMDNMessageID.ta.mjs";
// export { IMDNMessageID, _decode_IMDNMessageID, _encode_IMDNMessageID } from "../TS33128Payloads/IMDNMessageID.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { RCSPayload, _decode_RCSPayload, _encode_RCSPayload } from "../TS33128Payloads/RCSPayload.ta.mjs";
// export { RCSPayload, _decode_RCSPayload, _encode_RCSPayload } from "../TS33128Payloads/RCSPayload.ta.mjs";


/**
 * @summary RCSMessage
 * @description
 * 
 * The IRI-POI present in the RCS Server shall generate an xIRI containing an
 * RCSMessage record when the IRI-POI present in the RCS Server detects that an
 * RCS target has sent or received an RCS message. In this specification, an RCS
 * message refers to any message sent or received in the context of pager mode
 * standalone messaging, large message mode messaging, 1-to-1 chat or group
 * chat. This xIRI is also generated when the target sends or receives a
 * delivery notification or display notification.
 *
 * Accordingly, the IRI-POI in the RCS Server shall generate the RCSMessage xIRI
 * when it detects the following events:
 *
 * - The RCS Server receives a SIP MESSAGE from the target or destined to the
 *   target, determined by the direction attribute present in the CPM Header,
 *   and:
 *
 * - The "Contact" or "Accept-Contact" header includes a service feature tag
 *   among the feature tags listed in GSMA RCC.07 [78] clause 2.4.4.1 table 3.
 *
 * - The SIP "Content-Type" header is "message/cpim".
 *
 * - The RCS Server receives an MSRP packet from the target or destined to the
 *   target and:
 *
 * - The content of the MSRP packet is a CPIM (Common Presence and Instant
 *   Messaging) object (see definition in IETF RFC 3862 [80]).
 *
 * Table 7.13.4-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.13.3.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSMessage ::= SEQUENCE
 * {
 *     rCSTargetIdentities     [1] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     groupChatSessionID      [2] RCSGroupChatSessionID OPTIONAL,
 *     originatingIdentity     [3] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     destinationIdentities   [4] RCSDestinations,
 *     direction               [5] Direction,
 *     messageType             [6] RCSMessageType,
 *     conversationID          [7] RCSConversationID,
 *     contributionID          [8] RCSContributionID,
 *     inReplyToContributionID [9] RCSContributionID OPTIONAL,
 *     messageID               [10] IMDNMessageID OPTIONAL,
 *     location                [11] Location OPTIONAL,
 *     messagePayload          [12] RCSPayload
 * }
 * ```
 * 
 * @class
 */
export
class RCSMessage {
    /**
     * @summary `rCSTargetIdentities`.
     * @description
     *
     * Provide RCS target identities. All identities associated to the target
     * known at the POI shall be included.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly rCSTargetIdentities: RCSIdentity[];
    /**
     * @summary `groupChatSessionID`.
     * @description
     *
     * Group chat session URI. Shall be present if the message is part of a CPM
     * Group Chat. See OMA-TS-CPM_System_Description-V2 [82] clause 5.1.1.5.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly groupChatSessionID: OPTIONAL<RCSGroupChatSessionID>;
    /**
     * @summary `originatingIdentity`.
     * @description
     *
     * Shall identify the originating party.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly originatingIdentity: RCSIdentity[];
    /**
     * @summary `destinationIdentities`.
     * @description
     *
     * Shall identify the destination(s) of the message.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly destinationIdentities: RCSDestinations;
    /**
     * @summary `direction`.
     * @description
     *
     * Shall be provided to identify the direction of the message relative to
     * the target: "toTarget" or "fromTarget".
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly direction: Direction;
    /**
     * @summary `messageType`.
     * @description
     *
     * Identifies the type of information being transmitted by the RCS Message.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly messageType: RCSMessageType;
    /**
     * @summary `conversationID`.
     * @description
     *
     * CPM Conversation Identity associated with the CPM Standalone Message, CPM
     * File Transfer, or CPM Session. See OMA-TS-CPM_Conversation_Function [109]
     * clause 5.3.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly conversationID: RCSConversationID;
    /**
     * @summary `contributionID`.
     * @description
     *
     * CPM Contribution Identity of the individual CPM Standalone Message, CPM
     * File Transfer, or CPM Session (see OMA-TS-CPM_Conversation_Function [109]
     * clause 5.3).
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly contributionID: RCSContributionID;
    /**
     * @summary `inReplyToContributionID`.
     * @description
     *
     * InReplyTo-Contribution-ID identifying the Contribution-ID of the CPM
     * Standalone Message, CPM File Transfer or CPM Session that is being
     * replied to (see OMA-TS-CPM_Conversation_Function [109] clause 5.3). Shall
     * be included if the InReplyTo-Contribution-ID header field is present for
     * the message being reported.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly inReplyToContributionID: OPTIONAL<RCSContributionID>;
    /**
     * @summary `messageID`.
     * @description
     *
     * IMDN Message-ID of the individual message (see RFC 5438 [81]). Shall be
     * included if present in the RCS message.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly messageID: OPTIONAL<IMDNMessageID>;
    /**
     * @summary `location`.
     * @description
     *
     * Shall include the target’s location when available according to the
     * location reporting type provisioned for the task.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `messagePayload`.
     * @description
     *
     * One of the following payload types (other payload types may be added in
     * future versions of the specification): - encapsulatedRCSPayload shall be
     * chosen when the RCS message does not contain any unauthorized
     * information.
     *
     * 3GPP TS 33.128, clause 7.13.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly messagePayload: RCSPayload;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        rCSTargetIdentities: RCSIdentity[],
        groupChatSessionID: OPTIONAL<RCSGroupChatSessionID>,
        originatingIdentity: RCSIdentity[],
        destinationIdentities: RCSDestinations,
        direction: Direction,
        messageType: RCSMessageType,
        conversationID: RCSConversationID,
        contributionID: RCSContributionID,
        inReplyToContributionID: OPTIONAL<RCSContributionID>,
        messageID: OPTIONAL<IMDNMessageID>,
        location: OPTIONAL<Location>,
        messagePayload: RCSPayload,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.rCSTargetIdentities = rCSTargetIdentities;
        this.groupChatSessionID = groupChatSessionID;
        this.originatingIdentity = originatingIdentity;
        this.destinationIdentities = destinationIdentities;
        this.direction = direction;
        this.messageType = messageType;
        this.conversationID = conversationID;
        this.contributionID = contributionID;
        this.inReplyToContributionID = inReplyToContributionID;
        this.messageID = messageID;
        this.location = location;
        this.messagePayload = messagePayload;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RCSMessage
     * @description
     * 
     * This takes an `object` and converts it to a `RCSMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSMessage`.
     * @returns {RCSMessage}
     */
    public static _from_object (_o: { [_K in keyof (RCSMessage)]: (RCSMessage)[_K] }): RCSMessage {
        return new RCSMessage(_o.rCSTargetIdentities, _o.groupChatSessionID, _o.originatingIdentity, _o.destinationIdentities, _o.direction, _o.messageType, _o.conversationID, _o.contributionID, _o.inReplyToContributionID, _o.messageID, _o.location, _o.messagePayload, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_RCSMessageType;
}

/**
 * @summary The Leading Root Component Types of RCSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSTargetIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("groupChatSessionID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originatingIdentity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationIdentities", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("messageType", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("conversationID", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("contributionID", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("inReplyToContributionID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("messagePayload", false, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of RCSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSMessage: $.ASN1Decoder<RCSMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSMessage (el: _Element): RCSMessage {
    if (!_cached_decoder_for_RCSMessage) { _cached_decoder_for_RCSMessage = function (el: _Element): RCSMessage {
    let rCSTargetIdentities!: RCSIdentity[];
    let groupChatSessionID: OPTIONAL<RCSGroupChatSessionID>;
    let originatingIdentity!: RCSIdentity[];
    let destinationIdentities!: RCSDestinations;
    let direction!: Direction;
    let messageType!: RCSMessageType;
    let conversationID!: RCSConversationID;
    let contributionID!: RCSContributionID;
    let inReplyToContributionID: OPTIONAL<RCSContributionID>;
    let messageID: OPTIONAL<IMDNMessageID>;
    let location: OPTIONAL<Location>;
    let messagePayload!: RCSPayload;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => {
            rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el);
            if (rCSTargetIdentities.length < 1) {
                throw new ASN1SizeError("RCSMessage.rCSTargetIdentities violates SIZE constraint");
            }
        },
        "groupChatSessionID": (_el: _Element): void => { groupChatSessionID = $._decode_implicit<RCSGroupChatSessionID>(() => _decode_RCSGroupChatSessionID)(_el); },
        "originatingIdentity": (_el: _Element): void => {
            originatingIdentity = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el);
            if (originatingIdentity.length < 1) {
                throw new ASN1SizeError("RCSMessage.originatingIdentity violates SIZE constraint");
            }
        },
        "destinationIdentities": (_el: _Element): void => { destinationIdentities = $._decode_implicit<RCSDestinations>(() => _decode_RCSDestinations)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "messageType": (_el: _Element): void => { messageType = $._decode_implicit<RCSMessageType>(() => _decode_RCSMessageType)(_el); },
        "conversationID": (_el: _Element): void => { conversationID = $._decode_implicit<RCSConversationID>(() => _decode_RCSConversationID)(_el); },
        "contributionID": (_el: _Element): void => { contributionID = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "inReplyToContributionID": (_el: _Element): void => { inReplyToContributionID = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<IMDNMessageID>(() => _decode_IMDNMessageID)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "messagePayload": (_el: _Element): void => { messagePayload = $._decode_explicit<RCSPayload>(() => _decode_RCSPayload)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCSMessage,
        _extension_additions_list_spec_for_RCSMessage,
        _root_component_type_list_2_spec_for_RCSMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RCSMessage(
        rCSTargetIdentities,
        groupChatSessionID,
        originatingIdentity,
        destinationIdentities,
        direction,
        messageType,
        conversationID,
        contributionID,
        inReplyToContributionID,
        messageID,
        location,
        messagePayload,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RCSMessage(el);
}

let _cached_encoder_for_RCSMessage: $.ASN1Encoder<RCSMessage> | null = null;

/**
 * @summary Encodes a(n) RCSMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSMessage, encoded as an ASN.1 Element.
 */
export
function _encode_RCSMessage (value: RCSMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSMessage) { _cached_encoder_for_RCSMessage = function (value: RCSMessage, elGetter: $.ASN1Encoder<RCSMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER);
    if (value.groupChatSessionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RCSGroupChatSessionID, $.BER)(value.groupChatSessionID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.originatingIdentity, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_RCSDestinations, $.BER)(value.destinationIdentities, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Direction, $.BER)(value.direction, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RCSMessageType, $.BER)(value.messageType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_RCSConversationID, $.BER)(value.conversationID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_RCSContributionID, $.BER)(value.contributionID, $.BER);
    if (value.inReplyToContributionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_RCSContributionID, $.BER)(value.inReplyToContributionID, $.BER);
    }
    if (value.messageID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_IMDNMessageID, $.BER)(value.messageID, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 12, () => _encode_RCSPayload, $.BER)(value.messagePayload, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RCSMessage(value, elGetter);
}


/* eslint-enable */
