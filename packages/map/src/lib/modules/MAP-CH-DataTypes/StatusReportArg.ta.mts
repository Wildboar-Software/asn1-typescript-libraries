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
import { EventReportData, _decode_EventReportData, _encode_EventReportData } from "../MAP-CH-DataTypes/EventReportData.ta.mjs";
// export { EventReportData, _decode_EventReportData, _encode_EventReportData } from "../MAP-CH-DataTypes/EventReportData.ta.mjs";
import { CallReportData, _decode_CallReportData, _encode_CallReportData } from "../MAP-CH-DataTypes/CallReportData.ta.mjs";
// export { CallReportData, _decode_CallReportData, _encode_CallReportData } from "../MAP-CH-DataTypes/CallReportData.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary StatusReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusReportArg ::= SEQUENCE{
 *     imsi    [0]    IMSI,
 *     eventReportData    [1]    EventReportData    OPTIONAL,
 *     callReportdata    [2]    CallReportData    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class StatusReportArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `eventReportData`.
         * @public
         * @readonly
         */
        readonly eventReportData: OPTIONAL<EventReportData>,
        /**
         * @summary `callReportdata`.
         * @public
         * @readonly
         */
        readonly callReportdata: OPTIONAL<CallReportData>,
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
     * @summary Restructures an object into a StatusReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `StatusReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatusReportArg`.
     * @returns {StatusReportArg}
     */
    public static _from_object (_o: { [_K in keyof (StatusReportArg)]: (StatusReportArg)[_K] }): StatusReportArg {
        return new StatusReportArg(_o.imsi, _o.eventReportData, _o.callReportdata, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of StatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StatusReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("eventReportData", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("callReportdata", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of StatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StatusReportArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StatusReportArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StatusReportArg: $.ASN1Decoder<StatusReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusReportArg (el: _Element): StatusReportArg {
    if (!_cached_decoder_for_StatusReportArg) { _cached_decoder_for_StatusReportArg = function (el: _Element): StatusReportArg {
    let imsi!: IMSI;
    let eventReportData: OPTIONAL<EventReportData>;
    let callReportdata: OPTIONAL<CallReportData>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "eventReportData": (_el: _Element): void => { eventReportData = $._decode_implicit<EventReportData>(() => _decode_EventReportData)(_el); },
        "callReportdata": (_el: _Element): void => { callReportdata = $._decode_implicit<CallReportData>(() => _decode_CallReportData)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StatusReportArg,
        _extension_additions_list_spec_for_StatusReportArg,
        _root_component_type_list_2_spec_for_StatusReportArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new StatusReportArg(
        imsi,
        eventReportData,
        callReportdata,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_StatusReportArg(el);
}

let _cached_encoder_for_StatusReportArg: $.ASN1Encoder<StatusReportArg> | null = null;

/**
 * @summary Encodes a(n) StatusReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_StatusReportArg (value: StatusReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusReportArg) { _cached_encoder_for_StatusReportArg = function (value: StatusReportArg, elGetter: $.ASN1Encoder<StatusReportArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* IF_ABSENT  */ ((value.eventReportData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EventReportData, $.BER)(value.eventReportData, $.BER)),
            /* IF_ABSENT  */ ((value.callReportdata === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallReportData, $.BER)(value.callReportdata, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StatusReportArg(value, elGetter);
}


/* eslint-enable */
