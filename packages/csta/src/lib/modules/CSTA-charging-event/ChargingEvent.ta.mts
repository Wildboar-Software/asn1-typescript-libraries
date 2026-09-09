/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { ChargingInfo, _decode_ChargingInfo, _encode_ChargingInfo } from "../CSTA-charge-info/ChargingInfo.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingEvent ::= SEQUENCE
 * {    connection            ConnectionID,
 *     chargedDevice            DeviceID,
 *     chargingInfo            ChargingInfo,
 *     cause                EventCause                OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ChargingEvent {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `chargedDevice`.
         * @public
         * @readonly
         */
        readonly chargedDevice: DeviceID,
        /**
         * @summary `chargingInfo`.
         * @public
         * @readonly
         */
        readonly chargingInfo: ChargingInfo,
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
     * @summary Restructures an object into a ChargingEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingEvent`.
     * @returns {ChargingEvent}
     */
    public static _from_object (_o: { [_K in keyof (ChargingEvent)]: (ChargingEvent)[_K] }): ChargingEvent {
        return new ChargingEvent(_o.connection, _o.chargedDevice, _o.chargingInfo, _o.cause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of ChargingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("chargedDevice", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("chargingInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ChargingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingEvent: $.ASN1Decoder<ChargingEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingEvent (el: _Element): ChargingEvent {
    if (!_cached_decoder_for_ChargingEvent) { _cached_decoder_for_ChargingEvent = function (el: _Element): ChargingEvent {
    let connection!: ConnectionID;
    let chargedDevice!: DeviceID;
    let chargingInfo!: ChargingInfo;
    let cause: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "chargedDevice": (_el: _Element): void => { chargedDevice = _decode_DeviceID(_el); },
        "chargingInfo": (_el: _Element): void => { chargingInfo = _decode_ChargingInfo(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingEvent,
        _extension_additions_list_spec_for_ChargingEvent,
        _root_component_type_list_2_spec_for_ChargingEvent,
        undefined,
    );
    return new ChargingEvent(
        connection,
        chargedDevice,
        chargingInfo,
        cause,
        extensions
    );
}; }
    return _cached_decoder_for_ChargingEvent(el);
}

let _cached_encoder_for_ChargingEvent: $.ASN1Encoder<ChargingEvent> | null = null;

/**
 * @summary Encodes a(n) ChargingEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingEvent (value: ChargingEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingEvent) { _cached_encoder_for_ChargingEvent = function (value: ChargingEvent, elGetter: $.ASN1Encoder<ChargingEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.chargedDevice, $.BER),
            /* REQUIRED   */ _encode_ChargingInfo(value.chargingInfo, $.BER),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : _encode_EventCause(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChargingEvent(value, elGetter);
}


/* eslint-enable */
