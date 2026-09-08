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
import { RouteingCrossRefID, _decode_RouteingCrossRefID, _encode_RouteingCrossRefID } from "../CSTA-device-feature-types/RouteingCrossRefID.ta.mjs";
// export { RouteingCrossRefID, _decode_RouteingCrossRefID, _encode_RouteingCrossRefID } from "../CSTA-device-feature-types/RouteingCrossRefID.ta.mjs";
import { RouteRegisterReqID, _decode_RouteRegisterReqID, _encode_RouteRegisterReqID } from "../CSTA-device-feature-types/RouteRegisterReqID.ta.mjs";
// export { RouteRegisterReqID, _decode_RouteRegisterReqID, _encode_RouteRegisterReqID } from "../CSTA-device-feature-types/RouteRegisterReqID.ta.mjs";
import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
// export { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
// export { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ReRouteRequestArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRouteRequestArgument ::= SEQUENCE
 * {    crossRefIdentifier        RouteingCrossRefID,
 *     routeRegisterReqID         [0] IMPLICIT RouteRegisterReqID        OPTIONAL,
 *     replyTimeout             [1] IMPLICIT INTEGER             OPTIONAL,
 *     correlatorData             [2] IMPLICIT CorrelatorData         OPTIONAL,
 *     callLinkageData            [3] IMPLICIT CallLinkageData        OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ReRouteRequestArgument {
    constructor (
        /**
         * @summary `crossRefIdentifier`.
         * @public
         * @readonly
         */
        readonly crossRefIdentifier: RouteingCrossRefID,
        /**
         * @summary `routeRegisterReqID`.
         * @public
         * @readonly
         */
        readonly routeRegisterReqID: OPTIONAL<RouteRegisterReqID>,
        /**
         * @summary `replyTimeout`.
         * @public
         * @readonly
         */
        readonly replyTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ReRouteRequestArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReRouteRequestArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReRouteRequestArgument`.
     * @returns {ReRouteRequestArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReRouteRequestArgument)]: (ReRouteRequestArgument)[_K] }): ReRouteRequestArgument {
        return new ReRouteRequestArgument(_o.crossRefIdentifier, _o.routeRegisterReqID, _o.replyTimeout, _o.correlatorData, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ReRouteRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReRouteRequestArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 24), undefined, undefined),
    new $.ComponentSpec("routeRegisterReqID", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("replyTimeout", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ReRouteRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReRouteRequestArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReRouteRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReRouteRequestArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReRouteRequestArgument: $.ASN1Decoder<ReRouteRequestArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReRouteRequestArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReRouteRequestArgument (el: _Element): ReRouteRequestArgument {
    if (!_cached_decoder_for_ReRouteRequestArgument) { _cached_decoder_for_ReRouteRequestArgument = function (el: _Element): ReRouteRequestArgument {
    let crossRefIdentifier!: RouteingCrossRefID;
    let routeRegisterReqID: OPTIONAL<RouteRegisterReqID>;
    let replyTimeout: OPTIONAL<INTEGER>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIdentifier": (_el: _Element): void => { crossRefIdentifier = _decode_RouteingCrossRefID(_el); },
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = $._decode_implicit<RouteRegisterReqID>(() => _decode_RouteRegisterReqID)(_el); },
        "replyTimeout": (_el: _Element): void => { replyTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReRouteRequestArgument,
        _extension_additions_list_spec_for_ReRouteRequestArgument,
        _root_component_type_list_2_spec_for_ReRouteRequestArgument,
        undefined,
    );
    return new ReRouteRequestArgument(
        crossRefIdentifier,
        routeRegisterReqID,
        replyTimeout,
        correlatorData,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_ReRouteRequestArgument(el);
}

let _cached_encoder_for_ReRouteRequestArgument: $.ASN1Encoder<ReRouteRequestArgument> | null = null;

/**
 * @summary Encodes a(n) ReRouteRequestArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReRouteRequestArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReRouteRequestArgument (value: ReRouteRequestArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReRouteRequestArgument) { _cached_encoder_for_ReRouteRequestArgument = function (value: ReRouteRequestArgument, elGetter: $.ASN1Encoder<ReRouteRequestArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteingCrossRefID(value.crossRefIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.routeRegisterReqID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteRegisterReqID, $.BER)(value.routeRegisterReqID, $.BER)),
            /* IF_ABSENT  */ ((value.replyTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.replyTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReRouteRequestArgument(value, elGetter);
}


/* eslint-enable */
