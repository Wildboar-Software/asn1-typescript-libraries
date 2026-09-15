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
 * @summary RecordedMessageID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordedMessageID  ::=  Integer4
 * ```
 */
export
type RecordedMessageID = Integer4; // DefinedType

let _cached_decoder_for_RecordedMessageID: $.ASN1Decoder<RecordedMessageID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordedMessageID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordedMessageID (el: _Element): RecordedMessageID {
    if (!_cached_decoder_for_RecordedMessageID) { _cached_decoder_for_RecordedMessageID = _decode_Integer4; }
    return _cached_decoder_for_RecordedMessageID(el);
}

let _cached_encoder_for_RecordedMessageID: $.ASN1Encoder<RecordedMessageID> | null = null;

/**
 * @summary Encodes a(n) RecordedMessageID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordedMessageID, encoded as an ASN.1 Element.
 */
export
function _encode_RecordedMessageID (value: RecordedMessageID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordedMessageID) { _cached_encoder_for_RecordedMessageID = _encode_Integer4; }
    return _cached_encoder_for_RecordedMessageID(value, elGetter);
}


/* eslint-enable */
