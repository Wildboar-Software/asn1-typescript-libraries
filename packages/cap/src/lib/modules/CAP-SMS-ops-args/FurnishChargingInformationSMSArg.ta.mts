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
import { type FCISMSBillingChargingCharacteristics, _decode_FCISMSBillingChargingCharacteristics, _encode_FCISMSBillingChargingCharacteristics } from "../CAP-datatypes/FCISMSBillingChargingCharacteristics.ta.mjs";



/**
 * @summary FurnishChargingInformationSMSArg
 * @description
 *
 * Argument of FurnishChargingInformationSMS: alias of
 * `FCISMSBillingChargingCharacteristics`. Carries
 * `fCIBCCCAMELsequence1` with `freeFormatData` (free-format
 * billing/charging) and `appendFreeFormatData` (append vs
 * overwrite previous free-format data; see 3GPP TS 23.078).
 * Default subsequent FCI overwrites. (3GPP TS 29.078 V19.0.0
 * clause 12.4.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FurnishChargingInformationSMSArg {PARAMETERS-BOUND : bound}  ::= 
 *     FCISMSBillingChargingCharacteristics {bound}
 * ```
 */
export
type FurnishChargingInformationSMSArg = FCISMSBillingChargingCharacteristics; // DefinedType

let _cached_decoder_for_FurnishChargingInformationSMSArg: $.ASN1Decoder<FurnishChargingInformationSMSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FurnishChargingInformationSMSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FurnishChargingInformationSMSArg (el: _Element): FurnishChargingInformationSMSArg {
    if (!_cached_decoder_for_FurnishChargingInformationSMSArg) { _cached_decoder_for_FurnishChargingInformationSMSArg = _decode_FCISMSBillingChargingCharacteristics; }
    return _cached_decoder_for_FurnishChargingInformationSMSArg(el);
}

let _cached_encoder_for_FurnishChargingInformationSMSArg: $.ASN1Encoder<FurnishChargingInformationSMSArg> | null = null;

/**
 * @summary Encodes a(n) FurnishChargingInformationSMSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FurnishChargingInformationSMSArg, encoded as an ASN.1 Element.
 */
export
function _encode_FurnishChargingInformationSMSArg (value: FurnishChargingInformationSMSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FurnishChargingInformationSMSArg) { _cached_encoder_for_FurnishChargingInformationSMSArg = _encode_FCISMSBillingChargingCharacteristics; }
    return _cached_encoder_for_FurnishChargingInformationSMSArg(value, elGetter);
}


/* eslint-enable */
