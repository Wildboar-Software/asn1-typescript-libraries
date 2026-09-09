/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DeviceCapsChangedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceCapsChangedEvent ::= SEQUENCE
 * {    device                SubjectDeviceID,
 *     cause                EventCause                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DeviceCapsChangedEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<EventCause>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DeviceCapsChangedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceCapsChangedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceCapsChangedEvent`.
     * @returns {DeviceCapsChangedEvent}
     */
    public static _from_object (_o: { [_K in keyof (DeviceCapsChangedEvent)]: (DeviceCapsChangedEvent)[_K] }): DeviceCapsChangedEvent {
        return new DeviceCapsChangedEvent(_o.device, _o.cause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of DeviceCapsChangedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceCapsChangedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DeviceCapsChangedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceCapsChangedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceCapsChangedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceCapsChangedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceCapsChangedEvent: $.ASN1Decoder<DeviceCapsChangedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceCapsChangedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceCapsChangedEvent (el: _Element): DeviceCapsChangedEvent {
    if (!_cached_decoder_for_DeviceCapsChangedEvent) { _cached_decoder_for_DeviceCapsChangedEvent = function (el: _Element): DeviceCapsChangedEvent {
    let device!: SubjectDeviceID;
    let cause: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceCapsChangedEvent,
        _extension_additions_list_spec_for_DeviceCapsChangedEvent,
        _root_component_type_list_2_spec_for_DeviceCapsChangedEvent,
        undefined,
    );
    return new DeviceCapsChangedEvent(
        device,
        cause,
        extensions
    );
}; }
    return _cached_decoder_for_DeviceCapsChangedEvent(el);
}

let _cached_encoder_for_DeviceCapsChangedEvent: $.ASN1Encoder<DeviceCapsChangedEvent> | null = null;

/**
 * @summary Encodes a(n) DeviceCapsChangedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceCapsChangedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceCapsChangedEvent (value: DeviceCapsChangedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceCapsChangedEvent) { _cached_encoder_for_DeviceCapsChangedEvent = function (value: DeviceCapsChangedEvent, elGetter: $.ASN1Encoder<DeviceCapsChangedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : _encode_EventCause(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceCapsChangedEvent(value, elGetter);
}


/* eslint-enable */
