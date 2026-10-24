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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary DeleteProgramInvocation_Request
 * @description
 * 
 * Client request to delete a Program Invocation. PI must be `idle`, `stopped`,
 * or `unrunnable`. A `controlled` PI may be deleted only if its controlling PI
 * is `idle` (or none). Unbinds Domains; last PI moves a Domain `in-use` →
 * `ready`. ISO 9506-1:2003 §12.3. ISO 9506-2:2003 §12.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteProgramInvocation-Request  ::=  Identifier
 * ```
 */
export
type DeleteProgramInvocation_Request = Identifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteProgramInvocation_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DeleteProgramInvocation_Request: $.ASN1Decoder<DeleteProgramInvocation_Request> = _decode_Identifier;

/**
 * @summary Encodes a(n) DeleteProgramInvocation_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteProgramInvocation_Request, encoded as an ASN.1 Element.
 */
export const _encode_DeleteProgramInvocation_Request: $.ASN1Encoder<DeleteProgramInvocation_Request> = _encode_Identifier;


/* eslint-enable */
