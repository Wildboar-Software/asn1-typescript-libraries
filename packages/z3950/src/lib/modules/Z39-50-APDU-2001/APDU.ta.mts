/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InitializeRequest, _decode_InitializeRequest, _encode_InitializeRequest } from "../Z39-50-APDU-2001/InitializeRequest.ta.mjs";
// export { InitializeRequest, _decode_InitializeRequest, _encode_InitializeRequest } from "../Z39-50-APDU-2001/InitializeRequest.ta.mjs";
import { InitializeResponse, _decode_InitializeResponse, _encode_InitializeResponse } from "../Z39-50-APDU-2001/InitializeResponse.ta.mjs";
// export { InitializeResponse, _decode_InitializeResponse, _encode_InitializeResponse } from "../Z39-50-APDU-2001/InitializeResponse.ta.mjs";
import { SearchRequest, _decode_SearchRequest, _encode_SearchRequest } from "../Z39-50-APDU-2001/SearchRequest.ta.mjs";
// export { SearchRequest, _decode_SearchRequest, _encode_SearchRequest } from "../Z39-50-APDU-2001/SearchRequest.ta.mjs";
import { SearchResponse, _decode_SearchResponse, _encode_SearchResponse } from "../Z39-50-APDU-2001/SearchResponse.ta.mjs";
// export { SearchResponse, _decode_SearchResponse, _encode_SearchResponse } from "../Z39-50-APDU-2001/SearchResponse.ta.mjs";
import { PresentRequest, _decode_PresentRequest, _encode_PresentRequest } from "../Z39-50-APDU-2001/PresentRequest.ta.mjs";
// export { PresentRequest, _decode_PresentRequest, _encode_PresentRequest } from "../Z39-50-APDU-2001/PresentRequest.ta.mjs";
import { PresentResponse, _decode_PresentResponse, _encode_PresentResponse } from "../Z39-50-APDU-2001/PresentResponse.ta.mjs";
// export { PresentResponse, _decode_PresentResponse, _encode_PresentResponse } from "../Z39-50-APDU-2001/PresentResponse.ta.mjs";
import { DeleteResultSetRequest, _decode_DeleteResultSetRequest, _encode_DeleteResultSetRequest } from "../Z39-50-APDU-2001/DeleteResultSetRequest.ta.mjs";
// export { DeleteResultSetRequest, _decode_DeleteResultSetRequest, _encode_DeleteResultSetRequest } from "../Z39-50-APDU-2001/DeleteResultSetRequest.ta.mjs";
import { DeleteResultSetResponse, _decode_DeleteResultSetResponse, _encode_DeleteResultSetResponse } from "../Z39-50-APDU-2001/DeleteResultSetResponse.ta.mjs";
// export { DeleteResultSetResponse, _decode_DeleteResultSetResponse, _encode_DeleteResultSetResponse } from "../Z39-50-APDU-2001/DeleteResultSetResponse.ta.mjs";
import { AccessControlRequest, _decode_AccessControlRequest, _encode_AccessControlRequest } from "../Z39-50-APDU-2001/AccessControlRequest.ta.mjs";
// export { AccessControlRequest, _decode_AccessControlRequest, _encode_AccessControlRequest } from "../Z39-50-APDU-2001/AccessControlRequest.ta.mjs";
import { AccessControlResponse, _decode_AccessControlResponse, _encode_AccessControlResponse } from "../Z39-50-APDU-2001/AccessControlResponse.ta.mjs";
// export { AccessControlResponse, _decode_AccessControlResponse, _encode_AccessControlResponse } from "../Z39-50-APDU-2001/AccessControlResponse.ta.mjs";
import { ResourceControlRequest, _decode_ResourceControlRequest, _encode_ResourceControlRequest } from "../Z39-50-APDU-2001/ResourceControlRequest.ta.mjs";
// export { ResourceControlRequest, _decode_ResourceControlRequest, _encode_ResourceControlRequest } from "../Z39-50-APDU-2001/ResourceControlRequest.ta.mjs";
import { ResourceControlResponse, _decode_ResourceControlResponse, _encode_ResourceControlResponse } from "../Z39-50-APDU-2001/ResourceControlResponse.ta.mjs";
// export { ResourceControlResponse, _decode_ResourceControlResponse, _encode_ResourceControlResponse } from "../Z39-50-APDU-2001/ResourceControlResponse.ta.mjs";
import { TriggerResourceControlRequest, _decode_TriggerResourceControlRequest, _encode_TriggerResourceControlRequest } from "../Z39-50-APDU-2001/TriggerResourceControlRequest.ta.mjs";
// export { TriggerResourceControlRequest, _decode_TriggerResourceControlRequest, _encode_TriggerResourceControlRequest } from "../Z39-50-APDU-2001/TriggerResourceControlRequest.ta.mjs";
import { ResourceReportRequest, _decode_ResourceReportRequest, _encode_ResourceReportRequest } from "../Z39-50-APDU-2001/ResourceReportRequest.ta.mjs";
// export { ResourceReportRequest, _decode_ResourceReportRequest, _encode_ResourceReportRequest } from "../Z39-50-APDU-2001/ResourceReportRequest.ta.mjs";
import { ResourceReportResponse, _decode_ResourceReportResponse, _encode_ResourceReportResponse } from "../Z39-50-APDU-2001/ResourceReportResponse.ta.mjs";
// export { ResourceReportResponse, _decode_ResourceReportResponse, _encode_ResourceReportResponse } from "../Z39-50-APDU-2001/ResourceReportResponse.ta.mjs";
import { ScanRequest, _decode_ScanRequest, _encode_ScanRequest } from "../Z39-50-APDU-2001/ScanRequest.ta.mjs";
// export { ScanRequest, _decode_ScanRequest, _encode_ScanRequest } from "../Z39-50-APDU-2001/ScanRequest.ta.mjs";
import { ScanResponse, _decode_ScanResponse, _encode_ScanResponse } from "../Z39-50-APDU-2001/ScanResponse.ta.mjs";
// export { ScanResponse, _decode_ScanResponse, _encode_ScanResponse } from "../Z39-50-APDU-2001/ScanResponse.ta.mjs";
import { SortRequest, _decode_SortRequest, _encode_SortRequest } from "../Z39-50-APDU-2001/SortRequest.ta.mjs";
// export { SortRequest, _decode_SortRequest, _encode_SortRequest } from "../Z39-50-APDU-2001/SortRequest.ta.mjs";
import { SortResponse, _decode_SortResponse, _encode_SortResponse } from "../Z39-50-APDU-2001/SortResponse.ta.mjs";
// export { SortResponse, _decode_SortResponse, _encode_SortResponse } from "../Z39-50-APDU-2001/SortResponse.ta.mjs";
import { Segment, _decode_Segment, _encode_Segment } from "../Z39-50-APDU-2001/Segment.ta.mjs";
// export { Segment, _decode_Segment, _encode_Segment } from "../Z39-50-APDU-2001/Segment.ta.mjs";
import { ExtendedServicesRequest, _decode_ExtendedServicesRequest, _encode_ExtendedServicesRequest } from "../Z39-50-APDU-2001/ExtendedServicesRequest.ta.mjs";
// export { ExtendedServicesRequest, _decode_ExtendedServicesRequest, _encode_ExtendedServicesRequest } from "../Z39-50-APDU-2001/ExtendedServicesRequest.ta.mjs";
import { ExtendedServicesResponse, _decode_ExtendedServicesResponse, _encode_ExtendedServicesResponse } from "../Z39-50-APDU-2001/ExtendedServicesResponse.ta.mjs";
// export { ExtendedServicesResponse, _decode_ExtendedServicesResponse, _encode_ExtendedServicesResponse } from "../Z39-50-APDU-2001/ExtendedServicesResponse.ta.mjs";
import { Close, _decode_Close, _encode_Close } from "../Z39-50-APDU-2001/Close.ta.mjs";
// export { Close, _decode_Close, _encode_Close } from "../Z39-50-APDU-2001/Close.ta.mjs";
import { DuplicateDetectionRequest, _decode_DuplicateDetectionRequest, _encode_DuplicateDetectionRequest } from "../Z39-50-APDU-2001/DuplicateDetectionRequest.ta.mjs";
// export { DuplicateDetectionRequest, _decode_DuplicateDetectionRequest, _encode_DuplicateDetectionRequest } from "../Z39-50-APDU-2001/DuplicateDetectionRequest.ta.mjs";
import { DuplicateDetectionResponse, _decode_DuplicateDetectionResponse, _encode_DuplicateDetectionResponse } from "../Z39-50-APDU-2001/DuplicateDetectionResponse.ta.mjs";
// export { DuplicateDetectionResponse, _decode_DuplicateDetectionResponse, _encode_DuplicateDetectionResponse } from "../Z39-50-APDU-2001/DuplicateDetectionResponse.ta.mjs";


