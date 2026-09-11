/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { LocCrossRefID, _decode_LocCrossRefID, _encode_LocCrossRefID } from "../CSTA-device-feature-types/LocCrossRefID.ta.mjs";

import {
    LocReason,
    _enum_for_LocReason,
    _decode_LocReason,
    _encode_LocReason
} from "../CSTA-device-feature-types/LocReason.ta.mjs";

import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary LocationTrackingSessionSuspendedArgument
 * @description
 *
 * Session, optional reason, optional unreported location list (ECMA-269
 * §28.1.4.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationTrackingSessionSuspendedArgument ::= SEQUENCE
 * {    locCrossRefID            LocCrossRefID,
 *     locReason            LocReason                OPTIONAL,
 *     locationInfoList        LocationInfoList            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationTrackingSessionSuspendedArgument {
    constructor (
        /**
         * @summary `locCrossRefID`.
         * @description
         *
         * Identifies the location tracking session (ECMA-269 §6.8.4).
         *
         * @public
         * @readonly
         */
        readonly locCrossRefID: LocCrossRefID,
        /**
         * @summary `locReason`.
         * @description
         *
         * connection to device/network interrupted, or performance condition
         * (ECMA-269 §28.1.4.1).
         *
         * @public
         * @readonly
         */
        readonly locReason: OPTIONAL<LocReason>,
        /**
         * @summary `locationInfoList`.
         * @description
         *
         * Collected location not yet reported when the session was suspended
         * (ECMA-269 §28.1.4.1 / FR 2).
         *
         * @public
         * @readonly
         */
        readonly locationInfoList: OPTIONAL<LocationInfoList>,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a LocationTrackingSessionSuspendedArgument
     * @description
     * 
     * This takes an `object` and converts it to a `LocationTrackingSessionSuspendedArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationTrackingSessionSuspendedArgument`.
     * @returns {LocationTrackingSessionSuspendedArgument}
     */
    public static _from_object (_o: { [_K in keyof (LocationTrackingSessionSuspendedArgument)]: (LocationTrackingSessionSuspendedArgument)[_K] }): LocationTrackingSessionSuspendedArgument {
        return new LocationTrackingSessionSuspendedArgument(_o.locCrossRefID, _o.locReason, _o.locationInfoList, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `locReason`
         * @public
         * @static
         */

    public static _enum_for_locReason = _enum_for_LocReason;
}

/**
 * @summary The Leading Root Component Types of LocationTrackingSessionSuspendedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationTrackingSessionSuspendedArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("locCrossRefID", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("locReason", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("locationInfoList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of LocationTrackingSessionSuspendedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationTrackingSessionSuspendedArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationTrackingSessionSuspendedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationTrackingSessionSuspendedArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationTrackingSessionSuspendedArgument: $.ASN1Decoder<LocationTrackingSessionSuspendedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationTrackingSessionSuspendedArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationTrackingSessionSuspendedArgument (el: _Element): LocationTrackingSessionSuspendedArgument {
    if (!_cached_decoder_for_LocationTrackingSessionSuspendedArgument) { _cached_decoder_for_LocationTrackingSessionSuspendedArgument = function (el: _Element): LocationTrackingSessionSuspendedArgument {
    let locCrossRefID!: LocCrossRefID;
    let locReason: OPTIONAL<LocReason>;
    let locationInfoList: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "locCrossRefID": (_el: _Element): void => { locCrossRefID = _decode_LocCrossRefID(_el); },
        "locReason": (_el: _Element): void => { locReason = _decode_LocReason(_el); },
        "locationInfoList": (_el: _Element): void => { locationInfoList = _decode_LocationInfoList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationTrackingSessionSuspendedArgument,
        _extension_additions_list_spec_for_LocationTrackingSessionSuspendedArgument,
        _root_component_type_list_2_spec_for_LocationTrackingSessionSuspendedArgument,
        undefined,
    );
    return new LocationTrackingSessionSuspendedArgument(
        locCrossRefID,
        locReason,
        locationInfoList,
        extensions
    );
}; }
    return _cached_decoder_for_LocationTrackingSessionSuspendedArgument(el);
}

let _cached_encoder_for_LocationTrackingSessionSuspendedArgument: $.ASN1Encoder<LocationTrackingSessionSuspendedArgument> | null = null;

/**
 * @summary Encodes a(n) LocationTrackingSessionSuspendedArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationTrackingSessionSuspendedArgument, encoded as an ASN.1 Element.
 */
export
function _encode_LocationTrackingSessionSuspendedArgument (value: LocationTrackingSessionSuspendedArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationTrackingSessionSuspendedArgument) { _cached_encoder_for_LocationTrackingSessionSuspendedArgument = function (value: LocationTrackingSessionSuspendedArgument, elGetter: $.ASN1Encoder<LocationTrackingSessionSuspendedArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LocCrossRefID(value.locCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.locReason === undefined) ? undefined : _encode_LocReason(value.locReason, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfoList === undefined) ? undefined : _encode_LocationInfoList(value.locationInfoList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationTrackingSessionSuspendedArgument(value, elGetter);
}


/* eslint-enable */
