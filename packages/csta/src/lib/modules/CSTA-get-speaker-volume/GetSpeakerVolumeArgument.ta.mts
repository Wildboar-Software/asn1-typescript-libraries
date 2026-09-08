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
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetSpeakerVolumeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSpeakerVolumeArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     auditoryApparatus        AuditoryApparatusID            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetSpeakerVolumeArgument {
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
        readonly auditoryApparatus: OPTIONAL<AuditoryApparatusID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetSpeakerVolumeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetSpeakerVolumeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetSpeakerVolumeArgument`.
     * @returns {GetSpeakerVolumeArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetSpeakerVolumeArgument)]: (GetSpeakerVolumeArgument)[_K] }): GetSpeakerVolumeArgument {
        return new GetSpeakerVolumeArgument(_o.device, _o.auditoryApparatus, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetSpeakerVolumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetSpeakerVolumeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("auditoryApparatus", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetSpeakerVolumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetSpeakerVolumeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetSpeakerVolumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetSpeakerVolumeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetSpeakerVolumeArgument: $.ASN1Decoder<GetSpeakerVolumeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSpeakerVolumeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSpeakerVolumeArgument (el: _Element): GetSpeakerVolumeArgument {
    if (!_cached_decoder_for_GetSpeakerVolumeArgument) { _cached_decoder_for_GetSpeakerVolumeArgument = function (el: _Element): GetSpeakerVolumeArgument {
    let device!: DeviceID;
    let auditoryApparatus: OPTIONAL<AuditoryApparatusID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetSpeakerVolumeArgument,
        _extension_additions_list_spec_for_GetSpeakerVolumeArgument,
        _root_component_type_list_2_spec_for_GetSpeakerVolumeArgument,
        undefined,
    );
    return new GetSpeakerVolumeArgument(
        device,
        auditoryApparatus,
        extensions
    );
}; }
    return _cached_decoder_for_GetSpeakerVolumeArgument(el);
}

let _cached_encoder_for_GetSpeakerVolumeArgument: $.ASN1Encoder<GetSpeakerVolumeArgument> | null = null;

/**
 * @summary Encodes a(n) GetSpeakerVolumeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSpeakerVolumeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetSpeakerVolumeArgument (value: GetSpeakerVolumeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSpeakerVolumeArgument) { _cached_encoder_for_GetSpeakerVolumeArgument = function (value: GetSpeakerVolumeArgument, elGetter: $.ASN1Encoder<GetSpeakerVolumeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.auditoryApparatus === undefined) ? undefined : _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetSpeakerVolumeArgument(value, elGetter);
}


/* eslint-enable */
