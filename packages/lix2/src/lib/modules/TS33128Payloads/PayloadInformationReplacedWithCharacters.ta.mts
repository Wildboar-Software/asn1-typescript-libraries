/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PayloadInformationReplacedWithCharacters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadInformationReplacedWithCharacters ::= SEQUENCE
 * {
 *     characters [1] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class PayloadInformationReplacedWithCharacters {
    constructor (
        /**
         * @summary `characters`.
         * @public
         * @readonly
         */
        readonly characters: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a PayloadInformationReplacedWithCharacters
     * @description
     * 
     * This takes an `object` and converts it to a `PayloadInformationReplacedWithCharacters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PayloadInformationReplacedWithCharacters`.
     * @returns {PayloadInformationReplacedWithCharacters}
     */
    public static _from_object (_o: { [_K in keyof (PayloadInformationReplacedWithCharacters)]: (PayloadInformationReplacedWithCharacters)[_K] }): PayloadInformationReplacedWithCharacters {
        return new PayloadInformationReplacedWithCharacters(_o.characters);
    }


}

/**
 * @summary The Leading Root Component Types of PayloadInformationReplacedWithCharacters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PayloadInformationReplacedWithCharacters: $.ComponentSpec[] = [
    new $.ComponentSpec("characters", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PayloadInformationReplacedWithCharacters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PayloadInformationReplacedWithCharacters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PayloadInformationReplacedWithCharacters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PayloadInformationReplacedWithCharacters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PayloadInformationReplacedWithCharacters: $.ASN1Decoder<PayloadInformationReplacedWithCharacters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadInformationReplacedWithCharacters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadInformationReplacedWithCharacters (el: _Element): PayloadInformationReplacedWithCharacters {
    if (!_cached_decoder_for_PayloadInformationReplacedWithCharacters) { _cached_decoder_for_PayloadInformationReplacedWithCharacters = function (el: _Element): PayloadInformationReplacedWithCharacters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("PayloadInformationReplacedWithCharacters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "characters";
    let characters!: UTF8String;
    characters = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    return new PayloadInformationReplacedWithCharacters(
        characters,

    );
}; }
    return _cached_decoder_for_PayloadInformationReplacedWithCharacters(el);
}

let _cached_encoder_for_PayloadInformationReplacedWithCharacters: $.ASN1Encoder<PayloadInformationReplacedWithCharacters> | null = null;

/**
 * @summary Encodes a(n) PayloadInformationReplacedWithCharacters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadInformationReplacedWithCharacters, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadInformationReplacedWithCharacters (value: PayloadInformationReplacedWithCharacters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadInformationReplacedWithCharacters) { _cached_encoder_for_PayloadInformationReplacedWithCharacters = function (value: PayloadInformationReplacedWithCharacters, elGetter: $.ASN1Encoder<PayloadInformationReplacedWithCharacters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.characters, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PayloadInformationReplacedWithCharacters(value, elGetter);
}


/* eslint-enable */
