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
import { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
// export { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
import { ActionReply, _decode_ActionReply, _encode_ActionReply } from "../MEDIA-GATEWAY-CONTROL/ActionReply.ta.mjs";
// export { ActionReply, _decode_ActionReply, _encode_ActionReply } from "../MEDIA-GATEWAY-CONTROL/ActionReply.ta.mjs";


/**
 * @summary TransactionReply_transactionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionReply-transactionResult ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TransactionReply_transactionResult =
    { transactionError: ErrorDescriptor } /* CHOICE_ALT_ROOT */
    | { actionReplies: ActionReply[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TransactionReply_transactionResult: $.ASN1Decoder<TransactionReply_transactionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransactionReply_transactionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransactionReply_transactionResult (el: _Element): TransactionReply_transactionResult {
    if (!_cached_decoder_for_TransactionReply_transactionResult) { _cached_decoder_for_TransactionReply_transactionResult = $._decode_inextensible_choice<TransactionReply_transactionResult>({
    "CONTEXT 0": [ "transactionError", $._decode_implicit<ErrorDescriptor>(() => _decode_ErrorDescriptor) ],
    "CONTEXT 1": [ "actionReplies", $._decode_implicit<ActionReply[]>(() => $._decodeSequenceOf<ActionReply>(() => _decode_ActionReply)) ]
}); }
    return _cached_decoder_for_TransactionReply_transactionResult(el);
}

let _cached_encoder_for_TransactionReply_transactionResult: $.ASN1Encoder<TransactionReply_transactionResult> | null = null;

/**
 * @summary Encodes a(n) TransactionReply_transactionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransactionReply_transactionResult, encoded as an ASN.1 Element.
 */
export
function _encode_TransactionReply_transactionResult (value: TransactionReply_transactionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransactionReply_transactionResult) { _cached_encoder_for_TransactionReply_transactionResult = $._encode_choice<TransactionReply_transactionResult>({
    "transactionError": $._encode_implicit(_TagClass.context, 0, () => _encode_ErrorDescriptor, $.BER),
    "actionReplies": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ActionReply>(() => _encode_ActionReply, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_TransactionReply_transactionResult(value, elGetter);
}


/* eslint-enable */
