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
import { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../TSM/BiometricType.ta.mjs";
// export { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../TSM/BiometricType.ta.mjs";
import { BSP_BFP_Schema, _decode_BSP_BFP_Schema, _encode_BSP_BFP_Schema } from "../TSM/BSP-BFP-Schema.ta.mjs";
// export { BSP_BFP_Schema, _decode_BSP_BFP_Schema, _encode_BSP_BFP_Schema } from "../TSM/BSP-BFP-Schema.ta.mjs";
import { CertificateIDInformation, _decode_CertificateIDInformation, _encode_CertificateIDInformation } from "../TSM/CertificateIDInformation.ta.mjs";
// export { CertificateIDInformation, _decode_CertificateIDInformation, _encode_CertificateIDInformation } from "../TSM/CertificateIDInformation.ta.mjs";


/**
 * @summary TemplateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TemplateInfo ::= SEQUENCE {
 * biometricType    BiometricType,
 * creator        UTF8String,
 * createdBFPSchema    BSP-BFP-Schema,
 * templateID        CertificateIDInformation
 *             -- such as CertificateSerialNumber (no value available)
 * }
 * ```
 * 
 * @class
 */
export
class TemplateInfo {
    constructor (
        /**
         * @summary `biometricType`.
         * @public
         * @readonly
         */
        readonly biometricType: BiometricType,
        /**
         * @summary `creator`.
         * @public
         * @readonly
         */
        readonly creator: UTF8String,
        /**
         * @summary `createdBFPSchema`.
         * @public
         * @readonly
         */
        readonly createdBFPSchema: BSP_BFP_Schema,
        /**
         * @summary `templateID`.
         * @public
         * @readonly
         */
        readonly templateID: CertificateIDInformation
    ) {}

    /**
     * @summary Restructures an object into a TemplateInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TemplateInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TemplateInfo`.
     * @returns {TemplateInfo}
     */
    public static _from_object (_o: { [_K in keyof (TemplateInfo)]: (TemplateInfo)[_K] }): TemplateInfo {
        return new TemplateInfo(_o.biometricType, _o.creator, _o.createdBFPSchema, _o.templateID);
    }


}

/**
 * @summary The Leading Root Component Types of TemplateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TemplateInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("biometricType", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("creator", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("createdBFPSchema", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TemplateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TemplateInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TemplateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TemplateInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TemplateInfo: $.ASN1Decoder<TemplateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TemplateInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TemplateInfo (el: _Element): TemplateInfo {
    if (!_cached_decoder_for_TemplateInfo) { _cached_decoder_for_TemplateInfo = function (el: _Element): TemplateInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("TemplateInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "biometricType";
    sequence[1].name = "creator";
    sequence[2].name = "createdBFPSchema";
    sequence[3].name = "templateID";
    let biometricType!: BiometricType;
    let creator!: UTF8String;
    let createdBFPSchema!: BSP_BFP_Schema;
    let templateID!: CertificateIDInformation;
    biometricType = _decode_BiometricType(sequence[0]);
    creator = $._decodeUTF8String(sequence[1]);
    createdBFPSchema = _decode_BSP_BFP_Schema(sequence[2]);
    templateID = _decode_CertificateIDInformation(sequence[3]);
    return new TemplateInfo(
        biometricType,
        creator,
        createdBFPSchema,
        templateID,

    );
}; }
    return _cached_decoder_for_TemplateInfo(el);
}

let _cached_encoder_for_TemplateInfo: $.ASN1Encoder<TemplateInfo> | null = null;

/**
 * @summary Encodes a(n) TemplateInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TemplateInfo (value: TemplateInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TemplateInfo) { _cached_encoder_for_TemplateInfo = function (value: TemplateInfo, elGetter: $.ASN1Encoder<TemplateInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BiometricType(value.biometricType, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.creator, $.BER),
            /* REQUIRED   */ _encode_BSP_BFP_Schema(value.createdBFPSchema, $.BER),
            /* REQUIRED   */ _encode_CertificateIDInformation(value.templateID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TemplateInfo(value, elGetter);
}


/* eslint-enable */
