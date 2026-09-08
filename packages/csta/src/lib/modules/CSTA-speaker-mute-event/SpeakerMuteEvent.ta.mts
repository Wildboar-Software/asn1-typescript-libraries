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
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SpeakerMuteEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerMuteEvent ::= SEQUENCE
 * {    invokingDevice            SubjectDeviceID,
 *     auditoryApparatus        AuditoryApparatusID,
 *     speakerMuteOn            BOOLEAN,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SpeakerMuteEvent {
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
         * @summary `speakerMuteOn`.
         * @public
         * @readonly
         */
        readonly speakerMuteOn: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SpeakerMuteEvent
     * @description
     * 
     * This takes an `object` and converts it to a `SpeakerMuteEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpeakerMuteEvent`.
     * @returns {SpeakerMuteEvent}
     */
    public static _from_object (_o: { [_K in keyof (SpeakerMuteEvent)]: (SpeakerMuteEvent)[_K] }): SpeakerMuteEvent {
        return new SpeakerMuteEvent(_o.invokingDevice, _o.auditoryApparatus, _o.speakerMuteOn, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SpeakerMuteEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpeakerMuteEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("invokingDevice", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("speakerMuteOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SpeakerMuteEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpeakerMuteEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpeakerMuteEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpeakerMuteEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpeakerMuteEvent: $.ASN1Decoder<SpeakerMuteEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerMuteEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerMuteEvent (el: _Element): SpeakerMuteEvent {
    if (!_cached_decoder_for_SpeakerMuteEvent) { _cached_decoder_for_SpeakerMuteEvent = function (el: _Element): SpeakerMuteEvent {
    let invokingDevice!: SubjectDeviceID;
    let auditoryApparatus!: AuditoryApparatusID;
    let speakerMuteOn!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "invokingDevice": (_el: _Element): void => { invokingDevice = _decode_SubjectDeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "speakerMuteOn": (_el: _Element): void => { speakerMuteOn = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SpeakerMuteEvent,
        _extension_additions_list_spec_for_SpeakerMuteEvent,
        _root_component_type_list_2_spec_for_SpeakerMuteEvent,
        undefined,
    );
    return new SpeakerMuteEvent(
        invokingDevice,
        auditoryApparatus,
        speakerMuteOn,
        extensions
    );
}; }
    return _cached_decoder_for_SpeakerMuteEvent(el);
}

let _cached_encoder_for_SpeakerMuteEvent: $.ASN1Encoder<SpeakerMuteEvent> | null = null;

/**
 * @summary Encodes a(n) SpeakerMuteEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerMuteEvent, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerMuteEvent (value: SpeakerMuteEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerMuteEvent) { _cached_encoder_for_SpeakerMuteEvent = function (value: SpeakerMuteEvent, elGetter: $.ASN1Encoder<SpeakerMuteEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.invokingDevice, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.speakerMuteOn, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpeakerMuteEvent(value, elGetter);
}


/* eslint-enable */
