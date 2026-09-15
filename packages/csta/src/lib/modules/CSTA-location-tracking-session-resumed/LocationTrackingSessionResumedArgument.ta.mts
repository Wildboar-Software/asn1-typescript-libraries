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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary LocationTrackingSessionResumedArgument
 * @description
 *
 * Session identifier and optional reason (ECMA-269 §28.1.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationTrackingSessionResumedArgument ::= SEQUENCE
 * {    locCrossRefID            LocCrossRefID,    
 *     locReason            LocReason                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationTrackingSessionResumedArgument {
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
         * Why the session was resumed, when provided (ECMA-269 §28.1.3.1).
         *
         * @public
         * @readonly
         */
        readonly locReason: OPTIONAL<LocReason>,
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
     * @summary Restructures an object into a LocationTrackingSessionResumedArgument
     * @description
     * 
     * This takes an `object` and converts it to a `LocationTrackingSessionResumedArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationTrackingSessionResumedArgument`.
     * @returns {LocationTrackingSessionResumedArgument}
     */
    public static _from_object (_o: { [_K in keyof (LocationTrackingSessionResumedArgument)]: (LocationTrackingSessionResumedArgument)[_K] }): LocationTrackingSessionResumedArgument {
        return new LocationTrackingSessionResumedArgument(_o.locCrossRefID, _o.locReason, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `locReason`
         * @public
         * @static
         */

    public static _enum_for_locReason = _enum_for_LocReason;
}

/**
 * @summary The Leading Root Component Types of LocationTrackingSessionResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationTrackingSessionResumedArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("locCrossRefID", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("locReason", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of LocationTrackingSessionResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationTrackingSessionResumedArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationTrackingSessionResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationTrackingSessionResumedArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationTrackingSessionResumedArgument: $.ASN1Decoder<LocationTrackingSessionResumedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationTrackingSessionResumedArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationTrackingSessionResumedArgument (el: _Element): LocationTrackingSessionResumedArgument {
    if (!_cached_decoder_for_LocationTrackingSessionResumedArgument) { _cached_decoder_for_LocationTrackingSessionResumedArgument = function (el: _Element): LocationTrackingSessionResumedArgument {
    let locCrossRefID!: LocCrossRefID;
    let locReason: OPTIONAL<LocReason>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "locCrossRefID": (_el: _Element): void => { locCrossRefID = _decode_LocCrossRefID(_el); },
        "locReason": (_el: _Element): void => { locReason = _decode_LocReason(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationTrackingSessionResumedArgument,
        _extension_additions_list_spec_for_LocationTrackingSessionResumedArgument,
        _root_component_type_list_2_spec_for_LocationTrackingSessionResumedArgument,
        undefined,
    );
    return new LocationTrackingSessionResumedArgument(
        locCrossRefID,
        locReason,
        extensions
    );
}; }
    return _cached_decoder_for_LocationTrackingSessionResumedArgument(el);
}

let _cached_encoder_for_LocationTrackingSessionResumedArgument: $.ASN1Encoder<LocationTrackingSessionResumedArgument> | null = null;

/**
 * @summary Encodes a(n) LocationTrackingSessionResumedArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationTrackingSessionResumedArgument, encoded as an ASN.1 Element.
 */
export
function _encode_LocationTrackingSessionResumedArgument (value: LocationTrackingSessionResumedArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationTrackingSessionResumedArgument) { _cached_encoder_for_LocationTrackingSessionResumedArgument = function (value: LocationTrackingSessionResumedArgument, elGetter: $.ASN1Encoder<LocationTrackingSessionResumedArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LocCrossRefID(value.locCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.locReason === undefined) ? undefined : _encode_LocReason(value.locReason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationTrackingSessionResumedArgument(value, elGetter);
}


/* eslint-enable */
