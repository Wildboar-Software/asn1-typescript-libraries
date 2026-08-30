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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { AlertReason, _enum_for_AlertReason, AlertReason_ms_Present /* IMPORTED_LONG_ENUMERATION_ITEM */, ms_Present /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertReason_memoryAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, memoryAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertReason, _encode_AlertReason } from "../MAP-SM-DataTypes/AlertReason.ta.mjs";
// export { AlertReason, _enum_for_AlertReason, AlertReason_ms_Present /* IMPORTED_LONG_ENUMERATION_ITEM */, ms_Present /* IMPORTED_SHORT_ENUMERATION_ITEM */, AlertReason_memoryAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, memoryAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AlertReason, _encode_AlertReason } from "../MAP-SM-DataTypes/AlertReason.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";


/**
 * @summary ReadyForSM_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadyForSM-Arg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     alertReason    AlertReason,
 *     alertReasonIndicator    NULL    OPTIONAL,
 *     -- alertReasonIndicator is set only when the alertReason 
 *     -- sent to HLR is for GPRS
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalAlertReasonIndicator    [1] NULL    OPTIONAL,
 *     -- additionalAlertReasonIndicator is set only when the alertReason
 *     -- sent to HLR is for IP-SM-GW
 *     maximumUeAvailabilityTime    Time    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ReadyForSM_Arg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `alertReason`.
         * @public
         * @readonly
         */
        readonly alertReason: AlertReason,
        /**
         * @summary `alertReasonIndicator`.
         * @public
         * @readonly
         */
        readonly alertReasonIndicator: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalAlertReasonIndicator`.
         * @public
         * @readonly
         */
        readonly additionalAlertReasonIndicator: OPTIONAL<NULL>,
        /**
         * @summary `maximumUeAvailabilityTime`.
         * @public
         * @readonly
         */
        readonly maximumUeAvailabilityTime: OPTIONAL<Time>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReadyForSM_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `ReadyForSM_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReadyForSM_Arg`.
     * @returns {ReadyForSM_Arg}
     */
    public static _from_object (_o: { [_K in keyof (ReadyForSM_Arg)]: (ReadyForSM_Arg)[_K] }): ReadyForSM_Arg {
        return new ReadyForSM_Arg(_o.imsi, _o.alertReason, _o.alertReasonIndicator, _o.extensionContainer, _o.additionalAlertReasonIndicator, _o.maximumUeAvailabilityTime, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `alertReason`
         * @public
         * @static
         */

    public static _enum_for_alertReason = _enum_for_AlertReason;
}

/**
 * @summary The Leading Root Component Types of ReadyForSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReadyForSM_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("alertReason", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("alertReasonIndicator", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ReadyForSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReadyForSM_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReadyForSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReadyForSM_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalAlertReasonIndicator", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("maximumUeAvailabilityTime", true, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

let _cached_decoder_for_ReadyForSM_Arg: $.ASN1Decoder<ReadyForSM_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadyForSM_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadyForSM_Arg (el: _Element): ReadyForSM_Arg {
    if (!_cached_decoder_for_ReadyForSM_Arg) { _cached_decoder_for_ReadyForSM_Arg = function (el: _Element): ReadyForSM_Arg {
    let imsi!: IMSI;
    let alertReason!: AlertReason;
    let alertReasonIndicator: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let additionalAlertReasonIndicator: OPTIONAL<NULL>;
    let maximumUeAvailabilityTime: OPTIONAL<Time>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "alertReason": (_el: _Element): void => { alertReason = _decode_AlertReason(_el); },
        "alertReasonIndicator": (_el: _Element): void => { alertReasonIndicator = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "additionalAlertReasonIndicator": (_el: _Element): void => { additionalAlertReasonIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "maximumUeAvailabilityTime": (_el: _Element): void => { maximumUeAvailabilityTime = _decode_Time(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReadyForSM_Arg,
        _extension_additions_list_spec_for_ReadyForSM_Arg,
        _root_component_type_list_2_spec_for_ReadyForSM_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReadyForSM_Arg(
        imsi,
        alertReason,
        alertReasonIndicator,
        extensionContainer,
        additionalAlertReasonIndicator,
        maximumUeAvailabilityTime,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReadyForSM_Arg(el);
}

let _cached_encoder_for_ReadyForSM_Arg: $.ASN1Encoder<ReadyForSM_Arg> | null = null;

/**
 * @summary Encodes a(n) ReadyForSM_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadyForSM_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_ReadyForSM_Arg (value: ReadyForSM_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadyForSM_Arg) { _cached_encoder_for_ReadyForSM_Arg = function (value: ReadyForSM_Arg, elGetter: $.ASN1Encoder<ReadyForSM_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* REQUIRED   */ _encode_AlertReason(value.alertReason, $.BER),
            /* IF_ABSENT  */ ((value.alertReasonIndicator === undefined) ? undefined : $._encodeNull(value.alertReasonIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalAlertReasonIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.additionalAlertReasonIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.maximumUeAvailabilityTime === undefined) ? undefined : _encode_Time(value.maximumUeAvailabilityTime, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReadyForSM_Arg(value, elGetter);
}


/* eslint-enable */
