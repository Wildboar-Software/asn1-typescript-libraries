/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";
// export { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";
import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";
// export { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";
import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";
// export { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";


/**
 * @summary BDforRefOnTTPforCenterModel
 * @description
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
         * @public
         * @readonly
         */
        readonly thirdPartyInfo: UTF8String,
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
    new $.ComponentSpec("thirdPartyInfo", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
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
    if (!_cached_encoder_for_BDforRefOnTTPforCenterModel) { _cached_encoder_for_BDforRefOnTTPforCenterModel = function (value: BDforRefOnTTPforCenterModel, elGetter: $.ASN1Encoder<BDforRefOnTTPforCenterModel>): _Element {
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
