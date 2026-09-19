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
import { CompactAuthenticateResponseOk_signedData, _decode_CompactAuthenticateResponseOk_signedData, _encode_CompactAuthenticateResponseOk_signedData } from "../SGP32Definitions/CompactAuthenticateResponseOk-signedData.ta.mjs";
// export { CompactAuthenticateResponseOk_signedData, _decode_CompactAuthenticateResponseOk_signedData, _encode_CompactAuthenticateResponseOk_signedData } from "../SGP32Definitions/CompactAuthenticateResponseOk-signedData.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";


/**
 * @summary CompactAuthenticateResponseOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactAuthenticateResponseOk ::= SEQUENCE {
 *     signedData CHOICE {
 *         euiccSigned1 EuiccSigned1,
 *         compactEuiccSigned1 [0] CompactEuiccSigned1 -- Compact version of EuiccSigned1
 *     },
 *     euiccSignature1 [APPLICATION 55] OCTET STRING, -- tag 5F37 signature on EuiccSigned1
 *     euiccCertificate [1] Certificate OPTIONAL, -- eUICC Certificate (CERT.EUICC.ECDSA)
 *     eumCertificate [2] Certificate OPTIONAL -- EUM Certificate (CERT.EUM.ECDSA)
 * }
 * ```
 * 
 * @class
 */
export
class CompactAuthenticateResponseOk {
    constructor (
        /**
         * @summary `signedData`.
         * @public
         * @readonly
         */
        readonly signedData: CompactAuthenticateResponseOk_signedData,
        /**
         * @summary `euiccSignature1`.
         * @public
         * @readonly
         */
        readonly euiccSignature1: OCTET_STRING,
        /**
         * @summary `euiccCertificate`.
         * @public
         * @readonly
         */
        readonly euiccCertificate: OPTIONAL<Certificate>,
        /**
         * @summary `eumCertificate`.
         * @public
         * @readonly
         */
        readonly eumCertificate: OPTIONAL<Certificate>
    ) {}

    /**
     * @summary Restructures an object into a CompactAuthenticateResponseOk
     * @description
     * 
     * This takes an `object` and converts it to a `CompactAuthenticateResponseOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactAuthenticateResponseOk`.
     * @returns {CompactAuthenticateResponseOk}
     */
    public static _from_object (_o: { [_K in keyof (CompactAuthenticateResponseOk)]: (CompactAuthenticateResponseOk)[_K] }): CompactAuthenticateResponseOk {
        return new CompactAuthenticateResponseOk(_o.signedData, _o.euiccSignature1, _o.euiccCertificate, _o.eumCertificate);
    }


}

/**
 * @summary The Leading Root Component Types of CompactAuthenticateResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactAuthenticateResponseOk: $.ComponentSpec[] = [
    new $.ComponentSpec("signedData", false, $.hasAnyTag),
    new $.ComponentSpec("euiccSignature1", false, $.hasTag(_TagClass.application, 55)),
    new $.ComponentSpec("euiccCertificate", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eumCertificate", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CompactAuthenticateResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactAuthenticateResponseOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactAuthenticateResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactAuthenticateResponseOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactAuthenticateResponseOk: $.ASN1Decoder<CompactAuthenticateResponseOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactAuthenticateResponseOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactAuthenticateResponseOk (el: _Element): CompactAuthenticateResponseOk {
    if (!_cached_decoder_for_CompactAuthenticateResponseOk) { _cached_decoder_for_CompactAuthenticateResponseOk = function (el: _Element): CompactAuthenticateResponseOk {
    let signedData!: CompactAuthenticateResponseOk_signedData;
    let euiccSignature1!: OCTET_STRING;
    let euiccCertificate: OPTIONAL<Certificate>;
    let eumCertificate: OPTIONAL<Certificate>;
    const callbacks: $.DecodingMap = {
        "signedData": (_el: _Element): void => { signedData = _decode_CompactAuthenticateResponseOk_signedData(_el); },
        "euiccSignature1": (_el: _Element): void => { euiccSignature1 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "euiccCertificate": (_el: _Element): void => { euiccCertificate = $._decode_implicit<Certificate>(() => _decode_Certificate)(_el); },
        "eumCertificate": (_el: _Element): void => { eumCertificate = $._decode_implicit<Certificate>(() => _decode_Certificate)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompactAuthenticateResponseOk,
        _extension_additions_list_spec_for_CompactAuthenticateResponseOk,
        _root_component_type_list_2_spec_for_CompactAuthenticateResponseOk,
        undefined,
    );
    return new CompactAuthenticateResponseOk(
        signedData,
        euiccSignature1,
        euiccCertificate,
        eumCertificate
    );
}; }
    return _cached_decoder_for_CompactAuthenticateResponseOk(el);
}

let _cached_encoder_for_CompactAuthenticateResponseOk: $.ASN1Encoder<CompactAuthenticateResponseOk> | null = null;

/**
 * @summary Encodes a(n) CompactAuthenticateResponseOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactAuthenticateResponseOk, encoded as an ASN.1 Element.
 */
export
function _encode_CompactAuthenticateResponseOk (value: CompactAuthenticateResponseOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactAuthenticateResponseOk) { _cached_encoder_for_CompactAuthenticateResponseOk = function (value: CompactAuthenticateResponseOk, elGetter: $.ASN1Encoder<CompactAuthenticateResponseOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CompactAuthenticateResponseOk_signedData(value.signedData, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccSignature1, $.BER),
            /* IF_ABSENT  */ ((value.euiccCertificate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Certificate, $.BER)(value.euiccCertificate, $.BER)),
            /* IF_ABSENT  */ ((value.eumCertificate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Certificate, $.BER)(value.eumCertificate, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactAuthenticateResponseOk(value, elGetter);
}


/* eslint-enable */
