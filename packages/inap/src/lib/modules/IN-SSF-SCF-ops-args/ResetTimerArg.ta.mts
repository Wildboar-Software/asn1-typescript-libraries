/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimerID, TimerID_tssf /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_TimerID, _encode_TimerID, _enum_for_TimerID } from "../IN-SSF-SCF-datatypes/TimerID.ta.mjs";
// export { TimerID, _enum_for_TimerID, TimerID_tssf /* IMPORTED_LONG_ENUMERATION_ITEM */, tssf /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TimerID, _encode_TimerID } from "../IN-SSF-SCF-datatypes/TimerID.ta.mjs";
import { type TimerValue, _decode_TimerValue, _encode_TimerValue } from "../IN-SSF-SCF-datatypes/TimerValue.ta.mjs";
// export { TimerValue, _decode_TimerValue, _encode_TimerValue } from "../IN-SSF-SCF-datatypes/TimerValue.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary ResetTimerArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResetTimerArg ::= SEQUENCE {
 *   timerID        [0]  TimerID DEFAULT tssf,
 *   timervalue     [1]  TimerValue,
 *   extensions     [2]  Extensions OPTIONAL,
 *   callSegmentID  [3]  CallSegmentID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ResetTimerArg {
    /**
     * @summary `timerID`.
     * @public
     * @readonly
     */
    readonly timerID: OPTIONAL<TimerID>;
    /**
     * @summary `timervalue`.
     * @public
     * @readonly
     */
    readonly timervalue: TimerValue;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: OPTIONAL<CallSegmentID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        timerID: OPTIONAL<TimerID>,
        timervalue: TimerValue,
        extensions?: OPTIONAL<Extensions>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.timerID = timerID;
        this.timervalue = timervalue;
        this.extensions = extensions;
        this.callSegmentID = callSegmentID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
    public static get _default_value_for_timerID () { return TimerID_tssf; }        /**
         * @summary The enum used as the type of the component `timerID`
         * @public
         * @static
         */

    public static _enum_for_timerID = _enum_for_TimerID;
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
    if (!_cached_encoder_for_ResetTimerArg) { _cached_encoder_for_ResetTimerArg = function (value: ResetTimerArg, elGetter: $.ASN1Encoder<ResetTimerArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.timerID !== undefined && !$.deepEq(value.timerID, ResetTimerArg._default_value_for_timerID)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => _encode_TimerID, $.BER)(value.timerID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TimerValue, $.BER)(value.timervalue, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResetTimerArg(value, elGetter);
}


/* eslint-enable */
