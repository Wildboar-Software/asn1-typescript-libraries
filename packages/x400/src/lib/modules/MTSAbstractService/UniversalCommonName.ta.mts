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
 * @summary UniversalCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalCommonName  ::=  UniversalOrBMPString{ub-common-name-length}
 * ```
 */
export type UniversalCommonName = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_UniversalCommonName: $.ASN1Decoder<UniversalCommonName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalCommonName} The decoded data structure.
 */
export function _decode_UniversalCommonName(el: _Element) {
    if (!_cached_decoder_for_UniversalCommonName) {
        _cached_decoder_for_UniversalCommonName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalCommonName(el);
}

let _cached_encoder_for_UniversalCommonName: $.ASN1Encoder<UniversalCommonName> | null = null;

/**
 * @summary Encodes a(n) UniversalCommonName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalCommonName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalCommonName(
    value: UniversalCommonName,
    elGetter: $.ASN1Encoder<UniversalCommonName>
) {
    if (!_cached_encoder_for_UniversalCommonName) {
        _cached_encoder_for_UniversalCommonName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalCommonName(value, elGetter);
}


/* eslint-enable */
