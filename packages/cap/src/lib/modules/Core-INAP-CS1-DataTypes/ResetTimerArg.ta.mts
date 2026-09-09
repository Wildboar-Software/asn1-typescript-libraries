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
import { TimerID, _enum_for_TimerID, TimerID_tssf /* IMPORTED_LONG_ENUMERATION_ITEM */, tssf /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TimerID, _encode_TimerID } from "../Core-INAP-CS1-DataTypes/TimerID.ta.mjs";
// export { TimerID, _enum_for_TimerID, TimerID_tssf /* IMPORTED_LONG_ENUMERATION_ITEM */, tssf /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TimerID, _encode_TimerID } from "../Core-INAP-CS1-DataTypes/TimerID.ta.mjs";
import { TimerValue, _decode_TimerValue, _encode_TimerValue } from "../Core-INAP-CS1-DataTypes/TimerValue.ta.mjs";
// export { TimerValue, _decode_TimerValue, _encode_TimerValue } from "../Core-INAP-CS1-DataTypes/TimerValue.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary ResetTimerArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResetTimerArg ::= SEQUENCE {
 *      timerID     [0] TimerID     DEFAULT tssf,
 *      timervalue     [1] TimerValue,
 *      extensions     [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 *      -- ...
 *      }
 * ```
 * 
 * @class
 */
export
class ResetTimerArg {
    constructor (
        /**
         * @summary `timerID`.
         * @public
         * @readonly
         */
        readonly timerID: OPTIONAL<TimerID>,
        /**
         * @summary `timervalue`.
         * @public
         * @readonly
         */
        readonly timervalue: TimerValue,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a ResetTimerArg
     * @description
     * 
     * This takes an `object` and converts it to a `ResetTimerArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResetTimerArg`.
     * @returns {ResetTimerArg}
     */
    public static _from_object (_o: { [_K in keyof (ResetTimerArg)]: (ResetTimerArg)[_K] }): ResetTimerArg {
        return new ResetTimerArg(_o.timerID, _o.timervalue, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `timerID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_timerID () { return TimerID_tssf; }        /**
         * @summary The enum used as the type of the component `timerID`
         * @public
         * @static
         */

    public static _enum_for_timerID = _enum_for_TimerID;
}

/**
 * @summary The Leading Root Component Types of ResetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResetTimerArg: $.ComponentSpec[] = [
    new $.ComponentSpec("timerID", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("timervalue", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ResetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResetTimerArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResetTimerArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResetTimerArg: $.ASN1Decoder<ResetTimerArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResetTimerArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResetTimerArg (el: _Element): ResetTimerArg {
    if (!_cached_decoder_for_ResetTimerArg) { _cached_decoder_for_ResetTimerArg = function (el: _Element): ResetTimerArg {
    let timerID: OPTIONAL<TimerID> = ResetTimerArg._default_value_for_timerID;
    let timervalue!: TimerValue;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "timerID": (_el: _Element): void => { timerID = $._decode_implicit<TimerID>(() => _decode_TimerID)(_el); },
        "timervalue": (_el: _Element): void => { timervalue = $._decode_implicit<TimerValue>(() => _decode_TimerValue)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResetTimerArg,
        _extension_additions_list_spec_for_ResetTimerArg,
        _root_component_type_list_2_spec_for_ResetTimerArg,
        undefined,
    );
    return new ResetTimerArg(
        timerID,
        timervalue,
        extensions
    );
}; }
    return _cached_decoder_for_ResetTimerArg(el);
}

let _cached_encoder_for_ResetTimerArg: $.ASN1Encoder<ResetTimerArg> | null = null;

/**
 * @summary Encodes a(n) ResetTimerArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResetTimerArg, encoded as an ASN.1 Element.
 */
export
function _encode_ResetTimerArg (value: ResetTimerArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResetTimerArg) { _cached_encoder_for_ResetTimerArg = function (value: ResetTimerArg, elGetter: $.ASN1Encoder<ResetTimerArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.timerID === undefined || $.deepEq(value.timerID, ResetTimerArg._default_value_for_timerID) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TimerID, $.BER)(value.timerID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TimerValue, $.BER)(value.timervalue, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResetTimerArg(value, elGetter);
}


/* eslint-enable */
