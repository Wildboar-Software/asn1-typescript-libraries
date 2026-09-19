/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PTCAccessPolicyType, _decode_PTCAccessPolicyType, _encode_PTCAccessPolicyType, _enum_for_PTCAccessPolicyType } from "../TS33128Payloads/PTCAccessPolicyType.ta.mjs";
// export { PTCAccessPolicyType, _enum_for_PTCAccessPolicyType, PTCAccessPolicyType_pTCUserAccessPolicyAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCUserAccessPolicyAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCAccessPolicyType_groupAuthorizationRulesAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, groupAuthorizationRulesAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCAccessPolicyType_pTCUserAccessPolicyQuery /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCUserAccessPolicyQuery /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCAccessPolicyType_groupAuthorizationRulesQuery /* IMPORTED_LONG_ENUMERATION_ITEM */, groupAuthorizationRulesQuery /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCAccessPolicyType_pTCUserAccessPolicyResult /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCUserAccessPolicyResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCAccessPolicyType_groupAuthorizationRulesResult /* IMPORTED_LONG_ENUMERATION_ITEM */, groupAuthorizationRulesResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCAccessPolicyType_requestUnsuccessful /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_PTCAccessPolicyType, _encode_PTCAccessPolicyType } from "../TS33128Payloads/PTCAccessPolicyType.ta.mjs";
import { PTCUserAccessPolicy, _decode_PTCUserAccessPolicy, _encode_PTCUserAccessPolicy, _enum_for_PTCUserAccessPolicy } from "../TS33128Payloads/PTCUserAccessPolicy.ta.mjs";
// export { PTCUserAccessPolicy, _enum_for_PTCUserAccessPolicy, PTCUserAccessPolicy_allowIncomingPTCSessionRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, allowIncomingPTCSessionRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCUserAccessPolicy_blockIncomingPTCSessionRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, blockIncomingPTCSessionRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCUserAccessPolicy_allowAutoAnswerMode /* IMPORTED_LONG_ENUMERATION_ITEM */, allowAutoAnswerMode /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCUserAccessPolicy_allowOverrideManualAnswerMode /* IMPORTED_LONG_ENUMERATION_ITEM */, allowOverrideManualAnswerMode /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCUserAccessPolicy, _encode_PTCUserAccessPolicy } from "../TS33128Payloads/PTCUserAccessPolicy.ta.mjs";
import { PTCGroupAuthRule, _decode_PTCGroupAuthRule, _encode_PTCGroupAuthRule, _enum_for_PTCGroupAuthRule } from "../TS33128Payloads/PTCGroupAuthRule.ta.mjs";
// export { PTCGroupAuthRule, _enum_for_PTCGroupAuthRule, PTCGroupAuthRule_allowInitiatingPTCSession /* IMPORTED_LONG_ENUMERATION_ITEM */, allowInitiatingPTCSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_blockInitiatingPTCSession /* IMPORTED_LONG_ENUMERATION_ITEM */, blockInitiatingPTCSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_allowJoiningPTCSession /* IMPORTED_LONG_ENUMERATION_ITEM */, allowJoiningPTCSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_blockJoiningPTCSession /* IMPORTED_LONG_ENUMERATION_ITEM */, blockJoiningPTCSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_allowAddParticipants /* IMPORTED_LONG_ENUMERATION_ITEM */, allowAddParticipants /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_blockAddParticipants /* IMPORTED_LONG_ENUMERATION_ITEM */, blockAddParticipants /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_allowSubscriptionPTCSessionState /* IMPORTED_LONG_ENUMERATION_ITEM */, allowSubscriptionPTCSessionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_blockSubscriptionPTCSessionState /* IMPORTED_LONG_ENUMERATION_ITEM */, blockSubscriptionPTCSessionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_allowAnonymity /* IMPORTED_LONG_ENUMERATION_ITEM */, allowAnonymity /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_forbidAnonymity /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidAnonymity /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCGroupAuthRule, _encode_PTCGroupAuthRule } from "../TS33128Payloads/PTCGroupAuthRule.ta.mjs";
import { PTCAccessPolicyFailure, _decode_PTCAccessPolicyFailure, _encode_PTCAccessPolicyFailure, _enum_for_PTCAccessPolicyFailure } from "../TS33128Payloads/PTCAccessPolicyFailure.ta.mjs";
// export { PTCAccessPolicyFailure, _enum_for_PTCAccessPolicyFailure, PTCAccessPolicyFailure_requestUnsuccessful /* IMPORTED_LONG_ENUMERATION_ITEM */, PTCAccessPolicyFailure_requestUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, requestUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCAccessPolicyFailure, _encode_PTCAccessPolicyFailure } from "../TS33128Payloads/PTCAccessPolicyFailure.ta.mjs";


