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
import { ENCRYPTED, _get_decoder_for_ENCRYPTED, _get_encoder_for_ENCRYPTED } from "../TSM/ENCRYPTED.ta.mjs";
// export { ENCRYPTED, _get_decoder_for_ENCRYPTED, _get_encoder_for_ENCRYPTED } from "../TSM/ENCRYPTED.ta.mjs";
import { PreMasterSecret, _decode_PreMasterSecret, _encode_PreMasterSecret } from "../TSM/PreMasterSecret.ta.mjs";
// export { PreMasterSecret, _decode_PreMasterSecret, _encode_PreMasterSecret } from "../TSM/PreMasterSecret.ta.mjs";


/**
 * @summary EncryptedPreMasterSecret
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptedPreMasterSecret     ::=     ENCRYPTED{PreMasterSecret}
 * ```
 */
export
type EncryptedPreMasterSecret = ENCRYPTED<PreMasterSecret>; // DefinedType

let _cached_decoder_for_EncryptedPreMasterSecret: $.ASN1Decoder<EncryptedPreMasterSecret> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPreMasterSecret
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptedPreMasterSecret (el: _Element): EncryptedPreMasterSecret {
    if (!_cached_decoder_for_EncryptedPreMasterSecret) { _cached_decoder_for_EncryptedPreMasterSecret = _get_decoder_for_ENCRYPTED<PreMasterSecret>(_decode_PreMasterSecret); }
    return _cached_decoder_for_EncryptedPreMasterSecret(el);
}

let _cached_encoder_for_EncryptedPreMasterSecret: $.ASN1Encoder<EncryptedPreMasterSecret> | null = null;

/**
 * @summary Encodes a(n) EncryptedPreMasterSecret into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPreMasterSecret, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptedPreMasterSecret (value: EncryptedPreMasterSecret, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptedPreMasterSecret) { _cached_encoder_for_EncryptedPreMasterSecret = _get_encoder_for_ENCRYPTED<PreMasterSecret>(_encode_PreMasterSecret); }
    return _cached_encoder_for_EncryptedPreMasterSecret(value, elGetter);
}


/* eslint-enable */
