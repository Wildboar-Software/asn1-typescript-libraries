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
import { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
import { RCSConversationID, _decode_RCSConversationID, _encode_RCSConversationID } from "../TS33128Payloads/RCSConversationID.ta.mjs";
// export { RCSConversationID, _decode_RCSConversationID, _encode_RCSConversationID } from "../TS33128Payloads/RCSConversationID.ta.mjs";
import { RCSContributionID, _decode_RCSContributionID, _encode_RCSContributionID } from "../TS33128Payloads/RCSContributionID.ta.mjs";
// export { RCSContributionID, _decode_RCSContributionID, _encode_RCSContributionID } from "../TS33128Payloads/RCSContributionID.ta.mjs";
import { RCSSessionType, _enum_for_RCSSessionType, RCSSessionType_largeMessageStandalone /* IMPORTED_LONG_ENUMERATION_ITEM */, largeMessageStandalone /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionType_oneTo1Chat /* IMPORTED_LONG_ENUMERATION_ITEM */, oneTo1Chat /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionType, _encode_RCSSessionType } from "../TS33128Payloads/RCSSessionType.ta.mjs";
// export { RCSSessionType, _enum_for_RCSSessionType, RCSSessionType_largeMessageStandalone /* IMPORTED_LONG_ENUMERATION_ITEM */, largeMessageStandalone /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionType_oneTo1Chat /* IMPORTED_LONG_ENUMERATION_ITEM */, oneTo1Chat /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionType, _encode_RCSSessionType } from "../TS33128Payloads/RCSSessionType.ta.mjs";
import { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { RCSSessionEndpoints, _enum_for_RCSSessionEndpoints, RCSSessionEndpoints_remoteOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionEndpoints_localOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, localOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionEndpoints_localAndRemote /* IMPORTED_LONG_ENUMERATION_ITEM */, localAndRemote /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionEndpoints, _encode_RCSSessionEndpoints } from "../TS33128Payloads/RCSSessionEndpoints.ta.mjs";
// export { RCSSessionEndpoints, _enum_for_RCSSessionEndpoints, RCSSessionEndpoints_remoteOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionEndpoints_localOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, localOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionEndpoints_localAndRemote /* IMPORTED_LONG_ENUMERATION_ITEM */, localAndRemote /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionEndpoints, _encode_RCSSessionEndpoints } from "../TS33128Payloads/RCSSessionEndpoints.ta.mjs";
import { RCSSIPSessionMessage, _decode_RCSSIPSessionMessage, _encode_RCSSIPSessionMessage } from "../TS33128Payloads/RCSSIPSessionMessage.ta.mjs";
// export { RCSSIPSessionMessage, _decode_RCSSIPSessionMessage, _encode_RCSSIPSessionMessage } from "../TS33128Payloads/RCSSIPSessionMessage.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary RCSSessionModification
 * @description
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
    constructor (
        /**
         * @summary `rCSTargetIdentities`.
         * @public
         * @readonly
         */
        readonly rCSTargetIdentities: RCSIdentity[],
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
         * @summary `sessionReplaces`.
         * @public
         * @readonly
         */
        readonly sessionReplaces: OPTIONAL<RCSContributionID>,
        /**
         * @summary `rCSSessionType`.
         * @public
         * @readonly
         */
        readonly rCSSessionType: RCSSessionType,
        /**
         * @summary `sessionDirection`.
         * @public
         * @readonly
         */
        readonly sessionDirection: Direction,
        /**
         * @summary `sessionEndpoints`.
         * @public
         * @readonly
         */
        readonly sessionEndpoints: RCSSessionEndpoints,
        /**
         * @summary `rCSSIPSessionMessage`.
         * @public
         * @readonly
         */
        readonly rCSSIPSessionMessage: RCSSIPSessionMessage,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>
    ) {}

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
        return new RCSSessionModification(_o.rCSTargetIdentities, _o.conversationID, _o.contributionID, _o.inReplyToContributionID, _o.sessionReplaces, _o.rCSSessionType, _o.sessionDirection, _o.sessionEndpoints, _o.rCSSIPSessionMessage, _o.location);
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
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => { rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el); },
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
        undefined,
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
        location
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RCSConversationID, $.BER)(value.conversationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RCSContributionID, $.BER)(value.contributionID, $.BER),
            /* IF_ABSENT  */ ((value.inReplyToContributionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RCSContributionID, $.BER)(value.inReplyToContributionID, $.BER)),
            /* IF_ABSENT  */ ((value.sessionReplaces === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RCSContributionID, $.BER)(value.sessionReplaces, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RCSSessionType, $.BER)(value.rCSSessionType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Direction, $.BER)(value.sessionDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_RCSSessionEndpoints, $.BER)(value.sessionEndpoints, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_RCSSIPSessionMessage, $.BER)(value.rCSSIPSessionMessage, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Location, $.BER)(value.location, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCSSessionModification(value, elGetter);
}


/* eslint-enable */
