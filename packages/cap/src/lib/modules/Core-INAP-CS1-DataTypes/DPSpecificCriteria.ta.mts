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
import { NumberOfDigits, _decode_NumberOfDigits, _encode_NumberOfDigits } from "../Core-INAP-CS1-DataTypes/NumberOfDigits.ta.mjs";
// export { NumberOfDigits, _decode_NumberOfDigits, _encode_NumberOfDigits } from "../Core-INAP-CS1-DataTypes/NumberOfDigits.ta.mjs";
import { ApplicationTimer, _decode_ApplicationTimer, _encode_ApplicationTimer } from "../Core-INAP-CS1-DataTypes/ApplicationTimer.ta.mjs";
// export { ApplicationTimer, _decode_ApplicationTimer, _encode_ApplicationTimer } from "../Core-INAP-CS1-DataTypes/ApplicationTimer.ta.mjs";


/**
 * @summary DPSpecificCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DPSpecificCriteria      ::=  CHOICE {
 *      numberOfDigits     [0] NumberOfDigits,
 *      applicationTimer     [1] ApplicationTimer
 *      }
 * ```
 */
export
type DPSpecificCriteria =
    { numberOfDigits: NumberOfDigits } /* CHOICE_ALT_ROOT */
    | { applicationTimer: ApplicationTimer } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DPSpecificCriteria: $.ASN1Decoder<DPSpecificCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DPSpecificCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DPSpecificCriteria (el: _Element): DPSpecificCriteria {
    if (!_cached_decoder_for_DPSpecificCriteria) { _cached_decoder_for_DPSpecificCriteria = $._decode_inextensible_choice<DPSpecificCriteria>({
    "CONTEXT 0": [ "numberOfDigits", $._decode_implicit<NumberOfDigits>(() => _decode_NumberOfDigits) ],
    "CONTEXT 1": [ "applicationTimer", $._decode_implicit<ApplicationTimer>(() => _decode_ApplicationTimer) ]
}); }
    return _cached_decoder_for_DPSpecificCriteria(el);
}

let _cached_encoder_for_DPSpecificCriteria: $.ASN1Encoder<DPSpecificCriteria> | null = null;

/**
 * @summary Encodes a(n) DPSpecificCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DPSpecificCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_DPSpecificCriteria (value: DPSpecificCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DPSpecificCriteria) { _cached_encoder_for_DPSpecificCriteria = $._encode_choice<DPSpecificCriteria>({
    "numberOfDigits": $._encode_implicit(_TagClass.context, 0, () => _encode_NumberOfDigits, $.BER),
    "applicationTimer": $._encode_implicit(_TagClass.context, 1, () => _encode_ApplicationTimer, $.BER),
}, $.BER); }
    return _cached_encoder_for_DPSpecificCriteria(value, elGetter);
}


/* eslint-enable */
