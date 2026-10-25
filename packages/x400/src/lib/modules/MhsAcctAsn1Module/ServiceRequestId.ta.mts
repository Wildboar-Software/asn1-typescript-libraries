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
    type SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module';
/**
 * @summary ServiceRequestId
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceRequestId  ::=  SimpleNameType
 * ```
 */
export type ServiceRequestId = SimpleNameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceRequestId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceRequestId} The decoded data structure.
 */
export const _decode_ServiceRequestId: $.ASN1Decoder<ServiceRequestId> = _decode_SimpleNameType;

/**
 * @summary Encodes a(n) ServiceRequestId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceRequestId, encoded as an ASN.1 Element.
 */
export const _encode_ServiceRequestId: $.ASN1Encoder<ServiceRequestId> = _encode_SimpleNameType;


/* eslint-enable */
