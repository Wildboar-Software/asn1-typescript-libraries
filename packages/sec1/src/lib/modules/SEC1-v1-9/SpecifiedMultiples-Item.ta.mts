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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta.mjs";
/* START_OF_SYMBOL_DEFINITION SpecifiedMultiples_Item */
/**
 * @summary SpecifiedMultiples_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecifiedMultiples-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SpecifiedMultiples_Item {
    constructor (
        /**
         * @summary `multiple`.
         * @public
         * @readonly
         */
        readonly multiple: INTEGER,
        /**
         * @summary `point`.
         * @public
         * @readonly
         */
        readonly point: ECPoint
    ) {}

    /**
     * @summary Restructures an object into a SpecifiedMultiples_Item
     * @description
     * 
     * This takes an `object` and converts it to a `SpecifiedMultiples_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecifiedMultiples_Item`.
     * @returns {SpecifiedMultiples_Item}
     */
    public static _from_object (_o: { [_K in keyof (SpecifiedMultiples_Item)]: (SpecifiedMultiples_Item)[_K] }): SpecifiedMultiples_Item {
        return new SpecifiedMultiples_Item(_o.multiple, _o.point);
    }


}
/* END_OF_SYMBOL_DEFINITION SpecifiedMultiples_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecifiedMultiples_Item */
/**
 * @summary The Leading Root Component Types of SpecifiedMultiples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpecifiedMultiples_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("multiple", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("point", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecifiedMultiples_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecifiedMultiples_Item */
/**
 * @summary The Trailing Root Component Types of SpecifiedMultiples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpecifiedMultiples_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecifiedMultiples_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecifiedMultiples_Item */
/**
 * @summary The Extension Addition Component Types of SpecifiedMultiples_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpecifiedMultiples_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecifiedMultiples_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecifiedMultiples_Item */
let _cached_decoder_for_SpecifiedMultiples_Item: $.ASN1Decoder<SpecifiedMultiples_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecifiedMultiples_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SpecifiedMultiples_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SpecifiedMultiples_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecifiedMultiples_Item} The decoded data structure.
 */
export
function _decode_SpecifiedMultiples_Item (el: _Element) {
    if (!_cached_decoder_for_SpecifiedMultiples_Item) { _cached_decoder_for_SpecifiedMultiples_Item = function (el: _Element): SpecifiedMultiples_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SpecifiedMultiples-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "multiple";
    sequence[1].name = "point";
    let multiple!: INTEGER;
    let point!: ECPoint;
    multiple = $._decodeInteger(sequence[0]);
    point = _decode_ECPoint(sequence[1]);
    return new SpecifiedMultiples_Item(
        multiple,
        point,

    );
}; }
    return _cached_decoder_for_SpecifiedMultiples_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SpecifiedMultiples_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecifiedMultiples_Item */
let _cached_encoder_for_SpecifiedMultiples_Item: $.ASN1Encoder<SpecifiedMultiples_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecifiedMultiples_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SpecifiedMultiples_Item */
/**
 * @summary Encodes a(n) SpecifiedMultiples_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecifiedMultiples_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SpecifiedMultiples_Item (value: SpecifiedMultiples_Item, elGetter: $.ASN1Encoder<SpecifiedMultiples_Item>) {
    if (!_cached_encoder_for_SpecifiedMultiples_Item) { _cached_encoder_for_SpecifiedMultiples_Item = function (value: SpecifiedMultiples_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.multiple, $.BER),
            /* REQUIRED   */ _encode_ECPoint(value.point, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpecifiedMultiples_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SpecifiedMultiples_Item */

/* eslint-enable */
