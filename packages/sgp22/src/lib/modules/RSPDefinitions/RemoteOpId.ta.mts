/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RemoteOpId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteOpId  ::=  [2] INTEGER {installBoundProfilePackage(1)}
 * ```
 */
export
type RemoteOpId = INTEGER;

/**
 * @summary RemoteOpId_installBoundProfilePackage
 * @constant
 * @type {number}
 */
export
const RemoteOpId_installBoundProfilePackage: RemoteOpId = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RemoteOpId_installBoundProfilePackage
 * @constant
 * @type {number}
 */
export
const installBoundProfilePackage: RemoteOpId = RemoteOpId_installBoundProfilePackage; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RemoteOpId: $.ASN1Decoder<RemoteOpId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteOpId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteOpId (el: _Element): RemoteOpId {
    if (!_cached_decoder_for_RemoteOpId) { _cached_decoder_for_RemoteOpId = $._decode_implicit<RemoteOpId>(() => $._decodeInteger); }
    return _cached_decoder_for_RemoteOpId(el);
}

let _cached_encoder_for_RemoteOpId: $.ASN1Encoder<RemoteOpId> | null = null;

/**
 * @summary Encodes a(n) RemoteOpId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteOpId, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteOpId (value: RemoteOpId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteOpId) { _cached_encoder_for_RemoteOpId = $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_RemoteOpId(value, elGetter);
}


/* eslint-enable */
