/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AES_IV, _decode_AES_IV, _encode_AES_IV } from "../NIST-AES/AES-IV.ta.mjs";
// export { AES_IV, _decode_AES_IV, _encode_AES_IV } from "../NIST-AES/AES-IV.ta.mjs";
import { NumberOfBits, _decode_NumberOfBits, _encode_NumberOfBits } from "../NIST-AES/NumberOfBits.ta.mjs";
// export { NumberOfBits, _decode_NumberOfBits, _encode_NumberOfBits } from "../NIST-AES/NumberOfBits.ta.mjs";


/**
 * @summary CFBParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CFBParameters ::= SEQUENCE {
 *    aes-IV        AES-IV,
 *    numberOfBits     NumberOfBits
 * }
 * ```
 * 
 * @class
 */
export
class CFBParameters {
    constructor (
        /**
         * @summary `aes_IV`.
         * @public
         * @readonly
         */
        readonly aes_IV: AES_IV,
        /**
         * @summary `numberOfBits`.
         * @public
         * @readonly
         */
        readonly numberOfBits: NumberOfBits
    ) {}

    /**
     * @summary Restructures an object into a CFBParameters
     * @description
     * 
     * This takes an `object` and converts it to a `CFBParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CFBParameters`.
     * @returns {CFBParameters}
     */
    public static _from_object (_o: { [_K in keyof (CFBParameters)]: (CFBParameters)[_K] }): CFBParameters {
        return new CFBParameters(_o.aes_IV, _o.numberOfBits);
    }


}

/**
 * @summary The Leading Root Component Types of CFBParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CFBParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("aes-IV", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("numberOfBits", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CFBParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CFBParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CFBParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CFBParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CFBParameters: $.ASN1Decoder<CFBParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CFBParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CFBParameters (el: _Element): CFBParameters {
    if (!_cached_decoder_for_CFBParameters) { _cached_decoder_for_CFBParameters = function (el: _Element): CFBParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CFBParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aes-IV";
    sequence[1].name = "numberOfBits";
    let aes_IV!: AES_IV;
    let numberOfBits!: NumberOfBits;
    aes_IV = _decode_AES_IV(sequence[0]);
    numberOfBits = _decode_NumberOfBits(sequence[1]);
    return new CFBParameters(
        aes_IV,
        numberOfBits,

    );
}; }
    return _cached_decoder_for_CFBParameters(el);
}

let _cached_encoder_for_CFBParameters: $.ASN1Encoder<CFBParameters> | null = null;

/**
 * @summary Encodes a(n) CFBParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CFBParameters, encoded as an ASN.1 Element.
 */
export
function _encode_CFBParameters (value: CFBParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CFBParameters) { _cached_encoder_for_CFBParameters = function (value: CFBParameters, elGetter: $.ASN1Encoder<CFBParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AES_IV(value.aes_IV, $.BER),
            /* REQUIRED   */ _encode_NumberOfBits(value.numberOfBits, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CFBParameters(value, elGetter);
}


/* eslint-enable */
