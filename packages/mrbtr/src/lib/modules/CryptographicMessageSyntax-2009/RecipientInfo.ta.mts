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
import { KeyTransRecipientInfo, _decode_KeyTransRecipientInfo, _encode_KeyTransRecipientInfo } from "../CryptographicMessageSyntax-2009/KeyTransRecipientInfo.ta.mjs";
// export { KeyTransRecipientInfo, _decode_KeyTransRecipientInfo, _encode_KeyTransRecipientInfo } from "../CryptographicMessageSyntax-2009/KeyTransRecipientInfo.ta.mjs";
import { KeyAgreeRecipientInfo, _decode_KeyAgreeRecipientInfo, _encode_KeyAgreeRecipientInfo } from "../CryptographicMessageSyntax-2009/KeyAgreeRecipientInfo.ta.mjs";
// export { KeyAgreeRecipientInfo, _decode_KeyAgreeRecipientInfo, _encode_KeyAgreeRecipientInfo } from "../CryptographicMessageSyntax-2009/KeyAgreeRecipientInfo.ta.mjs";
import { KEKRecipientInfo, _decode_KEKRecipientInfo, _encode_KEKRecipientInfo } from "../CryptographicMessageSyntax-2009/KEKRecipientInfo.ta.mjs";
// export { KEKRecipientInfo, _decode_KEKRecipientInfo, _encode_KEKRecipientInfo } from "../CryptographicMessageSyntax-2009/KEKRecipientInfo.ta.mjs";
import { PasswordRecipientInfo, _decode_PasswordRecipientInfo, _encode_PasswordRecipientInfo } from "../CryptographicMessageSyntax-2009/PasswordRecipientInfo.ta.mjs";
// export { PasswordRecipientInfo, _decode_PasswordRecipientInfo, _encode_PasswordRecipientInfo } from "../CryptographicMessageSyntax-2009/PasswordRecipientInfo.ta.mjs";
import { OtherRecipientInfo, _decode_OtherRecipientInfo, _encode_OtherRecipientInfo } from "../CryptographicMessageSyntax-2009/OtherRecipientInfo.ta.mjs";
// export { OtherRecipientInfo, _decode_OtherRecipientInfo, _encode_OtherRecipientInfo } from "../CryptographicMessageSyntax-2009/OtherRecipientInfo.ta.mjs";


/**
 * @summary RecipientInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecipientInfo  ::=  CHOICE {
 *     ktri           KeyTransRecipientInfo,
 *     ...,
 *     [[3: kari  [1] KeyAgreeRecipientInfo ]],
 *     [[4: kekri [2] KEKRecipientInfo]],
 *     [[5: pwri  [3] PasswordRecipientInfo,
 *         ori   [4] OtherRecipientInfo ]] }
 * ```
 */
export
type RecipientInfo =
    { ktri: KeyTransRecipientInfo } /* CHOICE_ALT_ROOT */
    | { kari: KeyAgreeRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 3 */
    | { kekri: KEKRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 4 */
    | { pwri: PasswordRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | { ori: OtherRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_RecipientInfo: $.ASN1Decoder<RecipientInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecipientInfo (el: _Element): RecipientInfo {
    if (!_cached_decoder_for_RecipientInfo) { _cached_decoder_for_RecipientInfo = $._decode_extensible_choice<RecipientInfo>({
    "UNIVERSAL 16": [ "ktri", _decode_KeyTransRecipientInfo ],
    "CONTEXT 1": [ "kari", $._decode_implicit<KeyAgreeRecipientInfo>(() => _decode_KeyAgreeRecipientInfo) ],
    "CONTEXT 2": [ "kekri", $._decode_implicit<KEKRecipientInfo>(() => _decode_KEKRecipientInfo) ],
    "CONTEXT 3": [ "pwri", $._decode_implicit<PasswordRecipientInfo>(() => _decode_PasswordRecipientInfo) ],
    "CONTEXT 4": [ "ori", $._decode_implicit<OtherRecipientInfo>(() => _decode_OtherRecipientInfo) ]
}); }
    return _cached_decoder_for_RecipientInfo(el);
}

let _cached_encoder_for_RecipientInfo: $.ASN1Encoder<RecipientInfo> | null = null;

/**
 * @summary Encodes a(n) RecipientInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RecipientInfo (value: RecipientInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecipientInfo) { _cached_encoder_for_RecipientInfo = $._encode_choice<RecipientInfo>({
    "ktri": _encode_KeyTransRecipientInfo,
    "kari": $._encode_implicit(_TagClass.context, 1, () => _encode_KeyAgreeRecipientInfo, $.BER),
    "kekri": $._encode_implicit(_TagClass.context, 2, () => _encode_KEKRecipientInfo, $.BER),
    "pwri": $._encode_implicit(_TagClass.context, 3, () => _encode_PasswordRecipientInfo, $.BER),
    "ori": $._encode_implicit(_TagClass.context, 4, () => _encode_OtherRecipientInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}


/* eslint-enable */
