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
 * @summary ReportEventActionStatus_Request
 * @description
 *
 * Confirmed request: Event Action Name whose enrollment count is reported.
 *
 * [ISO 9506-1:2003 §20.5]
 * [ISO 9506-2:2003 §20.5.1]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportEventActionStatus-Request  ::=  ObjectName
 * ```
 */
export
type ReportEventActionStatus_Request = ObjectName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReportEventActionStatus_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportEventActionStatus_Request: $.ASN1Decoder<ReportEventActionStatus_Request> = _decode_ObjectName;

/**
 * @summary Encodes a(n) ReportEventActionStatus_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportEventActionStatus_Request, encoded as an ASN.1 Element.
 */
export const _encode_ReportEventActionStatus_Request: $.ASN1Encoder<ReportEventActionStatus_Request> = _encode_ObjectName;


/* eslint-enable */
