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
import { type FCIBillingChargingCharacteristics, _decode_FCIBillingChargingCharacteristics, _encode_FCIBillingChargingCharacteristics } from "../CAP-datatypes/FCIBillingChargingCharacteristics.ta.mjs";



/**
 * @summary FurnishChargingInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FurnishChargingInformationArg {PARAMETERS-BOUND : bound}  ::= 
 *     FCIBillingChargingCharacteristics{bound}
 * ```
 */
export
type FurnishChargingInformationArg = FCIBillingChargingCharacteristics; // DefinedType

let _cached_decoder_for_FurnishChargingInformationArg: $.ASN1Decoder<FurnishChargingInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FurnishChargingInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FurnishChargingInformationArg (el: _Element): FurnishChargingInformationArg {
    if (!_cached_decoder_for_FurnishChargingInformationArg) { _cached_decoder_for_FurnishChargingInformationArg = _decode_FCIBillingChargingCharacteristics; }
    return _cached_decoder_for_FurnishChargingInformationArg(el);
}

let _cached_encoder_for_FurnishChargingInformationArg: $.ASN1Encoder<FurnishChargingInformationArg> | null = null;

/**
 * @summary Encodes a(n) FurnishChargingInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FurnishChargingInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_FurnishChargingInformationArg (value: FurnishChargingInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FurnishChargingInformationArg) { _cached_encoder_for_FurnishChargingInformationArg = _encode_FCIBillingChargingCharacteristics; }
    return _cached_encoder_for_FurnishChargingInformationArg(value, elGetter);
}


/* eslint-enable */
