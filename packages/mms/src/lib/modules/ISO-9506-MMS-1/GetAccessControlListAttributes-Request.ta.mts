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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { GetAccessControlListAttributes_Request_namedObject, _decode_GetAccessControlListAttributes_Request_namedObject, _encode_GetAccessControlListAttributes_Request_namedObject } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Request-namedObject.ta.mjs";
// export { GetAccessControlListAttributes_Request_namedObject, _decode_GetAccessControlListAttributes_Request_namedObject, _encode_GetAccessControlListAttributes_Request_namedObject } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Request-namedObject.ta.mjs";


/**
 * @summary GetAccessControlListAttributes_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAccessControlListAttributes-Request  ::=  CHOICE {
 *    accessControlListName            [0] IMPLICIT Identifier,
 *    vMD                              [1] IMPLICIT NULL,
 *    namedObject                      [2] IMPLICIT SEQUENCE {
 *        objectClass                      [0] ObjectClass,
 *        objectName                       [1] ObjectName
 *        }
 *    }
 * ```
 */
export
type GetAccessControlListAttributes_Request =
    { accessControlListName: Identifier } /* CHOICE_ALT_ROOT */
    | { vMD: NULL } /* CHOICE_ALT_ROOT */
    | { namedObject: GetAccessControlListAttributes_Request_namedObject } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetAccessControlListAttributes_Request: $.ASN1Decoder<GetAccessControlListAttributes_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAccessControlListAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAccessControlListAttributes_Request (el: _Element): GetAccessControlListAttributes_Request {
    if (!_cached_decoder_for_GetAccessControlListAttributes_Request) { _cached_decoder_for_GetAccessControlListAttributes_Request = $._decode_inextensible_choice<GetAccessControlListAttributes_Request>({
    "CONTEXT 0": [ "accessControlListName", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 1": [ "vMD", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "namedObject", $._decode_implicit<GetAccessControlListAttributes_Request_namedObject>(() => _decode_GetAccessControlListAttributes_Request_namedObject) ]
}); }
    return _cached_decoder_for_GetAccessControlListAttributes_Request(el);
}

let _cached_encoder_for_GetAccessControlListAttributes_Request: $.ASN1Encoder<GetAccessControlListAttributes_Request> | null = null;

/**
 * @summary Encodes a(n) GetAccessControlListAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAccessControlListAttributes_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetAccessControlListAttributes_Request (value: GetAccessControlListAttributes_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAccessControlListAttributes_Request) { _cached_encoder_for_GetAccessControlListAttributes_Request = $._encode_choice<GetAccessControlListAttributes_Request>({
    "accessControlListName": $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER),
    "vMD": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "namedObject": $._encode_implicit(_TagClass.context, 2, () => _encode_GetAccessControlListAttributes_Request_namedObject, $.BER),
}, $.BER); }
    return _cached_encoder_for_GetAccessControlListAttributes_Request(value, elGetter);
}


/* eslint-enable */
