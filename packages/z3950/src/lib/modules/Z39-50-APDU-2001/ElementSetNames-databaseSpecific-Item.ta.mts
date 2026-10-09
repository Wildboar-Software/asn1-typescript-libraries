/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
// export { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { ElementSetName, _decode_ElementSetName, _encode_ElementSetName } from "../Z39-50-APDU-2001/ElementSetName.ta.mjs";
// export { ElementSetName, _decode_ElementSetName, _encode_ElementSetName } from "../Z39-50-APDU-2001/ElementSetName.ta.mjs";


/**
 * @summary ElementSetNames_databaseSpecific_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementSetNames-databaseSpecific-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ElementSetNames_databaseSpecific_Item {
    /**
     * @summary `dbName`.
     * @public
     * @readonly
     */
    readonly dbName: DatabaseName;
    /**
     * @summary `esn`.
     * @public
     * @readonly
     */
    readonly esn: ElementSetName;

    constructor (
        dbName: DatabaseName,
        esn: ElementSetName
    ) {
        this.dbName = dbName;
        this.esn = esn;
    }

    /**
     * @summary Restructures an object into a ElementSetNames_databaseSpecific_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ElementSetNames_databaseSpecific_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementSetNames_databaseSpecific_Item`.
     * @returns {ElementSetNames_databaseSpecific_Item}
     */
    public static _from_object (_o: { [_K in keyof (ElementSetNames_databaseSpecific_Item)]: (ElementSetNames_databaseSpecific_Item)[_K] }): ElementSetNames_databaseSpecific_Item {
        return new ElementSetNames_databaseSpecific_Item(_o.dbName, _o.esn);
    }


}

/**
 * @summary The Leading Root Component Types of ElementSetNames_databaseSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementSetNames_databaseSpecific_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("dbName", false, $.hasTag(_TagClass.context, 105)),
    new $.ComponentSpec("esn", false, $.hasTag(_TagClass.context, 103))
];

/**
 * @summary The Trailing Root Component Types of ElementSetNames_databaseSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementSetNames_databaseSpecific_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementSetNames_databaseSpecific_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementSetNames_databaseSpecific_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementSetNames_databaseSpecific_Item: $.ASN1Decoder<ElementSetNames_databaseSpecific_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementSetNames_databaseSpecific_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementSetNames_databaseSpecific_Item (el: _Element): ElementSetNames_databaseSpecific_Item {
    if (!_cached_decoder_for_ElementSetNames_databaseSpecific_Item) { _cached_decoder_for_ElementSetNames_databaseSpecific_Item = function (el: _Element): ElementSetNames_databaseSpecific_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ElementSetNames-databaseSpecific-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dbName";
    sequence[1].name = "esn";
    let dbName!: DatabaseName;
    let esn!: ElementSetName;
    dbName = _decode_DatabaseName(sequence[0]);
    esn = _decode_ElementSetName(sequence[1]);
    return new ElementSetNames_databaseSpecific_Item(
        dbName,
        esn,

    );
}; }
    return _cached_decoder_for_ElementSetNames_databaseSpecific_Item(el);
}

let _cached_encoder_for_ElementSetNames_databaseSpecific_Item: $.ASN1Encoder<ElementSetNames_databaseSpecific_Item> | null = null;

/**
 * @summary Encodes a(n) ElementSetNames_databaseSpecific_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementSetNames_databaseSpecific_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ElementSetNames_databaseSpecific_Item (value: ElementSetNames_databaseSpecific_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementSetNames_databaseSpecific_Item) { _cached_encoder_for_ElementSetNames_databaseSpecific_Item = function (value: ElementSetNames_databaseSpecific_Item, elGetter: $.ASN1Encoder<ElementSetNames_databaseSpecific_Item>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 105, () => _encode_DatabaseName, $.BER)(value.dbName, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 103, () => _encode_ElementSetName, $.BER)(value.esn, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ElementSetNames_databaseSpecific_Item(value, elGetter);
}


/* eslint-enable */
