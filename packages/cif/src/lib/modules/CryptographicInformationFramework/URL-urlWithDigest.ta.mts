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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DigestInfoWithDefault, _decode_DigestInfoWithDefault, _encode_DigestInfoWithDefault } from "../CryptographicInformationFramework/DigestInfoWithDefault.ta.mjs";
// export { DigestInfoWithDefault, _decode_DigestInfoWithDefault, _encode_DigestInfoWithDefault } from "../CryptographicInformationFramework/DigestInfoWithDefault.ta.mjs";


/**
 * @summary URL_urlWithDigest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * URL-urlWithDigest ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class URL_urlWithDigest {
    constructor (
        /**
         * @summary `url`.
         * @public
         * @readonly
         */
        readonly url: IA5String,
        /**
         * @summary `digest`.
         * @public
         * @readonly
         */
        readonly digest: DigestInfoWithDefault
    ) {}

    /**
     * @summary Restructures an object into a URL_urlWithDigest
     * @description
     * 
     * This takes an `object` and converts it to a `URL_urlWithDigest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `URL_urlWithDigest`.
     * @returns {URL_urlWithDigest}
     */
    public static _from_object (_o: { [_K in keyof (URL_urlWithDigest)]: (URL_urlWithDigest)[_K] }): URL_urlWithDigest {
        return new URL_urlWithDigest(_o.url, _o.digest);
    }


}

/**
 * @summary The Leading Root Component Types of URL_urlWithDigest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_URL_urlWithDigest: $.ComponentSpec[] = [
    new $.ComponentSpec("url", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("digest", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of URL_urlWithDigest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_URL_urlWithDigest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of URL_urlWithDigest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_URL_urlWithDigest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_URL_urlWithDigest: $.ASN1Decoder<URL_urlWithDigest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) URL_urlWithDigest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_URL_urlWithDigest (el: _Element): URL_urlWithDigest {
    if (!_cached_decoder_for_URL_urlWithDigest) { _cached_decoder_for_URL_urlWithDigest = function (el: _Element): URL_urlWithDigest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("URL-urlWithDigest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "url";
    sequence[1].name = "digest";
    let url!: IA5String;
    let digest!: DigestInfoWithDefault;
    url = $._decodeIA5String(sequence[0]);
    digest = _decode_DigestInfoWithDefault(sequence[1]);
    return new URL_urlWithDigest(
        url,
        digest,

    );
}; }
    return _cached_decoder_for_URL_urlWithDigest(el);
}

let _cached_encoder_for_URL_urlWithDigest: $.ASN1Encoder<URL_urlWithDigest> | null = null;

/**
 * @summary Encodes a(n) URL_urlWithDigest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URL_urlWithDigest, encoded as an ASN.1 Element.
 */
export
function _encode_URL_urlWithDigest (value: URL_urlWithDigest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_URL_urlWithDigest) { _cached_encoder_for_URL_urlWithDigest = function (value: URL_urlWithDigest, elGetter: $.ASN1Encoder<URL_urlWithDigest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.url, $.BER),
            /* REQUIRED   */ _encode_DigestInfoWithDefault(value.digest, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_URL_urlWithDigest(value, elGetter);
}


/* eslint-enable */
