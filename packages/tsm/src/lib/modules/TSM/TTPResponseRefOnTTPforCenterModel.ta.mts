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
import { XtsmTemplate, _decode_XtsmTemplate, _encode_XtsmTemplate } from "../TSM/XtsmTemplate.ta.mjs";
// export { XtsmTemplate, _decode_XtsmTemplate, _encode_XtsmTemplate } from "../TSM/XtsmTemplate.ta.mjs";
import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";
// export { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";
import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";
// export { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";


/**
 * @summary TTPResponseRefOnTTPforCenterModel
 * @description
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
         * @public
         * @readonly
         */
        readonly templateData: XtsmTemplate,
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
    new $.ComponentSpec("templateData", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("aCforBioOnTTP", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
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
    if (!_cached_encoder_for_TTPResponseRefOnTTPforCenterModel) { _cached_encoder_for_TTPResponseRefOnTTPforCenterModel = function (value: TTPResponseRefOnTTPforCenterModel, elGetter: $.ASN1Encoder<TTPResponseRefOnTTPforCenterModel>): _Element {
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
