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
import { LogotypeInfo, _decode_LogotypeInfo, _encode_LogotypeInfo } from "../LogotypeCertExtn/LogotypeInfo.ta.mjs";
// export { LogotypeInfo, _decode_LogotypeInfo, _encode_LogotypeInfo } from "../LogotypeCertExtn/LogotypeInfo.ta.mjs";
import { OtherLogotypeInfo, _decode_OtherLogotypeInfo, _encode_OtherLogotypeInfo } from "../LogotypeCertExtn/OtherLogotypeInfo.ta.mjs";
// export { OtherLogotypeInfo, _decode_OtherLogotypeInfo, _encode_OtherLogotypeInfo } from "../LogotypeCertExtn/OtherLogotypeInfo.ta.mjs";


/**
 * @summary LogotypeExtn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeExtn ::= SEQUENCE {
 *    communityLogos  [0] EXPLICIT SEQUENCE OF LogotypeInfo OPTIONAL,
 *    issuerLogo      [1] EXPLICIT LogotypeInfo OPTIONAL,
 *    subjectLogo     [2] EXPLICIT LogotypeInfo OPTIONAL,
 *    otherLogos      [3] EXPLICIT SEQUENCE OF OtherLogotypeInfo OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogotypeExtn {
    constructor (
        /**
         * @summary `communityLogos`.
         * @public
         * @readonly
         */
        readonly communityLogos: OPTIONAL<LogotypeInfo[]>,
        /**
         * @summary `issuerLogo`.
         * @public
         * @readonly
         */
        readonly issuerLogo: OPTIONAL<LogotypeInfo>,
        /**
         * @summary `subjectLogo`.
         * @public
         * @readonly
         */
        readonly subjectLogo: OPTIONAL<LogotypeInfo>,
        /**
         * @summary `otherLogos`.
         * @public
         * @readonly
         */
        readonly otherLogos: OPTIONAL<OtherLogotypeInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a LogotypeExtn
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeExtn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeExtn`.
     * @returns {LogotypeExtn}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeExtn)]: (LogotypeExtn)[_K] }): LogotypeExtn {
        return new LogotypeExtn(_o.communityLogos, _o.issuerLogo, _o.subjectLogo, _o.otherLogos);
    }


}

/**
 * @summary The Leading Root Component Types of LogotypeExtn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeExtn: $.ComponentSpec[] = [
    new $.ComponentSpec("communityLogos", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("issuerLogo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subjectLogo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("otherLogos", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LogotypeExtn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeExtn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeExtn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeExtn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeExtn: $.ASN1Decoder<LogotypeExtn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeExtn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeExtn (el: _Element): LogotypeExtn {
    if (!_cached_decoder_for_LogotypeExtn) { _cached_decoder_for_LogotypeExtn = function (el: _Element): LogotypeExtn {
    let communityLogos: OPTIONAL<LogotypeInfo[]>;
    let issuerLogo: OPTIONAL<LogotypeInfo>;
    let subjectLogo: OPTIONAL<LogotypeInfo>;
    let otherLogos: OPTIONAL<OtherLogotypeInfo[]>;
    const callbacks: $.DecodingMap = {
        "communityLogos": (_el: _Element): void => { communityLogos = $._decode_explicit<LogotypeInfo[]>(() => $._decodeSequenceOf<LogotypeInfo>(() => _decode_LogotypeInfo))(_el); },
        "issuerLogo": (_el: _Element): void => { issuerLogo = $._decode_explicit<LogotypeInfo>(() => _decode_LogotypeInfo)(_el); },
        "subjectLogo": (_el: _Element): void => { subjectLogo = $._decode_explicit<LogotypeInfo>(() => _decode_LogotypeInfo)(_el); },
        "otherLogos": (_el: _Element): void => { otherLogos = $._decode_explicit<OtherLogotypeInfo[]>(() => $._decodeSequenceOf<OtherLogotypeInfo>(() => _decode_OtherLogotypeInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogotypeExtn,
        _extension_additions_list_spec_for_LogotypeExtn,
        _root_component_type_list_2_spec_for_LogotypeExtn,
        undefined,
    );
    return new LogotypeExtn(
        communityLogos,
        issuerLogo,
        subjectLogo,
        otherLogos
    );
}; }
    return _cached_decoder_for_LogotypeExtn(el);
}

let _cached_encoder_for_LogotypeExtn: $.ASN1Encoder<LogotypeExtn> | null = null;

/**
 * @summary Encodes a(n) LogotypeExtn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeExtn, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeExtn (value: LogotypeExtn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeExtn) { _cached_encoder_for_LogotypeExtn = function (value: LogotypeExtn, elGetter: $.ASN1Encoder<LogotypeExtn>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.communityLogos === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => $._encodeSequenceOf<LogotypeInfo>(() => _encode_LogotypeInfo, $.BER), $.BER)(value.communityLogos, $.BER)),
            /* IF_ABSENT  */ ((value.issuerLogo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_LogotypeInfo, $.BER)(value.issuerLogo, $.BER)),
            /* IF_ABSENT  */ ((value.subjectLogo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LogotypeInfo, $.BER)(value.subjectLogo, $.BER)),
            /* IF_ABSENT  */ ((value.otherLogos === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeSequenceOf<OtherLogotypeInfo>(() => _encode_OtherLogotypeInfo, $.BER), $.BER)(value.otherLogos, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeExtn(value, elGetter);
}


/* eslint-enable */
