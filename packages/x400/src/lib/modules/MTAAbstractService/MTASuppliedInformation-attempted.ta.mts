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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
import {
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.mjs';
/**
 * @summary MTASuppliedInformation_attempted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTASuppliedInformation-attempted ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type MTASuppliedInformation_attempted =
    | { mta: MTAName } /* CHOICE_ALT_ROOT */
    | { domain: GlobalDomainIdentifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MTASuppliedInformation_attempted: $.ASN1Decoder<MTASuppliedInformation_attempted> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTASuppliedInformation_attempted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTASuppliedInformation_attempted} The decoded data structure.
 */
export function _decode_MTASuppliedInformation_attempted(el: _Element): MTASuppliedInformation_attempted {
    if (!_cached_decoder_for_MTASuppliedInformation_attempted) {
        _cached_decoder_for_MTASuppliedInformation_attempted = $._decode_inextensible_choice<MTASuppliedInformation_attempted>(
            {
                'UNIVERSAL 22': ['mta', _decode_MTAName],
                'APPLICATION 3': ['domain', _decode_GlobalDomainIdentifier],
            }
        );
    }
    return _cached_decoder_for_MTASuppliedInformation_attempted(el);
}

let _cached_encoder_for_MTASuppliedInformation_attempted: $.ASN1Encoder<MTASuppliedInformation_attempted> | null = null;

/**
 * @summary Encodes a(n) MTASuppliedInformation_attempted into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTASuppliedInformation_attempted, encoded as an ASN.1 Element.
 */
export function _encode_MTASuppliedInformation_attempted(
    value: MTASuppliedInformation_attempted,
    elGetter: $.ASN1Encoder<MTASuppliedInformation_attempted>
): _Element {
    if (!_cached_encoder_for_MTASuppliedInformation_attempted) {
        _cached_encoder_for_MTASuppliedInformation_attempted = $._encode_choice<MTASuppliedInformation_attempted>(
            {
                mta: _encode_MTAName,
                domain: _encode_GlobalDomainIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTASuppliedInformation_attempted(
        value,
        elGetter
    );
}


/* eslint-enable */
