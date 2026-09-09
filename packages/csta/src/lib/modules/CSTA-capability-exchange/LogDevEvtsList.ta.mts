/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CallControlEvtsList, _decode_CallControlEvtsList, _encode_CallControlEvtsList } from "../CSTA-capability-exchange/CallControlEvtsList.ta.mjs";

import { CallAssociatedEvtsList, _decode_CallAssociatedEvtsList, _encode_CallAssociatedEvtsList } from "../CSTA-capability-exchange/CallAssociatedEvtsList.ta.mjs";

import { LogicalEvtsList, _decode_LogicalEvtsList, _encode_LogicalEvtsList } from "../CSTA-capability-exchange/LogicalEvtsList.ta.mjs";

import { MediaEvtsList, _decode_MediaEvtsList, _encode_MediaEvtsList } from "../CSTA-capability-exchange/MediaEvtsList.ta.mjs";

import { VoiceUnitEvtsList, _decode_VoiceUnitEvtsList, _encode_VoiceUnitEvtsList } from "../CSTA-capability-exchange/VoiceUnitEvtsList.ta.mjs";



/**
 * @summary LogDevEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogDevEvtsList ::= SEQUENCE
 * {     callControlEvtsList         [0] IMPLICIT CallControlEvtsList         OPTIONAL,
 *     callAssociatedEvtsList         [1] IMPLICIT CallAssociatedEvtsList         OPTIONAL,
 *     logicalEvtsList         [2] IMPLICIT LogicalEvtsList             OPTIONAL,
 *     mediaEvtsList             [3] IMPLICIT MediaEvtsList             OPTIONAL,
 *     voiceUnitEvtsList         [4] IMPLICIT VoiceUnitEvtsList             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogDevEvtsList {
    constructor (
        /**
         * @summary `callControlEvtsList`.
         * @public
         * @readonly
         */
        readonly callControlEvtsList: OPTIONAL<CallControlEvtsList>,
        /**
         * @summary `callAssociatedEvtsList`.
         * @public
         * @readonly
         */
        readonly callAssociatedEvtsList: OPTIONAL<CallAssociatedEvtsList>,
        /**
         * @summary `logicalEvtsList`.
         * @public
         * @readonly
         */
        readonly logicalEvtsList: OPTIONAL<LogicalEvtsList>,
        /**
         * @summary `mediaEvtsList`.
         * @public
         * @readonly
         */
        readonly mediaEvtsList: OPTIONAL<MediaEvtsList>,
        /**
         * @summary `voiceUnitEvtsList`.
         * @public
         * @readonly
         */
        readonly voiceUnitEvtsList: OPTIONAL<VoiceUnitEvtsList>
    ) {}

    /**
     * @summary Restructures an object into a LogDevEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `LogDevEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogDevEvtsList`.
     * @returns {LogDevEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (LogDevEvtsList)]: (LogDevEvtsList)[_K] }): LogDevEvtsList {
        return new LogDevEvtsList(_o.callControlEvtsList, _o.callAssociatedEvtsList, _o.logicalEvtsList, _o.mediaEvtsList, _o.voiceUnitEvtsList);
    }


}

/**
 * @summary The Leading Root Component Types of LogDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogDevEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("callControlEvtsList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callAssociatedEvtsList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("logicalEvtsList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mediaEvtsList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("voiceUnitEvtsList", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of LogDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogDevEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogDevEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogDevEvtsList: $.ASN1Decoder<LogDevEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogDevEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogDevEvtsList (el: _Element): LogDevEvtsList {
    if (!_cached_decoder_for_LogDevEvtsList) { _cached_decoder_for_LogDevEvtsList = function (el: _Element): LogDevEvtsList {
    let callControlEvtsList: OPTIONAL<CallControlEvtsList>;
    let callAssociatedEvtsList: OPTIONAL<CallAssociatedEvtsList>;
    let logicalEvtsList: OPTIONAL<LogicalEvtsList>;
    let mediaEvtsList: OPTIONAL<MediaEvtsList>;
    let voiceUnitEvtsList: OPTIONAL<VoiceUnitEvtsList>;
    const callbacks: $.DecodingMap = {
        "callControlEvtsList": (_el: _Element): void => { callControlEvtsList = $._decode_implicit<CallControlEvtsList>(() => _decode_CallControlEvtsList)(_el); },
        "callAssociatedEvtsList": (_el: _Element): void => { callAssociatedEvtsList = $._decode_implicit<CallAssociatedEvtsList>(() => _decode_CallAssociatedEvtsList)(_el); },
        "logicalEvtsList": (_el: _Element): void => { logicalEvtsList = $._decode_implicit<LogicalEvtsList>(() => _decode_LogicalEvtsList)(_el); },
        "mediaEvtsList": (_el: _Element): void => { mediaEvtsList = $._decode_implicit<MediaEvtsList>(() => _decode_MediaEvtsList)(_el); },
        "voiceUnitEvtsList": (_el: _Element): void => { voiceUnitEvtsList = $._decode_implicit<VoiceUnitEvtsList>(() => _decode_VoiceUnitEvtsList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogDevEvtsList,
        _extension_additions_list_spec_for_LogDevEvtsList,
        _root_component_type_list_2_spec_for_LogDevEvtsList,
        undefined,
    );
    return new LogDevEvtsList(
        callControlEvtsList,
        callAssociatedEvtsList,
        logicalEvtsList,
        mediaEvtsList,
        voiceUnitEvtsList
    );
}; }
    return _cached_decoder_for_LogDevEvtsList(el);
}

let _cached_encoder_for_LogDevEvtsList: $.ASN1Encoder<LogDevEvtsList> | null = null;

/**
 * @summary Encodes a(n) LogDevEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogDevEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_LogDevEvtsList (value: LogDevEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogDevEvtsList) { _cached_encoder_for_LogDevEvtsList = function (value: LogDevEvtsList, elGetter: $.ASN1Encoder<LogDevEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callControlEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallControlEvtsList, $.BER)(value.callControlEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.callAssociatedEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallAssociatedEvtsList, $.BER)(value.callAssociatedEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.logicalEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LogicalEvtsList, $.BER)(value.logicalEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaEvtsList, $.BER)(value.mediaEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.voiceUnitEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_VoiceUnitEvtsList, $.BER)(value.voiceUnitEvtsList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogDevEvtsList(value, elGetter);
}


/* eslint-enable */
