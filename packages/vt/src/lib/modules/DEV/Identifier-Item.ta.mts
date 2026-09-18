/* eslint-disable */
import {
    PrintableString,
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
import { ParameterIdents, _decode_ParameterIdents, _encode_ParameterIdents } from "../DEV/ParameterIdents.ta.mjs";
// export { ParameterIdents, _decode_ParameterIdents, _encode_ParameterIdents } from "../DEV/ParameterIdents.ta.mjs";


/**
 * @summary Identifier_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Identifier-Item ::= SEQUENCE {
 *     name    PrintableString,
 *     idents  ParameterIdents
 * }
 * ```
 * 
 * @class
 */
export
class Identifier_Item {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: PrintableString,
        /**
         * @summary `idents`.
         * @public
         * @readonly
         */
        readonly idents: ParameterIdents
    ) {}

    /**
     * @summary Restructures an object into a Identifier_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Identifier_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Identifier_Item`.
     * @returns {Identifier_Item}
     */
    public static _from_object (_o: { [_K in keyof (Identifier_Item)]: (Identifier_Item)[_K] }): Identifier_Item {
        return new Identifier_Item(_o.name, _o.idents);
    }


}

/**
 * @summary The Leading Root Component Types of Identifier_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Identifier_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("idents", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of Identifier_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Identifier_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Identifier_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Identifier_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Identifier_Item: $.ASN1Decoder<Identifier_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Identifier_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Identifier_Item (el: _Element): Identifier_Item {
    if (!_cached_decoder_for_Identifier_Item) { _cached_decoder_for_Identifier_Item = function (el: _Element): Identifier_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Identifier-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "idents";
    let name!: PrintableString;
    let idents!: ParameterIdents;
    name = $._decodePrintableString(sequence[0]);
    idents = _decode_ParameterIdents(sequence[1]);
    return new Identifier_Item(
        name,
        idents,

    );
}; }
    return _cached_decoder_for_Identifier_Item(el);
}

let _cached_encoder_for_Identifier_Item: $.ASN1Encoder<Identifier_Item> | null = null;

/**
 * @summary Encodes a(n) Identifier_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identifier_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Identifier_Item (value: Identifier_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Identifier_Item) { _cached_encoder_for_Identifier_Item = function (value: Identifier_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.name, $.BER),
            /* REQUIRED   */ _encode_ParameterIdents(value.idents, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Identifier_Item(value, elGetter);
}


/* eslint-enable */
