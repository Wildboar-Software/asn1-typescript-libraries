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
import { DfrEntryAttributes, _decode_DfrEntryAttributes, _encode_DfrEntryAttributes } from "../DFRAbstractService/DfrEntryAttributes.ta.mjs";
// export { DfrEntryAttributes, _decode_DfrEntryAttributes, _encode_DfrEntryAttributes } from "../DFRAbstractService/DfrEntryAttributes.ta.mjs";
import { DfrObjectContent, _decode_DfrObjectContent, _encode_DfrObjectContent } from "../DFRAbstractService/DfrObjectContent.ta.mjs";
// export { DfrObjectContent, _decode_DfrObjectContent, _encode_DfrObjectContent } from "../DFRAbstractService/DfrObjectContent.ta.mjs";


/**
 * @summary DfrEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrEntry ::= SEQUENCE {
 *     attributes  [0] DfrEntryAttributes,
 *     content     [1] DfrObjectContent
 * }
 * ```
 * 
 * @class
 */
export
class DfrEntry {
    constructor (
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: DfrEntryAttributes,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: DfrObjectContent
    ) {}

    /**
     * @summary Restructures an object into a DfrEntry
     * @description
     * 
     * This takes an `object` and converts it to a `DfrEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DfrEntry`.
     * @returns {DfrEntry}
     */
    public static _from_object (_o: { [_K in keyof (DfrEntry)]: (DfrEntry)[_K] }): DfrEntry {
        return new DfrEntry(_o.attributes, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of DfrEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DfrEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DfrEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DfrEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DfrEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DfrEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DfrEntry: $.ASN1Decoder<DfrEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrEntry (el: _Element): DfrEntry {
    if (!_cached_decoder_for_DfrEntry) { _cached_decoder_for_DfrEntry = function (el: _Element): DfrEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DfrEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributes";
    sequence[1].name = "content";
    let attributes!: DfrEntryAttributes;
    let content!: DfrObjectContent;
    attributes = $._decode_implicit<DfrEntryAttributes>(() => _decode_DfrEntryAttributes)(sequence[0]);
    content = $._decode_explicit<DfrObjectContent>(() => _decode_DfrObjectContent)(sequence[1]);
    return new DfrEntry(
        attributes,
        content,

    );
}; }
    return _cached_decoder_for_DfrEntry(el);
}

let _cached_encoder_for_DfrEntry: $.ASN1Encoder<DfrEntry> | null = null;

/**
 * @summary Encodes a(n) DfrEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrEntry, encoded as an ASN.1 Element.
 */
export
function _encode_DfrEntry (value: DfrEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrEntry) { _cached_encoder_for_DfrEntry = function (value: DfrEntry): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DfrEntryAttributes, $.BER)(value.attributes, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DfrObjectContent, $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DfrEntry(value, elGetter);
}


/* eslint-enable */
