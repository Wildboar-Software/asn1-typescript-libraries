/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
/* START_OF_SYMBOL_DEFINITION SupportedFeatures_Item */
/**
 * @summary SupportedFeatures_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedFeatures-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SupportedFeatures_Item {
    constructor (
        /**
         * @summary `featureIdentifier`.
         * @public
         * @readonly
         */
        readonly featureIdentifier: OBJECT_IDENTIFIER,
        /**
         * @summary `featureInfo`.
         * @public
         * @readonly
         */
        readonly featureInfo: _Element
    ) {}

    /**
     * @summary Restructures an object into a SupportedFeatures_Item
     * @description
     * 
     * This takes an `object` and converts it to a `SupportedFeatures_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedFeatures_Item`.
     * @returns {SupportedFeatures_Item}
     */
    public static _from_object (_o: { [_K in keyof (SupportedFeatures_Item)]: (SupportedFeatures_Item)[_K] }): SupportedFeatures_Item {
        return new SupportedFeatures_Item(_o.featureIdentifier, _o.featureInfo);
    }


}
/* END_OF_SYMBOL_DEFINITION SupportedFeatures_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SupportedFeatures_Item */
/**
 * @summary The Leading Root Component Types of SupportedFeatures_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SupportedFeatures_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("featureIdentifier", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("featureInfo", false, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SupportedFeatures_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SupportedFeatures_Item */
/**
 * @summary The Trailing Root Component Types of SupportedFeatures_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SupportedFeatures_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SupportedFeatures_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SupportedFeatures_Item */
/**
 * @summary The Extension Addition Component Types of SupportedFeatures_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SupportedFeatures_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SupportedFeatures_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedFeatures_Item */
let _cached_decoder_for_SupportedFeatures_Item: $.ASN1Decoder<SupportedFeatures_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedFeatures_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedFeatures_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedFeatures_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedFeatures_Item} The decoded data structure.
 */
export
function _decode_SupportedFeatures_Item (el: _Element) {
    if (!_cached_decoder_for_SupportedFeatures_Item) { _cached_decoder_for_SupportedFeatures_Item = function (el: _Element): SupportedFeatures_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SupportedFeatures-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "featureIdentifier";
    sequence[1].name = "featureInfo";
    let featureIdentifier!: OBJECT_IDENTIFIER;
    let featureInfo!: _Element;
    featureIdentifier = $._decodeObjectIdentifier(sequence[0]);
    featureInfo = $._decodeAny(sequence[1]);
    return new SupportedFeatures_Item(
        featureIdentifier,
        featureInfo,

    );
}; }
    return _cached_decoder_for_SupportedFeatures_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedFeatures_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedFeatures_Item */
let _cached_encoder_for_SupportedFeatures_Item: $.ASN1Encoder<SupportedFeatures_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedFeatures_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedFeatures_Item */
/**
 * @summary Encodes a(n) SupportedFeatures_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedFeatures_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedFeatures_Item (value: SupportedFeatures_Item, elGetter: $.ASN1Encoder<SupportedFeatures_Item>) {
    if (!_cached_encoder_for_SupportedFeatures_Item) { _cached_encoder_for_SupportedFeatures_Item = function (value: SupportedFeatures_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.featureIdentifier, $.BER),
            /* REQUIRED   */ $._encodeAny(value.featureInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SupportedFeatures_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedFeatures_Item */

/* eslint-enable */
