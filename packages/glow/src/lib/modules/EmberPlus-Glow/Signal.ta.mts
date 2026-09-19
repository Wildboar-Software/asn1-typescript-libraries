/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";


/**
 * @summary Signal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signal ::= SEQUENCE {
 *         number  [0] Integer32
 *     }
 * ```
 * 
 * @class
 */
export
class Signal {
    constructor (
        /**
         * @summary `number_`.
         * @public
         * @readonly
         */
        readonly number_: Integer32
    ) {}

    /**
     * @summary Restructures an object into a Signal
     * @description
     * 
     * This takes an `object` and converts it to a `Signal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signal`.
     * @returns {Signal}
     */
    public static _from_object (_o: { [_K in keyof (Signal)]: (Signal)[_K] }): Signal {
        return new Signal(_o.number_);
    }


}

/**
 * @summary The Leading Root Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Signal: $.ComponentSpec[] = [
    new $.ComponentSpec("number", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Signal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Signal: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Signal: $.ASN1Decoder<Signal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Signal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Signal (el: _Element): Signal {
    if (!_cached_decoder_for_Signal) { _cached_decoder_for_Signal = function (el: _Element): Signal {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Signal contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "number";
    let number_!: Integer32;
    number_ = $._decode_explicit<Integer32>(() => _decode_Integer32)(sequence[0]);
    return new Signal(
        number_,

    );
}; }
    return _cached_decoder_for_Signal(el);
}

let _cached_encoder_for_Signal: $.ASN1Encoder<Signal> | null = null;

/**
 * @summary Encodes a(n) Signal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signal, encoded as an ASN.1 Element.
 */
export
function _encode_Signal (value: Signal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Signal) { _cached_encoder_for_Signal = function (value: Signal, elGetter: $.ASN1Encoder<Signal>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.number_, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Signal(value, elGetter);
}


/* eslint-enable */
