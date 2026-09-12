/* eslint-disable */
import {
    OCTET_STRING,
    EXTERNAL,
    EMBEDDED_PDV,
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
 * @summary LoadData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoadData  ::=  CHOICE {
 *    non-coded              [0] IMPLICIT OCTET STRING,
 *    coded                  EXTERNAL,
 *    embedded               EMBEDDED PDV }
 * ```
 */
export
type LoadData =
    { non_coded: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { coded: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { embedded: EMBEDDED_PDV } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LoadData: $.ASN1Decoder<LoadData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoadData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LoadData (el: _Element): LoadData {
    if (!_cached_decoder_for_LoadData) { _cached_decoder_for_LoadData = $._decode_inextensible_choice<LoadData>({
    "CONTEXT 0": [ "non_coded", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "UNIVERSAL 8": [ "coded", $._decodeExternal ],
    "UNIVERSAL 11": [ "embedded", $._decodeEmbeddedPDV ]
}); }
    return _cached_decoder_for_LoadData(el);
}

let _cached_encoder_for_LoadData: $.ASN1Encoder<LoadData> | null = null;

/**
 * @summary Encodes a(n) LoadData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoadData, encoded as an ASN.1 Element.
 */
export
function _encode_LoadData (value: LoadData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LoadData) { _cached_encoder_for_LoadData = $._encode_choice<LoadData>({
    "non_coded": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "coded": $._encodeExternal,
    "embedded": $._encodeEmbeddedPDV,
}, $.BER); }
    return _cached_encoder_for_LoadData(value, elGetter);
}


/* eslint-enable */
