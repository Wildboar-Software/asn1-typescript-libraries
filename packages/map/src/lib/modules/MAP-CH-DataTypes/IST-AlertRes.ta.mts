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
import { IST_AlertTimerValue, _decode_IST_AlertTimerValue, _encode_IST_AlertTimerValue } from "../MAP-MS-DataTypes/IST-AlertTimerValue.ta.mjs";
import { CallTerminationIndicator, _enum_for_CallTerminationIndicator, CallTerminationIndicator_terminateCallActivityReferred /* IMPORTED_LONG_ENUMERATION_ITEM */, terminateCallActivityReferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallTerminationIndicator_terminateAllCallActivities /* IMPORTED_LONG_ENUMERATION_ITEM */, terminateAllCallActivities /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallTerminationIndicator, _encode_CallTerminationIndicator } from "../MAP-CH-DataTypes/CallTerminationIndicator.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary IST_AlertRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IST-AlertRes ::= SEQUENCE{
 *     istAlertTimer    [0]    IST-AlertTimerValue    OPTIONAL,
 *     istInformationWithdraw    [1]    NULL    OPTIONAL,
 *     callTerminationIndicator    [2]    CallTerminationIndicator    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class IST_AlertRes {
    constructor (
        /**
         * @summary `istAlertTimer`.
         * @public
         * @readonly
         */
        readonly istAlertTimer: OPTIONAL<IST_AlertTimerValue>,
        /**
         * @summary `istInformationWithdraw`.
         * @public
         * @readonly
         */
        readonly istInformationWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `callTerminationIndicator`.
         * @public
         * @readonly
         */
        readonly callTerminationIndicator: OPTIONAL<CallTerminationIndicator>,
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
     * @summary Restructures an object into a IST_AlertRes
     * @description
     * 
     * This takes an `object` and converts it to a `IST_AlertRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IST_AlertRes`.
     * @returns {IST_AlertRes}
     */
    public static _from_object (_o: { [_K in keyof (IST_AlertRes)]: (IST_AlertRes)[_K] }): IST_AlertRes {
        return new IST_AlertRes(_o.istAlertTimer, _o.istInformationWithdraw, _o.callTerminationIndicator, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `callTerminationIndicator`
         * @public
         * @static
         */

    public static _enum_for_callTerminationIndicator = _enum_for_CallTerminationIndicator;
}

/**
 * @summary The Leading Root Component Types of IST_AlertRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IST_AlertRes: $.ComponentSpec[] = [
    new $.ComponentSpec("istAlertTimer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("istInformationWithdraw", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callTerminationIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IST_AlertRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IST_AlertRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IST_AlertRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IST_AlertRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IST_AlertRes: $.ASN1Decoder<IST_AlertRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IST_AlertRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IST_AlertRes (el: _Element): IST_AlertRes {
    if (!_cached_decoder_for_IST_AlertRes) { _cached_decoder_for_IST_AlertRes = function (el: _Element): IST_AlertRes {
    let istAlertTimer: OPTIONAL<IST_AlertTimerValue> = undefined;
    let istInformationWithdraw: OPTIONAL<NULL> = undefined;
    let callTerminationIndicator: OPTIONAL<CallTerminationIndicator> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "istAlertTimer": (_el: _Element): void => { istAlertTimer = $._decode_implicit<IST_AlertTimerValue>(() => _decode_IST_AlertTimerValue)(_el); },
        "istInformationWithdraw": (_el: _Element): void => { istInformationWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "callTerminationIndicator": (_el: _Element): void => { callTerminationIndicator = $._decode_implicit<CallTerminationIndicator>(() => _decode_CallTerminationIndicator)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IST_AlertRes,
        _extension_additions_list_spec_for_IST_AlertRes,
        _root_component_type_list_2_spec_for_IST_AlertRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IST_AlertRes(
        istAlertTimer,
        istInformationWithdraw,
        callTerminationIndicator,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IST_AlertRes(el);
}

let _cached_encoder_for_IST_AlertRes: $.ASN1Encoder<IST_AlertRes> | null = null;

/**
 * @summary Encodes a(n) IST_AlertRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IST_AlertRes, encoded as an ASN.1 Element.
 */
export
function _encode_IST_AlertRes (value: IST_AlertRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IST_AlertRes) { _cached_encoder_for_IST_AlertRes = function (value: IST_AlertRes, elGetter: $.ASN1Encoder<IST_AlertRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.istAlertTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IST_AlertTimerValue, $.BER)(value.istAlertTimer, $.BER)),
            /* IF_ABSENT  */ ((value.istInformationWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.istInformationWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.callTerminationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallTerminationIndicator, $.BER)(value.callTerminationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IST_AlertRes(value, elGetter);
}


/* eslint-enable */
