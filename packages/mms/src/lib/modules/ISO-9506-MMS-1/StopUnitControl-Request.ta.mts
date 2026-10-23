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
 * @summary StopUnitControl_Request
 * @description
 * 
 * Client request to stop running/starting constituent Program Invocations
 * (`running`/`starting` → Stop procedure). Already stopped/stopping/idle/
 * resetting/unrunnable are left. Failure returns StopUnitControl-Error. ISO 9506-1:2003 §13.7. ISO 9506-2:2003 §13.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopUnitControl-Request  ::=  Identifier
 * ```
 */
export
type StopUnitControl_Request = Identifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) StopUnitControl_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_StopUnitControl_Request: $.ASN1Decoder<StopUnitControl_Request> = _decode_Identifier;

/**
 * @summary Encodes a(n) StopUnitControl_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopUnitControl_Request, encoded as an ASN.1 Element.
 */
export const _encode_StopUnitControl_Request: (value: StopUnitControl_Request, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Identifier;


/* eslint-enable */
