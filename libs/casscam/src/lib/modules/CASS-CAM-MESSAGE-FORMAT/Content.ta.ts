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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION Content */
/**
 * @summary Content
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Content ::= SEQUENCE {
 *     cHK        OCTET STRING(SIZE (20)),
 *     iHK        OCTET STRING(SIZE (20)),
 *     rAND-AC-1  OCTET STRING(SIZE (16)),
 *     rAND-AC-2  OCTET STRING(SIZE (16)),
 *     rAND-AC-3  OCTET STRING(SIZE (16)),
 *     kPK        OCTET STRING(SIZE (20)) }
 * ```
 * 
 * @class
 */
export
class Content {
    constructor (
        /**
         * @summary `cHK`.
         * @public
         * @readonly
         */
        readonly cHK: OCTET_STRING,
        /**
         * @summary `iHK`.
         * @public
         * @readonly
         */
        readonly iHK: OCTET_STRING,
        /**
         * @summary `rAND_AC_1`.
         * @public
         * @readonly
         */
        readonly rAND_AC_1: OCTET_STRING,
        /**
         * @summary `rAND_AC_2`.
         * @public
         * @readonly
         */
        readonly rAND_AC_2: OCTET_STRING,
        /**
         * @summary `rAND_AC_3`.
         * @public
         * @readonly
         */
        readonly rAND_AC_3: OCTET_STRING,
        /**
         * @summary `kPK`.
         * @public
         * @readonly
         */
        readonly kPK: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a Content
     * @description
     * 
     * This takes an `object` and converts it to a `Content`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Content`.
     * @returns {Content}
     */
    public static _from_object (_o: { [_K in keyof (Content)]: (Content)[_K] }): Content {
        return new Content(_o.cHK, _o.iHK, _o.rAND_AC_1, _o.rAND_AC_2, _o.rAND_AC_3, _o.kPK);
    }


}
/* END_OF_SYMBOL_DEFINITION Content */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Content */
/**
 * @summary The Leading Root Component Types of Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Content: $.ComponentSpec[] = [
    new $.ComponentSpec("cHK", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("iHK", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("rAND-AC-1", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("rAND-AC-2", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("rAND-AC-3", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("kPK", false, $.hasTag(_TagClass.context, 5), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Content */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Content */
/**
 * @summary The Trailing Root Component Types of Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Content: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Content */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Content */
/**
 * @summary The Extension Addition Component Types of Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Content: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Content */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Content */
let _cached_decoder_for_Content: $.ASN1Decoder<Content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Content */

/* START_OF_SYMBOL_DEFINITION _decode_Content */
/**
 * @summary Decodes an ASN.1 element into a(n) Content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Content} The decoded data structure.
 */
export
function _decode_Content (el: _Element) {
    if (!_cached_decoder_for_Content) { _cached_decoder_for_Content = function (el: _Element): Content {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("Content contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cHK";
    sequence[1].name = "iHK";
    sequence[2].name = "rAND-AC-1";
    sequence[3].name = "rAND-AC-2";
    sequence[4].name = "rAND-AC-3";
    sequence[5].name = "kPK";
    let cHK!: OCTET_STRING;
    let iHK!: OCTET_STRING;
    let rAND_AC_1!: OCTET_STRING;
    let rAND_AC_2!: OCTET_STRING;
    let rAND_AC_3!: OCTET_STRING;
    let kPK!: OCTET_STRING;
    cHK = $._decodeOctetString(sequence[0]);
    iHK = $._decodeOctetString(sequence[1]);
    rAND_AC_1 = $._decodeOctetString(sequence[2]);
    rAND_AC_2 = $._decodeOctetString(sequence[3]);
    rAND_AC_3 = $._decodeOctetString(sequence[4]);
    kPK = $._decodeOctetString(sequence[5]);
    return new Content(
        cHK,
        iHK,
        rAND_AC_1,
        rAND_AC_2,
        rAND_AC_3,
        kPK,

    );
}; }
    return _cached_decoder_for_Content(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Content */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Content */
let _cached_encoder_for_Content: $.ASN1Encoder<Content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Content */

/* START_OF_SYMBOL_DEFINITION _encode_Content */
/**
 * @summary Encodes a(n) Content into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Content, encoded as an ASN.1 Element.
 */
export
function _encode_Content (value: Content, elGetter: $.ASN1Encoder<Content>) {
    if (!_cached_encoder_for_Content) { _cached_encoder_for_Content = function (value: Content, elGetter: $.ASN1Encoder<Content>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.cHK, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.iHK, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.rAND_AC_1, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.rAND_AC_2, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.rAND_AC_3, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.kPK, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Content(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Content */

/* eslint-enable */
