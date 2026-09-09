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
 * @summary GenericGprsSSF_gsmSCF_PDUs
 * @description
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

let _cached_decoder_for_GenericGprsSSF_gsmSCF_PDUs: $.ASN1Decoder<GenericGprsSSF_gsmSCF_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericGprsSSF_gsmSCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericGprsSSF_gsmSCF_PDUs (el: _Element): GenericGprsSSF_gsmSCF_PDUs {
    if (!_cached_decoder_for_GenericGprsSSF_gsmSCF_PDUs) { _cached_decoder_for_GenericGprsSSF_gsmSCF_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_GenericGprsSSF_gsmSCF_PDUs(el);
}

let _cached_encoder_for_GenericGprsSSF_gsmSCF_PDUs: $.ASN1Encoder<GenericGprsSSF_gsmSCF_PDUs> | null = null;

/**
 * @summary Encodes a(n) GenericGprsSSF_gsmSCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericGprsSSF_gsmSCF_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_GenericGprsSSF_gsmSCF_PDUs (value: GenericGprsSSF_gsmSCF_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericGprsSSF_gsmSCF_PDUs) { _cached_encoder_for_GenericGprsSSF_gsmSCF_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_GenericGprsSSF_gsmSCF_PDUs(value, elGetter);
}


/* eslint-enable */
