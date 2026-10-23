/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContinuationReference, _decode_ContinuationReference, _encode_ContinuationReference } from "../DistributedOperations/ContinuationReference.ta.mjs";
// export { ContinuationReference, _decode_ContinuationReference, _encode_ContinuationReference } from "../DistributedOperations/ContinuationReference.ta.mjs";


/**
 * @summary IN_ContinuationReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ContinuationReference  ::= 
 *   ContinuationReference
 *     (WITH COMPONENTS {
 *        ...,
 *        aliasedRDNs    ABSENT,
 *        rdnsResolved   ABSENT,
 *        referenceType  (IN-ReferenceType),
 *        accessPoints   (SET OF IN-AccessPoint)
 *      })
 * ```
 */
export
type IN_ContinuationReference = ContinuationReference; // DefinedType

let _cached_decoder_for_IN_ContinuationReference: $.ASN1Decoder<IN_ContinuationReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ContinuationReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_ContinuationReference (el: _Element): IN_ContinuationReference {
    if (!_cached_decoder_for_IN_ContinuationReference) { _cached_decoder_for_IN_ContinuationReference = _decode_ContinuationReference; }
    return _cached_decoder_for_IN_ContinuationReference(el);
}

let _cached_encoder_for_IN_ContinuationReference: $.ASN1Encoder<IN_ContinuationReference> | null = null;

/**
 * @summary Encodes a(n) IN_ContinuationReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ContinuationReference, encoded as an ASN.1 Element.
 */
export
function _encode_IN_ContinuationReference (value: IN_ContinuationReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_ContinuationReference) { _cached_encoder_for_IN_ContinuationReference = _encode_ContinuationReference; }
    return _cached_encoder_for_IN_ContinuationReference(value, elGetter);
}


/* eslint-enable */
