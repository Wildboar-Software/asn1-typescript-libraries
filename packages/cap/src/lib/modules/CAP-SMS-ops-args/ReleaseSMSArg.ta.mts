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
import { type RPCause, _decode_RPCause, _encode_RPCause } from "../CAP-datatypes/RPCause.ta.mjs";



/**
 * @summary ReleaseSMSArg
 * @description
 *
 * Argument of ReleaseSMS: alias of `RPCause`. Reason for
 * releasing this SM. MO-SMS: sent to the served subscriber in
 * the RP-ERROR RPDU. MT-SMS: sent to the SMS-GMSC in the
 * RP-ERROR RPDU. (3GPP TS 29.078 V19.0.0 clause 12.6.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseSMSArg  ::=  RPCause
 * ```
 */
export
type ReleaseSMSArg = RPCause; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseSMSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReleaseSMSArg: $.ASN1Decoder<ReleaseSMSArg> = _decode_RPCause;

/**
 * @summary Encodes a(n) ReleaseSMSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseSMSArg, encoded as an ASN.1 Element.
 */
export const _encode_ReleaseSMSArg: $.ASN1Encoder<ReleaseSMSArg> = _encode_RPCause;


/* eslint-enable */
