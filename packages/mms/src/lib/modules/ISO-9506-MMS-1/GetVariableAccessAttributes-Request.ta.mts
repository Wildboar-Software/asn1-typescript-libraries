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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";


/**
 * @summary GetVariableAccessAttributes_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetVariableAccessAttributes-Request  ::=  CHOICE {
 *    name                [0] ObjectName,
 *    address             [1] Address
 * }
 * ```
 */
export
type GetVariableAccessAttributes_Request =
    { name: ObjectName } /* CHOICE_ALT_ROOT */
    | { address: Address } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetVariableAccessAttributes_Request: $.ASN1Decoder<GetVariableAccessAttributes_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetVariableAccessAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetVariableAccessAttributes_Request (el: _Element): GetVariableAccessAttributes_Request {
    if (!_cached_decoder_for_GetVariableAccessAttributes_Request) { _cached_decoder_for_GetVariableAccessAttributes_Request = $._decode_inextensible_choice<GetVariableAccessAttributes_Request>({
    "CONTEXT 0": [ "name", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ],
    "CONTEXT 1": [ "address", $._decode_explicit<Address>(() => _decode_Address) ]
}); }
    return _cached_decoder_for_GetVariableAccessAttributes_Request(el);
}

let _cached_encoder_for_GetVariableAccessAttributes_Request: $.ASN1Encoder<GetVariableAccessAttributes_Request> | null = null;

/**
 * @summary Encodes a(n) GetVariableAccessAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetVariableAccessAttributes_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetVariableAccessAttributes_Request (value: GetVariableAccessAttributes_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetVariableAccessAttributes_Request) { _cached_encoder_for_GetVariableAccessAttributes_Request = $._encode_choice<GetVariableAccessAttributes_Request>({
    "name": $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER),
    "address": $._encode_explicit(_TagClass.context, 1, () => _encode_Address, $.BER),
}, $.BER); }
    return _cached_encoder_for_GetVariableAccessAttributes_Request(value, elGetter);
}


/* eslint-enable */
