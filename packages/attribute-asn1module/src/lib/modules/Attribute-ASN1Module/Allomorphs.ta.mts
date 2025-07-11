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
import { ObjectClass, _decode_ObjectClass, _encode_ObjectClass } from "@wildboar/cmip";
/**
 * @summary Allomorphs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Allomorphs  ::=  SET OF ObjectClass
 * ```
 */
export
type Allomorphs = ObjectClass[]; // SetOfType

let _cached_decoder_for_Allomorphs: $.ASN1Decoder<Allomorphs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Allomorphs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Allomorphs} The decoded data structure.
 */
export
function _decode_Allomorphs (el: _Element): Allomorphs {
    if (!_cached_decoder_for_Allomorphs) { _cached_decoder_for_Allomorphs = $._decodeSetOf<ObjectClass>(() => _decode_ObjectClass); }
    return _cached_decoder_for_Allomorphs(el);
}

let _cached_encoder_for_Allomorphs: $.ASN1Encoder<Allomorphs> | null = null;

/**
 * @summary Encodes a(n) Allomorphs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Allomorphs, encoded as an ASN.1 Element.
 */
export
function _encode_Allomorphs (value: Allomorphs, elGetter: $.ASN1Encoder<Allomorphs>): _Element {
    if (!_cached_encoder_for_Allomorphs) { _cached_encoder_for_Allomorphs = $._encodeSetOf<ObjectClass>(() => _encode_ObjectClass, $.BER); }
    return _cached_encoder_for_Allomorphs(value, elGetter);
}


/* eslint-enable */
