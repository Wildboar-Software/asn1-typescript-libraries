/* eslint-disable */
import {
    INTEGER,
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



/**
 * @summary ErrorHandlingMode
 * @description
 *
 * How List and Copy-of-group treat inaccessible members. Default
 * `all-or-nothing`. `report-n-warnings` INTEGER is the max warnings to return
 * (0 = run to completion with no warnings). Only those two operations are
 * "multiple". ISO/IEC 10166-1:1991 §8.1.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorHandlingMode  ::=  CHOICE {
 *     all-or-nothing      [0] NULL,
 *     until-first-warning [1] NULL,
 *     report-all-warnings [2] NULL,
 *     -- This parameter is only applicable to multiple abstract operations
 *     -- These are List or Copy group.
 *     report-n-warnings   [3] INTEGER
 * }
 * ```
 */
export
type ErrorHandlingMode =
    { all_or_nothing: NULL } /* CHOICE_ALT_ROOT */
    | { until_first_warning: NULL } /* CHOICE_ALT_ROOT */
    | { report_all_warnings: NULL } /* CHOICE_ALT_ROOT */
    | { report_n_warnings: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ErrorHandlingMode: $.ASN1Decoder<ErrorHandlingMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorHandlingMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorHandlingMode (el: _Element): ErrorHandlingMode {
    if (!_cached_decoder_for_ErrorHandlingMode) { _cached_decoder_for_ErrorHandlingMode = $._decode_inextensible_choice<ErrorHandlingMode>({
    "CONTEXT 0": [ "all_or_nothing", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "until_first_warning", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "report_all_warnings", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "report_n_warnings", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_ErrorHandlingMode(el);
}

let _cached_encoder_for_ErrorHandlingMode: $.ASN1Encoder<ErrorHandlingMode> | null = null;

/**
 * @summary Encodes a(n) ErrorHandlingMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorHandlingMode, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorHandlingMode (value: ErrorHandlingMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorHandlingMode) { _cached_encoder_for_ErrorHandlingMode = $._encode_choice<ErrorHandlingMode>({
    "all_or_nothing": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "until_first_warning": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "report_all_warnings": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "report_n_warnings": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_ErrorHandlingMode(value, elGetter);
}


/* eslint-enable */
