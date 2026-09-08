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
 * @summary BDforCenterModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforCenterModel ::= SEQUENCE {
 * sampleData    SampleData,        -- BIR: BioAPI defined format --
 * digitalSignature    SignedData,
 * aCforBioOnClient    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforCenterModel {
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
         * @summary `aCforBioOnClient`.
         * @public
         * @readonly
         */
        readonly aCforBioOnClient: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a BDforCenterModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforCenterModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforCenterModel`.
     * @returns {BDforCenterModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforCenterModel)]: (BDforCenterModel)[_K] }): BDforCenterModel {
        return new BDforCenterModel(_o.sampleData, _o.digitalSignature, _o.aCforBioOnClient);
    }


}

/**
 * @summary The Leading Root Component Types of BDforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforCenterModel: $.ComponentSpec[] = [
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BDforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforCenterModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforCenterModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforCenterModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforCenterModel: $.ASN1Decoder<BDforCenterModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforCenterModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforCenterModel (el: _Element): BDforCenterModel {
    if (!_cached_decoder_for_BDforCenterModel) { _cached_decoder_for_BDforCenterModel = function (el: _Element): BDforCenterModel {
    let sampleData!: SampleData;
    let digitalSignature!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "sampleData": (_el: _Element): void => { sampleData = _decode_SampleData(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforCenterModel,
        _extension_additions_list_spec_for_BDforCenterModel,
        _root_component_type_list_2_spec_for_BDforCenterModel,
        undefined,
    );
    return new BDforCenterModel(
        sampleData,
        digitalSignature,
        aCforBioOnClient
    );
}; }
    return _cached_decoder_for_BDforCenterModel(el);
}

let _cached_encoder_for_BDforCenterModel: $.ASN1Encoder<BDforCenterModel> | null = null;

/**
 * @summary Encodes a(n) BDforCenterModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforCenterModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforCenterModel (value: BDforCenterModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforCenterModel) { _cached_encoder_for_BDforCenterModel = function (value: BDforCenterModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforCenterModel(value, elGetter);
}


/* eslint-enable */
