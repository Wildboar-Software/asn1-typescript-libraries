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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary Cancel_RequestPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Cancel-RequestPDU  ::=  Unsigned32
 * ```
 */
export
type Cancel_RequestPDU = Unsigned32; // DefinedType

let _cached_decoder_for_Cancel_RequestPDU: $.ASN1Decoder<Cancel_RequestPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Cancel_RequestPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Cancel_RequestPDU (el: _Element): Cancel_RequestPDU {
    if (!_cached_decoder_for_Cancel_RequestPDU) { _cached_decoder_for_Cancel_RequestPDU = _decode_Unsigned32; }
    return _cached_decoder_for_Cancel_RequestPDU(el);
}

let _cached_encoder_for_Cancel_RequestPDU: $.ASN1Encoder<Cancel_RequestPDU> | null = null;

/**
 * @summary Encodes a(n) Cancel_RequestPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Cancel_RequestPDU, encoded as an ASN.1 Element.
 */
export
function _encode_Cancel_RequestPDU (value: Cancel_RequestPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Cancel_RequestPDU) { _cached_encoder_for_Cancel_RequestPDU = _encode_Unsigned32; }
    return _cached_encoder_for_Cancel_RequestPDU(value, elGetter);
}


/* eslint-enable */