/**
 * @summary APDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APDU  ::=  CHOICE {
 *     initRequest                        [20] IMPLICIT InitializeRequest,
 *     initResponse                       [21] IMPLICIT InitializeResponse,
 *     searchRequest                      [22] IMPLICIT SearchRequest,
 *     searchResponse                     [23] IMPLICIT SearchResponse,
 *     presentRequest                     [24] IMPLICIT PresentRequest,
 *     presentResponse                    [25] IMPLICIT PresentResponse,
 *     deleteResultSetRequest             [26] IMPLICIT DeleteResultSetRequest,
 *     deleteResultSetResponse            [27] IMPLICIT DeleteResultSetResponse,
 *     accessControlRequest               [28] IMPLICIT AccessControlRequest,
 *     accessControlResponse              [29] IMPLICIT AccessControlResponse,
 *     resourceControlRequest             [30] IMPLICIT ResourceControlRequest,
 *     resourceControlResponse            [31] IMPLICIT ResourceControlResponse,
 *     triggerResourceControlRequest      [32] IMPLICIT TriggerResourceControlRequest,
 *     resourceReportRequest              [33] IMPLICIT ResourceReportRequest,
 *     resourceReportResponse             [34] IMPLICIT ResourceReportResponse,
 *     scanRequest                        [35] IMPLICIT ScanRequest,
 *     scanResponse                       [36] IMPLICIT ScanResponse,
 *                     -- [37] through [42] not used
 *     sortRequest                        [43] IMPLICIT SortRequest,
 *     sortResponse                       [44] IMPLICIT SortResponse,
 *     segmentRequest                     [45] IMPLICIT Segment,
 *     extendedServicesRequest            [46] IMPLICIT ExtendedServicesRequest,
 *     extendedServicesResponse           [47] IMPLICIT ExtendedServicesResponse,
 *     close                              [48] IMPLICIT Close,
 *     duplicateDetectionRequest          [49] IMPLICIT DuplicateDetectionRequest,
 *     duplicateDetectionResponse         [50] IMPLICIT DuplicateDetectionResponse}
 * ```
 */
