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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ToneDetected, _enum_for_ToneDetected, ToneDetected_beep /* IMPORTED_LONG_ENUMERATION_ITEM */, beep /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_billing /* IMPORTED_LONG_ENUMERATION_ITEM */, billing /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_carrier /* IMPORTED_LONG_ENUMERATION_ITEM */, carrier /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_confirmation /* IMPORTED_LONG_ENUMERATION_ITEM */, confirmation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_dial /* IMPORTED_LONG_ENUMERATION_ITEM */, dial /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_faxCNG /* IMPORTED_LONG_ENUMERATION_ITEM */, faxCNG /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_hold /* IMPORTED_LONG_ENUMERATION_ITEM */, hold /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_howler /* IMPORTED_LONG_ENUMERATION_ITEM */, howler /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_intrusion /* IMPORTED_LONG_ENUMERATION_ITEM */, intrusion /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_modemCNG /* IMPORTED_LONG_ENUMERATION_ITEM */, modemCNG /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_recordWarning /* IMPORTED_LONG_ENUMERATION_ITEM */, recordWarning /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_reorder /* IMPORTED_LONG_ENUMERATION_ITEM */, reorder /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_ringback /* IMPORTED_LONG_ENUMERATION_ITEM */, ringback /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_silence /* IMPORTED_LONG_ENUMERATION_ITEM */, silence /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_sitVC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitVC /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_sitIC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitIC /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_sitRO /* IMPORTED_LONG_ENUMERATION_ITEM */, sitRO /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_sitNC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitNC /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ToneDetected, _encode_ToneDetected } from "../CSTA-data-collected/ToneDetected.ta.mjs";
// export { ToneDetected, _enum_for_ToneDetected, ToneDetected_beep /* IMPORTED_LONG_ENUMERATION_ITEM */, beep /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_billing /* IMPORTED_LONG_ENUMERATION_ITEM */, billing /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_carrier /* IMPORTED_LONG_ENUMERATION_ITEM */, carrier /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_confirmation /* IMPORTED_LONG_ENUMERATION_ITEM */, confirmation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_dial /* IMPORTED_LONG_ENUMERATION_ITEM */, dial /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_faxCNG /* IMPORTED_LONG_ENUMERATION_ITEM */, faxCNG /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_hold /* IMPORTED_LONG_ENUMERATION_ITEM */, hold /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_howler /* IMPORTED_LONG_ENUMERATION_ITEM */, howler /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_intrusion /* IMPORTED_LONG_ENUMERATION_ITEM */, intrusion /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_modemCNG /* IMPORTED_LONG_ENUMERATION_ITEM */, modemCNG /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_recordWarning /* IMPORTED_LONG_ENUMERATION_ITEM */, recordWarning /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_reorder /* IMPORTED_LONG_ENUMERATION_ITEM */, reorder /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_ringback /* IMPORTED_LONG_ENUMERATION_ITEM */, ringback /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_silence /* IMPORTED_LONG_ENUMERATION_ITEM */, silence /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_sitVC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitVC /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_sitIC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitIC /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_sitRO /* IMPORTED_LONG_ENUMERATION_ITEM */, sitRO /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_sitNC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitNC /* IMPORTED_SHORT_ENUMERATION_ITEM */, ToneDetected_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ToneDetected, _encode_ToneDetected } from "../CSTA-data-collected/ToneDetected.ta.mjs";


/**
 * @summary TelTonesData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelTonesData ::= SEQUENCE
 * {    toneDetected            ToneDetected,
 *     toneFrequency            [0] IMPLICIT INTEGER            OPTIONAL,
 *     toneDuration            [1] IMPLICIT INTEGER            OPTIONAL,
 *     tonePauseDuration        [2] IMPLICIT INTEGER            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TelTonesData {
    constructor (
        /**
         * @summary `toneDetected`.
         * @public
         * @readonly
         */
        readonly toneDetected: ToneDetected,
        /**
         * @summary `toneFrequency`.
         * @public
         * @readonly
         */
        readonly toneFrequency: OPTIONAL<INTEGER>,
        /**
         * @summary `toneDuration`.
         * @public
         * @readonly
         */
        readonly toneDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `tonePauseDuration`.
         * @public
         * @readonly
         */
        readonly tonePauseDuration: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a TelTonesData
     * @description
     * 
     * This takes an `object` and converts it to a `TelTonesData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TelTonesData`.
     * @returns {TelTonesData}
     */
    public static _from_object (_o: { [_K in keyof (TelTonesData)]: (TelTonesData)[_K] }): TelTonesData {
        return new TelTonesData(_o.toneDetected, _o.toneFrequency, _o.toneDuration, _o.tonePauseDuration);
    }

        /**
         * @summary The enum used as the type of the component `toneDetected`
         * @public
         * @static
         */

    public static _enum_for_toneDetected = _enum_for_ToneDetected;
}

/**
 * @summary The Leading Root Component Types of TelTonesData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TelTonesData: $.ComponentSpec[] = [
    new $.ComponentSpec("toneDetected", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("toneFrequency", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("toneDuration", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("tonePauseDuration", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TelTonesData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TelTonesData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TelTonesData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TelTonesData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TelTonesData: $.ASN1Decoder<TelTonesData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelTonesData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TelTonesData (el: _Element): TelTonesData {
    if (!_cached_decoder_for_TelTonesData) { _cached_decoder_for_TelTonesData = function (el: _Element): TelTonesData {
    let toneDetected!: ToneDetected;
    let toneFrequency: OPTIONAL<INTEGER>;
    let toneDuration: OPTIONAL<INTEGER>;
    let tonePauseDuration: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "toneDetected": (_el: _Element): void => { toneDetected = _decode_ToneDetected(_el); },
        "toneFrequency": (_el: _Element): void => { toneFrequency = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "toneDuration": (_el: _Element): void => { toneDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "tonePauseDuration": (_el: _Element): void => { tonePauseDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TelTonesData,
        _extension_additions_list_spec_for_TelTonesData,
        _root_component_type_list_2_spec_for_TelTonesData,
        undefined,
    );
    return new TelTonesData(
        toneDetected,
        toneFrequency,
        toneDuration,
        tonePauseDuration
    );
}; }
    return _cached_decoder_for_TelTonesData(el);
}

let _cached_encoder_for_TelTonesData: $.ASN1Encoder<TelTonesData> | null = null;

/**
 * @summary Encodes a(n) TelTonesData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelTonesData, encoded as an ASN.1 Element.
 */
export
function _encode_TelTonesData (value: TelTonesData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TelTonesData) { _cached_encoder_for_TelTonesData = function (value: TelTonesData, elGetter: $.ASN1Encoder<TelTonesData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ToneDetected(value.toneDetected, $.BER),
            /* IF_ABSENT  */ ((value.toneFrequency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.toneFrequency, $.BER)),
            /* IF_ABSENT  */ ((value.toneDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.toneDuration, $.BER)),
            /* IF_ABSENT  */ ((value.tonePauseDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.tonePauseDuration, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TelTonesData(value, elGetter);
}


/* eslint-enable */
