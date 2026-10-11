/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ResultSetId
 * @description
 *
 * Name of a result set, for reference later in the same Z-association.
 * Case-sensitive. The server must support `"default"`. If the client
 * uses `"default"`, Replace-indicator must be on. Any other name
 * requires the named-result-sets option (bit 14). A `"default"` set
 * lasts until another default set replaces it, the server deletes it,
 * or the Z-association ends. Any other set lasts until Delete,
 * replacement with Replace-indicator on, unilateral server deletion,
 * or the end of the Z-association. The server may delete a result set
 * at any time. §3.1.6.1, §3.2.2.1.3, §3.2.1.1.3 note 5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultSetId      ::=  [31] IMPLICIT InternationalString
 * ```
 */
export
type ResultSetId = InternationalString; // DefinedType

let _cached_decoder_for_ResultSetId: $.ASN1Decoder<ResultSetId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultSetId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultSetId (el: _Element): ResultSetId {
    if (!_cached_decoder_for_ResultSetId) { _cached_decoder_for_ResultSetId = $._decode_implicit<ResultSetId>(() => _decode_InternationalString); }
    return _cached_decoder_for_ResultSetId(el);
}

let _cached_encoder_for_ResultSetId: $.ASN1Encoder<ResultSetId> | null = null;

/**
 * @summary Encodes a(n) ResultSetId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultSetId, encoded as an ASN.1 Element.
 */
export
function _encode_ResultSetId (value: ResultSetId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultSetId) { _cached_encoder_for_ResultSetId = $._encode_implicit(_TagClass.context, 31, () => $._encode_implicit(_TagClass.context, 31, () => _encode_InternationalString, $.BER), $.BER); }
    return _cached_encoder_for_ResultSetId(value, elGetter);
}


/* eslint-enable */
