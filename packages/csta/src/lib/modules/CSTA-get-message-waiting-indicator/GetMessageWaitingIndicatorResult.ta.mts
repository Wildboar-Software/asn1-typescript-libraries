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
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetMessageWaitingIndicatorResult
 * @description
 *
 * Positive ack (ECMA-269 §21.1.8.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMessageWaitingIndicatorResult ::= SEQUENCE
 * {    messageWaitingOn        BOOLEAN,
 *     deviceForMessage        DeviceID                OPTIONAL,
 *     lampIsPresent            BOOLEAN                    OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetMessageWaitingIndicatorResult {
    constructor (
        /**
         * @summary `messageWaitingOn`.
         * @description
         *
         * FALSE = off; TRUE = on.
         * @public
         * @readonly
         */
        readonly messageWaitingOn: BOOLEAN,
        /**
         * @summary `deviceForMessage`.
         * @description
         *
         * Device where the message is waiting.
         * @public
         * @readonly
         */
        readonly deviceForMessage: OPTIONAL<DeviceID>,
        /**
         * @summary `lampIsPresent`.
         * @description
         *
         * Whether a message-waiting lamp is present.
         * @public
         * @readonly
         */
        readonly lampIsPresent: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetMessageWaitingIndicatorResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetMessageWaitingIndicatorResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetMessageWaitingIndicatorResult`.
     * @returns {GetMessageWaitingIndicatorResult}
     */
    public static _from_object (_o: { [_K in keyof (GetMessageWaitingIndicatorResult)]: (GetMessageWaitingIndicatorResult)[_K] }): GetMessageWaitingIndicatorResult {
        return new GetMessageWaitingIndicatorResult(_o.messageWaitingOn, _o.deviceForMessage, _o.lampIsPresent, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetMessageWaitingIndicatorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetMessageWaitingIndicatorResult: $.ComponentSpec[] = [
    new $.ComponentSpec("messageWaitingOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("deviceForMessage", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("lampIsPresent", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetMessageWaitingIndicatorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetMessageWaitingIndicatorResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetMessageWaitingIndicatorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetMessageWaitingIndicatorResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetMessageWaitingIndicatorResult: $.ASN1Decoder<GetMessageWaitingIndicatorResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMessageWaitingIndicatorResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMessageWaitingIndicatorResult (el: _Element): GetMessageWaitingIndicatorResult {
    if (!_cached_decoder_for_GetMessageWaitingIndicatorResult) { _cached_decoder_for_GetMessageWaitingIndicatorResult = function (el: _Element): GetMessageWaitingIndicatorResult {
    let messageWaitingOn!: BOOLEAN;
    let deviceForMessage: OPTIONAL<DeviceID>;
    let lampIsPresent: OPTIONAL<BOOLEAN>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "messageWaitingOn": (_el: _Element): void => { messageWaitingOn = $._decodeBoolean(_el); },
        "deviceForMessage": (_el: _Element): void => { deviceForMessage = _decode_DeviceID(_el); },
        "lampIsPresent": (_el: _Element): void => { lampIsPresent = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetMessageWaitingIndicatorResult,
        _extension_additions_list_spec_for_GetMessageWaitingIndicatorResult,
        _root_component_type_list_2_spec_for_GetMessageWaitingIndicatorResult,
        undefined,
    );
    return new GetMessageWaitingIndicatorResult(
        messageWaitingOn,
        deviceForMessage,
        lampIsPresent,
        extensions
    );
}; }
    return _cached_decoder_for_GetMessageWaitingIndicatorResult(el);
}

let _cached_encoder_for_GetMessageWaitingIndicatorResult: $.ASN1Encoder<GetMessageWaitingIndicatorResult> | null = null;

/**
 * @summary Encodes a(n) GetMessageWaitingIndicatorResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMessageWaitingIndicatorResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetMessageWaitingIndicatorResult (value: GetMessageWaitingIndicatorResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMessageWaitingIndicatorResult) { _cached_encoder_for_GetMessageWaitingIndicatorResult = function (value: GetMessageWaitingIndicatorResult, elGetter: $.ASN1Encoder<GetMessageWaitingIndicatorResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.messageWaitingOn, $.BER),
            /* IF_ABSENT  */ ((value.deviceForMessage === undefined) ? undefined : _encode_DeviceID(value.deviceForMessage, $.BER)),
            /* IF_ABSENT  */ ((value.lampIsPresent === undefined) ? undefined : $._encodeBoolean(value.lampIsPresent, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetMessageWaitingIndicatorResult(value, elGetter);
}


/* eslint-enable */
