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
import { ReportingAmount, _decode_ReportingAmount, _encode_ReportingAmount } from "../MAP-LCS-DataTypes/ReportingAmount.ta.mjs";
import { ReportingInterval, _decode_ReportingInterval, _encode_ReportingInterval } from "../MAP-LCS-DataTypes/ReportingInterval.ta.mjs";
import { ReportingOptionMilliseconds, _decode_ReportingOptionMilliseconds, _encode_ReportingOptionMilliseconds } from "../MAP-LCS-DataTypes/ReportingOptionMilliseconds.ta.mjs";


/**
 * @summary PeriodicLDRInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicLDRInfo ::= SEQUENCE {
 *     reportingAmount    ReportingAmount,
 *     reportingInterval    ReportingInterval,
 *     ...,
 *     reportingOptionMilliseconds    [0]    ReportingOptionMilliseconds    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PeriodicLDRInfo {
    constructor (
        /**
         * @summary `reportingAmount`.
         * @public
         * @readonly
         */
        readonly reportingAmount: ReportingAmount,
        /**
         * @summary `reportingInterval`.
         * @public
         * @readonly
         */
        readonly reportingInterval: ReportingInterval,
        /**
         * @summary `reportingOptionMilliseconds`.
         * @public
         * @readonly
         */
        readonly reportingOptionMilliseconds: OPTIONAL<ReportingOptionMilliseconds>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PeriodicLDRInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PeriodicLDRInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeriodicLDRInfo`.
     * @returns {PeriodicLDRInfo}
     */
    public static _from_object (_o: { [_K in keyof (PeriodicLDRInfo)]: (PeriodicLDRInfo)[_K] }): PeriodicLDRInfo {
        return new PeriodicLDRInfo(_o.reportingAmount, _o.reportingInterval, _o.reportingOptionMilliseconds, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PeriodicLDRInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeriodicLDRInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("reportingAmount", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportingInterval", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of PeriodicLDRInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeriodicLDRInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeriodicLDRInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeriodicLDRInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("reportingOptionMilliseconds", true, $.hasTag(_TagClass.context, 0))
];

let _cached_decoder_for_PeriodicLDRInfo: $.ASN1Decoder<PeriodicLDRInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodicLDRInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeriodicLDRInfo (el: _Element): PeriodicLDRInfo {
    if (!_cached_decoder_for_PeriodicLDRInfo) { _cached_decoder_for_PeriodicLDRInfo = function (el: _Element): PeriodicLDRInfo {
    let reportingAmount!: ReportingAmount;
    let reportingInterval!: ReportingInterval;
    let reportingOptionMilliseconds: OPTIONAL<ReportingOptionMilliseconds> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "reportingAmount": (_el: _Element): void => { reportingAmount = _decode_ReportingAmount(_el); },
        "reportingInterval": (_el: _Element): void => { reportingInterval = _decode_ReportingInterval(_el); },
        "reportingOptionMilliseconds": (_el: _Element): void => { reportingOptionMilliseconds = $._decode_implicit<ReportingOptionMilliseconds>(() => _decode_ReportingOptionMilliseconds)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PeriodicLDRInfo,
        _extension_additions_list_spec_for_PeriodicLDRInfo,
        _root_component_type_list_2_spec_for_PeriodicLDRInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PeriodicLDRInfo(
        reportingAmount,
        reportingInterval,
        reportingOptionMilliseconds,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PeriodicLDRInfo(el);
}

let _cached_encoder_for_PeriodicLDRInfo: $.ASN1Encoder<PeriodicLDRInfo> | null = null;

/**
 * @summary Encodes a(n) PeriodicLDRInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodicLDRInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PeriodicLDRInfo (value: PeriodicLDRInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeriodicLDRInfo) { _cached_encoder_for_PeriodicLDRInfo = function (value: PeriodicLDRInfo, elGetter: $.ASN1Encoder<PeriodicLDRInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ReportingAmount(value.reportingAmount, $.BER),
            /* REQUIRED   */ _encode_ReportingInterval(value.reportingInterval, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.reportingOptionMilliseconds === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ReportingOptionMilliseconds, $.BER)(value.reportingOptionMilliseconds, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PeriodicLDRInfo(value, elGetter);
}


/* eslint-enable */
