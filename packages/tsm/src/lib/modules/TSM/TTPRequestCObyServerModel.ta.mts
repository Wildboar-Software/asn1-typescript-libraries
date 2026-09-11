/* eslint-disable */
import {
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
import { XtsmTemplate, _decode_XtsmTemplate, _encode_XtsmTemplate } from "../TSM/XtsmTemplate.ta.mjs";

import { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";



/**
 * @summary TTPRequestCObyServerModel
 * @description
 *
 * Verifier → TTP: template and sample BIR (Table 14). ITU-T Rec.
 * X.1084 (05/2008) §11.8, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTPRequestCObyServerModel ::= SEQUENCE {
 * templateData    XtsmTemplate,
 * sampleData        SampleData    --  BIR: BIoAPI defined format --
 * }
 * ```
 * 
 * @class
 */
export
class TTPRequestCObyServerModel {
    constructor (
        /**
         * @summary `templateData`.
         * @description
         *
         * Reference template as `XtsmTemplate` (X.1089 biometric
         * certificate). X.1084 §11.3, §11.5.
         *
         * @public
         * @readonly
         */
        readonly templateData: XtsmTemplate,
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
        readonly sampleData: SampleData
    ) {}

    /**
     * @summary Restructures an object into a TTPRequestCObyServerModel
     * @description
     * 
     * This takes an `object` and converts it to a `TTPRequestCObyServerModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTPRequestCObyServerModel`.
     * @returns {TTPRequestCObyServerModel}
     */
    public static _from_object (_o: { [_K in keyof (TTPRequestCObyServerModel)]: (TTPRequestCObyServerModel)[_K] }): TTPRequestCObyServerModel {
        return new TTPRequestCObyServerModel(_o.templateData, _o.sampleData);
    }


}

/**
 * @summary The Leading Root Component Types of TTPRequestCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTPRequestCObyServerModel: $.ComponentSpec[] = [
    new $.ComponentSpec("templateData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TTPRequestCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTPRequestCObyServerModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTPRequestCObyServerModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTPRequestCObyServerModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTPRequestCObyServerModel: $.ASN1Decoder<TTPRequestCObyServerModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTPRequestCObyServerModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTPRequestCObyServerModel (el: _Element): TTPRequestCObyServerModel {
    if (!_cached_decoder_for_TTPRequestCObyServerModel) { _cached_decoder_for_TTPRequestCObyServerModel = function (el: _Element): TTPRequestCObyServerModel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TTPRequestCObyServerModel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "templateData";
    sequence[1].name = "sampleData";
    let templateData!: XtsmTemplate;
    let sampleData!: SampleData;
    templateData = _decode_XtsmTemplate(sequence[0]);
    sampleData = _decode_SampleData(sequence[1]);
    return new TTPRequestCObyServerModel(
        templateData,
        sampleData,

    );
}; }
    return _cached_decoder_for_TTPRequestCObyServerModel(el);
}

let _cached_encoder_for_TTPRequestCObyServerModel: $.ASN1Encoder<TTPRequestCObyServerModel> | null = null;

/**
 * @summary Encodes a(n) TTPRequestCObyServerModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTPRequestCObyServerModel, encoded as an ASN.1 Element.
 */
export
function _encode_TTPRequestCObyServerModel (value: TTPRequestCObyServerModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTPRequestCObyServerModel) { _cached_encoder_for_TTPRequestCObyServerModel = function (value: TTPRequestCObyServerModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_XtsmTemplate(value.templateData, $.BER),
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TTPRequestCObyServerModel(value, elGetter);
}


/* eslint-enable */
