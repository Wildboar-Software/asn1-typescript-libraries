/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
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



/**
 * @summary DtmfDetectedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DtmfDetectedEvent ::= SEQUENCE
 * {    overConnection            ConnectionID,
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     dtmfChar            IA5String,
 *     cause                EventCause                OPTIONAL,
 *     servicesPermitted        ServicesPermitted            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DtmfDetectedEvent {
    constructor (
        /**
         * @summary `overConnection`.
         * @public
         * @readonly
         */
        readonly overConnection: ConnectionID,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `dtmfChar`.
         * @public
         * @readonly
         */
        readonly dtmfChar: IA5String,
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
     * @summary Restructures an object into a DtmfDetectedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `DtmfDetectedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DtmfDetectedEvent`.
     * @returns {DtmfDetectedEvent}
     */
    public static _from_object (_o: { [_K in keyof (DtmfDetectedEvent)]: (DtmfDetectedEvent)[_K] }): DtmfDetectedEvent {
        return new DtmfDetectedEvent(_o.overConnection, _o.resource, _o.dtmfChar, _o.cause, _o.servicesPermitted, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of DtmfDetectedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DtmfDetectedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("overConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dtmfChar", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DtmfDetectedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DtmfDetectedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DtmfDetectedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DtmfDetectedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DtmfDetectedEvent: $.ASN1Decoder<DtmfDetectedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DtmfDetectedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DtmfDetectedEvent (el: _Element): DtmfDetectedEvent {
    if (!_cached_decoder_for_DtmfDetectedEvent) { _cached_decoder_for_DtmfDetectedEvent = function (el: _Element): DtmfDetectedEvent {
    let overConnection!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let dtmfChar!: IA5String;
    let cause: OPTIONAL<EventCause>;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "overConnection": (_el: _Element): void => { overConnection = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "dtmfChar": (_el: _Element): void => { dtmfChar = $._decodeIA5String(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = _decode_ServicesPermitted(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DtmfDetectedEvent,
        _extension_additions_list_spec_for_DtmfDetectedEvent,
        _root_component_type_list_2_spec_for_DtmfDetectedEvent,
        undefined,
    );
    return new DtmfDetectedEvent(
        overConnection,
        resource,
        dtmfChar,
        cause,
        servicesPermitted,
        extensions
    );
}; }
    return _cached_decoder_for_DtmfDetectedEvent(el);
}

let _cached_encoder_for_DtmfDetectedEvent: $.ASN1Encoder<DtmfDetectedEvent> | null = null;

/**
 * @summary Encodes a(n) DtmfDetectedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DtmfDetectedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_DtmfDetectedEvent (value: DtmfDetectedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DtmfDetectedEvent) { _cached_encoder_for_DtmfDetectedEvent = function (value: DtmfDetectedEvent, elGetter: $.ASN1Encoder<DtmfDetectedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.overConnection, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* REQUIRED   */ $._encodeIA5String(value.dtmfChar, $.BER),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : _encode_EventCause(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : _encode_ServicesPermitted(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DtmfDetectedEvent(value, elGetter);
}


/* eslint-enable */
