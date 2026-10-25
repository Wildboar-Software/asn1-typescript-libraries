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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";


/**
 * @summary ServiceKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceKey  ::= 
 *   Integer4
 * ```
 */
export
type ServiceKey = Integer4; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ServiceKey: $.ASN1Decoder<ServiceKey> = _decode_Integer4;

/**
 * @summary Encodes a(n) ServiceKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceKey, encoded as an ASN.1 Element.
 */
export const _encode_ServiceKey: $.ASN1Encoder<ServiceKey> = _encode_Integer4;


/* eslint-enable */
