/* eslint-disable */
import {
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
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

/**
 * @summary V8bisDiag_Item_cL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-cL ::= SEQUENCE {cLSequence  V59String}
 * ```
 * 
 * @class
 */
export
class V8bisDiag_Item_cL {
    constructor (
        /**
         * @summary `cLSequence`.
         * @public
         * @readonly
         */
        readonly cLSequence: V59String
    ) {}

    /**
     * @summary Restructures an object into a V8bisDiag_Item_cL
     * @description
     * 
     * This takes an `object` and converts it to a `V8bisDiag_Item_cL`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V8bisDiag_Item_cL`.
     * @returns {V8bisDiag_Item_cL}
     */
    public static _from_object (_o: { [_K in keyof (V8bisDiag_Item_cL)]: (V8bisDiag_Item_cL)[_K] }): V8bisDiag_Item_cL {
        return new V8bisDiag_Item_cL(_o.cLSequence);
    }

}

/**
 * @summary The Leading Root Component Types of V8bisDiag_Item_cL
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V8bisDiag_Item_cL: $.ComponentSpec[] = [
    new $.ComponentSpec("cLSequence", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of V8bisDiag_Item_cL
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V8bisDiag_Item_cL: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V8bisDiag_Item_cL
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V8bisDiag_Item_cL: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V8bisDiag_Item_cL: $.ASN1Decoder<V8bisDiag_Item_cL> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_cL
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_cL (el: _Element): V8bisDiag_Item_cL {
    if (!_cached_decoder_for_V8bisDiag_Item_cL) { _cached_decoder_for_V8bisDiag_Item_cL = function (el: _Element): V8bisDiag_Item_cL {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("V8bisDiag-Item-cL contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cLSequence";
    let cLSequence!: V59String;
    cLSequence = _decode_V59String(sequence[0]);
    return new V8bisDiag_Item_cL(
        cLSequence,

    );
}; }
    return _cached_decoder_for_V8bisDiag_Item_cL(el);
}

let _cached_encoder_for_V8bisDiag_Item_cL: $.ASN1Encoder<V8bisDiag_Item_cL> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_cL into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_cL, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_cL (value: V8bisDiag_Item_cL, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_cL) { _cached_encoder_for_V8bisDiag_Item_cL = function (value: V8bisDiag_Item_cL): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.cLSequence, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V8bisDiag_Item_cL(value, elGetter);
}

/* eslint-enable */
