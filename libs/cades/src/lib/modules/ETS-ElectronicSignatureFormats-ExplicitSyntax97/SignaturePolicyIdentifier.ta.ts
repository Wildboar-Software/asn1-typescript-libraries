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
import { SignaturePolicyId, _decode_SignaturePolicyId, _encode_SignaturePolicyId } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignaturePolicyId.ta";
export { SignaturePolicyId, _decode_SignaturePolicyId, _encode_SignaturePolicyId } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignaturePolicyId.ta";
import { SignaturePolicyImplied, _decode_SignaturePolicyImplied, _encode_SignaturePolicyImplied } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignaturePolicyImplied.ta";
export { SignaturePolicyImplied, _decode_SignaturePolicyImplied, _encode_SignaturePolicyImplied } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignaturePolicyImplied.ta";


/* START_OF_SYMBOL_DEFINITION SignaturePolicyIdentifier */
/**
 * @summary SignaturePolicyIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignaturePolicyIdentifier  ::=  CHOICE {
 *     signaturePolicyId           SignaturePolicyId,
 *     signaturePolicyImplied      SignaturePolicyImplied
 *     -- not used in this version
 *     }
 * ```
 */
export
type SignaturePolicyIdentifier =
    { signaturePolicyId: SignaturePolicyId } /* CHOICE_ALT_ROOT */
    | { signaturePolicyImplied: SignaturePolicyImplied } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SignaturePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignaturePolicyIdentifier */
let _cached_decoder_for_SignaturePolicyIdentifier: $.ASN1Decoder<SignaturePolicyIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignaturePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_SignaturePolicyIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) SignaturePolicyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignaturePolicyIdentifier} The decoded data structure.
 */
export
function _decode_SignaturePolicyIdentifier (el: _Element) {
    if (!_cached_decoder_for_SignaturePolicyIdentifier) { _cached_decoder_for_SignaturePolicyIdentifier = $._decode_inextensible_choice<SignaturePolicyIdentifier>({
    "UNIVERSAL 16": [ "signaturePolicyId", _decode_SignaturePolicyId ],
    "UNIVERSAL 5": [ "signaturePolicyImplied", _decode_SignaturePolicyImplied ]
}); }
    return _cached_decoder_for_SignaturePolicyIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignaturePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignaturePolicyIdentifier */
let _cached_encoder_for_SignaturePolicyIdentifier: $.ASN1Encoder<SignaturePolicyIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignaturePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_SignaturePolicyIdentifier */
/**
 * @summary Encodes a(n) SignaturePolicyIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignaturePolicyIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SignaturePolicyIdentifier (value: SignaturePolicyIdentifier, elGetter: $.ASN1Encoder<SignaturePolicyIdentifier>) {
    if (!_cached_encoder_for_SignaturePolicyIdentifier) { _cached_encoder_for_SignaturePolicyIdentifier = $._encode_choice<SignaturePolicyIdentifier>({
    "signaturePolicyId": _encode_SignaturePolicyId,
    "signaturePolicyImplied": _encode_SignaturePolicyImplied,
}, $.BER); }
    return _cached_encoder_for_SignaturePolicyIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignaturePolicyIdentifier */

/* eslint-enable */
