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
 * @summary BDforCObyClientModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforCObyClientModel ::= SEQUENCE {
 * bFPSchemaforClientProcess    BSP-BFP-Schemas,
 * thirdPartyInfo            UTF8String,
 * bFPSchemaforTTPProcess        BSP-BFP-Schemas,
 * templateID                TemplateID,
 * sampleQuality            Quality,
 * score                    BioAPI-FMR,
 * digitalSignaturebyClient    SignedData,
 * digitalSignaturebyTTP        SignedData,
 * aCforBioOnClient            ACBioContentInformation OPTIONAL,
 * aCforBioOnTTP            ACBioContentInformation OPTIONAL
 *                     -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforCObyClientModel {
    constructor (
        /**
         * @summary `bFPSchemaforClientProcess`.
         * @public
         * @readonly
         */
        readonly bFPSchemaforClientProcess: BSP_BFP_Schemas,
        /**
         * @summary `thirdPartyInfo`.
         * @public
         * @readonly
         */
        readonly thirdPartyInfo: UTF8String,
        /**
         * @summary `bFPSchemaforTTPProcess`.
         * @public
         * @readonly
         */
        readonly bFPSchemaforTTPProcess: BSP_BFP_Schemas,
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
         * @summary `digitalSignaturebyClient`.
         * @public
         * @readonly
         */
        readonly digitalSignaturebyClient: SignedData,
        /**
         * @summary `digitalSignaturebyTTP`.
         * @public
         * @readonly
         */
        readonly digitalSignaturebyTTP: SignedData,
        /**
         * @summary `aCforBioOnClient`.
         * @public
         * @readonly
         */
        readonly aCforBioOnClient: OPTIONAL<ACBioContentInformation>,
        /**
         * @summary `aCforBioOnTTP`.
         * @public
         * @readonly
         */
        readonly aCforBioOnTTP: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a BDforCObyClientModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforCObyClientModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforCObyClientModel`.
     * @returns {BDforCObyClientModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforCObyClientModel)]: (BDforCObyClientModel)[_K] }): BDforCObyClientModel {
        return new BDforCObyClientModel(_o.bFPSchemaforClientProcess, _o.thirdPartyInfo, _o.bFPSchemaforTTPProcess, _o.templateID, _o.sampleQuality, _o.score, _o.digitalSignaturebyClient, _o.digitalSignaturebyTTP, _o.aCforBioOnClient, _o.aCforBioOnTTP);
    }


}

/**
 * @summary The Leading Root Component Types of BDforCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforCObyClientModel: $.ComponentSpec[] = [
    new $.ComponentSpec("bFPSchemaforClientProcess", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("thirdPartyInfo", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("bFPSchemaforTTPProcess", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("sampleQuality", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("digitalSignaturebyClient", false, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("digitalSignaturebyTTP", false, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("aCforBioOnTTP", true, $.hasTag(_TagClass.context, 9), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BDforCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforCObyClientModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforCObyClientModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforCObyClientModel: $.ASN1Decoder<BDforCObyClientModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforCObyClientModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforCObyClientModel (el: _Element): BDforCObyClientModel {
    if (!_cached_decoder_for_BDforCObyClientModel) { _cached_decoder_for_BDforCObyClientModel = function (el: _Element): BDforCObyClientModel {
    let bFPSchemaforClientProcess!: BSP_BFP_Schemas;
    let thirdPartyInfo!: UTF8String;
    let bFPSchemaforTTPProcess!: BSP_BFP_Schemas;
    let templateID!: TemplateID;
    let sampleQuality!: Quality;
    let score!: BioAPI_FMR;
    let digitalSignaturebyClient!: SignedData;
    let digitalSignaturebyTTP!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    let aCforBioOnTTP: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "bFPSchemaforClientProcess": (_el: _Element): void => { bFPSchemaforClientProcess = _decode_BSP_BFP_Schemas(_el); },
        "thirdPartyInfo": (_el: _Element): void => { thirdPartyInfo = $._decodeUTF8String(_el); },
        "bFPSchemaforTTPProcess": (_el: _Element): void => { bFPSchemaforTTPProcess = _decode_BSP_BFP_Schemas(_el); },
        "templateID": (_el: _Element): void => { templateID = _decode_TemplateID(_el); },
        "sampleQuality": (_el: _Element): void => { sampleQuality = _decode_Quality(_el); },
        "score": (_el: _Element): void => { score = _decode_BioAPI_FMR(_el); },
        "digitalSignaturebyClient": (_el: _Element): void => { digitalSignaturebyClient = _decode_SignedData(_el); },
        "digitalSignaturebyTTP": (_el: _Element): void => { digitalSignaturebyTTP = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); },
        "aCforBioOnTTP": (_el: _Element): void => { aCforBioOnTTP = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforCObyClientModel,
        _extension_additions_list_spec_for_BDforCObyClientModel,
        _root_component_type_list_2_spec_for_BDforCObyClientModel,
        undefined,
    );
    return new BDforCObyClientModel(
        bFPSchemaforClientProcess,
        thirdPartyInfo,
        bFPSchemaforTTPProcess,
        templateID,
        sampleQuality,
        score,
        digitalSignaturebyClient,
        digitalSignaturebyTTP,
        aCforBioOnClient,
        aCforBioOnTTP
    );
}; }
    return _cached_decoder_for_BDforCObyClientModel(el);
}

let _cached_encoder_for_BDforCObyClientModel: $.ASN1Encoder<BDforCObyClientModel> | null = null;

/**
 * @summary Encodes a(n) BDforCObyClientModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforCObyClientModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforCObyClientModel (value: BDforCObyClientModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforCObyClientModel) { _cached_encoder_for_BDforCObyClientModel = function (value: BDforCObyClientModel, elGetter: $.ASN1Encoder<BDforCObyClientModel>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchemaforClientProcess, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.thirdPartyInfo, $.BER),
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchemaforTTPProcess, $.BER),
            /* REQUIRED   */ _encode_TemplateID(value.templateID, $.BER),
            /* REQUIRED   */ _encode_Quality(value.sampleQuality, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.score, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignaturebyClient, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignaturebyTTP, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER)),
            /* IF_ABSENT  */ ((value.aCforBioOnTTP === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnTTP, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforCObyClientModel(value, elGetter);
}


/* eslint-enable */
