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
 * @summary Signature_dsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signature-dsa ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Signature_dsa {
    constructor (
        /**
         * @summary `sha_hash`.
         * @public
         * @readonly
         */
        readonly sha_hash: Opaque
    ) {}

    /**
     * @summary Restructures an object into a Signature_dsa
     * @description
     * 
     * This takes an `object` and converts it to a `Signature_dsa`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signature_dsa`.
     * @returns {Signature_dsa}
     */
    public static _from_object (_o: { [_K in keyof (Signature_dsa)]: (Signature_dsa)[_K] }): Signature_dsa {
        return new Signature_dsa(_o.sha_hash);
    }


}

/**
 * @summary The Leading Root Component Types of Signature_dsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Signature_dsa: $.ComponentSpec[] = [
    new $.ComponentSpec("sha-hash", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Signature_dsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Signature_dsa: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Signature_dsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Signature_dsa: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Signature_dsa: $.ASN1Decoder<Signature_dsa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Signature_dsa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Signature_dsa (el: _Element): Signature_dsa {
    if (!_cached_decoder_for_Signature_dsa) { _cached_decoder_for_Signature_dsa = function (el: _Element): Signature_dsa {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Signature-dsa contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sha-hash";
    let sha_hash!: Opaque;
    sha_hash = _decode_Opaque(sequence[0]);
    return new Signature_dsa(
        sha_hash,

    );
}; }
    return _cached_decoder_for_Signature_dsa(el);
}

let _cached_encoder_for_Signature_dsa: $.ASN1Encoder<Signature_dsa> | null = null;

/**
 * @summary Encodes a(n) Signature_dsa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signature_dsa, encoded as an ASN.1 Element.
 */
export
function _encode_Signature_dsa (value: Signature_dsa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Signature_dsa) { _cached_encoder_for_Signature_dsa = function (value: Signature_dsa, elGetter: $.ASN1Encoder<Signature_dsa>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Opaque(value.sha_hash, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Signature_dsa(value, elGetter);
}


/* eslint-enable */
