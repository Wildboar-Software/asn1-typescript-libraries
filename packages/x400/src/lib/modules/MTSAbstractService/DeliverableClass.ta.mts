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
    MessageClass,
    _decode_MessageClass,
    _encode_MessageClass,
} from '../MTSAbstractService/MessageClass.ta.mjs';
/**
 * @summary DeliverableClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverableClass  ::=
 *   MessageClass
 *     (WITH COMPONENTS {
 *        ...,
 *        priority         ABSENT,
 *        -- The 'objects' component shall always be defaulted.
 *        -- objects ABSENT,
 *        -- A component with a DEFAULT clause cannot be ABSENT
 *        applies-only-to  ABSENT
 *      })
 * ```
 */
export type DeliverableClass = MessageClass; // DefinedType

let _cached_decoder_for_DeliverableClass: $.ASN1Decoder<DeliverableClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliverableClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverableClass} The decoded data structure.
 */
export function _decode_DeliverableClass(el: _Element) {
    if (!_cached_decoder_for_DeliverableClass) {
        _cached_decoder_for_DeliverableClass = _decode_MessageClass;
    }
    return _cached_decoder_for_DeliverableClass(el);
}

let _cached_encoder_for_DeliverableClass: $.ASN1Encoder<DeliverableClass> | null = null;

/**
 * @summary Encodes a(n) DeliverableClass into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverableClass, encoded as an ASN.1 Element.
 */
export function _encode_DeliverableClass(
    value: DeliverableClass,
    elGetter: $.ASN1Encoder<DeliverableClass>
) {
    if (!_cached_encoder_for_DeliverableClass) {
        _cached_encoder_for_DeliverableClass = _encode_MessageClass;
    }
    return _cached_encoder_for_DeliverableClass(value, elGetter);
}


/* eslint-enable */
