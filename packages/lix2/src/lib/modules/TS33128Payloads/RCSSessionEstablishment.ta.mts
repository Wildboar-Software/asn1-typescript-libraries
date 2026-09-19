/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
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
import { RCSSIPSessionMessage, _decode_RCSSIPSessionMessage, _encode_RCSSIPSessionMessage } from "../TS33128Payloads/RCSSIPSessionMessage.ta.mjs";
// export { RCSSIPSessionMessage, _decode_RCSSIPSessionMessage, _encode_RCSSIPSessionMessage } from "../TS33128Payloads/RCSSIPSessionMessage.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary RCSSessionEstablishment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionEstablishment ::= SEQUENCE
 * {
 *     rCSTargetIdentities     [1] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     conversationID          [2] RCSConversationID,
 *     contributionID          [3] RCSContributionID,
 *     inReplyToContributionID [4] RCSContributionID OPTIONAL,
 *     sessionReplaces         [5] RCSContributionID OPTIONAL,
 *     rCSSessionType          [6] RCSSessionType,
 *     sessionDirection        [7] Direction,
 *     rCSSessionMessage       [8] RCSSIPSessionMessage,
 *     location                [9] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RCSSessionEstablishment {
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
         * @summary `rCSSessionMessage`.
         * @public
         * @readonly
         */
        readonly rCSSessionMessage: RCSSIPSessionMessage,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>
    ) {}

    /**
     * @summary Restructures an object into a RCSSessionEstablishment
     * @description
     * 
     * This takes an `object` and converts it to a `RCSSessionEstablishment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSSessionEstablishment`.
     * @returns {RCSSessionEstablishment}
     */
    public static _from_object (_o: { [_K in keyof (RCSSessionEstablishment)]: (RCSSessionEstablishment)[_K] }): RCSSessionEstablishment {
        return new RCSSessionEstablishment(_o.rCSTargetIdentities, _o.conversationID, _o.contributionID, _o.inReplyToContributionID, _o.sessionReplaces, _o.rCSSessionType, _o.sessionDirection, _o.rCSSessionMessage, _o.location);
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

    public static _enum_for_sessionDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of RCSSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSSessionEstablishment: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSTargetIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("conversationID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("contributionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("inReplyToContributionID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sessionReplaces", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rCSSessionType", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sessionDirection", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("rCSSessionMessage", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of RCSSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSSessionEstablishment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSSessionEstablishment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSSessionEstablishment: $.ASN1Decoder<RCSSessionEstablishment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionEstablishment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionEstablishment (el: _Element): RCSSessionEstablishment {
    if (!_cached_decoder_for_RCSSessionEstablishment) { _cached_decoder_for_RCSSessionEstablishment = function (el: _Element): RCSSessionEstablishment {
    let rCSTargetIdentities!: RCSIdentity[];
    let conversationID!: RCSConversationID;
    let contributionID!: RCSContributionID;
    let inReplyToContributionID: OPTIONAL<RCSContributionID>;
    let sessionReplaces: OPTIONAL<RCSContributionID>;
    let rCSSessionType!: RCSSessionType;
    let sessionDirection!: Direction;
    let rCSSessionMessage!: RCSSIPSessionMessage;
    let location: OPTIONAL<Location>;
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => { rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el); },
        "conversationID": (_el: _Element): void => { conversationID = $._decode_implicit<RCSConversationID>(() => _decode_RCSConversationID)(_el); },
        "contributionID": (_el: _Element): void => { contributionID = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "inReplyToContributionID": (_el: _Element): void => { inReplyToContributionID = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "sessionReplaces": (_el: _Element): void => { sessionReplaces = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "rCSSessionType": (_el: _Element): void => { rCSSessionType = $._decode_implicit<RCSSessionType>(() => _decode_RCSSessionType)(_el); },
        "sessionDirection": (_el: _Element): void => { sessionDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "rCSSessionMessage": (_el: _Element): void => { rCSSessionMessage = $._decode_implicit<RCSSIPSessionMessage>(() => _decode_RCSSIPSessionMessage)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCSSessionEstablishment,
        _extension_additions_list_spec_for_RCSSessionEstablishment,
        _root_component_type_list_2_spec_for_RCSSessionEstablishment,
        undefined,
    );
    return new RCSSessionEstablishment(
        rCSTargetIdentities,
        conversationID,
        contributionID,
        inReplyToContributionID,
        sessionReplaces,
        rCSSessionType,
        sessionDirection,
        rCSSessionMessage,
        location
    );
}; }
    return _cached_decoder_for_RCSSessionEstablishment(el);
}

let _cached_encoder_for_RCSSessionEstablishment: $.ASN1Encoder<RCSSessionEstablishment> | null = null;

/**
 * @summary Encodes a(n) RCSSessionEstablishment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionEstablishment, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionEstablishment (value: RCSSessionEstablishment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionEstablishment) { _cached_encoder_for_RCSSessionEstablishment = function (value: RCSSessionEstablishment, elGetter: $.ASN1Encoder<RCSSessionEstablishment>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RCSConversationID, $.BER)(value.conversationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RCSContributionID, $.BER)(value.contributionID, $.BER),
            /* IF_ABSENT  */ ((value.inReplyToContributionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RCSContributionID, $.BER)(value.inReplyToContributionID, $.BER)),
            /* IF_ABSENT  */ ((value.sessionReplaces === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RCSContributionID, $.BER)(value.sessionReplaces, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RCSSessionType, $.BER)(value.rCSSessionType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Direction, $.BER)(value.sessionDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_RCSSIPSessionMessage, $.BER)(value.rCSSessionMessage, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCSSessionEstablishment(value, elGetter);
}


/* eslint-enable */
