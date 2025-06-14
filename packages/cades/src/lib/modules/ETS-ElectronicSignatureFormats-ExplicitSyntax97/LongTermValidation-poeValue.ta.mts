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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp/src/lib/modules/PKIXTSP/TimeStampToken.ta.mjs";
import { EvidenceRecord, _decode_EvidenceRecord, _encode_EvidenceRecord } from "@wildboar/ers/src/lib/modules/ERS/EvidenceRecord.ta.mjs";
/* START_OF_SYMBOL_DEFINITION LongTermValidation_poeValue */
/**
 * @summary LongTermValidation_poeValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LongTermValidation-poeValue ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type LongTermValidation_poeValue =
    { timeStamp: TimeStampToken } /* CHOICE_ALT_ROOT */
    | { evidenceRecord: EvidenceRecord } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION LongTermValidation_poeValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LongTermValidation_poeValue */
let _cached_decoder_for_LongTermValidation_poeValue: $.ASN1Decoder<LongTermValidation_poeValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LongTermValidation_poeValue */

/* START_OF_SYMBOL_DEFINITION _decode_LongTermValidation_poeValue */
/**
 * @summary Decodes an ASN.1 element into a(n) LongTermValidation_poeValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LongTermValidation_poeValue} The decoded data structure.
 */
export
function _decode_LongTermValidation_poeValue (el: _Element) {
    if (!_cached_decoder_for_LongTermValidation_poeValue) { _cached_decoder_for_LongTermValidation_poeValue = $._decode_inextensible_choice<LongTermValidation_poeValue>({
    "CONTEXT 0": [ "timeStamp", $._decode_explicit<TimeStampToken>(() => _decode_TimeStampToken) ],
    "CONTEXT 1": [ "evidenceRecord", $._decode_explicit<EvidenceRecord>(() => _decode_EvidenceRecord) ]
}); }
    return _cached_decoder_for_LongTermValidation_poeValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LongTermValidation_poeValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LongTermValidation_poeValue */
let _cached_encoder_for_LongTermValidation_poeValue: $.ASN1Encoder<LongTermValidation_poeValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LongTermValidation_poeValue */

/* START_OF_SYMBOL_DEFINITION _encode_LongTermValidation_poeValue */
/**
 * @summary Encodes a(n) LongTermValidation_poeValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LongTermValidation_poeValue, encoded as an ASN.1 Element.
 */
export
function _encode_LongTermValidation_poeValue (value: LongTermValidation_poeValue, elGetter: $.ASN1Encoder<LongTermValidation_poeValue>) {
    if (!_cached_encoder_for_LongTermValidation_poeValue) { _cached_encoder_for_LongTermValidation_poeValue = $._encode_choice<LongTermValidation_poeValue>({
    "timeStamp": $._encode_explicit(_TagClass.context, 0, () => _encode_TimeStampToken, $.BER),
    "evidenceRecord": $._encode_explicit(_TagClass.context, 1, () => _encode_EvidenceRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_LongTermValidation_poeValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LongTermValidation_poeValue */

/* eslint-enable */
