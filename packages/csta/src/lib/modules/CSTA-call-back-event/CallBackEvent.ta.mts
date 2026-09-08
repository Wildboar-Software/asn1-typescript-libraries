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
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
// export { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary CallBackEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackEvent ::= SEQUENCE
 * {    originatingDevice        SubjectDeviceID,
 *     targetDevice            SubjectDeviceID,
 *     callBackSetCanceled        BOOLEAN,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallBackEvent {
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
         * @summary `callBackSetCanceled`.
         * @public
         * @readonly
         */
        readonly callBackSetCanceled: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a CallBackEvent
     * @description
     * 
     * This takes an `object` and converts it to a `CallBackEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBackEvent`.
     * @returns {CallBackEvent}
     */
    public static _from_object (_o: { [_K in keyof (CallBackEvent)]: (CallBackEvent)[_K] }): CallBackEvent {
        return new CallBackEvent(_o.originatingDevice, _o.targetDevice, _o.callBackSetCanceled, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallBackEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBackEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingDevice", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("targetDevice", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("callBackSetCanceled", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallBackEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBackEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBackEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBackEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBackEvent: $.ASN1Decoder<CallBackEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackEvent (el: _Element): CallBackEvent {
    if (!_cached_decoder_for_CallBackEvent) { _cached_decoder_for_CallBackEvent = function (el: _Element): CallBackEvent {
    let originatingDevice!: SubjectDeviceID;
    let targetDevice!: SubjectDeviceID;
    let callBackSetCanceled!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "originatingDevice": (_el: _Element): void => { originatingDevice = _decode_SubjectDeviceID(_el); },
        "targetDevice": (_el: _Element): void => { targetDevice = _decode_SubjectDeviceID(_el); },
        "callBackSetCanceled": (_el: _Element): void => { callBackSetCanceled = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBackEvent,
        _extension_additions_list_spec_for_CallBackEvent,
        _root_component_type_list_2_spec_for_CallBackEvent,
        undefined,
    );
    return new CallBackEvent(
        originatingDevice,
        targetDevice,
        callBackSetCanceled,
        extensions
    );
}; }
    return _cached_decoder_for_CallBackEvent(el);
}

let _cached_encoder_for_CallBackEvent: $.ASN1Encoder<CallBackEvent> | null = null;

/**
 * @summary Encodes a(n) CallBackEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackEvent, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackEvent (value: CallBackEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackEvent) { _cached_encoder_for_CallBackEvent = function (value: CallBackEvent, elGetter: $.ASN1Encoder<CallBackEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.originatingDevice, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.targetDevice, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.callBackSetCanceled, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBackEvent(value, elGetter);
}


/* eslint-enable */
