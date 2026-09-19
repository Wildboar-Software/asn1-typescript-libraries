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
import { CommunicationChargeCurrency, _decode_CommunicationChargeCurrency, _encode_CommunicationChargeCurrency } from "../Tariffing-Data-Types/CommunicationChargeCurrency.ta.mjs";
// export { CommunicationChargeCurrency, _decode_CommunicationChargeCurrency, _encode_CommunicationChargeCurrency } from "../Tariffing-Data-Types/CommunicationChargeCurrency.ta.mjs";
import { TariffCurrencyFormat_tariffControlIndicators, TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff /* IMPORTED_LONG_NAMED_BIT */, non_cyclicTariff /* IMPORTED_SHORT_NAMED_BIT */, _decode_TariffCurrencyFormat_tariffControlIndicators, _encode_TariffCurrencyFormat_tariffControlIndicators } from "../Tariffing-Data-Types/TariffCurrencyFormat-tariffControlIndicators.ta.mjs";
// export { TariffCurrencyFormat_tariffControlIndicators, TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff /* IMPORTED_LONG_NAMED_BIT */, non_cyclicTariff /* IMPORTED_SHORT_NAMED_BIT */, _decode_TariffCurrencyFormat_tariffControlIndicators, _encode_TariffCurrencyFormat_tariffControlIndicators } from "../Tariffing-Data-Types/TariffCurrencyFormat-tariffControlIndicators.ta.mjs";
import { CurrencyFactorScale, _decode_CurrencyFactorScale, _encode_CurrencyFactorScale } from "../Tariffing-Data-Types/CurrencyFactorScale.ta.mjs";
// export { CurrencyFactorScale, _decode_CurrencyFactorScale, _encode_CurrencyFactorScale } from "../Tariffing-Data-Types/CurrencyFactorScale.ta.mjs";


/**
 * @summary TariffCurrencyFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffCurrencyFormat ::= SEQUENCE {
 *     communicationChargeSequenceCurrency     [0] SEQUENCE
 *         SIZE(minCommunicationTariffNum..maxCommunicationTariffNum)
 *         OF CommunicationChargeCurrency OPTIONAL ,
 *     tariffControlIndicators [1] BIT STRING {
 *     non-cyclicTariff (0) }
 *     (SIZE(minTariffIndicatorsLen..maxTariffIndicatorsLen)) ,
 *     callAttemptChargeCurrency    [2] CurrencyFactorScale OPTIONAL ,
 *     callSetupChargeCurrency        [3] CurrencyFactorScale OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TariffCurrencyFormat {
    constructor (
        /**
         * @summary `communicationChargeSequenceCurrency`.
         * @public
         * @readonly
         */
        readonly communicationChargeSequenceCurrency: OPTIONAL<CommunicationChargeCurrency[]>,
        /**
         * @summary `tariffControlIndicators`.
         * @public
         * @readonly
         */
        readonly tariffControlIndicators: TariffCurrencyFormat_tariffControlIndicators,
        /**
         * @summary `callAttemptChargeCurrency`.
         * @public
         * @readonly
         */
        readonly callAttemptChargeCurrency: OPTIONAL<CurrencyFactorScale>,
        /**
         * @summary `callSetupChargeCurrency`.
         * @public
         * @readonly
         */
        readonly callSetupChargeCurrency: OPTIONAL<CurrencyFactorScale>
    ) {}

    /**
     * @summary Restructures an object into a TariffCurrencyFormat
     * @description
     * 
     * This takes an `object` and converts it to a `TariffCurrencyFormat`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TariffCurrencyFormat`.
     * @returns {TariffCurrencyFormat}
     */
    public static _from_object (_o: { [_K in keyof (TariffCurrencyFormat)]: (TariffCurrencyFormat)[_K] }): TariffCurrencyFormat {
        return new TariffCurrencyFormat(_o.communicationChargeSequenceCurrency, _o.tariffControlIndicators, _o.callAttemptChargeCurrency, _o.callSetupChargeCurrency);
    }


}

