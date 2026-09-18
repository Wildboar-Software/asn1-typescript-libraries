/* eslint-disable */
import {
    INTEGER,
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
import { COupdate_objectUpdate_multiElement_Item_update, _decode_COupdate_objectUpdate_multiElement_Item_update, _encode_COupdate_objectUpdate_multiElement_Item_update } from "../G/COupdate-objectUpdate-multiElement-Item-update.ta.mjs";
// export { COupdate_objectUpdate_multiElement_Item_update, _decode_COupdate_objectUpdate_multiElement_Item_update, _encode_COupdate_objectUpdate_multiElement_Item_update } from "../G/COupdate-objectUpdate-multiElement-Item-update.ta.mjs";


/**
 * @summary COupdate_objectUpdate_multiElement_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * COupdate-objectUpdate-multiElement-Item ::= SEQUENCE {
 *     identifier INTEGER,
 *     update CHOICE {
 *         characterUpdate [0] IMPLICIT OCTET STRING,
 *         booleanUpdate   [1] IMPLICIT SEQUENCE {
 *             values  [0] IMPLICIT BIT STRING,
 *             mask    [1] IMPLICIT BIT STRING OPTIONAL
 *         }, -- See note under mask in G.COUpdate
 *         symbolicUpdate  [2] IMPLICIT INTEGER,
 *         integerUpdate   [3] IMPLICIT INTEGER,
 *         bitStringUpdate [4] IMPLICIT BIT STRING
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class COupdate_objectUpdate_multiElement_Item {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: INTEGER,
        /**
         * @summary `update`.
         * @public
         * @readonly
         */
        readonly update: COupdate_objectUpdate_multiElement_Item_update
    ) {}

    /**
     * @summary Restructures an object into a COupdate_objectUpdate_multiElement_Item
     * @description
     * 
     * This takes an `object` and converts it to a `COupdate_objectUpdate_multiElement_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `COupdate_objectUpdate_multiElement_Item`.
     * @returns {COupdate_objectUpdate_multiElement_Item}
     */
    public static _from_object (_o: { [_K in keyof (COupdate_objectUpdate_multiElement_Item)]: (COupdate_objectUpdate_multiElement_Item)[_K] }): COupdate_objectUpdate_multiElement_Item {
        return new COupdate_objectUpdate_multiElement_Item(_o.identifier, _o.update);
    }


}

/**
 * @summary The Leading Root Component Types of COupdate_objectUpdate_multiElement_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_COupdate_objectUpdate_multiElement_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("update", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of COupdate_objectUpdate_multiElement_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_COupdate_objectUpdate_multiElement_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of COupdate_objectUpdate_multiElement_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_COupdate_objectUpdate_multiElement_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_COupdate_objectUpdate_multiElement_Item: $.ASN1Decoder<COupdate_objectUpdate_multiElement_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) COupdate_objectUpdate_multiElement_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_COupdate_objectUpdate_multiElement_Item (el: _Element): COupdate_objectUpdate_multiElement_Item {
    if (!_cached_decoder_for_COupdate_objectUpdate_multiElement_Item) { _cached_decoder_for_COupdate_objectUpdate_multiElement_Item = function (el: _Element): COupdate_objectUpdate_multiElement_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("COupdate-objectUpdate-multiElement-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "update";
    let identifier!: INTEGER;
    let update!: COupdate_objectUpdate_multiElement_Item_update;
    identifier = $._decodeInteger(sequence[0]);
    update = _decode_COupdate_objectUpdate_multiElement_Item_update(sequence[1]);
    return new COupdate_objectUpdate_multiElement_Item(
        identifier,
        update,

    );
}; }
    return _cached_decoder_for_COupdate_objectUpdate_multiElement_Item(el);
}

let _cached_encoder_for_COupdate_objectUpdate_multiElement_Item: $.ASN1Encoder<COupdate_objectUpdate_multiElement_Item> | null = null;

/**
 * @summary Encodes a(n) COupdate_objectUpdate_multiElement_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The COupdate_objectUpdate_multiElement_Item, encoded as an ASN.1 Element.
 */
export
function _encode_COupdate_objectUpdate_multiElement_Item (value: COupdate_objectUpdate_multiElement_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_COupdate_objectUpdate_multiElement_Item) { _cached_encoder_for_COupdate_objectUpdate_multiElement_Item = function (value: COupdate_objectUpdate_multiElement_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.identifier, $.BER),
            /* REQUIRED   */ _encode_COupdate_objectUpdate_multiElement_Item_update(value.update, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_COupdate_objectUpdate_multiElement_Item(value, elGetter);
}


/* eslint-enable */
