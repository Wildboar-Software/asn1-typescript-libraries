/* eslint-disable */
import {
    OPTIONAL,
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
 * @summary TTPResponseCObyClientModel
 * @description
 *
 * TTP → client: BSP info, template ID, quality, score, TTP signature
 * (Table 11). ITU-T Rec. X.1084 (05/2008) §11.7, Annex A.
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
         * @description
         *
         * BSP/BFP used by the TTP comparison. X.1084 §11.7 Table 11.
         *
         * @public
         * @readonly
         */
        readonly bFPSchemaOnTTPProcess: BSP_BFP_Schemas,
        /**
         * @summary `templateID`.
         * @description
         *
         * Identifies the reference template (issuer, serial, metadata)
         * for revocation without sending the template. X.1084 §11.1.
         *
         * @public
         * @readonly
         */
        readonly templateID: TemplateID,
        /**
         * @summary `sampleQuality`.
         * @description
         *
         * Quality of the captured sample, `0..100`. X.1084 §11.1 item 3.
         *
         * @public
         * @readonly
         */
        readonly sampleQuality: Quality,
        /**
         * @summary `score`.
         * @description
         *
         * Comparison score as BioAPI FMR. X.1084 §11.1 item 3.
         *
         * @public
         * @readonly
         */
        readonly score: BioAPI_FMR,
        /**
         * @summary `digitalSignature`.
         * @description
         *
         * CMS `SignedData` (X9.84) over the biometric process or payload.
         * Assures integrity of that party's processing. X.1084 §11.1 item 4.
         *
         * @public
         * @readonly
         */
        readonly digitalSignature: SignedData,
        /**
         * @summary `aCforBioTTP`.
         * @description
         *
         * Optional ISO/IEC 24761 ACBio for the TTP comparison. X.1084 §11.7.
         *
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
    new $.ComponentSpec("bFPSchemaOnTTPProcess", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sampleQuality", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aCforBioTTP", true, $.hasTag(_TagClass.context, 5))
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
    if (!_cached_encoder_for_TTPResponseCObyClientModel) { _cached_encoder_for_TTPResponseCObyClientModel = function (value: TTPResponseCObyClientModel): _Element {
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
