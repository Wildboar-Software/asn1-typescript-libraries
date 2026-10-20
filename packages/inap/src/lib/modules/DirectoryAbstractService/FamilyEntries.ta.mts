/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { FamilyEntry, _decode_FamilyEntry, _encode_FamilyEntry } from "../DirectoryAbstractService/FamilyEntry.ta.mjs";
// export { FamilyEntry, _decode_FamilyEntry, _encode_FamilyEntry } from "../DirectoryAbstractService/FamilyEntry.ta.mjs";


/**
 * @summary FamilyEntries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyEntries ::= SEQUENCE {
 *   family-class   OBJECT-CLASS.&id, -- structural object class value
 *   familyEntries  SEQUENCE OF FamilyEntry
 * }
 * ```
 * 
 * @class
 */
export
class FamilyEntries {
    /**
     * @summary `family_class`.
     * @public
     * @readonly
     */
    readonly family_class: OBJECT_IDENTIFIER;
    /**
     * @summary `familyEntries`.
     * @public
     * @readonly
     */
    readonly familyEntries: FamilyEntry[];

    constructor (
        family_class: OBJECT_IDENTIFIER,
        familyEntries: FamilyEntry[]
    ) {
        this.family_class = family_class;
        this.familyEntries = familyEntries;
    }

    /**
     * @summary Restructures an object into a FamilyEntries
     * @description
     * 
     * This takes an `object` and converts it to a `FamilyEntries`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FamilyEntries`.
     * @returns {FamilyEntries}
     */
    public static _from_object (_o: { [_K in keyof (FamilyEntries)]: (FamilyEntries)[_K] }): FamilyEntries {
        return new FamilyEntries(_o.family_class, _o.familyEntries);
    }


}

/**
 * @summary The Leading Root Component Types of FamilyEntries
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FamilyEntries: $.ComponentSpec[] = [
    new $.ComponentSpec("family-class", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("familyEntries", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of FamilyEntries
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FamilyEntries: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FamilyEntries
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FamilyEntries: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FamilyEntries: $.ASN1Decoder<FamilyEntries> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FamilyEntries
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FamilyEntries (el: _Element): FamilyEntries {
    if (!_cached_decoder_for_FamilyEntries) { _cached_decoder_for_FamilyEntries = function (el: _Element): FamilyEntries {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FamilyEntries contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "family-class";
    sequence[1].name = "familyEntries";
    let family_class!: OBJECT_IDENTIFIER;
    let familyEntries!: FamilyEntry[];
    family_class = $._decodeObjectIdentifier(sequence[0]);
    familyEntries = $._decodeSequenceOf<FamilyEntry>(() => _decode_FamilyEntry)(sequence[1]);
    return new FamilyEntries(
        family_class,
        familyEntries,

    );
}; }
    return _cached_decoder_for_FamilyEntries(el);
}

let _cached_encoder_for_FamilyEntries: $.ASN1Encoder<FamilyEntries> | null = null;

/**
 * @summary Encodes a(n) FamilyEntries into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyEntries, encoded as an ASN.1 Element.
 */
export
function _encode_FamilyEntries (value: FamilyEntries, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FamilyEntries) { _cached_encoder_for_FamilyEntries = function (value: FamilyEntries, elGetter: $.ASN1Encoder<FamilyEntries>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeObjectIdentifier(value.family_class, $.BER),
        /* REQUIRED   */ $._encodeSequenceOf<FamilyEntry>(() => _encode_FamilyEntry, $.BER)(value.familyEntries, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FamilyEntries(value, elGetter);
}


/* eslint-enable */