export
type APDU =
    { initRequest: InitializeRequest } /* CHOICE_ALT_ROOT */
    | { initResponse: InitializeResponse } /* CHOICE_ALT_ROOT */
    | { searchRequest: SearchRequest } /* CHOICE_ALT_ROOT */
    | { searchResponse: SearchResponse } /* CHOICE_ALT_ROOT */
    | { presentRequest: PresentRequest } /* CHOICE_ALT_ROOT */
    | { presentResponse: PresentResponse } /* CHOICE_ALT_ROOT */
    | { deleteResultSetRequest: DeleteResultSetRequest } /* CHOICE_ALT_ROOT */
    | { deleteResultSetResponse: DeleteResultSetResponse } /* CHOICE_ALT_ROOT */
    | { accessControlRequest: AccessControlRequest } /* CHOICE_ALT_ROOT */
    | { accessControlResponse: AccessControlResponse } /* CHOICE_ALT_ROOT */
    | { resourceControlRequest: ResourceControlRequest } /* CHOICE_ALT_ROOT */
    | { resourceControlResponse: ResourceControlResponse } /* CHOICE_ALT_ROOT */
    | { triggerResourceControlRequest: TriggerResourceControlRequest } /* CHOICE_ALT_ROOT */
    | { resourceReportRequest: ResourceReportRequest } /* CHOICE_ALT_ROOT */
    | { resourceReportResponse: ResourceReportResponse } /* CHOICE_ALT_ROOT */
    | { scanRequest: ScanRequest } /* CHOICE_ALT_ROOT */
    | { scanResponse: ScanResponse } /* CHOICE_ALT_ROOT */
    | { sortRequest: SortRequest } /* CHOICE_ALT_ROOT */
    | { sortResponse: SortResponse } /* CHOICE_ALT_ROOT */
    | { segmentRequest: Segment } /* CHOICE_ALT_ROOT */
    | { extendedServicesRequest: ExtendedServicesRequest } /* CHOICE_ALT_ROOT */
    | { extendedServicesResponse: ExtendedServicesResponse } /* CHOICE_ALT_ROOT */
    | { close: Close } /* CHOICE_ALT_ROOT */
    | { duplicateDetectionRequest: DuplicateDetectionRequest } /* CHOICE_ALT_ROOT */
    | { duplicateDetectionResponse: DuplicateDetectionResponse } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_APDU: $.ASN1Decoder<APDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) APDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_APDU (el: _Element): APDU {
    if (!_cached_decoder_for_APDU) { _cached_decoder_for_APDU = $._decode_inextensible_choice<APDU>({
    "CONTEXT 20": [ "initRequest", $._decode_implicit<InitializeRequest>(() => _decode_InitializeRequest) ],
    "CONTEXT 21": [ "initResponse", $._decode_implicit<InitializeResponse>(() => _decode_InitializeResponse) ],
    "CONTEXT 22": [ "searchRequest", $._decode_implicit<SearchRequest>(() => _decode_SearchRequest) ],
    "CONTEXT 23": [ "searchResponse", $._decode_implicit<SearchResponse>(() => _decode_SearchResponse) ],
    "CONTEXT 24": [ "presentRequest", $._decode_implicit<PresentRequest>(() => _decode_PresentRequest) ],
    "CONTEXT 25": [ "presentResponse", $._decode_implicit<PresentResponse>(() => _decode_PresentResponse) ],
    "CONTEXT 26": [ "deleteResultSetRequest", $._decode_implicit<DeleteResultSetRequest>(() => _decode_DeleteResultSetRequest) ],
    "CONTEXT 27": [ "deleteResultSetResponse", $._decode_implicit<DeleteResultSetResponse>(() => _decode_DeleteResultSetResponse) ],
    "CONTEXT 28": [ "accessControlRequest", $._decode_implicit<AccessControlRequest>(() => _decode_AccessControlRequest) ],
    "CONTEXT 29": [ "accessControlResponse", $._decode_implicit<AccessControlResponse>(() => _decode_AccessControlResponse) ],
    "CONTEXT 30": [ "resourceControlRequest", $._decode_implicit<ResourceControlRequest>(() => _decode_ResourceControlRequest) ],
    "CONTEXT 31": [ "resourceControlResponse", $._decode_implicit<ResourceControlResponse>(() => _decode_ResourceControlResponse) ],
    "CONTEXT 32": [ "triggerResourceControlRequest", $._decode_implicit<TriggerResourceControlRequest>(() => _decode_TriggerResourceControlRequest) ],
    "CONTEXT 33": [ "resourceReportRequest", $._decode_implicit<ResourceReportRequest>(() => _decode_ResourceReportRequest) ],
    "CONTEXT 34": [ "resourceReportResponse", $._decode_implicit<ResourceReportResponse>(() => _decode_ResourceReportResponse) ],
    "CONTEXT 35": [ "scanRequest", $._decode_implicit<ScanRequest>(() => _decode_ScanRequest) ],
    "CONTEXT 36": [ "scanResponse", $._decode_implicit<ScanResponse>(() => _decode_ScanResponse) ],
    "CONTEXT 43": [ "sortRequest", $._decode_implicit<SortRequest>(() => _decode_SortRequest) ],
    "CONTEXT 44": [ "sortResponse", $._decode_implicit<SortResponse>(() => _decode_SortResponse) ],
    "CONTEXT 45": [ "segmentRequest", $._decode_implicit<Segment>(() => _decode_Segment) ],
    "CONTEXT 46": [ "extendedServicesRequest", $._decode_implicit<ExtendedServicesRequest>(() => _decode_ExtendedServicesRequest) ],
    "CONTEXT 47": [ "extendedServicesResponse", $._decode_implicit<ExtendedServicesResponse>(() => _decode_ExtendedServicesResponse) ],
    "CONTEXT 48": [ "close", $._decode_implicit<Close>(() => _decode_Close) ],
    "CONTEXT 49": [ "duplicateDetectionRequest", $._decode_implicit<DuplicateDetectionRequest>(() => _decode_DuplicateDetectionRequest) ],
    "CONTEXT 50": [ "duplicateDetectionResponse", $._decode_implicit<DuplicateDetectionResponse>(() => _decode_DuplicateDetectionResponse) ]
}); }
    return _cached_decoder_for_APDU(el);
}

