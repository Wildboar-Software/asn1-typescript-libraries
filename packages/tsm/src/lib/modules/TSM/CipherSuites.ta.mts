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
import { CipherSuite, _enum_for_CipherSuite, _decode_CipherSuite, _encode_CipherSuite } from "../TSM/CipherSuite.ta.mjs";



/**
 * @summary CipherSuites
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CipherSuites     ::=     SEQUENCE(SIZE(1..32767)) OF CipherSuite
 * ```
 */
export
type CipherSuites = CipherSuite[]; // SequenceOfType

let _cached_decoder_for_CipherSuites: $.ASN1Decoder<CipherSuites> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CipherSuites
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CipherSuites (el: _Element): CipherSuites {
    if (!_cached_decoder_for_CipherSuites) { _cached_decoder_for_CipherSuites = $._decodeSequenceOf<CipherSuite>(() => _decode_CipherSuite); }
    const value = _cached_decoder_for_CipherSuites(el);
    if (value.length < 1 || value.length > 32767 ) {
        throw new ASN1SizeError("CipherSuites violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CipherSuites: $.ASN1Encoder<CipherSuites> | null = null;

/**
 * @summary Encodes a(n) CipherSuites into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CipherSuites, encoded as an ASN.1 Element.
 */
export
function _encode_CipherSuites (value: CipherSuites, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CipherSuites) { _cached_encoder_for_CipherSuites = $._encodeSequenceOf<CipherSuite>(() => _encode_CipherSuite, $.BER); }
    return _cached_encoder_for_CipherSuites(value, elGetter);
}


/* eslint-enable */
