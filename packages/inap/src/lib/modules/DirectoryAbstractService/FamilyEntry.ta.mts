/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
// export { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
import { FamilyEntry_information_Item, _decode_FamilyEntry_information_Item, _encode_FamilyEntry_information_Item } from "../DirectoryAbstractService/FamilyEntry-information-Item.ta.mjs";
// export { FamilyEntry_information_Item, _decode_FamilyEntry_information_Item, _encode_FamilyEntry_information_Item } from "../DirectoryAbstractService/FamilyEntry-information-Item.ta.mjs";
import { FamilyEntries, _decode_FamilyEntries, _encode_FamilyEntries } from "../DirectoryAbstractService/FamilyEntries.ta.mjs";
// export { FamilyEntries, _decode_FamilyEntries, _encode_FamilyEntries } from "../DirectoryAbstractService/FamilyEntries.ta.mjs";


/**
 * @summary FamilyEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyEntry ::= SEQUENCE {
 *   rdn          RelativeDistinguishedName,
 *   information
 *     SEQUENCE OF CHOICE {attributeType  AttributeType,
 *                         attribute      Attribute},
 *   family-info  SEQUENCE SIZE (1..MAX) OF FamilyEntries OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FamilyEntry {
    /**
     * @summary `rdn`.
     * @public
     * @readonly
     */
    readonly rdn: RelativeDistinguishedName;
    /**
     * @summary `information`.
     * @public
     * @readonly
     */
    readonly information: FamilyEntry_information_Item[];
    /**
     * @summary `family_info`.
     * @public
     * @readonly
     */
    readonly family_info: OPTIONAL<FamilyEntries[]>;

    constructor (
        rdn: RelativeDistinguishedName,
        information: FamilyEntry_information_Item[],
        family_info: OPTIONAL<FamilyEntries[]>
    ) {
        this.rdn = rdn;
        this.information = information;
        this.family_info = family_info;
    }

    /**
     * @summary Restructures an object into a FamilyEntry
     * @description
     * 
     * This takes an `object` and converts it to a `FamilyEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FamilyEntry`.
     * @returns {FamilyEntry}
     */
    public static _from_object (_o: { [_K in keyof (FamilyEntry)]: (FamilyEntry)[_K] }): FamilyEntry {
        return new FamilyEntry(_o.rdn, _o.information, _o.family_info);
    }


}

/**
 * @summary The Leading Root Component Types of FamilyEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FamilyEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("rdn", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("information", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("family-info", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of FamilyEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FamilyEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FamilyEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FamilyEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FamilyEntry: $.ASN1Decoder<FamilyEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FamilyEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FamilyEntry (el: _Element): FamilyEntry {
    if (!_cached_decoder_for_FamilyEntry) { _cached_decoder_for_FamilyEntry = function (el: _Element): FamilyEntry {
    let rdn!: RelativeDistinguishedName;
    let information!: FamilyEntry_information_Item[];
    let family_info: OPTIONAL<FamilyEntries[]>;
    const callbacks: $.DecodingMap = {
        "rdn": (_el: _Element): void => { rdn = _decode_RelativeDistinguishedName(_el); },
        "information": (_el: _Element): void => { information = $._decodeSequenceOf<FamilyEntry_information_Item>(() => _decode_FamilyEntry_information_Item)(_el); },
        "family-info": (_el: _Element): void => { family_info = $._decodeSequenceOf<FamilyEntries>(() => _decode_FamilyEntries)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FamilyEntry,
        _extension_additions_list_spec_for_FamilyEntry,
        _root_component_type_list_2_spec_for_FamilyEntry,
        undefined,
    );
    return new FamilyEntry(
        rdn,
        information,
        family_info
    );
}; }
    return _cached_decoder_for_FamilyEntry(el);
}

let _cached_encoder_for_FamilyEntry: $.ASN1Encoder<FamilyEntry> | null = null;

/**
 * @summary Encodes a(n) FamilyEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyEntry, encoded as an ASN.1 Element.
 */
export
function _encode_FamilyEntry (value: FamilyEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FamilyEntry) { _cached_encoder_for_FamilyEntry = function (value: FamilyEntry, elGetter: $.ASN1Encoder<FamilyEntry>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_RelativeDistinguishedName(value.rdn, $.BER));
    _components.push(/* REQUIRED   */ $._encodeSequenceOf<FamilyEntry_information_Item>(() => _encode_FamilyEntry_information_Item, $.BER)(value.information, $.BER));
    if (value.family_info !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSequenceOf<FamilyEntries>(() => _encode_FamilyEntries, $.BER)(value.family_info, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FamilyEntry(value, elGetter);
}


/* eslint-enable */
