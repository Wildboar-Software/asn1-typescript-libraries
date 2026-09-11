/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    OCTET_STRING,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { PresenceState, _decode_PresenceState, _encode_PresenceState } from "../CSTA-device-feature-types/PresenceState.ta.mjs";

import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetPresenceStateResult
 * @description
 *
 * Positive ack (ECMA-269 §22.1.13.2.1). Optional place, mood,
 * namedPresenceState are natural-language detail (§12.2.24 FR 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetPresenceStateResult ::= SEQUENCE
 * {     presenceState             PresenceState,
 *     fromTime            [0] IMPLICIT TimeInfo            OPTIONAL,
 *     untilTime            [1] IMPLICIT TimeInfo            OPTIONAL,
 *     place                [2] IMPLICIT OCTET STRING        OPTIONAL,
 *     mood                [3] IMPLICIT OCTET STRING        OPTIONAL,
 *     namedPresenceState         [4] IMPLICIT OCTET STRING        OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetPresenceStateResult {
    constructor (
        /**
         * @summary `presenceState`.
         * @description
         *
         * Presence values (ECMA-269 §12.2.24): available, away, busy, calling,
         * dnd, meeting, offline, unknown (default), vacation,
         * applicationSpecified0–10. 9th-edition feature. `dnd` does not
         * activate Do Not Disturb (§22.1.21.3.4 FR 1).
         * @public
         * @readonly
         */
        readonly presenceState: PresenceState,
        /**
         * @summary `fromTime`.
         * @description
         *
         * Start date and time of the presence state.
         * @public
         * @readonly
         */
        readonly fromTime: OPTIONAL<TimeInfo>,
        /**
         * @summary `untilTime`.
         * @description
         *
         * End date and time of the presence state.
         * @public
         * @readonly
         */
        readonly untilTime: OPTIONAL<TimeInfo>,
        /**
         * @summary `place`.
         * @description
         *
         * Natural-language description of current location.
         * @public
         * @readonly
         */
        readonly place: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `mood`.
         * @description
         *
         * Natural-language description of current mood.
         * @public
         * @readonly
         */
        readonly mood: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `namedPresenceState`.
         * @description
         *
         * Natural-language description of availability.
         * @public
         * @readonly
         */
        readonly namedPresenceState: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetPresenceStateResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetPresenceStateResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetPresenceStateResult`.
     * @returns {GetPresenceStateResult}
     */
    public static _from_object (_o: { [_K in keyof (GetPresenceStateResult)]: (GetPresenceStateResult)[_K] }): GetPresenceStateResult {
        return new GetPresenceStateResult(_o.presenceState, _o.fromTime, _o.untilTime, _o.place, _o.mood, _o.namedPresenceState, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetPresenceStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetPresenceStateResult: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceState", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("fromTime", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("untilTime", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("place", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mood", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("namedPresenceState", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetPresenceStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetPresenceStateResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetPresenceStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetPresenceStateResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetPresenceStateResult: $.ASN1Decoder<GetPresenceStateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetPresenceStateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetPresenceStateResult (el: _Element): GetPresenceStateResult {
    if (!_cached_decoder_for_GetPresenceStateResult) { _cached_decoder_for_GetPresenceStateResult = function (el: _Element): GetPresenceStateResult {
    let presenceState!: PresenceState;
    let fromTime: OPTIONAL<TimeInfo>;
    let untilTime: OPTIONAL<TimeInfo>;
    let place: OPTIONAL<OCTET_STRING>;
    let mood: OPTIONAL<OCTET_STRING>;
    let namedPresenceState: OPTIONAL<OCTET_STRING>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "presenceState": (_el: _Element): void => { presenceState = _decode_PresenceState(_el); },
        "fromTime": (_el: _Element): void => { fromTime = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "untilTime": (_el: _Element): void => { untilTime = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "place": (_el: _Element): void => { place = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mood": (_el: _Element): void => { mood = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "namedPresenceState": (_el: _Element): void => { namedPresenceState = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetPresenceStateResult,
        _extension_additions_list_spec_for_GetPresenceStateResult,
        _root_component_type_list_2_spec_for_GetPresenceStateResult,
        undefined,
    );
    return new GetPresenceStateResult(
        presenceState,
        fromTime,
        untilTime,
        place,
        mood,
        namedPresenceState,
        extensions
    );
}; }
    return _cached_decoder_for_GetPresenceStateResult(el);
}

let _cached_encoder_for_GetPresenceStateResult: $.ASN1Encoder<GetPresenceStateResult> | null = null;

/**
 * @summary Encodes a(n) GetPresenceStateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetPresenceStateResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetPresenceStateResult (value: GetPresenceStateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetPresenceStateResult) { _cached_encoder_for_GetPresenceStateResult = function (value: GetPresenceStateResult, elGetter: $.ASN1Encoder<GetPresenceStateResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PresenceState(value.presenceState, $.BER),
            /* IF_ABSENT  */ ((value.fromTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TimeInfo, $.BER)(value.fromTime, $.BER)),
            /* IF_ABSENT  */ ((value.untilTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TimeInfo, $.BER)(value.untilTime, $.BER)),
            /* IF_ABSENT  */ ((value.place === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.place, $.BER)),
            /* IF_ABSENT  */ ((value.mood === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.mood, $.BER)),
            /* IF_ABSENT  */ ((value.namedPresenceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.namedPresenceState, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetPresenceStateResult(value, elGetter);
}


/* eslint-enable */
