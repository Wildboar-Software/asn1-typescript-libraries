/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * This argument contains all the sets of criteria that determine which messages shall be
 * delivered to the MTS-user, if any of these criteria are to be changed. If present, this
 * argument replaces the previously registered deliverable-classes. See ITU-T X.411 (1999),
 * §8.4.1.1.1.3.
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

/**
 * @summary Decodes an ASN.1 element into a(n) DeliverableClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverableClass} The decoded data structure.
 */
export const _decode_DeliverableClass: $.ASN1Decoder<DeliverableClass> = _decode_MessageClass;

/**
 * @summary Encodes a(n) DeliverableClass into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverableClass, encoded as an ASN.1 Element.
 */
export const _encode_DeliverableClass: $.ASN1Encoder<DeliverableClass> = _encode_MessageClass;


/* eslint-enable */
