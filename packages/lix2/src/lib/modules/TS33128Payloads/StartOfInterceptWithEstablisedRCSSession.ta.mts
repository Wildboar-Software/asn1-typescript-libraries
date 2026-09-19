/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
import { RCSDestinations, _decode_RCSDestinations, _encode_RCSDestinations } from "../TS33128Payloads/RCSDestinations.ta.mjs";
// export { RCSDestinations, _decode_RCSDestinations, _encode_RCSDestinations } from "../TS33128Payloads/RCSDestinations.ta.mjs";
import { RCSConversationID, _decode_RCSConversationID, _encode_RCSConversationID } from "../TS33128Payloads/RCSConversationID.ta.mjs";
// export { RCSConversationID, _decode_RCSConversationID, _encode_RCSConversationID } from "../TS33128Payloads/RCSConversationID.ta.mjs";
import { RCSContributionID, _decode_RCSContributionID, _encode_RCSContributionID } from "../TS33128Payloads/RCSContributionID.ta.mjs";
// export { RCSContributionID, _decode_RCSContributionID, _encode_RCSContributionID } from "../TS33128Payloads/RCSContributionID.ta.mjs";
import { RCSSessionType, _decode_RCSSessionType, _encode_RCSSessionType, _enum_for_RCSSessionType } from "../TS33128Payloads/RCSSessionType.ta.mjs";
// export { RCSSessionType, _enum_for_RCSSessionType, RCSSessionType_largeMessageStandalone /* IMPORTED_LONG_ENUMERATION_ITEM */, largeMessageStandalone /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionType_oneTo1Chat /* IMPORTED_LONG_ENUMERATION_ITEM */, oneTo1Chat /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionType, _encode_RCSSessionType } from "../TS33128Payloads/RCSSessionType.ta.mjs";
import { RCSSessionEndpoints, _decode_RCSSessionEndpoints, _encode_RCSSessionEndpoints, _enum_for_RCSSessionEndpoints } from "../TS33128Payloads/RCSSessionEndpoints.ta.mjs";
// export { RCSSessionEndpoints, _enum_for_RCSSessionEndpoints, RCSSessionEndpoints_remoteOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionEndpoints_localOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, localOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionEndpoints_localAndRemote /* IMPORTED_LONG_ENUMERATION_ITEM */, localAndRemote /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionEndpoints, _encode_RCSSessionEndpoints } from "../TS33128Payloads/RCSSessionEndpoints.ta.mjs";
import { RCSSIPSessionExchange, _decode_RCSSIPSessionExchange, _encode_RCSSIPSessionExchange } from "../TS33128Payloads/RCSSIPSessionExchange.ta.mjs";
// export { RCSSIPSessionExchange, _decode_RCSSIPSessionExchange, _encode_RCSSIPSessionExchange } from "../TS33128Payloads/RCSSIPSessionExchange.ta.mjs";
import { RCSSessionContext, _decode_RCSSessionContext, _encode_RCSSessionContext } from "../TS33128Payloads/RCSSessionContext.ta.mjs";
// export { RCSSessionContext, _decode_RCSSessionContext, _encode_RCSSessionContext } from "../TS33128Payloads/RCSSessionContext.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { AdditionalInstanceLocation, _decode_AdditionalInstanceLocation, _encode_AdditionalInstanceLocation } from "../TS33128Payloads/AdditionalInstanceLocation.ta.mjs";
// export { AdditionalInstanceLocation, _decode_AdditionalInstanceLocation, _encode_AdditionalInstanceLocation } from "../TS33128Payloads/AdditionalInstanceLocation.ta.mjs";


