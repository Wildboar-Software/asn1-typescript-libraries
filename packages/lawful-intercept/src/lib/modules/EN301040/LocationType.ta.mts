/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TETRACGIType, _decode_TETRACGIType, _encode_TETRACGIType } from "../EN301040/TETRACGIType.ta.mjs";
// export { TETRACGIType, _decode_TETRACGIType, _encode_TETRACGIType } from "../EN301040/TETRACGIType.ta.mjs";
import { TETRAAddressType, _decode_TETRAAddressType, _encode_TETRAAddressType } from "../EN301040/TETRAAddressType.ta.mjs";
// export { TETRAAddressType, _decode_TETRAAddressType, _encode_TETRAAddressType } from "../EN301040/TETRAAddressType.ta.mjs";


/**
 * @summary LocationType
 * @description
 * 
 * Where a party is. `mSLoc` is a mobile station, as a TETRA cell global
 * identity. `lSLoc` is a fixed line station. Clause 6.8 writes the alternatives
 * as `MS_Loc` and `LS_Loc` and types the line-station alternative as
 * `TETRA_LS_AddressType`. Annex E, which this type follows, uses `mSLoc`,
 * `lSLoc`, and `TETRAAddressType`.
 *
 * A line station is identified by the PISN number of its access port to the
 * SwMI. In normal operation an LS is addressed by its TSI, normally an ITSI.
 * Where that TSI is mapped to an ISDN or PSTN line, clause 6.8.2 places the
 * line address in the target-address element of `TARGETACTIVITYMONITORind`.
 *
 * Clause 4.4 asks for the registered location area or, when known, the base
 * station; the line identity associated with a registered target; or the line
 * or service identity to which the target is registered and to which calls are
 * redirected. Location is delivered with registration and with the result of
 * interception.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8, clause 4.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType  ::=  CHOICE {
 *     mSLoc        TETRACGIType,
 *     lSLoc        TETRAAddressType
 * }
 * ```
 */
export
type LocationType =
    { mSLoc: TETRACGIType } /* CHOICE_ALT_ROOT */
    | { lSLoc: TETRAAddressType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LocationType: $.ASN1Decoder<LocationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationType (el: _Element): LocationType {
    if (!_cached_decoder_for_LocationType) { _cached_decoder_for_LocationType = $._decode_inextensible_choice<LocationType>({
    "CONTEXT 0": [ "mSLoc", _decode_TETRACGIType ],
    "CONTEXT 1": [ "lSLoc", $._decode_explicit<TETRAAddressType>(() => _decode_TETRAAddressType) ]
}); }
    return _cached_decoder_for_LocationType(el);
}

let _cached_encoder_for_LocationType: $.ASN1Encoder<LocationType> | null = null;

/**
 * @summary Encodes a(n) LocationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationType, encoded as an ASN.1 Element.
 */
export
function _encode_LocationType (value: LocationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationType) { _cached_encoder_for_LocationType = $._encode_choice<LocationType>({
    "mSLoc": $._encode_implicit(_TagClass.context, 0, () => _encode_TETRACGIType, $.BER),
    "lSLoc": $._encode_explicit(_TagClass.context, 1, () => _encode_TETRAAddressType, $.BER),
}, $.BER); }
    return _cached_encoder_for_LocationType(value, elGetter);
}


/* eslint-enable */
