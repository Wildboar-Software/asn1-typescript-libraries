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
 * @summary TTPResponsebyServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTPResponsebyServer ::= SEQUENCE {
 * bFPSchema        BSP-BFP-Schemas,
 * templateID        TemplateID,
 * sampleQuality    Quality,
 * score            BioAPI-FMR,
 * digitalSignature    SignedData,
 * aCforBioOnTTP    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class TTPResponsebyServer {
    constructor (
        /**
         * @summary `bFPSchema`.
         * @public
         * @readonly
         */
        readonly bFPSchema: BSP_BFP_Schemas,
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
         * @summary `aCforBioOnTTP`.
         * @public
         * @readonly
         */
        readonly aCforBioOnTTP: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a TTPResponsebyServer
     * @description
     * 
     * This takes an `object` and converts it to a `TTPResponsebyServer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTPResponsebyServer`.
     * @returns {TTPResponsebyServer}
     */
    public static _from_object (_o: { [_K in keyof (TTPResponsebyServer)]: (TTPResponsebyServer)[_K] }): TTPResponsebyServer {
        return new TTPResponsebyServer(_o.bFPSchema, _o.templateID, _o.sampleQuality, _o.score, _o.digitalSignature, _o.aCforBioOnTTP);
    }


}

/**
 * @summary The Leading Root Component Types of TTPResponsebyServer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTPResponsebyServer: $.ComponentSpec[] = [
    new $.ComponentSpec("bFPSchema", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sampleQuality", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aCforBioOnTTP", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TTPResponsebyServer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTPResponsebyServer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTPResponsebyServer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTPResponsebyServer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTPResponsebyServer: $.ASN1Decoder<TTPResponsebyServer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTPResponsebyServer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTPResponsebyServer (el: _Element): TTPResponsebyServer {
    if (!_cached_decoder_for_TTPResponsebyServer) { _cached_decoder_for_TTPResponsebyServer = function (el: _Element): TTPResponsebyServer {
    let bFPSchema!: BSP_BFP_Schemas;
    let templateID!: TemplateID;
    let sampleQuality!: Quality;
    let score!: BioAPI_FMR;
    let digitalSignature!: SignedData;
    let aCforBioOnTTP: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "bFPSchema": (_el: _Element): void => { bFPSchema = _decode_BSP_BFP_Schemas(_el); },
        "templateID": (_el: _Element): void => { templateID = _decode_TemplateID(_el); },
        "sampleQuality": (_el: _Element): void => { sampleQuality = _decode_Quality(_el); },
        "score": (_el: _Element): void => { score = _decode_BioAPI_FMR(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioOnTTP": (_el: _Element): void => { aCforBioOnTTP = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TTPResponsebyServer,
        _extension_additions_list_spec_for_TTPResponsebyServer,
        _root_component_type_list_2_spec_for_TTPResponsebyServer,
        undefined,
    );
    return new TTPResponsebyServer(
        bFPSchema,
        templateID,
        sampleQuality,
        score,
        digitalSignature,
        aCforBioOnTTP
    );
}; }
    return _cached_decoder_for_TTPResponsebyServer(el);
}

let _cached_encoder_for_TTPResponsebyServer: $.ASN1Encoder<TTPResponsebyServer> | null = null;

/**
 * @summary Encodes a(n) TTPResponsebyServer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTPResponsebyServer, encoded as an ASN.1 Element.
 */
export
function _encode_TTPResponsebyServer (value: TTPResponsebyServer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTPResponsebyServer) { _cached_encoder_for_TTPResponsebyServer = function (value: TTPResponsebyServer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchema, $.BER),
            /* REQUIRED   */ _encode_TemplateID(value.templateID, $.BER),
            /* REQUIRED   */ _encode_Quality(value.sampleQuality, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.score, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnTTP === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnTTP, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TTPResponsebyServer(value, elGetter);
}


/* eslint-enable */
