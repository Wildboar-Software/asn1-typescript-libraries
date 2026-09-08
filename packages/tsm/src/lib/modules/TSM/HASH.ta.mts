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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary HASH
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HASH{ToBeHashed}     ::=     Opaque(SIZE(0..255))
 *             (CONSTRAINED BY {ToBeHashed})
 * ```
 */
export
type HASH<ToBeHashed = unknown> = Opaque;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) HASH
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_HASH<ToBeHashed>(_decode_ToBeHashed: $.ASN1Decoder<ToBeHashed>): $.ASN1Decoder<HASH<ToBeHashed>> {
    return (el: _Element): HASH<ToBeHashed> => {
        const value = _decode_Opaque(el);
        if (value.length > 255) {
            throw new ASN1SizeError("HASH violates SIZE constraint");
        }
        return value;
    };
}


/**
 * @summary Returns a function that will encode a(n) HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) HASH as an ASN.1 element.
 */
export
function _get_encoder_for_HASH<ToBeHashed>(_encode_ToBeHashed: $.ASN1Encoder<ToBeHashed>): $.ASN1Encoder<HASH<ToBeHashed>> {
    return _encode_Opaque;
}

/* eslint-enable */
