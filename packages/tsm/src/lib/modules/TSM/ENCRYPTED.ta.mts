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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ENCRYPTED
 * @description
 *
 * Ciphertext of `ToBeEnciphered` as `OCTET STRING(SIZE(0..255))` with
 * a content constraint. Wraps `PreMasterSecret`. ITU-T Rec. X.1084
 * (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENCRYPTED{ToBeEnciphered}     ::=  OCTET STRING(SIZE(0..255))
 * (CONSTRAINED BY {ToBeEnciphered})
 * ```
 */
export
type ENCRYPTED<ToBeEnciphered = unknown> = OCTET_STRING;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_ENCRYPTED<ToBeEnciphered>(_decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>): $.ASN1Decoder<ENCRYPTED<ToBeEnciphered>> {
    return (el: _Element): ENCRYPTED<ToBeEnciphered> => {
        const value = $._decodeOctetString(el);
        if (value.length > 255) {
            throw new ASN1SizeError("ENCRYPTED violates SIZE constraint");
        }
        return value;
    };
}


/**
 * @summary Returns a function that will encode a(n) ENCRYPTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED as an ASN.1 element.
 */
export
function _get_encoder_for_ENCRYPTED<ToBeEnciphered>(_encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>): $.ASN1Encoder<ENCRYPTED<ToBeEnciphered>> {
    return $._encodeOctetString;
}

/* eslint-enable */
