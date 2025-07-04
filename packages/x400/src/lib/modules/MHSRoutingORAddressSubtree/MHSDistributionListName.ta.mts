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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/InformationFramework';
/**
 * @summary MHSDistributionListName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MHSDistributionListName  ::=  DistinguishedName
 * ```
 */
export type MHSDistributionListName = DistinguishedName; // DefinedType

let _cached_decoder_for_MHSDistributionListName: $.ASN1Decoder<MHSDistributionListName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MHSDistributionListName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MHSDistributionListName} The decoded data structure.
 */
export function _decode_MHSDistributionListName(el: _Element): MHSDistributionListName {
    if (!_cached_decoder_for_MHSDistributionListName) {
        _cached_decoder_for_MHSDistributionListName = _decode_DistinguishedName;
    }
    return _cached_decoder_for_MHSDistributionListName(el);
}

let _cached_encoder_for_MHSDistributionListName: $.ASN1Encoder<MHSDistributionListName> | null = null;

/**
 * @summary Encodes a(n) MHSDistributionListName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MHSDistributionListName, encoded as an ASN.1 Element.
 */
export function _encode_MHSDistributionListName(
    value: MHSDistributionListName,
    elGetter: $.ASN1Encoder<MHSDistributionListName>
): _Element {
    if (!_cached_encoder_for_MHSDistributionListName) {
        _cached_encoder_for_MHSDistributionListName = _encode_DistinguishedName;
    }
    return _cached_encoder_for_MHSDistributionListName(value, elGetter);
}


/* eslint-enable */
