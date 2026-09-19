/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Entry, _decode_Entry, _encode_Entry } from "../AIN-Parameters/Entry.ta.mjs";
// export { Entry, _decode_Entry, _encode_Entry } from "../AIN-Parameters/Entry.ta.mjs";
import { EditListType, _decode_EditListType, _encode_EditListType, _enum_for_EditListType } from "../AIN-Parameters/EditListType.ta.mjs";
// export { EditListType, _enum_for_EditListType, EditListType_addListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, addListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EditListType_deleteListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EditListType, _encode_EditListType } from "../AIN-Parameters/EditListType.ta.mjs";


/**
 * @summary EditSpecificEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EditSpecificEntry ::= SEQUENCE{
 *         entry           Entry,
 *         editListType    [105] IMPLICIT EditListType--see Section 6.66 for encoding
 *     }
 * ```
 * 
 * @class
 */
export
class EditSpecificEntry {
    constructor (
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: Entry,
        /**
         * @summary `editListType`.
         * @public
         * @readonly
         */
        readonly editListType: EditListType
    ) {}

    /**
     * @summary Restructures an object into a EditSpecificEntry
     * @description
     * 
     * This takes an `object` and converts it to a `EditSpecificEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EditSpecificEntry`.
     * @returns {EditSpecificEntry}
     */
    public static _from_object (_o: { [_K in keyof (EditSpecificEntry)]: (EditSpecificEntry)[_K] }): EditSpecificEntry {
        return new EditSpecificEntry(_o.entry, _o.editListType);
    }

        /**
         * @summary The enum used as the type of the component `editListType`
         * @public
         * @static
         */

    public static _enum_for_editListType = _enum_for_EditListType;
}

/**
 * @summary The Leading Root Component Types of EditSpecificEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EditSpecificEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasAnyTag),
    new $.ComponentSpec("editListType", false, $.hasTag(_TagClass.context, 105))
];

/**
 * @summary The Trailing Root Component Types of EditSpecificEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EditSpecificEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EditSpecificEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EditSpecificEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EditSpecificEntry: $.ASN1Decoder<EditSpecificEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EditSpecificEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EditSpecificEntry (el: _Element): EditSpecificEntry {
    if (!_cached_decoder_for_EditSpecificEntry) { _cached_decoder_for_EditSpecificEntry = function (el: _Element): EditSpecificEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EditSpecificEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entry";
    sequence[1].name = "editListType";
    let entry!: Entry;
    let editListType!: EditListType;
    entry = _decode_Entry(sequence[0]);
    editListType = $._decode_implicit<EditListType>(() => _decode_EditListType)(sequence[1]);
    return new EditSpecificEntry(
        entry,
        editListType,

    );
}; }
    return _cached_decoder_for_EditSpecificEntry(el);
}

let _cached_encoder_for_EditSpecificEntry: $.ASN1Encoder<EditSpecificEntry> | null = null;

/**
 * @summary Encodes a(n) EditSpecificEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EditSpecificEntry, encoded as an ASN.1 Element.
 */
export
function _encode_EditSpecificEntry (value: EditSpecificEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EditSpecificEntry) { _cached_encoder_for_EditSpecificEntry = function (value: EditSpecificEntry, elGetter: $.ASN1Encoder<EditSpecificEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Entry(value.entry, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 105, () => _encode_EditListType, $.BER)(value.editListType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EditSpecificEntry(value, elGetter);
}


/* eslint-enable */
