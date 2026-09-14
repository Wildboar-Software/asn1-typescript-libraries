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
import { CertId, _decode_CertId, _encode_CertId } from "../CryptographicInformationFramework/CertId.ta.mjs";
// export { CertId, _decode_CertId, _encode_CertId } from "../CryptographicInformationFramework/CertId.ta.mjs";


/**
 * @summary CertHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertHash ::= SEQUENCE {
 *     hashAlg [0] EXPLICIT AlgorithmIdentifier OPTIONAL,
 *     certId   [1] EXPLICIT CertId OPTIONAL,
 *     hashVal BIT STRING
 * }(CONSTRAINED BY {-- hashVal is calculated over the whole DER-encoded certificate --})
 * ```
 * 
 * @class
 */
export
class CertHash {
    constructor (
        /**
         * @summary `hashAlg`.
         * @public
         * @readonly
         */
        readonly hashAlg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `certId`.
         * @public
         * @readonly
         */
        readonly certId: OPTIONAL<CertId>,
        /**
         * @summary `hashVal`.
         * @public
         * @readonly
         */
        readonly hashVal: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a CertHash
     * @description
     * 
     * This takes an `object` and converts it to a `CertHash`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertHash`.
     * @returns {CertHash}
     */
    public static _from_object (_o: { [_K in keyof (CertHash)]: (CertHash)[_K] }): CertHash {
        return new CertHash(_o.hashAlg, _o.certId, _o.hashVal);
    }


}

/**
 * @summary The Leading Root Component Types of CertHash
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertHash: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlg", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("certId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("hashVal", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of CertHash
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertHash: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertHash
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertHash: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertHash: $.ASN1Decoder<CertHash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertHash
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertHash (el: _Element): CertHash {
    if (!_cached_decoder_for_CertHash) { _cached_decoder_for_CertHash = function (el: _Element): CertHash {
    let hashAlg: OPTIONAL<AlgorithmIdentifier>;
    let certId: OPTIONAL<CertId>;
    let hashVal!: BIT_STRING;
    const callbacks: $.DecodingMap = {
        "hashAlg": (_el: _Element): void => { hashAlg = $._decode_explicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "certId": (_el: _Element): void => { certId = $._decode_explicit<CertId>(() => _decode_CertId)(_el); },
        "hashVal": (_el: _Element): void => { hashVal = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertHash,
        _extension_additions_list_spec_for_CertHash,
        _root_component_type_list_2_spec_for_CertHash,
        undefined,
    );
    return new CertHash(
        hashAlg,
        certId,
        hashVal
    );
}; }
    return _cached_decoder_for_CertHash(el);
}

let _cached_encoder_for_CertHash: $.ASN1Encoder<CertHash> | null = null;

/**
 * @summary Encodes a(n) CertHash into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertHash, encoded as an ASN.1 Element.
 */
export
function _encode_CertHash (value: CertHash, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertHash) { _cached_encoder_for_CertHash = function (value: CertHash, elGetter: $.ASN1Encoder<CertHash>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.hashAlg === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_AlgorithmIdentifier, $.BER)(value.hashAlg, $.BER)),
            /* IF_ABSENT  */ ((value.certId === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_CertId, $.BER)(value.certId, $.BER)),
            /* REQUIRED   */ $._encodeBitString(value.hashVal, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertHash(value, elGetter);
}


/* eslint-enable */
