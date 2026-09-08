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
import { CallOrigination, CallOrigination_internal /* IMPORTED_LONG_NAMED_BIT */, internal /* IMPORTED_SHORT_NAMED_BIT */, CallOrigination_external /* IMPORTED_LONG_NAMED_BIT */, external /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallOrigination, _encode_CallOrigination } from "../CSTA-device-feature-types/CallOrigination.ta.mjs";
// export { CallOrigination, CallOrigination_internal /* IMPORTED_LONG_NAMED_BIT */, internal /* IMPORTED_SHORT_NAMED_BIT */, CallOrigination_external /* IMPORTED_LONG_NAMED_BIT */, external /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallOrigination, _encode_CallOrigination } from "../CSTA-device-feature-types/CallOrigination.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary DoNotDisturbEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DoNotDisturbEvent ::= SEQUENCE
 * {    device                 SubjectDeviceID,
 *     doNotDisturbOn            BOOLEAN,
 *     callOrigination            CallOrigination                OPTIONAL,
 *     callingDeviceList        SEQUENCE OF DeviceID            OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DoNotDisturbEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
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
     * @summary Restructures an object into a DoNotDisturbEvent
     * @description
     * 
     * This takes an `object` and converts it to a `DoNotDisturbEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DoNotDisturbEvent`.
     * @returns {DoNotDisturbEvent}
     */
    public static _from_object (_o: { [_K in keyof (DoNotDisturbEvent)]: (DoNotDisturbEvent)[_K] }): DoNotDisturbEvent {
        return new DoNotDisturbEvent(_o.device, _o.doNotDisturbOn, _o.callOrigination, _o.callingDeviceList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DoNotDisturbEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DoNotDisturbEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("doNotDisturbOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("callOrigination", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("callingDeviceList", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DoNotDisturbEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DoNotDisturbEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DoNotDisturbEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DoNotDisturbEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DoNotDisturbEvent: $.ASN1Decoder<DoNotDisturbEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DoNotDisturbEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DoNotDisturbEvent (el: _Element): DoNotDisturbEvent {
    if (!_cached_decoder_for_DoNotDisturbEvent) { _cached_decoder_for_DoNotDisturbEvent = function (el: _Element): DoNotDisturbEvent {
    let device!: SubjectDeviceID;
    let doNotDisturbOn!: BOOLEAN;
    let callOrigination: OPTIONAL<CallOrigination>;
    let callingDeviceList: OPTIONAL<DeviceID[]>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "doNotDisturbOn": (_el: _Element): void => { doNotDisturbOn = $._decodeBoolean(_el); },
        "callOrigination": (_el: _Element): void => { callOrigination = _decode_CallOrigination(_el); },
        "callingDeviceList": (_el: _Element): void => { callingDeviceList = $._decodeSequenceOf<DeviceID>(() => _decode_DeviceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DoNotDisturbEvent,
        _extension_additions_list_spec_for_DoNotDisturbEvent,
        _root_component_type_list_2_spec_for_DoNotDisturbEvent,
        undefined,
    );
    return new DoNotDisturbEvent(
        device,
        doNotDisturbOn,
        callOrigination,
        callingDeviceList,
        extensions
    );
}; }
    return _cached_decoder_for_DoNotDisturbEvent(el);
}

let _cached_encoder_for_DoNotDisturbEvent: $.ASN1Encoder<DoNotDisturbEvent> | null = null;

/**
 * @summary Encodes a(n) DoNotDisturbEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DoNotDisturbEvent, encoded as an ASN.1 Element.
 */
export
function _encode_DoNotDisturbEvent (value: DoNotDisturbEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DoNotDisturbEvent) { _cached_encoder_for_DoNotDisturbEvent = function (value: DoNotDisturbEvent, elGetter: $.ASN1Encoder<DoNotDisturbEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.doNotDisturbOn, $.BER),
            /* IF_ABSENT  */ ((value.callOrigination === undefined) ? undefined : _encode_CallOrigination(value.callOrigination, $.BER)),
            /* IF_ABSENT  */ ((value.callingDeviceList === undefined) ? undefined : $._encodeSequenceOf<DeviceID>(() => _encode_DeviceID, $.BER)(value.callingDeviceList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DoNotDisturbEvent(value, elGetter);
}


/* eslint-enable */
