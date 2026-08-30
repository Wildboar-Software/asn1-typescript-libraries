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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { ReportingState, _enum_for_ReportingState, ReportingState_stopMonitoring /* IMPORTED_LONG_ENUMERATION_ITEM */, stopMonitoring /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportingState_startMonitoring /* IMPORTED_LONG_ENUMERATION_ITEM */, startMonitoring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReportingState, _encode_ReportingState } from "../MAP-CH-DataTypes/ReportingState.ta.mjs";
// export { ReportingState, _enum_for_ReportingState, ReportingState_stopMonitoring /* IMPORTED_LONG_ENUMERATION_ITEM */, stopMonitoring /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportingState_startMonitoring /* IMPORTED_LONG_ENUMERATION_ITEM */, startMonitoring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReportingState, _encode_ReportingState } from "../MAP-CH-DataTypes/ReportingState.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SetReportingStateArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetReportingStateArg ::= SEQUENCE {
 *     imsi    [0]    IMSI    OPTIONAL,
 *     lmsi    [1]    LMSI    OPTIONAL,
 *     ccbs-Monitoring    [2]    ReportingState    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SetReportingStateArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `ccbs_Monitoring`.
         * @public
         * @readonly
         */
        readonly ccbs_Monitoring: OPTIONAL<ReportingState>,
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
     * @summary Restructures an object into a SetReportingStateArg
     * @description
     * 
     * This takes an `object` and converts it to a `SetReportingStateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetReportingStateArg`.
     * @returns {SetReportingStateArg}
     */
    public static _from_object (_o: { [_K in keyof (SetReportingStateArg)]: (SetReportingStateArg)[_K] }): SetReportingStateArg {
        return new SetReportingStateArg(_o.imsi, _o.lmsi, _o.ccbs_Monitoring, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `ccbs_Monitoring`
         * @public
         * @static
         */

    public static _enum_for_ccbs_Monitoring = _enum_for_ReportingState;
}

/**
 * @summary The Leading Root Component Types of SetReportingStateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetReportingStateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ccbs-Monitoring", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SetReportingStateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetReportingStateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetReportingStateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetReportingStateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetReportingStateArg: $.ASN1Decoder<SetReportingStateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetReportingStateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetReportingStateArg (el: _Element): SetReportingStateArg {
    if (!_cached_decoder_for_SetReportingStateArg) { _cached_decoder_for_SetReportingStateArg = function (el: _Element): SetReportingStateArg {
    let imsi: OPTIONAL<IMSI>;
    let lmsi: OPTIONAL<LMSI>;
    let ccbs_Monitoring: OPTIONAL<ReportingState>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "lmsi": (_el: _Element): void => { lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); },
        "ccbs-Monitoring": (_el: _Element): void => { ccbs_Monitoring = $._decode_implicit<ReportingState>(() => _decode_ReportingState)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetReportingStateArg,
        _extension_additions_list_spec_for_SetReportingStateArg,
        _root_component_type_list_2_spec_for_SetReportingStateArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SetReportingStateArg(
        imsi,
        lmsi,
        ccbs_Monitoring,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SetReportingStateArg(el);
}

let _cached_encoder_for_SetReportingStateArg: $.ASN1Encoder<SetReportingStateArg> | null = null;

/**
 * @summary Encodes a(n) SetReportingStateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetReportingStateArg, encoded as an ASN.1 Element.
 */
export
function _encode_SetReportingStateArg (value: SetReportingStateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetReportingStateArg) { _cached_encoder_for_SetReportingStateArg = function (value: SetReportingStateArg, elGetter: $.ASN1Encoder<SetReportingStateArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LMSI, $.BER)(value.lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_Monitoring === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ReportingState, $.BER)(value.ccbs_Monitoring, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetReportingStateArg(value, elGetter);
}


/* eslint-enable */
