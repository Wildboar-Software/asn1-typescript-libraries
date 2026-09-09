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
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StopLocationTrackingSessionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopLocationTrackingSessionArgument ::= SEQUENCE
 * {    locCrossRefID            LocCrossRefID,
 *     reason                EventCause                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StopLocationTrackingSessionArgument {
    constructor (
        /**
         * @summary `locCrossRefID`.
         * @public
         * @readonly
         */
        readonly locCrossRefID: LocCrossRefID,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<EventCause>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StopLocationTrackingSessionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StopLocationTrackingSessionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopLocationTrackingSessionArgument`.
     * @returns {StopLocationTrackingSessionArgument}
     */
    public static _from_object (_o: { [_K in keyof (StopLocationTrackingSessionArgument)]: (StopLocationTrackingSessionArgument)[_K] }): StopLocationTrackingSessionArgument {
        return new StopLocationTrackingSessionArgument(_o.locCrossRefID, _o.reason, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `reason`
         * @public
         * @static
         */

    public static _enum_for_reason = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of StopLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopLocationTrackingSessionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("locCrossRefID", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StopLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopLocationTrackingSessionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopLocationTrackingSessionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopLocationTrackingSessionArgument: $.ASN1Decoder<StopLocationTrackingSessionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopLocationTrackingSessionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopLocationTrackingSessionArgument (el: _Element): StopLocationTrackingSessionArgument {
    if (!_cached_decoder_for_StopLocationTrackingSessionArgument) { _cached_decoder_for_StopLocationTrackingSessionArgument = function (el: _Element): StopLocationTrackingSessionArgument {
    let locCrossRefID!: LocCrossRefID;
    let reason: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "locCrossRefID": (_el: _Element): void => { locCrossRefID = _decode_LocCrossRefID(_el); },
        "reason": (_el: _Element): void => { reason = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopLocationTrackingSessionArgument,
        _extension_additions_list_spec_for_StopLocationTrackingSessionArgument,
        _root_component_type_list_2_spec_for_StopLocationTrackingSessionArgument,
        undefined,
    );
    return new StopLocationTrackingSessionArgument(
        locCrossRefID,
        reason,
        extensions
    );
}; }
    return _cached_decoder_for_StopLocationTrackingSessionArgument(el);
}

let _cached_encoder_for_StopLocationTrackingSessionArgument: $.ASN1Encoder<StopLocationTrackingSessionArgument> | null = null;

/**
 * @summary Encodes a(n) StopLocationTrackingSessionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopLocationTrackingSessionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StopLocationTrackingSessionArgument (value: StopLocationTrackingSessionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopLocationTrackingSessionArgument) { _cached_encoder_for_StopLocationTrackingSessionArgument = function (value: StopLocationTrackingSessionArgument, elGetter: $.ASN1Encoder<StopLocationTrackingSessionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LocCrossRefID(value.locCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : _encode_EventCause(value.reason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopLocationTrackingSessionArgument(value, elGetter);
}


/* eslint-enable */
