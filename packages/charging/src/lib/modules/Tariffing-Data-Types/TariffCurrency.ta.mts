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
import { TariffCurrencyFormat, _decode_TariffCurrencyFormat, _encode_TariffCurrencyFormat } from "../Tariffing-Data-Types/TariffCurrencyFormat.ta.mjs";
// export { TariffCurrencyFormat, _decode_TariffCurrencyFormat, _encode_TariffCurrencyFormat } from "../Tariffing-Data-Types/TariffCurrencyFormat.ta.mjs";
import { TariffSwitchCurrency, _decode_TariffSwitchCurrency, _encode_TariffSwitchCurrency } from "../Tariffing-Data-Types/TariffSwitchCurrency.ta.mjs";
// export { TariffSwitchCurrency, _decode_TariffSwitchCurrency, _encode_TariffSwitchCurrency } from "../Tariffing-Data-Types/TariffSwitchCurrency.ta.mjs";


/**
 * @summary TariffCurrency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffCurrency ::= SEQUENCE {
 *     currentTariffCurrency    [0] TariffCurrencyFormat OPTIONAL ,
 *     tariffSwitchCurrency    [1] TariffSwitchCurrency OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TariffCurrency {
    constructor (
        /**
         * @summary `currentTariffCurrency`.
         * @public
         * @readonly
         */
        readonly currentTariffCurrency: OPTIONAL<TariffCurrencyFormat>,
        /**
         * @summary `tariffSwitchCurrency`.
         * @public
         * @readonly
         */
        readonly tariffSwitchCurrency: OPTIONAL<TariffSwitchCurrency>
    ) {}

    /**
     * @summary Restructures an object into a TariffCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `TariffCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TariffCurrency`.
     * @returns {TariffCurrency}
     */
    public static _from_object (_o: { [_K in keyof (TariffCurrency)]: (TariffCurrency)[_K] }): TariffCurrency {
        return new TariffCurrency(_o.currentTariffCurrency, _o.tariffSwitchCurrency);
    }


}

/**
 * @summary The Leading Root Component Types of TariffCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TariffCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("currentTariffCurrency", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffSwitchCurrency", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TariffCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TariffCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TariffCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TariffCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TariffCurrency: $.ASN1Decoder<TariffCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffCurrency (el: _Element): TariffCurrency {
    if (!_cached_decoder_for_TariffCurrency) { _cached_decoder_for_TariffCurrency = function (el: _Element): TariffCurrency {
    let currentTariffCurrency: OPTIONAL<TariffCurrencyFormat>;
    let tariffSwitchCurrency: OPTIONAL<TariffSwitchCurrency>;
    const callbacks: $.DecodingMap = {
        "currentTariffCurrency": (_el: _Element): void => { currentTariffCurrency = $._decode_implicit<TariffCurrencyFormat>(() => _decode_TariffCurrencyFormat)(_el); },
        "tariffSwitchCurrency": (_el: _Element): void => { tariffSwitchCurrency = $._decode_implicit<TariffSwitchCurrency>(() => _decode_TariffSwitchCurrency)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TariffCurrency,
        _extension_additions_list_spec_for_TariffCurrency,
        _root_component_type_list_2_spec_for_TariffCurrency,
        undefined,
    );
    return new TariffCurrency(
        currentTariffCurrency,
        tariffSwitchCurrency
    );
}; }
    return _cached_decoder_for_TariffCurrency(el);
}

let _cached_encoder_for_TariffCurrency: $.ASN1Encoder<TariffCurrency> | null = null;

/**
 * @summary Encodes a(n) TariffCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_TariffCurrency (value: TariffCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffCurrency) { _cached_encoder_for_TariffCurrency = function (value: TariffCurrency, elGetter: $.ASN1Encoder<TariffCurrency>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.currentTariffCurrency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TariffCurrencyFormat, $.BER)(value.currentTariffCurrency, $.BER)),
            /* IF_ABSENT  */ ((value.tariffSwitchCurrency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TariffSwitchCurrency, $.BER)(value.tariffSwitchCurrency, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TariffCurrency(value, elGetter);
}


/* eslint-enable */
