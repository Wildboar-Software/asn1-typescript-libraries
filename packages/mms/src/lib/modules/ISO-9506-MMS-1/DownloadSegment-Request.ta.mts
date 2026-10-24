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
 * @summary DownloadSegment_Request
 * @description
 * 
 * Server-issued request for the next load segment. Names the Domain, which must
 * be `loading`. Client must have accepted InitiateDownloadSequence and not yet
 * seen TerminateDownloadSequence. ISO 9506-1:2003 §11.3. ISO 9506-2:2003 §11.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DownloadSegment-Request  ::=  Identifier
 * ```
 */
export
type DownloadSegment_Request = Identifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DownloadSegment_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DownloadSegment_Request: $.ASN1Decoder<DownloadSegment_Request> = _decode_Identifier;

/**
 * @summary Encodes a(n) DownloadSegment_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DownloadSegment_Request, encoded as an ASN.1 Element.
 */
export const _encode_DownloadSegment_Request: $.ASN1Encoder<DownloadSegment_Request> = _encode_Identifier;


/* eslint-enable */
