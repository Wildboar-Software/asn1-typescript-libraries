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
import { BiometricClientProcess, _decode_BiometricClientProcess, _encode_BiometricClientProcess } from "../TSM/BiometricClientProcess.ta.mjs";

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";



/**
 * @summary BDforDownloadModel
 * @description
 *
 * Same content as `BDforLocalModel` after the verifier has downloaded
 * the template in `BiometricServerHello.requestTemplateData`. ITU-T
 * Rec. X.1084 (05/2008) §7 (2), §11.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforDownloadModel ::= SEQUENCE {
 * biometricClientProcess    BiometricClientProcess,
 * digitalSignature    SignedData,
 * aCforBioOnClient    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforDownloadModel {
    constructor (
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
     * @summary Restructures an object into a BDforDownloadModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforDownloadModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforDownloadModel`.
     * @returns {BDforDownloadModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforDownloadModel)]: (BDforDownloadModel)[_K] }): BDforDownloadModel {
        return new BDforDownloadModel(_o.biometricClientProcess, _o.digitalSignature, _o.aCforBioOnClient);
    }


}

/**
 * @summary The Leading Root Component Types of BDforDownloadModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforDownloadModel: $.ComponentSpec[] = [
    new $.ComponentSpec("biometricClientProcess", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BDforDownloadModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforDownloadModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforDownloadModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforDownloadModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforDownloadModel: $.ASN1Decoder<BDforDownloadModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforDownloadModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforDownloadModel (el: _Element): BDforDownloadModel {
    if (!_cached_decoder_for_BDforDownloadModel) { _cached_decoder_for_BDforDownloadModel = function (el: _Element): BDforDownloadModel {
    let biometricClientProcess!: BiometricClientProcess;
    let digitalSignature!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "biometricClientProcess": (_el: _Element): void => { biometricClientProcess = _decode_BiometricClientProcess(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforDownloadModel,
        _extension_additions_list_spec_for_BDforDownloadModel,
        _root_component_type_list_2_spec_for_BDforDownloadModel,
        undefined,
    );
    return new BDforDownloadModel(
        biometricClientProcess,
        digitalSignature,
        aCforBioOnClient
    );
}; }
    return _cached_decoder_for_BDforDownloadModel(el);
}

let _cached_encoder_for_BDforDownloadModel: $.ASN1Encoder<BDforDownloadModel> | null = null;

/**
 * @summary Encodes a(n) BDforDownloadModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforDownloadModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforDownloadModel (value: BDforDownloadModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforDownloadModel) { _cached_encoder_for_BDforDownloadModel = function (value: BDforDownloadModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BiometricClientProcess(value.biometricClientProcess, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforDownloadModel(value, elGetter);
}


/* eslint-enable */
