/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary Packages
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Packages  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export
type Packages = OBJECT_IDENTIFIER[]; // SetOfType

let _cached_decoder_for_Packages: $.ASN1Decoder<Packages> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Packages
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Packages} The decoded data structure.
 */
export
function _decode_Packages (el: _Element): Packages {
    if (!_cached_decoder_for_Packages) { _cached_decoder_for_Packages = $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier); }
    return _cached_decoder_for_Packages(el);
}

let _cached_encoder_for_Packages: $.ASN1Encoder<Packages> | null = null;

/**
 * @summary Encodes a(n) Packages into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Packages, encoded as an ASN.1 Element.
 */
export
function _encode_Packages (value: Packages, elGetter: $.ASN1Encoder<Packages>): _Element {
    if (!_cached_encoder_for_Packages) { _cached_encoder_for_Packages = $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER); }
    return _cached_encoder_for_Packages(value, elGetter);
}


/* eslint-enable */
