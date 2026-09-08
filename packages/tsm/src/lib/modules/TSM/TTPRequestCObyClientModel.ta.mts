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
 * @summary TTPRequestCObyClientModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTPRequestCObyClientModel ::= SEQUENCE {
 * templateData    XtsmTemplate,
 * sampleData        SampleData    -- BIR: BioAPI defined format --
 * }
 * ```
 * 
 * @class
 */
export
class TTPRequestCObyClientModel {
    constructor (
        /**
         * @summary `templateData`.
         * @public
         * @readonly
         */
        readonly templateData: XtsmTemplate,
        /**
         * @summary `sampleData`.
         * @public
         * @readonly
         */
        readonly sampleData: SampleData
    ) {}

    /**
     * @summary Restructures an object into a TTPRequestCObyClientModel
     * @description
     * 
     * This takes an `object` and converts it to a `TTPRequestCObyClientModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTPRequestCObyClientModel`.
     * @returns {TTPRequestCObyClientModel}
     */
    public static _from_object (_o: { [_K in keyof (TTPRequestCObyClientModel)]: (TTPRequestCObyClientModel)[_K] }): TTPRequestCObyClientModel {
        return new TTPRequestCObyClientModel(_o.templateData, _o.sampleData);
    }


}

/**
 * @summary The Leading Root Component Types of TTPRequestCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTPRequestCObyClientModel: $.ComponentSpec[] = [
    new $.ComponentSpec("templateData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TTPRequestCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTPRequestCObyClientModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTPRequestCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTPRequestCObyClientModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTPRequestCObyClientModel: $.ASN1Decoder<TTPRequestCObyClientModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTPRequestCObyClientModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTPRequestCObyClientModel (el: _Element): TTPRequestCObyClientModel {
    if (!_cached_decoder_for_TTPRequestCObyClientModel) { _cached_decoder_for_TTPRequestCObyClientModel = function (el: _Element): TTPRequestCObyClientModel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TTPRequestCObyClientModel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "templateData";
    sequence[1].name = "sampleData";
    let templateData!: XtsmTemplate;
    let sampleData!: SampleData;
    templateData = _decode_XtsmTemplate(sequence[0]);
    sampleData = _decode_SampleData(sequence[1]);
    return new TTPRequestCObyClientModel(
        templateData,
        sampleData,

    );
}; }
    return _cached_decoder_for_TTPRequestCObyClientModel(el);
}

let _cached_encoder_for_TTPRequestCObyClientModel: $.ASN1Encoder<TTPRequestCObyClientModel> | null = null;

/**
 * @summary Encodes a(n) TTPRequestCObyClientModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTPRequestCObyClientModel, encoded as an ASN.1 Element.
 */
export
function _encode_TTPRequestCObyClientModel (value: TTPRequestCObyClientModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTPRequestCObyClientModel) { _cached_encoder_for_TTPRequestCObyClientModel = function (value: TTPRequestCObyClientModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_XtsmTemplate(value.templateData, $.BER),
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TTPRequestCObyClientModel(value, elGetter);
}


/* eslint-enable */
