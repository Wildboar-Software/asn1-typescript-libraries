/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
// export { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";


/**
 * @summary Psmo_setFallbackAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-setFallbackAttribute ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Psmo_setFallbackAttribute {
    constructor (
        /**
         * @summary `iccid`.
         * @public
         * @readonly
         */
        readonly iccid: Iccid
    ) {}

    /**
     * @summary Restructures an object into a Psmo_setFallbackAttribute
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_setFallbackAttribute`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_setFallbackAttribute`.
     * @returns {Psmo_setFallbackAttribute}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_setFallbackAttribute)]: (Psmo_setFallbackAttribute)[_K] }): Psmo_setFallbackAttribute {
        return new Psmo_setFallbackAttribute(_o.iccid);
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_setFallbackAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_setFallbackAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", false, $.hasTag(_TagClass.application, 26))
];

/**
 * @summary The Trailing Root Component Types of Psmo_setFallbackAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_setFallbackAttribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_setFallbackAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_setFallbackAttribute: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_setFallbackAttribute: $.ASN1Decoder<Psmo_setFallbackAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_setFallbackAttribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_setFallbackAttribute (el: _Element): Psmo_setFallbackAttribute {
    if (!_cached_decoder_for_Psmo_setFallbackAttribute) { _cached_decoder_for_Psmo_setFallbackAttribute = function (el: _Element): Psmo_setFallbackAttribute {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Psmo-setFallbackAttribute contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iccid";
    let iccid!: Iccid;
    iccid = $._decode_implicit<Iccid>(() => _decode_Iccid)(sequence[0]);
    return new Psmo_setFallbackAttribute(
        iccid,

    );
}; }
    return _cached_decoder_for_Psmo_setFallbackAttribute(el);
}

let _cached_encoder_for_Psmo_setFallbackAttribute: $.ASN1Encoder<Psmo_setFallbackAttribute> | null = null;

/**
 * @summary Encodes a(n) Psmo_setFallbackAttribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_setFallbackAttribute, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_setFallbackAttribute (value: Psmo_setFallbackAttribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_setFallbackAttribute) { _cached_encoder_for_Psmo_setFallbackAttribute = function (value: Psmo_setFallbackAttribute, elGetter: $.ASN1Encoder<Psmo_setFallbackAttribute>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Iccid, $.BER)(value.iccid, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_setFallbackAttribute(value, elGetter);
}


/* eslint-enable */
