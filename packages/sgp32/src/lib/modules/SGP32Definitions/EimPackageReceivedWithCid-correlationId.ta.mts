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
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";


/**
 * @summary EimPackageReceivedWithCid_correlationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageReceivedWithCid-correlationId ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EimPackageReceivedWithCid_correlationId =
    { eimTransactionId: TransactionId } /* CHOICE_ALT_ROOT */
    | { eidValue: Octet16 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EimPackageReceivedWithCid_correlationId: $.ASN1Decoder<EimPackageReceivedWithCid_correlationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimPackageReceivedWithCid_correlationId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimPackageReceivedWithCid_correlationId (el: _Element): EimPackageReceivedWithCid_correlationId {
    if (!_cached_decoder_for_EimPackageReceivedWithCid_correlationId) { _cached_decoder_for_EimPackageReceivedWithCid_correlationId = $._decode_inextensible_choice<EimPackageReceivedWithCid_correlationId>({
    "CONTEXT 0": [ "eimTransactionId", $._decode_implicit<TransactionId>(() => _decode_TransactionId) ],
    "APPLICATION 26": [ "eidValue", $._decode_implicit<Octet16>(() => _decode_Octet16) ]
}); }
    return _cached_decoder_for_EimPackageReceivedWithCid_correlationId(el);
}

let _cached_encoder_for_EimPackageReceivedWithCid_correlationId: $.ASN1Encoder<EimPackageReceivedWithCid_correlationId> | null = null;

/**
 * @summary Encodes a(n) EimPackageReceivedWithCid_correlationId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimPackageReceivedWithCid_correlationId, encoded as an ASN.1 Element.
 */
export
function _encode_EimPackageReceivedWithCid_correlationId (value: EimPackageReceivedWithCid_correlationId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimPackageReceivedWithCid_correlationId) { _cached_encoder_for_EimPackageReceivedWithCid_correlationId = $._encode_choice<EimPackageReceivedWithCid_correlationId>({
    "eimTransactionId": $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER),
    "eidValue": $._encode_implicit(_TagClass.application, 26, () => _encode_Octet16, $.BER),
}, $.BER); }
    return _cached_encoder_for_EimPackageReceivedWithCid_correlationId(value, elGetter);
}


/* eslint-enable */
