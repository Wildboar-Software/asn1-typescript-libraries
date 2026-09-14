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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { alg_id_sha1 } from "../CryptographicInformationFramework/alg-id-sha1.va.mjs";
// export { alg_id_sha1 } from "../CryptographicInformationFramework/alg-id-sha1.va.mjs";


/**
 * @summary DigestInfoWithDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigestInfoWithDefault ::= SEQUENCE {
 *     digestAlg   AlgorithmIdentifier {{DigestAlgorithms}} DEFAULT alg-id-sha1,
 *     digest      OCTET STRING (SIZE(8..128))
 * }
 * ```
 * 
 * @class
 */
export
class DigestInfoWithDefault {
    constructor (
        /**
         * @summary `digestAlg`.
         * @public
         * @readonly
         */
        readonly digestAlg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `digest`.
         * @public
         * @readonly
         */
        readonly digest: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DigestInfoWithDefault
     * @description
     * 
     * This takes an `object` and converts it to a `DigestInfoWithDefault`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigestInfoWithDefault`.
     * @returns {DigestInfoWithDefault}
     */
    public static _from_object (_o: { [_K in keyof (DigestInfoWithDefault)]: (DigestInfoWithDefault)[_K] }): DigestInfoWithDefault {
        return new DigestInfoWithDefault(_o.digestAlg, _o.digest);
    }

    /**
     * @summary Getter that returns the default value for `digestAlg`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_digestAlg () { return alg_id_sha1; }
}

/**
 * @summary The Leading Root Component Types of DigestInfoWithDefault
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigestInfoWithDefault: $.ComponentSpec[] = [
    new $.ComponentSpec("digestAlg", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("digest", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of DigestInfoWithDefault
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigestInfoWithDefault: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigestInfoWithDefault
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigestInfoWithDefault: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DigestInfoWithDefault: $.ASN1Decoder<DigestInfoWithDefault> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigestInfoWithDefault
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigestInfoWithDefault (el: _Element): DigestInfoWithDefault {
    if (!_cached_decoder_for_DigestInfoWithDefault) { _cached_decoder_for_DigestInfoWithDefault = function (el: _Element): DigestInfoWithDefault {
    let digestAlg: OPTIONAL<AlgorithmIdentifier> = DigestInfoWithDefault._default_value_for_digestAlg;
    let digest!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "digestAlg": (_el: _Element): void => { digestAlg = _decode_AlgorithmIdentifier(_el); },
        "digest": (_el: _Element): void => { digest = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DigestInfoWithDefault,
        _extension_additions_list_spec_for_DigestInfoWithDefault,
        _root_component_type_list_2_spec_for_DigestInfoWithDefault,
        undefined,
    );
    return new DigestInfoWithDefault(
        digestAlg,
        digest
    );
}; }
    return _cached_decoder_for_DigestInfoWithDefault(el);
}

let _cached_encoder_for_DigestInfoWithDefault: $.ASN1Encoder<DigestInfoWithDefault> | null = null;

/**
 * @summary Encodes a(n) DigestInfoWithDefault into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestInfoWithDefault, encoded as an ASN.1 Element.
 */
export
function _encode_DigestInfoWithDefault (value: DigestInfoWithDefault, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigestInfoWithDefault) { _cached_encoder_for_DigestInfoWithDefault = function (value: DigestInfoWithDefault, elGetter: $.ASN1Encoder<DigestInfoWithDefault>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.digestAlg === undefined || $.deepEq(value.digestAlg, DigestInfoWithDefault._default_value_for_digestAlg) ? undefined : _encode_AlgorithmIdentifier(value.digestAlg, $.BER)),
            /* REQUIRED   */ $._encodeOctetString(value.digest, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigestInfoWithDefault(value, elGetter);
}


/* eslint-enable */
