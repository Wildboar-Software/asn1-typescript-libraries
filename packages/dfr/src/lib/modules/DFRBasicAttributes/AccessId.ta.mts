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
import { type DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary AccessId
 * @description
 *
 * Directory DistinguishedName of a security subject on an access-list. ISO/IEC
 * 10166-1:1991 §6.3.8.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessId  ::=  DistinguishedName
 * ```
 */
export
type AccessId = DistinguishedName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AccessId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AccessId: $.ASN1Decoder<AccessId> = _decode_DistinguishedName;

/**
 * @summary Encodes a(n) AccessId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessId, encoded as an ASN.1 Element.
 */
export const _encode_AccessId: $.ASN1Encoder<AccessId> = _encode_DistinguishedName;


/* eslint-enable */
