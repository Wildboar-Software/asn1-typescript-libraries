/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";
// export { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";


/**
 * @summary Signature_rsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signature-rsa ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
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
    new $.ComponentSpec("md5-hash", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sha-hash", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
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
    if (!_cached_encoder_for_Signature_rsa) { _cached_encoder_for_Signature_rsa = function (value: Signature_rsa, elGetter: $.ASN1Encoder<Signature_rsa>): _Element {
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
