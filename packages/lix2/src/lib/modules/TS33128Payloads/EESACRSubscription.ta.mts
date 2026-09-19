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
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { EASIDs, _decode_EASIDs, _encode_EASIDs } from "../TS33128Payloads/EASIDs.ta.mjs";
// export { EASIDs, _decode_EASIDs, _encode_EASIDs } from "../TS33128Payloads/EASIDs.ta.mjs";
import { ACIDs, _decode_ACIDs, _encode_ACIDs } from "../TS33128Payloads/ACIDs.ta.mjs";
// export { ACIDs, _decode_ACIDs, _encode_ACIDs } from "../TS33128Payloads/ACIDs.ta.mjs";
import { ACREventIDs, _decode_ACREventIDs, _encode_ACREventIDs, _enum_for_ACREventIDs } from "../TS33128Payloads/ACREventIDs.ta.mjs";
// export { ACREventIDs, _enum_for_ACREventIDs, ACREventIDs_targetInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, targetInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACREventIDs_aCRComplete /* IMPORTED_LONG_ENUMERATION_ITEM */, aCRComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ACREventIDs, _encode_ACREventIDs } from "../TS33128Payloads/ACREventIDs.ta.mjs";
import { FailureResponse, _decode_FailureResponse, _encode_FailureResponse, _enum_for_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";
// export { FailureResponse, _enum_for_FailureResponse, FailureResponse_error400 /* IMPORTED_LONG_ENUMERATION_ITEM */, error400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error401 /* IMPORTED_LONG_ENUMERATION_ITEM */, error401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error403 /* IMPORTED_LONG_ENUMERATION_ITEM */, error403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error404 /* IMPORTED_LONG_ENUMERATION_ITEM */, error404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error406 /* IMPORTED_LONG_ENUMERATION_ITEM */, error406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error411 /* IMPORTED_LONG_ENUMERATION_ITEM */, error411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error413 /* IMPORTED_LONG_ENUMERATION_ITEM */, error413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error415 /* IMPORTED_LONG_ENUMERATION_ITEM */, error415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error429 /* IMPORTED_LONG_ENUMERATION_ITEM */, error429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error500 /* IMPORTED_LONG_ENUMERATION_ITEM */, error500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error503 /* IMPORTED_LONG_ENUMERATION_ITEM */, error503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureResponse, _encode_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";


/**
 * @summary EESACRSubscription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESACRSubscription ::= SEQUENCE
 * {
 *     eECID               [1] UTF8String,
 *     gPSI                [2] GPSI OPTIONAL,
 *     subscriptionType    [3] SubscriptionType,
 *     expirationTime      [4] Timestamp OPTIONAL,
 *     eASIDs              [5] EASIDs,
 *     aCIDs               [6] ACIDs OPTIONAL,
 *     eventIDs            [7] ACREventIDs OPTIONAL,
 *     subscriptionId      [8] UTF8String OPTIONAL,
 *     failureResponse     [9] FailureResponse OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESACRSubscription {
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
         * @summary `expirationTime`.
         * @public
         * @readonly
         */
        readonly expirationTime: OPTIONAL<Timestamp>,
        /**
         * @summary `eASIDs`.
         * @public
         * @readonly
         */
        readonly eASIDs: EASIDs,
        /**
         * @summary `aCIDs`.
         * @public
         * @readonly
         */
        readonly aCIDs: OPTIONAL<ACIDs>,
        /**
         * @summary `eventIDs`.
         * @public
         * @readonly
         */
        readonly eventIDs: OPTIONAL<ACREventIDs>,
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
     * @summary Restructures an object into a EESACRSubscription
     * @description
     * 
     * This takes an `object` and converts it to a `EESACRSubscription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESACRSubscription`.
     * @returns {EESACRSubscription}
     */
    public static _from_object (_o: { [_K in keyof (EESACRSubscription)]: (EESACRSubscription)[_K] }): EESACRSubscription {
        return new EESACRSubscription(_o.eECID, _o.gPSI, _o.subscriptionType, _o.expirationTime, _o.eASIDs, _o.aCIDs, _o.eventIDs, _o.subscriptionId, _o.failureResponse);
    }

        /**
         * @summary The enum used as the type of the component `subscriptionType`
         * @public
         * @static
         */

    public static _enum_for_subscriptionType = _enum_for_SubscriptionType;        /**
         * @summary The enum used as the type of the component `eventIDs`
         * @public
         * @static
         */

    public static _enum_for_eventIDs = _enum_for_ACREventIDs;        /**
         * @summary The enum used as the type of the component `failureResponse`
         * @public
         * @static
         */

    public static _enum_for_failureResponse = _enum_for_FailureResponse;
}

