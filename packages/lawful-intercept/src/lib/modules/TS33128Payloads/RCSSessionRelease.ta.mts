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
 * @summary RCSSessionRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionRelease ::= SEQUENCE
 * {
 *     rCSTargetIdentities     [1] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     conversationID          [2] RCSConversationID,
 *     contributionID          [3] RCSContributionID,
 *     rCSSessionType          [4] RCSSessionType,
 *     sessionDirection        [5] Direction,
 *     rCSSIPSessionMessage    [6] RCSSIPSessionMessage,
 *     location                [7] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RCSSessionRelease {
    /**
     * @summary `rCSTargetIdentities`.
     * @public
     * @readonly
     */
    readonly rCSTargetIdentities: RCSIdentity[];
    /**
     * @summary `conversationID`.
     * @public
     * @readonly
     */
    readonly conversationID: RCSConversationID;
    /**
     * @summary `contributionID`.
     * @public
     * @readonly
     */
    readonly contributionID: RCSContributionID;
    /**
     * @summary `rCSSessionType`.
     * @public
     * @readonly
     */
    readonly rCSSessionType: RCSSessionType;
    /**
     * @summary `sessionDirection`.
     * @public
     * @readonly
     */
    readonly sessionDirection: Direction;
    /**
     * @summary `rCSSIPSessionMessage`.
     * @public
     * @readonly
     */
    readonly rCSSIPSessionMessage: RCSSIPSessionMessage;
    /**
     * @summary `location`.
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
        rCSSessionType: RCSSessionType,
        sessionDirection: Direction,
        rCSSIPSessionMessage: RCSSIPSessionMessage,
        location: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.rCSTargetIdentities = rCSTargetIdentities;
        if (this.rCSTargetIdentities.length < 1) {
            throw new ASN1SizeError("rCSTargetIdentities violates the SIZE constraint");
        }
        this.conversationID = conversationID;
        this.contributionID = contributionID;
        this.rCSSessionType = rCSSessionType;
        this.sessionDirection = sessionDirection;
        this.rCSSIPSessionMessage = rCSSIPSessionMessage;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RCSSessionRelease
     * @description
     * 
     * This takes an `object` and converts it to a `RCSSessionRelease`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSSessionRelease`.
     * @returns {RCSSessionRelease}
     */
    public static _from_object (_o: { [_K in keyof (RCSSessionRelease)]: (RCSSessionRelease)[_K] }): RCSSessionRelease {
        return new RCSSessionRelease(_o.rCSTargetIdentities, _o.conversationID, _o.contributionID, _o.rCSSessionType, _o.sessionDirection, _o.rCSSIPSessionMessage, _o.location, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of RCSSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSSessionRelease: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSTargetIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("conversationID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("contributionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rCSSessionType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sessionDirection", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rCSSIPSessionMessage", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of RCSSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSSessionRelease: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSSessionRelease: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSSessionRelease: $.ASN1Decoder<RCSSessionRelease> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionRelease
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionRelease (el: _Element): RCSSessionRelease {
    if (!_cached_decoder_for_RCSSessionRelease) { _cached_decoder_for_RCSSessionRelease = function (el: _Element): RCSSessionRelease {
    let rCSTargetIdentities!: RCSIdentity[];
    let conversationID!: RCSConversationID;
    let contributionID!: RCSContributionID;
    let rCSSessionType!: RCSSessionType;
    let sessionDirection!: Direction;
    let rCSSIPSessionMessage!: RCSSIPSessionMessage;
    let location: OPTIONAL<Location>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => { rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el); },
        "conversationID": (_el: _Element): void => { conversationID = $._decode_implicit<RCSConversationID>(() => _decode_RCSConversationID)(_el); },
        "contributionID": (_el: _Element): void => { contributionID = $._decode_implicit<RCSContributionID>(() => _decode_RCSContributionID)(_el); },
        "rCSSessionType": (_el: _Element): void => { rCSSessionType = $._decode_implicit<RCSSessionType>(() => _decode_RCSSessionType)(_el); },
        "sessionDirection": (_el: _Element): void => { sessionDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "rCSSIPSessionMessage": (_el: _Element): void => { rCSSIPSessionMessage = $._decode_implicit<RCSSIPSessionMessage>(() => _decode_RCSSIPSessionMessage)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCSSessionRelease,
        _extension_additions_list_spec_for_RCSSessionRelease,
        _root_component_type_list_2_spec_for_RCSSessionRelease,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RCSSessionRelease(
        rCSTargetIdentities,
        conversationID,
        contributionID,
        rCSSessionType,
        sessionDirection,
        rCSSIPSessionMessage,
        location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RCSSessionRelease(el);
}

let _cached_encoder_for_RCSSessionRelease: $.ASN1Encoder<RCSSessionRelease> | null = null;

/**
 * @summary Encodes a(n) RCSSessionRelease into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionRelease, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionRelease (value: RCSSessionRelease, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionRelease) { _cached_encoder_for_RCSSessionRelease = function (value: RCSSessionRelease, elGetter: $.ASN1Encoder<RCSSessionRelease>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RCSConversationID, $.BER)(value.conversationID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RCSContributionID, $.BER)(value.contributionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_RCSSessionType, $.BER)(value.rCSSessionType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Direction, $.BER)(value.sessionDirection, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RCSSIPSessionMessage, $.BER)(value.rCSSIPSessionMessage, $.BER);
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RCSSessionRelease(value, elGetter);
}


/* eslint-enable */
