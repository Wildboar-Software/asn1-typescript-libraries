/* eslint-disable */
import {
    INTEGER,
    NULL,
    VisibleString,
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



/**
 * @summary CS_DefineEventEnrollment_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-DefineEventEnrollment-Request  ::=  [0] CHOICE {
 *    string                           [0] IMPLICIT VisibleString,
 *    index                            [1] IMPLICIT INTEGER,
 *    noEnhancement                    NULL   }
 * ```
 */
export
type CS_DefineEventEnrollment_Request =
    { string_: VisibleString } /* CHOICE_ALT_ROOT */
    | { index: INTEGER } /* CHOICE_ALT_ROOT */
    | { noEnhancement: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_DefineEventEnrollment_Request: $.ASN1Decoder<CS_DefineEventEnrollment_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_DefineEventEnrollment_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_DefineEventEnrollment_Request (el: _Element): CS_DefineEventEnrollment_Request {
    if (!_cached_decoder_for_CS_DefineEventEnrollment_Request) { _cached_decoder_for_CS_DefineEventEnrollment_Request = $._decode_explicit<CS_DefineEventEnrollment_Request>(() => $._decode_inextensible_choice<CS_DefineEventEnrollment_Request>({
    "CONTEXT 0": [ "string_", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 1": [ "index", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 5": [ "noEnhancement", $._decodeNull ]
})); }
    return _cached_decoder_for_CS_DefineEventEnrollment_Request(el);
}

let _cached_encoder_for_CS_DefineEventEnrollment_Request: $.ASN1Encoder<CS_DefineEventEnrollment_Request> | null = null;

/**
 * @summary Encodes a(n) CS_DefineEventEnrollment_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_DefineEventEnrollment_Request, encoded as an ASN.1 Element.
 */
export
function _encode_CS_DefineEventEnrollment_Request (value: CS_DefineEventEnrollment_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_DefineEventEnrollment_Request) { _cached_encoder_for_CS_DefineEventEnrollment_Request = $._encode_explicit(_TagClass.context, 0, () => $._encode_choice<CS_DefineEventEnrollment_Request>({
    "string_": $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER),
    "index": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "noEnhancement": $._encodeNull,
}, $.BER), $.BER); }
    return _cached_encoder_for_CS_DefineEventEnrollment_Request(value, elGetter);
}


/* eslint-enable */
