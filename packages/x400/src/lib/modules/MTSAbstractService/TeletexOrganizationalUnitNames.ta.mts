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
    TeletexOrganizationalUnitName,
    _decode_TeletexOrganizationalUnitName,
    _encode_TeletexOrganizationalUnitName,
} from '../MTSAbstractService/TeletexOrganizationalUnitName.ta.mjs';
/**
 * @summary TeletexOrganizationalUnitNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexOrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF TeletexOrganizationalUnitName
 * ```
 */
export type TeletexOrganizationalUnitNames = TeletexOrganizationalUnitName[]; // SequenceOfType

let _cached_decoder_for_TeletexOrganizationalUnitNames: $.ASN1Decoder<TeletexOrganizationalUnitNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexOrganizationalUnitNames} The decoded data structure.
 */
export function _decode_TeletexOrganizationalUnitNames(el: _Element): TeletexOrganizationalUnitNames {
    if (!_cached_decoder_for_TeletexOrganizationalUnitNames) {
        _cached_decoder_for_TeletexOrganizationalUnitNames = $._decodeSequenceOf<TeletexOrganizationalUnitName>(
            () => _decode_TeletexOrganizationalUnitName
        );
    }
    return _cached_decoder_for_TeletexOrganizationalUnitNames(el);
}

let _cached_encoder_for_TeletexOrganizationalUnitNames: $.ASN1Encoder<TeletexOrganizationalUnitNames> | null = null;

/**
 * @summary Encodes a(n) TeletexOrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_TeletexOrganizationalUnitNames(
    value: TeletexOrganizationalUnitNames,
    elGetter: $.ASN1Encoder<TeletexOrganizationalUnitNames>
): _Element {
    if (!_cached_encoder_for_TeletexOrganizationalUnitNames) {
        _cached_encoder_for_TeletexOrganizationalUnitNames = $._encodeSequenceOf<TeletexOrganizationalUnitName>(
            () => _encode_TeletexOrganizationalUnitName,
            $.BER
        );
    }
    return _cached_encoder_for_TeletexOrganizationalUnitNames(value, elGetter);
}


/* eslint-enable */
