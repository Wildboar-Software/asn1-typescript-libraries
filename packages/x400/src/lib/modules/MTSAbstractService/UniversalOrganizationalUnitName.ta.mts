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
 * @summary UniversalOrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationalUnitName  ::=
 *   UniversalOrBMPString{ub-organizational-unit-name-length}
 * ```
 */
export type UniversalOrganizationalUnitName = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_UniversalOrganizationalUnitName: $.ASN1Decoder<UniversalOrganizationalUnitName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitName} The decoded data structure.
 */
export function _decode_UniversalOrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitName) {
        _cached_decoder_for_UniversalOrganizationalUnitName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationalUnitName(el);
}

let _cached_encoder_for_UniversalOrganizationalUnitName: $.ASN1Encoder<UniversalOrganizationalUnitName> | null = null;

/**
 * @summary Encodes a(n) UniversalOrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationalUnitName(
    value: UniversalOrganizationalUnitName,
    elGetter: $.ASN1Encoder<UniversalOrganizationalUnitName>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitName) {
        _cached_encoder_for_UniversalOrganizationalUnitName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationalUnitName(value, elGetter);
}


/* eslint-enable */
