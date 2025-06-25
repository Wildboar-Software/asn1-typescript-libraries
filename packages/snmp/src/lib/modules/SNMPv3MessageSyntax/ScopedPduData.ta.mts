/* eslint-disable */
import {
    OCTET_STRING,
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
import { ScopedPDU, _decode_ScopedPDU, _encode_ScopedPDU } from "../SNMPv3MessageSyntax/ScopedPDU.ta.mjs";
/**
 * @summary ScopedPduData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScopedPduData  ::=  CHOICE {
 *         plaintext    ScopedPDU,
 *         encryptedPDU OCTET STRING  -- encrypted scopedPDU value
 *     }
 * ```
 */
export
type ScopedPduData =
    { plaintext: ScopedPDU } /* CHOICE_ALT_ROOT */
    | { encryptedPDU: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ScopedPduData: $.ASN1Decoder<ScopedPduData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScopedPduData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScopedPduData} The decoded data structure.
 */
export
function _decode_ScopedPduData (el: _Element): ScopedPduData {
    if (!_cached_decoder_for_ScopedPduData) { _cached_decoder_for_ScopedPduData = $._decode_inextensible_choice<ScopedPduData>({
    "UNIVERSAL 16": [ "plaintext", _decode_ScopedPDU ],
    "UNIVERSAL 4": [ "encryptedPDU", $._decodeOctetString ]
}); }
    return _cached_decoder_for_ScopedPduData(el);
}

let _cached_encoder_for_ScopedPduData: $.ASN1Encoder<ScopedPduData> | null = null;

/**
 * @summary Encodes a(n) ScopedPduData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopedPduData, encoded as an ASN.1 Element.
 */
export
function _encode_ScopedPduData (value: ScopedPduData, elGetter: $.ASN1Encoder<ScopedPduData>): _Element {
    if (!_cached_encoder_for_ScopedPduData) { _cached_encoder_for_ScopedPduData = $._encode_choice<ScopedPduData>({
    "plaintext": _encode_ScopedPDU,
    "encryptedPDU": $._encodeOctetString,
}, $.BER); }
    return _cached_encoder_for_ScopedPduData(value, elGetter);
}


/* eslint-enable */
