/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AutoWorkModeEvent
 * @description
 *
 * Auto Work Mode event (ECMA-269 §22.2.8 / ECMA-285 §20.2.8). Direction: SF→CF
 * via Event Report. Auto-work mode changed (telephone or Set Auto Work Mode).
 * Busy→WorkingAfterCall after a call, then optionally onward after a timer. Not
 * generated when a Set request leaves the feature unchanged (ECMA-269 §9.5.1 FR
 * 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoWorkModeEvent ::= SEQUENCE
 * {    invokingDevice             SubjectDeviceID,
 *     autoWorkOn            BOOLEAN,
 *     autoWorkInterval        INTEGER,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AutoWorkModeEvent {
    constructor (
        /**
         * @summary `invokingDevice`.
         * @description
         *
         * Device whose auto-work mode changed.
         * @public
         * @readonly
         */
        readonly invokingDevice: SubjectDeviceID,
        /**
         * @summary `autoWorkOn`.
         * @description
         *
         * FALSE = off; TRUE = on.
         * @public
         * @readonly
         */
        readonly autoWorkOn: BOOLEAN,
        /**
         * @summary `autoWorkInterval`.
         * @description
         *
         * Seconds in WorkingAfterCall. 0: do not auto-exit that state.
         * @public
         * @readonly
         */
        readonly autoWorkInterval: INTEGER,
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
     * @summary Restructures an object into a AutoWorkModeEvent
     * @description
     * 
     * This takes an `object` and converts it to a `AutoWorkModeEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoWorkModeEvent`.
     * @returns {AutoWorkModeEvent}
     */
    public static _from_object (_o: { [_K in keyof (AutoWorkModeEvent)]: (AutoWorkModeEvent)[_K] }): AutoWorkModeEvent {
        return new AutoWorkModeEvent(_o.invokingDevice, _o.autoWorkOn, _o.autoWorkInterval, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of AutoWorkModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AutoWorkModeEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("invokingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("autoWorkOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("autoWorkInterval", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of AutoWorkModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AutoWorkModeEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AutoWorkModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AutoWorkModeEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AutoWorkModeEvent: $.ASN1Decoder<AutoWorkModeEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoWorkModeEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AutoWorkModeEvent (el: _Element): AutoWorkModeEvent {
    if (!_cached_decoder_for_AutoWorkModeEvent) { _cached_decoder_for_AutoWorkModeEvent = function (el: _Element): AutoWorkModeEvent {
    let invokingDevice!: SubjectDeviceID;
    let autoWorkOn!: BOOLEAN;
    let autoWorkInterval!: INTEGER;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "invokingDevice": (_el: _Element): void => { invokingDevice = _decode_SubjectDeviceID(_el); },
        "autoWorkOn": (_el: _Element): void => { autoWorkOn = $._decodeBoolean(_el); },
        "autoWorkInterval": (_el: _Element): void => { autoWorkInterval = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AutoWorkModeEvent,
        _extension_additions_list_spec_for_AutoWorkModeEvent,
        _root_component_type_list_2_spec_for_AutoWorkModeEvent,
        undefined,
    );
    return new AutoWorkModeEvent(
        invokingDevice,
        autoWorkOn,
        autoWorkInterval,
        extensions
    );
}; }
    return _cached_decoder_for_AutoWorkModeEvent(el);
}

let _cached_encoder_for_AutoWorkModeEvent: $.ASN1Encoder<AutoWorkModeEvent> | null = null;

/**
 * @summary Encodes a(n) AutoWorkModeEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoWorkModeEvent, encoded as an ASN.1 Element.
 */
export
function _encode_AutoWorkModeEvent (value: AutoWorkModeEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AutoWorkModeEvent) { _cached_encoder_for_AutoWorkModeEvent = function (value: AutoWorkModeEvent, elGetter: $.ASN1Encoder<AutoWorkModeEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.invokingDevice, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.autoWorkOn, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.autoWorkInterval, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AutoWorkModeEvent(value, elGetter);
}


/* eslint-enable */
