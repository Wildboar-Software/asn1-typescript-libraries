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
import { RemoteUEContextList, _decode_RemoteUEContextList, _encode_RemoteUEContextList } from "../TS33128Payloads/RemoteUEContextList.ta.mjs";
// export { RemoteUEContextList, _decode_RemoteUEContextList, _encode_RemoteUEContextList } from "../TS33128Payloads/RemoteUEContextList.ta.mjs";


/**
 * @summary ProSeRemoteUEsReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeRemoteUEsReport ::= SEQUENCE
 * {
 *     remoteUEsContextConnected    [1] RemoteUEContextList OPTIONAL,
 *     remoteUEsContextDisconnected [2] RemoteUEContextList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProSeRemoteUEsReport {
    constructor (
        /**
         * @summary `remoteUEsContextConnected`.
         * @public
         * @readonly
         */
        readonly remoteUEsContextConnected: OPTIONAL<RemoteUEContextList>,
        /**
         * @summary `remoteUEsContextDisconnected`.
         * @public
         * @readonly
         */
        readonly remoteUEsContextDisconnected: OPTIONAL<RemoteUEContextList>
    ) {}

    /**
     * @summary Restructures an object into a ProSeRemoteUEsReport
     * @description
     * 
     * This takes an `object` and converts it to a `ProSeRemoteUEsReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProSeRemoteUEsReport`.
     * @returns {ProSeRemoteUEsReport}
     */
    public static _from_object (_o: { [_K in keyof (ProSeRemoteUEsReport)]: (ProSeRemoteUEsReport)[_K] }): ProSeRemoteUEsReport {
        return new ProSeRemoteUEsReport(_o.remoteUEsContextConnected, _o.remoteUEsContextDisconnected);
    }


}

/**
 * @summary The Leading Root Component Types of ProSeRemoteUEsReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProSeRemoteUEsReport: $.ComponentSpec[] = [
    new $.ComponentSpec("remoteUEsContextConnected", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteUEsContextDisconnected", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ProSeRemoteUEsReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProSeRemoteUEsReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProSeRemoteUEsReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProSeRemoteUEsReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProSeRemoteUEsReport: $.ASN1Decoder<ProSeRemoteUEsReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeRemoteUEsReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeRemoteUEsReport (el: _Element): ProSeRemoteUEsReport {
    if (!_cached_decoder_for_ProSeRemoteUEsReport) { _cached_decoder_for_ProSeRemoteUEsReport = function (el: _Element): ProSeRemoteUEsReport {
    let remoteUEsContextConnected: OPTIONAL<RemoteUEContextList>;
    let remoteUEsContextDisconnected: OPTIONAL<RemoteUEContextList>;
    const callbacks: $.DecodingMap = {
        "remoteUEsContextConnected": (_el: _Element): void => { remoteUEsContextConnected = $._decode_implicit<RemoteUEContextList>(() => _decode_RemoteUEContextList)(_el); },
        "remoteUEsContextDisconnected": (_el: _Element): void => { remoteUEsContextDisconnected = $._decode_implicit<RemoteUEContextList>(() => _decode_RemoteUEContextList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProSeRemoteUEsReport,
        _extension_additions_list_spec_for_ProSeRemoteUEsReport,
        _root_component_type_list_2_spec_for_ProSeRemoteUEsReport,
        undefined,
    );
    return new ProSeRemoteUEsReport(
        remoteUEsContextConnected,
        remoteUEsContextDisconnected
    );
}; }
    return _cached_decoder_for_ProSeRemoteUEsReport(el);
}

let _cached_encoder_for_ProSeRemoteUEsReport: $.ASN1Encoder<ProSeRemoteUEsReport> | null = null;

/**
 * @summary Encodes a(n) ProSeRemoteUEsReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeRemoteUEsReport, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeRemoteUEsReport (value: ProSeRemoteUEsReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeRemoteUEsReport) { _cached_encoder_for_ProSeRemoteUEsReport = function (value: ProSeRemoteUEsReport, elGetter: $.ASN1Encoder<ProSeRemoteUEsReport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.remoteUEsContextConnected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RemoteUEContextList, $.BER)(value.remoteUEsContextConnected, $.BER)),
            /* IF_ABSENT  */ ((value.remoteUEsContextDisconnected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RemoteUEContextList, $.BER)(value.remoteUEsContextDisconnected, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProSeRemoteUEsReport(value, elGetter);
}


/* eslint-enable */
