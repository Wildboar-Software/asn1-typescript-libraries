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
import { type Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";


/**
 * @summary FileRead_Request
 * @description
 *
 * Confirmed request: FRSM ID assigned by
 * FileOpen, identifying the open file being
 * read. Informative Annex D.
 *
 * [ISO 9506-1:2003 Annex D, D.4.1.1.1]
 * [ISO 9506-2:2003 Annex D, D.3.1]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileRead-Request  ::=  Integer32
 * ```
 */
export
type FileRead_Request = Integer32; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) FileRead_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FileRead_Request: $.ASN1Decoder<FileRead_Request> = _decode_Integer32;

/**
 * @summary Encodes a(n) FileRead_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileRead_Request, encoded as an ASN.1 Element.
 */
export const _encode_FileRead_Request: $.ASN1Encoder<FileRead_Request> = _encode_Integer32;


/* eslint-enable */
