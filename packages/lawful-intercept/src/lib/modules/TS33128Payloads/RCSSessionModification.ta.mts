/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
import { RCSConversationID, _decode_RCSConversationID, _encode_RCSConversationID } from "../TS33128Payloads/RCSConversationID.ta.mjs";
// export { RCSConversationID, _decode_RCSConversationID, _encode_RCSConversationID } from "../TS33128Payloads/RCSConversationID.ta.mjs";
import { RCSContributionID, _decode_RCSContributionID, _encode_RCSContributionID } from "../TS33128Payloads/RCSContributionID.ta.mjs";
// export { RCSContributionID, _decode_RCSContributionID, _encode_RCSContributionID } from "../TS33128Payloads/RCSContributionID.ta.mjs";
import { RCSSessionType, _decode_RCSSessionType, _encode_RCSSessionType, _enum_for_RCSSessionType } from "../TS33128Payloads/RCSSessionType.ta.mjs";
// export { RCSSessionType, _enum_for_RCSSessionType, RCSSessionType_largeMessageStandalone /* IMPORTED_LONG_ENUMERATION_ITEM */, largeMessageStandalone /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionType_oneTo1Chat /* IMPORTED_LONG_ENUMERATION_ITEM */, oneTo1Chat /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionType, _encode_RCSSessionType } from "../TS33128Payloads/RCSSessionType.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { RCSSessionEndpoints, _decode_RCSSessionEndpoints, _encode_RCSSessionEndpoints, _enum_for_RCSSessionEndpoints } from "../TS33128Payloads/RCSSessionEndpoints.ta.mjs";
// export { RCSSessionEndpoints, _enum_for_RCSSessionEndpoints, RCSSessionEndpoints_remoteOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionEndpoints_localOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, localOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionEndpoints_localAndRemote /* IMPORTED_LONG_ENUMERATION_ITEM */, localAndRemote /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionEndpoints, _encode_RCSSessionEndpoints } from "../TS33128Payloads/RCSSessionEndpoints.ta.mjs";
import { RCSSIPSessionMessage, _decode_RCSSIPSessionMessage, _encode_RCSSIPSessionMessage } from "../TS33128Payloads/RCSSIPSessionMessage.ta.mjs";
// export { RCSSIPSessionMessage, _decode_RCSSIPSessionMessage, _encode_RCSSIPSessionMessage } from "../TS33128Payloads/RCSSIPSessionMessage.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary RCSSessionModification
 * @description
 * 
 * The IRI-POI in the RCS Server shall generate an RCSSessionModification record
 * when the IRI-POI in the RCS Server detects any of the following:
 *
 * - A request is sent to request the next leg of a SIP Session or a response is
 *   received establishing a SIP Session for the transfer of a Large Message
 *   Mode CPM Standalone message or a CPM 1-to-1 Chat Session.
 *
 * - A previously established SIP session for the transfer of a Large Message
 *   Mode CPM Standalone message to or from a target has been modified (see
 *   clause 7.13.3.4.3.2).
 *
 * - A CPM 1-to-1 Chat Session established for the target's communications has
 *   been modified (see clause 7.13.3.4.3.3).
 *
 * Table 7.13.4-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionModification ::= SEQUENCE
 * {
 *     rCSTargetIdentities     [1] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     conversationID          [2] RCSConversationID,
 *     contributionID          [3] RCSContributionID,
 *     inReplyToContributionID [4] RCSContributionID OPTIONAL,
 *     sessionReplaces         [5] RCSContributionID OPTIONAL,
 *     rCSSessionType          [6] RCSSessionType,
 *     sessionDirection        [7] Direction,
 *     sessionEndpoints        [8] RCSSessionEndpoints,
 *     rCSSIPSessionMessage    [9] RCSSIPSessionMessage,
 *     location                [10] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RCSSessionModification {
    /**
     * @summary `rCSTargetIdentities`.
     * @description
     *
     * RCS target identities. All identities associated to the target known at
     * the POI shall be included.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly rCSTargetIdentities: RCSIdentity[];
    /**
     * @summary `conversationID`.
     * @description
     *
     * Set to the value of the Conversion-ID header in the original SIP INVITE
     * request.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly conversationID: RCSConversationID;
    /**
     * @summary `contributionID`.
     * @description
     *
     * Set to the value of the Contribution-ID header in the original SIP INVITE
     * request.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
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
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly inReplyToContributionID: OPTIONAL<RCSContributionID>;
    /**
     * @summary `sessionReplaces`.
     * @description
     *
     * The Contribution-ID present in the Session-Replaces header of the SIP
     * INVITE identifying the Contribution-ID of the CPM 1-to-1 Chat Session
     * that is being replaced to (see OMA-TS-CPM_Conversation_Function [109]
     * clause 5.3). Shall be included if the Session-Replaces header field is
     * present for the message being reported.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly sessionReplaces: OPTIONAL<RCSContributionID>;
    /**
     * @summary `rCSSessionType`.
     * @description
     *
     * Indicates the type of RCSSession.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly rCSSessionType: RCSSessionType;
    /**
     * @summary `sessionDirection`.
     * @description
     *
     * Shall be provided to identify the direction of the session relative to
     * the target: "toTarget" or "fromTarget".
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly sessionDirection: Direction;
    /**
     * @summary `sessionEndpoints`.
     * @description
     *
     * Indicates whether the session continues through the server or is
     * terminated at the server.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly sessionEndpoints: RCSSessionEndpoints;
    /**
     * @summary `rCSSIPSessionMessage`.
     * @description
     *
     * Shall contain the SIP message that triggered the xIRI, an indication of
     * whether the establishment or removal of a leg has been attempted or
     * completed.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
     *
     * @public
     * @readonly
     */
    readonly rCSSIPSessionMessage: RCSSIPSessionMessage;
    /**
     * @summary `location`.
     * @description
     *
     * Shall include the target’s location when reporting of the target’s
     * location information is authorized and available.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.3.1.
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
        rCSTargetIdentities: RCSIdentity[],
        conversationID: RCSConversationID,
        contributionID: RCSContributionID,
        inReplyToContributionID: OPTIONAL<RCSContributionID>,
        sessionReplaces: OPTIONAL<RCSContributionID>,
        rCSSessionType: RCSSessionType,
        sessionDirection: Direction,
        sessionEndpoints: RCSSessionEndpoints,
        rCSSIPSessionMessage: RCSSIPSessionMessage,
        location?: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.rCSTargetIdentities = rCSTargetIdentities;
        this.conversationID = conversationID;
        this.contributionID = contributionID;
        this.inReplyToContributionID = inReplyToContributionID;
        this.sessionReplaces = sessionReplaces;
        this.rCSSessionType = rCSSessionType;
        this.sessionDirection = sessionDirection;
        this.sessionEndpoints = sessionEndpoints;
        this.rCSSIPSessionMessage = rCSSIPSessionMessage;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RCSSessionModification
     * @description
     * 
     * This takes an `object` and converts it to a `RCSSessionModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSSessionModification`.
     * @returns {RCSSessionModification}
     */
    public static _from_object (_o: { [_K in keyof (RCSSessionModification)]: (RCSSessionModification)[_K] }): RCSSessionModification {
        return new RCSSessionModification(_o.rCSTargetIdentities, _o.conversationID, _o.contributionID, _o.inReplyToContributionID, _o.sessionReplaces, _o.rCSSessionType, _o.sessionDirection, _o.sessionEndpoints, _o.rCSSIPSessionMessage, _o.location, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `rCSSessionType`
         * @public
         * @static
         */

    public static _enum_for_rCSSessionType = _enum_for_RCSSessionType;        /**
         * @summary The enum used as the type of the component `sessionDirection`
         * @public
         * @static
         */

    public static _enum_for_sessionDirection = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `sessionEndpoints`
         * @public
         * @static
         */

    public static _enum_for_sessionEndpoints = _enum_for_RCSSessionEndpoints;
}

/**
 * @summary The Leading Root Component Types of RCSSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSSessionModification: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSTargetIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("conversationID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("contributionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("inReplyToContributionID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sessionReplaces", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rCSSessionType", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sessionDirection", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sessionEndpoints", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("rCSSIPSessionMessage", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of RCSSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSSessionModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSSessionModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSSessionModification: $.ASN1Decoder<RCSSessionModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionModification (el: _Element): RCSSessionModification {
    if (!_cached_decoder_for_RCSSessionModification) { _cached_decoder_for_RCSSessionModification = function (el: _Element): RCSSessionModification {
    let rCSTargetIdentities!: RCSIdentity[];
    let conversationID!: RCSConversationID;
    let contributionID!: RCSContributionID;
    let inReplyToContributionID: OPTIONAL<RCSContributionID>;
    let sessionReplaces: OPTIONAL<RCSContributionID>;
    let rCSSessionType!: RCSSessionType;
    let sessionDirection!: Direction;
    let sessionEndpoints!: RCSSessionEndpoints;
    let rCSSIPSessionMessage!: RCSSIPSessionMessage;
    let location: OPTIONAL<Location>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => {
            rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el);
            if (rCSTargetIdentities.length < 1) {
                throw new ASN1SizeError("RCSSessionModification.rCSTargetIdentities violates SIZE constraint");
            }
        },
        "conversationID": (_el: _Element): void => { conversationID = $._decode_implicit<RCSConversationID>(() => _decode_RCSConversationID)(_el); },
        "contributionID": (_el: _Element): void => { contributionID = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "inReplyToContributionID": (_el: _Element): void => { inReplyToContributionID = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "sessionReplaces": (_el: _Element): void => { sessionReplaces = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "rCSSessionType": (_el: _Element): void => { rCSSessionType = $._decode_implicit<RCSSessionType>(() => _decode_RCSSessionType)(_el); },
        "sessionDirection": (_el: _Element): void => { sessionDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "sessionEndpoints": (_el: _Element): void => { sessionEndpoints = $._decode_implicit<RCSSessionEndpoints>(() => _decode_RCSSessionEndpoints)(_el); },
        "rCSSIPSessionMessage": (_el: _Element): void => { rCSSIPSessionMessage = $._decode_implicit<RCSSIPSessionMessage>(() => _decode_RCSSIPSessionMessage)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCSSessionModification,
        _extension_additions_list_spec_for_RCSSessionModification,
        _root_component_type_list_2_spec_for_RCSSessionModification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RCSSessionModification(
        rCSTargetIdentities,
        conversationID,
        contributionID,
        inReplyToContributionID,
        sessionReplaces,
        rCSSessionType,
        sessionDirection,
        sessionEndpoints,
        rCSSIPSessionMessage,
        location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RCSSessionModification(el);
}

let _cached_encoder_for_RCSSessionModification: $.ASN1Encoder<RCSSessionModification> | null = null;

/**
 * @summary Encodes a(n) RCSSessionModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionModification, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionModification (value: RCSSessionModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionModification) { _cached_encoder_for_RCSSessionModification = function (value: RCSSessionModification, elGetter: $.ASN1Encoder<RCSSessionModification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RCSConversationID, $.BER)(value.conversationID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RCSContributionID, $.BER)(value.contributionID, $.BER);
    if (value.inReplyToContributionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RCSContributionID, $.BER)(value.inReplyToContributionID, $.BER);
    }
    if (value.sessionReplaces !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RCSContributionID, $.BER)(value.sessionReplaces, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RCSSessionType, $.BER)(value.rCSSessionType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Direction, $.BER)(value.sessionDirection, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_RCSSessionEndpoints, $.BER)(value.sessionEndpoints, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_RCSSIPSessionMessage, $.BER)(value.rCSSIPSessionMessage, $.BER);
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RCSSessionModification(value, elGetter);
}


/* eslint-enable */
