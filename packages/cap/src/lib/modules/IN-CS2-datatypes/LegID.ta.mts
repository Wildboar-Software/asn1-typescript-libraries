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
import { LegType, _decode_LegType, _encode_LegType } from "../IN-CS2-datatypes/LegType.ta.mjs";
// export { LegType, _decode_LegType, _encode_LegType } from "../IN-CS2-datatypes/LegType.ta.mjs";


/**
 * @summary LegID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegID  ::=  CHOICE {sendingSideID    [0]  LegType,
 *                   receivingSideID  [1]  LegType
 * }
 * ```
 */
export
type LegID =
    { sendingSideID: LegType } /* CHOICE_ALT_ROOT */
    | { receivingSideID: LegType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LegID: $.ASN1Decoder<LegID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LegID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LegID (el: _Element): LegID {
    if (!_cached_decoder_for_LegID) { _cached_decoder_for_LegID = $._decode_inextensible_choice<LegID>({
    "CONTEXT 0": [ "sendingSideID", $._decode_implicit<LegType>(() => _decode_LegType) ],
    "CONTEXT 1": [ "receivingSideID", $._decode_implicit<LegType>(() => _decode_LegType) ]
}); }
    return _cached_decoder_for_LegID(el);
}

let _cached_encoder_for_LegID: $.ASN1Encoder<LegID> | null = null;

/**
 * @summary Encodes a(n) LegID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LegID, encoded as an ASN.1 Element.
 */
export
function _encode_LegID (value: LegID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LegID) { _cached_encoder_for_LegID = $._encode_choice<LegID>({
    "sendingSideID": $._encode_implicit(_TagClass.context, 0, () => _encode_LegType, $.BER),
    "receivingSideID": $._encode_implicit(_TagClass.context, 1, () => _encode_LegType, $.BER),
}, $.BER); }
    return _cached_encoder_for_LegID(value, elGetter);
}


/* eslint-enable */
