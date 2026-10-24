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
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";



/**
 * @summary GenericGprsSSF_gsmSCF_PDUs
 * @description
 * 
 * `TCMessage` for the gprsSSF-to-gsmSCF dialogue. Invokable and returnable sets
 * are `GprsSsfToGsmScfInvokable` and `GprsSsfToGsmScfReturnable`. Bound set
 * `cAPSpecificBoundSet`. Used by `gprsSSF-gsmSCFAbstractSyntax`.
 * Abstract-syntax definitions updated in Rel-6.
 * (3GPP TS 29.078 V19.0.0 clause 8.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericGprsSSF-gsmSCF-PDUs  ::=  TCMessage {{GprsSsfToGsmScfInvokable},
 *                      {GprsSsfToGsmScfReturnable}}
 * ```
 */
export
type GenericGprsSSF_gsmSCF_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) GenericGprsSSF_gsmSCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GenericGprsSSF_gsmSCF_PDUs: $.ASN1Decoder<GenericGprsSSF_gsmSCF_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) GenericGprsSSF_gsmSCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericGprsSSF_gsmSCF_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_GenericGprsSSF_gsmSCF_PDUs: $.ASN1Encoder<GenericGprsSSF_gsmSCF_PDUs> = _encode_TCMessage;


/* eslint-enable */
