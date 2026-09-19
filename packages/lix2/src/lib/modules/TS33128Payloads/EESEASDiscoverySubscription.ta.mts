/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SubscriptionType, _decode_SubscriptionType, _encode_SubscriptionType, _enum_for_SubscriptionType } from "../TS33128Payloads/SubscriptionType.ta.mjs";
// export { SubscriptionType, _enum_for_SubscriptionType, SubscriptionType_subscription /* IMPORTED_LONG_ENUMERATION_ITEM */, subscription /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriptionType_subscriptionUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriptionType_unsubscription /* IMPORTED_LONG_ENUMERATION_ITEM */, unsubscription /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SubscriptionType, _encode_SubscriptionType } from "../TS33128Payloads/SubscriptionType.ta.mjs";
import { EASEventType, _decode_EASEventType, _encode_EASEventType, _enum_for_EASEventType } from "../TS33128Payloads/EASEventType.ta.mjs";
// export { EASEventType, _enum_for_EASEventType, EASEventType_eASAvailabilityChange /* IMPORTED_LONG_ENUMERATION_ITEM */, eASAvailabilityChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, EASEventType_eASDynamicInfoChange /* IMPORTED_LONG_ENUMERATION_ITEM */, eASDynamicInfoChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EASEventType, _encode_EASEventType } from "../TS33128Payloads/EASEventType.ta.mjs";
import { EASDiscoveryFilter, _decode_EASDiscoveryFilter, _encode_EASDiscoveryFilter } from "../TS33128Payloads/EASDiscoveryFilter.ta.mjs";
// export { EASDiscoveryFilter, _decode_EASDiscoveryFilter, _encode_EASDiscoveryFilter } from "../TS33128Payloads/EASDiscoveryFilter.ta.mjs";
import { EASDynamicInfoFilter, _decode_EASDynamicInfoFilter, _encode_EASDynamicInfoFilter } from "../TS33128Payloads/EASDynamicInfoFilter.ta.mjs";
// export { EASDynamicInfoFilter, _decode_EASDynamicInfoFilter, _encode_EASDynamicInfoFilter } from "../TS33128Payloads/EASDynamicInfoFilter.ta.mjs";
import { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
// export { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { FailureResponse, _decode_FailureResponse, _encode_FailureResponse, _enum_for_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";
// export { FailureResponse, _enum_for_FailureResponse, FailureResponse_error400 /* IMPORTED_LONG_ENUMERATION_ITEM */, error400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error401 /* IMPORTED_LONG_ENUMERATION_ITEM */, error401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error403 /* IMPORTED_LONG_ENUMERATION_ITEM */, error403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error404 /* IMPORTED_LONG_ENUMERATION_ITEM */, error404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error406 /* IMPORTED_LONG_ENUMERATION_ITEM */, error406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error411 /* IMPORTED_LONG_ENUMERATION_ITEM */, error411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error413 /* IMPORTED_LONG_ENUMERATION_ITEM */, error413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error415 /* IMPORTED_LONG_ENUMERATION_ITEM */, error415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error429 /* IMPORTED_LONG_ENUMERATION_ITEM */, error429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error500 /* IMPORTED_LONG_ENUMERATION_ITEM */, error500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error503 /* IMPORTED_LONG_ENUMERATION_ITEM */, error503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureResponse, _encode_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";


/**
 * @summary EESEASDiscoverySubscription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESEASDiscoverySubscription ::= SEQUENCE
 * {
 *     eECID                    [1] UTF8String,
 *     gPSI                     [2] GPSI OPTIONAL,
 *     subscriptionType         [3] SubscriptionType,
 *     eASEventType             [4] EASEventType,
 *     eASDiscoveryFilter       [5] EASDiscoveryFilter OPTIONAL,
 *     eASDynamicInfoFilter     [6] EASDynamicInfoFilter OPTIONAL,
 *     eECServiceContSupport    [7] ACRScenarios OPTIONAL,
 *     expirationTime           [8] Timestamp OPTIONAL,
 *     subscriptionId           [9] UTF8String OPTIONAL,
 *     failureResponse          [10] FailureResponse OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESEASDiscoverySubscription {
    constructor (
        /**
         * @summary `eECID`.
         * @public
         * @readonly
         */
        readonly eECID: UTF8String,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `subscriptionType`.
         * @public
         * @readonly
         */
        readonly subscriptionType: SubscriptionType,
        /**
         * @summary `eASEventType`.
         * @public
         * @readonly
         */
        readonly eASEventType: EASEventType,
        /**
         * @summary `eASDiscoveryFilter`.
         * @public
         * @readonly
         */
        readonly eASDiscoveryFilter: OPTIONAL<EASDiscoveryFilter>,
        /**
         * @summary `eASDynamicInfoFilter`.
         * @public
         * @readonly
         */
        readonly eASDynamicInfoFilter: OPTIONAL<EASDynamicInfoFilter>,
        /**
         * @summary `eECServiceContSupport`.
         * @public
         * @readonly
         */
        readonly eECServiceContSupport: OPTIONAL<ACRScenarios>,
        /**
         * @summary `expirationTime`.
         * @public
         * @readonly
         */
        readonly expirationTime: OPTIONAL<Timestamp>,
        /**
         * @summary `subscriptionId`.
         * @public
         * @readonly
         */
        readonly subscriptionId: OPTIONAL<UTF8String>,
        /**
         * @summary `failureResponse`.
         * @public
         * @readonly
         */
        readonly failureResponse: OPTIONAL<FailureResponse>
    ) {}

    /**
     * @summary Restructures an object into a EESEASDiscoverySubscription
     * @description
     * 
     * This takes an `object` and converts it to a `EESEASDiscoverySubscription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESEASDiscoverySubscription`.
     * @returns {EESEASDiscoverySubscription}
     */
    public static _from_object (_o: { [_K in keyof (EESEASDiscoverySubscription)]: (EESEASDiscoverySubscription)[_K] }): EESEASDiscoverySubscription {
        return new EESEASDiscoverySubscription(_o.eECID, _o.gPSI, _o.subscriptionType, _o.eASEventType, _o.eASDiscoveryFilter, _o.eASDynamicInfoFilter, _o.eECServiceContSupport, _o.expirationTime, _o.subscriptionId, _o.failureResponse);
    }

        /**
         * @summary The enum used as the type of the component `subscriptionType`
         * @public
         * @static
         */

    public static _enum_for_subscriptionType = _enum_for_SubscriptionType;        /**
         * @summary The enum used as the type of the component `eASEventType`
         * @public
         * @static
         */

    public static _enum_for_eASEventType = _enum_for_EASEventType;        /**
         * @summary The enum used as the type of the component `failureResponse`
         * @public
         * @static
         */

    public static _enum_for_failureResponse = _enum_for_FailureResponse;
}

