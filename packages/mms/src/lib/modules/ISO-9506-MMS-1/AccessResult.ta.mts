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
import { DataAccessError, DataAccessError_object_invalidated /* IMPORTED_LONG_NAMED_INTEGER */, object_invalidated /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_hardware_fault /* IMPORTED_LONG_NAMED_INTEGER */, hardware_fault /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_temporarily_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, temporarily_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_access_denied /* IMPORTED_LONG_NAMED_INTEGER */, object_access_denied /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_undefined /* IMPORTED_LONG_NAMED_INTEGER */, object_undefined /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_invalid_address /* IMPORTED_LONG_NAMED_INTEGER */, invalid_address /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_type_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, type_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_type_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, type_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_attribute_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, object_attribute_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_access_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, object_access_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, object_non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_value_invalid /* IMPORTED_LONG_NAMED_INTEGER */, object_value_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DataAccessError, _encode_DataAccessError } from "../ISO-9506-MMS-1/DataAccessError.ta.mjs";
// export { DataAccessError, DataAccessError_object_invalidated /* IMPORTED_LONG_NAMED_INTEGER */, object_invalidated /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_hardware_fault /* IMPORTED_LONG_NAMED_INTEGER */, hardware_fault /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_temporarily_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, temporarily_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_access_denied /* IMPORTED_LONG_NAMED_INTEGER */, object_access_denied /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_undefined /* IMPORTED_LONG_NAMED_INTEGER */, object_undefined /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_invalid_address /* IMPORTED_LONG_NAMED_INTEGER */, invalid_address /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_type_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, type_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_type_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, type_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_attribute_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, object_attribute_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_access_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, object_access_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, object_non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_value_invalid /* IMPORTED_LONG_NAMED_INTEGER */, object_value_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DataAccessError, _encode_DataAccessError } from "../ISO-9506-MMS-1/DataAccessError.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";


/**
 * @summary AccessResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessResult  ::=  CHOICE {
 *    failure      [0] IMPLICIT DataAccessError,
 *    success      Data }
 * ```
 */
export
type AccessResult =
    { failure: DataAccessError } /* CHOICE_ALT_ROOT */
    | { success: Data } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AccessResult: $.ASN1Decoder<AccessResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessResult (el: _Element): AccessResult {
    if (!_cached_decoder_for_AccessResult) { _cached_decoder_for_AccessResult = $._decode_inextensible_choice<AccessResult>({
    "CONTEXT 0": [ "failure", $._decode_implicit<DataAccessError>(() => _decode_DataAccessError) ],
    "CONTEXT 1": [ "success", _decode_Data ],
    "CONTEXT 2": [ "success", _decode_Data ],
    "CONTEXT 3": [ "success", _decode_Data ],
    "CONTEXT 4": [ "success", _decode_Data ],
    "CONTEXT 5": [ "success", _decode_Data ],
    "CONTEXT 6": [ "success", _decode_Data ],
    "CONTEXT 7": [ "success", _decode_Data ],
    "CONTEXT 9": [ "success", _decode_Data ],
    "CONTEXT 10": [ "success", _decode_Data ],
    "CONTEXT 11": [ "success", _decode_Data ],
    "CONTEXT 12": [ "success", _decode_Data ],
    "CONTEXT 13": [ "success", _decode_Data ],
    "CONTEXT 14": [ "success", _decode_Data ],
    "CONTEXT 15": [ "success", _decode_Data ],
    "CONTEXT 16": [ "success", _decode_Data ]
}); }
    return _cached_decoder_for_AccessResult(el);
}

let _cached_encoder_for_AccessResult: $.ASN1Encoder<AccessResult> | null = null;

/**
 * @summary Encodes a(n) AccessResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessResult, encoded as an ASN.1 Element.
 */
export
function _encode_AccessResult (value: AccessResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessResult) { _cached_encoder_for_AccessResult = $._encode_choice<AccessResult>({
    "failure": $._encode_implicit(_TagClass.context, 0, () => _encode_DataAccessError, $.BER),
    "success": _encode_Data,
}, $.BER); }
    return _cached_encoder_for_AccessResult(value, elGetter);
}


/* eslint-enable */
