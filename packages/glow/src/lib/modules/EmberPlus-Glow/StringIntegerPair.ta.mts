/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";


/**
 * @summary StringIntegerPair
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StringIntegerPair ::= [APPLICATION 7] IMPLICIT
 *         SEQUENCE {
 *             entryString  [0] EmberString,
 *             entryInteger [1] Integer32
 *         }
 * ```
 * 
 * @class
 */
export
class StringIntegerPair {
    constructor (
        /**
         * @summary `entryString`.
         * @public
         * @readonly
         */
        readonly entryString: EmberString,
        /**
         * @summary `entryInteger`.
         * @public
         * @readonly
         */
        readonly entryInteger: Integer32
    ) {}

    /**
     * @summary Restructures an object into a StringIntegerPair
     * @description
     * 
     * This takes an `object` and converts it to a `StringIntegerPair`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StringIntegerPair`.
     * @returns {StringIntegerPair}
     */
    public static _from_object (_o: { [_K in keyof (StringIntegerPair)]: (StringIntegerPair)[_K] }): StringIntegerPair {
        return new StringIntegerPair(_o.entryString, _o.entryInteger);
    }


}

/**
 * @summary The Leading Root Component Types of StringIntegerPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StringIntegerPair: $.ComponentSpec[] = [
    new $.ComponentSpec("entryString", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entryInteger", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of StringIntegerPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StringIntegerPair: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StringIntegerPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StringIntegerPair: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StringIntegerPair: $.ASN1Decoder<StringIntegerPair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StringIntegerPair
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StringIntegerPair (el: _Element): StringIntegerPair {
    if (!_cached_decoder_for_StringIntegerPair) { _cached_decoder_for_StringIntegerPair = $._decode_implicit<StringIntegerPair>(() => function (el: _Element): StringIntegerPair {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("StringIntegerPair contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entryString";
    sequence[1].name = "entryInteger";
    let entryString!: EmberString;
    let entryInteger!: Integer32;
    entryString = $._decode_explicit<EmberString>(() => _decode_EmberString)(sequence[0]);
    entryInteger = $._decode_explicit<Integer32>(() => _decode_Integer32)(sequence[1]);
    return new StringIntegerPair(
        entryString,
        entryInteger,

    );
}); }
    return _cached_decoder_for_StringIntegerPair(el);
}

let _cached_encoder_for_StringIntegerPair: $.ASN1Encoder<StringIntegerPair> | null = null;

/**
 * @summary Encodes a(n) StringIntegerPair into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StringIntegerPair, encoded as an ASN.1 Element.
 */
export
function _encode_StringIntegerPair (value: StringIntegerPair, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StringIntegerPair) { _cached_encoder_for_StringIntegerPair = $._encode_implicit(_TagClass.application, 7, () => function (value: StringIntegerPair, elGetter: $.ASN1Encoder<StringIntegerPair>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_EmberString, $.BER)(value.entryString, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Integer32, $.BER)(value.entryInteger, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_StringIntegerPair(value, elGetter);
}


/* eslint-enable */
