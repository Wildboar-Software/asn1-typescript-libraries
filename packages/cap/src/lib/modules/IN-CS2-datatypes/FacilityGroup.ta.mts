/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
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



/**
 * @summary FacilityGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FacilityGroup  ::=  CHOICE {
 *   trunkGroupID       [0]  INTEGER,
 *   privateFacilityID  [1]  INTEGER,
 *   huntGroup          [2]  OCTET STRING,
 *   routeIndex         [3]  OCTET STRING
 * }
 * ```
 */
export
type FacilityGroup =
    { trunkGroupID: INTEGER } /* CHOICE_ALT_ROOT */
    | { privateFacilityID: INTEGER } /* CHOICE_ALT_ROOT */
    | { huntGroup: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { routeIndex: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FacilityGroup: $.ASN1Decoder<FacilityGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FacilityGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FacilityGroup (el: _Element): FacilityGroup {
    if (!_cached_decoder_for_FacilityGroup) { _cached_decoder_for_FacilityGroup = $._decode_inextensible_choice<FacilityGroup>({
    "CONTEXT 0": [ "trunkGroupID", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "privateFacilityID", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "huntGroup", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "routeIndex", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_FacilityGroup(el);
}

let _cached_encoder_for_FacilityGroup: $.ASN1Encoder<FacilityGroup> | null = null;

/**
 * @summary Encodes a(n) FacilityGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacilityGroup, encoded as an ASN.1 Element.
 */
export
function _encode_FacilityGroup (value: FacilityGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FacilityGroup) { _cached_encoder_for_FacilityGroup = $._encode_choice<FacilityGroup>({
    "trunkGroupID": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "privateFacilityID": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "huntGroup": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "routeIndex": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_FacilityGroup(value, elGetter);
}


/* eslint-enable */
