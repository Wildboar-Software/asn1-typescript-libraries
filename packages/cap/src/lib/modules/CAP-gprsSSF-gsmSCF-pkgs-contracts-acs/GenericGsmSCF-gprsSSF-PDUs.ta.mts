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
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";



/**
 * @summary GenericGsmSCF_gprsSSF_PDUs
 * @description
 * 
 * `TCMessage` for the gsmSCF-to-gprsSSF dialogue. Invokable and returnable sets
 * are `GsmScfToGprsSsfInvokable` and `GsmScfToGprsSsfReturnable`. Bound set
 * `cAPSpecificBoundSet`. Used by `gsmSCF-gprsSSFAbstractSyntax`.
 * Abstract-syntax definitions updated in Rel-6.
 * (3GPP TS 29.078 V19.0.0 clause 8.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericGsmSCF-gprsSSF-PDUs  ::=  TCMessage {{GsmScfToGprsSsfInvokable},
 *                      {GsmScfToGprsSsfReturnable}}
 * ```
 */
export
type GenericGsmSCF_gprsSSF_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_GenericGsmSCF_gprsSSF_PDUs: $.ASN1Decoder<GenericGsmSCF_gprsSSF_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericGsmSCF_gprsSSF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericGsmSCF_gprsSSF_PDUs (el: _Element): GenericGsmSCF_gprsSSF_PDUs {
    if (!_cached_decoder_for_GenericGsmSCF_gprsSSF_PDUs) { _cached_decoder_for_GenericGsmSCF_gprsSSF_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_GenericGsmSCF_gprsSSF_PDUs(el);
}

let _cached_encoder_for_GenericGsmSCF_gprsSSF_PDUs: $.ASN1Encoder<GenericGsmSCF_gprsSSF_PDUs> | null = null;

/**
 * @summary Encodes a(n) GenericGsmSCF_gprsSSF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericGsmSCF_gprsSSF_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_GenericGsmSCF_gprsSSF_PDUs (value: GenericGsmSCF_gprsSSF_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericGsmSCF_gprsSSF_PDUs) { _cached_encoder_for_GenericGsmSCF_gprsSSF_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_GenericGsmSCF_gprsSSF_PDUs(value, elGetter);
}


/* eslint-enable */
