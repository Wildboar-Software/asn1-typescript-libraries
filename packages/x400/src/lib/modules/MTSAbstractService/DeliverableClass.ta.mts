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
 * `DeliverableClass`. This argument contains all the sets of criteria that determine
 * which messages shall be delivered to the MTS-user, if any of these criteria are to be
 * changed. If present, this argument replaces the previously registered
 * deliverable-classes. See ITU-T X.411 (1999), §8.4.1.1.1.3. ASN.1 DEFAULT `clause`:
 * that value is assumed when the component is absent (do not encode the default unless
 * required).
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
export function _decode_DeliverableClass(el: _Element): DeliverableClass {
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
): _Element {
    if (!_cached_encoder_for_DeliverableClass) {
        _cached_encoder_for_DeliverableClass = _encode_MessageClass;
    }
    return _cached_encoder_for_DeliverableClass(value, elGetter);
}


/* eslint-enable */
