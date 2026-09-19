/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASEventType, _decode_EASEventType, _encode_EASEventType, _enum_for_EASEventType } from "../TS33128Payloads/EASEventType.ta.mjs";
// export { EASEventType, _enum_for_EASEventType, EASEventType_eASAvailabilityChange /* IMPORTED_LONG_ENUMERATION_ITEM */, eASAvailabilityChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, EASEventType_eASDynamicInfoChange /* IMPORTED_LONG_ENUMERATION_ITEM */, eASDynamicInfoChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EASEventType, _encode_EASEventType } from "../TS33128Payloads/EASEventType.ta.mjs";
import { DiscoveredEAS, _decode_DiscoveredEAS, _encode_DiscoveredEAS } from "../TS33128Payloads/DiscoveredEAS.ta.mjs";
// export { DiscoveredEAS, _decode_DiscoveredEAS, _encode_DiscoveredEAS } from "../TS33128Payloads/DiscoveredEAS.ta.mjs";
import { FailureResponse, _decode_FailureResponse, _encode_FailureResponse, _enum_for_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";
// export { FailureResponse, _enum_for_FailureResponse, FailureResponse_error400 /* IMPORTED_LONG_ENUMERATION_ITEM */, error400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error401 /* IMPORTED_LONG_ENUMERATION_ITEM */, error401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error403 /* IMPORTED_LONG_ENUMERATION_ITEM */, error403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error404 /* IMPORTED_LONG_ENUMERATION_ITEM */, error404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error406 /* IMPORTED_LONG_ENUMERATION_ITEM */, error406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error411 /* IMPORTED_LONG_ENUMERATION_ITEM */, error411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error413 /* IMPORTED_LONG_ENUMERATION_ITEM */, error413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error415 /* IMPORTED_LONG_ENUMERATION_ITEM */, error415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error429 /* IMPORTED_LONG_ENUMERATION_ITEM */, error429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error500 /* IMPORTED_LONG_ENUMERATION_ITEM */, error500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error503 /* IMPORTED_LONG_ENUMERATION_ITEM */, error503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureResponse, _encode_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";


/**
 * @summary EESEASDiscoveryNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESEASDiscoveryNotification ::= SEQUENCE
 * {
 *     subscriptionID     [1] UTF8String,
 *     eventType          [2] EASEventType,
 *     discoveredEAS      [3] DiscoveredEAS,
 *     failureResponse    [4] FailureResponse OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESEASDiscoveryNotification {
    constructor (
        /**
         * @summary `subscriptionID`.
         * @public
         * @readonly
         */
        readonly subscriptionID: UTF8String,
        /**
         * @summary `eventType`.
         * @public
         * @readonly
         */
        readonly eventType: EASEventType,
        /**
         * @summary `discoveredEAS`.
         * @public
         * @readonly
         */
        readonly discoveredEAS: DiscoveredEAS,
        /**
         * @summary `failureResponse`.
         * @public
         * @readonly
         */
        readonly failureResponse: OPTIONAL<FailureResponse>
    ) {}

    /**
     * @summary Restructures an object into a EESEASDiscoveryNotification
     * @description
     * 
     * This takes an `object` and converts it to a `EESEASDiscoveryNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESEASDiscoveryNotification`.
     * @returns {EESEASDiscoveryNotification}
     */
    public static _from_object (_o: { [_K in keyof (EESEASDiscoveryNotification)]: (EESEASDiscoveryNotification)[_K] }): EESEASDiscoveryNotification {
        return new EESEASDiscoveryNotification(_o.subscriptionID, _o.eventType, _o.discoveredEAS, _o.failureResponse);
    }

        /**
         * @summary The enum used as the type of the component `eventType`
         * @public
         * @static
         */

    public static _enum_for_eventType = _enum_for_EASEventType;        /**
         * @summary The enum used as the type of the component `failureResponse`
         * @public
         * @static
         */

    public static _enum_for_failureResponse = _enum_for_FailureResponse;
}

/**
 * @summary The Leading Root Component Types of EESEASDiscoveryNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESEASDiscoveryNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriptionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("discoveredEAS", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("failureResponse", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EESEASDiscoveryNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESEASDiscoveryNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESEASDiscoveryNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESEASDiscoveryNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESEASDiscoveryNotification: $.ASN1Decoder<EESEASDiscoveryNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESEASDiscoveryNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESEASDiscoveryNotification (el: _Element): EESEASDiscoveryNotification {
    if (!_cached_decoder_for_EESEASDiscoveryNotification) { _cached_decoder_for_EESEASDiscoveryNotification = function (el: _Element): EESEASDiscoveryNotification {
    let subscriptionID!: UTF8String;
    let eventType!: EASEventType;
    let discoveredEAS!: DiscoveredEAS;
    let failureResponse: OPTIONAL<FailureResponse>;
    const callbacks: $.DecodingMap = {
        "subscriptionID": (_el: _Element): void => { subscriptionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eventType": (_el: _Element): void => { eventType = $._decode_implicit<EASEventType>(() => _decode_EASEventType)(_el); },
        "discoveredEAS": (_el: _Element): void => { discoveredEAS = $._decode_implicit<DiscoveredEAS>(() => _decode_DiscoveredEAS)(_el); },
        "failureResponse": (_el: _Element): void => { failureResponse = $._decode_implicit<FailureResponse>(() => _decode_FailureResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESEASDiscoveryNotification,
        _extension_additions_list_spec_for_EESEASDiscoveryNotification,
        _root_component_type_list_2_spec_for_EESEASDiscoveryNotification,
        undefined,
    );
    return new EESEASDiscoveryNotification(
        subscriptionID,
        eventType,
        discoveredEAS,
        failureResponse
    );
}; }
    return _cached_decoder_for_EESEASDiscoveryNotification(el);
}

let _cached_encoder_for_EESEASDiscoveryNotification: $.ASN1Encoder<EESEASDiscoveryNotification> | null = null;

/**
 * @summary Encodes a(n) EESEASDiscoveryNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESEASDiscoveryNotification, encoded as an ASN.1 Element.
 */
export
function _encode_EESEASDiscoveryNotification (value: EESEASDiscoveryNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESEASDiscoveryNotification) { _cached_encoder_for_EESEASDiscoveryNotification = function (value: EESEASDiscoveryNotification, elGetter: $.ASN1Encoder<EESEASDiscoveryNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.subscriptionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EASEventType, $.BER)(value.eventType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_DiscoveredEAS, $.BER)(value.discoveredEAS, $.BER),
            /* IF_ABSENT  */ ((value.failureResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_FailureResponse, $.BER)(value.failureResponse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESEASDiscoveryNotification(value, elGetter);
}


/* eslint-enable */
