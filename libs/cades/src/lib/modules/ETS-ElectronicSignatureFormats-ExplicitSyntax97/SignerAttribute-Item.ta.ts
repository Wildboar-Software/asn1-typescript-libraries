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
import { ClaimedAttributes, _decode_ClaimedAttributes, _encode_ClaimedAttributes } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/ClaimedAttributes.ta";
export { ClaimedAttributes, _decode_ClaimedAttributes, _encode_ClaimedAttributes } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/ClaimedAttributes.ta";
import { CertifiedAttributes, _decode_CertifiedAttributes, _encode_CertifiedAttributes } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CertifiedAttributes.ta";
export { CertifiedAttributes, _decode_CertifiedAttributes, _encode_CertifiedAttributes } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CertifiedAttributes.ta";


/* START_OF_SYMBOL_DEFINITION SignerAttribute_Item */
/**
 * @summary SignerAttribute_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignerAttribute-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SignerAttribute_Item =
    { claimedAttributes: ClaimedAttributes } /* CHOICE_ALT_ROOT */
    | { certifiedAttributes: CertifiedAttributes } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SignerAttribute_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerAttribute_Item */
let _cached_decoder_for_SignerAttribute_Item: $.ASN1Decoder<SignerAttribute_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerAttribute_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SignerAttribute_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SignerAttribute_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerAttribute_Item} The decoded data structure.
 */
export
function _decode_SignerAttribute_Item (el: _Element) {
    if (!_cached_decoder_for_SignerAttribute_Item) { _cached_decoder_for_SignerAttribute_Item = $._decode_inextensible_choice<SignerAttribute_Item>({
    "CONTEXT 0": [ "claimedAttributes", $._decode_implicit<ClaimedAttributes>(() => _decode_ClaimedAttributes) ],
    "CONTEXT 1": [ "certifiedAttributes", $._decode_implicit<CertifiedAttributes>(() => _decode_CertifiedAttributes) ]
}); }
    return _cached_decoder_for_SignerAttribute_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignerAttribute_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerAttribute_Item */
let _cached_encoder_for_SignerAttribute_Item: $.ASN1Encoder<SignerAttribute_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerAttribute_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SignerAttribute_Item */
/**
 * @summary Encodes a(n) SignerAttribute_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerAttribute_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SignerAttribute_Item (value: SignerAttribute_Item, elGetter: $.ASN1Encoder<SignerAttribute_Item>) {
    if (!_cached_encoder_for_SignerAttribute_Item) { _cached_encoder_for_SignerAttribute_Item = $._encode_choice<SignerAttribute_Item>({
    "claimedAttributes": $._encode_implicit(_TagClass.context, 0, () => _encode_ClaimedAttributes, $.BER),
    "certifiedAttributes": $._encode_implicit(_TagClass.context, 1, () => _encode_CertifiedAttributes, $.BER),
}, $.BER); }
    return _cached_encoder_for_SignerAttribute_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignerAttribute_Item */

/* eslint-enable */
