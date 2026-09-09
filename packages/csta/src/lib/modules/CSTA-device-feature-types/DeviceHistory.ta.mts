/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";



/**
 * @summary DeviceHistory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceHistory ::= SEQUENCE
 * {    oldDeviceID            DeviceID,
 *     eventCause            [1] IMPLICIT    EventCause        OPTIONAL,
 *     oldConnectionID            [2] IMPLICIT    ConnectionID        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DeviceHistory {
    constructor (
        /**
         * @summary `oldDeviceID`.
         * @public
         * @readonly
         */
        readonly oldDeviceID: DeviceID,
        /**
         * @summary `eventCause`.
         * @public
         * @readonly
         */
        readonly eventCause: OPTIONAL<EventCause>,
        /**
         * @summary `oldConnectionID`.
         * @public
         * @readonly
         */
        readonly oldConnectionID: OPTIONAL<ConnectionID>
    ) {}

    /**
     * @summary Restructures an object into a DeviceHistory
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceHistory`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceHistory`.
     * @returns {DeviceHistory}
     */
    public static _from_object (_o: { [_K in keyof (DeviceHistory)]: (DeviceHistory)[_K] }): DeviceHistory {
        return new DeviceHistory(_o.oldDeviceID, _o.eventCause, _o.oldConnectionID);
    }

        /**
         * @summary The enum used as the type of the component `eventCause`
         * @public
         * @static
         */

    public static _enum_for_eventCause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of DeviceHistory
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceHistory: $.ComponentSpec[] = [
    new $.ComponentSpec("oldDeviceID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventCause", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("oldConnectionID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DeviceHistory
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceHistory: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceHistory
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceHistory: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceHistory: $.ASN1Decoder<DeviceHistory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceHistory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceHistory (el: _Element): DeviceHistory {
    if (!_cached_decoder_for_DeviceHistory) { _cached_decoder_for_DeviceHistory = function (el: _Element): DeviceHistory {
    let oldDeviceID!: DeviceID;
    let eventCause: OPTIONAL<EventCause>;
    let oldConnectionID: OPTIONAL<ConnectionID>;
    const callbacks: $.DecodingMap = {
        "oldDeviceID": (_el: _Element): void => { oldDeviceID = _decode_DeviceID(_el); },
        "eventCause": (_el: _Element): void => { eventCause = $._decode_implicit<EventCause>(() => _decode_EventCause)(_el); },
        "oldConnectionID": (_el: _Element): void => { oldConnectionID = $._decode_implicit<ConnectionID>(() => _decode_ConnectionID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceHistory,
        _extension_additions_list_spec_for_DeviceHistory,
        _root_component_type_list_2_spec_for_DeviceHistory,
        undefined,
    );
    return new DeviceHistory(
        oldDeviceID,
        eventCause,
        oldConnectionID
    );
}; }
    return _cached_decoder_for_DeviceHistory(el);
}

let _cached_encoder_for_DeviceHistory: $.ASN1Encoder<DeviceHistory> | null = null;

/**
 * @summary Encodes a(n) DeviceHistory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceHistory, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceHistory (value: DeviceHistory, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceHistory) { _cached_encoder_for_DeviceHistory = function (value: DeviceHistory, elGetter: $.ASN1Encoder<DeviceHistory>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.oldDeviceID, $.BER),
            /* IF_ABSENT  */ ((value.eventCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EventCause, $.BER)(value.eventCause, $.BER)),
            /* IF_ABSENT  */ ((value.oldConnectionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ConnectionID, $.BER)(value.oldConnectionID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceHistory(value, elGetter);
}


/* eslint-enable */
