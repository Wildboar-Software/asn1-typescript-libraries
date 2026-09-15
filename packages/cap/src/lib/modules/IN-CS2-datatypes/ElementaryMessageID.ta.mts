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
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";


/**
 * @summary ElementaryMessageID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementaryMessageID  ::=  Integer4
 * ```
 */
export
type ElementaryMessageID = Integer4; // DefinedType

let _cached_decoder_for_ElementaryMessageID: $.ASN1Decoder<ElementaryMessageID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementaryMessageID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementaryMessageID (el: _Element): ElementaryMessageID {
    if (!_cached_decoder_for_ElementaryMessageID) { _cached_decoder_for_ElementaryMessageID = _decode_Integer4; }
    return _cached_decoder_for_ElementaryMessageID(el);
}

let _cached_encoder_for_ElementaryMessageID: $.ASN1Encoder<ElementaryMessageID> | null = null;

/**
 * @summary Encodes a(n) ElementaryMessageID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementaryMessageID, encoded as an ASN.1 Element.
 */
export
function _encode_ElementaryMessageID (value: ElementaryMessageID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementaryMessageID) { _cached_encoder_for_ElementaryMessageID = _encode_Integer4; }
    return _cached_encoder_for_ElementaryMessageID(value, elGetter);
}


/* eslint-enable */
