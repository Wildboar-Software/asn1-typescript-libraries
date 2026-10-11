/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LogotypeData, _decode_LogotypeData, _encode_LogotypeData } from "../LogotypeCertExtn/LogotypeData.ta.mjs";
// export { LogotypeData, _decode_LogotypeData, _encode_LogotypeData } from "../LogotypeCertExtn/LogotypeData.ta.mjs";
import { LogotypeReference, _decode_LogotypeReference, _encode_LogotypeReference } from "../LogotypeCertExtn/LogotypeReference.ta.mjs";
// export { LogotypeReference, _decode_LogotypeReference, _encode_LogotypeReference } from "../LogotypeCertExtn/LogotypeReference.ta.mjs";


/**
 * @summary LogotypeInfo
 * @description
 *
 * One logotype, either as references to its image and audio files
 * (`direct`) or as a reference to an external logotype-data file
 * (`indirect`). Clients accept both forms. Certificate issuers
 * support direct addressing, and should support indirect addressing.
 * Direct addressing is intended for one or a few image and audio
 * alternatives. Indirect addressing is intended for many: the
 * certificate then holds one hashed pointer, and the file it names
 * is a DER-encoded {@link LogotypeData} (see
 * {@link LogotypeReference}).
 *
 * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeInfo  ::=  CHOICE {
 *    direct          [0] LogotypeData,
 *    indirect        [1] LogotypeReference }
 * ```
 */
export
type LogotypeInfo =
    { direct: LogotypeData } /* CHOICE_ALT_ROOT */
    | { indirect: LogotypeReference } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LogotypeInfo: $.ASN1Decoder<LogotypeInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeInfo (el: _Element): LogotypeInfo {
    if (!_cached_decoder_for_LogotypeInfo) { _cached_decoder_for_LogotypeInfo = $._decode_inextensible_choice<LogotypeInfo>({
    "CONTEXT 0": [ "direct", $._decode_implicit<LogotypeData>(() => _decode_LogotypeData) ],
    "CONTEXT 1": [ "indirect", $._decode_implicit<LogotypeReference>(() => _decode_LogotypeReference) ]
}); }
    return _cached_decoder_for_LogotypeInfo(el);
}

let _cached_encoder_for_LogotypeInfo: $.ASN1Encoder<LogotypeInfo> | null = null;

/**
 * @summary Encodes a(n) LogotypeInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeInfo (value: LogotypeInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeInfo) { _cached_encoder_for_LogotypeInfo = $._encode_choice<LogotypeInfo>({
    "direct": $._encode_implicit(_TagClass.context, 0, () => _encode_LogotypeData, $.BER),
    "indirect": $._encode_implicit(_TagClass.context, 1, () => _encode_LogotypeReference, $.BER),
}, $.BER); }
    return _cached_encoder_for_LogotypeInfo(value, elGetter);
}


/* eslint-enable */
