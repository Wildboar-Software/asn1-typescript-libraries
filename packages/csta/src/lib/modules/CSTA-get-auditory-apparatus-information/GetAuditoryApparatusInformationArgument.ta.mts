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
 * @summary GetAuditoryApparatusInformationArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAuditoryApparatusInformationArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     auditoryApparatus         AuditoryApparatusID            OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetAuditoryApparatusInformationArgument {
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
     * @summary Restructures an object into a GetAuditoryApparatusInformationArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetAuditoryApparatusInformationArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAuditoryApparatusInformationArgument`.
     * @returns {GetAuditoryApparatusInformationArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetAuditoryApparatusInformationArgument)]: (GetAuditoryApparatusInformationArgument)[_K] }): GetAuditoryApparatusInformationArgument {
        return new GetAuditoryApparatusInformationArgument(_o.device, _o.auditoryApparatus, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetAuditoryApparatusInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAuditoryApparatusInformationArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("auditoryApparatus", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetAuditoryApparatusInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAuditoryApparatusInformationArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAuditoryApparatusInformationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAuditoryApparatusInformationArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAuditoryApparatusInformationArgument: $.ASN1Decoder<GetAuditoryApparatusInformationArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAuditoryApparatusInformationArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAuditoryApparatusInformationArgument (el: _Element): GetAuditoryApparatusInformationArgument {
    if (!_cached_decoder_for_GetAuditoryApparatusInformationArgument) { _cached_decoder_for_GetAuditoryApparatusInformationArgument = function (el: _Element): GetAuditoryApparatusInformationArgument {
    let device!: DeviceID;
    let auditoryApparatus: OPTIONAL<AuditoryApparatusID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAuditoryApparatusInformationArgument,
        _extension_additions_list_spec_for_GetAuditoryApparatusInformationArgument,
        _root_component_type_list_2_spec_for_GetAuditoryApparatusInformationArgument,
        undefined,
    );
    return new GetAuditoryApparatusInformationArgument(
        device,
        auditoryApparatus,
        extensions
    );
}; }
    return _cached_decoder_for_GetAuditoryApparatusInformationArgument(el);
}

let _cached_encoder_for_GetAuditoryApparatusInformationArgument: $.ASN1Encoder<GetAuditoryApparatusInformationArgument> | null = null;

/**
 * @summary Encodes a(n) GetAuditoryApparatusInformationArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAuditoryApparatusInformationArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetAuditoryApparatusInformationArgument (value: GetAuditoryApparatusInformationArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAuditoryApparatusInformationArgument) { _cached_encoder_for_GetAuditoryApparatusInformationArgument = function (value: GetAuditoryApparatusInformationArgument, elGetter: $.ASN1Encoder<GetAuditoryApparatusInformationArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.auditoryApparatus === undefined) ? undefined : _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAuditoryApparatusInformationArgument(value, elGetter);
}


/* eslint-enable */
