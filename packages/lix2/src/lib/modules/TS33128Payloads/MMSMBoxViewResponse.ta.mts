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
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { MMBoxDescription, _decode_MMBoxDescription, _encode_MMBoxDescription } from "../TS33128Payloads/MMBoxDescription.ta.mjs";
// export { MMBoxDescription, _decode_MMBoxDescription, _encode_MMBoxDescription } from "../TS33128Payloads/MMBoxDescription.ta.mjs";


/**
 * @summary MMSMBoxViewResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMBoxViewResponse ::= SEQUENCE
 * {
 *     transactionID   [1]  UTF8String,
 *     version         [2]  MMSVersion,
 *     contentLocation [3]  UTF8String OPTIONAL,
 *     state           [4]  SEQUENCE OF MMState OPTIONAL,
 *     flags           [5]  SEQUENCE OF MMFlags OPTIONAL,
 *     start           [6]  INTEGER OPTIONAL,
 *     limit           [7]  INTEGER OPTIONAL,
 *     attributes      [8]  SEQUENCE OF UTF8String OPTIONAL,
 *     mMSTotals       [9]  BOOLEAN OPTIONAL,
 *     mMSQuotas       [10] BOOLEAN OPTIONAL,
 *     mMessages       [11] SEQUENCE OF MMBoxDescription
 * }
 * ```
 * 
 * @class
 */
export
class MMSMBoxViewResponse {
    constructor (
        /**
         * @summary `transactionID`.
         * @public
         * @readonly
         */
        readonly transactionID: UTF8String,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: MMSVersion,
        /**
         * @summary `contentLocation`.
         * @public
         * @readonly
         */
        readonly contentLocation: OPTIONAL<UTF8String>,
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: OPTIONAL<MMState[]>,
        /**
         * @summary `flags`.
         * @public
         * @readonly
         */
        readonly flags: OPTIONAL<MMFlags[]>,
        /**
         * @summary `start`.
         * @public
         * @readonly
         */
        readonly start: OPTIONAL<INTEGER>,
        /**
         * @summary `limit`.
         * @public
         * @readonly
         */
        readonly limit: OPTIONAL<INTEGER>,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<UTF8String[]>,
        /**
         * @summary `mMSTotals`.
         * @public
         * @readonly
         */
        readonly mMSTotals: OPTIONAL<BOOLEAN>,
        /**
         * @summary `mMSQuotas`.
         * @public
         * @readonly
         */
        readonly mMSQuotas: OPTIONAL<BOOLEAN>,
        /**
         * @summary `mMessages`.
         * @public
         * @readonly
         */
        readonly mMessages: MMBoxDescription[]
    ) {}

    /**
     * @summary Restructures an object into a MMSMBoxViewResponse
     * @description
     * 
     * This takes an `object` and converts it to a `MMSMBoxViewResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSMBoxViewResponse`.
     * @returns {MMSMBoxViewResponse}
     */
    public static _from_object (_o: { [_K in keyof (MMSMBoxViewResponse)]: (MMSMBoxViewResponse)[_K] }): MMSMBoxViewResponse {
        return new MMSMBoxViewResponse(_o.transactionID, _o.version, _o.contentLocation, _o.state, _o.flags, _o.start, _o.limit, _o.attributes, _o.mMSTotals, _o.mMSQuotas, _o.mMessages);
    }


}

/**
 * @summary The Leading Root Component Types of MMSMBoxViewResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSMBoxViewResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("contentLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("state", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("start", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("limit", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mMSTotals", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mMSQuotas", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mMessages", false, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of MMSMBoxViewResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSMBoxViewResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSMBoxViewResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSMBoxViewResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSMBoxViewResponse: $.ASN1Decoder<MMSMBoxViewResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSMBoxViewResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSMBoxViewResponse (el: _Element): MMSMBoxViewResponse {
    if (!_cached_decoder_for_MMSMBoxViewResponse) { _cached_decoder_for_MMSMBoxViewResponse = function (el: _Element): MMSMBoxViewResponse {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let contentLocation: OPTIONAL<UTF8String>;
    let state: OPTIONAL<MMState[]>;
    let flags: OPTIONAL<MMFlags[]>;
    let start: OPTIONAL<INTEGER>;
    let limit: OPTIONAL<INTEGER>;
    let attributes: OPTIONAL<UTF8String[]>;
    let mMSTotals: OPTIONAL<BOOLEAN>;
    let mMSQuotas: OPTIONAL<BOOLEAN>;
    let mMessages!: MMBoxDescription[];
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "contentLocation": (_el: _Element): void => { contentLocation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<MMState[]>(() => $._decodeSequenceOf<MMState>(() => _decode_MMState))(_el); },
        "flags": (_el: _Element): void => { flags = $._decode_implicit<MMFlags[]>(() => $._decodeSequenceOf<MMFlags>(() => _decode_MMFlags))(_el); },
        "start": (_el: _Element): void => { start = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "limit": (_el: _Element): void => { limit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<UTF8String[]>(() => $._decodeSequenceOf<UTF8String>(() => $._decodeUTF8String))(_el); },
        "mMSTotals": (_el: _Element): void => { mMSTotals = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mMSQuotas": (_el: _Element): void => { mMSQuotas = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mMessages": (_el: _Element): void => { mMessages = $._decode_implicit<MMBoxDescription[]>(() => $._decodeSequenceOf<MMBoxDescription>(() => _decode_MMBoxDescription))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSMBoxViewResponse,
        _extension_additions_list_spec_for_MMSMBoxViewResponse,
        _root_component_type_list_2_spec_for_MMSMBoxViewResponse,
        undefined,
    );
    return new MMSMBoxViewResponse(
        transactionID,
        version,
        contentLocation,
        state,
        flags,
        start,
        limit,
        attributes,
        mMSTotals,
        mMSQuotas,
        mMessages
    );
}; }
    return _cached_decoder_for_MMSMBoxViewResponse(el);
}

let _cached_encoder_for_MMSMBoxViewResponse: $.ASN1Encoder<MMSMBoxViewResponse> | null = null;

/**
 * @summary Encodes a(n) MMSMBoxViewResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSMBoxViewResponse, encoded as an ASN.1 Element.
 */
export
function _encode_MMSMBoxViewResponse (value: MMSMBoxViewResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSMBoxViewResponse) { _cached_encoder_for_MMSMBoxViewResponse = function (value: MMSMBoxViewResponse, elGetter: $.ASN1Encoder<MMSMBoxViewResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* IF_ABSENT  */ ((value.contentLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.contentLocation, $.BER)),
            /* IF_ABSENT  */ ((value.state === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<MMState>(() => _encode_MMState, $.BER), $.BER)(value.state, $.BER)),
            /* IF_ABSENT  */ ((value.flags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<MMFlags>(() => _encode_MMFlags, $.BER), $.BER)(value.flags, $.BER)),
            /* IF_ABSENT  */ ((value.start === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.start, $.BER)),
            /* IF_ABSENT  */ ((value.limit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.limit, $.BER)),
            /* IF_ABSENT  */ ((value.attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<UTF8String>(() => $._encodeUTF8String, $.BER), $.BER)(value.attributes, $.BER)),
            /* IF_ABSENT  */ ((value.mMSTotals === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.mMSTotals, $.BER)),
            /* IF_ABSENT  */ ((value.mMSQuotas === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.mMSQuotas, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<MMBoxDescription>(() => _encode_MMBoxDescription, $.BER), $.BER)(value.mMessages, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSMBoxViewResponse(value, elGetter);
}


/* eslint-enable */
