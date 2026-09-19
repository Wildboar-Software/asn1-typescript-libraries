/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
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
    constructor (
        /**
         * @summary `rCSTargetIdentities`.
         * @public
         * @readonly
         */
        readonly rCSTargetIdentities: RCSIdentity[],
        /**
         * @summary `groupChatSessionID`.
         * @public
         * @readonly
         */
        readonly groupChatSessionID: OPTIONAL<RCSGroupChatSessionID>,
        /**
         * @summary `originatingIdentity`.
         * @public
         * @readonly
         */
        readonly originatingIdentity: RCSIdentity[],
        /**
         * @summary `destinationIdentities`.
         * @public
         * @readonly
         */
        readonly destinationIdentities: RCSDestinations,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: Direction,
        /**
         * @summary `messageType`.
         * @public
         * @readonly
         */
        readonly messageType: RCSMessageType,
        /**
         * @summary `conversationID`.
         * @public
         * @readonly
         */
        readonly conversationID: RCSConversationID,
        /**
         * @summary `contributionID`.
         * @public
         * @readonly
         */
        readonly contributionID: RCSContributionID,
        /**
         * @summary `inReplyToContributionID`.
         * @public
         * @readonly
         */
        readonly inReplyToContributionID: OPTIONAL<RCSContributionID>,
        /**
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: OPTIONAL<IMDNMessageID>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `messagePayload`.
         * @public
         * @readonly
         */
        readonly messagePayload: RCSPayload
    ) {}

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
        return new RCSMessage(_o.rCSTargetIdentities, _o.groupChatSessionID, _o.originatingIdentity, _o.destinationIdentities, _o.direction, _o.messageType, _o.conversationID, _o.contributionID, _o.inReplyToContributionID, _o.messageID, _o.location, _o.messagePayload);
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
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => { rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el); },
        "groupChatSessionID": (_el: _Element): void => { groupChatSessionID = $._decode_implicit<RCSGroupChatSessionID>(() => _decode_RCSGroupChatSessionID)(_el); },
        "originatingIdentity": (_el: _Element): void => { originatingIdentity = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el); },
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
        undefined,
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
        messagePayload
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER),
            /* IF_ABSENT  */ ((value.groupChatSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RCSGroupChatSessionID, $.BER)(value.groupChatSessionID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.originatingIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_RCSDestinations, $.BER)(value.destinationIdentities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Direction, $.BER)(value.direction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RCSMessageType, $.BER)(value.messageType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_RCSConversationID, $.BER)(value.conversationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_RCSContributionID, $.BER)(value.contributionID, $.BER),
            /* IF_ABSENT  */ ((value.inReplyToContributionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_RCSContributionID, $.BER)(value.inReplyToContributionID, $.BER)),
            /* IF_ABSENT  */ ((value.messageID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_IMDNMessageID, $.BER)(value.messageID, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 12, () => _encode_RCSPayload, $.BER)(value.messagePayload, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCSMessage(value, elGetter);
}


/* eslint-enable */
