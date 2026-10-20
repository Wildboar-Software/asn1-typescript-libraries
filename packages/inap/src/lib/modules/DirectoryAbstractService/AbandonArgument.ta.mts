/* eslint-disable */
import {
    OPTIONAL,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED_SEQ, _get_decoder_for_OPTIONALLY_PROTECTED_SEQ, _get_encoder_for_OPTIONALLY_PROTECTED_SEQ } from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
// export { OPTIONALLY_PROTECTED_SEQ, _get_decoder_for_OPTIONALLY_PROTECTED_SEQ, _get_encoder_for_OPTIONALLY_PROTECTED_SEQ } from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";


/**
 * @summary AbandonArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonArgument  ::= 
 *   OPTIONALLY-PROTECTED-SEQ{SEQUENCE {invokeID  [0]  InvokeId}}
 * ```
 */
export
type AbandonArgument = OPTIONALLY_PROTECTED_SEQ<{ invokeID: OPTIONAL<InvokeId> }>; // DefinedType

let _cached_decoder_for_AbandonArgument: $.ASN1Decoder<AbandonArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbandonArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbandonArgument (el: _Element): AbandonArgument {
    if (!_cached_decoder_for_AbandonArgument) { _cached_decoder_for_AbandonArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<{ invokeID: OPTIONAL<InvokeId> }>(function (el: _Element): OPTIONALLY_PROTECTED_SEQ {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("OPTIONALLY-PROTECTED-SEQ contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokeID";
    let invokeID!: InvokeId;
    invokeID = $._decode_explicit<InvokeId>(() => _decode_InvokeId)(sequence[0]);
    return new OPTIONALLY_PROTECTED_SEQ(
        invokeID,

    );
}); }
    return _cached_decoder_for_AbandonArgument(el);
}

let _cached_encoder_for_AbandonArgument: $.ASN1Encoder<AbandonArgument> | null = null;

/**
 * @summary Encodes a(n) AbandonArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonArgument, encoded as an ASN.1 Element.
 */
export
function _encode_AbandonArgument (value: AbandonArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbandonArgument) { _cached_encoder_for_AbandonArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<{ invokeID: OPTIONAL<InvokeId> }>(function (value: OPTIONALLY_PROTECTED_SEQ, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED_SEQ>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_InvokeId, $.BER)(value.invokeID, $.BER)
    ], $.BER);
}); }
    return _cached_encoder_for_AbandonArgument(value, elGetter);
}


/* eslint-enable */
