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
import { ReportingAmountMilliseconds, _decode_ReportingAmountMilliseconds, _encode_ReportingAmountMilliseconds } from "../MAP-LCS-DataTypes/ReportingAmountMilliseconds.ta.mjs";
import { ReportingIntervalMilliseconds, _decode_ReportingIntervalMilliseconds, _encode_ReportingIntervalMilliseconds } from "../MAP-LCS-DataTypes/ReportingIntervalMilliseconds.ta.mjs";


/**
 * @summary ReportingOptionMilliseconds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingOptionMilliseconds ::= SEQUENCE {
 *     reportingAmountMilliseconds    ReportingAmountMilliseconds,
 *     reportingIntervalMilliseconds    ReportingIntervalMilliseconds,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ReportingOptionMilliseconds {
    constructor (
        /**
         * @summary `reportingAmountMilliseconds`.
         * @public
         * @readonly
         */
        readonly reportingAmountMilliseconds: ReportingAmountMilliseconds,
        /**
         * @summary `reportingIntervalMilliseconds`.
         * @public
         * @readonly
         */
        readonly reportingIntervalMilliseconds: ReportingIntervalMilliseconds,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReportingOptionMilliseconds
     * @description
     * 
     * This takes an `object` and converts it to a `ReportingOptionMilliseconds`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportingOptionMilliseconds`.
     * @returns {ReportingOptionMilliseconds}
     */
    public static _from_object (_o: { [_K in keyof (ReportingOptionMilliseconds)]: (ReportingOptionMilliseconds)[_K] }): ReportingOptionMilliseconds {
        return new ReportingOptionMilliseconds(_o.reportingAmountMilliseconds, _o.reportingIntervalMilliseconds, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ReportingOptionMilliseconds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportingOptionMilliseconds: $.ComponentSpec[] = [
    new $.ComponentSpec("reportingAmountMilliseconds", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportingIntervalMilliseconds", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of ReportingOptionMilliseconds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportingOptionMilliseconds: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportingOptionMilliseconds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportingOptionMilliseconds: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportingOptionMilliseconds: $.ASN1Decoder<ReportingOptionMilliseconds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingOptionMilliseconds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportingOptionMilliseconds (el: _Element): ReportingOptionMilliseconds {
    if (!_cached_decoder_for_ReportingOptionMilliseconds) { _cached_decoder_for_ReportingOptionMilliseconds = function (el: _Element): ReportingOptionMilliseconds {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ReportingOptionMilliseconds contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "reportingAmountMilliseconds";
    sequence[1].name = "reportingIntervalMilliseconds";
    let reportingAmountMilliseconds!: ReportingAmountMilliseconds;
    let reportingIntervalMilliseconds!: ReportingIntervalMilliseconds;
    reportingAmountMilliseconds = _decode_ReportingAmountMilliseconds(sequence[0]);
    reportingIntervalMilliseconds = _decode_ReportingIntervalMilliseconds(sequence[1]);
    return new ReportingOptionMilliseconds(
        reportingAmountMilliseconds,
        reportingIntervalMilliseconds,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ReportingOptionMilliseconds(el);
}

let _cached_encoder_for_ReportingOptionMilliseconds: $.ASN1Encoder<ReportingOptionMilliseconds> | null = null;

/**
 * @summary Encodes a(n) ReportingOptionMilliseconds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingOptionMilliseconds, encoded as an ASN.1 Element.
 */
export
function _encode_ReportingOptionMilliseconds (value: ReportingOptionMilliseconds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportingOptionMilliseconds) { _cached_encoder_for_ReportingOptionMilliseconds = function (value: ReportingOptionMilliseconds, elGetter: $.ASN1Encoder<ReportingOptionMilliseconds>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ReportingAmountMilliseconds(value.reportingAmountMilliseconds, $.BER),
            /* REQUIRED   */ _encode_ReportingIntervalMilliseconds(value.reportingIntervalMilliseconds, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportingOptionMilliseconds(value, elGetter);
}


/* eslint-enable */
