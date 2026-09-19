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
import { EndPointDescriptor, _decode_EndPointDescriptor, _encode_EndPointDescriptor } from "../GDT/EndPointDescriptor.ta.mjs";
// export { EndPointDescriptor, _decode_EndPointDescriptor, _encode_EndPointDescriptor } from "../GDT/EndPointDescriptor.ta.mjs";
import { SequenceFlag, SequenceFlag_sf_start /* IMPORTED_LONG_NAMED_INTEGER */, sf_start /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_continue /* IMPORTED_LONG_NAMED_INTEGER */, sf_continue /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_end /* IMPORTED_LONG_NAMED_INTEGER */, sf_end /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_stateless_no_reply /* IMPORTED_LONG_NAMED_INTEGER */, sf_stateless_no_reply /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_stateless /* IMPORTED_LONG_NAMED_INTEGER */, sf_stateless /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_stream_complete /* IMPORTED_LONG_NAMED_INTEGER */, sf_stream_complete /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_continue_wait /* IMPORTED_LONG_NAMED_INTEGER */, sf_continue_wait /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_heartbeat /* IMPORTED_LONG_NAMED_INTEGER */, sf_heartbeat /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SequenceFlag, _encode_SequenceFlag } from "../GDT/SequenceFlag.ta.mjs";
// export { SequenceFlag, SequenceFlag_sf_start /* IMPORTED_LONG_NAMED_INTEGER */, sf_start /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_continue /* IMPORTED_LONG_NAMED_INTEGER */, sf_continue /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_end /* IMPORTED_LONG_NAMED_INTEGER */, sf_end /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_stateless_no_reply /* IMPORTED_LONG_NAMED_INTEGER */, sf_stateless_no_reply /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_stateless /* IMPORTED_LONG_NAMED_INTEGER */, sf_stateless /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_stream_complete /* IMPORTED_LONG_NAMED_INTEGER */, sf_stream_complete /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_continue_wait /* IMPORTED_LONG_NAMED_INTEGER */, sf_continue_wait /* IMPORTED_SHORT_NAMED_INTEGER */, SequenceFlag_sf_heartbeat /* IMPORTED_LONG_NAMED_INTEGER */, sf_heartbeat /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SequenceFlag, _encode_SequenceFlag } from "../GDT/SequenceFlag.ta.mjs";
import { HopInfo, _decode_HopInfo, _encode_HopInfo } from "../GDT/HopInfo.ta.mjs";
// export { HopInfo, _decode_HopInfo, _encode_HopInfo } from "../GDT/HopInfo.ta.mjs";
import { ErrorCode, ErrorCode_err_ok /* IMPORTED_LONG_NAMED_INTEGER */, err_ok /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_out_of_sequence /* IMPORTED_LONG_NAMED_INTEGER */, err_out_of_sequence /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_unknown_sequence /* IMPORTED_LONG_NAMED_INTEGER */, err_unknown_sequence /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_unsupported_version /* IMPORTED_LONG_NAMED_INTEGER */, err_unsupported_version /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_timeout /* IMPORTED_LONG_NAMED_INTEGER */, err_timeout /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_unknown_route /* IMPORTED_LONG_NAMED_INTEGER */, err_unknown_route /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_routing_not_supported /* IMPORTED_LONG_NAMED_INTEGER */, err_routing_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_max_hops_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, err_max_hops_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_unknown_error /* IMPORTED_LONG_NAMED_INTEGER */, err_unknown_error /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ErrorCode, _encode_ErrorCode } from "../GDT/ErrorCode.ta.mjs";
// export { ErrorCode, ErrorCode_err_ok /* IMPORTED_LONG_NAMED_INTEGER */, err_ok /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_out_of_sequence /* IMPORTED_LONG_NAMED_INTEGER */, err_out_of_sequence /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_unknown_sequence /* IMPORTED_LONG_NAMED_INTEGER */, err_unknown_sequence /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_unsupported_version /* IMPORTED_LONG_NAMED_INTEGER */, err_unsupported_version /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_timeout /* IMPORTED_LONG_NAMED_INTEGER */, err_timeout /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_unknown_route /* IMPORTED_LONG_NAMED_INTEGER */, err_unknown_route /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_routing_not_supported /* IMPORTED_LONG_NAMED_INTEGER */, err_routing_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_max_hops_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, err_max_hops_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_err_unknown_error /* IMPORTED_LONG_NAMED_INTEGER */, err_unknown_error /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ErrorCode, _encode_ErrorCode } from "../GDT/ErrorCode.ta.mjs";


