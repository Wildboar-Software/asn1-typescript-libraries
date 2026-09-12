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
import { NullableBitString, _decode_NullableBitString, _encode_NullableBitString } from "../MMS-SCI-Module-1/NullableBitString.ta.mjs";
// export { NullableBitString, _decode_NullableBitString, _encode_NullableBitString } from "../MMS-SCI-Module-1/NullableBitString.ta.mjs";


/**
 * @summary NullableAdditionalCBBOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NullableAdditionalCBBOptions  ::=  NullableBitString
 * ```
 */
export
type NullableAdditionalCBBOptions = NullableBitString; // DefinedType

let _cached_decoder_for_NullableAdditionalCBBOptions: $.ASN1Decoder<NullableAdditionalCBBOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NullableAdditionalCBBOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NullableAdditionalCBBOptions (el: _Element): NullableAdditionalCBBOptions {
    if (!_cached_decoder_for_NullableAdditionalCBBOptions) { _cached_decoder_for_NullableAdditionalCBBOptions = _decode_NullableBitString; }
    return _cached_decoder_for_NullableAdditionalCBBOptions(el);
}

let _cached_encoder_for_NullableAdditionalCBBOptions: $.ASN1Encoder<NullableAdditionalCBBOptions> | null = null;

/**
 * @summary Encodes a(n) NullableAdditionalCBBOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NullableAdditionalCBBOptions, encoded as an ASN.1 Element.
 */
export
function _encode_NullableAdditionalCBBOptions (value: NullableAdditionalCBBOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NullableAdditionalCBBOptions) { _cached_encoder_for_NullableAdditionalCBBOptions = _encode_NullableBitString; }
    return _cached_encoder_for_NullableAdditionalCBBOptions(value, elGetter);
}


/* eslint-enable */
