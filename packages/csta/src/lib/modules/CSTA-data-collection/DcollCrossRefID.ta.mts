/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DcollCrossRefID
 * @description
 *
 * Identifies a data collection started with Start Data Collection. Valid only
 * for the duration of that collection. ECMA-269 §12.3.10.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DcollCrossRefID  ::=  OCTET STRING
 * ```
 */
export
type DcollCrossRefID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_DcollCrossRefID: $.ASN1Decoder<DcollCrossRefID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DcollCrossRefID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DcollCrossRefID (el: _Element): DcollCrossRefID {
    if (!_cached_decoder_for_DcollCrossRefID) { _cached_decoder_for_DcollCrossRefID = $._decodeOctetString; }
    return _cached_decoder_for_DcollCrossRefID(el);
}

let _cached_encoder_for_DcollCrossRefID: $.ASN1Encoder<DcollCrossRefID> | null = null;

/**
 * @summary Encodes a(n) DcollCrossRefID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DcollCrossRefID, encoded as an ASN.1 Element.
 */
export
function _encode_DcollCrossRefID (value: DcollCrossRefID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DcollCrossRefID) { _cached_encoder_for_DcollCrossRefID = $._encodeOctetString; }
    return _cached_encoder_for_DcollCrossRefID(value, elGetter);
}


/* eslint-enable */
