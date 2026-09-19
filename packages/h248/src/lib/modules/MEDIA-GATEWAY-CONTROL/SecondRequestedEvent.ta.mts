/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
// export { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
// export { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { SecondRequestedActions, _decode_SecondRequestedActions, _encode_SecondRequestedActions } from "../MEDIA-GATEWAY-CONTROL/SecondRequestedActions.ta.mjs";
// export { SecondRequestedActions, _decode_SecondRequestedActions, _encode_SecondRequestedActions } from "../MEDIA-GATEWAY-CONTROL/SecondRequestedActions.ta.mjs";
import { EventParameter, _decode_EventParameter, _encode_EventParameter } from "../MEDIA-GATEWAY-CONTROL/EventParameter.ta.mjs";
// export { EventParameter, _decode_EventParameter, _encode_EventParameter } from "../MEDIA-GATEWAY-CONTROL/EventParameter.ta.mjs";


/**
 * @summary SecondRequestedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecondRequestedEvent ::= SEQUENCE
 *     {
 *         pkgdName                [0] PkgdName,
 *         streamID                [1] StreamID OPTIONAL,
 *         eventAction                [2] SecondRequestedActions OPTIONAL,
 *         evParList                [3] SEQUENCE OF EventParameter,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class SecondRequestedEvent {
    constructor (
        /**
         * @summary `pkgdName`.
         * @public
         * @readonly
         */
        readonly pkgdName: PkgdName,
        /**
         * @summary `streamID`.
         * @public
         * @readonly
         */
        readonly streamID: OPTIONAL<StreamID>,
        /**
         * @summary `eventAction`.
         * @public
         * @readonly
         */
        readonly eventAction: OPTIONAL<SecondRequestedActions>,
        /**
         * @summary `evParList`.
         * @public
         * @readonly
         */
        readonly evParList: EventParameter[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecondRequestedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `SecondRequestedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecondRequestedEvent`.
     * @returns {SecondRequestedEvent}
     */
    public static _from_object (_o: { [_K in keyof (SecondRequestedEvent)]: (SecondRequestedEvent)[_K] }): SecondRequestedEvent {
        return new SecondRequestedEvent(_o.pkgdName, _o.streamID, _o.eventAction, _o.evParList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SecondRequestedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecondRequestedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("pkgdName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventAction", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("evParList", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SecondRequestedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecondRequestedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecondRequestedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecondRequestedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecondRequestedEvent: $.ASN1Decoder<SecondRequestedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecondRequestedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecondRequestedEvent (el: _Element): SecondRequestedEvent {
    if (!_cached_decoder_for_SecondRequestedEvent) { _cached_decoder_for_SecondRequestedEvent = function (el: _Element): SecondRequestedEvent {
    let pkgdName!: PkgdName;
    let streamID: OPTIONAL<StreamID>;
    let eventAction: OPTIONAL<SecondRequestedActions>;
    let evParList!: EventParameter[];
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pkgdName": (_el: _Element): void => { pkgdName = $._decode_implicit<PkgdName>(() => _decode_PkgdName)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); },
        "eventAction": (_el: _Element): void => { eventAction = $._decode_implicit<SecondRequestedActions>(() => _decode_SecondRequestedActions)(_el); },
        "evParList": (_el: _Element): void => { evParList = $._decode_implicit<EventParameter[]>(() => $._decodeSequenceOf<EventParameter>(() => _decode_EventParameter))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SecondRequestedEvent,
        _extension_additions_list_spec_for_SecondRequestedEvent,
        _root_component_type_list_2_spec_for_SecondRequestedEvent,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SecondRequestedEvent(
        pkgdName,
        streamID,
        eventAction,
        evParList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SecondRequestedEvent(el);
}

let _cached_encoder_for_SecondRequestedEvent: $.ASN1Encoder<SecondRequestedEvent> | null = null;

/**
 * @summary Encodes a(n) SecondRequestedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecondRequestedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_SecondRequestedEvent (value: SecondRequestedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecondRequestedEvent) { _cached_encoder_for_SecondRequestedEvent = function (value: SecondRequestedEvent, elGetter: $.ASN1Encoder<SecondRequestedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PkgdName, $.BER)(value.pkgdName, $.BER),
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StreamID, $.BER)(value.streamID, $.BER)),
            /* IF_ABSENT  */ ((value.eventAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SecondRequestedActions, $.BER)(value.eventAction, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<EventParameter>(() => _encode_EventParameter, $.BER), $.BER)(value.evParList, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecondRequestedEvent(value, elGetter);
}


/* eslint-enable */
