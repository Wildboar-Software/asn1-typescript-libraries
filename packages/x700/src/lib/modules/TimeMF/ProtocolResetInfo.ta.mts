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
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.mjs';
/**
 * @summary ProtocolResetInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolResetInfo  ::=  SET OF Attribute
 * ```
 */
export type ProtocolResetInfo = Attribute[]; // SetOfType

let _cached_decoder_for_ProtocolResetInfo: $.ASN1Decoder<ProtocolResetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolResetInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolResetInfo} The decoded data structure.
 */
export function _decode_ProtocolResetInfo(el: _Element): ProtocolResetInfo {
    if (!_cached_decoder_for_ProtocolResetInfo) {
        _cached_decoder_for_ProtocolResetInfo = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_ProtocolResetInfo(el);
}

let _cached_encoder_for_ProtocolResetInfo: $.ASN1Encoder<ProtocolResetInfo> | null = null;

/**
 * @summary Encodes a(n) ProtocolResetInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolResetInfo, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolResetInfo(
    value: ProtocolResetInfo,
    elGetter: $.ASN1Encoder<ProtocolResetInfo>
): _Element {
    if (!_cached_encoder_for_ProtocolResetInfo) {
        _cached_encoder_for_ProtocolResetInfo = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_ProtocolResetInfo(value, elGetter);
}


/* eslint-enable */
