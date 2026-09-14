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
 * @summary ROAProtocols
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ROAProtocols  ::=  SEQUENCE OF OBJECT IDENTIFIER
 * ```
 */
export
type ROAProtocols = OBJECT_IDENTIFIER[]; // SequenceOfType

let _cached_decoder_for_ROAProtocols: $.ASN1Decoder<ROAProtocols> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ROAProtocols
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ROAProtocols (el: _Element): ROAProtocols {
    if (!_cached_decoder_for_ROAProtocols) { _cached_decoder_for_ROAProtocols = $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier); }
    return _cached_decoder_for_ROAProtocols(el);
}

let _cached_encoder_for_ROAProtocols: $.ASN1Encoder<ROAProtocols> | null = null;

/**
 * @summary Encodes a(n) ROAProtocols into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROAProtocols, encoded as an ASN.1 Element.
 */
export
function _encode_ROAProtocols (value: ROAProtocols, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ROAProtocols) { _cached_encoder_for_ROAProtocols = $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER); }
    return _cached_encoder_for_ROAProtocols(value, elGetter);
}


/* eslint-enable */
