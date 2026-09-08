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
import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";
// export { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";
import { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";
// export { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SetSpeakerVolumeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetSpeakerVolumeArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     auditoryApparatus        AuditoryApparatusID,
 *     speakerVolume            Volume,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetSpeakerVolumeArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `auditoryApparatus`.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `speakerVolume`.
         * @public
         * @readonly
         */
        readonly speakerVolume: Volume,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetSpeakerVolumeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetSpeakerVolumeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetSpeakerVolumeArgument`.
     * @returns {SetSpeakerVolumeArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetSpeakerVolumeArgument)]: (SetSpeakerVolumeArgument)[_K] }): SetSpeakerVolumeArgument {
        return new SetSpeakerVolumeArgument(_o.device, _o.auditoryApparatus, _o.speakerVolume, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SetSpeakerVolumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetSpeakerVolumeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("speakerVolume", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SetSpeakerVolumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetSpeakerVolumeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetSpeakerVolumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetSpeakerVolumeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetSpeakerVolumeArgument: $.ASN1Decoder<SetSpeakerVolumeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetSpeakerVolumeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetSpeakerVolumeArgument (el: _Element): SetSpeakerVolumeArgument {
    if (!_cached_decoder_for_SetSpeakerVolumeArgument) { _cached_decoder_for_SetSpeakerVolumeArgument = function (el: _Element): SetSpeakerVolumeArgument {
    let device!: DeviceID;
    let auditoryApparatus!: AuditoryApparatusID;
    let speakerVolume!: Volume;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "speakerVolume": (_el: _Element): void => { speakerVolume = _decode_Volume(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetSpeakerVolumeArgument,
        _extension_additions_list_spec_for_SetSpeakerVolumeArgument,
        _root_component_type_list_2_spec_for_SetSpeakerVolumeArgument,
        undefined,
    );
    return new SetSpeakerVolumeArgument(
        device,
        auditoryApparatus,
        speakerVolume,
        extensions
    );
}; }
    return _cached_decoder_for_SetSpeakerVolumeArgument(el);
}

let _cached_encoder_for_SetSpeakerVolumeArgument: $.ASN1Encoder<SetSpeakerVolumeArgument> | null = null;

/**
 * @summary Encodes a(n) SetSpeakerVolumeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetSpeakerVolumeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetSpeakerVolumeArgument (value: SetSpeakerVolumeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetSpeakerVolumeArgument) { _cached_encoder_for_SetSpeakerVolumeArgument = function (value: SetSpeakerVolumeArgument, elGetter: $.ASN1Encoder<SetSpeakerVolumeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ _encode_Volume(value.speakerVolume, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetSpeakerVolumeArgument(value, elGetter);
}


/* eslint-enable */
