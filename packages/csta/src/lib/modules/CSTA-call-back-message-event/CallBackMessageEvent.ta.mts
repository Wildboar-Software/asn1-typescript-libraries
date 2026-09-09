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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CallBackMessageEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackMessageEvent ::= SEQUENCE
 * {    originatingDevice        SubjectDeviceID,
 *     targetDevice             SubjectDeviceID,
 *     callBackMsgSetCanceled         BOOLEAN,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallBackMessageEvent {
    constructor (
        /**
         * @summary `originatingDevice`.
         * @public
         * @readonly
         */
        readonly originatingDevice: SubjectDeviceID,
        /**
         * @summary `targetDevice`.
         * @public
         * @readonly
         */
        readonly targetDevice: SubjectDeviceID,
        /**
         * @summary `callBackMsgSetCanceled`.
         * @public
         * @readonly
         */
        readonly callBackMsgSetCanceled: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a CallBackMessageEvent
     * @description
     * 
     * This takes an `object` and converts it to a `CallBackMessageEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBackMessageEvent`.
     * @returns {CallBackMessageEvent}
     */
    public static _from_object (_o: { [_K in keyof (CallBackMessageEvent)]: (CallBackMessageEvent)[_K] }): CallBackMessageEvent {
        return new CallBackMessageEvent(_o.originatingDevice, _o.targetDevice, _o.callBackMsgSetCanceled, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallBackMessageEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBackMessageEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("targetDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("callBackMsgSetCanceled", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CallBackMessageEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBackMessageEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBackMessageEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBackMessageEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBackMessageEvent: $.ASN1Decoder<CallBackMessageEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackMessageEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackMessageEvent (el: _Element): CallBackMessageEvent {
    if (!_cached_decoder_for_CallBackMessageEvent) { _cached_decoder_for_CallBackMessageEvent = function (el: _Element): CallBackMessageEvent {
    let originatingDevice!: SubjectDeviceID;
    let targetDevice!: SubjectDeviceID;
    let callBackMsgSetCanceled!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "originatingDevice": (_el: _Element): void => { originatingDevice = _decode_SubjectDeviceID(_el); },
        "targetDevice": (_el: _Element): void => { targetDevice = _decode_SubjectDeviceID(_el); },
        "callBackMsgSetCanceled": (_el: _Element): void => { callBackMsgSetCanceled = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBackMessageEvent,
        _extension_additions_list_spec_for_CallBackMessageEvent,
        _root_component_type_list_2_spec_for_CallBackMessageEvent,
        undefined,
    );
    return new CallBackMessageEvent(
        originatingDevice,
        targetDevice,
        callBackMsgSetCanceled,
        extensions
    );
}; }
    return _cached_decoder_for_CallBackMessageEvent(el);
}

let _cached_encoder_for_CallBackMessageEvent: $.ASN1Encoder<CallBackMessageEvent> | null = null;

/**
 * @summary Encodes a(n) CallBackMessageEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackMessageEvent, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackMessageEvent (value: CallBackMessageEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackMessageEvent) { _cached_encoder_for_CallBackMessageEvent = function (value: CallBackMessageEvent, elGetter: $.ASN1Encoder<CallBackMessageEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.originatingDevice, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.targetDevice, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.callBackMsgSetCanceled, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBackMessageEvent(value, elGetter);
}


/* eslint-enable */
