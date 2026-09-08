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
import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";
// export { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";
import { MicrophoneGain, _decode_MicrophoneGain, _encode_MicrophoneGain } from "../CSTA-physical-device-feature/MicrophoneGain.ta.mjs";
// export { MicrophoneGain, _decode_MicrophoneGain, _encode_MicrophoneGain } from "../CSTA-physical-device-feature/MicrophoneGain.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary MicrophoneGainEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicrophoneGainEvent ::= SEQUENCE
 * {    invokingDevice            SubjectDeviceID,
 *     auditoryApparatus        AuditoryApparatusID,
 *     microphoneGain            MicrophoneGain,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MicrophoneGainEvent {
    constructor (
        /**
         * @summary `invokingDevice`.
         * @public
         * @readonly
         */
        readonly invokingDevice: SubjectDeviceID,
        /**
         * @summary `auditoryApparatus`.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `microphoneGain`.
         * @public
         * @readonly
         */
        readonly microphoneGain: MicrophoneGain,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MicrophoneGainEvent
     * @description
     * 
     * This takes an `object` and converts it to a `MicrophoneGainEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MicrophoneGainEvent`.
     * @returns {MicrophoneGainEvent}
     */
    public static _from_object (_o: { [_K in keyof (MicrophoneGainEvent)]: (MicrophoneGainEvent)[_K] }): MicrophoneGainEvent {
        return new MicrophoneGainEvent(_o.invokingDevice, _o.auditoryApparatus, _o.microphoneGain, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of MicrophoneGainEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MicrophoneGainEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("invokingDevice", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("microphoneGain", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MicrophoneGainEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MicrophoneGainEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MicrophoneGainEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MicrophoneGainEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MicrophoneGainEvent: $.ASN1Decoder<MicrophoneGainEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicrophoneGainEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicrophoneGainEvent (el: _Element): MicrophoneGainEvent {
    if (!_cached_decoder_for_MicrophoneGainEvent) { _cached_decoder_for_MicrophoneGainEvent = function (el: _Element): MicrophoneGainEvent {
    let invokingDevice!: SubjectDeviceID;
    let auditoryApparatus!: AuditoryApparatusID;
    let microphoneGain!: MicrophoneGain;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "invokingDevice": (_el: _Element): void => { invokingDevice = _decode_SubjectDeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "microphoneGain": (_el: _Element): void => { microphoneGain = _decode_MicrophoneGain(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MicrophoneGainEvent,
        _extension_additions_list_spec_for_MicrophoneGainEvent,
        _root_component_type_list_2_spec_for_MicrophoneGainEvent,
        undefined,
    );
    return new MicrophoneGainEvent(
        invokingDevice,
        auditoryApparatus,
        microphoneGain,
        extensions
    );
}; }
    return _cached_decoder_for_MicrophoneGainEvent(el);
}

let _cached_encoder_for_MicrophoneGainEvent: $.ASN1Encoder<MicrophoneGainEvent> | null = null;

/**
 * @summary Encodes a(n) MicrophoneGainEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicrophoneGainEvent, encoded as an ASN.1 Element.
 */
export
function _encode_MicrophoneGainEvent (value: MicrophoneGainEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicrophoneGainEvent) { _cached_encoder_for_MicrophoneGainEvent = function (value: MicrophoneGainEvent, elGetter: $.ASN1Encoder<MicrophoneGainEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.invokingDevice, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ _encode_MicrophoneGain(value.microphoneGain, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MicrophoneGainEvent(value, elGetter);
}


/* eslint-enable */
