/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { TariffCurrency, _decode_TariffCurrency, _encode_TariffCurrency } from "../Tariffing-Data-Types/TariffCurrency.ta.mjs";
// export { TariffCurrency, _decode_TariffCurrency, _encode_TariffCurrency } from "../Tariffing-Data-Types/TariffCurrency.ta.mjs";
import { TariffPulse, _decode_TariffPulse, _encode_TariffPulse } from "../Tariffing-Data-Types/TariffPulse.ta.mjs";
// export { TariffPulse, _decode_TariffPulse, _encode_TariffPulse } from "../Tariffing-Data-Types/TariffPulse.ta.mjs";


/**
 * @summary ChargingTariffInformation_chargingTariff
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingTariffInformation-chargingTariff ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ChargingTariffInformation_chargingTariff =
    { tariffCurrency: TariffCurrency } /* CHOICE_ALT_ROOT */
    | { tariffPulse: TariffPulse } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargingTariffInformation_chargingTariff: $.ASN1Decoder<ChargingTariffInformation_chargingTariff> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingTariffInformation_chargingTariff
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingTariffInformation_chargingTariff (el: _Element): ChargingTariffInformation_chargingTariff {
    if (!_cached_decoder_for_ChargingTariffInformation_chargingTariff) { _cached_decoder_for_ChargingTariffInformation_chargingTariff = $._decode_inextensible_choice<ChargingTariffInformation_chargingTariff>({
    "CONTEXT 0": [ "tariffCurrency", $._decode_implicit<TariffCurrency>(() => _decode_TariffCurrency) ],
    "CONTEXT 1": [ "tariffPulse", $._decode_implicit<TariffPulse>(() => _decode_TariffPulse) ]
}); }
    return _cached_decoder_for_ChargingTariffInformation_chargingTariff(el);
}

let _cached_encoder_for_ChargingTariffInformation_chargingTariff: $.ASN1Encoder<ChargingTariffInformation_chargingTariff> | null = null;

/**
 * @summary Encodes a(n) ChargingTariffInformation_chargingTariff into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingTariffInformation_chargingTariff, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingTariffInformation_chargingTariff (value: ChargingTariffInformation_chargingTariff, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingTariffInformation_chargingTariff) { _cached_encoder_for_ChargingTariffInformation_chargingTariff = $._encode_choice<ChargingTariffInformation_chargingTariff>({
    "tariffCurrency": $._encode_implicit(_TagClass.context, 0, () => _encode_TariffCurrency, $.BER),
    "tariffPulse": $._encode_implicit(_TagClass.context, 1, () => _encode_TariffPulse, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChargingTariffInformation_chargingTariff(value, elGetter);
}


/* eslint-enable */
