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
import { MonitoringMode, _enum_for_MonitoringMode, MonitoringMode_a_side /* IMPORTED_LONG_ENUMERATION_ITEM */, a_side /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitoringMode_b_side /* IMPORTED_LONG_ENUMERATION_ITEM */, b_side /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitoringMode, _encode_MonitoringMode } from "../MAP-CH-DataTypes/MonitoringMode.ta.mjs";
// export { MonitoringMode, _enum_for_MonitoringMode, MonitoringMode_a_side /* IMPORTED_LONG_ENUMERATION_ITEM */, a_side /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitoringMode_b_side /* IMPORTED_LONG_ENUMERATION_ITEM */, b_side /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitoringMode, _encode_MonitoringMode } from "../MAP-CH-DataTypes/MonitoringMode.ta.mjs";
import { CallOutcome, _enum_for_CallOutcome, CallOutcome_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallOutcome_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallOutcome_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallOutcome, _encode_CallOutcome } from "../MAP-CH-DataTypes/CallOutcome.ta.mjs";
// export { CallOutcome, _enum_for_CallOutcome, CallOutcome_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallOutcome_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallOutcome_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallOutcome, _encode_CallOutcome } from "../MAP-CH-DataTypes/CallOutcome.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CallReportData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallReportData ::= SEQUENCE{
 *     monitoringMode    [0]    MonitoringMode    OPTIONAL,
 *     callOutcome    [1]    CallOutcome    OPTIONAL,
 *     extensionContainer    [2]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CallReportData {
    constructor (
        /**
         * @summary `monitoringMode`.
         * @public
         * @readonly
         */
        readonly monitoringMode: OPTIONAL<MonitoringMode>,
        /**
         * @summary `callOutcome`.
         * @public
         * @readonly
         */
        readonly callOutcome: OPTIONAL<CallOutcome>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CallReportData
     * @description
     * 
     * This takes an `object` and converts it to a `CallReportData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallReportData`.
     * @returns {CallReportData}
     */
    public static _from_object (_o: { [_K in keyof (CallReportData)]: (CallReportData)[_K] }): CallReportData {
        return new CallReportData(_o.monitoringMode, _o.callOutcome, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `monitoringMode`
         * @public
         * @static
         */

    public static _enum_for_monitoringMode = _enum_for_MonitoringMode;        /**
         * @summary The enum used as the type of the component `callOutcome`
         * @public
         * @static
         */

    public static _enum_for_callOutcome = _enum_for_CallOutcome;
}

/**
 * @summary The Leading Root Component Types of CallReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallReportData: $.ComponentSpec[] = [
    new $.ComponentSpec("monitoringMode", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callOutcome", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallReportData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallReportData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallReportData: $.ASN1Decoder<CallReportData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallReportData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallReportData (el: _Element): CallReportData {
    if (!_cached_decoder_for_CallReportData) { _cached_decoder_for_CallReportData = function (el: _Element): CallReportData {
    let monitoringMode: OPTIONAL<MonitoringMode>;
    let callOutcome: OPTIONAL<CallOutcome>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "monitoringMode": (_el: _Element): void => { monitoringMode = $._decode_implicit<MonitoringMode>(() => _decode_MonitoringMode)(_el); },
        "callOutcome": (_el: _Element): void => { callOutcome = $._decode_implicit<CallOutcome>(() => _decode_CallOutcome)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallReportData,
        _extension_additions_list_spec_for_CallReportData,
        _root_component_type_list_2_spec_for_CallReportData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallReportData(
        monitoringMode,
        callOutcome,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallReportData(el);
}

let _cached_encoder_for_CallReportData: $.ASN1Encoder<CallReportData> | null = null;

/**
 * @summary Encodes a(n) CallReportData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallReportData, encoded as an ASN.1 Element.
 */
export
function _encode_CallReportData (value: CallReportData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallReportData) { _cached_encoder_for_CallReportData = function (value: CallReportData, elGetter: $.ASN1Encoder<CallReportData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.monitoringMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MonitoringMode, $.BER)(value.monitoringMode, $.BER)),
            /* IF_ABSENT  */ ((value.callOutcome === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallOutcome, $.BER)(value.callOutcome, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallReportData(value, elGetter);
}


/* eslint-enable */
