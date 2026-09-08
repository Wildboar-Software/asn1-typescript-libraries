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
import { BSP_BFP_Schemas, _decode_BSP_BFP_Schemas, _encode_BSP_BFP_Schemas } from "../TSM/BSP-BFP-Schemas.ta.mjs";
// export { BSP_BFP_Schemas, _decode_BSP_BFP_Schemas, _encode_BSP_BFP_Schemas } from "../TSM/BSP-BFP-Schemas.ta.mjs";
import { TemplateID, _decode_TemplateID, _encode_TemplateID } from "../TSM/TemplateID.ta.mjs";
// export { TemplateID, _decode_TemplateID, _encode_TemplateID } from "../TSM/TemplateID.ta.mjs";
import { Quality, _decode_Quality, _encode_Quality } from "../TSM/Quality.ta.mjs";
// export { Quality, _decode_Quality, _encode_Quality } from "../TSM/Quality.ta.mjs";
import { BioAPI_FMR, _decode_BioAPI_FMR, _encode_BioAPI_FMR } from "../BIP/BioAPI-FMR.ta.mjs";
// export { BioAPI_FMR, _decode_BioAPI_FMR, _encode_BioAPI_FMR } from "../BIP/BioAPI-FMR.ta.mjs";
import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";
// export { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";
import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";
// export { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";


/**
 * @summary BDforSCObyCModel2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforSCObyCModel2 ::= SEQUENCE {
 * bFPSchemaForTTPProcess     BSP-BFP-Schemas,
 * templateID        TemplateID,
 * sampleQuality    Quality,
 * score            BioAPI-FMR,
 * digitalSignatureByTTP    SignedData,
 * aCforBioOnTTP    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforSCObyCModel2 {
    constructor (
        /**
         * @summary `bFPSchemaForTTPProcess`.
         * @public
         * @readonly
         */
        readonly bFPSchemaForTTPProcess: BSP_BFP_Schemas,
        /**
         * @summary `templateID`.
         * @public
         * @readonly
         */
        readonly templateID: TemplateID,
        /**
         * @summary `sampleQuality`.
         * @public
         * @readonly
         */
        readonly sampleQuality: Quality,
        /**
         * @summary `score`.
         * @public
         * @readonly
         */
        readonly score: BioAPI_FMR,
        /**
         * @summary `digitalSignatureByTTP`.
         * @public
         * @readonly
         */
        readonly digitalSignatureByTTP: SignedData,
        /**
         * @summary `aCforBioOnTTP`.
         * @public
         * @readonly
         */
        readonly aCforBioOnTTP: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a BDforSCObyCModel2
     * @description
     * 
     * This takes an `object` and converts it to a `BDforSCObyCModel2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforSCObyCModel2`.
     * @returns {BDforSCObyCModel2}
     */
    public static _from_object (_o: { [_K in keyof (BDforSCObyCModel2)]: (BDforSCObyCModel2)[_K] }): BDforSCObyCModel2 {
        return new BDforSCObyCModel2(_o.bFPSchemaForTTPProcess, _o.templateID, _o.sampleQuality, _o.score, _o.digitalSignatureByTTP, _o.aCforBioOnTTP);
    }


}

/**
 * @summary The Leading Root Component Types of BDforSCObyCModel2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforSCObyCModel2: $.ComponentSpec[] = [
    new $.ComponentSpec("bFPSchemaForTTPProcess", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("sampleQuality", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("digitalSignatureByTTP", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("aCforBioOnTTP", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BDforSCObyCModel2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforSCObyCModel2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforSCObyCModel2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforSCObyCModel2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforSCObyCModel2: $.ASN1Decoder<BDforSCObyCModel2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforSCObyCModel2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforSCObyCModel2 (el: _Element): BDforSCObyCModel2 {
    if (!_cached_decoder_for_BDforSCObyCModel2) { _cached_decoder_for_BDforSCObyCModel2 = function (el: _Element): BDforSCObyCModel2 {
    let bFPSchemaForTTPProcess!: BSP_BFP_Schemas;
    let templateID!: TemplateID;
    let sampleQuality!: Quality;
    let score!: BioAPI_FMR;
    let digitalSignatureByTTP!: SignedData;
    let aCforBioOnTTP: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "bFPSchemaForTTPProcess": (_el: _Element): void => { bFPSchemaForTTPProcess = _decode_BSP_BFP_Schemas(_el); },
        "templateID": (_el: _Element): void => { templateID = _decode_TemplateID(_el); },
        "sampleQuality": (_el: _Element): void => { sampleQuality = _decode_Quality(_el); },
        "score": (_el: _Element): void => { score = _decode_BioAPI_FMR(_el); },
        "digitalSignatureByTTP": (_el: _Element): void => { digitalSignatureByTTP = _decode_SignedData(_el); },
        "aCforBioOnTTP": (_el: _Element): void => { aCforBioOnTTP = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforSCObyCModel2,
        _extension_additions_list_spec_for_BDforSCObyCModel2,
        _root_component_type_list_2_spec_for_BDforSCObyCModel2,
        undefined,
    );
    return new BDforSCObyCModel2(
        bFPSchemaForTTPProcess,
        templateID,
        sampleQuality,
        score,
        digitalSignatureByTTP,
        aCforBioOnTTP
    );
}; }
    return _cached_decoder_for_BDforSCObyCModel2(el);
}

let _cached_encoder_for_BDforSCObyCModel2: $.ASN1Encoder<BDforSCObyCModel2> | null = null;

/**
 * @summary Encodes a(n) BDforSCObyCModel2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforSCObyCModel2, encoded as an ASN.1 Element.
 */
export
function _encode_BDforSCObyCModel2 (value: BDforSCObyCModel2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforSCObyCModel2) { _cached_encoder_for_BDforSCObyCModel2 = function (value: BDforSCObyCModel2, elGetter: $.ASN1Encoder<BDforSCObyCModel2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchemaForTTPProcess, $.BER),
            /* REQUIRED   */ _encode_TemplateID(value.templateID, $.BER),
            /* REQUIRED   */ _encode_Quality(value.sampleQuality, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.score, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignatureByTTP, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnTTP === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnTTP, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforSCObyCModel2(value, elGetter);
}


/* eslint-enable */
