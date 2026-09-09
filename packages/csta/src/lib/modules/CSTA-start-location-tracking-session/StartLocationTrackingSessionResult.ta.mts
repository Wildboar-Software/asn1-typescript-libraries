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
    PIDProfile,
    _enum_for_PIDProfile,
    _decode_PIDProfile,
    _encode_PIDProfile
} from "../CSTA-start-location-tracking-session/PIDProfile.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StartLocationTrackingSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartLocationTrackingSessionResult ::= SEQUENCE 
 * {    locCrossRefID            LocCrossRefID,
 *     pidProfile            PIDProfile                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartLocationTrackingSessionResult {
    constructor (
        /**
         * @summary `locCrossRefID`.
         * @public
         * @readonly
         */
        readonly locCrossRefID: LocCrossRefID,
        /**
         * @summary `pidProfile`.
         * @public
         * @readonly
         */
        readonly pidProfile: OPTIONAL<PIDProfile>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StartLocationTrackingSessionResult
     * @description
     * 
     * This takes an `object` and converts it to a `StartLocationTrackingSessionResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartLocationTrackingSessionResult`.
     * @returns {StartLocationTrackingSessionResult}
     */
    public static _from_object (_o: { [_K in keyof (StartLocationTrackingSessionResult)]: (StartLocationTrackingSessionResult)[_K] }): StartLocationTrackingSessionResult {
        return new StartLocationTrackingSessionResult(_o.locCrossRefID, _o.pidProfile, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `pidProfile`
         * @public
         * @static
         */

    public static _enum_for_pidProfile = _enum_for_PIDProfile;
}

/**
 * @summary The Leading Root Component Types of StartLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartLocationTrackingSessionResult: $.ComponentSpec[] = [
    new $.ComponentSpec("locCrossRefID", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("pidProfile", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StartLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartLocationTrackingSessionResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartLocationTrackingSessionResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartLocationTrackingSessionResult: $.ASN1Decoder<StartLocationTrackingSessionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartLocationTrackingSessionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartLocationTrackingSessionResult (el: _Element): StartLocationTrackingSessionResult {
    if (!_cached_decoder_for_StartLocationTrackingSessionResult) { _cached_decoder_for_StartLocationTrackingSessionResult = function (el: _Element): StartLocationTrackingSessionResult {
    let locCrossRefID!: LocCrossRefID;
    let pidProfile: OPTIONAL<PIDProfile>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "locCrossRefID": (_el: _Element): void => { locCrossRefID = _decode_LocCrossRefID(_el); },
        "pidProfile": (_el: _Element): void => { pidProfile = _decode_PIDProfile(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartLocationTrackingSessionResult,
        _extension_additions_list_spec_for_StartLocationTrackingSessionResult,
        _root_component_type_list_2_spec_for_StartLocationTrackingSessionResult,
        undefined,
    );
    return new StartLocationTrackingSessionResult(
        locCrossRefID,
        pidProfile,
        extensions
    );
}; }
    return _cached_decoder_for_StartLocationTrackingSessionResult(el);
}

let _cached_encoder_for_StartLocationTrackingSessionResult: $.ASN1Encoder<StartLocationTrackingSessionResult> | null = null;

/**
 * @summary Encodes a(n) StartLocationTrackingSessionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartLocationTrackingSessionResult, encoded as an ASN.1 Element.
 */
export
function _encode_StartLocationTrackingSessionResult (value: StartLocationTrackingSessionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartLocationTrackingSessionResult) { _cached_encoder_for_StartLocationTrackingSessionResult = function (value: StartLocationTrackingSessionResult, elGetter: $.ASN1Encoder<StartLocationTrackingSessionResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LocCrossRefID(value.locCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.pidProfile === undefined) ? undefined : _encode_PIDProfile(value.pidProfile, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartLocationTrackingSessionResult(value, elGetter);
}


/* eslint-enable */
