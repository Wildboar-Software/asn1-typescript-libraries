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
 * @summary NullableAdditionalSupportOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NullableAdditionalSupportOptions  ::=  NullableBitString
 * ```
 */
export
type NullableAdditionalSupportOptions = NullableBitString; // DefinedType

let _cached_decoder_for_NullableAdditionalSupportOptions: $.ASN1Decoder<NullableAdditionalSupportOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NullableAdditionalSupportOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NullableAdditionalSupportOptions (el: _Element): NullableAdditionalSupportOptions {
    if (!_cached_decoder_for_NullableAdditionalSupportOptions) { _cached_decoder_for_NullableAdditionalSupportOptions = _decode_NullableBitString; }
    return _cached_decoder_for_NullableAdditionalSupportOptions(el);
}

let _cached_encoder_for_NullableAdditionalSupportOptions: $.ASN1Encoder<NullableAdditionalSupportOptions> | null = null;

/**
 * @summary Encodes a(n) NullableAdditionalSupportOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NullableAdditionalSupportOptions, encoded as an ASN.1 Element.
 */
export
function _encode_NullableAdditionalSupportOptions (value: NullableAdditionalSupportOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NullableAdditionalSupportOptions) { _cached_encoder_for_NullableAdditionalSupportOptions = _encode_NullableBitString; }
    return _cached_encoder_for_NullableAdditionalSupportOptions(value, elGetter);
}


/* eslint-enable */
