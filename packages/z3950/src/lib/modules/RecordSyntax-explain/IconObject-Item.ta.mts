/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IconObject_Item_bodyType, _decode_IconObject_Item_bodyType, _encode_IconObject_Item_bodyType } from "../RecordSyntax-explain/IconObject-Item-bodyType.ta.mjs";
// export { IconObject_Item_bodyType, _decode_IconObject_Item_bodyType, _encode_IconObject_Item_bodyType } from "../RecordSyntax-explain/IconObject-Item-bodyType.ta.mjs";


/**
 * @summary IconObject_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IconObject-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class IconObject_Item {
    constructor (
        /**
         * @summary `bodyType`.
         * @public
         * @readonly
         */
        readonly bodyType: IconObject_Item_bodyType,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a IconObject_Item
     * @description
     * 
     * This takes an `object` and converts it to a `IconObject_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IconObject_Item`.
     * @returns {IconObject_Item}
     */
    public static _from_object (_o: { [_K in keyof (IconObject_Item)]: (IconObject_Item)[_K] }): IconObject_Item {
        return new IconObject_Item(_o.bodyType, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of IconObject_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IconObject_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("bodyType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IconObject_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IconObject_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IconObject_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IconObject_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IconObject_Item: $.ASN1Decoder<IconObject_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IconObject_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IconObject_Item (el: _Element): IconObject_Item {
    if (!_cached_decoder_for_IconObject_Item) { _cached_decoder_for_IconObject_Item = function (el: _Element): IconObject_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IconObject-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bodyType";
    sequence[1].name = "content";
    let bodyType!: IconObject_Item_bodyType;
    let content!: OCTET_STRING;
    bodyType = $._decode_explicit<IconObject_Item_bodyType>(() => _decode_IconObject_Item_bodyType)(sequence[0]);
    content = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new IconObject_Item(
        bodyType,
        content,

    );
}; }
    return _cached_decoder_for_IconObject_Item(el);
}

let _cached_encoder_for_IconObject_Item: $.ASN1Encoder<IconObject_Item> | null = null;

/**
 * @summary Encodes a(n) IconObject_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IconObject_Item, encoded as an ASN.1 Element.
 */
export
function _encode_IconObject_Item (value: IconObject_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IconObject_Item) { _cached_encoder_for_IconObject_Item = function (value: IconObject_Item, elGetter: $.ASN1Encoder<IconObject_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IconObject_Item_bodyType, $.BER)(value.bodyType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IconObject_Item(value, elGetter);
}


/* eslint-enable */
