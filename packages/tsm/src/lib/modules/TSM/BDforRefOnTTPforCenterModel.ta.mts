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
import { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";



/**
 * @summary BDforRefOnTTPforCenterModel
 * @description
 *
 * Reference-on-TTP for centre comparison: TTP URI plus client sample
 * BIR; verifier fetches the template from TTP separately. ITU-T Rec.
 * X.1084 (05/2008) §11.6, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforRefOnTTPforCenterModel ::= SEQUENCE {
 * thirdPartyInfo   UTF8String,
 * sampleData       SampleData,     -- BIR: BioAPI defined format --
 * digitalSignature    SignedData,
 * aCforBioOnClient    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforRefOnTTPforCenterModel {
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
     * @summary Restructures an object into a BDforRefOnTTPforCenterModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforRefOnTTPforCenterModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforRefOnTTPforCenterModel`.
     * @returns {BDforRefOnTTPforCenterModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforRefOnTTPforCenterModel)]: (BDforRefOnTTPforCenterModel)[_K] }): BDforRefOnTTPforCenterModel {
        return new BDforRefOnTTPforCenterModel(_o.thirdPartyInfo, _o.sampleData, _o.digitalSignature, _o.aCforBioOnClient);
    }


}

/**
 * @summary The Leading Root Component Types of BDforRefOnTTPforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforRefOnTTPforCenterModel: $.ComponentSpec[] = [
    new $.ComponentSpec("thirdPartyInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of BDforRefOnTTPforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforRefOnTTPforCenterModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforRefOnTTPforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforRefOnTTPforCenterModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforRefOnTTPforCenterModel: $.ASN1Decoder<BDforRefOnTTPforCenterModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforRefOnTTPforCenterModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforRefOnTTPforCenterModel (el: _Element): BDforRefOnTTPforCenterModel {
    if (!_cached_decoder_for_BDforRefOnTTPforCenterModel) { _cached_decoder_for_BDforRefOnTTPforCenterModel = function (el: _Element): BDforRefOnTTPforCenterModel {
    let thirdPartyInfo!: UTF8String;
    let sampleData!: SampleData;
    let digitalSignature!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "thirdPartyInfo": (_el: _Element): void => { thirdPartyInfo = $._decodeUTF8String(_el); },
        "sampleData": (_el: _Element): void => { sampleData = _decode_SampleData(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforRefOnTTPforCenterModel,
        _extension_additions_list_spec_for_BDforRefOnTTPforCenterModel,
        _root_component_type_list_2_spec_for_BDforRefOnTTPforCenterModel,
        undefined,
    );
    return new BDforRefOnTTPforCenterModel(
        thirdPartyInfo,
        sampleData,
        digitalSignature,
        aCforBioOnClient
    );
}; }
    return _cached_decoder_for_BDforRefOnTTPforCenterModel(el);
}

let _cached_encoder_for_BDforRefOnTTPforCenterModel: $.ASN1Encoder<BDforRefOnTTPforCenterModel> | null = null;

/**
 * @summary Encodes a(n) BDforRefOnTTPforCenterModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforRefOnTTPforCenterModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforRefOnTTPforCenterModel (value: BDforRefOnTTPforCenterModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforRefOnTTPforCenterModel) { _cached_encoder_for_BDforRefOnTTPforCenterModel = function (value: BDforRefOnTTPforCenterModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeUTF8String(value.thirdPartyInfo, $.BER),
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforRefOnTTPforCenterModel(value, elGetter);
}


/* eslint-enable */
