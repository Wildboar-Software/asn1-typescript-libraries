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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary GetDataExchangeAttributes_Request
 * @description
 *
 * Confirmed request for attributes of a Data Exchange
 * object. The ObjectName is Data Exchange Name (`&name`).
 * ISO 9506-1:2003 §15.3. ISO 9506-2:2003 §15.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDataExchangeAttributes-Request  ::=  ObjectName
 * ```
 */
export
type GetDataExchangeAttributes_Request = ObjectName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) GetDataExchangeAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GetDataExchangeAttributes_Request: $.ASN1Decoder<GetDataExchangeAttributes_Request> = _decode_ObjectName;

/**
 * @summary Encodes a(n) GetDataExchangeAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDataExchangeAttributes_Request, encoded as an ASN.1 Element.
 */
export const _encode_GetDataExchangeAttributes_Request: $.ASN1Encoder<GetDataExchangeAttributes_Request> = _encode_ObjectName;


/* eslint-enable */