/**
 * @summary The Leading Root Component Types of EESACRSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESACRSubscription: $.ComponentSpec[] = [
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("subscriptionType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("expirationTime", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eASIDs", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aCIDs", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eventIDs", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("subscriptionId", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("failureResponse", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of EESACRSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESACRSubscription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESACRSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESACRSubscription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESACRSubscription: $.ASN1Decoder<EESACRSubscription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESACRSubscription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESACRSubscription (el: _Element): EESACRSubscription {
    if (!_cached_decoder_for_EESACRSubscription) { _cached_decoder_for_EESACRSubscription = function (el: _Element): EESACRSubscription {
    let eECID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let subscriptionType!: SubscriptionType;
    let expirationTime: OPTIONAL<Timestamp>;
    let eASIDs!: EASIDs;
    let aCIDs: OPTIONAL<ACIDs>;
    let eventIDs: OPTIONAL<ACREventIDs>;
    let subscriptionId: OPTIONAL<UTF8String>;
    let failureResponse: OPTIONAL<FailureResponse>;
    const callbacks: $.DecodingMap = {
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "subscriptionType": (_el: _Element): void => { subscriptionType = $._decode_implicit<SubscriptionType>(() => _decode_SubscriptionType)(_el); },
        "expirationTime": (_el: _Element): void => { expirationTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "eASIDs": (_el: _Element): void => { eASIDs = $._decode_implicit<EASIDs>(() => _decode_EASIDs)(_el); },
        "aCIDs": (_el: _Element): void => { aCIDs = $._decode_implicit<ACIDs>(() => _decode_ACIDs)(_el); },
        "eventIDs": (_el: _Element): void => { eventIDs = $._decode_implicit<ACREventIDs>(() => _decode_ACREventIDs)(_el); },
        "subscriptionId": (_el: _Element): void => { subscriptionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "failureResponse": (_el: _Element): void => { failureResponse = $._decode_implicit<FailureResponse>(() => _decode_FailureResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESACRSubscription,
        _extension_additions_list_spec_for_EESACRSubscription,
        _root_component_type_list_2_spec_for_EESACRSubscription,
        undefined,
    );
    return new EESACRSubscription(
        eECID,
        gPSI,
        subscriptionType,
        expirationTime,
        eASIDs,
        aCIDs,
        eventIDs,
        subscriptionId,
        failureResponse
    );
}; }
    return _cached_decoder_for_EESACRSubscription(el);
}

let _cached_encoder_for_EESACRSubscription: $.ASN1Encoder<EESACRSubscription> | null = null;

/**
 * @summary Encodes a(n) EESACRSubscription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESACRSubscription, encoded as an ASN.1 Element.
 */
export
function _encode_EESACRSubscription (value: EESACRSubscription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESACRSubscription) { _cached_encoder_for_EESACRSubscription = function (value: EESACRSubscription, elGetter: $.ASN1Encoder<EESACRSubscription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SubscriptionType, $.BER)(value.subscriptionType, $.BER),
            /* IF_ABSENT  */ ((value.expirationTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.expirationTime, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EASIDs, $.BER)(value.eASIDs, $.BER),
            /* IF_ABSENT  */ ((value.aCIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ACIDs, $.BER)(value.aCIDs, $.BER)),
            /* IF_ABSENT  */ ((value.eventIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ACREventIDs, $.BER)(value.eventIDs, $.BER)),
            /* IF_ABSENT  */ ((value.subscriptionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.subscriptionId, $.BER)),
            /* IF_ABSENT  */ ((value.failureResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_FailureResponse, $.BER)(value.failureResponse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESACRSubscription(value, elGetter);
}


/* eslint-enable */
