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
import { DataAccessError, _decode_DataAccessError, _encode_DataAccessError } from "../ISO-9506-MMS-1/DataAccessError.ta.mjs";
// export { DataAccessError, DataAccessError_object_invalidated /* IMPORTED_LONG_NAMED_INTEGER */, object_invalidated /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_hardware_fault /* IMPORTED_LONG_NAMED_INTEGER */, hardware_fault /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_temporarily_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, temporarily_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_access_denied /* IMPORTED_LONG_NAMED_INTEGER */, object_access_denied /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_undefined /* IMPORTED_LONG_NAMED_INTEGER */, object_undefined /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_invalid_address /* IMPORTED_LONG_NAMED_INTEGER */, invalid_address /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_type_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, type_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_type_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, type_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_attribute_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, object_attribute_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_access_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, object_access_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, object_non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, DataAccessError_object_value_invalid /* IMPORTED_LONG_NAMED_INTEGER */, object_value_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DataAccessError, _encode_DataAccessError } from "../ISO-9506-MMS-1/DataAccessError.ta.mjs";


/**
 * @summary Write_Response_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Write-Response-Item ::= CHOICE {
 *     failure [0] IMPLICIT DataAccessError,
 *     success [1] IMPLICIT NULL
 * }
 * ```
 */
export
type Write_Response_Item =
    { failure: DataAccessError } /* CHOICE_ALT_ROOT */
    | { success: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Write_Response_Item: $.ASN1Decoder<Write_Response_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Write_Response_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Write_Response_Item (el: _Element): Write_Response_Item {
    if (!_cached_decoder_for_Write_Response_Item) { _cached_decoder_for_Write_Response_Item = $._decode_inextensible_choice<Write_Response_Item>({
    "CONTEXT 0": [ "failure", $._decode_implicit<DataAccessError>(() => _decode_DataAccessError) ],
    "CONTEXT 1": [ "success", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Write_Response_Item(el);
}

let _cached_encoder_for_Write_Response_Item: $.ASN1Encoder<Write_Response_Item> | null = null;

/**
 * @summary Encodes a(n) Write_Response_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Write_Response_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Write_Response_Item (value: Write_Response_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Write_Response_Item) { _cached_encoder_for_Write_Response_Item = $._encode_choice<Write_Response_Item>({
    "failure": $._encode_implicit(_TagClass.context, 0, () => _encode_DataAccessError, $.BER),
    "success": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Write_Response_Item(value, elGetter);
}


/* eslint-enable */
