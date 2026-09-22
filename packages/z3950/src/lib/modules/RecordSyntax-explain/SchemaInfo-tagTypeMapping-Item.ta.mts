/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SchemaInfo_tagTypeMapping_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchemaInfo-tagTypeMapping-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SchemaInfo_tagTypeMapping_Item {
    constructor (
        /**
         * @summary `tagType`.
         * @public
         * @readonly
         */
        readonly tagType: INTEGER,
        /**
         * @summary `tagSet`.
         * @public
         * @readonly
         */
        readonly tagSet: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `defaultTagType`.
         * @public
         * @readonly
         */
        readonly defaultTagType: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a SchemaInfo_tagTypeMapping_Item
     * @description
     * 
     * This takes an `object` and converts it to a `SchemaInfo_tagTypeMapping_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchemaInfo_tagTypeMapping_Item`.
     * @returns {SchemaInfo_tagTypeMapping_Item}
     */
    public static _from_object (_o: { [_K in keyof (SchemaInfo_tagTypeMapping_Item)]: (SchemaInfo_tagTypeMapping_Item)[_K] }): SchemaInfo_tagTypeMapping_Item {
        return new SchemaInfo_tagTypeMapping_Item(_o.tagType, _o.tagSet, _o.defaultTagType);
    }


}

/**
 * @summary The Leading Root Component Types of SchemaInfo_tagTypeMapping_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SchemaInfo_tagTypeMapping_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("tagType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tagSet", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("defaultTagType", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SchemaInfo_tagTypeMapping_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SchemaInfo_tagTypeMapping_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SchemaInfo_tagTypeMapping_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SchemaInfo_tagTypeMapping_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SchemaInfo_tagTypeMapping_Item: $.ASN1Decoder<SchemaInfo_tagTypeMapping_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchemaInfo_tagTypeMapping_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SchemaInfo_tagTypeMapping_Item (el: _Element): SchemaInfo_tagTypeMapping_Item {
    if (!_cached_decoder_for_SchemaInfo_tagTypeMapping_Item) { _cached_decoder_for_SchemaInfo_tagTypeMapping_Item = function (el: _Element): SchemaInfo_tagTypeMapping_Item {
    let tagType!: INTEGER;
    let tagSet: OPTIONAL<OBJECT_IDENTIFIER>;
    let defaultTagType: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "tagType": (_el: _Element): void => { tagType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "tagSet": (_el: _Element): void => { tagSet = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "defaultTagType": (_el: _Element): void => { defaultTagType = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SchemaInfo_tagTypeMapping_Item,
        _extension_additions_list_spec_for_SchemaInfo_tagTypeMapping_Item,
        _root_component_type_list_2_spec_for_SchemaInfo_tagTypeMapping_Item,
        undefined,
    );
    return new SchemaInfo_tagTypeMapping_Item(
        tagType,
        tagSet,
        defaultTagType
    );
}; }
    return _cached_decoder_for_SchemaInfo_tagTypeMapping_Item(el);
}

let _cached_encoder_for_SchemaInfo_tagTypeMapping_Item: $.ASN1Encoder<SchemaInfo_tagTypeMapping_Item> | null = null;

/**
 * @summary Encodes a(n) SchemaInfo_tagTypeMapping_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemaInfo_tagTypeMapping_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SchemaInfo_tagTypeMapping_Item (value: SchemaInfo_tagTypeMapping_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SchemaInfo_tagTypeMapping_Item) { _cached_encoder_for_SchemaInfo_tagTypeMapping_Item = function (value: SchemaInfo_tagTypeMapping_Item, elGetter: $.ASN1Encoder<SchemaInfo_tagTypeMapping_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.tagType, $.BER),
            /* IF_ABSENT  */ ((value.tagSet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.tagSet, $.BER)),
            /* IF_ABSENT  */ ((value.defaultTagType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.defaultTagType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SchemaInfo_tagTypeMapping_Item(value, elGetter);
}


/* eslint-enable */
