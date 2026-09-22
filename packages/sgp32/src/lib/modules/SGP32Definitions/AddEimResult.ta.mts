/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AddEimResult_addEimResultCode, _encode_AddEimResult_addEimResultCode, AddEimResult_addEimResultCode } from "../SGP32Definitions/AddEimResult-addEimResultCode.ta.mjs";
// export { AddEimResult_addEimResultCode, AddEimResult_addEimResultCode_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, AddEimResult_addEimResultCode_insufficientMemory /* IMPORTED_LONG_NAMED_INTEGER */, insufficientMemory /* IMPORTED_SHORT_NAMED_INTEGER */, AddEimResult_addEimResultCode_associatedEimAlreadyExists /* IMPORTED_LONG_NAMED_INTEGER */, associatedEimAlreadyExists /* IMPORTED_SHORT_NAMED_INTEGER */, AddEimResult_addEimResultCode_ciPKUnknown /* IMPORTED_LONG_NAMED_INTEGER */, ciPKUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AddEimResult_addEimResultCode_invalidAssociationToken /* IMPORTED_LONG_NAMED_INTEGER */, invalidAssociationToken /* IMPORTED_SHORT_NAMED_INTEGER */, AddEimResult_addEimResultCode_counterValueOutOfRange /* IMPORTED_LONG_NAMED_INTEGER */, counterValueOutOfRange /* IMPORTED_SHORT_NAMED_INTEGER */, AddEimResult_addEimResultCode_commandError /* IMPORTED_LONG_NAMED_INTEGER */, commandError /* IMPORTED_SHORT_NAMED_INTEGER */, AddEimResult_addEimResultCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AddEimResult_addEimResultCode, _encode_AddEimResult_addEimResultCode } from "../SGP32Definitions/AddEimResult-addEimResultCode.ta.mjs";


/**
 * @summary AddEimResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddEimResult  ::=  CHOICE {
 *     associationToken [4] INTEGER,
 *     addEimResultCode INTEGER {
 *         ok(0),
 *         insufficientMemory(1),
 *         associatedEimAlreadyExists(2),
 *         ciPKUnknown(3),
 *         invalidAssociationToken(5),
 *         counterValueOutOfRange(6),
 *         commandError(7),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type AddEimResult =
    { associationToken: INTEGER } /* CHOICE_ALT_ROOT */
    | { addEimResultCode: AddEimResult_addEimResultCode } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AddEimResult: $.ASN1Decoder<AddEimResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddEimResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddEimResult (el: _Element): AddEimResult {
    if (!_cached_decoder_for_AddEimResult) { _cached_decoder_for_AddEimResult = $._decode_inextensible_choice<AddEimResult>({
    "CONTEXT 4": [ "associationToken", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 2": [ "addEimResultCode", _decode_AddEimResult_addEimResultCode ]
}); }
    return _cached_decoder_for_AddEimResult(el);
}

let _cached_encoder_for_AddEimResult: $.ASN1Encoder<AddEimResult> | null = null;

/**
 * @summary Encodes a(n) AddEimResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEimResult, encoded as an ASN.1 Element.
 */
export
function _encode_AddEimResult (value: AddEimResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddEimResult) { _cached_encoder_for_AddEimResult = $._encode_choice<AddEimResult>({
    "associationToken": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "addEimResultCode": _encode_AddEimResult_addEimResultCode,
}, $.BER); }
    return _cached_encoder_for_AddEimResult(value, elGetter);
}


/* eslint-enable */