/**
 * @summary PTCAccessPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicy ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCAccessPolicyType           [3] PTCAccessPolicyType OPTIONAL,
 *     pTCUserAccessPolicy           [4] PTCUserAccessPolicy OPTIONAL,
 *     pTCGroupAuthRule              [5] PTCGroupAuthRule OPTIONAL,
 *     pTCContactID                  [6] PTCTargetInformation OPTIONAL,
 *     pTCAccessPolicyFailure        [7] PTCAccessPolicyFailure OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCAccessPolicy {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCDirection`.
         * @public
         * @readonly
         */
        readonly pTCDirection: Direction,
        /**
         * @summary `pTCAccessPolicyType`.
         * @public
         * @readonly
         */
        readonly pTCAccessPolicyType: OPTIONAL<PTCAccessPolicyType>,
        /**
         * @summary `pTCUserAccessPolicy`.
         * @public
         * @readonly
         */
        readonly pTCUserAccessPolicy: OPTIONAL<PTCUserAccessPolicy>,
        /**
         * @summary `pTCGroupAuthRule`.
         * @public
         * @readonly
         */
        readonly pTCGroupAuthRule: OPTIONAL<PTCGroupAuthRule>,
        /**
         * @summary `pTCContactID`.
         * @public
         * @readonly
         */
        readonly pTCContactID: OPTIONAL<PTCTargetInformation>,
        /**
         * @summary `pTCAccessPolicyFailure`.
         * @public
         * @readonly
         */
        readonly pTCAccessPolicyFailure: OPTIONAL<PTCAccessPolicyFailure>
    ) {}

    /**
     * @summary Restructures an object into a PTCAccessPolicy
     * @description
     * 
     * This takes an `object` and converts it to a `PTCAccessPolicy`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCAccessPolicy`.
     * @returns {PTCAccessPolicy}
     */
    public static _from_object (_o: { [_K in keyof (PTCAccessPolicy)]: (PTCAccessPolicy)[_K] }): PTCAccessPolicy {
        return new PTCAccessPolicy(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCAccessPolicyType, _o.pTCUserAccessPolicy, _o.pTCGroupAuthRule, _o.pTCContactID, _o.pTCAccessPolicyFailure);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `pTCAccessPolicyType`
         * @public
         * @static
         */

    public static _enum_for_pTCAccessPolicyType = _enum_for_PTCAccessPolicyType;        /**
         * @summary The enum used as the type of the component `pTCUserAccessPolicy`
         * @public
         * @static
         */

    public static _enum_for_pTCUserAccessPolicy = _enum_for_PTCUserAccessPolicy;        /**
         * @summary The enum used as the type of the component `pTCGroupAuthRule`
         * @public
         * @static
         */

    public static _enum_for_pTCGroupAuthRule = _enum_for_PTCGroupAuthRule;        /**
         * @summary The enum used as the type of the component `pTCAccessPolicyFailure`
         * @public
         * @static
         */

    public static _enum_for_pTCAccessPolicyFailure = _enum_for_PTCAccessPolicyFailure;
}

