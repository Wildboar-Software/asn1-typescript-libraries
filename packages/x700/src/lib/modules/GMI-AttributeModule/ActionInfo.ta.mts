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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';

/**
 * @summary ActionInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionInfo  ::=  SET OF ManagementExtension
 * ```
 */
export type ActionInfo = ManagementExtension[]; // SetOfType


let _cached_decoder_for_ActionInfo: $.ASN1Decoder<ActionInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionInfo} The decoded data structure.
 */
export function _decode_ActionInfo(el: _Element) {
    if (!_cached_decoder_for_ActionInfo) {
        _cached_decoder_for_ActionInfo = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_ActionInfo(el);
}


let _cached_encoder_for_ActionInfo: $.ASN1Encoder<ActionInfo> | null = null;


/**
 * @summary Encodes a(n) ActionInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionInfo, encoded as an ASN.1 Element.
 */
export function _encode_ActionInfo(
    value: ActionInfo,
    elGetter: $.ASN1Encoder<ActionInfo>
) {
    if (!_cached_encoder_for_ActionInfo) {
        _cached_encoder_for_ActionInfo = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_ActionInfo(value, elGetter);
}


/* eslint-enable */
