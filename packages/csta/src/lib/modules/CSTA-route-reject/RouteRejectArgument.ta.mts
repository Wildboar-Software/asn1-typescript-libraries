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
import { RejectCause, _enum_for_RejectCause, RejectCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, RejectCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, RejectCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, RejectCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, RejectCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RejectCause, _encode_RejectCause } from "../CSTA-route-reject/RejectCause.ta.mjs";
// export { RejectCause, _enum_for_RejectCause, RejectCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, RejectCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, RejectCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, RejectCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, RejectCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RejectCause, _encode_RejectCause } from "../CSTA-route-reject/RejectCause.ta.mjs";
import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
// export { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary RouteRejectArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRejectArgument ::= SEQUENCE
 * {    crossRefIdentifier        RouteingCrossRefID,
 *     routeRegisterReqID        [0] IMPLICIT RouteRegisterReqID     OPTIONAL,
 *     rejectCause            [1] IMPLICIT RejectCause        OPTIONAL,
 *     correlatorData            [2] IMPLICIT CorrelatorData        OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteRejectArgument {
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
         * @summary `rejectCause`.
         * @public
         * @readonly
         */
        readonly rejectCause: OPTIONAL<RejectCause>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteRejectArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RouteRejectArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteRejectArgument`.
     * @returns {RouteRejectArgument}
     */
    public static _from_object (_o: { [_K in keyof (RouteRejectArgument)]: (RouteRejectArgument)[_K] }): RouteRejectArgument {
        return new RouteRejectArgument(_o.crossRefIdentifier, _o.routeRegisterReqID, _o.rejectCause, _o.correlatorData, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `rejectCause`
         * @public
         * @static
         */

    public static _enum_for_rejectCause = _enum_for_RejectCause;
}

/**
 * @summary The Leading Root Component Types of RouteRejectArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteRejectArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 24), undefined, undefined),
    new $.ComponentSpec("routeRegisterReqID", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("rejectCause", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RouteRejectArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteRejectArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteRejectArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteRejectArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteRejectArgument: $.ASN1Decoder<RouteRejectArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRejectArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRejectArgument (el: _Element): RouteRejectArgument {
    if (!_cached_decoder_for_RouteRejectArgument) { _cached_decoder_for_RouteRejectArgument = function (el: _Element): RouteRejectArgument {
    let crossRefIdentifier!: RouteingCrossRefID;
    let routeRegisterReqID: OPTIONAL<RouteRegisterReqID>;
    let rejectCause: OPTIONAL<RejectCause>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIdentifier": (_el: _Element): void => { crossRefIdentifier = _decode_RouteingCrossRefID(_el); },
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = $._decode_implicit<RouteRegisterReqID>(() => _decode_RouteRegisterReqID)(_el); },
        "rejectCause": (_el: _Element): void => { rejectCause = $._decode_implicit<RejectCause>(() => _decode_RejectCause)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteRejectArgument,
        _extension_additions_list_spec_for_RouteRejectArgument,
        _root_component_type_list_2_spec_for_RouteRejectArgument,
        undefined,
    );
    return new RouteRejectArgument(
        crossRefIdentifier,
        routeRegisterReqID,
        rejectCause,
        correlatorData,
        extensions
    );
}; }
    return _cached_decoder_for_RouteRejectArgument(el);
}

let _cached_encoder_for_RouteRejectArgument: $.ASN1Encoder<RouteRejectArgument> | null = null;

/**
 * @summary Encodes a(n) RouteRejectArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRejectArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRejectArgument (value: RouteRejectArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRejectArgument) { _cached_encoder_for_RouteRejectArgument = function (value: RouteRejectArgument, elGetter: $.ASN1Encoder<RouteRejectArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteingCrossRefID(value.crossRefIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.routeRegisterReqID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteRegisterReqID, $.BER)(value.routeRegisterReqID, $.BER)),
            /* IF_ABSENT  */ ((value.rejectCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RejectCause, $.BER)(value.rejectCause, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteRejectArgument(value, elGetter);
}


/* eslint-enable */
