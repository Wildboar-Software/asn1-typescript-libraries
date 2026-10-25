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
 * @summary UnitControlLoadSegment_Request
 * @description
 * 
 * Server-issued request for the next Control Elements of a Unit Control load.
 * ISO 9506-1:2003 §13.4. ISO 9506-2:2003 §13.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitControlLoadSegment-Request  ::=  Identifier
 * ```
 */
export
type UnitControlLoadSegment_Request = Identifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UnitControlLoadSegment_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UnitControlLoadSegment_Request: $.ASN1Decoder<UnitControlLoadSegment_Request> = _decode_Identifier;

/**
 * @summary Encodes a(n) UnitControlLoadSegment_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitControlLoadSegment_Request, encoded as an ASN.1 Element.
 */
export const _encode_UnitControlLoadSegment_Request: $.ASN1Encoder<UnitControlLoadSegment_Request> = _encode_Identifier;


/* eslint-enable */
