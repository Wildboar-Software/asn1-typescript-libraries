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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary TrafficDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrafficDescriptor  ::=  ObjectInstance
 * ```
 */
export type TrafficDescriptor = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TrafficDescriptor
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrafficDescriptor} The decoded data structure.
 */
export const _decode_TrafficDescriptor: $.ASN1Decoder<TrafficDescriptor> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) TrafficDescriptor into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrafficDescriptor, encoded as an ASN.1 Element.
 */
export const _encode_TrafficDescriptor: $.ASN1Encoder<TrafficDescriptor> = _encode_ObjectInstance;


/* eslint-enable */
