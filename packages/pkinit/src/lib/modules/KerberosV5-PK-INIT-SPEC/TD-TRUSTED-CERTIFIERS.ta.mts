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
import { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";
// export { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";


/**
 * @summary TD_TRUSTED_CERTIFIERS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TD-TRUSTED-CERTIFIERS  ::=  SEQUENCE OF
 *                 ExternalPrincipalIdentifier
 * ```
 */
export
type TD_TRUSTED_CERTIFIERS = ExternalPrincipalIdentifier[]; // SequenceOfType

let _cached_decoder_for_TD_TRUSTED_CERTIFIERS: $.ASN1Decoder<TD_TRUSTED_CERTIFIERS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TD_TRUSTED_CERTIFIERS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TD_TRUSTED_CERTIFIERS (el: _Element): TD_TRUSTED_CERTIFIERS {
    if (!_cached_decoder_for_TD_TRUSTED_CERTIFIERS) { _cached_decoder_for_TD_TRUSTED_CERTIFIERS = $._decodeSequenceOf<ExternalPrincipalIdentifier>(() => _decode_ExternalPrincipalIdentifier); }
    return _cached_decoder_for_TD_TRUSTED_CERTIFIERS(el);
}

let _cached_encoder_for_TD_TRUSTED_CERTIFIERS: $.ASN1Encoder<TD_TRUSTED_CERTIFIERS> | null = null;

/**
 * @summary Encodes a(n) TD_TRUSTED_CERTIFIERS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TD_TRUSTED_CERTIFIERS, encoded as an ASN.1 Element.
 */
export
function _encode_TD_TRUSTED_CERTIFIERS (value: TD_TRUSTED_CERTIFIERS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TD_TRUSTED_CERTIFIERS) { _cached_encoder_for_TD_TRUSTED_CERTIFIERS = $._encodeSequenceOf<ExternalPrincipalIdentifier>(() => _encode_ExternalPrincipalIdentifier, $.BER); }
    return _cached_encoder_for_TD_TRUSTED_CERTIFIERS(value, elGetter);
}


/* eslint-enable */
