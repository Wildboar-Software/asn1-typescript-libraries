/* eslint-disable */
import {
    BOOLEAN,
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventDM, _decode_EventDM, _encode_EventDM } from "../MEDIA-GATEWAY-CONTROL/EventDM.ta.mjs";
// export { EventDM, _decode_EventDM, _encode_EventDM } from "../MEDIA-GATEWAY-CONTROL/EventDM.ta.mjs";
import { SecondEventsDescriptor, _decode_SecondEventsDescriptor, _encode_SecondEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SecondEventsDescriptor.ta.mjs";
// export { SecondEventsDescriptor, _decode_SecondEventsDescriptor, _encode_SecondEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SecondEventsDescriptor.ta.mjs";
import { SignalsDescriptor, _decode_SignalsDescriptor, _encode_SignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SignalsDescriptor.ta.mjs";
// export { SignalsDescriptor, _decode_SignalsDescriptor, _encode_SignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SignalsDescriptor.ta.mjs";
import { NotifyBehaviour, _decode_NotifyBehaviour, _encode_NotifyBehaviour } from "../MEDIA-GATEWAY-CONTROL/NotifyBehaviour.ta.mjs";
// export { NotifyBehaviour, _decode_NotifyBehaviour, _encode_NotifyBehaviour } from "../MEDIA-GATEWAY-CONTROL/NotifyBehaviour.ta.mjs";


/**
 * @summary RequestedActions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedActions ::= SEQUENCE
 *     {
 *         keepActive                [0] BOOLEAN OPTIONAL,
 *         eventDM                    [1] EventDM OPTIONAL,
 *         secondEvent                [2] SecondEventsDescriptor OPTIONAL,
 *         signalsDescriptor        [3] SignalsDescriptor OPTIONAL,
 *         ...,
 *         notifyBehaviour            [4] NotifyBehaviour OPTIONAL,
 *         resetEventsDescriptor    [5] NULL OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class RequestedActions {
    constructor (
        /**
         * @summary `keepActive`.
         * @public
         * @readonly
         */
        readonly keepActive: OPTIONAL<BOOLEAN>,
        /**
         * @summary `eventDM`.
         * @public
         * @readonly
         */
        readonly eventDM: OPTIONAL<EventDM>,
        /**
         * @summary `secondEvent`.
         * @public
         * @readonly
         */
        readonly secondEvent: OPTIONAL<SecondEventsDescriptor>,
        /**
         * @summary `signalsDescriptor`.
         * @public
         * @readonly
         */
        readonly signalsDescriptor: OPTIONAL<SignalsDescriptor>,
        /**
         * @summary `notifyBehaviour`.
         * @public
         * @readonly
         */
        readonly notifyBehaviour: OPTIONAL<NotifyBehaviour>,
        /**
         * @summary `resetEventsDescriptor`.
         * @public
         * @readonly
         */
        readonly resetEventsDescriptor: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestedActions
     * @description
     * 
     * This takes an `object` and converts it to a `RequestedActions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestedActions`.
     * @returns {RequestedActions}
     */
    public static _from_object (_o: { [_K in keyof (RequestedActions)]: (RequestedActions)[_K] }): RequestedActions {
        return new RequestedActions(_o.keepActive, _o.eventDM, _o.secondEvent, _o.signalsDescriptor, _o.notifyBehaviour, _o.resetEventsDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RequestedActions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestedActions: $.ComponentSpec[] = [
    new $.ComponentSpec("keepActive", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventDM", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("secondEvent", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("signalsDescriptor", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RequestedActions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestedActions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestedActions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestedActions: $.ComponentSpec[] = [
    new $.ComponentSpec("notifyBehaviour", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("resetEventsDescriptor", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_RequestedActions: $.ASN1Decoder<RequestedActions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedActions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedActions (el: _Element): RequestedActions {
    if (!_cached_decoder_for_RequestedActions) { _cached_decoder_for_RequestedActions = function (el: _Element): RequestedActions {
    let keepActive: OPTIONAL<BOOLEAN>;
    let eventDM: OPTIONAL<EventDM>;
    let secondEvent: OPTIONAL<SecondEventsDescriptor>;
    let signalsDescriptor: OPTIONAL<SignalsDescriptor>;
    let notifyBehaviour: OPTIONAL<NotifyBehaviour>;
    let resetEventsDescriptor: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "keepActive": (_el: _Element): void => { keepActive = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "eventDM": (_el: _Element): void => { eventDM = $._decode_explicit<EventDM>(() => _decode_EventDM)(_el); },
        "secondEvent": (_el: _Element): void => { secondEvent = $._decode_implicit<SecondEventsDescriptor>(() => _decode_SecondEventsDescriptor)(_el); },
        "signalsDescriptor": (_el: _Element): void => { signalsDescriptor = $._decode_implicit<SignalsDescriptor>(() => _decode_SignalsDescriptor)(_el); },
        "notifyBehaviour": (_el: _Element): void => { notifyBehaviour = $._decode_explicit<NotifyBehaviour>(() => _decode_NotifyBehaviour)(_el); },
        "resetEventsDescriptor": (_el: _Element): void => { resetEventsDescriptor = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestedActions,
        _extension_additions_list_spec_for_RequestedActions,
        _root_component_type_list_2_spec_for_RequestedActions,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestedActions(
        keepActive,
        eventDM,
        secondEvent,
        signalsDescriptor,
        notifyBehaviour,
        resetEventsDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestedActions(el);
}

let _cached_encoder_for_RequestedActions: $.ASN1Encoder<RequestedActions> | null = null;

/**
 * @summary Encodes a(n) RequestedActions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedActions, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedActions (value: RequestedActions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedActions) { _cached_encoder_for_RequestedActions = function (value: RequestedActions, elGetter: $.ASN1Encoder<RequestedActions>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keepActive === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.keepActive, $.BER)),
            /* IF_ABSENT  */ ((value.eventDM === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_EventDM, $.BER)(value.eventDM, $.BER)),
            /* IF_ABSENT  */ ((value.secondEvent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SecondEventsDescriptor, $.BER)(value.secondEvent, $.BER)),
            /* IF_ABSENT  */ ((value.signalsDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SignalsDescriptor, $.BER)(value.signalsDescriptor, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.notifyBehaviour === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_NotifyBehaviour, $.BER)(value.notifyBehaviour, $.BER)),
            /* IF_ABSENT  */ ((value.resetEventsDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.resetEventsDescriptor, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestedActions(value, elGetter);
}


/* eslint-enable */
