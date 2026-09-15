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

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";



/**
 * @summary TTPResponseRefOnTTPforCenterModel
 * @description
 *
 * TTP → verifier: reference template plus TTP integrity evidence
 * (Table 9). ITU-T Rec. X.1084 (05/2008) §11.6, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTPResponseRefOnTTPforCenterModel ::= SEQUENCE {
 * templateData    XtsmTemplate,
 * digitalSignature    SignedData,
 * aCforBioOnTTP    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class TTPResponseRefOnTTPforCenterModel {
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
     * @summary Restructures an object into a TTPResponseRefOnTTPforCenterModel
     * @description
     * 
     * This takes an `object` and converts it to a `TTPResponseRefOnTTPforCenterModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTPResponseRefOnTTPforCenterModel`.
     * @returns {TTPResponseRefOnTTPforCenterModel}
     */
    public static _from_object (_o: { [_K in keyof (TTPResponseRefOnTTPforCenterModel)]: (TTPResponseRefOnTTPforCenterModel)[_K] }): TTPResponseRefOnTTPforCenterModel {
        return new TTPResponseRefOnTTPforCenterModel(_o.templateData, _o.digitalSignature, _o.aCforBioOnTTP);
    }


}

/**
 * @summary The Leading Root Component Types of TTPResponseRefOnTTPforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTPResponseRefOnTTPforCenterModel: $.ComponentSpec[] = [
    new $.ComponentSpec("templateData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCforBioOnTTP", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TTPResponseRefOnTTPforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTPResponseRefOnTTPforCenterModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTPResponseRefOnTTPforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTPResponseRefOnTTPforCenterModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTPResponseRefOnTTPforCenterModel: $.ASN1Decoder<TTPResponseRefOnTTPforCenterModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTPResponseRefOnTTPforCenterModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTPResponseRefOnTTPforCenterModel (el: _Element): TTPResponseRefOnTTPforCenterModel {
    if (!_cached_decoder_for_TTPResponseRefOnTTPforCenterModel) { _cached_decoder_for_TTPResponseRefOnTTPforCenterModel = function (el: _Element): TTPResponseRefOnTTPforCenterModel {
    let templateData!: XtsmTemplate;
    let digitalSignature!: SignedData;
    let aCforBioOnTTP: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "templateData": (_el: _Element): void => { templateData = _decode_XtsmTemplate(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioOnTTP": (_el: _Element): void => { aCforBioOnTTP = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TTPResponseRefOnTTPforCenterModel,
        _extension_additions_list_spec_for_TTPResponseRefOnTTPforCenterModel,
        _root_component_type_list_2_spec_for_TTPResponseRefOnTTPforCenterModel,
        undefined,
    );
    return new TTPResponseRefOnTTPforCenterModel(
        templateData,
        digitalSignature,
        aCforBioOnTTP
    );
}; }
    return _cached_decoder_for_TTPResponseRefOnTTPforCenterModel(el);
}

let _cached_encoder_for_TTPResponseRefOnTTPforCenterModel: $.ASN1Encoder<TTPResponseRefOnTTPforCenterModel> | null = null;

/**
 * @summary Encodes a(n) TTPResponseRefOnTTPforCenterModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTPResponseRefOnTTPforCenterModel, encoded as an ASN.1 Element.
 */
export
function _encode_TTPResponseRefOnTTPforCenterModel (value: TTPResponseRefOnTTPforCenterModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTPResponseRefOnTTPforCenterModel) { _cached_encoder_for_TTPResponseRefOnTTPforCenterModel = function (value: TTPResponseRefOnTTPforCenterModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_XtsmTemplate(value.templateData, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnTTP === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnTTP, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TTPResponseRefOnTTPforCenterModel(value, elGetter);
}


/* eslint-enable */
