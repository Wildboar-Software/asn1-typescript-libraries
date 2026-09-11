/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../CAP-datatypes/CallSegmentID.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { TimerID, _decode_TimerID, _encode_TimerID, tssf } from "../CAP-datatypes/TimerID.ta.mjs";
import { type TimerValue, _decode_TimerValue, _encode_TimerValue } from "../CAP-datatypes/TimerValue.ta.mjs";



/**
 * @summary ResetTimerArg
 * @description
 * 
 * Argument of ResetTimer: which Tssf instance to refresh. (3GPP TS 29.078
 * V19.0.0 clause 11.28.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResetTimerArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     timerID                [0] TimerID    DEFAULT tssf,
 *     timervalue                [1] TimerValue,
 *     extensions                [2] Extensions {bound}            OPTIONAL,
 *     callSegmentID            [3]    CallSegmentID {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ResetTimerArg {
    constructor (
        /**
         * @summary `timerID`.
         * @description
         *
         * Which timer to reset. Only permissible value is `tssf` (ASN.1
         * default). (3GPP TS 29.078 V19.0.0 clause 11.28.1.1).
         *
         * @public
         * @readonly
         */
        readonly timerID: OPTIONAL<TimerID>,
        /**
         * @summary `timervalue`.
         * @description
         *
         * Value to which the timer shall be set. Spec name `timerValue`. (3GPP
         * TS 29.078 V19.0.0 clause 11.28.1.1).
         *
         * @public
         * @readonly
         */
        readonly timervalue: TimerValue,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `callSegmentID`.
         * @description
         *
         * Call Segment in gsmSSF for which the timer shall be reset. (3GPP TS
         * 29.078 V19.0.0 clause 11.28.1.1).
         *
         * @public
         * @readonly
         */
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResetTimerArg
     * @description
     * 
     * This takes an `object` and converts it to a `ResetTimerArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResetTimerArg`.
     * @returns {ResetTimerArg}
     */
    public static _from_object (_o: { [_K in keyof (ResetTimerArg)]: (ResetTimerArg)[_K] }): ResetTimerArg {
        return new ResetTimerArg(_o.timerID, _o.timervalue, _o.extensions, _o.callSegmentID, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `timerID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_timerID () { return tssf; }
}

/**
 * @summary The Leading Root Component Types of ResetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResetTimerArg: $.ComponentSpec[] = [
    new $.ComponentSpec("timerID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timervalue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ResetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResetTimerArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResetTimerArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResetTimerArg: $.ASN1Decoder<ResetTimerArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResetTimerArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResetTimerArg (el: _Element): ResetTimerArg {
    if (!_cached_decoder_for_ResetTimerArg) { _cached_decoder_for_ResetTimerArg = function (el: _Element): ResetTimerArg {
    let timerID: OPTIONAL<TimerID> = ResetTimerArg._default_value_for_timerID;
    let timervalue!: TimerValue;
    let extensions: OPTIONAL<Extensions>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "timerID": (_el: _Element): void => { timerID = $._decode_implicit<TimerID>(() => _decode_TimerID)(_el); },
        "timervalue": (_el: _Element): void => { timervalue = $._decode_implicit<TimerValue>(() => _decode_TimerValue)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResetTimerArg,
        _extension_additions_list_spec_for_ResetTimerArg,
        _root_component_type_list_2_spec_for_ResetTimerArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ResetTimerArg(
        timerID,
        timervalue,
        extensions,
        callSegmentID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ResetTimerArg(el);
}

let _cached_encoder_for_ResetTimerArg: $.ASN1Encoder<ResetTimerArg> | null = null;

/**
 * @summary Encodes a(n) ResetTimerArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResetTimerArg, encoded as an ASN.1 Element.
 */
export
function _encode_ResetTimerArg (value: ResetTimerArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResetTimerArg) { _cached_encoder_for_ResetTimerArg = function (value: ResetTimerArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.timerID === undefined || $.deepEq(value.timerID, ResetTimerArg._default_value_for_timerID) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TimerID, $.BER)(value.timerID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TimerValue, $.BER)(value.timervalue, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResetTimerArg(value, elGetter);
}


/* eslint-enable */
