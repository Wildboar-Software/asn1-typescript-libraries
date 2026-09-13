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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ModifyRights_Item_item, _decode_ModifyRights_Item_item, _encode_ModifyRights_Item_item } from "../DirectoryAbstractService/ModifyRights-Item-item.ta.mjs";
// export { ModifyRights_Item_item, _decode_ModifyRights_Item_item, _encode_ModifyRights_Item_item } from "../DirectoryAbstractService/ModifyRights-Item-item.ta.mjs";
import { ModifyRights_Item_permission, ModifyRights_Item_permission_add /* IMPORTED_LONG_NAMED_BIT */, add /* IMPORTED_SHORT_NAMED_BIT */, ModifyRights_Item_permission_remove /* IMPORTED_LONG_NAMED_BIT */, remove /* IMPORTED_SHORT_NAMED_BIT */, ModifyRights_Item_permission_rename /* IMPORTED_LONG_NAMED_BIT */, rename /* IMPORTED_SHORT_NAMED_BIT */, ModifyRights_Item_permission_move /* IMPORTED_LONG_NAMED_BIT */, move /* IMPORTED_SHORT_NAMED_BIT */, _decode_ModifyRights_Item_permission, _encode_ModifyRights_Item_permission } from "../DirectoryAbstractService/ModifyRights-Item-permission.ta.mjs";
// export { ModifyRights_Item_permission, ModifyRights_Item_permission_add /* IMPORTED_LONG_NAMED_BIT */, add /* IMPORTED_SHORT_NAMED_BIT */, ModifyRights_Item_permission_remove /* IMPORTED_LONG_NAMED_BIT */, remove /* IMPORTED_SHORT_NAMED_BIT */, ModifyRights_Item_permission_rename /* IMPORTED_LONG_NAMED_BIT */, rename /* IMPORTED_SHORT_NAMED_BIT */, ModifyRights_Item_permission_move /* IMPORTED_LONG_NAMED_BIT */, move /* IMPORTED_SHORT_NAMED_BIT */, _decode_ModifyRights_Item_permission, _encode_ModifyRights_Item_permission } from "../DirectoryAbstractService/ModifyRights-Item-permission.ta.mjs";


/**
 * @summary ModifyRights_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyRights-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ModifyRights_Item {
    constructor (
        /**
         * @summary `item`.
         * @public
         * @readonly
         */
        readonly item: ModifyRights_Item_item,
        /**
         * @summary `permission`.
         * @public
         * @readonly
         */
        readonly permission: ModifyRights_Item_permission,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyRights_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ModifyRights_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyRights_Item`.
     * @returns {ModifyRights_Item}
     */
    public static _from_object (_o: { [_K in keyof (ModifyRights_Item)]: (ModifyRights_Item)[_K] }): ModifyRights_Item {
        return new ModifyRights_Item(_o.item, _o.permission, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ModifyRights_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModifyRights_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("item", false, $.hasAnyTag),
    new $.ComponentSpec("permission", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ModifyRights_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModifyRights_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModifyRights_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModifyRights_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModifyRights_Item: $.ASN1Decoder<ModifyRights_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRights_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyRights_Item (el: _Element): ModifyRights_Item {
    if (!_cached_decoder_for_ModifyRights_Item) { _cached_decoder_for_ModifyRights_Item = function (el: _Element): ModifyRights_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ModifyRights-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "item";
    sequence[1].name = "permission";
    let item!: ModifyRights_Item_item;
    let permission!: ModifyRights_Item_permission;
    item = _decode_ModifyRights_Item_item(sequence[0]);
    permission = $._decode_explicit<ModifyRights_Item_permission>(() => _decode_ModifyRights_Item_permission)(sequence[1]);
    return new ModifyRights_Item(
        item,
        permission,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ModifyRights_Item(el);
}

let _cached_encoder_for_ModifyRights_Item: $.ASN1Encoder<ModifyRights_Item> | null = null;

/**
 * @summary Encodes a(n) ModifyRights_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRights_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyRights_Item (value: ModifyRights_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyRights_Item) { _cached_encoder_for_ModifyRights_Item = function (value: ModifyRights_Item, elGetter: $.ASN1Encoder<ModifyRights_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ModifyRights_Item_item(value.item, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_ModifyRights_Item_permission, $.BER)(value.permission, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModifyRights_Item(value, elGetter);
}


/* eslint-enable */
