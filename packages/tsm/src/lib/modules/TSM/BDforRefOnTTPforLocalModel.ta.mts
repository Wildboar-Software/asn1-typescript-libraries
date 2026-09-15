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
import { BiometricClientProcess, _decode_BiometricClientProcess, _encode_BiometricClientProcess } from "../TSM/BiometricClientProcess.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";



/**
 * @summary BDforRefOnTTPforLocalModel
 * @description
 *
 * Reference-on-TTP for local comparison: TTP URI, client process
 * report, required TTP ACBio, client signature, optional client ACBio.
 * Client may omit the TTP template from this message for privacy
 * (App. I.2). ITU-T Rec. X.1084 (05/2008) §11.5, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforRefOnTTPforLocalModel ::= SEQUENCE {
 * thirdPartyInfo            UTF8String,
 * biometricClientProcess        BiometricClientProcess,
 * aCforBioOnTTP            ACBioContentInformation,
 * digitalSignaturebyClient    SignedData,
 * aCforBioOnClient            ACBioContentInformation OPTIONAL
 *                     -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforRefOnTTPforLocalModel {
    constructor (
        /**
         * @summary `thirdPartyInfo`.
         * @description
         *
         * TTP network address as a URI ([IETF RFC 3986]). X.1084 §10.1.2.
         *
         * @public
         * @readonly
         */
        readonly thirdPartyInfo: UTF8String,
        /**
         * @summary `biometricClientProcess`.
         * @description
         *
         * BSP/BFP, template ID, sample quality, and comparison score from
         * the client. X.1084 §11.1 Table 3.
         *
         * @public
         * @readonly
         */
        readonly biometricClientProcess: BiometricClientProcess,
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
        readonly aCforBioOnTTP: ACBioContentInformation,
        /**
         * @summary `digitalSignaturebyClient`.
         * @description
         *
         * CMS `SignedData` over the client process. X.1084 §11.5, §11.7.
         *
         * @public
         * @readonly
         */
        readonly digitalSignaturebyClient: SignedData,
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
     * @summary Restructures an object into a BDforRefOnTTPforLocalModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforRefOnTTPforLocalModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforRefOnTTPforLocalModel`.
     * @returns {BDforRefOnTTPforLocalModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforRefOnTTPforLocalModel)]: (BDforRefOnTTPforLocalModel)[_K] }): BDforRefOnTTPforLocalModel {
        return new BDforRefOnTTPforLocalModel(_o.thirdPartyInfo, _o.biometricClientProcess, _o.aCforBioOnTTP, _o.digitalSignaturebyClient, _o.aCforBioOnClient);
    }


}

/**
 * @summary The Leading Root Component Types of BDforRefOnTTPforLocalModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforRefOnTTPforLocalModel: $.ComponentSpec[] = [
    new $.ComponentSpec("thirdPartyInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("biometricClientProcess", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCforBioOnTTP", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("digitalSignaturebyClient", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of BDforRefOnTTPforLocalModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforRefOnTTPforLocalModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforRefOnTTPforLocalModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforRefOnTTPforLocalModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforRefOnTTPforLocalModel: $.ASN1Decoder<BDforRefOnTTPforLocalModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforRefOnTTPforLocalModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforRefOnTTPforLocalModel (el: _Element): BDforRefOnTTPforLocalModel {
    if (!_cached_decoder_for_BDforRefOnTTPforLocalModel) { _cached_decoder_for_BDforRefOnTTPforLocalModel = function (el: _Element): BDforRefOnTTPforLocalModel {
    let thirdPartyInfo!: UTF8String;
    let biometricClientProcess!: BiometricClientProcess;
    let aCforBioOnTTP!: ACBioContentInformation;
    let digitalSignaturebyClient!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "thirdPartyInfo": (_el: _Element): void => { thirdPartyInfo = $._decodeUTF8String(_el); },
        "biometricClientProcess": (_el: _Element): void => { biometricClientProcess = _decode_BiometricClientProcess(_el); },
        "aCforBioOnTTP": (_el: _Element): void => { aCforBioOnTTP = _decode_ACBioContentInformation(_el); },
        "digitalSignaturebyClient": (_el: _Element): void => { digitalSignaturebyClient = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforRefOnTTPforLocalModel,
        _extension_additions_list_spec_for_BDforRefOnTTPforLocalModel,
        _root_component_type_list_2_spec_for_BDforRefOnTTPforLocalModel,
        undefined,
    );
    return new BDforRefOnTTPforLocalModel(
        thirdPartyInfo,
        biometricClientProcess,
        aCforBioOnTTP,
        digitalSignaturebyClient,
        aCforBioOnClient
    );
}; }
    return _cached_decoder_for_BDforRefOnTTPforLocalModel(el);
}

let _cached_encoder_for_BDforRefOnTTPforLocalModel: $.ASN1Encoder<BDforRefOnTTPforLocalModel> | null = null;

/**
 * @summary Encodes a(n) BDforRefOnTTPforLocalModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforRefOnTTPforLocalModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforRefOnTTPforLocalModel (value: BDforRefOnTTPforLocalModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforRefOnTTPforLocalModel) { _cached_encoder_for_BDforRefOnTTPforLocalModel = function (value: BDforRefOnTTPforLocalModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeUTF8String(value.thirdPartyInfo, $.BER),
            /* REQUIRED   */ _encode_BiometricClientProcess(value.biometricClientProcess, $.BER),
            /* REQUIRED   */ _encode_ACBioContentInformation(value.aCforBioOnTTP, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignaturebyClient, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforRefOnTTPforLocalModel(value, elGetter);
}


/* eslint-enable */
