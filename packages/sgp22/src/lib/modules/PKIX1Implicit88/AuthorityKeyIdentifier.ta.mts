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
import { KeyIdentifier, _decode_KeyIdentifier, _encode_KeyIdentifier } from "../PKIX1Implicit88/KeyIdentifier.ta.mjs";
// export { KeyIdentifier, _decode_KeyIdentifier, _encode_KeyIdentifier } from "../PKIX1Implicit88/KeyIdentifier.ta.mjs";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../PKIX1Explicit88/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../PKIX1Explicit88/CertificateSerialNumber.ta.mjs";


/**
 * @summary AuthorityKeyIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorityKeyIdentifier ::= SEQUENCE {
 *     keyIdentifier             [0] KeyIdentifier            OPTIONAL,
 *     authorityCertIssuer       [1] GeneralNames             OPTIONAL,
 *     authorityCertSerialNumber [2] CertificateSerialNumber  OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AuthorityKeyIdentifier {
    constructor (
        /**
         * @summary `keyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyIdentifier: OPTIONAL<KeyIdentifier>,
        /**
         * @summary `authorityCertIssuer`.
         * @public
         * @readonly
         */
        readonly authorityCertIssuer: OPTIONAL<GeneralNames>,
        /**
         * @summary `authorityCertSerialNumber`.
         * @public
         * @readonly
         */
        readonly authorityCertSerialNumber: OPTIONAL<CertificateSerialNumber>
    ) {}

    /**
     * @summary Restructures an object into a AuthorityKeyIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `AuthorityKeyIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorityKeyIdentifier`.
     * @returns {AuthorityKeyIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (AuthorityKeyIdentifier)]: (AuthorityKeyIdentifier)[_K] }): AuthorityKeyIdentifier {
        return new AuthorityKeyIdentifier(_o.keyIdentifier, _o.authorityCertIssuer, _o.authorityCertSerialNumber);
    }


}

/**
 * @summary The Leading Root Component Types of AuthorityKeyIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthorityKeyIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("keyIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("authorityCertIssuer", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("authorityCertSerialNumber", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AuthorityKeyIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthorityKeyIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthorityKeyIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthorityKeyIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthorityKeyIdentifier: $.ASN1Decoder<AuthorityKeyIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorityKeyIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthorityKeyIdentifier (el: _Element): AuthorityKeyIdentifier {
    if (!_cached_decoder_for_AuthorityKeyIdentifier) { _cached_decoder_for_AuthorityKeyIdentifier = function (el: _Element): AuthorityKeyIdentifier {
    let keyIdentifier: OPTIONAL<KeyIdentifier>;
    let authorityCertIssuer: OPTIONAL<GeneralNames>;
    let authorityCertSerialNumber: OPTIONAL<CertificateSerialNumber>;
    const callbacks: $.DecodingMap = {
        "keyIdentifier": (_el: _Element): void => { keyIdentifier = $._decode_implicit<KeyIdentifier>(() => _decode_KeyIdentifier)(_el); },
        "authorityCertIssuer": (_el: _Element): void => { authorityCertIssuer = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "authorityCertSerialNumber": (_el: _Element): void => { authorityCertSerialNumber = $._decode_implicit<CertificateSerialNumber>(() => _decode_CertificateSerialNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthorityKeyIdentifier,
        _extension_additions_list_spec_for_AuthorityKeyIdentifier,
        _root_component_type_list_2_spec_for_AuthorityKeyIdentifier,
        undefined,
    );
    return new AuthorityKeyIdentifier(
        keyIdentifier,
        authorityCertIssuer,
        authorityCertSerialNumber
    );
}; }
    return _cached_decoder_for_AuthorityKeyIdentifier(el);
}

let _cached_encoder_for_AuthorityKeyIdentifier: $.ASN1Encoder<AuthorityKeyIdentifier> | null = null;

/**
 * @summary Encodes a(n) AuthorityKeyIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorityKeyIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_AuthorityKeyIdentifier (value: AuthorityKeyIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthorityKeyIdentifier) { _cached_encoder_for_AuthorityKeyIdentifier = function (value: AuthorityKeyIdentifier, elGetter: $.ASN1Encoder<AuthorityKeyIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keyIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_KeyIdentifier, $.BER)(value.keyIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.authorityCertIssuer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GeneralNames, $.BER)(value.authorityCertIssuer, $.BER)),
            /* IF_ABSENT  */ ((value.authorityCertSerialNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CertificateSerialNumber, $.BER)(value.authorityCertSerialNumber, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthorityKeyIdentifier(value, elGetter);
}


/* eslint-enable */
