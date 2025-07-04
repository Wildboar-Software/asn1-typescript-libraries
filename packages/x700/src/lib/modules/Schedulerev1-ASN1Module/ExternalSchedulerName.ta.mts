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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
/**
 * @summary ExternalSchedulerName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalSchedulerName  ::=  SET OF ObjectInstance
 * ```
 */
export type ExternalSchedulerName = ObjectInstance[]; // SetOfType

let _cached_decoder_for_ExternalSchedulerName: $.ASN1Decoder<ExternalSchedulerName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalSchedulerName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExternalSchedulerName} The decoded data structure.
 */
export function _decode_ExternalSchedulerName(el: _Element): ExternalSchedulerName {
    if (!_cached_decoder_for_ExternalSchedulerName) {
        _cached_decoder_for_ExternalSchedulerName = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ExternalSchedulerName(el);
}

let _cached_encoder_for_ExternalSchedulerName: $.ASN1Encoder<ExternalSchedulerName> | null = null;

/**
 * @summary Encodes a(n) ExternalSchedulerName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalSchedulerName, encoded as an ASN.1 Element.
 */
export function _encode_ExternalSchedulerName(
    value: ExternalSchedulerName,
    elGetter: $.ASN1Encoder<ExternalSchedulerName>
): _Element {
    if (!_cached_encoder_for_ExternalSchedulerName) {
        _cached_encoder_for_ExternalSchedulerName = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ExternalSchedulerName(value, elGetter);
}


/* eslint-enable */
