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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary OtherInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherInfo  ::=  SET OF ManagementExtension
 * ```
 */
export type OtherInfo = ManagementExtension[]; // SetOfType

let _cached_decoder_for_OtherInfo: $.ASN1Decoder<OtherInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherInfo} The decoded data structure.
 */
export function _decode_OtherInfo(el: _Element) {
    if (!_cached_decoder_for_OtherInfo) {
        _cached_decoder_for_OtherInfo = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_OtherInfo(el);
}

let _cached_encoder_for_OtherInfo: $.ASN1Encoder<OtherInfo> | null = null;

/**
 * @summary Encodes a(n) OtherInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherInfo, encoded as an ASN.1 Element.
 */
export function _encode_OtherInfo(
    value: OtherInfo,
    elGetter: $.ASN1Encoder<OtherInfo>
) {
    if (!_cached_encoder_for_OtherInfo) {
        _cached_encoder_for_OtherInfo = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_OtherInfo(value, elGetter);
}


/* eslint-enable */
