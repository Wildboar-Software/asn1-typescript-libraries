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
import { XtsmTemplate, _decode_XtsmTemplate, _encode_XtsmTemplate } from "../TSM/XtsmTemplate.ta.mjs";

import { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";



/**
 * @summary BDforAttachedModel
 * @description
 *
 * Attached model: client sends template and sample BIR; verifier
 * compares. Signature / optional ACBio attest client capture. ITU-T
 * Rec. X.1084 (05/2008) §7 (3), §11.3 Table 5, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforAttachedModel ::= SEQUENCE {
 * templateData    XtsmTemplate,
 * sampleData        SampleData,     -- BIR: BioAPI defined format --
 * digitalSignature    SignedData,
 * aCforBioOnClient    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforAttachedModel {
    constructor (
        /**
         * @summary `templateData`.
         * @description
         *
         * Reference template as `XtsmTemplate` (X.1089 biometric
         * certificate). X.1084 §11.3, §11.5.
         *
         * @public
         * @readonly
         */
        readonly templateData: XtsmTemplate,
        /**
         * @summary `sampleData`.
         * @description
         *
         * Captured sample as BioAPI BIR (includes BSP/device info).
         * [ISO/IEC 19784-1]; X.1084 §11.3–§11.4.
         *
         * @public
         * @readonly
         */
        readonly sampleData: SampleData,
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
         * @summary `aCforBioOnClient`.
         * @description
         *
         * Optional ISO/IEC 24761 ACBio for the client process. X.1084 §11.1.
         *
         * @public
         * @readonly
         */
        readonly aCforBioOnClient: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a BDforAttachedModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforAttachedModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforAttachedModel`.
     * @returns {BDforAttachedModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforAttachedModel)]: (BDforAttachedModel)[_K] }): BDforAttachedModel {
        return new BDforAttachedModel(_o.templateData, _o.sampleData, _o.digitalSignature, _o.aCforBioOnClient);
    }


}

/**
 * @summary The Leading Root Component Types of BDforAttachedModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforAttachedModel: $.ComponentSpec[] = [
    new $.ComponentSpec("templateData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of BDforAttachedModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforAttachedModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforAttachedModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforAttachedModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforAttachedModel: $.ASN1Decoder<BDforAttachedModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforAttachedModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforAttachedModel (el: _Element): BDforAttachedModel {
    if (!_cached_decoder_for_BDforAttachedModel) { _cached_decoder_for_BDforAttachedModel = function (el: _Element): BDforAttachedModel {
    let templateData!: XtsmTemplate;
    let sampleData!: SampleData;
    let digitalSignature!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "templateData": (_el: _Element): void => { templateData = _decode_XtsmTemplate(_el); },
        "sampleData": (_el: _Element): void => { sampleData = _decode_SampleData(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforAttachedModel,
        _extension_additions_list_spec_for_BDforAttachedModel,
        _root_component_type_list_2_spec_for_BDforAttachedModel,
        undefined,
    );
    return new BDforAttachedModel(
        templateData,
        sampleData,
        digitalSignature,
        aCforBioOnClient
    );
}; }
    return _cached_decoder_for_BDforAttachedModel(el);
}

let _cached_encoder_for_BDforAttachedModel: $.ASN1Encoder<BDforAttachedModel> | null = null;

/**
 * @summary Encodes a(n) BDforAttachedModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforAttachedModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforAttachedModel (value: BDforAttachedModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforAttachedModel) { _cached_encoder_for_BDforAttachedModel = function (value: BDforAttachedModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_XtsmTemplate(value.templateData, $.BER),
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforAttachedModel(value, elGetter);
}


/* eslint-enable */
