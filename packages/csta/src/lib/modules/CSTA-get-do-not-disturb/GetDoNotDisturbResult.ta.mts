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
import { CallOrigination, CallOrigination_internal /* IMPORTED_LONG_NAMED_BIT */, internal /* IMPORTED_SHORT_NAMED_BIT */, CallOrigination_external /* IMPORTED_LONG_NAMED_BIT */, external /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallOrigination, _encode_CallOrigination } from "../CSTA-device-feature-types/CallOrigination.ta.mjs";
// export { CallOrigination, CallOrigination_internal /* IMPORTED_LONG_NAMED_BIT */, internal /* IMPORTED_SHORT_NAMED_BIT */, CallOrigination_external /* IMPORTED_LONG_NAMED_BIT */, external /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallOrigination, _encode_CallOrigination } from "../CSTA-device-feature-types/CallOrigination.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetDoNotDisturbResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDoNotDisturbResult ::= SEQUENCE
 * {    doNotDisturbOn            BOOLEAN,
 *     callOrigination            CallOrigination                OPTIONAL,
 *     callingDeviceList        SEQUENCE OF DeviceID            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetDoNotDisturbResult {
    constructor (
        /**
         * @summary `doNotDisturbOn`.
         * @public
         * @readonly
         */
        readonly doNotDisturbOn: BOOLEAN,
        /**
         * @summary `callOrigination`.
         * @public
         * @readonly
         */
        readonly callOrigination: OPTIONAL<CallOrigination>,
        /**
         * @summary `callingDeviceList`.
         * @public
         * @readonly
         */
        readonly callingDeviceList: OPTIONAL<DeviceID[]>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetDoNotDisturbResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetDoNotDisturbResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetDoNotDisturbResult`.
     * @returns {GetDoNotDisturbResult}
     */
    public static _from_object (_o: { [_K in keyof (GetDoNotDisturbResult)]: (GetDoNotDisturbResult)[_K] }): GetDoNotDisturbResult {
        return new GetDoNotDisturbResult(_o.doNotDisturbOn, _o.callOrigination, _o.callingDeviceList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetDoNotDisturbResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetDoNotDisturbResult: $.ComponentSpec[] = [
    new $.ComponentSpec("doNotDisturbOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("callOrigination", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("callingDeviceList", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetDoNotDisturbResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetDoNotDisturbResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetDoNotDisturbResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetDoNotDisturbResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetDoNotDisturbResult: $.ASN1Decoder<GetDoNotDisturbResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDoNotDisturbResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDoNotDisturbResult (el: _Element): GetDoNotDisturbResult {
    if (!_cached_decoder_for_GetDoNotDisturbResult) { _cached_decoder_for_GetDoNotDisturbResult = function (el: _Element): GetDoNotDisturbResult {
    let doNotDisturbOn!: BOOLEAN;
    let callOrigination: OPTIONAL<CallOrigination>;
    let callingDeviceList: OPTIONAL<DeviceID[]>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "doNotDisturbOn": (_el: _Element): void => { doNotDisturbOn = $._decodeBoolean(_el); },
        "callOrigination": (_el: _Element): void => { callOrigination = _decode_CallOrigination(_el); },
        "callingDeviceList": (_el: _Element): void => { callingDeviceList = $._decodeSequenceOf<DeviceID>(() => _decode_DeviceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetDoNotDisturbResult,
        _extension_additions_list_spec_for_GetDoNotDisturbResult,
        _root_component_type_list_2_spec_for_GetDoNotDisturbResult,
        undefined,
    );
    return new GetDoNotDisturbResult(
        doNotDisturbOn,
        callOrigination,
        callingDeviceList,
        extensions
    );
}; }
    return _cached_decoder_for_GetDoNotDisturbResult(el);
}

let _cached_encoder_for_GetDoNotDisturbResult: $.ASN1Encoder<GetDoNotDisturbResult> | null = null;

/**
 * @summary Encodes a(n) GetDoNotDisturbResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDoNotDisturbResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetDoNotDisturbResult (value: GetDoNotDisturbResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDoNotDisturbResult) { _cached_encoder_for_GetDoNotDisturbResult = function (value: GetDoNotDisturbResult, elGetter: $.ASN1Encoder<GetDoNotDisturbResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.doNotDisturbOn, $.BER),
            /* IF_ABSENT  */ ((value.callOrigination === undefined) ? undefined : _encode_CallOrigination(value.callOrigination, $.BER)),
            /* IF_ABSENT  */ ((value.callingDeviceList === undefined) ? undefined : $._encodeSequenceOf<DeviceID>(() => _encode_DeviceID, $.BER)(value.callingDeviceList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetDoNotDisturbResult(value, elGetter);
}


/* eslint-enable */
