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
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary MessageWaitingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageWaitingEvent ::= SEQUENCE
 * {    targetDevice            SubjectDeviceID,
 *     deviceForMessage        DeviceID                OPTIONAL,
 *     messageWaitingOn        BOOLEAN,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MessageWaitingEvent {
    constructor (
        /**
         * @summary `targetDevice`.
         * @public
         * @readonly
         */
        readonly targetDevice: SubjectDeviceID,
        /**
         * @summary `deviceForMessage`.
         * @public
         * @readonly
         */
        readonly deviceForMessage: OPTIONAL<DeviceID>,
        /**
         * @summary `messageWaitingOn`.
         * @public
         * @readonly
         */
        readonly messageWaitingOn: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MessageWaitingEvent
     * @description
     * 
     * This takes an `object` and converts it to a `MessageWaitingEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageWaitingEvent`.
     * @returns {MessageWaitingEvent}
     */
    public static _from_object (_o: { [_K in keyof (MessageWaitingEvent)]: (MessageWaitingEvent)[_K] }): MessageWaitingEvent {
        return new MessageWaitingEvent(_o.targetDevice, _o.deviceForMessage, _o.messageWaitingOn, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of MessageWaitingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessageWaitingEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("targetDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("deviceForMessage", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("messageWaitingOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MessageWaitingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessageWaitingEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessageWaitingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessageWaitingEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MessageWaitingEvent: $.ASN1Decoder<MessageWaitingEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageWaitingEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageWaitingEvent (el: _Element): MessageWaitingEvent {
    if (!_cached_decoder_for_MessageWaitingEvent) { _cached_decoder_for_MessageWaitingEvent = function (el: _Element): MessageWaitingEvent {
    let targetDevice!: SubjectDeviceID;
    let deviceForMessage: OPTIONAL<DeviceID>;
    let messageWaitingOn!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "targetDevice": (_el: _Element): void => { targetDevice = _decode_SubjectDeviceID(_el); },
        "deviceForMessage": (_el: _Element): void => { deviceForMessage = _decode_DeviceID(_el); },
        "messageWaitingOn": (_el: _Element): void => { messageWaitingOn = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessageWaitingEvent,
        _extension_additions_list_spec_for_MessageWaitingEvent,
        _root_component_type_list_2_spec_for_MessageWaitingEvent,
        undefined,
    );
    return new MessageWaitingEvent(
        targetDevice,
        deviceForMessage,
        messageWaitingOn,
        extensions
    );
}; }
    return _cached_decoder_for_MessageWaitingEvent(el);
}

let _cached_encoder_for_MessageWaitingEvent: $.ASN1Encoder<MessageWaitingEvent> | null = null;

/**
 * @summary Encodes a(n) MessageWaitingEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageWaitingEvent, encoded as an ASN.1 Element.
 */
export
function _encode_MessageWaitingEvent (value: MessageWaitingEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageWaitingEvent) { _cached_encoder_for_MessageWaitingEvent = function (value: MessageWaitingEvent, elGetter: $.ASN1Encoder<MessageWaitingEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.targetDevice, $.BER),
            /* IF_ABSENT  */ ((value.deviceForMessage === undefined) ? undefined : _encode_DeviceID(value.deviceForMessage, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.messageWaitingOn, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MessageWaitingEvent(value, elGetter);
}


/* eslint-enable */
