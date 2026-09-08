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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";



/**
 * @summary DistinguishedNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistinguishedNames     ::=     SEQUENCE OF DistinguishedName
 * ```
 */
export
type DistinguishedNames = DistinguishedName[]; // SequenceOfType

let _cached_decoder_for_DistinguishedNames: $.ASN1Decoder<DistinguishedNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedNames
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistinguishedNames (el: _Element): DistinguishedNames {
    if (!_cached_decoder_for_DistinguishedNames) { _cached_decoder_for_DistinguishedNames = $._decodeSequenceOf<DistinguishedName>(() => _decode_DistinguishedName); }
    return _cached_decoder_for_DistinguishedNames(el);
}

let _cached_encoder_for_DistinguishedNames: $.ASN1Encoder<DistinguishedNames> | null = null;

/**
 * @summary Encodes a(n) DistinguishedNames into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedNames, encoded as an ASN.1 Element.
 */
export
function _encode_DistinguishedNames (value: DistinguishedNames, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistinguishedNames) { _cached_encoder_for_DistinguishedNames = $._encodeSequenceOf<DistinguishedName>(() => _encode_DistinguishedName, $.BER); }
    return _cached_encoder_for_DistinguishedNames(value, elGetter);
}


/* eslint-enable */
