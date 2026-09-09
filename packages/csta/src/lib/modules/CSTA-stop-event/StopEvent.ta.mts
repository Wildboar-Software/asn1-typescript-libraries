/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";

/**
 * @summary StopEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopEvent ::= SEQUENCE
 * {    connection            ConnectionID,
 *     message                MessageID,
 *     resource            [2] IMPLICIT ResourceID            OPTIONAL,
 *     length                [0] IMPLICIT INTEGER            OPTIONAL,
 *     currentPosition            [1] IMPLICIT INTEGER            OPTIONAL,
 *     cause                EventCause                OPTIONAL,
 *     servicesPermitted        ServicesPermitted            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StopEvent {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `message`.
         * @public
         * @readonly
         */
        readonly message: MessageID,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: OPTIONAL<INTEGER>,
        /**
         * @summary `currentPosition`.
         * @public
         * @readonly
         */
        readonly currentPosition: OPTIONAL<INTEGER>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<EventCause>,
        /**
         * @summary `servicesPermitted`.
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StopEvent
     * @description
     * 
     * This takes an `object` and converts it to a `StopEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopEvent`.
     * @returns {StopEvent}
     */
    public static _from_object (_o: { [_K in keyof (StopEvent)]: (StopEvent)[_K] }): StopEvent {
        return new StopEvent(_o.connection, _o.message, _o.resource, _o.length, _o.currentPosition, _o.cause, _o.servicesPermitted, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of StopEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
        new $.ComponentSpec("message", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("length", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("currentPosition", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StopEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopEvent: $.ASN1Decoder<StopEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopEvent (el: _Element): StopEvent {
    if (!_cached_decoder_for_StopEvent) { _cached_decoder_for_StopEvent = function (el: _Element): StopEvent {
    let connection!: ConnectionID;
    let message!: MessageID;
    let resource: OPTIONAL<ResourceID>;
    let length: OPTIONAL<INTEGER>;
    let currentPosition: OPTIONAL<INTEGER>;
    let cause: OPTIONAL<EventCause>;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "message": (_el: _Element): void => { message = _decode_MessageID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "length": (_el: _Element): void => { length = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "currentPosition": (_el: _Element): void => { currentPosition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = _decode_ServicesPermitted(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopEvent,
        _extension_additions_list_spec_for_StopEvent,
        _root_component_type_list_2_spec_for_StopEvent,
        undefined,
    );
    return new StopEvent(
        connection,
        message,
        resource,
        length,
        currentPosition,
        cause,
        servicesPermitted,
        extensions
    );
}; }
    return _cached_decoder_for_StopEvent(el);
}

let _cached_encoder_for_StopEvent: $.ASN1Encoder<StopEvent> | null = null;

/**
 * @summary Encodes a(n) StopEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopEvent, encoded as an ASN.1 Element.
 */
export
function _encode_StopEvent (value: StopEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopEvent) { _cached_encoder_for_StopEvent = function (value: StopEvent, elGetter: $.ASN1Encoder<StopEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_MessageID(value.message, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.length === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.length, $.BER)),
            /* IF_ABSENT  */ ((value.currentPosition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.currentPosition, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : _encode_EventCause(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : _encode_ServicesPermitted(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopEvent(value, elGetter);
}


/* eslint-enable */
