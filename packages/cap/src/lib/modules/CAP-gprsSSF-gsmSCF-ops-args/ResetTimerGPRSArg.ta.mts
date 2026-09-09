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



/**
 * @summary ResetTimerGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResetTimerGPRSArg ::= SEQUENCE {
 *     timerID                [0] TimerID            DEFAULT tssf,
 *     timervalue                [1] TimerValue,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ResetTimerGPRSArg {
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResetTimerGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ResetTimerGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResetTimerGPRSArg`.
     * @returns {ResetTimerGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (ResetTimerGPRSArg)]: (ResetTimerGPRSArg)[_K] }): ResetTimerGPRSArg {
        return new ResetTimerGPRSArg(_o.timerID, _o.timervalue, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of ResetTimerGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResetTimerGPRSArg: $.ComponentSpec[] = [
    /* FIXME: timerID COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: timervalue COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ResetTimerGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResetTimerGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResetTimerGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResetTimerGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResetTimerGPRSArg: $.ASN1Decoder<ResetTimerGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResetTimerGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResetTimerGPRSArg (el: _Element): ResetTimerGPRSArg {
    if (!_cached_decoder_for_ResetTimerGPRSArg) { _cached_decoder_for_ResetTimerGPRSArg = function (el: _Element): ResetTimerGPRSArg {
    let timerID: OPTIONAL<TimerID> = ResetTimerGPRSArg._default_value_for_timerID;
    let timervalue!: TimerValue;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "timerID": (_el: _Element): void => { timerID = $._decode_implicit<TimerID>(() => _decode_TimerID)(_el); },
        "timervalue": (_el: _Element): void => { timervalue = $._decode_implicit<TimerValue>(() => _decode_TimerValue)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResetTimerGPRSArg,
        _extension_additions_list_spec_for_ResetTimerGPRSArg,
        _root_component_type_list_2_spec_for_ResetTimerGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ResetTimerGPRSArg(
        timerID,
        timervalue,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ResetTimerGPRSArg(el);
}

let _cached_encoder_for_ResetTimerGPRSArg: $.ASN1Encoder<ResetTimerGPRSArg> | null = null;

/**
 * @summary Encodes a(n) ResetTimerGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResetTimerGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ResetTimerGPRSArg (value: ResetTimerGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResetTimerGPRSArg) { _cached_encoder_for_ResetTimerGPRSArg = function (value: ResetTimerGPRSArg, elGetter: $.ASN1Encoder<ResetTimerGPRSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.timerID === undefined || $.deepEq(value.timerID, ResetTimerGPRSArg._default_value_for_timerID) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TimerID, $.BER)(value.timerID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TimerValue, $.BER)(value.timervalue, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResetTimerGPRSArg(value, elGetter);
}


/* eslint-enable */
