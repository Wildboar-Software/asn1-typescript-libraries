/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { ENCRYPTED_HASH, _get_decoder_for_ENCRYPTED_HASH, _get_encoder_for_ENCRYPTED_HASH } from "../AuthenticationFramework/ENCRYPTED-HASH.ta.mjs";
// export { ENCRYPTED_HASH, _get_decoder_for_ENCRYPTED_HASH, _get_encoder_for_ENCRYPTED_HASH } from "../AuthenticationFramework/ENCRYPTED-HASH.ta.mjs";


/**
 * @summary SIGNATURE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIGNATURE{ToBeSigned} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier,
 *   encrypted            ENCRYPTED-HASH{ToBeSigned}
 * }
 * ```
 * 
 * @class
 */
export
class SIGNATURE<ToBeSigned> {
    /**
     * @summary `algorithmIdentifier`.
     * @public
     * @readonly
     */
    readonly algorithmIdentifier: AlgorithmIdentifier;
    /**
     * @summary `encrypted`.
     * @public
     * @readonly
     */
    readonly encrypted: ENCRYPTED_HASH<ToBeSigned>;

    constructor (
        algorithmIdentifier: AlgorithmIdentifier,
        encrypted: ENCRYPTED_HASH<ToBeSigned>
    ) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.encrypted = encrypted;
    }

    /**
     * @summary Restructures an object into a SIGNATURE
     * @description
     * 
     * This takes an `object` and converts it to a `SIGNATURE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNATURE`.
     * @returns {SIGNATURE}
     */
    public static _from_object (_o: { [_K in keyof (SIGNATURE<any>)]: (SIGNATURE<any>)[_K] }): SIGNATURE<any> {
        return new SIGNATURE(_o.algorithmIdentifier, _o.encrypted);
    }


}

/**
 * @summary The Leading Root Component Types of SIGNATURE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIGNATURE: $.ComponentSpec[] = [
    new $.ComponentSpec("algorithmIdentifier", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("encrypted", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of SIGNATURE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIGNATURE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIGNATURE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIGNATURE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIGNATURE: $.ASN1Decoder<SIGNATURE<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SIGNATURE
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_SIGNATURE<ToBeSigned>(_decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>): $.ASN1Decoder<SIGNATURE<ToBeSigned>> {
    return function <ToBeSigned>(el: _Element): SIGNATURE<ToBeSigned> {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SIGNATURE contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "algorithmIdentifier";
    sequence[1].name = "encrypted";
    let algorithmIdentifier!: AlgorithmIdentifier;
    let encrypted!: ENCRYPTED_HASH<ToBeSigned>;
    algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
    encrypted = _get_decoder_for_ENCRYPTED_HASH<ToBeSigned>(_decode_ToBeSigned)(sequence[1]);
    return new SIGNATURE<ToBeSigned>(
        algorithmIdentifier,
        encrypted,

    );
};
}

let _cached_encoder_for_SIGNATURE: $.ASN1Encoder<SIGNATURE<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will encode a(n) SIGNATURE into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNATURE as an ASN.1 element.
 */
export
function _get_encoder_for_SIGNATURE<ToBeSigned>(_encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>): $.ASN1Encoder<SIGNATURE<ToBeSigned>> {
    return function (value: SIGNATURE<ToBeSigned>, elGetter: $.ASN1Encoder<SIGNATURE<ToBeSigned>>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithmIdentifier, $.BER),
        /* REQUIRED   */ _get_encoder_for_ENCRYPTED_HASH<ToBeSigned>(_encode_ToBeSigned)(value.encrypted, $.BER)
    ], $.BER);
};
}

/* eslint-enable */
