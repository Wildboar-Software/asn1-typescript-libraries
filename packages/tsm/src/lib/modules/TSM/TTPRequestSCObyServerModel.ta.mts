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
import { TemplateID, _decode_TemplateID, _encode_TemplateID } from "../TSM/TemplateID.ta.mjs";
// export { TemplateID, _decode_TemplateID, _encode_TemplateID } from "../TSM/TemplateID.ta.mjs";
import { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";
// export { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";


/**
 * @summary TTPRequestSCObyServerModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTPRequestSCObyServerModel ::= SEQUENCE {
 * templateID        TemplateID,
 * sampleData        SampleData    -- BIR: BioAPI defined format --
 * }
 * ```
 * 
 * @class
 */
export
class TTPRequestSCObyServerModel {
    constructor (
        /**
         * @summary `templateID`.
         * @public
         * @readonly
         */
        readonly templateID: TemplateID,
        /**
         * @summary `sampleData`.
         * @public
         * @readonly
         */
        readonly sampleData: SampleData
    ) {}

    /**
     * @summary Restructures an object into a TTPRequestSCObyServerModel
     * @description
     * 
     * This takes an `object` and converts it to a `TTPRequestSCObyServerModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTPRequestSCObyServerModel`.
     * @returns {TTPRequestSCObyServerModel}
     */
    public static _from_object (_o: { [_K in keyof (TTPRequestSCObyServerModel)]: (TTPRequestSCObyServerModel)[_K] }): TTPRequestSCObyServerModel {
        return new TTPRequestSCObyServerModel(_o.templateID, _o.sampleData);
    }


}

/**
 * @summary The Leading Root Component Types of TTPRequestSCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTPRequestSCObyServerModel: $.ComponentSpec[] = [
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TTPRequestSCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTPRequestSCObyServerModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTPRequestSCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTPRequestSCObyServerModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTPRequestSCObyServerModel: $.ASN1Decoder<TTPRequestSCObyServerModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTPRequestSCObyServerModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTPRequestSCObyServerModel (el: _Element): TTPRequestSCObyServerModel {
    if (!_cached_decoder_for_TTPRequestSCObyServerModel) { _cached_decoder_for_TTPRequestSCObyServerModel = function (el: _Element): TTPRequestSCObyServerModel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TTPRequestSCObyServerModel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "templateID";
    sequence[1].name = "sampleData";
    let templateID!: TemplateID;
    let sampleData!: SampleData;
    templateID = _decode_TemplateID(sequence[0]);
    sampleData = _decode_SampleData(sequence[1]);
    return new TTPRequestSCObyServerModel(
        templateID,
        sampleData,

    );
}; }
    return _cached_decoder_for_TTPRequestSCObyServerModel(el);
}

let _cached_encoder_for_TTPRequestSCObyServerModel: $.ASN1Encoder<TTPRequestSCObyServerModel> | null = null;

/**
 * @summary Encodes a(n) TTPRequestSCObyServerModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTPRequestSCObyServerModel, encoded as an ASN.1 Element.
 */
export
function _encode_TTPRequestSCObyServerModel (value: TTPRequestSCObyServerModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTPRequestSCObyServerModel) { _cached_encoder_for_TTPRequestSCObyServerModel = function (value: TTPRequestSCObyServerModel, elGetter: $.ASN1Encoder<TTPRequestSCObyServerModel>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TemplateID(value.templateID, $.BER),
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TTPRequestSCObyServerModel(value, elGetter);
}


/* eslint-enable */
