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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary Signature_rsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signature-rsa ::= SEQUENCE {
 *     md5-hash  Opaque(SIZE(16)),
 *     sha-hash  Opaque(SIZE(20))
 * }
 * ```
 * 
 * @class
 */
export
class Signature_rsa {
    constructor (
        /**
         * @summary `md5_hash`.
         * @public
         * @readonly
         */
        readonly md5_hash: Opaque,
        /**
         * @summary `sha_hash`.
         * @public
         * @readonly
         */
        readonly sha_hash: Opaque
    ) {}

    /**
     * @summary Restructures an object into a Signature_rsa
     * @description
     * 
     * This takes an `object` and converts it to a `Signature_rsa`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signature_rsa`.
     * @returns {Signature_rsa}
     */
    public static _from_object (_o: { [_K in keyof (Signature_rsa)]: (Signature_rsa)[_K] }): Signature_rsa {
        return new Signature_rsa(_o.md5_hash, _o.sha_hash);
    }


}

/**
 * @summary The Leading Root Component Types of Signature_rsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Signature_rsa: $.ComponentSpec[] = [
    new $.ComponentSpec("md5-hash", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sha-hash", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Signature_rsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Signature_rsa: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Signature_rsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Signature_rsa: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Signature_rsa: $.ASN1Decoder<Signature_rsa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Signature_rsa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Signature_rsa (el: _Element): Signature_rsa {
    if (!_cached_decoder_for_Signature_rsa) { _cached_decoder_for_Signature_rsa = function (el: _Element): Signature_rsa {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Signature-rsa contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "md5-hash";
    sequence[1].name = "sha-hash";
    let md5_hash!: Opaque;
    let sha_hash!: Opaque;
    md5_hash = _decode_Opaque(sequence[0]);
    sha_hash = _decode_Opaque(sequence[1]);
    if (md5_hash.length !== 16) {
        throw new ASN1SizeError("Signature-rsa.md5-hash violates SIZE constraint");
    }
    if (sha_hash.length !== 20) {
        throw new ASN1SizeError("Signature-rsa.sha-hash violates SIZE constraint");
    }
    return new Signature_rsa(
        md5_hash,
        sha_hash,

    );
}; }
    return _cached_decoder_for_Signature_rsa(el);
}

let _cached_encoder_for_Signature_rsa: $.ASN1Encoder<Signature_rsa> | null = null;

/**
 * @summary Encodes a(n) Signature_rsa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signature_rsa, encoded as an ASN.1 Element.
 */
export
function _encode_Signature_rsa (value: Signature_rsa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Signature_rsa) { _cached_encoder_for_Signature_rsa = function (value: Signature_rsa): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Opaque(value.md5_hash, $.BER),
            /* REQUIRED   */ _encode_Opaque(value.sha_hash, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Signature_rsa(value, elGetter);
}


/* eslint-enable */
