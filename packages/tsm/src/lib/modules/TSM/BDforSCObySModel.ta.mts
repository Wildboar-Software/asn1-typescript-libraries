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
import { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";



/**
 * @summary BDforSCObySModel
 * @description
 *
 * Storage-and-comparison outsourcing by server: client → verifier
 * sample BIR plus integrity evidence (Table 19). ITU-T Rec. X.1084
 * (05/2008) §11.9.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforSCObySModel ::= SEQUENCE {
 * sampleData                SampleData,    -- BIR: BioAPI defined format --
 * digitalSignatureByClient    SignedData,
 * aCforBioOnClient            ACBioContentInformation OPTIONAL
 *                     -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforSCObySModel {
    constructor (
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
         * @summary `digitalSignatureByClient`.
         * @description
         *
         * CMS `SignedData` over the client process. X.1084 §11.9.
         *
         * @public
         * @readonly
         */
        readonly digitalSignatureByClient: SignedData,
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
     * @summary Restructures an object into a BDforSCObySModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforSCObySModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforSCObySModel`.
     * @returns {BDforSCObySModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforSCObySModel)]: (BDforSCObySModel)[_K] }): BDforSCObySModel {
        return new BDforSCObySModel(_o.sampleData, _o.digitalSignatureByClient, _o.aCforBioOnClient);
    }


}

/**
 * @summary The Leading Root Component Types of BDforSCObySModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforSCObySModel: $.ComponentSpec[] = [
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("digitalSignatureByClient", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BDforSCObySModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforSCObySModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforSCObySModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforSCObySModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforSCObySModel: $.ASN1Decoder<BDforSCObySModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforSCObySModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforSCObySModel (el: _Element): BDforSCObySModel {
    if (!_cached_decoder_for_BDforSCObySModel) { _cached_decoder_for_BDforSCObySModel = function (el: _Element): BDforSCObySModel {
    let sampleData!: SampleData;
    let digitalSignatureByClient!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "sampleData": (_el: _Element): void => { sampleData = _decode_SampleData(_el); },
        "digitalSignatureByClient": (_el: _Element): void => { digitalSignatureByClient = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforSCObySModel,
        _extension_additions_list_spec_for_BDforSCObySModel,
        _root_component_type_list_2_spec_for_BDforSCObySModel,
        undefined,
    );
    return new BDforSCObySModel(
        sampleData,
        digitalSignatureByClient,
        aCforBioOnClient
    );
}; }
    return _cached_decoder_for_BDforSCObySModel(el);
}

let _cached_encoder_for_BDforSCObySModel: $.ASN1Encoder<BDforSCObySModel> | null = null;

/**
 * @summary Encodes a(n) BDforSCObySModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforSCObySModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforSCObySModel (value: BDforSCObySModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforSCObySModel) { _cached_encoder_for_BDforSCObySModel = function (value: BDforSCObySModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignatureByClient, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforSCObySModel(value, elGetter);
}


/* eslint-enable */
