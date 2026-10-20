/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { SIGNATURE, _get_decoder_for_SIGNATURE, _get_encoder_for_SIGNATURE } from "../AuthenticationFramework/SIGNATURE.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { ENCRYPTED_HASH, _get_decoder_for_ENCRYPTED_HASH, _get_encoder_for_ENCRYPTED_HASH } from "../AuthenticationFramework/ENCRYPTED-HASH.ta.mjs";
// export { ENCRYPTED_HASH, _get_decoder_for_ENCRYPTED_HASH, _get_encoder_for_ENCRYPTED_HASH } from "../AuthenticationFramework/ENCRYPTED-HASH.ta.mjs";


/**
 * @summary SIGNED
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIGNED{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned  ToBeSigned,
 *   COMPONENTS OF SIGNATURE{ToBeSigned}
 * }
 * ```
 * 
 * @class
 */
export
class SIGNED<ToBeSigned> {
    /**
     * @summary `toBeSigned`.
     * @public
     * @readonly
     */
    readonly toBeSigned: ToBeSigned;
    /**
     * @summary `algorithmIdentifier`.
     * @public
     * @readonly
     */
    readonly algorithmIdentifier: AlgorithmIdentifier /* REPLICATED_COMPONENT */;
    /**
     * @summary `encrypted`.
     * @public
     * @readonly
     */
    readonly encrypted: ENCRYPTED_HASH<ToBeSigned> /* REPLICATED_COMPONENT */;

    constructor (
        toBeSigned: ToBeSigned,
        algorithmIdentifier: AlgorithmIdentifier /* REPLICATED_COMPONENT */,
        encrypted: ENCRYPTED_HASH<ToBeSigned> /* REPLICATED_COMPONENT */
    ) {
        this.toBeSigned = toBeSigned;
        this.algorithmIdentifier = algorithmIdentifier;
        this.encrypted = encrypted;
    }

    /**
     * @summary Restructures an object into a SIGNED
     * @description
     * 
     * This takes an `object` and converts it to a `SIGNED`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNED`.
     * @returns {SIGNED}
     */
    public static _from_object (_o: { [_K in keyof (SIGNED<any>)]: (SIGNED<any>)[_K] }): SIGNED<any> {
        return new SIGNED(_o.toBeSigned, _o.algorithmIdentifier, _o.encrypted);
    }


}

/**
 * @summary The Leading Root Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag),
    new $.ComponentSpec("algorithmIdentifier", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("encrypted", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIGNED: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIGNED
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIGNED: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIGNED: $.ASN1Decoder<SIGNED<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SIGNED
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_SIGNED<ToBeSigned>(_decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>): $.ASN1Decoder<SIGNED<ToBeSigned>> {
    return function (el: _Element): SIGNED<ToBeSigned> {
    let toBeSigned!: ToBeSigned;
    let algorithmIdentifier!: AlgorithmIdentifier;
    let encrypted!: ENCRYPTED_HASH<ToBeSigned>;
    const callbacks: $.DecodingMap = {
        "toBeSigned": (_el: _Element): void => { toBeSigned = _decode_ToBeSigned(_el); },
        "algorithmIdentifier": (_el: _Element): void => { algorithmIdentifier = _decode_AlgorithmIdentifier(_el); },
        "encrypted": (_el: _Element): void => { encrypted = _get_decoder_for_ENCRYPTED_HASH<ToBeSigned>(_decode_ToBeSigned)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined,
    );
    return new SIGNED(
        toBeSigned,
        algorithmIdentifier,
        encrypted
    );
};
}

let _cached_encoder_for_SIGNED: $.ASN1Encoder<SIGNED<ToBeSigned>> | null = null;

/**
 * @summary Returns a function that will encode a(n) SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNED as an ASN.1 element.
 */
export
function _get_encoder_for_SIGNED<ToBeSigned>(_encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>): $.ASN1Encoder<SIGNED<ToBeSigned>> {
    return function (value: SIGNED<ToBeSigned>, elGetter: $.ASN1Encoder<SIGNED<ToBeSigned>>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ToBeSigned(value.toBeSigned, $.BER),
        /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithmIdentifier, $.BER),
        /* REQUIRED   */ _get_encoder_for_ENCRYPTED_HASH<ToBeSigned>(_encode_ToBeSigned)(value.encrypted, $.BER)
    ], $.BER);
};
}

/* eslint-enable */
