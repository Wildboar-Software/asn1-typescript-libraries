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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';

/**
 * @summary ActionReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionReply  ::=  SET OF ManagementExtension
 * ```
 */
export type ActionReply = ManagementExtension[]; // SetOfType


let _cached_decoder_for_ActionReply: $.ASN1Decoder<ActionReply> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionReply} The decoded data structure.
 */
export function _decode_ActionReply(el: _Element) {
    if (!_cached_decoder_for_ActionReply) {
        _cached_decoder_for_ActionReply = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_ActionReply(el);
}


let _cached_encoder_for_ActionReply: $.ASN1Encoder<ActionReply> | null = null;


/**
 * @summary Encodes a(n) ActionReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionReply, encoded as an ASN.1 Element.
 */
export function _encode_ActionReply(
    value: ActionReply,
    elGetter: $.ASN1Encoder<ActionReply>
) {
    if (!_cached_encoder_for_ActionReply) {
        _cached_encoder_for_ActionReply = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_ActionReply(value, elGetter);
}


/* eslint-enable */