/**
 * @summary Header
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Header ::= SEQUENCE {
 *     version         [0] INTEGER,
 *     source          [1] EndPointDescriptor,
 *     destination     [2] EndPointDescriptor,
 *     uuid            [3] OCTET STRING,
 *     sequence-num    [4] INTEGER,
 *     sequence-flag   [5] SequenceFlag,
 *     enc-info        [6] EncryptionInfo OPTIONAL,
 *     hop-info        [7] HopInfo OPTIONAL,
 *     status          [8] ErrorCode OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Header {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary `source`.
         * @public
         * @readonly
         */
        readonly source: EndPointDescriptor,
        /**
         * @summary `destination`.
         * @public
         * @readonly
         */
        readonly destination: EndPointDescriptor,
        /**
         * @summary `uuid`.
         * @public
         * @readonly
         */
        readonly uuid: OCTET_STRING,
        /**
         * @summary `sequence_num`.
         * @public
         * @readonly
         */
        readonly sequence_num: INTEGER,
        /**
         * @summary `sequence_flag`.
         * @public
         * @readonly
         */
        readonly sequence_flag: SequenceFlag,
        /**
         * @summary `enc_info`.
         * @public
         * @readonly
         */
        readonly enc_info: OPTIONAL<EncryptionInfo>,
        /**
         * @summary `hop_info`.
         * @public
         * @readonly
         */
        readonly hop_info: OPTIONAL<HopInfo>,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: OPTIONAL<ErrorCode>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Header
     * @description
     * 
     * This takes an `object` and converts it to a `Header`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Header`.
     * @returns {Header}
     */
    public static _from_object (_o: { [_K in keyof (Header)]: (Header)[_K] }): Header {
        return new Header(_o.version, _o.source, _o.destination, _o.uuid, _o.sequence_num, _o.sequence_flag, _o.enc_info, _o.hop_info, _o.status, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Header: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("source", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destination", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uuid", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sequence-num", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sequence-flag", false, $.hasTag(_TagClass.context, 5)),
    /* FIXME: enc-info COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("hop-info", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of Header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Header: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Header: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Header: $.ASN1Decoder<Header> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Header
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Header (el: _Element): Header {
    if (!_cached_decoder_for_Header) { _cached_decoder_for_Header = function (el: _Element): Header {
    let version!: INTEGER;
    let source!: EndPointDescriptor;
    let destination!: EndPointDescriptor;
    let uuid!: OCTET_STRING;
    let sequence_num!: INTEGER;
    let sequence_flag!: SequenceFlag;
    let enc_info: OPTIONAL<EncryptionInfo>;
    let hop_info: OPTIONAL<HopInfo>;
    let status: OPTIONAL<ErrorCode>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "source": (_el: _Element): void => { source = $._decode_implicit<EndPointDescriptor>(() => _decode_EndPointDescriptor)(_el); },
        "destination": (_el: _Element): void => { destination = $._decode_implicit<EndPointDescriptor>(() => _decode_EndPointDescriptor)(_el); },
        "uuid": (_el: _Element): void => { uuid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequence-num": (_el: _Element): void => { sequence_num = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sequence-flag": (_el: _Element): void => { sequence_flag = $._decode_implicit<SequenceFlag>(() => _decode_SequenceFlag)(_el); },
        "enc-info": (_el: _Element): void => { enc_info = $._decode_implicit<EncryptionInfo>(() => _decode_EncryptionInfo)(_el); },
        "hop-info": (_el: _Element): void => { hop_info = $._decode_implicit<HopInfo>(() => _decode_HopInfo)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<ErrorCode>(() => _decode_ErrorCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Header,
        _extension_additions_list_spec_for_Header,
        _root_component_type_list_2_spec_for_Header,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Header(
        version,
        source,
        destination,
        uuid,
        sequence_num,
        sequence_flag,
        enc_info,
        hop_info,
        status,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Header(el);
}

let _cached_encoder_for_Header: $.ASN1Encoder<Header> | null = null;

/**
 * @summary Encodes a(n) Header into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Header, encoded as an ASN.1 Element.
 */
export
function _encode_Header (value: Header, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Header) { _cached_encoder_for_Header = function (value: Header, elGetter: $.ASN1Encoder<Header>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EndPointDescriptor, $.BER)(value.source, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EndPointDescriptor, $.BER)(value.destination, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.uuid, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.sequence_num, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_SequenceFlag, $.BER)(value.sequence_flag, $.BER),
            /* IF_ABSENT  */ ((value.enc_info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_EncryptionInfo, $.BER)(value.enc_info, $.BER)),
            /* IF_ABSENT  */ ((value.hop_info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_HopInfo, $.BER)(value.hop_info, $.BER)),
            /* IF_ABSENT  */ ((value.status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ErrorCode, $.BER)(value.status, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Header(value, elGetter);
}


/* eslint-enable */
