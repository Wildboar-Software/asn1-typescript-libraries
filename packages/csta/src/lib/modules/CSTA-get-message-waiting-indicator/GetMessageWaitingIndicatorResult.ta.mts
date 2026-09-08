/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetMessageWaitingIndicatorResult
 * @description
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
         * @public
         * @readonly
         */
        readonly messageWaitingOn: BOOLEAN,
        /**
         * @summary `deviceForMessage`.
         * @public
         * @readonly
         */
        readonly deviceForMessage: OPTIONAL<DeviceID>,
        /**
         * @summary `lampIsPresent`.
         * @public
         * @readonly
         */
        readonly lampIsPresent: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extensions`.
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
    new $.ComponentSpec("messageWaitingOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("deviceForMessage", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("lampIsPresent", true, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
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
