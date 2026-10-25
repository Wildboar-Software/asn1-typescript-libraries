/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary provideTokens_SpecificInput
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * provideTokens-SpecificInput ::=
 * SEQUENCE {
 *   numOfRequestedTokens INTEGER,
 *   -- how many tokens are requested (NOfRT)
 *   oidOfAttribute OBJECT IDENTIFIER
 * }
 * ```
 * 
 * @class
 */
export
class provideTokens_SpecificInput {
    /**
     * @summary `numOfRequestedTokens`.
     * @public
     * @readonly
     */
    readonly numOfRequestedTokens: INTEGER;
    /**
     * @summary `oidOfAttribute`.
     * @public
     * @readonly
     */
    readonly oidOfAttribute: OBJECT_IDENTIFIER;

    constructor (
        numOfRequestedTokens: INTEGER,
        oidOfAttribute: OBJECT_IDENTIFIER
    ) {
        this.numOfRequestedTokens = numOfRequestedTokens;
        this.oidOfAttribute = oidOfAttribute;
    }

    /**
     * @summary Restructures an object into a provideTokens_SpecificInput
     * @description
     * 
     * This takes an `object` and converts it to a `provideTokens_SpecificInput`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `provideTokens_SpecificInput`.
     * @returns {provideTokens_SpecificInput}
     */
    public static _from_object (_o: { [_K in keyof (provideTokens_SpecificInput)]: (provideTokens_SpecificInput)[_K] }): provideTokens_SpecificInput {
        return new provideTokens_SpecificInput(_o.numOfRequestedTokens, _o.oidOfAttribute);
    }


}

/**
 * @summary The Leading Root Component Types of provideTokens_SpecificInput
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_provideTokens_SpecificInput: $.ComponentSpec[] = [
    new $.ComponentSpec("numOfRequestedTokens", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("oidOfAttribute", false, $.hasTag(_TagClass.universal, 6))
];

/**
 * @summary The Trailing Root Component Types of provideTokens_SpecificInput
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_provideTokens_SpecificInput: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of provideTokens_SpecificInput
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_provideTokens_SpecificInput: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_provideTokens_SpecificInput: $.ASN1Decoder<provideTokens_SpecificInput> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) provideTokens_SpecificInput
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_provideTokens_SpecificInput (el: _Element): provideTokens_SpecificInput {
    if (!_cached_decoder_for_provideTokens_SpecificInput) { _cached_decoder_for_provideTokens_SpecificInput = function (el: _Element): provideTokens_SpecificInput {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("provideTokens-SpecificInput contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numOfRequestedTokens";
    sequence[1].name = "oidOfAttribute";
    const numOfRequestedTokens: INTEGER = $._decodeInteger(sequence[0]);
    const oidOfAttribute: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[1]);
    return new provideTokens_SpecificInput(
        numOfRequestedTokens,
        oidOfAttribute,

    );
}; }
    return _cached_decoder_for_provideTokens_SpecificInput(el);
}

let _cached_encoder_for_provideTokens_SpecificInput: $.ASN1Encoder<provideTokens_SpecificInput> | null = null;

/**
 * @summary Encodes a(n) provideTokens_SpecificInput into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The provideTokens_SpecificInput, encoded as an ASN.1 Element.
 */
export
function _encode_provideTokens_SpecificInput (value: provideTokens_SpecificInput, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_provideTokens_SpecificInput) { _cached_encoder_for_provideTokens_SpecificInput = function (value: provideTokens_SpecificInput, elGetter: $.ASN1Encoder<provideTokens_SpecificInput>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.numOfRequestedTokens, $.BER),
        /* REQUIRED   */ $._encodeObjectIdentifier(value.oidOfAttribute, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_provideTokens_SpecificInput(value, elGetter);
}


/* eslint-enable */
