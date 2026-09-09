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
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { TimerID, _decode_TimerID, _encode_TimerID, tssf } from "../CAP-datatypes/TimerID.ta.mjs";
import { type TimerValue, _decode_TimerValue, _encode_TimerValue } from "../CAP-datatypes/TimerValue.ta.mjs";



/**
 * @summary ResetTimerSMSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResetTimerSMSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     timerID                [0] TimerID    DEFAULT tssf,
 *     timervalue                [1] TimerValue,
 *     extensions                [2] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ResetTimerSMSArg {
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
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResetTimerSMSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ResetTimerSMSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResetTimerSMSArg`.
     * @returns {ResetTimerSMSArg}
     */
    public static _from_object (_o: { [_K in keyof (ResetTimerSMSArg)]: (ResetTimerSMSArg)[_K] }): ResetTimerSMSArg {
        return new ResetTimerSMSArg(_o.timerID, _o.timervalue, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `timerID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_timerID () { return tssf; }
}

/**
 * @summary The Leading Root Component Types of ResetTimerSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResetTimerSMSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("timerID", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("timervalue", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ResetTimerSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResetTimerSMSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResetTimerSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResetTimerSMSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResetTimerSMSArg: $.ASN1Decoder<ResetTimerSMSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResetTimerSMSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResetTimerSMSArg (el: _Element): ResetTimerSMSArg {
    if (!_cached_decoder_for_ResetTimerSMSArg) { _cached_decoder_for_ResetTimerSMSArg = function (el: _Element): ResetTimerSMSArg {
    let timerID: OPTIONAL<TimerID> = ResetTimerSMSArg._default_value_for_timerID;
    let timervalue!: TimerValue;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "timerID": (_el: _Element): void => { timerID = $._decode_implicit<TimerID>(() => _decode_TimerID)(_el); },
        "timervalue": (_el: _Element): void => { timervalue = $._decode_implicit<TimerValue>(() => _decode_TimerValue)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResetTimerSMSArg,
        _extension_additions_list_spec_for_ResetTimerSMSArg,
        _root_component_type_list_2_spec_for_ResetTimerSMSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ResetTimerSMSArg(
        timerID,
        timervalue,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ResetTimerSMSArg(el);
}

let _cached_encoder_for_ResetTimerSMSArg: $.ASN1Encoder<ResetTimerSMSArg> | null = null;

/**
 * @summary Encodes a(n) ResetTimerSMSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResetTimerSMSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ResetTimerSMSArg (value: ResetTimerSMSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResetTimerSMSArg) { _cached_encoder_for_ResetTimerSMSArg = function (value: ResetTimerSMSArg, elGetter: $.ASN1Encoder<ResetTimerSMSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.timerID === undefined || $.deepEq(value.timerID, ResetTimerSMSArg._default_value_for_timerID) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TimerID, $.BER)(value.timerID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TimerValue, $.BER)(value.timervalue, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResetTimerSMSArg(value, elGetter);
}


/* eslint-enable */
