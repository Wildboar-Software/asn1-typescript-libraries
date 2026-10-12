/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EimIdInfo, _decode_EimIdInfo, _encode_EimIdInfo } from "../SGP32Definitions/EimIdInfo.ta.mjs";
import { ListEimResult_listEimError, _decode_ListEimResult_listEimError, _encode_ListEimResult_listEimError } from "../SGP32Definitions/ListEimResult-listEimError.ta.mjs";


/**
 * @summary ListEimResult
 * @description
 * 
 * Result of the `listEim` eCO (ESep.ListEim). After the eUICC Package is
 * verified, the ISD-R returns the eIM identifiers of the Associated eIMs. The
 * start condition is that the eUICC holds eIM Configuration Data for at least
 * one Associated eIM. Select `eimIdList` for that list. Each `EimIdInfo`
 * carries `eimId` and, for an OID or FQDN identifier, `eimIdType`. Select
 * `listEimError` for `undefinedError(127)`, which section 2.11.2.1 names and
 * does not further define. SGP.32 v1.2, sections 2.11.2.1, 3.5.1.4, and
 * 5.13.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListEimResult  ::=  CHOICE {
 *     eimIdList SEQUENCE OF EimIdInfo,
 *     listEimError INTEGER {
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type ListEimResult =
    { eimIdList: EimIdInfo[] } /* CHOICE_ALT_ROOT */
    | { listEimError: ListEimResult_listEimError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ListEimResult: $.ASN1Decoder<ListEimResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListEimResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListEimResult (el: _Element): ListEimResult {
    if (!_cached_decoder_for_ListEimResult) { _cached_decoder_for_ListEimResult = $._decode_inextensible_choice<ListEimResult>({
    "CONTEXT 0": [ "eimIdList", $._decodeSequenceOf<EimIdInfo>(() => _decode_EimIdInfo) ],
    "CONTEXT 1": [ "listEimError", _decode_ListEimResult_listEimError ]
}); }
    return _cached_decoder_for_ListEimResult(el);
}

let _cached_encoder_for_ListEimResult: $.ASN1Encoder<ListEimResult> | null = null;

/**
 * @summary Encodes a(n) ListEimResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListEimResult, encoded as an ASN.1 Element.
 */
export
function _encode_ListEimResult (value: ListEimResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListEimResult) { _cached_encoder_for_ListEimResult = $._encode_choice<ListEimResult>({
    "eimIdList": $._encodeSequenceOf<EimIdInfo>(() => _encode_EimIdInfo, $.BER),
    "listEimError": _encode_ListEimResult_listEimError,
}, $.BER); }
    return _cached_encoder_for_ListEimResult(value, elGetter);
}


/* eslint-enable */
