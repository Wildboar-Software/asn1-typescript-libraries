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




/**
 * @summary Sap2Address
 * @description
 *
 * Set of addresses of a `sap2` (N)-SAP whose address is
 * independent of the underlying layer. GDMO MATCHES FOR
 * EQUALITY, SET-COMPARISON, SET-INTERSECTION. Registered
 * as `{joint-iso-ccitt ms(9) smi(3) part5(5) attribute(7)
 * sap2Address(9)}`. ITU-T Rec. X.723 (11/1993)
 * [§9.15](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §7.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sap2Address  ::=  SET OF OCTET STRING
 * ```
 */
export
type Sap2Address = OCTET_STRING[]; // SetOfType


let _cached_decoder_for_Sap2Address: $.ASN1Decoder<Sap2Address> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Sap2Address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Sap2Address} The decoded data structure.
 */
export
function _decode_Sap2Address (el: _Element): Sap2Address {
    if (!_cached_decoder_for_Sap2Address) { _cached_decoder_for_Sap2Address = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    return _cached_decoder_for_Sap2Address(el);
}


let _cached_encoder_for_Sap2Address: $.ASN1Encoder<Sap2Address> | null = null;


/**
 * @summary Encodes a(n) Sap2Address into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sap2Address, encoded as an ASN.1 Element.
 */
export
function _encode_Sap2Address (value: Sap2Address, elGetter: $.ASN1Encoder<Sap2Address>): _Element {
    if (!_cached_encoder_for_Sap2Address) { _cached_encoder_for_Sap2Address = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Sap2Address(value, elGetter);
}


/* eslint-enable */
