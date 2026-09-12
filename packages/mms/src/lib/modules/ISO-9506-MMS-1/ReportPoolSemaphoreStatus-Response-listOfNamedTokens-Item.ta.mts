/* eslint-disable */
import {
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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportPoolSemaphoreStatus-Response-listOfNamedTokens-Item ::= CHOICE {
 *     freeNamedToken [0] IMPLICIT Identifier,
 *     ownedNamedToken [1] IMPLICIT Identifier,
 *     hungNamedToken [2] IMPLICIT Identifier
 * }
 * ```
 */
export
type ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item =
    { freeNamedToken: Identifier } /* CHOICE_ALT_ROOT */
    | { ownedNamedToken: Identifier } /* CHOICE_ALT_ROOT */
    | { hungNamedToken: Identifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item: $.ASN1Decoder<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item (el: _Element): ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item {
    if (!_cached_decoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item) { _cached_decoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item = $._decode_inextensible_choice<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item>({
    "CONTEXT 0": [ "freeNamedToken", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 1": [ "ownedNamedToken", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 2": [ "hungNamedToken", $._decode_explicit<Identifier>(() => _decode_Identifier) ]
}); }
    return _cached_decoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item(el);
}

let _cached_encoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item: $.ASN1Encoder<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item> | null = null;

/**
 * @summary Encodes a(n) ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item (value: ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item) { _cached_encoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item = $._encode_choice<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item>({
    "freeNamedToken": $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER),
    "ownedNamedToken": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
    "hungNamedToken": $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item(value, elGetter);
}


/* eslint-enable */
