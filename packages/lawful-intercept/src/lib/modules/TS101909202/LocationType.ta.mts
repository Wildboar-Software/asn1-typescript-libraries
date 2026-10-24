/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BIT_STRING,
    type PrintableString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationType
 * @description
 *
 * Where the target is. Carried in the header of every
 * `TARGETACTIVITYMONITOR`. Delivered with registration, with the result of
 * interception, or both. The operator supplies what the warrant asks for,
 * within the normal operating parameters of the network.
 *
 * `nameAddress` is a static location the service provider already knows, as a
 * name and address of the kind used when addressing the customer bill.
 * `PrintableString` of 1 to 100 characters.
 *
 * `geodeticData` gives the spatial coordinates of the target. GPS coordinates
 * are the example in clause 6.4.2.1.4. This document does not define the bit
 * layout.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.4.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType  ::=  CHOICE {
 *     geodeticData            BIT STRING,
 *     nameAddress             PrintableString (SIZE (1..100))
 * }
 * ```
 */
export
type LocationType =
    { geodeticData: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { nameAddress: PrintableString } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 0": [ "geodeticData", $._decodeBitString ],
    "CONTEXT 1": [ "nameAddress", $._decodePrintableString ]
}); }
    const _value = _cached_decoder_for_LocationType(el);
    if ("nameAddress" in _value && _value.nameAddress !== undefined) {
        const _alt = _value.nameAddress;
        if (_alt.length < 1 || _alt.length > 100) {
            throw new ASN1SizeError("LocationType.nameAddress violates SIZE constraint");
        }
    }
    return _value;
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
    "geodeticData": $._encode_implicit(_TagClass.context, 0, () => $._encodeBitString, $.BER),
    "nameAddress": $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER),
}, $.BER); }
    return _cached_encoder_for_LocationType(value, elGetter);
}


/* eslint-enable */
