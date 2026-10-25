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
    type RelatedObjectInstance,
    _decode_RelatedObjectInstance,
    _encode_RelatedObjectInstance,
} from '../ASN1DefinedTypesModule/RelatedObjectInstance.ta.mjs';


/**
 * @summary ConnectivityPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityPointer  ::=  RelatedObjectInstance
 * ```
 */
export type ConnectivityPointer = RelatedObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityPointer} The decoded data structure.
 */
export const _decode_ConnectivityPointer: $.ASN1Decoder<ConnectivityPointer> = _decode_RelatedObjectInstance;

/**
 * @summary Encodes a(n) ConnectivityPointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityPointer, encoded as an ASN.1 Element.
 */
export const _encode_ConnectivityPointer: $.ASN1Encoder<ConnectivityPointer> = _encode_RelatedObjectInstance;


/* eslint-enable */