/**
 * @summary The Leading Root Component Types of EESEASDiscoverySubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESEASDiscoverySubscription: $.ComponentSpec[] = [
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("subscriptionType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eASEventType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eASDiscoveryFilter", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eASDynamicInfoFilter", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eECServiceContSupport", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("expirationTime", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("subscriptionId", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("failureResponse", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of EESEASDiscoverySubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESEASDiscoverySubscription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESEASDiscoverySubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESEASDiscoverySubscription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESEASDiscoverySubscription: $.ASN1Decoder<EESEASDiscoverySubscription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESEASDiscoverySubscription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESEASDiscoverySubscription (el: _Element): EESEASDiscoverySubscription {
    if (!_cached_decoder_for_EESEASDiscoverySubscription) { _cached_decoder_for_EESEASDiscoverySubscription = function (el: _Element): EESEASDiscoverySubscription {
    let eECID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let subscriptionType!: SubscriptionType;
    let eASEventType!: EASEventType;
    let eASDiscoveryFilter: OPTIONAL<EASDiscoveryFilter>;
    let eASDynamicInfoFilter: OPTIONAL<EASDynamicInfoFilter>;
    let eECServiceContSupport: OPTIONAL<ACRScenarios>;
    let expirationTime: OPTIONAL<Timestamp>;
    let subscriptionId: OPTIONAL<UTF8String>;
    let failureResponse: OPTIONAL<FailureResponse>;
    const callbacks: $.DecodingMap = {
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "subscriptionType": (_el: _Element): void => { subscriptionType = $._decode_implicit<SubscriptionType>(() => _decode_SubscriptionType)(_el); },
        "eASEventType": (_el: _Element): void => { eASEventType = $._decode_implicit<EASEventType>(() => _decode_EASEventType)(_el); },
        "eASDiscoveryFilter": (_el: _Element): void => { eASDiscoveryFilter = $._decode_explicit<EASDiscoveryFilter>(() => _decode_EASDiscoveryFilter)(_el); },
        "eASDynamicInfoFilter": (_el: _Element): void => { eASDynamicInfoFilter = $._decode_implicit<EASDynamicInfoFilter>(() => _decode_EASDynamicInfoFilter)(_el); },
        "eECServiceContSupport": (_el: _Element): void => { eECServiceContSupport = $._decode_implicit<ACRScenarios>(() => _decode_ACRScenarios)(_el); },
        "expirationTime": (_el: _Element): void => { expirationTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "subscriptionId": (_el: _Element): void => { subscriptionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "failureResponse": (_el: _Element): void => { failureResponse = $._decode_implicit<FailureResponse>(() => _decode_FailureResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESEASDiscoverySubscription,
        _extension_additions_list_spec_for_EESEASDiscoverySubscription,
        _root_component_type_list_2_spec_for_EESEASDiscoverySubscription,
        undefined,
    );
    return new EESEASDiscoverySubscription(
        eECID,
        gPSI,
        subscriptionType,
        eASEventType,
        eASDiscoveryFilter,
        eASDynamicInfoFilter,
        eECServiceContSupport,
        expirationTime,
        subscriptionId,
        failureResponse
    );
}; }
    return _cached_decoder_for_EESEASDiscoverySubscription(el);
}

let _cached_encoder_for_EESEASDiscoverySubscription: $.ASN1Encoder<EESEASDiscoverySubscription> | null = null;

/**
 * @summary Encodes a(n) EESEASDiscoverySubscription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESEASDiscoverySubscription, encoded as an ASN.1 Element.
 */
