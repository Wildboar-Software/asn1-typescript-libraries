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
 * @summary TTPResponseCObyClientModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTPResponseCObyClientModel ::= SEQUENCE {
 * bFPSchemaOnTTPProcess    BSP-BFP-Schemas,
 * templateID        TemplateID,
 * sampleQuality    Quality,
 * score            BioAPI-FMR,
 * digitalSignature    SignedData,
 * aCforBioTTP        ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class TTPResponseCObyClientModel {
    constructor (
        /**
         * @summary `bFPSchemaOnTTPProcess`.
         * @public
         * @readonly
         */
        readonly bFPSchemaOnTTPProcess: BSP_BFP_Schemas,
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
         * @summary `digitalSignature`.
         * @public
         * @readonly
         */
        readonly digitalSignature: SignedData,
        /**
         * @summary `aCforBioTTP`.
         * @public
         * @readonly
         */
        readonly aCforBioTTP: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a TTPResponseCObyClientModel
     * @description
     * 
     * This takes an `object` and converts it to a `TTPResponseCObyClientModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTPResponseCObyClientModel`.
     * @returns {TTPResponseCObyClientModel}
     */
    public static _from_object (_o: { [_K in keyof (TTPResponseCObyClientModel)]: (TTPResponseCObyClientModel)[_K] }): TTPResponseCObyClientModel {
        return new TTPResponseCObyClientModel(_o.bFPSchemaOnTTPProcess, _o.templateID, _o.sampleQuality, _o.score, _o.digitalSignature, _o.aCforBioTTP);
    }


}

/**
 * @summary The Leading Root Component Types of TTPResponseCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTPResponseCObyClientModel: $.ComponentSpec[] = [
    new $.ComponentSpec("bFPSchemaOnTTPProcess", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("sampleQuality", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("aCforBioTTP", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TTPResponseCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTPResponseCObyClientModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTPResponseCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTPResponseCObyClientModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTPResponseCObyClientModel: $.ASN1Decoder<TTPResponseCObyClientModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTPResponseCObyClientModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTPResponseCObyClientModel (el: _Element): TTPResponseCObyClientModel {
    if (!_cached_decoder_for_TTPResponseCObyClientModel) { _cached_decoder_for_TTPResponseCObyClientModel = function (el: _Element): TTPResponseCObyClientModel {
    let bFPSchemaOnTTPProcess!: BSP_BFP_Schemas;
    let templateID!: TemplateID;
    let sampleQuality!: Quality;
    let score!: BioAPI_FMR;
    let digitalSignature!: SignedData;
    let aCforBioTTP: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "bFPSchemaOnTTPProcess": (_el: _Element): void => { bFPSchemaOnTTPProcess = _decode_BSP_BFP_Schemas(_el); },
        "templateID": (_el: _Element): void => { templateID = _decode_TemplateID(_el); },
        "sampleQuality": (_el: _Element): void => { sampleQuality = _decode_Quality(_el); },
        "score": (_el: _Element): void => { score = _decode_BioAPI_FMR(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioTTP": (_el: _Element): void => { aCforBioTTP = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TTPResponseCObyClientModel,
        _extension_additions_list_spec_for_TTPResponseCObyClientModel,
        _root_component_type_list_2_spec_for_TTPResponseCObyClientModel,
        undefined,
    );
    return new TTPResponseCObyClientModel(
        bFPSchemaOnTTPProcess,
        templateID,
        sampleQuality,
        score,
        digitalSignature,
        aCforBioTTP
    );
}; }
    return _cached_decoder_for_TTPResponseCObyClientModel(el);
}

let _cached_encoder_for_TTPResponseCObyClientModel: $.ASN1Encoder<TTPResponseCObyClientModel> | null = null;

/**
 * @summary Encodes a(n) TTPResponseCObyClientModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTPResponseCObyClientModel, encoded as an ASN.1 Element.
 */
export
function _encode_TTPResponseCObyClientModel (value: TTPResponseCObyClientModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTPResponseCObyClientModel) { _cached_encoder_for_TTPResponseCObyClientModel = function (value: TTPResponseCObyClientModel, elGetter: $.ASN1Encoder<TTPResponseCObyClientModel>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchemaOnTTPProcess, $.BER),
            /* REQUIRED   */ _encode_TemplateID(value.templateID, $.BER),
            /* REQUIRED   */ _encode_Quality(value.sampleQuality, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.score, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioTTP === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioTTP, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TTPResponseCObyClientModel(value, elGetter);
}


/* eslint-enable */
