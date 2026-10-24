/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RemoteOperationsPortion_Item, _decode_RemoteOperationsPortion_Item, _encode_RemoteOperationsPortion_Item } from "../Dialog-Service-Pdus-asn1-97/RemoteOperationsPortion-Item.ta.mjs";

/**
 * @summary RemoteOperationsPortion
 * @description
 *
 * The ROSE or ACSE APDUs carried inside a DialogBegin, DialogContinue, or
 * DialogEnd PDU (ECMA-165 §8.4, §11.3.3.3). Not used on DialogAbort. Both the
 * invokable and returnable operation sets passed to RoseAPDU are the open
 * `OperationSet`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteOperationsPortion  ::=  [4] IMPLICIT SEQUENCE OF CHOICE {
 *     roseAPDU [17] RoseAPDU {
 *         {InvokeIdSet},
 *         {OperationSet},
 *         {OperationSet}
 *     },
 *     acseAPDU [19] AcseAPDU
 * }
 * ```
 */
export
type RemoteOperationsPortion = RemoteOperationsPortion_Item[]; // SequenceOfType

let _cached_decoder_for_RemoteOperationsPortion: $.ASN1Decoder<RemoteOperationsPortion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteOperationsPortion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteOperationsPortion (el: _Element): RemoteOperationsPortion {
    if (!_cached_decoder_for_RemoteOperationsPortion) { _cached_decoder_for_RemoteOperationsPortion = $._decode_implicit<RemoteOperationsPortion>(() => $._decodeSequenceOf<RemoteOperationsPortion_Item>(() => _decode_RemoteOperationsPortion_Item)); }
    return _cached_decoder_for_RemoteOperationsPortion(el);
}

let _cached_encoder_for_RemoteOperationsPortion: $.ASN1Encoder<RemoteOperationsPortion> | null = null;

/**
 * @summary Encodes a(n) RemoteOperationsPortion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteOperationsPortion, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteOperationsPortion (value: RemoteOperationsPortion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteOperationsPortion) { _cached_encoder_for_RemoteOperationsPortion = $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<RemoteOperationsPortion_Item>(() => _encode_RemoteOperationsPortion_Item, $.BER), $.BER); }
    return _cached_encoder_for_RemoteOperationsPortion(value, elGetter);
}

/* eslint-enable */
