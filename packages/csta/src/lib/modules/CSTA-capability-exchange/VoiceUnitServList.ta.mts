/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { Activate, _decode_Activate, _encode_Activate } from "../CSTA-capability-exchange/Activate.ta.mjs";

import { Clear, _decode_Clear, _encode_Clear } from "../CSTA-capability-exchange/Clear.ta.mjs";

import { Deactivate, _decode_Deactivate, _encode_Deactivate } from "../CSTA-capability-exchange/Deactivate.ta.mjs";

import { ConcatenateMsg, _decode_ConcatenateMsg, _encode_ConcatenateMsg } from "../CSTA-capability-exchange/ConcatenateMsg.ta.mjs";

import { DeleteMsg, _decode_DeleteMsg, _encode_DeleteMsg } from "../CSTA-capability-exchange/DeleteMsg.ta.mjs";

import { Queue, _decode_Queue, _encode_Queue } from "../CSTA-capability-exchange/Queue.ta.mjs";

import { PlayMsg, _decode_PlayMsg, _encode_PlayMsg } from "../CSTA-capability-exchange/PlayMsg.ta.mjs";

import { QueryVoiceAttrib, _decode_QueryVoiceAttrib, _encode_QueryVoiceAttrib } from "../CSTA-capability-exchange/QueryVoiceAttrib.ta.mjs";

import { RecordMsg, _decode_RecordMsg, _encode_RecordMsg } from "../CSTA-capability-exchange/RecordMsg.ta.mjs";

import { Reposition, _decode_Reposition, _encode_Reposition } from "../CSTA-capability-exchange/Reposition.ta.mjs";

import { Resume, _decode_Resume, _encode_Resume } from "../CSTA-capability-exchange/Resume.ta.mjs";

import { Review, _decode_Review, _encode_Review } from "../CSTA-capability-exchange/Review.ta.mjs";

import { Start, _decode_Start, _encode_Start } from "../CSTA-capability-exchange/Start.ta.mjs";

import { SetVoiceAttrib, _decode_SetVoiceAttrib, _encode_SetVoiceAttrib } from "../CSTA-capability-exchange/SetVoiceAttrib.ta.mjs";

import { Stop, _decode_Stop, _encode_Stop } from "../CSTA-capability-exchange/Stop.ta.mjs";

import { Suspend, _decode_Suspend, _encode_Suspend } from "../CSTA-capability-exchange/Suspend.ta.mjs";

import { SynthesizeMsg, _decode_SynthesizeMsg, _encode_SynthesizeMsg } from "../CSTA-capability-exchange/SynthesizeMsg.ta.mjs";



/**
 * @summary VoiceUnitServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceUnitServList ::= SEQUENCE
 * {     activate            [12] IMPLICIT Activate            OPTIONAL,
 *     clear                [13] IMPLICIT Clear            OPTIONAL,
 *     deactivate            [14] IMPLICIT Deactivate        OPTIONAL,
 *     concatenateMsg             [ 0] IMPLICIT ConcatenateMsg         OPTIONAL,
 *     deleteMsg             [ 1] IMPLICIT DeleteMsg         OPTIONAL,
 *     queue                [15] IMPLICIT Queue            OPTIONAL,
 *     playMsg             [ 2] IMPLICIT PlayMsg             OPTIONAL,
 *     queryVoiceAttrib         [ 3] IMPLICIT QueryVoiceAttrib         OPTIONAL,
 *     recordMsg             [ 4] IMPLICIT RecordMsg         OPTIONAL,
 *     reposition             [ 5] IMPLICIT Reposition         OPTIONAL,
 *     resume                 [ 6] IMPLICIT Resume             OPTIONAL,
 *     review                 [ 7] IMPLICIT Review             OPTIONAL,
 *     start                [16] IMPLICIT Start            OPTIONAL,
 *     setVoiceAttrib             [ 8] IMPLICIT SetVoiceAttrib         OPTIONAL,
 *     stop                 [ 9] IMPLICIT Stop             OPTIONAL,
 *     suspend             [10] IMPLICIT Suspend             OPTIONAL,
 *     synthesizeMsg             [11] IMPLICIT SynthesizeMsg         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VoiceUnitServList {
    constructor (
        /**
         * @summary `activate`.
         * @public
         * @readonly
         */
        readonly activate: OPTIONAL<Activate>,
        /**
         * @summary `clear`.
         * @public
         * @readonly
         */
        readonly clear: OPTIONAL<Clear>,
        /**
         * @summary `deactivate`.
         * @public
         * @readonly
         */
        readonly deactivate: OPTIONAL<Deactivate>,
        /**
         * @summary `concatenateMsg`.
         * @public
         * @readonly
         */
        readonly concatenateMsg: OPTIONAL<ConcatenateMsg>,
        /**
         * @summary `deleteMsg`.
         * @public
         * @readonly
         */
        readonly deleteMsg: OPTIONAL<DeleteMsg>,
        /**
         * @summary `queue`.
         * @public
         * @readonly
         */
        readonly queue: OPTIONAL<Queue>,
        /**
         * @summary `playMsg`.
         * @public
         * @readonly
         */
        readonly playMsg: OPTIONAL<PlayMsg>,
        /**
         * @summary `queryVoiceAttrib`.
         * @public
         * @readonly
         */
        readonly queryVoiceAttrib: OPTIONAL<QueryVoiceAttrib>,
        /**
         * @summary `recordMsg`.
         * @public
         * @readonly
         */
        readonly recordMsg: OPTIONAL<RecordMsg>,
        /**
         * @summary `reposition`.
         * @public
         * @readonly
         */
        readonly reposition: OPTIONAL<Reposition>,
        /**
         * @summary `resume`.
         * @public
         * @readonly
         */
        readonly resume: OPTIONAL<Resume>,
        /**
         * @summary `review`.
         * @public
         * @readonly
         */
        readonly review: OPTIONAL<Review>,
        /**
         * @summary `start`.
         * @public
         * @readonly
         */
        readonly start: OPTIONAL<Start>,
        /**
         * @summary `setVoiceAttrib`.
         * @public
         * @readonly
         */
        readonly setVoiceAttrib: OPTIONAL<SetVoiceAttrib>,
        /**
         * @summary `stop`.
         * @public
         * @readonly
         */
        readonly stop: OPTIONAL<Stop>,
        /**
         * @summary `suspend`.
         * @public
         * @readonly
         */
        readonly suspend: OPTIONAL<Suspend>,
        /**
         * @summary `synthesizeMsg`.
         * @public
         * @readonly
         */
        readonly synthesizeMsg: OPTIONAL<SynthesizeMsg>
    ) {}

    /**
     * @summary Restructures an object into a VoiceUnitServList
     * @description
     * 
     * This takes an `object` and converts it to a `VoiceUnitServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VoiceUnitServList`.
     * @returns {VoiceUnitServList}
     */
    public static _from_object (_o: { [_K in keyof (VoiceUnitServList)]: (VoiceUnitServList)[_K] }): VoiceUnitServList {
        return new VoiceUnitServList(_o.activate, _o.clear, _o.deactivate, _o.concatenateMsg, _o.deleteMsg, _o.queue, _o.playMsg, _o.queryVoiceAttrib, _o.recordMsg, _o.reposition, _o.resume, _o.review, _o.start, _o.setVoiceAttrib, _o.stop, _o.suspend, _o.synthesizeMsg);
    }


}

