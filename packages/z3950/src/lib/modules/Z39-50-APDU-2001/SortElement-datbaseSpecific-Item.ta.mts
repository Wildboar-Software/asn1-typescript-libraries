/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
// export { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { SortKey, _decode_SortKey, _encode_SortKey } from "../Z39-50-APDU-2001/SortKey.ta.mjs";
// export { SortKey, _decode_SortKey, _encode_SortKey } from "../Z39-50-APDU-2001/SortKey.ta.mjs";


/**
 * @summary SortElement_datbaseSpecific_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortElement-datbaseSpecific-Item ::= SEQUENCE {
 *     databaseName DatabaseName,
 *     dbSort SortKey
 * }
 * ```
 * 
 * @class
 */
export
class SortElement_datbaseSpecific_Item {
    /**
     * @summary `databaseName`.
     * @public
     * @readonly
     */
    readonly databaseName: DatabaseName;
    /**
     * @summary `dbSort`.
     * @public
     * @readonly
     */
    readonly dbSort: SortKey;

    constructor (
        databaseName: DatabaseName,
        dbSort: SortKey
    ) {
        this.databaseName = databaseName;
        this.dbSort = dbSort;
    }

    /**
     * @summary Restructures an object into a SortElement_datbaseSpecific_Item
     * @description
     * 
     * This takes an `object` and converts it to a `SortElement_datbaseSpecific_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortElement_datbaseSpecific_Item`.
     * @returns {SortElement_datbaseSpecific_Item}
     */
    public static _from_object (_o: { [_K in keyof (SortElement_datbaseSpecific_Item)]: (SortElement_datbaseSpecific_Item)[_K] }): SortElement_datbaseSpecific_Item {
        return new SortElement_datbaseSpecific_Item(_o.databaseName, _o.dbSort);
    }


}

/**
 * @summary The Leading Root Component Types of SortElement_datbaseSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SortElement_datbaseSpecific_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("databaseName", false, $.hasTag(_TagClass.context, 105)),
    new $.ComponentSpec("dbSort", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SortElement_datbaseSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SortElement_datbaseSpecific_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SortElement_datbaseSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SortElement_datbaseSpecific_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SortElement_datbaseSpecific_Item: $.ASN1Decoder<SortElement_datbaseSpecific_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortElement_datbaseSpecific_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortElement_datbaseSpecific_Item (el: _Element): SortElement_datbaseSpecific_Item {
    if (!_cached_decoder_for_SortElement_datbaseSpecific_Item) { _cached_decoder_for_SortElement_datbaseSpecific_Item = function (el: _Element): SortElement_datbaseSpecific_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SortElement-datbaseSpecific-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "databaseName";
    sequence[1].name = "dbSort";
    let databaseName!: DatabaseName;
    let dbSort!: SortKey;
    databaseName = _decode_DatabaseName(sequence[0]);
    dbSort = _decode_SortKey(sequence[1]);
    return new SortElement_datbaseSpecific_Item(
        databaseName,
        dbSort,

    );
}; }
    return _cached_decoder_for_SortElement_datbaseSpecific_Item(el);
}

let _cached_encoder_for_SortElement_datbaseSpecific_Item: $.ASN1Encoder<SortElement_datbaseSpecific_Item> | null = null;

/**
 * @summary Encodes a(n) SortElement_datbaseSpecific_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortElement_datbaseSpecific_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SortElement_datbaseSpecific_Item (value: SortElement_datbaseSpecific_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortElement_datbaseSpecific_Item) { _cached_encoder_for_SortElement_datbaseSpecific_Item = function (value: SortElement_datbaseSpecific_Item, elGetter: $.ASN1Encoder<SortElement_datbaseSpecific_Item>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 105, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER),
        /* REQUIRED   */ _encode_SortKey(value.dbSort, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SortElement_datbaseSpecific_Item(value, elGetter);
}


/* eslint-enable */
