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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip';
/**
 * @summary RetrievalPortOperations
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RetrievalPortOperations  ::=
 *   EventTypeId(alert | delete | fetch | list | register-ms | summarize)
 * ```
 */
export type RetrievalPortOperations = EventTypeId; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RetrievalPortOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RetrievalPortOperations} The decoded data structure.
 */
export const _decode_RetrievalPortOperations: $.ASN1Decoder<RetrievalPortOperations> = _decode_EventTypeId;

/**
 * @summary Encodes a(n) RetrievalPortOperations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrievalPortOperations, encoded as an ASN.1 Element.
 */
export const _encode_RetrievalPortOperations: $.ASN1Encoder<RetrievalPortOperations> = _encode_EventTypeId;


/* eslint-enable */
