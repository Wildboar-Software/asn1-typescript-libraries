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
 * @summary Journal_Entry_instance_journalVariables_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Journal-Entry-instance-journalVariables-Item ::= SEQUENCE {
 *     variableTag [11] MMS255String,
 *     valueSpecification [12] Data
 * }
 * ```
 * 
 * @class
 */
export
class Journal_Entry_instance_journalVariables_Item {
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
     * @summary Restructures an object into a Journal_Entry_instance_journalVariables_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Journal_Entry_instance_journalVariables_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Journal_Entry_instance_journalVariables_Item`.
     * @returns {Journal_Entry_instance_journalVariables_Item}
     */
    public static _from_object (_o: { [_K in keyof (Journal_Entry_instance_journalVariables_Item)]: (Journal_Entry_instance_journalVariables_Item)[_K] }): Journal_Entry_instance_journalVariables_Item {
        return new Journal_Entry_instance_journalVariables_Item(_o.variableTag, _o.valueSpecification);
    }


}

/**
 * @summary The Leading Root Component Types of Journal_Entry_instance_journalVariables_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Journal_Entry_instance_journalVariables_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("variableTag", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("valueSpecification", false, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of Journal_Entry_instance_journalVariables_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Journal_Entry_instance_journalVariables_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Journal_Entry_instance_journalVariables_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Journal_Entry_instance_journalVariables_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Journal_Entry_instance_journalVariables_Item: $.ASN1Decoder<Journal_Entry_instance_journalVariables_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Journal_Entry_instance_journalVariables_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Journal_Entry_instance_journalVariables_Item (el: _Element): Journal_Entry_instance_journalVariables_Item {
    if (!_cached_decoder_for_Journal_Entry_instance_journalVariables_Item) { _cached_decoder_for_Journal_Entry_instance_journalVariables_Item = function (el: _Element): Journal_Entry_instance_journalVariables_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Journal-Entry-instance-journalVariables-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "variableTag";
    sequence[1].name = "valueSpecification";
    let variableTag!: MMS255String;
    let valueSpecification!: Data;
    variableTag = $._decode_explicit<MMS255String>(() => _decode_MMS255String)(sequence[0]);
    valueSpecification = $._decode_explicit<Data>(() => _decode_Data)(sequence[1]);
    return new Journal_Entry_instance_journalVariables_Item(
        variableTag,
        valueSpecification,

    );
}; }
    return _cached_decoder_for_Journal_Entry_instance_journalVariables_Item(el);
}

let _cached_encoder_for_Journal_Entry_instance_journalVariables_Item: $.ASN1Encoder<Journal_Entry_instance_journalVariables_Item> | null = null;

/**
 * @summary Encodes a(n) Journal_Entry_instance_journalVariables_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Journal_Entry_instance_journalVariables_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Journal_Entry_instance_journalVariables_Item (value: Journal_Entry_instance_journalVariables_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Journal_Entry_instance_journalVariables_Item) { _cached_encoder_for_Journal_Entry_instance_journalVariables_Item = function (value: Journal_Entry_instance_journalVariables_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 11, () => _encode_MMS255String, $.BER)(value.variableTag, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 12, () => _encode_Data, $.BER)(value.valueSpecification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Journal_Entry_instance_journalVariables_Item(value, elGetter);
}


/* eslint-enable */
