/* eslint-disable */
import {
    OPTIONAL,
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
import { BSP_BFP_Schemas, _decode_BSP_BFP_Schemas, _encode_BSP_BFP_Schemas } from "../TSM/BSP-BFP-Schemas.ta.mjs";

import { TemplateID, _decode_TemplateID, _encode_TemplateID } from "../TSM/TemplateID.ta.mjs";

import { Quality, _decode_Quality, _encode_Quality } from "../TSM/Quality.ta.mjs";

import { BioAPI_FMR, _decode_BioAPI_FMR, _encode_BioAPI_FMR } from "../BIP/BioAPI-FMR.ta.mjs";

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";



/**
 * @summary BDforSCObyCModel3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforSCObyCModel3 ::= SEQUENCE {
 * bFPSchemaForClientProcess     BSP-BFP-Schemas,
 * thirdPartyInfo            UTF8String,
 * bFPSchemaForTTPProcess        BSP-BFP-Schemas,
 * templateID                TemplateID,
 * sampleQuality            Quality,
 * score                    BioAPI-FMR,
 * digitalSignatureByClient    SignedData,
 * digitalSignatureByTTP        SignedData,
 * aCforBioOnClient            ACBioContentInformation OPTIONAL,
 * aCforBioOnTTP            ACBioContentInformation OPTIONAL
 *                     -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforSCObyCModel3 {
    constructor (
        /**
         * @summary `bFPSchemaForClientProcess`.
         * @public
         * @readonly
         */
        readonly bFPSchemaForClientProcess: BSP_BFP_Schemas,
        /**
         * @summary `thirdPartyInfo`.
         * @public
         * @readonly
         */
        readonly thirdPartyInfo: UTF8String,
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
         * @summary `digitalSignatureByClient`.
         * @public
         * @readonly
         */
        readonly digitalSignatureByClient: SignedData,
        /**
         * @summary `digitalSignatureByTTP`.
         * @public
         * @readonly
         */
        readonly digitalSignatureByTTP: SignedData,
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
     * @summary Restructures an object into a BDforSCObyCModel3
     * @description
     * 
     * This takes an `object` and converts it to a `BDforSCObyCModel3`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforSCObyCModel3`.
     * @returns {BDforSCObyCModel3}
     */
    public static _from_object (_o: { [_K in keyof (BDforSCObyCModel3)]: (BDforSCObyCModel3)[_K] }): BDforSCObyCModel3 {
        return new BDforSCObyCModel3(_o.bFPSchemaForClientProcess, _o.thirdPartyInfo, _o.bFPSchemaForTTPProcess, _o.templateID, _o.sampleQuality, _o.score, _o.digitalSignatureByClient, _o.digitalSignatureByTTP, _o.aCforBioOnClient, _o.aCforBioOnTTP);
    }


}

/**
 * @summary The Leading Root Component Types of BDforSCObyCModel3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforSCObyCModel3: $.ComponentSpec[] = [
    new $.ComponentSpec("bFPSchemaForClientProcess", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("thirdPartyInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bFPSchemaForTTPProcess", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sampleQuality", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("digitalSignatureByClient", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("digitalSignatureByTTP", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("aCforBioOnTTP", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of BDforSCObyCModel3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforSCObyCModel3: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforSCObyCModel3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforSCObyCModel3: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforSCObyCModel3: $.ASN1Decoder<BDforSCObyCModel3> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforSCObyCModel3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforSCObyCModel3 (el: _Element): BDforSCObyCModel3 {
    if (!_cached_decoder_for_BDforSCObyCModel3) { _cached_decoder_for_BDforSCObyCModel3 = function (el: _Element): BDforSCObyCModel3 {
    let bFPSchemaForClientProcess!: BSP_BFP_Schemas;
    let thirdPartyInfo!: UTF8String;
    let bFPSchemaForTTPProcess!: BSP_BFP_Schemas;
    let templateID!: TemplateID;
    let sampleQuality!: Quality;
    let score!: BioAPI_FMR;
    let digitalSignatureByClient!: SignedData;
    let digitalSignatureByTTP!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    let aCforBioOnTTP: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "bFPSchemaForClientProcess": (_el: _Element): void => { bFPSchemaForClientProcess = _decode_BSP_BFP_Schemas(_el); },
        "thirdPartyInfo": (_el: _Element): void => { thirdPartyInfo = $._decodeUTF8String(_el); },
        "bFPSchemaForTTPProcess": (_el: _Element): void => { bFPSchemaForTTPProcess = _decode_BSP_BFP_Schemas(_el); },
        "templateID": (_el: _Element): void => { templateID = _decode_TemplateID(_el); },
        "sampleQuality": (_el: _Element): void => { sampleQuality = _decode_Quality(_el); },
        "score": (_el: _Element): void => { score = _decode_BioAPI_FMR(_el); },
        "digitalSignatureByClient": (_el: _Element): void => { digitalSignatureByClient = _decode_SignedData(_el); },
        "digitalSignatureByTTP": (_el: _Element): void => { digitalSignatureByTTP = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); },
        "aCforBioOnTTP": (_el: _Element): void => { aCforBioOnTTP = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforSCObyCModel3,
        _extension_additions_list_spec_for_BDforSCObyCModel3,
        _root_component_type_list_2_spec_for_BDforSCObyCModel3,
        undefined,
    );
    return new BDforSCObyCModel3(
        bFPSchemaForClientProcess,
        thirdPartyInfo,
        bFPSchemaForTTPProcess,
        templateID,
        sampleQuality,
        score,
        digitalSignatureByClient,
        digitalSignatureByTTP,
        aCforBioOnClient,
        aCforBioOnTTP
    );
}; }
    return _cached_decoder_for_BDforSCObyCModel3(el);
}

let _cached_encoder_for_BDforSCObyCModel3: $.ASN1Encoder<BDforSCObyCModel3> | null = null;

/**
 * @summary Encodes a(n) BDforSCObyCModel3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforSCObyCModel3, encoded as an ASN.1 Element.
 */
export
function _encode_BDforSCObyCModel3 (value: BDforSCObyCModel3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforSCObyCModel3) { _cached_encoder_for_BDforSCObyCModel3 = function (value: BDforSCObyCModel3): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchemaForClientProcess, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.thirdPartyInfo, $.BER),
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchemaForTTPProcess, $.BER),
            /* REQUIRED   */ _encode_TemplateID(value.templateID, $.BER),
            /* REQUIRED   */ _encode_Quality(value.sampleQuality, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.score, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignatureByClient, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignatureByTTP, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER)),
            /* IF_ABSENT  */ ((value.aCforBioOnTTP === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnTTP, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforSCObyCModel3(value, elGetter);
}


/* eslint-enable */
