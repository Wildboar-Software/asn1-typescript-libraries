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
import { UINT32, _decode_UINT32, _encode_UINT32 } from "../TSM/UINT32.ta.mjs";



/**
 * @summary SessionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionID     ::=     UINT32
 * ```
 */
export
type SessionID = UINT32; // DefinedType

let _cached_decoder_for_SessionID: $.ASN1Decoder<SessionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SessionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SessionID (el: _Element): SessionID {
    if (!_cached_decoder_for_SessionID) { _cached_decoder_for_SessionID = _decode_UINT32; }
    return _cached_decoder_for_SessionID(el);
}

let _cached_encoder_for_SessionID: $.ASN1Encoder<SessionID> | null = null;

/**
 * @summary Encodes a(n) SessionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionID, encoded as an ASN.1 Element.
 */
export
function _encode_SessionID (value: SessionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SessionID) { _cached_encoder_for_SessionID = _encode_UINT32; }
    return _cached_encoder_for_SessionID(value, elGetter);
}


/* eslint-enable */
