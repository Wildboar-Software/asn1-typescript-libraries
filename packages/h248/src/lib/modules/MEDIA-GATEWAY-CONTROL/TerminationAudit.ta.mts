/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuditReturnParameter, _decode_AuditReturnParameter, _encode_AuditReturnParameter } from "../MEDIA-GATEWAY-CONTROL/AuditReturnParameter.ta.mjs";
// export { AuditReturnParameter, _decode_AuditReturnParameter, _encode_AuditReturnParameter } from "../MEDIA-GATEWAY-CONTROL/AuditReturnParameter.ta.mjs";


/**
 * @summary TerminationAudit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationAudit  ::=  SEQUENCE OF AuditReturnParameter
 * ```
 */
export
type TerminationAudit = AuditReturnParameter[]; // SequenceOfType

let _cached_decoder_for_TerminationAudit: $.ASN1Decoder<TerminationAudit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationAudit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminationAudit (el: _Element): TerminationAudit {
    if (!_cached_decoder_for_TerminationAudit) { _cached_decoder_for_TerminationAudit = $._decodeSequenceOf<AuditReturnParameter>(() => _decode_AuditReturnParameter); }
    return _cached_decoder_for_TerminationAudit(el);
}

let _cached_encoder_for_TerminationAudit: $.ASN1Encoder<TerminationAudit> | null = null;

/**
 * @summary Encodes a(n) TerminationAudit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationAudit, encoded as an ASN.1 Element.
 */
export
function _encode_TerminationAudit (value: TerminationAudit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminationAudit) { _cached_encoder_for_TerminationAudit = $._encodeSequenceOf<AuditReturnParameter>(() => _encode_AuditReturnParameter, $.BER); }
    return _cached_encoder_for_TerminationAudit(value, elGetter);
}


/* eslint-enable */
