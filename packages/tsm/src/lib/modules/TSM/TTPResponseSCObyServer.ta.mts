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
 * @summary TTPResponseSCObyServer
 * @description
 *
 * TTP → verifier comparison result for storage-and-comparison
 * outsourcing by server (Table 21). ITU-T Rec. X.1084 (05/2008)
 * §11.9.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTPResponseSCObyServer ::= SEQUENCE {
 * bFPSchemaforTTPProcess    BSP-BFP-Schemas,
 * templateID            TemplateID,
 * sampleQuality        Quality,
 * score                BioAPI-FMR,
 * digitalSignatureByTTP    SignedData,
 * aCforBioOnTTP        ACBioContentInformation OPTIONAL
 *                 -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class TTPResponseSCObyServer {
    constructor (
        /**
         * @summary `bFPSchemaforTTPProcess`.
         * @description
         *
         * BSP/BFP used by the TTP comparison. X.1084 §11.7, §11.9.
         *
         * @public
         * @readonly
         */
        readonly bFPSchemaforTTPProcess: BSP_BFP_Schemas,
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
         * @summary `digitalSignatureByTTP`.
         * @description
         *
         * CMS `SignedData` over the TTP process. X.1084 §11.9.
         *
         * @public
         * @readonly
         */
        readonly digitalSignatureByTTP: SignedData,
        /**
         * @summary `aCforBioOnTTP`.
         * @description
         *
         * ISO/IEC 24761 ACBio for the TTP process. Optional except in
         * `BDforRefOnTTPforLocalModel`, where Annex A requires it. X.1084
         * §11.5.
         *
         * @public
         * @readonly
         */
        readonly aCforBioOnTTP: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a TTPResponseSCObyServer
     * @description
     * 
     * This takes an `object` and converts it to a `TTPResponseSCObyServer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTPResponseSCObyServer`.
     * @returns {TTPResponseSCObyServer}
     */
    public static _from_object (_o: { [_K in keyof (TTPResponseSCObyServer)]: (TTPResponseSCObyServer)[_K] }): TTPResponseSCObyServer {
        return new TTPResponseSCObyServer(_o.bFPSchemaforTTPProcess, _o.templateID, _o.sampleQuality, _o.score, _o.digitalSignatureByTTP, _o.aCforBioOnTTP);
    }


}

/**
 * @summary The Leading Root Component Types of TTPResponseSCObyServer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTPResponseSCObyServer: $.ComponentSpec[] = [
    new $.ComponentSpec("bFPSchemaforTTPProcess", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sampleQuality", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("digitalSignatureByTTP", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aCforBioOnTTP", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TTPResponseSCObyServer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTPResponseSCObyServer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTPResponseSCObyServer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTPResponseSCObyServer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTPResponseSCObyServer: $.ASN1Decoder<TTPResponseSCObyServer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTPResponseSCObyServer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTPResponseSCObyServer (el: _Element): TTPResponseSCObyServer {
    if (!_cached_decoder_for_TTPResponseSCObyServer) { _cached_decoder_for_TTPResponseSCObyServer = function (el: _Element): TTPResponseSCObyServer {
    let bFPSchemaforTTPProcess!: BSP_BFP_Schemas;
    let templateID!: TemplateID;
    let sampleQuality!: Quality;
    let score!: BioAPI_FMR;
    let digitalSignatureByTTP!: SignedData;
    let aCforBioOnTTP: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "bFPSchemaforTTPProcess": (_el: _Element): void => { bFPSchemaforTTPProcess = _decode_BSP_BFP_Schemas(_el); },
        "templateID": (_el: _Element): void => { templateID = _decode_TemplateID(_el); },
        "sampleQuality": (_el: _Element): void => { sampleQuality = _decode_Quality(_el); },
        "score": (_el: _Element): void => { score = _decode_BioAPI_FMR(_el); },
        "digitalSignatureByTTP": (_el: _Element): void => { digitalSignatureByTTP = _decode_SignedData(_el); },
        "aCforBioOnTTP": (_el: _Element): void => { aCforBioOnTTP = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TTPResponseSCObyServer,
        _extension_additions_list_spec_for_TTPResponseSCObyServer,
        _root_component_type_list_2_spec_for_TTPResponseSCObyServer,
        undefined,
    );
    return new TTPResponseSCObyServer(
        bFPSchemaforTTPProcess,
        templateID,
        sampleQuality,
        score,
        digitalSignatureByTTP,
        aCforBioOnTTP
    );
}; }
    return _cached_decoder_for_TTPResponseSCObyServer(el);
}

let _cached_encoder_for_TTPResponseSCObyServer: $.ASN1Encoder<TTPResponseSCObyServer> | null = null;

/**
 * @summary Encodes a(n) TTPResponseSCObyServer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTPResponseSCObyServer, encoded as an ASN.1 Element.
 */
export
function _encode_TTPResponseSCObyServer (value: TTPResponseSCObyServer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTPResponseSCObyServer) { _cached_encoder_for_TTPResponseSCObyServer = function (value: TTPResponseSCObyServer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchemaforTTPProcess, $.BER),
            /* REQUIRED   */ _encode_TemplateID(value.templateID, $.BER),
            /* REQUIRED   */ _encode_Quality(value.sampleQuality, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.score, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignatureByTTP, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnTTP === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnTTP, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TTPResponseSCObyServer(value, elGetter);
}


/* eslint-enable */
