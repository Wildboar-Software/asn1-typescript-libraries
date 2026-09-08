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
import { BiometricMethod, _decode_BiometricMethod, _encode_BiometricMethod } from "../TSM/BiometricMethod.ta.mjs";



/**
 * @summary BiometricClientHello
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricClientHello  ::=  SEQUENCE(SIZE(1..MAX)) OF BiometricMethod
 * ```
 */
export
type BiometricClientHello = BiometricMethod[]; // SequenceOfType

let _cached_decoder_for_BiometricClientHello: $.ASN1Decoder<BiometricClientHello> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricClientHello
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricClientHello (el: _Element): BiometricClientHello {
    if (!_cached_decoder_for_BiometricClientHello) { _cached_decoder_for_BiometricClientHello = $._decodeSequenceOf<BiometricMethod>(() => _decode_BiometricMethod); }
    const value = _cached_decoder_for_BiometricClientHello(el);
    if (value.length < 1 ) {
        throw new ASN1SizeError("BiometricClientHello violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_BiometricClientHello: $.ASN1Encoder<BiometricClientHello> | null = null;

/**
 * @summary Encodes a(n) BiometricClientHello into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricClientHello, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricClientHello (value: BiometricClientHello, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricClientHello) { _cached_encoder_for_BiometricClientHello = $._encodeSequenceOf<BiometricMethod>(() => _encode_BiometricMethod, $.BER); }
    return _cached_encoder_for_BiometricClientHello(value, elGetter);
}


/* eslint-enable */