/**
 * @summary StartOfInterceptWithEstablisedRCSSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartOfInterceptWithEstablisedRCSSession ::= SEQUENCE
 * {
 *     rCSTargetIdentities        [1] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     participants               [2] SEQUENCE SIZE (1..MAX) OF RCSDestinations,
 *     conversationID             [3] RCSConversationID,
 *     contributionID             [4] RCSContributionID,
 *     rCSSessionType             [5] RCSSessionType,
 *     rCSSessionEndpoints        [6] RCSSessionEndpoints,
 *     rCSSessionLegs             [7] SEQUENCE SIZE (1..MAX) OF RCSSIPSessionExchange OPTIONAL,
 *     rCSSessionInformation      [8] SEQUENCE SIZE (1..MAX) OF RCSSessionContext,
 *     location                   [9] Location OPTIONAL,
 *     additionalInstanceLocation [10] SEQUENCE SIZE (1..MAX) OF AdditionalInstanceLocation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class StartOfInterceptWithEstablisedRCSSession {
    constructor (
        /**
         * @summary `rCSTargetIdentities`.
         * @public
         * @readonly
         */
        readonly rCSTargetIdentities: RCSIdentity[],
        /**
         * @summary `participants`.
         * @public
         * @readonly
         */
        readonly participants: RCSDestinations[],
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
         * @summary `rCSSessionType`.
         * @public
         * @readonly
         */
        readonly rCSSessionType: RCSSessionType,
        /**
         * @summary `rCSSessionEndpoints`.
         * @public
         * @readonly
         */
        readonly rCSSessionEndpoints: RCSSessionEndpoints,
        /**
         * @summary `rCSSessionLegs`.
         * @public
         * @readonly
         */
        readonly rCSSessionLegs: OPTIONAL<RCSSIPSessionExchange[]>,
        /**
         * @summary `rCSSessionInformation`.
         * @public
         * @readonly
         */
        readonly rCSSessionInformation: RCSSessionContext[],
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `additionalInstanceLocation`.
         * @public
         * @readonly
         */
        readonly additionalInstanceLocation: OPTIONAL<AdditionalInstanceLocation[]>
    ) {}

    /**
     * @summary Restructures an object into a StartOfInterceptWithEstablisedRCSSession
     * @description
     * 
     * This takes an `object` and converts it to a `StartOfInterceptWithEstablisedRCSSession`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartOfInterceptWithEstablisedRCSSession`.
     * @returns {StartOfInterceptWithEstablisedRCSSession}
     */
    public static _from_object (_o: { [_K in keyof (StartOfInterceptWithEstablisedRCSSession)]: (StartOfInterceptWithEstablisedRCSSession)[_K] }): StartOfInterceptWithEstablisedRCSSession {
        return new StartOfInterceptWithEstablisedRCSSession(_o.rCSTargetIdentities, _o.participants, _o.conversationID, _o.contributionID, _o.rCSSessionType, _o.rCSSessionEndpoints, _o.rCSSessionLegs, _o.rCSSessionInformation, _o.location, _o.additionalInstanceLocation);
    }

        /**
         * @summary The enum used as the type of the component `rCSSessionType`
         * @public
         * @static
         */

    public static _enum_for_rCSSessionType = _enum_for_RCSSessionType;        /**
         * @summary The enum used as the type of the component `rCSSessionEndpoints`
         * @public
         * @static
         */

    public static _enum_for_rCSSessionEndpoints = _enum_for_RCSSessionEndpoints;
}

