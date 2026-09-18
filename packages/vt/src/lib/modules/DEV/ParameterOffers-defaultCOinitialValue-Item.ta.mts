/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
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



/**
 * @summary ParameterOffers_defaultCOinitialValue_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-defaultCOinitialValue-Item ::= SEQUENCE {
 *     value [0] IMPLICIT BIT STRING,
 *     mask  [1] IMPLICIT BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers_defaultCOinitialValue_Item {
    constructor (
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: BIT_STRING,
        /**
         * @summary `mask`.
         * @public
         * @readonly
         */
        readonly mask: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers_defaultCOinitialValue_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers_defaultCOinitialValue_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers_defaultCOinitialValue_Item`.
     * @returns {ParameterOffers_defaultCOinitialValue_Item}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers_defaultCOinitialValue_Item)]: (ParameterOffers_defaultCOinitialValue_Item)[_K] }): ParameterOffers_defaultCOinitialValue_Item {
        return new ParameterOffers_defaultCOinitialValue_Item(_o.value, _o.mask);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers_defaultCOinitialValue_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers_defaultCOinitialValue_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mask", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers_defaultCOinitialValue_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers_defaultCOinitialValue_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers_defaultCOinitialValue_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers_defaultCOinitialValue_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers_defaultCOinitialValue_Item: $.ASN1Decoder<ParameterOffers_defaultCOinitialValue_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_defaultCOinitialValue_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_defaultCOinitialValue_Item (el: _Element): ParameterOffers_defaultCOinitialValue_Item {
    if (!_cached_decoder_for_ParameterOffers_defaultCOinitialValue_Item) { _cached_decoder_for_ParameterOffers_defaultCOinitialValue_Item = function (el: _Element): ParameterOffers_defaultCOinitialValue_Item {
    let value!: BIT_STRING;
    let mask: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "mask": (_el: _Element): void => { mask = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterOffers_defaultCOinitialValue_Item,
        _extension_additions_list_spec_for_ParameterOffers_defaultCOinitialValue_Item,
        _root_component_type_list_2_spec_for_ParameterOffers_defaultCOinitialValue_Item,
        undefined,
    );
    return new ParameterOffers_defaultCOinitialValue_Item(
        value,
        mask
    );
}; }
    return _cached_decoder_for_ParameterOffers_defaultCOinitialValue_Item(el);
}

let _cached_encoder_for_ParameterOffers_defaultCOinitialValue_Item: $.ASN1Encoder<ParameterOffers_defaultCOinitialValue_Item> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_defaultCOinitialValue_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_defaultCOinitialValue_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_defaultCOinitialValue_Item (value: ParameterOffers_defaultCOinitialValue_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_defaultCOinitialValue_Item) { _cached_encoder_for_ParameterOffers_defaultCOinitialValue_Item = function (value: ParameterOffers_defaultCOinitialValue_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBitString, $.BER)(value.value, $.BER),
            /* IF_ABSENT  */ ((value.mask === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.mask, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers_defaultCOinitialValue_Item(value, elGetter);
}


/* eslint-enable */
