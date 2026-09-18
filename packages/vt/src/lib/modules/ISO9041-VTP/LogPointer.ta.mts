/* eslint-disable */
import {
    NULL,
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
import { _decode_LogExpPointer, _encode_LogExpPointer, LogExpPointer } from "../G/LogExpPointer.ta.mjs";
// export { LogExpPointer, _decode_LogExpPointer, _encode_LogExpPointer } from "../G/LogExpPointer.ta.mjs";


/**
 * @summary LogPointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogPointer  ::=  CHOICE {
 *     logCurrent [0] IMPLICIT NULL,
 *     logStart   [1] IMPLICIT NULL,
 *     logStartF  [2] IMPLICIT NULL,
 *     logStartK  [3] IMPLICIT NULL,
 *     logEnd     [4] IMPLICIT NULL,
 *     logEndF    [5] IMPLICIT NULL,
 *     logEndK    [6] IMPLICIT NULL,
 *     logCoords  [7] IMPLICIT G.LogExpPointer
 * }
 * ```
 */
export
type LogPointer =
    { logCurrent: NULL } /* CHOICE_ALT_ROOT */
    | { logStart: NULL } /* CHOICE_ALT_ROOT */
    | { logStartF: NULL } /* CHOICE_ALT_ROOT */
    | { logStartK: NULL } /* CHOICE_ALT_ROOT */
    | { logEnd: NULL } /* CHOICE_ALT_ROOT */
    | { logEndF: NULL } /* CHOICE_ALT_ROOT */
    | { logEndK: NULL } /* CHOICE_ALT_ROOT */
    | { logCoords: LogExpPointer } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LogPointer: $.ASN1Decoder<LogPointer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogPointer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogPointer (el: _Element): LogPointer {
    if (!_cached_decoder_for_LogPointer) { _cached_decoder_for_LogPointer = $._decode_inextensible_choice<LogPointer>({
    "CONTEXT 0": [ "logCurrent", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "logStart", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "logStartF", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "logStartK", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "logEnd", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "logEndF", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "logEndK", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "logCoords", $._decode_implicit<LogExpPointer>(() => _decode_LogExpPointer) ]
}); }
    return _cached_decoder_for_LogPointer(el);
}

let _cached_encoder_for_LogPointer: $.ASN1Encoder<LogPointer> | null = null;

/**
 * @summary Encodes a(n) LogPointer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogPointer, encoded as an ASN.1 Element.
 */
export
function _encode_LogPointer (value: LogPointer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogPointer) { _cached_encoder_for_LogPointer = $._encode_choice<LogPointer>({
    "logCurrent": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "logStart": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "logStartF": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "logStartK": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "logEnd": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "logEndF": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "logEndK": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "logCoords": $._encode_implicit(_TagClass.context, 7, () => _encode_LogExpPointer, $.BER),
}, $.BER); }
    return _cached_encoder_for_LogPointer(value, elGetter);
}


/* eslint-enable */