export
function _encode_EESEASDiscoverySubscription (value: EESEASDiscoverySubscription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESEASDiscoverySubscription) { _cached_encoder_for_EESEASDiscoverySubscription = function (value: EESEASDiscoverySubscription, elGetter: $.ASN1Encoder<EESEASDiscoverySubscription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SubscriptionType, $.BER)(value.subscriptionType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EASEventType, $.BER)(value.eASEventType, $.BER),
            /* IF_ABSENT  */ ((value.eASDiscoveryFilter === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_EASDiscoveryFilter, $.BER)(value.eASDiscoveryFilter, $.BER)),
            /* IF_ABSENT  */ ((value.eASDynamicInfoFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_EASDynamicInfoFilter, $.BER)(value.eASDynamicInfoFilter, $.BER)),
            /* IF_ABSENT  */ ((value.eECServiceContSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ACRScenarios, $.BER)(value.eECServiceContSupport, $.BER)),
            /* IF_ABSENT  */ ((value.expirationTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Timestamp, $.BER)(value.expirationTime, $.BER)),
            /* IF_ABSENT  */ ((value.subscriptionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.subscriptionId, $.BER)),
            /* IF_ABSENT  */ ((value.failureResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_FailureResponse, $.BER)(value.failureResponse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESEASDiscoverySubscription(value, elGetter);
}


/* eslint-enable */
