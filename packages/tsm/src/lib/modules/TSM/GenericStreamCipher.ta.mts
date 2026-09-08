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
import { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../TSM/HASH.ta.mjs";
// export { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../TSM/HASH.ta.mjs";


/**
 * @summary GenericStreamCipher
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericStreamCipher ::= SEQUENCE {
 * content    Opaque(SIZE(0..65535)),
 * mAC        HASH{Opaque}
 * }
 * ```
 * 
 * @class
 */
export
class GenericStreamCipher {
    constructor (
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: Opaque,
        /**
         * @summary `mAC`.
         * @public
         * @readonly
         */
        readonly mAC: HASH<Opaque>
    ) {}

    /**
     * @summary Restructures an object into a GenericStreamCipher
     * @description
     * 
     * This takes an `object` and converts it to a `GenericStreamCipher`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericStreamCipher`.
     * @returns {GenericStreamCipher}
     */
    public static _from_object (_o: { [_K in keyof (GenericStreamCipher)]: (GenericStreamCipher)[_K] }): GenericStreamCipher {
        return new GenericStreamCipher(_o.content, _o.mAC);
    }


}

/**
 * @summary The Leading Root Component Types of GenericStreamCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericStreamCipher: $.ComponentSpec[] = [
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mAC", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GenericStreamCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericStreamCipher: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericStreamCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericStreamCipher: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenericStreamCipher: $.ASN1Decoder<GenericStreamCipher> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericStreamCipher
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericStreamCipher (el: _Element): GenericStreamCipher {
    if (!_cached_decoder_for_GenericStreamCipher) { _cached_decoder_for_GenericStreamCipher = function (el: _Element): GenericStreamCipher {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GenericStreamCipher contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "content";
    sequence[1].name = "mAC";
    let content!: Opaque;
    let mAC!: HASH<Opaque>;
    content = _decode_Opaque(sequence[0]);
    mAC = _get_decoder_for_HASH<Opaque>(_decode_Opaque)(sequence[1]);
    return new GenericStreamCipher(
        content,
        mAC,

    );
}; }
    return _cached_decoder_for_GenericStreamCipher(el);
}

let _cached_encoder_for_GenericStreamCipher: $.ASN1Encoder<GenericStreamCipher> | null = null;

/**
 * @summary Encodes a(n) GenericStreamCipher into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericStreamCipher, encoded as an ASN.1 Element.
 */
export
function _encode_GenericStreamCipher (value: GenericStreamCipher, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericStreamCipher) { _cached_encoder_for_GenericStreamCipher = function (value: GenericStreamCipher, elGetter: $.ASN1Encoder<GenericStreamCipher>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Opaque(value.content, $.BER),
            /* REQUIRED   */ _get_encoder_for_HASH<Opaque>(_encode_Opaque)(value.mAC, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenericStreamCipher(value, elGetter);
}


/* eslint-enable */
