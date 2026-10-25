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
import { type Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary InitiateUploadSequence_Request
 * @description
 * 
 * Client request to prepare upload of a Domain. Domain must exist and be
 * `ready` or `in-use`. Creates a ULSM; client then issues N× UploadSegment then
 * TerminateUploadSequence. Abort deletes the ULSM, not the Domain. ISO 9506-1:2003 §11.1.4.2, §11.5. ISO 9506-2:2003 §11.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateUploadSequence-Request  ::=  Identifier
 * ```
 */
export
type InitiateUploadSequence_Request = Identifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateUploadSequence_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_InitiateUploadSequence_Request: $.ASN1Decoder<InitiateUploadSequence_Request> = _decode_Identifier;

/**
 * @summary Encodes a(n) InitiateUploadSequence_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateUploadSequence_Request, encoded as an ASN.1 Element.
 */
export const _encode_InitiateUploadSequence_Request: $.ASN1Encoder<InitiateUploadSequence_Request> = _encode_Identifier;


/* eslint-enable */