/**
 * @summary The Leading Root Component Types of VoiceUnitServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VoiceUnitServList: $.ComponentSpec[] = [
    new $.ComponentSpec("activate", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("clear", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("deactivate", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("concatenateMsg", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("deleteMsg", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("queue", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("playMsg", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("queryVoiceAttrib", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordMsg", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("reposition", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("resume", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("review", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("start", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("setVoiceAttrib", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("stop", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("suspend", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("synthesizeMsg", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of VoiceUnitServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VoiceUnitServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VoiceUnitServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VoiceUnitServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VoiceUnitServList: $.ASN1Decoder<VoiceUnitServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceUnitServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceUnitServList (el: _Element): VoiceUnitServList {
    if (!_cached_decoder_for_VoiceUnitServList) { _cached_decoder_for_VoiceUnitServList = function (el: _Element): VoiceUnitServList {
    let activate: OPTIONAL<Activate>;
    let clear: OPTIONAL<Clear>;
    let deactivate: OPTIONAL<Deactivate>;
    let concatenateMsg: OPTIONAL<ConcatenateMsg>;
    let deleteMsg: OPTIONAL<DeleteMsg>;
    let queue: OPTIONAL<Queue>;
    let playMsg: OPTIONAL<PlayMsg>;
    let queryVoiceAttrib: OPTIONAL<QueryVoiceAttrib>;
    let recordMsg: OPTIONAL<RecordMsg>;
    let reposition: OPTIONAL<Reposition>;
    let resume: OPTIONAL<Resume>;
    let review: OPTIONAL<Review>;
    let start: OPTIONAL<Start>;
    let setVoiceAttrib: OPTIONAL<SetVoiceAttrib>;
    let stop: OPTIONAL<Stop>;
    let suspend: OPTIONAL<Suspend>;
    let synthesizeMsg: OPTIONAL<SynthesizeMsg>;
    const callbacks: $.DecodingMap = {
        "activate": (_el: _Element): void => { activate = $._decode_implicit<Activate>(() => _decode_Activate)(_el); },
        "clear": (_el: _Element): void => { clear = $._decode_implicit<Clear>(() => _decode_Clear)(_el); },
        "deactivate": (_el: _Element): void => { deactivate = $._decode_implicit<Deactivate>(() => _decode_Deactivate)(_el); },
        "concatenateMsg": (_el: _Element): void => { concatenateMsg = $._decode_implicit<ConcatenateMsg>(() => _decode_ConcatenateMsg)(_el); },
        "deleteMsg": (_el: _Element): void => { deleteMsg = $._decode_implicit<DeleteMsg>(() => _decode_DeleteMsg)(_el); },
        "queue": (_el: _Element): void => { queue = $._decode_implicit<Queue>(() => _decode_Queue)(_el); },
        "playMsg": (_el: _Element): void => { playMsg = $._decode_implicit<PlayMsg>(() => _decode_PlayMsg)(_el); },
        "queryVoiceAttrib": (_el: _Element): void => { queryVoiceAttrib = $._decode_implicit<QueryVoiceAttrib>(() => _decode_QueryVoiceAttrib)(_el); },
        "recordMsg": (_el: _Element): void => { recordMsg = $._decode_implicit<RecordMsg>(() => _decode_RecordMsg)(_el); },
        "reposition": (_el: _Element): void => { reposition = $._decode_implicit<Reposition>(() => _decode_Reposition)(_el); },
        "resume": (_el: _Element): void => { resume = $._decode_implicit<Resume>(() => _decode_Resume)(_el); },
        "review": (_el: _Element): void => { review = $._decode_implicit<Review>(() => _decode_Review)(_el); },
        "start": (_el: _Element): void => { start = $._decode_implicit<Start>(() => _decode_Start)(_el); },
        "setVoiceAttrib": (_el: _Element): void => { setVoiceAttrib = $._decode_implicit<SetVoiceAttrib>(() => _decode_SetVoiceAttrib)(_el); },
        "stop": (_el: _Element): void => { stop = $._decode_implicit<Stop>(() => _decode_Stop)(_el); },
        "suspend": (_el: _Element): void => { suspend = $._decode_implicit<Suspend>(() => _decode_Suspend)(_el); },
        "synthesizeMsg": (_el: _Element): void => { synthesizeMsg = $._decode_implicit<SynthesizeMsg>(() => _decode_SynthesizeMsg)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VoiceUnitServList,
        _extension_additions_list_spec_for_VoiceUnitServList,
        _root_component_type_list_2_spec_for_VoiceUnitServList,
        undefined,
    );
    return new VoiceUnitServList(
        activate,
        clear,
        deactivate,
        concatenateMsg,
        deleteMsg,
        queue,
        playMsg,
        queryVoiceAttrib,
        recordMsg,
        reposition,
        resume,
        review,
        start,
        setVoiceAttrib,
        stop,
        suspend,
        synthesizeMsg
    );
}; }
    return _cached_decoder_for_VoiceUnitServList(el);
}

let _cached_encoder_for_VoiceUnitServList: $.ASN1Encoder<VoiceUnitServList> | null = null;

/**
 * @summary Encodes a(n) VoiceUnitServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceUnitServList, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceUnitServList (value: VoiceUnitServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceUnitServList) { _cached_encoder_for_VoiceUnitServList = function (value: VoiceUnitServList, elGetter: $.ASN1Encoder<VoiceUnitServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.activate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Activate, $.BER)(value.activate, $.BER)),
            /* IF_ABSENT  */ ((value.clear === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_Clear, $.BER)(value.clear, $.BER)),
            /* IF_ABSENT  */ ((value.deactivate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Deactivate, $.BER)(value.deactivate, $.BER)),
            /* IF_ABSENT  */ ((value.concatenateMsg === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ConcatenateMsg, $.BER)(value.concatenateMsg, $.BER)),
            /* IF_ABSENT  */ ((value.deleteMsg === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DeleteMsg, $.BER)(value.deleteMsg, $.BER)),
            /* IF_ABSENT  */ ((value.queue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_Queue, $.BER)(value.queue, $.BER)),
            /* IF_ABSENT  */ ((value.playMsg === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PlayMsg, $.BER)(value.playMsg, $.BER)),
            /* IF_ABSENT  */ ((value.queryVoiceAttrib === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_QueryVoiceAttrib, $.BER)(value.queryVoiceAttrib, $.BER)),
            /* IF_ABSENT  */ ((value.recordMsg === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RecordMsg, $.BER)(value.recordMsg, $.BER)),
            /* IF_ABSENT  */ ((value.reposition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Reposition, $.BER)(value.reposition, $.BER)),
            /* IF_ABSENT  */ ((value.resume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Resume, $.BER)(value.resume, $.BER)),
            /* IF_ABSENT  */ ((value.review === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Review, $.BER)(value.review, $.BER)),
            /* IF_ABSENT  */ ((value.start === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_Start, $.BER)(value.start, $.BER)),
            /* IF_ABSENT  */ ((value.setVoiceAttrib === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SetVoiceAttrib, $.BER)(value.setVoiceAttrib, $.BER)),
            /* IF_ABSENT  */ ((value.stop === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Stop, $.BER)(value.stop, $.BER)),
            /* IF_ABSENT  */ ((value.suspend === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Suspend, $.BER)(value.suspend, $.BER)),
            /* IF_ABSENT  */ ((value.synthesizeMsg === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_SynthesizeMsg, $.BER)(value.synthesizeMsg, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VoiceUnitServList(value, elGetter);
}


/* eslint-enable */
