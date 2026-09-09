/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CallerIDStatusEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallerIDStatusEvent ::= SEQUENCE
 * {    device                 DeviceID,
 *     callerIDProvided        BOOLEAN,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallerIDStatusEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `callerIDProvided`.
         * @public
         * @readonly
         */
        readonly callerIDProvided: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a CallerIDStatusEvent
     * @description
     * 
     * This takes an `object` and converts it to a `CallerIDStatusEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallerIDStatusEvent`.
     * @returns {CallerIDStatusEvent}
     */
    public static _from_object (_o: { [_K in keyof (CallerIDStatusEvent)]: (CallerIDStatusEvent)[_K] }): CallerIDStatusEvent {
        return new CallerIDStatusEvent(_o.device, _o.callerIDProvided, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallerIDStatusEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallerIDStatusEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("callerIDProvided", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CallerIDStatusEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallerIDStatusEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallerIDStatusEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallerIDStatusEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallerIDStatusEvent: $.ASN1Decoder<CallerIDStatusEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallerIDStatusEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallerIDStatusEvent (el: _Element): CallerIDStatusEvent {
    if (!_cached_decoder_for_CallerIDStatusEvent) { _cached_decoder_for_CallerIDStatusEvent = function (el: _Element): CallerIDStatusEvent {
    let device!: DeviceID;
    let callerIDProvided!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "callerIDProvided": (_el: _Element): void => { callerIDProvided = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallerIDStatusEvent,
        _extension_additions_list_spec_for_CallerIDStatusEvent,
        _root_component_type_list_2_spec_for_CallerIDStatusEvent,
        undefined,
    );
    return new CallerIDStatusEvent(
        device,
        callerIDProvided,
        extensions
    );
}; }
    return _cached_decoder_for_CallerIDStatusEvent(el);
}

let _cached_encoder_for_CallerIDStatusEvent: $.ASN1Encoder<CallerIDStatusEvent> | null = null;

/**
 * @summary Encodes a(n) CallerIDStatusEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallerIDStatusEvent, encoded as an ASN.1 Element.
 */
export
function _encode_CallerIDStatusEvent (value: CallerIDStatusEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallerIDStatusEvent) { _cached_encoder_for_CallerIDStatusEvent = function (value: CallerIDStatusEvent, elGetter: $.ASN1Encoder<CallerIDStatusEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.callerIDProvided, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallerIDStatusEvent(value, elGetter);
}


/* eslint-enable */
