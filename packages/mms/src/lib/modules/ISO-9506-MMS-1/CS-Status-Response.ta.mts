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
import { CS_Status_Response_fullResponse, _decode_CS_Status_Response_fullResponse, _encode_CS_Status_Response_fullResponse } from "../ISO-9506-MMS-1/CS-Status-Response-fullResponse.ta.mjs";
// export { CS_Status_Response_fullResponse, _decode_CS_Status_Response_fullResponse, _encode_CS_Status_Response_fullResponse } from "../ISO-9506-MMS-1/CS-Status-Response-fullResponse.ta.mjs";


/**
 * @summary CS_Status_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Status-Response  ::=  CHOICE {
 *    fullResponse           SEQUENCE {
 *        operationState             [0] IMPLICIT OperationState,
 *        extendedStatus             [1] IMPLICIT ExtendedStatus,
 *        extendedStatusMask         [2] IMPLICIT ExtendedStatus DEFAULT '1111'B,
 *        selectedProgramInvocation     CHOICE {
 *           programInvocation             [3] IMPLICIT Identifier,
 *           noneSelected                  [4] IMPLICIT NULL      } }
 * ,
 *    noExtraResponse     NULL
 *    }
 * ```
 */
export
type CS_Status_Response =
    { fullResponse: CS_Status_Response_fullResponse } /* CHOICE_ALT_ROOT */
    | { noExtraResponse: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_Status_Response: $.ASN1Decoder<CS_Status_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Status_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Status_Response (el: _Element): CS_Status_Response {
    if (!_cached_decoder_for_CS_Status_Response) { _cached_decoder_for_CS_Status_Response = $._decode_inextensible_choice<CS_Status_Response>({
    "UNIVERSAL 16": [ "fullResponse", _decode_CS_Status_Response_fullResponse ],
    "UNIVERSAL 5": [ "noExtraResponse", $._decodeNull ]
}); }
    return _cached_decoder_for_CS_Status_Response(el);
}

let _cached_encoder_for_CS_Status_Response: $.ASN1Encoder<CS_Status_Response> | null = null;

/**
 * @summary Encodes a(n) CS_Status_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Status_Response, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Status_Response (value: CS_Status_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Status_Response) { _cached_encoder_for_CS_Status_Response = $._encode_choice<CS_Status_Response>({
    "fullResponse": _encode_CS_Status_Response_fullResponse,
    "noExtraResponse": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CS_Status_Response(value, elGetter);
}


/* eslint-enable */
