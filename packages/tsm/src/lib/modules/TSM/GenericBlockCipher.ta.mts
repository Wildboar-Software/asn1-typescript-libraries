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
 * @summary GenericBlockCipher
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericBlockCipher ::= SEQUENCE {
 * content        Opaque(SIZE(0..65535)),
 * mAC        HASH{Opaque},
 * padding        Opaque(SIZE(0..255))
 *         (CONSTRAINED BY {-- each octet contains the number of
 *                                 -- padding octets minus 1 to obtain
 *                      -- a length multiple of block length
 *                      GenericBlockCipher})
 * }
 * ```
 * 
 * @class
 */
export
class GenericBlockCipher {
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
        readonly mAC: HASH<Opaque>,
        /**
         * @summary `padding`.
         * @public
         * @readonly
         */
        readonly padding: Opaque
    ) {}

    /**
     * @summary Restructures an object into a GenericBlockCipher
     * @description
     * 
     * This takes an `object` and converts it to a `GenericBlockCipher`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericBlockCipher`.
     * @returns {GenericBlockCipher}
     */
    public static _from_object (_o: { [_K in keyof (GenericBlockCipher)]: (GenericBlockCipher)[_K] }): GenericBlockCipher {
        return new GenericBlockCipher(_o.content, _o.mAC, _o.padding);
    }


}

/**
 * @summary The Leading Root Component Types of GenericBlockCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericBlockCipher: $.ComponentSpec[] = [
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mAC", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("padding", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GenericBlockCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericBlockCipher: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericBlockCipher
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericBlockCipher: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenericBlockCipher: $.ASN1Decoder<GenericBlockCipher> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericBlockCipher
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericBlockCipher (el: _Element): GenericBlockCipher {
    if (!_cached_decoder_for_GenericBlockCipher) { _cached_decoder_for_GenericBlockCipher = function (el: _Element): GenericBlockCipher {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GenericBlockCipher contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "content";
    sequence[1].name = "mAC";
    sequence[2].name = "padding";
    let content!: Opaque;
    let mAC!: HASH<Opaque>;
    let padding!: Opaque;
    content = _decode_Opaque(sequence[0]);
    mAC = _get_decoder_for_HASH<Opaque>(_decode_Opaque)(sequence[1]);
    padding = _decode_Opaque(sequence[2]);
    return new GenericBlockCipher(
        content,
        mAC,
        padding,

    );
}; }
    return _cached_decoder_for_GenericBlockCipher(el);
}

let _cached_encoder_for_GenericBlockCipher: $.ASN1Encoder<GenericBlockCipher> | null = null;

/**
 * @summary Encodes a(n) GenericBlockCipher into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericBlockCipher, encoded as an ASN.1 Element.
 */
export
function _encode_GenericBlockCipher (value: GenericBlockCipher, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericBlockCipher) { _cached_encoder_for_GenericBlockCipher = function (value: GenericBlockCipher, elGetter: $.ASN1Encoder<GenericBlockCipher>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Opaque(value.content, $.BER),
            /* REQUIRED   */ _get_encoder_for_HASH<Opaque>(_encode_Opaque)(value.mAC, $.BER),
            /* REQUIRED   */ _encode_Opaque(value.padding, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenericBlockCipher(value, elGetter);
}


/* eslint-enable */