/**
 * @summary The Leading Root Component Types of TariffCurrencyFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TariffCurrencyFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("communicationChargeSequenceCurrency", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffControlIndicators", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callAttemptChargeCurrency", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callSetupChargeCurrency", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TariffCurrencyFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TariffCurrencyFormat: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TariffCurrencyFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TariffCurrencyFormat: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TariffCurrencyFormat: $.ASN1Decoder<TariffCurrencyFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffCurrencyFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffCurrencyFormat (el: _Element): TariffCurrencyFormat {
    if (!_cached_decoder_for_TariffCurrencyFormat) { _cached_decoder_for_TariffCurrencyFormat = function (el: _Element): TariffCurrencyFormat {
    let communicationChargeSequenceCurrency: OPTIONAL<CommunicationChargeCurrency[]>;
    let tariffControlIndicators!: TariffCurrencyFormat_tariffControlIndicators;
    let callAttemptChargeCurrency: OPTIONAL<CurrencyFactorScale>;
    let callSetupChargeCurrency: OPTIONAL<CurrencyFactorScale>;
    const callbacks: $.DecodingMap = {
        "communicationChargeSequenceCurrency": (_el: _Element): void => { communicationChargeSequenceCurrency = $._decode_implicit<CommunicationChargeCurrency[]>(() => $._decodeSequenceOf<CommunicationChargeCurrency>(() => _decode_CommunicationChargeCurrency))(_el); },
        "tariffControlIndicators": (_el: _Element): void => { tariffControlIndicators = $._decode_implicit<TariffCurrencyFormat_tariffControlIndicators>(() => _decode_TariffCurrencyFormat_tariffControlIndicators)(_el); },
        "callAttemptChargeCurrency": (_el: _Element): void => { callAttemptChargeCurrency = $._decode_implicit<CurrencyFactorScale>(() => _decode_CurrencyFactorScale)(_el); },
        "callSetupChargeCurrency": (_el: _Element): void => { callSetupChargeCurrency = $._decode_implicit<CurrencyFactorScale>(() => _decode_CurrencyFactorScale)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TariffCurrencyFormat,
        _extension_additions_list_spec_for_TariffCurrencyFormat,
        _root_component_type_list_2_spec_for_TariffCurrencyFormat,
        undefined,
    );
    return new TariffCurrencyFormat(
        communicationChargeSequenceCurrency,
        tariffControlIndicators,
        callAttemptChargeCurrency,
        callSetupChargeCurrency
    );
}; }
    return _cached_decoder_for_TariffCurrencyFormat(el);
}

let _cached_encoder_for_TariffCurrencyFormat: $.ASN1Encoder<TariffCurrencyFormat> | null = null;

/**
 * @summary Encodes a(n) TariffCurrencyFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffCurrencyFormat, encoded as an ASN.1 Element.
 */
export
function _encode_TariffCurrencyFormat (value: TariffCurrencyFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffCurrencyFormat) { _cached_encoder_for_TariffCurrencyFormat = function (value: TariffCurrencyFormat, elGetter: $.ASN1Encoder<TariffCurrencyFormat>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.communicationChargeSequenceCurrency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<CommunicationChargeCurrency>(() => _encode_CommunicationChargeCurrency, $.BER), $.BER)(value.communicationChargeSequenceCurrency, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TariffCurrencyFormat_tariffControlIndicators, $.BER)(value.tariffControlIndicators, $.BER),
            /* IF_ABSENT  */ ((value.callAttemptChargeCurrency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CurrencyFactorScale, $.BER)(value.callAttemptChargeCurrency, $.BER)),
            /* IF_ABSENT  */ ((value.callSetupChargeCurrency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CurrencyFactorScale, $.BER)(value.callSetupChargeCurrency, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TariffCurrencyFormat(value, elGetter);
}


/* eslint-enable */
