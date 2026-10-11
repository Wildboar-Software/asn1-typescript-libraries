/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SignalName, _decode_SignalName, _encode_SignalName } from "../MEDIA-GATEWAY-CONTROL/SignalName.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { SignalType, _decode_SignalType, _encode_SignalType, _enum_for_SignalType } from "../MEDIA-GATEWAY-CONTROL/SignalType.ta.mjs";
import { NotifyCompletion, _decode_NotifyCompletion, _encode_NotifyCompletion } from "../MEDIA-GATEWAY-CONTROL/NotifyCompletion.ta.mjs";
import { SigParameter, _decode_SigParameter, _encode_SigParameter } from "../MEDIA-GATEWAY-CONTROL/SigParameter.ta.mjs";
import { SignalDirection, _decode_SignalDirection, _encode_SignalDirection, _enum_for_SignalDirection } from "../MEDIA-GATEWAY-CONTROL/SignalDirection.ta.mjs";
import { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";


/**
 * @summary Signal
 * @description
 * 
 * One signal applied to a termination (ITU-T Rec. H.248.1 (03/2013) clause
 * 7.1.11).
 *
 * Signals are defined in packages. The signal proceeds from the termination
 * toward the outside of the context unless direction says otherwise. If the MG
 * cannot produce the requested direction it returns error 501 ("Not
 * implemented"). Overriding the signal type does not change the signal's
 * meaning. A type overridden to timeout requires `duration`. Duration on an
 * on/off signal is ignored.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signal ::= SEQUENCE
 *     {
 *         signalName                [0] SignalName,
 *         streamID                [1] StreamID OPTIONAL,
 *         sigType                    [2] SignalType OPTIONAL,
 *         duration                [3] INTEGER (0..65535) OPTIONAL,
 *         notifyCompletion        [4] NotifyCompletion OPTIONAL,
 *         keepActive                [5] BOOLEAN OPTIONAL,
 *         sigParList                [6] SEQUENCE OF SigParameter,
 *         ...,
 *         direction                [7] SignalDirection OPTIONAL,
 *         requestID                [8] RequestID OPTIONAL,
 *         intersigDelay            [9] INTEGER (0..65535) OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class Signal {
    constructor (
        /**
         * @summary `signalName`.
         * @description
         *
         * Package and signal identifier. No wildcard is used in a SignalID
         * (clause 7.1.11.3).
         *
         * @public
         * @readonly
         */
        readonly signalName: SignalName,
        /**
         * @summary `streamID`.
         * @description
         *
         * Stream the signal is applied to. Omitted or 0 applies it to every
         * stream, including one created by the same command (clause 7.1.11.4).
         *
         * @public
         * @readonly
         */
        readonly streamID: OPTIONAL<StreamID>,
        /**
         * @summary `sigType`.
         * @description
         *
         * Overrides the package's default type: brief, on/off, or timeout
         * (clause 7.1.11.7). Omitted, the package default is used.
         *
         * @public
         * @readonly
         */
        readonly sigType: OPTIONAL<SignalType>,
        /**
         * @summary `duration`.
         * @description
         *
         * Length of a timeout signal, in hundredths of a second, 0 to 65535
         * (clause 7.1.11.6). Required when the type is overridden to timeout.
         * Ignored on an on/off signal.
         *
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<INTEGER>,
        /**
         * @summary `notifyCompletion`.
         * @description
         *
         * Reasons for which signal completion should be notified. If this field
         * is omitted, a completion notification is generated only when the
         * signal stopped, or never started, for some other reason (clause
         * 7.1.11.5). Reporting also requires the Signal Completion event of
         * clause E.1.2 in the active Events descriptor.
         *
         * @public
         * @readonly
         */
        readonly notifyCompletion: OPTIONAL<NotifyCompletion>,
        /**
         * @summary `keepActive`.
         * @description
         *
         * On a replacement descriptor, a signal that is already playing and
         * carries this flag continues. A signal that is not already playing is
         * ignored when the flag is set (clause 7.1.11.11).
         *
         * @public
         * @readonly
         */
        readonly keepActive: OPTIONAL<BOOLEAN>,
        /**
         * @summary `sigParList`.
         * @description
         *
         * Package-defined parameters of the signal.
         *
         * @public
         * @readonly
         */
        readonly sigParList: SigParameter[],
        /**
         * @summary `direction`.
         * @description
         *
         * Where the signal is sent. External is toward the outside of the
         * context, which is the default. Internal plays into the context. Both
         * does both. The base direction takes precedence over a package-defined
         * direction parameter when both are present (clause 7.1.11.9).
         *
         * @public
         * @readonly
         */
        readonly direction: OPTIONAL<SignalDirection>,
        /**
         * @summary `requestID`.
         * @description
         *
         * Correlates this signal instance with its Signal Completion
         * ObservedEvent when several signals share a SignalID. Included only
         * together with `notifyCompletion` (clause 7.1.11.5).
         *
         * @public
         * @readonly
         */
        readonly requestID: OPTIONAL<RequestID>,
        /**
         * @summary `intersigDelay`.
         * @description
         *
         * Delay applied after this signal when it is not the last signal in a
         * sequential list, 0 to 65535. The delay is part of the signal's
         * duration for that list. On a signal that is not in a list, or is the
         * last element of a list, the delay is ignored (clause 7.1.11.8). The
         * Recommendation does not state the unit of this integer.
         *
         * @public
         * @readonly
         */
        readonly intersigDelay: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions this version does not define. Kept so a later
         * peer can still carry them (ITU-T Rec. H.248.1 (03/2013) clause 11.7).
         *
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (duration !== undefined) {
            const n = typeof duration === "bigint" ? duration : BigInt(duration);
            if (n < 0n || n > 65535n) {
                throw new ASN1OverflowError("Signal.duration violates INTEGER range");
            }
        }
        if (intersigDelay !== undefined) {
            const n = typeof intersigDelay === "bigint" ? intersigDelay : BigInt(intersigDelay);
            if (n < 0n || n > 65535n) {
                throw new ASN1OverflowError("Signal.intersigDelay violates INTEGER range");
            }
        }
    }

    /**
     * @summary Restructures an object into a Signal
     * @description
     * 
     * This takes an `object` and converts it to a `Signal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signal`.
     * @returns {Signal}
     */
    public static _from_object (_o: { [_K in keyof (Signal)]: (Signal)[_K] }): Signal {
        return new Signal(_o.signalName, _o.streamID, _o.sigType, _o.duration, _o.notifyCompletion, _o.keepActive, _o.sigParList, _o.direction, _o.requestID, _o.intersigDelay, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sigType`
         * @public
         * @static
         */

    public static _enum_for_sigType = _enum_for_SignalType;        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_SignalDirection;
}

/**
 * @summary The Leading Root Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Signal: $.ComponentSpec[] = [
    new $.ComponentSpec("signalName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sigType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("notifyCompletion", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("keepActive", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sigParList", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Signal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Signal: $.ComponentSpec[] = [
    new $.ComponentSpec("direction", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("requestID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("intersigDelay", true, $.hasTag(_TagClass.context, 9))
];

let _cached_decoder_for_Signal: $.ASN1Decoder<Signal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Signal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Signal (el: _Element): Signal {
    if (!_cached_decoder_for_Signal) { _cached_decoder_for_Signal = function (el: _Element): Signal {
    let signalName!: SignalName;
    let streamID: OPTIONAL<StreamID>;
    let sigType: OPTIONAL<SignalType>;
    let duration: OPTIONAL<INTEGER>;
    let notifyCompletion: OPTIONAL<NotifyCompletion>;
    let keepActive: OPTIONAL<BOOLEAN>;
    let sigParList!: SigParameter[];
    let direction: OPTIONAL<SignalDirection>;
    let requestID: OPTIONAL<RequestID>;
    let intersigDelay: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "signalName": (_el: _Element): void => { signalName = $._decode_implicit<SignalName>(() => _decode_SignalName)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); },
        "sigType": (_el: _Element): void => { sigType = $._decode_implicit<SignalType>(() => _decode_SignalType)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "notifyCompletion": (_el: _Element): void => { notifyCompletion = $._decode_implicit<NotifyCompletion>(() => _decode_NotifyCompletion)(_el); },
        "keepActive": (_el: _Element): void => { keepActive = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "sigParList": (_el: _Element): void => { sigParList = $._decode_implicit<SigParameter[]>(() => $._decodeSequenceOf<SigParameter>(() => _decode_SigParameter))(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<SignalDirection>(() => _decode_SignalDirection)(_el); },
        "requestID": (_el: _Element): void => { requestID = $._decode_implicit<RequestID>(() => _decode_RequestID)(_el); },
        "intersigDelay": (_el: _Element): void => { intersigDelay = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Signal,
        _extension_additions_list_spec_for_Signal,
        _root_component_type_list_2_spec_for_Signal,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Signal(
        signalName,
        streamID,
        sigType,
        duration,
        notifyCompletion,
        keepActive,
        sigParList,
        direction,
        requestID,
        intersigDelay,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Signal(el);
}

let _cached_encoder_for_Signal: $.ASN1Encoder<Signal> | null = null;

/**
 * @summary Encodes a(n) Signal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signal, encoded as an ASN.1 Element.
 */
export
function _encode_Signal (value: Signal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Signal) { _cached_encoder_for_Signal = function (value: Signal, elGetter: $.ASN1Encoder<Signal>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SignalName, $.BER)(value.signalName, $.BER),
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StreamID, $.BER)(value.streamID, $.BER)),
            /* IF_ABSENT  */ ((value.sigType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SignalType, $.BER)(value.sigType, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.notifyCompletion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_NotifyCompletion, $.BER)(value.notifyCompletion, $.BER)),
            /* IF_ABSENT  */ ((value.keepActive === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.keepActive, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<SigParameter>(() => _encode_SigParameter, $.BER), $.BER)(value.sigParList, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.direction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SignalDirection, $.BER)(value.direction, $.BER)),
            /* IF_ABSENT  */ ((value.requestID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_RequestID, $.BER)(value.requestID, $.BER)),
            /* IF_ABSENT  */ ((value.intersigDelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.intersigDelay, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Signal(value, elGetter);
}


/* eslint-enable */
