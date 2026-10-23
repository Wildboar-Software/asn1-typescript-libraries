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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary InitiateUnitControlLoad_Request
 * @description
 * 
 * Client request to create a Unit Control object and start loading. Name must
 * be unused. Server then issues UnitControlLoadSegment until `moreFollows` is
 * false, then completes this confirmed service. ISO 9506-1:2003 §13.3. ISO 9506-2:2003 §13.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateUnitControlLoad-Request  ::=  Identifier
 * ```
 */
export
type InitiateUnitControlLoad_Request = Identifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateUnitControlLoad_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_InitiateUnitControlLoad_Request: $.ASN1Decoder<InitiateUnitControlLoad_Request> = _decode_Identifier;

/**
 * @summary Encodes a(n) InitiateUnitControlLoad_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateUnitControlLoad_Request, encoded as an ASN.1 Element.
 */
export const _encode_InitiateUnitControlLoad_Request: $.ASN1Encoder<InitiateUnitControlLoad_Request> = _encode_Identifier;


/* eslint-enable */
