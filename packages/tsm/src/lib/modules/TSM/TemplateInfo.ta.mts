/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../TSM/BiometricType.ta.mjs";

import { BSP_BFP_Schema, _decode_BSP_BFP_Schema, _encode_BSP_BFP_Schema } from "../TSM/BSP-BFP-Schema.ta.mjs";

import { CertificateIDInformation, _decode_CertificateIDInformation, _encode_CertificateIDInformation } from "../TSM/CertificateIDInformation.ta.mjs";



/**
 * @summary TemplateInfo
 * @description
 *
 * Metadata of a reference template: modality, creator, creating
 * BSP/BFP, and certificate serial. Annex A notes serial may have "no
 * value available". ITU-T Rec. X.1084 (05/2008) §11.1, Annex A.
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
         * @description
         *
         * BioAPI biometric type of this template. X.1084 §11.1.
         *
         * @public
         * @readonly
         */
        readonly biometricType: BiometricType,
        /**
         * @summary `creator`.
         * @description
         *
         * Party that created the reference template. X.1084 §11.1.
         *
         * @public
         * @readonly
         */
        readonly creator: UTF8String,
        /**
         * @summary `createdBFPSchema`.
         * @description
         *
         * BSP/BFP that produced the template. [ISO/IEC 19784-1];
         * X.1084 §11.1.
         *
         * @public
         * @readonly
         */
        readonly createdBFPSchema: BSP_BFP_Schema,
        /**
         * @summary `templateID`.
         * @description
         *
         * Certificate serial of this template (Annex A: "such as
         * CertificateSerialNumber (no value available)"). X.1084 §11.1.
         *
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
    new $.ComponentSpec("biometricType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("creator", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("createdBFPSchema", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 3))
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
    if (!_cached_encoder_for_TemplateInfo) { _cached_encoder_for_TemplateInfo = function (value: TemplateInfo): _Element {
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
