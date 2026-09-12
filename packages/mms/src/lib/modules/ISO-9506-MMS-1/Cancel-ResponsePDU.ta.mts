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
 * @summary Cancel_ResponsePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Cancel-ResponsePDU  ::=  Unsigned32
 * ```
 */
export
type Cancel_ResponsePDU = Unsigned32; // DefinedType

let _cached_decoder_for_Cancel_ResponsePDU: $.ASN1Decoder<Cancel_ResponsePDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Cancel_ResponsePDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Cancel_ResponsePDU (el: _Element): Cancel_ResponsePDU {
    if (!_cached_decoder_for_Cancel_ResponsePDU) { _cached_decoder_for_Cancel_ResponsePDU = _decode_Unsigned32; }
    return _cached_decoder_for_Cancel_ResponsePDU(el);
}

let _cached_encoder_for_Cancel_ResponsePDU: $.ASN1Encoder<Cancel_ResponsePDU> | null = null;

/**
 * @summary Encodes a(n) Cancel_ResponsePDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Cancel_ResponsePDU, encoded as an ASN.1 Element.
 */
export
function _encode_Cancel_ResponsePDU (value: Cancel_ResponsePDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Cancel_ResponsePDU) { _cached_encoder_for_Cancel_ResponsePDU = _encode_Unsigned32; }
    return _cached_encoder_for_Cancel_ResponsePDU(value, elGetter);
}


/* eslint-enable */
