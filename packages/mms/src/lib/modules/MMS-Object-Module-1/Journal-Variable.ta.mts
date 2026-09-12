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
import { MMS255String, _decode_MMS255String, _encode_MMS255String } from "../ISO-9506-MMS-1/MMS255String.ta.mjs";
// export { MMS255String, _decode_MMS255String, _encode_MMS255String } from "../ISO-9506-MMS-1/MMS255String.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";


/**
 * @summary Journal_Variable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Journal-Variable ::= SEQUENCE {
 *     variableTag            MMS255String,
 *     valueSpecification     Data
 * }
 * ```
 * 
 * @class
 */
export
class Journal_Variable {
    constructor (
        /**
         * @summary `variableTag`.
         * @public
         * @readonly
         */
        readonly variableTag: MMS255String,
        /**
         * @summary `valueSpecification`.
         * @public
         * @readonly
         */
        readonly valueSpecification: Data
    ) {}

    /**
     * @summary Restructures an object into a Journal_Variable
     * @description
     * 
     * This takes an `object` and converts it to a `Journal_Variable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Journal_Variable`.
     * @returns {Journal_Variable}
     */
    public static _from_object (_o: { [_K in keyof (Journal_Variable)]: (Journal_Variable)[_K] }): Journal_Variable {
        return new Journal_Variable(_o.variableTag, _o.valueSpecification);
    }


}

/**
 * @summary The Leading Root Component Types of Journal_Variable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Journal_Variable: $.ComponentSpec[] = [
    new $.ComponentSpec("variableTag", false, $.hasAnyTag),
    new $.ComponentSpec("valueSpecification", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Journal_Variable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Journal_Variable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Journal_Variable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Journal_Variable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Journal_Variable: $.ASN1Decoder<Journal_Variable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Journal_Variable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Journal_Variable (el: _Element): Journal_Variable {
    if (!_cached_decoder_for_Journal_Variable) { _cached_decoder_for_Journal_Variable = function (el: _Element): Journal_Variable {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Journal-Variable contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "variableTag";
    sequence[1].name = "valueSpecification";
    let variableTag!: MMS255String;
    let valueSpecification!: Data;
    variableTag = _decode_MMS255String(sequence[0]);
    valueSpecification = _decode_Data(sequence[1]);
    return new Journal_Variable(
        variableTag,
        valueSpecification,

    );
}; }
    return _cached_decoder_for_Journal_Variable(el);
}

let _cached_encoder_for_Journal_Variable: $.ASN1Encoder<Journal_Variable> | null = null;

/**
 * @summary Encodes a(n) Journal_Variable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Journal_Variable, encoded as an ASN.1 Element.
 */
export
function _encode_Journal_Variable (value: Journal_Variable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Journal_Variable) { _cached_encoder_for_Journal_Variable = function (value: Journal_Variable): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MMS255String(value.variableTag, $.BER),
            /* REQUIRED   */ _encode_Data(value.valueSpecification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Journal_Variable(value, elGetter);
}


/* eslint-enable */
