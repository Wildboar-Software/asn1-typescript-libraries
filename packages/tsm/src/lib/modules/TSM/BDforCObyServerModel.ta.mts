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
 * @summary BDforCObyServerModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforCObyServerModel ::= SEQUENCE {
 * sampleData        SampleData,  -- BIR: BioAPI defined format --
 * digitalSignature    SignedData,
 * aCforBiometrics    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforCObyServerModel {
    constructor (
        /**
         * @summary `sampleData`.
         * @public
         * @readonly
         */
        readonly sampleData: SampleData,
        /**
         * @summary `digitalSignature`.
         * @public
         * @readonly
         */
        readonly digitalSignature: SignedData,
        /**
         * @summary `aCforBiometrics`.
         * @public
         * @readonly
         */
        readonly aCforBiometrics: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a BDforCObyServerModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforCObyServerModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforCObyServerModel`.
     * @returns {BDforCObyServerModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforCObyServerModel)]: (BDforCObyServerModel)[_K] }): BDforCObyServerModel {
        return new BDforCObyServerModel(_o.sampleData, _o.digitalSignature, _o.aCforBiometrics);
    }


}

/**
 * @summary The Leading Root Component Types of BDforCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforCObyServerModel: $.ComponentSpec[] = [
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCforBiometrics", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BDforCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforCObyServerModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforCObyServerModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforCObyServerModel: $.ASN1Decoder<BDforCObyServerModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforCObyServerModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforCObyServerModel (el: _Element): BDforCObyServerModel {
    if (!_cached_decoder_for_BDforCObyServerModel) { _cached_decoder_for_BDforCObyServerModel = function (el: _Element): BDforCObyServerModel {
    let sampleData!: SampleData;
    let digitalSignature!: SignedData;
    let aCforBiometrics: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "sampleData": (_el: _Element): void => { sampleData = _decode_SampleData(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBiometrics": (_el: _Element): void => { aCforBiometrics = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforCObyServerModel,
        _extension_additions_list_spec_for_BDforCObyServerModel,
        _root_component_type_list_2_spec_for_BDforCObyServerModel,
        undefined,
    );
    return new BDforCObyServerModel(
        sampleData,
        digitalSignature,
        aCforBiometrics
    );
}; }
    return _cached_decoder_for_BDforCObyServerModel(el);
}

let _cached_encoder_for_BDforCObyServerModel: $.ASN1Encoder<BDforCObyServerModel> | null = null;

/**
 * @summary Encodes a(n) BDforCObyServerModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforCObyServerModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforCObyServerModel (value: BDforCObyServerModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforCObyServerModel) { _cached_encoder_for_BDforCObyServerModel = function (value: BDforCObyServerModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBiometrics === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBiometrics, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforCObyServerModel(value, elGetter);
}


/* eslint-enable */
