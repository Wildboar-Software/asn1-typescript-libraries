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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/**
 * @summary DescriptionString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DescriptionString  ::=  UniversalOrBMPString{ub-information-category-length}
 * ```
 */
export type DescriptionString = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_DescriptionString: $.ASN1Decoder<DescriptionString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DescriptionString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DescriptionString} The decoded data structure.
 */
export function _decode_DescriptionString(el: _Element): DescriptionString {
    if (!_cached_decoder_for_DescriptionString) {
        _cached_decoder_for_DescriptionString = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_DescriptionString(el);
}

let _cached_encoder_for_DescriptionString: $.ASN1Encoder<DescriptionString> | null = null;

/**
 * @summary Encodes a(n) DescriptionString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DescriptionString, encoded as an ASN.1 Element.
 */
export function _encode_DescriptionString(
    value: DescriptionString,
    elGetter: $.ASN1Encoder<DescriptionString>
): _Element {
    if (!_cached_encoder_for_DescriptionString) {
        _cached_encoder_for_DescriptionString = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_DescriptionString(value, elGetter);
}


/* eslint-enable */
