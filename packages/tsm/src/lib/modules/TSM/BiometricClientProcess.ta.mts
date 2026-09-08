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
import { BSP_BFP_Schemas, _decode_BSP_BFP_Schemas, _encode_BSP_BFP_Schemas } from "../TSM/BSP-BFP-Schemas.ta.mjs";
// export { BSP_BFP_Schemas, _decode_BSP_BFP_Schemas, _encode_BSP_BFP_Schemas } from "../TSM/BSP-BFP-Schemas.ta.mjs";
import { TemplateID, _decode_TemplateID, _encode_TemplateID } from "../TSM/TemplateID.ta.mjs";
// export { TemplateID, _decode_TemplateID, _encode_TemplateID } from "../TSM/TemplateID.ta.mjs";
import { Quality, _decode_Quality, _encode_Quality } from "../TSM/Quality.ta.mjs";
// export { Quality, _decode_Quality, _encode_Quality } from "../TSM/Quality.ta.mjs";
import { BioAPI_FMR, _decode_BioAPI_FMR, _encode_BioAPI_FMR } from "../BIP/BioAPI-FMR.ta.mjs";
// export { BioAPI_FMR, _decode_BioAPI_FMR, _encode_BioAPI_FMR } from "../BIP/BioAPI-FMR.ta.mjs";


/**
 * @summary BiometricClientProcess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricClientProcess ::= SEQUENCE {
 * bFPSchema        BSP-BFP-Schemas,
 * templateID        TemplateID,
 * sampleQuality    Quality,
 * score            BioAPI-FMR
 * }
 * ```
 * 
 * @class
 */
export
class BiometricClientProcess {
    constructor (
        /**
         * @summary `bFPSchema`.
         * @public
         * @readonly
         */
        readonly bFPSchema: BSP_BFP_Schemas,
        /**
         * @summary `templateID`.
         * @public
         * @readonly
         */
        readonly templateID: TemplateID,
        /**
         * @summary `sampleQuality`.
         * @public
         * @readonly
         */
        readonly sampleQuality: Quality,
        /**
         * @summary `score`.
         * @public
         * @readonly
         */
        readonly score: BioAPI_FMR
    ) {}

    /**
     * @summary Restructures an object into a BiometricClientProcess
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricClientProcess`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricClientProcess`.
     * @returns {BiometricClientProcess}
     */
    public static _from_object (_o: { [_K in keyof (BiometricClientProcess)]: (BiometricClientProcess)[_K] }): BiometricClientProcess {
        return new BiometricClientProcess(_o.bFPSchema, _o.templateID, _o.sampleQuality, _o.score);
    }


}

/**
 * @summary The Leading Root Component Types of BiometricClientProcess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricClientProcess: $.ComponentSpec[] = [
    new $.ComponentSpec("bFPSchema", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("templateID", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("sampleQuality", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("score", false, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BiometricClientProcess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricClientProcess: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricClientProcess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricClientProcess: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricClientProcess: $.ASN1Decoder<BiometricClientProcess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricClientProcess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricClientProcess (el: _Element): BiometricClientProcess {
    if (!_cached_decoder_for_BiometricClientProcess) { _cached_decoder_for_BiometricClientProcess = function (el: _Element): BiometricClientProcess {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("BiometricClientProcess contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bFPSchema";
    sequence[1].name = "templateID";
    sequence[2].name = "sampleQuality";
    sequence[3].name = "score";
    let bFPSchema!: BSP_BFP_Schemas;
    let templateID!: TemplateID;
    let sampleQuality!: Quality;
    let score!: BioAPI_FMR;
    bFPSchema = _decode_BSP_BFP_Schemas(sequence[0]);
    templateID = _decode_TemplateID(sequence[1]);
    sampleQuality = _decode_Quality(sequence[2]);
    score = _decode_BioAPI_FMR(sequence[3]);
    return new BiometricClientProcess(
        bFPSchema,
        templateID,
        sampleQuality,
        score,

    );
}; }
    return _cached_decoder_for_BiometricClientProcess(el);
}

let _cached_encoder_for_BiometricClientProcess: $.ASN1Encoder<BiometricClientProcess> | null = null;

/**
 * @summary Encodes a(n) BiometricClientProcess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricClientProcess, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricClientProcess (value: BiometricClientProcess, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricClientProcess) { _cached_encoder_for_BiometricClientProcess = function (value: BiometricClientProcess, elGetter: $.ASN1Encoder<BiometricClientProcess>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BSP_BFP_Schemas(value.bFPSchema, $.BER),
            /* REQUIRED   */ _encode_TemplateID(value.templateID, $.BER),
            /* REQUIRED   */ _encode_Quality(value.sampleQuality, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.score, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricClientProcess(value, elGetter);
}


/* eslint-enable */
