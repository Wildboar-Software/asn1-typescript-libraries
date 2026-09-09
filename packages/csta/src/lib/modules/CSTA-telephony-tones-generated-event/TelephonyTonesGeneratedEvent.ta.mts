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

import {
    TelephonyTone,
    _enum_for_TelephonyTone,
    _decode_TelephonyTone,
    _encode_TelephonyTone
} from "../CSTA-device-feature-types/TelephonyTone.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary TelephonyTonesGeneratedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephonyTonesGeneratedEvent ::= SEQUENCE
 * {    connection            ConnectionID,
 *     toneGenerated            TelephonyTone            OPTIONAL,
 *     toneFrequency            [0] IMPLICIT INTEGER        OPTIONAL,
 *     toneDuration            [1] IMPLICIT INTEGER        OPTIONAL,
 *     pauseDuration            [2] IMPLICIT INTEGER        OPTIONAL,
 *     connectionInfo            ConnectionInformation        OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TelephonyTonesGeneratedEvent {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `toneGenerated`.
         * @public
         * @readonly
         */
        readonly toneGenerated: OPTIONAL<TelephonyTone>,
        /**
         * @summary `toneFrequency`.
         * @public
         * @readonly
         */
        readonly toneFrequency: OPTIONAL<INTEGER>,
        /**
         * @summary `toneDuration`.
         * @public
         * @readonly
         */
        readonly toneDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `pauseDuration`.
         * @public
         * @readonly
         */
        readonly pauseDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `connectionInfo`.
         * @public
         * @readonly
         */
        readonly connectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a TelephonyTonesGeneratedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `TelephonyTonesGeneratedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TelephonyTonesGeneratedEvent`.
     * @returns {TelephonyTonesGeneratedEvent}
     */
    public static _from_object (_o: { [_K in keyof (TelephonyTonesGeneratedEvent)]: (TelephonyTonesGeneratedEvent)[_K] }): TelephonyTonesGeneratedEvent {
        return new TelephonyTonesGeneratedEvent(_o.connection, _o.toneGenerated, _o.toneFrequency, _o.toneDuration, _o.pauseDuration, _o.connectionInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `toneGenerated`
         * @public
         * @static
         */

    public static _enum_for_toneGenerated = _enum_for_TelephonyTone;
}

/**
 * @summary The Leading Root Component Types of TelephonyTonesGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TelephonyTonesGeneratedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("toneGenerated", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("toneFrequency", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("toneDuration", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pauseDuration", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("connectionInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of TelephonyTonesGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TelephonyTonesGeneratedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TelephonyTonesGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TelephonyTonesGeneratedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TelephonyTonesGeneratedEvent: $.ASN1Decoder<TelephonyTonesGeneratedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelephonyTonesGeneratedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TelephonyTonesGeneratedEvent (el: _Element): TelephonyTonesGeneratedEvent {
    if (!_cached_decoder_for_TelephonyTonesGeneratedEvent) { _cached_decoder_for_TelephonyTonesGeneratedEvent = function (el: _Element): TelephonyTonesGeneratedEvent {
    let connection!: ConnectionID;
    let toneGenerated: OPTIONAL<TelephonyTone>;
    let toneFrequency: OPTIONAL<INTEGER>;
    let toneDuration: OPTIONAL<INTEGER>;
    let pauseDuration: OPTIONAL<INTEGER>;
    let connectionInfo: OPTIONAL<ConnectionInformation>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "toneGenerated": (_el: _Element): void => { toneGenerated = _decode_TelephonyTone(_el); },
        "toneFrequency": (_el: _Element): void => { toneFrequency = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "toneDuration": (_el: _Element): void => { toneDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pauseDuration": (_el: _Element): void => { pauseDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "connectionInfo": (_el: _Element): void => { connectionInfo = _decode_ConnectionInformation(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TelephonyTonesGeneratedEvent,
        _extension_additions_list_spec_for_TelephonyTonesGeneratedEvent,
        _root_component_type_list_2_spec_for_TelephonyTonesGeneratedEvent,
        undefined,
    );
    return new TelephonyTonesGeneratedEvent(
        connection,
        toneGenerated,
        toneFrequency,
        toneDuration,
        pauseDuration,
        connectionInfo,
        extensions
    );
}; }
    return _cached_decoder_for_TelephonyTonesGeneratedEvent(el);
}

let _cached_encoder_for_TelephonyTonesGeneratedEvent: $.ASN1Encoder<TelephonyTonesGeneratedEvent> | null = null;

/**
 * @summary Encodes a(n) TelephonyTonesGeneratedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephonyTonesGeneratedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_TelephonyTonesGeneratedEvent (value: TelephonyTonesGeneratedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TelephonyTonesGeneratedEvent) { _cached_encoder_for_TelephonyTonesGeneratedEvent = function (value: TelephonyTonesGeneratedEvent, elGetter: $.ASN1Encoder<TelephonyTonesGeneratedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* IF_ABSENT  */ ((value.toneGenerated === undefined) ? undefined : _encode_TelephonyTone(value.toneGenerated, $.BER)),
            /* IF_ABSENT  */ ((value.toneFrequency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.toneFrequency, $.BER)),
            /* IF_ABSENT  */ ((value.toneDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.toneDuration, $.BER)),
            /* IF_ABSENT  */ ((value.pauseDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.pauseDuration, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInfo === undefined) ? undefined : _encode_ConnectionInformation(value.connectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TelephonyTonesGeneratedEvent(value, elGetter);
}


/* eslint-enable */
