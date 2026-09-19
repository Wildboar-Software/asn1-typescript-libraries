/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";


/**
 * @summary EimPackageErrorWithCid_correlationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageErrorWithCid-correlationId ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EimPackageErrorWithCid_correlationId =
    { eimTransactionId: TransactionId } /* CHOICE_ALT_ROOT */
    | { eidValue: Octet16 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EimPackageErrorWithCid_correlationId: $.ASN1Decoder<EimPackageErrorWithCid_correlationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimPackageErrorWithCid_correlationId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimPackageErrorWithCid_correlationId (el: _Element): EimPackageErrorWithCid_correlationId {
    if (!_cached_decoder_for_EimPackageErrorWithCid_correlationId) { _cached_decoder_for_EimPackageErrorWithCid_correlationId = $._decode_inextensible_choice<EimPackageErrorWithCid_correlationId>({
    "CONTEXT 0": [ "eimTransactionId", $._decode_implicit<TransactionId>(() => _decode_TransactionId) ],
    "APPLICATION 26": [ "eidValue", $._decode_implicit<Octet16>(() => _decode_Octet16) ]
}); }
    return _cached_decoder_for_EimPackageErrorWithCid_correlationId(el);
}

let _cached_encoder_for_EimPackageErrorWithCid_correlationId: $.ASN1Encoder<EimPackageErrorWithCid_correlationId> | null = null;

/**
 * @summary Encodes a(n) EimPackageErrorWithCid_correlationId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimPackageErrorWithCid_correlationId, encoded as an ASN.1 Element.
 */
export
function _encode_EimPackageErrorWithCid_correlationId (value: EimPackageErrorWithCid_correlationId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimPackageErrorWithCid_correlationId) { _cached_encoder_for_EimPackageErrorWithCid_correlationId = $._encode_choice<EimPackageErrorWithCid_correlationId>({
    "eimTransactionId": $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER),
    "eidValue": $._encode_implicit(_TagClass.application, 26, () => _encode_Octet16, $.BER),
}, $.BER); }
    return _cached_encoder_for_EimPackageErrorWithCid_correlationId(value, elGetter);
}


/* eslint-enable */
