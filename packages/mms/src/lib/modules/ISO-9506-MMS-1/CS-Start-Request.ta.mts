/* eslint-disable */
import {
    NULL,
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
import { CS_Start_Request_controlling, _decode_CS_Start_Request_controlling, _encode_CS_Start_Request_controlling } from "../ISO-9506-MMS-1/CS-Start-Request-controlling.ta.mjs";
// export { CS_Start_Request_controlling, _decode_CS_Start_Request_controlling, _encode_CS_Start_Request_controlling } from "../ISO-9506-MMS-1/CS-Start-Request-controlling.ta.mjs";


/**
 * @summary CS_Start_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Start-Request  ::=  [0] CHOICE {
 *    normal           NULL,
 *    controlling      SEQUENCE {
 *        startLocation          [0] IMPLICIT VisibleString OPTIONAL,
 *        startCount             [1] StartCount DEFAULT cycleCount: 1
 *        }  }
 * ```
 */
export
type CS_Start_Request =
    { normal: NULL } /* CHOICE_ALT_ROOT */
    | { controlling: CS_Start_Request_controlling } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_Start_Request: $.ASN1Decoder<CS_Start_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Start_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Start_Request (el: _Element): CS_Start_Request {
    if (!_cached_decoder_for_CS_Start_Request) { _cached_decoder_for_CS_Start_Request = $._decode_explicit<CS_Start_Request>(() => $._decode_inextensible_choice<CS_Start_Request>({
    "UNIVERSAL 5": [ "normal", $._decodeNull ],
    "UNIVERSAL 16": [ "controlling", _decode_CS_Start_Request_controlling ]
})); }
    return _cached_decoder_for_CS_Start_Request(el);
}

let _cached_encoder_for_CS_Start_Request: $.ASN1Encoder<CS_Start_Request> | null = null;

/**
 * @summary Encodes a(n) CS_Start_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Start_Request, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Start_Request (value: CS_Start_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Start_Request) { _cached_encoder_for_CS_Start_Request = $._encode_explicit(_TagClass.context, 0, () => $._encode_choice<CS_Start_Request>({
    "normal": $._encodeNull,
    "controlling": _encode_CS_Start_Request_controlling,
}, $.BER), $.BER); }
    return _cached_encoder_for_CS_Start_Request(value, elGetter);
}


/* eslint-enable */
