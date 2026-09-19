/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuditResultV1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditResultV1  ::=  CHOICE
 *     {
 *         contectAuditResult        [0] TerminationID,
 *         terminationAuditResult    [1] TerminationAudit
 *     }
 * ```
 */
export
type AuditResultV1 =
    { contectAuditResult: TerminationID } /* CHOICE_ALT_ROOT */
    | { terminationAuditResult: TerminationAudit } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuditResultV1: $.ASN1Decoder<AuditResultV1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditResultV1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditResultV1 (el: _Element): AuditResultV1 {
    if (!_cached_decoder_for_AuditResultV1) { _cached_decoder_for_AuditResultV1 = $._decode_inextensible_choice<AuditResultV1>({
    "CONTEXT 0": [ "contectAuditResult", $._decode_implicit<TerminationID>(() => _decode_TerminationID) ],
    "CONTEXT 1": [ "terminationAuditResult", $._decode_implicit<TerminationAudit>(() => _decode_TerminationAudit) ]
}); }
    return _cached_decoder_for_AuditResultV1(el);
}

let _cached_encoder_for_AuditResultV1: $.ASN1Encoder<AuditResultV1> | null = null;

/**
 * @summary Encodes a(n) AuditResultV1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditResultV1, encoded as an ASN.1 Element.
 */
export
function _encode_AuditResultV1 (value: AuditResultV1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditResultV1) { _cached_encoder_for_AuditResultV1 = $._encode_choice<AuditResultV1>({
    "contectAuditResult": $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationID, $.BER),
    "terminationAuditResult": $._encode_implicit(_TagClass.context, 1, () => _encode_TerminationAudit, $.BER),
}, $.BER); }
    return _cached_encoder_for_AuditResultV1(value, elGetter);
}


/* eslint-enable */
