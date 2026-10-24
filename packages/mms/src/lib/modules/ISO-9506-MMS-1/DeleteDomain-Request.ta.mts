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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary DeleteDomain_Request
 * @description
 * 
 * Client request to delete a Domain. Domain must exist, be `ready` (no bound
 * Program Invocation), and have no upload in progress. Subordinate objects are
 * deleted with it. ISO 9506-1:2003 §11.12. ISO 9506-2:2003 §11.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteDomain-Request  ::=  Identifier
 * ```
 */
export
type DeleteDomain_Request = Identifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteDomain_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DeleteDomain_Request: $.ASN1Decoder<DeleteDomain_Request> = _decode_Identifier;

/**
 * @summary Encodes a(n) DeleteDomain_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteDomain_Request, encoded as an ASN.1 Element.
 */
export const _encode_DeleteDomain_Request: $.ASN1Encoder<DeleteDomain_Request> = _encode_Identifier;


/* eslint-enable */
