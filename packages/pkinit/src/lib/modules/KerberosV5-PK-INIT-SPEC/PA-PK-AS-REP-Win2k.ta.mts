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
import { PA_PK_AS_REP, _decode_PA_PK_AS_REP, _encode_PA_PK_AS_REP } from "../KerberosV5-PK-INIT-SPEC/PA-PK-AS-REP.ta.mjs";
// export { PA_PK_AS_REP, _decode_PA_PK_AS_REP, _encode_PA_PK_AS_REP } from "../KerberosV5-PK-INIT-SPEC/PA-PK-AS-REP.ta.mjs";


/**
 * @summary PA_PK_AS_REP_Win2k
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PA-PK-AS-REP-Win2k  ::=  PA-PK-AS-REP
 * ```
 */
export
type PA_PK_AS_REP_Win2k = PA_PK_AS_REP; // DefinedType

let _cached_decoder_for_PA_PK_AS_REP_Win2k: $.ASN1Decoder<PA_PK_AS_REP_Win2k> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PA_PK_AS_REP_Win2k
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PA_PK_AS_REP_Win2k (el: _Element): PA_PK_AS_REP_Win2k {
    if (!_cached_decoder_for_PA_PK_AS_REP_Win2k) { _cached_decoder_for_PA_PK_AS_REP_Win2k = _decode_PA_PK_AS_REP; }
    return _cached_decoder_for_PA_PK_AS_REP_Win2k(el);
}

let _cached_encoder_for_PA_PK_AS_REP_Win2k: $.ASN1Encoder<PA_PK_AS_REP_Win2k> | null = null;

/**
 * @summary Encodes a(n) PA_PK_AS_REP_Win2k into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_PK_AS_REP_Win2k, encoded as an ASN.1 Element.
 */
export
function _encode_PA_PK_AS_REP_Win2k (value: PA_PK_AS_REP_Win2k, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PA_PK_AS_REP_Win2k) { _cached_encoder_for_PA_PK_AS_REP_Win2k = _encode_PA_PK_AS_REP; }
    return _cached_encoder_for_PA_PK_AS_REP_Win2k(value, elGetter);
}


/* eslint-enable */
