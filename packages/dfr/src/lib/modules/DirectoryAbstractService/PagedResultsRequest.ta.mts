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
import { PagedResultsRequest_newRequest, _decode_PagedResultsRequest_newRequest, _encode_PagedResultsRequest_newRequest } from "../DirectoryAbstractService/PagedResultsRequest-newRequest.ta.mjs";
// export { PagedResultsRequest_newRequest, _decode_PagedResultsRequest_newRequest, _encode_PagedResultsRequest_newRequest } from "../DirectoryAbstractService/PagedResultsRequest-newRequest.ta.mjs";


/**
 * @summary PagedResultsRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PagedResultsRequest  ::=  CHOICE {
 *   newRequest         SEQUENCE {
 *     pageSize           INTEGER,
 *     sortKeys           SEQUENCE SIZE (1..MAX) OF SortKey OPTIONAL,
 *     reverse       [1]  BOOLEAN DEFAULT FALSE,
 *     unmerged      [2]  BOOLEAN DEFAULT FALSE,
 *     pageNumber    [3]  INTEGER OPTIONAL,
 *     ...},
 *   queryReference     OCTET STRING,
 *   abandonQuery  [0]  OCTET STRING,
 *   ... }
 * ```
 */
export
type PagedResultsRequest =
    { newRequest: PagedResultsRequest_newRequest } /* CHOICE_ALT_ROOT */
    | { queryReference: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { abandonQuery: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PagedResultsRequest: $.ASN1Decoder<PagedResultsRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PagedResultsRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PagedResultsRequest (el: _Element): PagedResultsRequest {
    if (!_cached_decoder_for_PagedResultsRequest) { _cached_decoder_for_PagedResultsRequest = $._decode_extensible_choice<PagedResultsRequest>({
    "UNIVERSAL 16": [ "newRequest", _decode_PagedResultsRequest_newRequest ],
    "UNIVERSAL 4": [ "queryReference", $._decodeOctetString ],
    "CONTEXT 0": [ "abandonQuery", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_PagedResultsRequest(el);
}

let _cached_encoder_for_PagedResultsRequest: $.ASN1Encoder<PagedResultsRequest> | null = null;

/**
 * @summary Encodes a(n) PagedResultsRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagedResultsRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PagedResultsRequest (value: PagedResultsRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PagedResultsRequest) { _cached_encoder_for_PagedResultsRequest = $._encode_choice<PagedResultsRequest>({
    "newRequest": _encode_PagedResultsRequest_newRequest,
    "queryReference": $._encodeOctetString,
    "abandonQuery": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_PagedResultsRequest(value, elGetter);
}


/* eslint-enable */
