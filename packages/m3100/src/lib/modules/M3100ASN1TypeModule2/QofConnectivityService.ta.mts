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
    type ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary QofConnectivityService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QofConnectivityService  ::=  ObjectInstance
 * ```
 */
export type QofConnectivityService = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) QofConnectivityService
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QofConnectivityService} The decoded data structure.
 */
export const _decode_QofConnectivityService: $.ASN1Decoder<QofConnectivityService> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) QofConnectivityService into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QofConnectivityService, encoded as an ASN.1 Element.
 */
export const _encode_QofConnectivityService: $.ASN1Encoder<QofConnectivityService> = _encode_ObjectInstance;


/* eslint-enable */
