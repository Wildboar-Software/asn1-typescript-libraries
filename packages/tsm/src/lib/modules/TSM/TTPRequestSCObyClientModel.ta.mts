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
import { SampleData, _decode_SampleData, _encode_SampleData } from "../TSM/SampleData.ta.mjs";



/**
 * @summary TTPRequestSCObyClientModel
 * @description
 *
 * Client → TTP: sample BIR only; TTP already holds the template
 * (Table 16). ITU-T Rec. X.1084 (05/2008) §11.9.1, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTPRequestSCObyClientModel ::= SEQUENCE {
 * sampleData        SampleData -- BIR: BioAPI defined format --
 * }
 * ```
 * 
 * @class
 */
export
class TTPRequestSCObyClientModel {
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
        readonly sampleData: SampleData
    ) {}

    /**
     * @summary Restructures an object into a TTPRequestSCObyClientModel
     * @description
     * 
     * This takes an `object` and converts it to a `TTPRequestSCObyClientModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTPRequestSCObyClientModel`.
     * @returns {TTPRequestSCObyClientModel}
     */
    public static _from_object (_o: { [_K in keyof (TTPRequestSCObyClientModel)]: (TTPRequestSCObyClientModel)[_K] }): TTPRequestSCObyClientModel {
        return new TTPRequestSCObyClientModel(_o.sampleData);
    }


}

/**
 * @summary The Leading Root Component Types of TTPRequestSCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTPRequestSCObyClientModel: $.ComponentSpec[] = [
    new $.ComponentSpec("sampleData", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of TTPRequestSCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTPRequestSCObyClientModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTPRequestSCObyClientModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTPRequestSCObyClientModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTPRequestSCObyClientModel: $.ASN1Decoder<TTPRequestSCObyClientModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTPRequestSCObyClientModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTPRequestSCObyClientModel (el: _Element): TTPRequestSCObyClientModel {
    if (!_cached_decoder_for_TTPRequestSCObyClientModel) { _cached_decoder_for_TTPRequestSCObyClientModel = function (el: _Element): TTPRequestSCObyClientModel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("TTPRequestSCObyClientModel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sampleData";
    let sampleData!: SampleData;
    sampleData = _decode_SampleData(sequence[0]);
    return new TTPRequestSCObyClientModel(
        sampleData,

    );
}; }
    return _cached_decoder_for_TTPRequestSCObyClientModel(el);
}

let _cached_encoder_for_TTPRequestSCObyClientModel: $.ASN1Encoder<TTPRequestSCObyClientModel> | null = null;

/**
 * @summary Encodes a(n) TTPRequestSCObyClientModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTPRequestSCObyClientModel, encoded as an ASN.1 Element.
 */
export
function _encode_TTPRequestSCObyClientModel (value: TTPRequestSCObyClientModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTPRequestSCObyClientModel) { _cached_encoder_for_TTPRequestSCObyClientModel = function (value: TTPRequestSCObyClientModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SampleData(value.sampleData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TTPRequestSCObyClientModel(value, elGetter);
}


/* eslint-enable */
