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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/**
 * @summary OriginatorsReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorsReference  ::=  UniversalOrBMPString{ub-originators-reference-length}
 * ```
 */
export type OriginatorsReference = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_OriginatorsReference: $.ASN1Decoder<OriginatorsReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorsReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorsReference} The decoded data structure.
 */
export function _decode_OriginatorsReference(el: _Element) {
    if (!_cached_decoder_for_OriginatorsReference) {
        _cached_decoder_for_OriginatorsReference = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_OriginatorsReference(el);
}

let _cached_encoder_for_OriginatorsReference: $.ASN1Encoder<OriginatorsReference> | null = null;

/**
 * @summary Encodes a(n) OriginatorsReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorsReference, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorsReference(
    value: OriginatorsReference,
    elGetter: $.ASN1Encoder<OriginatorsReference>
) {
    if (!_cached_encoder_for_OriginatorsReference) {
        _cached_encoder_for_OriginatorsReference = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_OriginatorsReference(value, elGetter);
}


/* eslint-enable */