let _cached_encoder_for_APDU: $.ASN1Encoder<APDU> | null = null;

/**
 * @summary Encodes a(n) APDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APDU, encoded as an ASN.1 Element.
 */
export
function _encode_APDU (value: APDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_APDU) { _cached_encoder_for_APDU = $._encode_choice<APDU>({
    "initRequest": $._encode_implicit(_TagClass.context, 20, () => _encode_InitializeRequest, $.BER),
    "initResponse": $._encode_implicit(_TagClass.context, 21, () => _encode_InitializeResponse, $.BER),
    "searchRequest": $._encode_implicit(_TagClass.context, 22, () => _encode_SearchRequest, $.BER),
    "searchResponse": $._encode_implicit(_TagClass.context, 23, () => _encode_SearchResponse, $.BER),
    "presentRequest": $._encode_implicit(_TagClass.context, 24, () => _encode_PresentRequest, $.BER),
    "presentResponse": $._encode_implicit(_TagClass.context, 25, () => _encode_PresentResponse, $.BER),
    "deleteResultSetRequest": $._encode_implicit(_TagClass.context, 26, () => _encode_DeleteResultSetRequest, $.BER),
    "deleteResultSetResponse": $._encode_implicit(_TagClass.context, 27, () => _encode_DeleteResultSetResponse, $.BER),
    "accessControlRequest": $._encode_implicit(_TagClass.context, 28, () => _encode_AccessControlRequest, $.BER),
    "accessControlResponse": $._encode_implicit(_TagClass.context, 29, () => _encode_AccessControlResponse, $.BER),
    "resourceControlRequest": $._encode_implicit(_TagClass.context, 30, () => _encode_ResourceControlRequest, $.BER),
    "resourceControlResponse": $._encode_implicit(_TagClass.context, 31, () => _encode_ResourceControlResponse, $.BER),
    "triggerResourceControlRequest": $._encode_implicit(_TagClass.context, 32, () => _encode_TriggerResourceControlRequest, $.BER),
    "resourceReportRequest": $._encode_implicit(_TagClass.context, 33, () => _encode_ResourceReportRequest, $.BER),
    "resourceReportResponse": $._encode_implicit(_TagClass.context, 34, () => _encode_ResourceReportResponse, $.BER),
    "scanRequest": $._encode_implicit(_TagClass.context, 35, () => _encode_ScanRequest, $.BER),
    "scanResponse": $._encode_implicit(_TagClass.context, 36, () => _encode_ScanResponse, $.BER),
    "sortRequest": $._encode_implicit(_TagClass.context, 43, () => _encode_SortRequest, $.BER),
    "sortResponse": $._encode_implicit(_TagClass.context, 44, () => _encode_SortResponse, $.BER),
    "segmentRequest": $._encode_implicit(_TagClass.context, 45, () => _encode_Segment, $.BER),
    "extendedServicesRequest": $._encode_implicit(_TagClass.context, 46, () => _encode_ExtendedServicesRequest, $.BER),
    "extendedServicesResponse": $._encode_implicit(_TagClass.context, 47, () => _encode_ExtendedServicesResponse, $.BER),
    "close": $._encode_implicit(_TagClass.context, 48, () => _encode_Close, $.BER),
    "duplicateDetectionRequest": $._encode_implicit(_TagClass.context, 49, () => _encode_DuplicateDetectionRequest, $.BER),
    "duplicateDetectionResponse": $._encode_implicit(_TagClass.context, 50, () => _encode_DuplicateDetectionResponse, $.BER),
}, $.BER); }
    return _cached_encoder_for_APDU(value, elGetter);
}


/* eslint-enable */
