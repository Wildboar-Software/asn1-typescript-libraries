/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    ENUMERATED,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    NetworkCapability_networkType,
    _enum_for_NetworkCapability_networkType,
    iSDNPublic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    nonISDNPublic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    iSDNPrivate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    nonISDNPrivate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    other /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_NetworkCapability_networkType,
    _encode_NetworkCapability_networkType
} from "../CSTA-call-control/NetworkCapability-networkType.ta.mjs";

import {
    NetworkCapability_eventsProvided,
    bridged /* IMPORTED_SHORT_NAMED_BIT */,
    allCleared /* IMPORTED_SHORT_NAMED_BIT */,
    conferenced /* IMPORTED_SHORT_NAMED_BIT */,
    connectionCleared /* IMPORTED_SHORT_NAMED_BIT */,
    delivered /* IMPORTED_SHORT_NAMED_BIT */,
    digitsDialed /* IMPORTED_SHORT_NAMED_BIT */,
    diverted /* IMPORTED_SHORT_NAMED_BIT */,
    established /* IMPORTED_SHORT_NAMED_BIT */,
    failed /* IMPORTED_SHORT_NAMED_BIT */,
    held /* IMPORTED_SHORT_NAMED_BIT */,
    networkCapabilitiesChange /* IMPORTED_SHORT_NAMED_BIT */,
    networkReached /* IMPORTED_SHORT_NAMED_BIT */,
    offered /* IMPORTED_SHORT_NAMED_BIT */,
    originated /* IMPORTED_SHORT_NAMED_BIT */,
    queued /* IMPORTED_SHORT_NAMED_BIT */,
    retrieved /* IMPORTED_SHORT_NAMED_BIT */,
    serviceInitiated /* IMPORTED_SHORT_NAMED_BIT */,
    transferred /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_NetworkCapability_eventsProvided,
    _encode_NetworkCapability_eventsProvided
} from "../CSTA-call-control/NetworkCapability-eventsProvided.ta.mjs";



/**
 * @summary NetworkCapability
 * @description
 *
 * Type of network reached and which Call Control events that
 * network can provide. Reported on Network Reached /
 * Network Capabilities Changed. After an interworking
 * situation, event reporting for the call may be reduced.
 * ECMA-269 §17.2 (Network Capabilities Changed).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCapability ::= SEQUENCE
 * {     networkType ENUMERATED
 *     {     iSDNPublic                 ( 0),
 *         nonISDNPublic                 ( 1),
 *         iSDNPrivate                 ( 2),
 *         nonISDNPrivate                 ( 3),
 *         other                     ( 4) },
 *     eventsProvided BIT STRING
 *     {     bridged                 ( 0),
 *         allCleared                 ( 1),
 *         conferenced                 ( 2),
 *         connectionCleared             ( 3),
 *         delivered                 ( 4),
 *         digitsDialed                 ( 5),
 *         diverted                 ( 6),
 *         established                 ( 7),
 *         failed                     ( 8),
 *         held                     ( 9),
 *         networkCapabilitiesChange         (10),
 *         networkReached                 (11),
 *         offered                 (12),
 *         originated                 (13),
 *         queued                     (14),
 *         retrieved                 (15),
 *         serviceInitiated             (16),
 *         transferred                 (17) } OPTIONAL }
 * ```
 * 
 * @class
 */
export
class NetworkCapability {
    constructor (
        /**
         * @summary `networkType`.
         * @description
         *
         * ISDN/non-ISDN public or private, or other. ECMA-269
         * Network Capabilities Changed.
         *
         * @public
         * @readonly
         */
        readonly networkType: NetworkCapability_networkType,
        /**
         * @summary `eventsProvided`.
         * @description
         *
         * Bitmap of Call Control events the network can report.
         * ECMA-269 Network Capabilities Changed.
         *
         * @public
         * @readonly
         */
        readonly eventsProvided: OPTIONAL<NetworkCapability_eventsProvided>
    ) {}

    /**
     * @summary Restructures an object into a NetworkCapability
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkCapability`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkCapability`.
     * @returns {NetworkCapability}
     */
    public static _from_object (_o: { [_K in keyof (NetworkCapability)]: (NetworkCapability)[_K] }): NetworkCapability {
        return new NetworkCapability(_o.networkType, _o.eventsProvided);
    }

        /**
         * @summary The enum used as the type of the component `networkType`
         * @public
         * @static
         */

    public static _enum_for_networkType = _enum_for_NetworkCapability_networkType;
}

/**
 * @summary The Leading Root Component Types of NetworkCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkCapability: $.ComponentSpec[] = [
    new $.ComponentSpec("networkType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("eventsProvided", true, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of NetworkCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkCapability: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkCapability: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkCapability: $.ASN1Decoder<NetworkCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCapability (el: _Element): NetworkCapability {
    if (!_cached_decoder_for_NetworkCapability) { _cached_decoder_for_NetworkCapability = function (el: _Element): NetworkCapability {
    let networkType!: NetworkCapability_networkType;
    let eventsProvided: OPTIONAL<NetworkCapability_eventsProvided>;
    const callbacks: $.DecodingMap = {
        "networkType": (_el: _Element): void => { networkType = _decode_NetworkCapability_networkType(_el); },
        "eventsProvided": (_el: _Element): void => { eventsProvided = _decode_NetworkCapability_eventsProvided(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkCapability,
        _extension_additions_list_spec_for_NetworkCapability,
        _root_component_type_list_2_spec_for_NetworkCapability,
        undefined,
    );
    return new NetworkCapability(
        networkType,
        eventsProvided
    );
}; }
    return _cached_decoder_for_NetworkCapability(el);
}

let _cached_encoder_for_NetworkCapability: $.ASN1Encoder<NetworkCapability> | null = null;

/**
 * @summary Encodes a(n) NetworkCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCapability, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCapability (value: NetworkCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCapability) { _cached_encoder_for_NetworkCapability = function (value: NetworkCapability, elGetter: $.ASN1Encoder<NetworkCapability>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NetworkCapability_networkType(value.networkType, $.BER),
            /* IF_ABSENT  */ ((value.eventsProvided === undefined) ? undefined : _encode_NetworkCapability_eventsProvided(value.eventsProvided, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NetworkCapability(value, elGetter);
}


/* eslint-enable */
