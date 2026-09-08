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
 * @summary AutoWorkModeEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoWorkModeEvent ::= SEQUENCE
 * {    invokingDevice             SubjectDeviceID,
 *     autoWorkOn            BOOLEAN,
 *     autoWorkInterval        INTEGER,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AutoWorkModeEvent {
    constructor (
        /**
         * @summary `invokingDevice`.
         * @public
         * @readonly
         */
        readonly invokingDevice: SubjectDeviceID,
        /**
         * @summary `autoWorkOn`.
         * @public
         * @readonly
         */
        readonly autoWorkOn: BOOLEAN,
        /**
         * @summary `autoWorkInterval`.
         * @public
         * @readonly
         */
        readonly autoWorkInterval: INTEGER,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AutoWorkModeEvent
     * @description
     * 
     * This takes an `object` and converts it to a `AutoWorkModeEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoWorkModeEvent`.
     * @returns {AutoWorkModeEvent}
     */
    public static _from_object (_o: { [_K in keyof (AutoWorkModeEvent)]: (AutoWorkModeEvent)[_K] }): AutoWorkModeEvent {
        return new AutoWorkModeEvent(_o.invokingDevice, _o.autoWorkOn, _o.autoWorkInterval, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of AutoWorkModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AutoWorkModeEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("invokingDevice", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("autoWorkOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("autoWorkInterval", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AutoWorkModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AutoWorkModeEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AutoWorkModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AutoWorkModeEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AutoWorkModeEvent: $.ASN1Decoder<AutoWorkModeEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoWorkModeEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AutoWorkModeEvent (el: _Element): AutoWorkModeEvent {
    if (!_cached_decoder_for_AutoWorkModeEvent) { _cached_decoder_for_AutoWorkModeEvent = function (el: _Element): AutoWorkModeEvent {
    let invokingDevice!: SubjectDeviceID;
    let autoWorkOn!: BOOLEAN;
    let autoWorkInterval!: INTEGER;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "invokingDevice": (_el: _Element): void => { invokingDevice = _decode_SubjectDeviceID(_el); },
        "autoWorkOn": (_el: _Element): void => { autoWorkOn = $._decodeBoolean(_el); },
        "autoWorkInterval": (_el: _Element): void => { autoWorkInterval = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AutoWorkModeEvent,
        _extension_additions_list_spec_for_AutoWorkModeEvent,
        _root_component_type_list_2_spec_for_AutoWorkModeEvent,
        undefined,
    );
    return new AutoWorkModeEvent(
        invokingDevice,
        autoWorkOn,
        autoWorkInterval,
        extensions
    );
}; }
    return _cached_decoder_for_AutoWorkModeEvent(el);
}

let _cached_encoder_for_AutoWorkModeEvent: $.ASN1Encoder<AutoWorkModeEvent> | null = null;

/**
 * @summary Encodes a(n) AutoWorkModeEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoWorkModeEvent, encoded as an ASN.1 Element.
 */
export
function _encode_AutoWorkModeEvent (value: AutoWorkModeEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AutoWorkModeEvent) { _cached_encoder_for_AutoWorkModeEvent = function (value: AutoWorkModeEvent, elGetter: $.ASN1Encoder<AutoWorkModeEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.invokingDevice, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.autoWorkOn, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.autoWorkInterval, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AutoWorkModeEvent(value, elGetter);
}


/* eslint-enable */