/**
 * @summary The Leading Root Component Types of StartOfInterceptWithEstablisedRCSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartOfInterceptWithEstablisedRCSSession: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSTargetIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("participants", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("conversationID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contributionID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("rCSSessionType", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rCSSessionEndpoints", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rCSSessionLegs", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("rCSSessionInformation", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("additionalInstanceLocation", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of StartOfInterceptWithEstablisedRCSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartOfInterceptWithEstablisedRCSSession: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartOfInterceptWithEstablisedRCSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartOfInterceptWithEstablisedRCSSession: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartOfInterceptWithEstablisedRCSSession: $.ASN1Decoder<StartOfInterceptWithEstablisedRCSSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartOfInterceptWithEstablisedRCSSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartOfInterceptWithEstablisedRCSSession (el: _Element): StartOfInterceptWithEstablisedRCSSession {
    if (!_cached_decoder_for_StartOfInterceptWithEstablisedRCSSession) { _cached_decoder_for_StartOfInterceptWithEstablisedRCSSession = function (el: _Element): StartOfInterceptWithEstablisedRCSSession {
    let rCSTargetIdentities!: RCSIdentity[];
    let participants!: RCSDestinations[];
    let conversationID!: RCSConversationID;
    let contributionID!: RCSContributionID;
    let rCSSessionType!: RCSSessionType;
    let rCSSessionEndpoints!: RCSSessionEndpoints;
    let rCSSessionLegs: OPTIONAL<RCSSIPSessionExchange[]>;
    let rCSSessionInformation!: RCSSessionContext[];
    let location: OPTIONAL<Location>;
    let additionalInstanceLocation: OPTIONAL<AdditionalInstanceLocation[]>;
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => { rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el); },
        "participants": (_el: _Element): void => { participants = $._decode_implicit<RCSDestinations[]>(() => $._decodeSequenceOf<RCSDestinations>(() => _decode_RCSDestinations))(_el); },
        "conversationID": (_el: _Element): void => { conversationID = $._decode_implicit<RCSConversationID>(() => _decode_RCSConversationID)(_el); },
        "contributionID": (_el: _Element): void => { contributionID = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "rCSSessionType": (_el: _Element): void => { rCSSessionType = $._decode_implicit<RCSSessionType>(() => _decode_RCSSessionType)(_el); },
        "rCSSessionEndpoints": (_el: _Element): void => { rCSSessionEndpoints = $._decode_implicit<RCSSessionEndpoints>(() => _decode_RCSSessionEndpoints)(_el); },
        "rCSSessionLegs": (_el: _Element): void => { rCSSessionLegs = $._decode_implicit<RCSSIPSessionExchange[]>(() => $._decodeSequenceOf<RCSSIPSessionExchange>(() => _decode_RCSSIPSessionExchange))(_el); },
        "rCSSessionInformation": (_el: _Element): void => { rCSSessionInformation = $._decode_implicit<RCSSessionContext[]>(() => $._decodeSequenceOf<RCSSessionContext>(() => _decode_RCSSessionContext))(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "additionalInstanceLocation": (_el: _Element): void => { additionalInstanceLocation = $._decode_implicit<AdditionalInstanceLocation[]>(() => $._decodeSequenceOf<AdditionalInstanceLocation>(() => _decode_AdditionalInstanceLocation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartOfInterceptWithEstablisedRCSSession,
        _extension_additions_list_spec_for_StartOfInterceptWithEstablisedRCSSession,
        _root_component_type_list_2_spec_for_StartOfInterceptWithEstablisedRCSSession,
        undefined,
    );
    return new StartOfInterceptWithEstablisedRCSSession(
        rCSTargetIdentities,
        participants,
        conversationID,
        contributionID,
        rCSSessionType,
        rCSSessionEndpoints,
        rCSSessionLegs,
        rCSSessionInformation,
        location,
        additionalInstanceLocation
    );
}; }
    return _cached_decoder_for_StartOfInterceptWithEstablisedRCSSession(el);
}

let _cached_encoder_for_StartOfInterceptWithEstablisedRCSSession: $.ASN1Encoder<StartOfInterceptWithEstablisedRCSSession> | null = null;

/**
 * @summary Encodes a(n) StartOfInterceptWithEstablisedRCSSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartOfInterceptWithEstablisedRCSSession, encoded as an ASN.1 Element.
 */
export
function _encode_StartOfInterceptWithEstablisedRCSSession (value: StartOfInterceptWithEstablisedRCSSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartOfInterceptWithEstablisedRCSSession) { _cached_encoder_for_StartOfInterceptWithEstablisedRCSSession = function (value: StartOfInterceptWithEstablisedRCSSession, elGetter: $.ASN1Encoder<StartOfInterceptWithEstablisedRCSSession>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<RCSDestinations>(() => _encode_RCSDestinations, $.BER), $.BER)(value.participants, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RCSConversationID, $.BER)(value.conversationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_RCSContributionID, $.BER)(value.contributionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_RCSSessionType, $.BER)(value.rCSSessionType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RCSSessionEndpoints, $.BER)(value.rCSSessionEndpoints, $.BER),
            /* IF_ABSENT  */ ((value.rCSSessionLegs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<RCSSIPSessionExchange>(() => _encode_RCSSIPSessionExchange, $.BER), $.BER)(value.rCSSessionLegs, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<RCSSessionContext>(() => _encode_RCSSessionContext, $.BER), $.BER)(value.rCSSessionInformation, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.additionalInstanceLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<AdditionalInstanceLocation>(() => _encode_AdditionalInstanceLocation, $.BER), $.BER)(value.additionalInstanceLocation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartOfInterceptWithEstablisedRCSSession(value, elGetter);
}


/* eslint-enable */