/**
 * @summary The Leading Root Component Types of PTCAccessPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCAccessPolicy: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCAccessPolicyType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCUserAccessPolicy", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCGroupAuthRule", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCContactID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCAccessPolicyFailure", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of PTCAccessPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCAccessPolicy: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCAccessPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCAccessPolicy: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCAccessPolicy: $.ASN1Decoder<PTCAccessPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCAccessPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCAccessPolicy (el: _Element): PTCAccessPolicy {
    if (!_cached_decoder_for_PTCAccessPolicy) { _cached_decoder_for_PTCAccessPolicy = function (el: _Element): PTCAccessPolicy {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCAccessPolicyType: OPTIONAL<PTCAccessPolicyType>;
    let pTCUserAccessPolicy: OPTIONAL<PTCUserAccessPolicy>;
    let pTCGroupAuthRule: OPTIONAL<PTCGroupAuthRule>;
    let pTCContactID: OPTIONAL<PTCTargetInformation>;
    let pTCAccessPolicyFailure: OPTIONAL<PTCAccessPolicyFailure>;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCAccessPolicyType": (_el: _Element): void => { pTCAccessPolicyType = $._decode_implicit<PTCAccessPolicyType>(() => _decode_PTCAccessPolicyType)(_el); },
        "pTCUserAccessPolicy": (_el: _Element): void => { pTCUserAccessPolicy = $._decode_implicit<PTCUserAccessPolicy>(() => _decode_PTCUserAccessPolicy)(_el); },
        "pTCGroupAuthRule": (_el: _Element): void => { pTCGroupAuthRule = $._decode_implicit<PTCGroupAuthRule>(() => _decode_PTCGroupAuthRule)(_el); },
        "pTCContactID": (_el: _Element): void => { pTCContactID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCAccessPolicyFailure": (_el: _Element): void => { pTCAccessPolicyFailure = $._decode_implicit<PTCAccessPolicyFailure>(() => _decode_PTCAccessPolicyFailure)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCAccessPolicy,
        _extension_additions_list_spec_for_PTCAccessPolicy,
        _root_component_type_list_2_spec_for_PTCAccessPolicy,
        undefined,
    );
    return new PTCAccessPolicy(
        pTCTargetInformation,
        pTCDirection,
        pTCAccessPolicyType,
        pTCUserAccessPolicy,
        pTCGroupAuthRule,
        pTCContactID,
        pTCAccessPolicyFailure
    );
}; }
    return _cached_decoder_for_PTCAccessPolicy(el);
}

let _cached_encoder_for_PTCAccessPolicy: $.ASN1Encoder<PTCAccessPolicy> | null = null;

/**
 * @summary Encodes a(n) PTCAccessPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCAccessPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_PTCAccessPolicy (value: PTCAccessPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCAccessPolicy) { _cached_encoder_for_PTCAccessPolicy = function (value: PTCAccessPolicy, elGetter: $.ASN1Encoder<PTCAccessPolicy>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* IF_ABSENT  */ ((value.pTCAccessPolicyType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PTCAccessPolicyType, $.BER)(value.pTCAccessPolicyType, $.BER)),
            /* IF_ABSENT  */ ((value.pTCUserAccessPolicy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PTCUserAccessPolicy, $.BER)(value.pTCUserAccessPolicy, $.BER)),
            /* IF_ABSENT  */ ((value.pTCGroupAuthRule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PTCGroupAuthRule, $.BER)(value.pTCGroupAuthRule, $.BER)),
            /* IF_ABSENT  */ ((value.pTCContactID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PTCTargetInformation, $.BER)(value.pTCContactID, $.BER)),
            /* IF_ABSENT  */ ((value.pTCAccessPolicyFailure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PTCAccessPolicyFailure, $.BER)(value.pTCAccessPolicyFailure, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCAccessPolicy(value, elGetter);
}


/* eslint-enable */
