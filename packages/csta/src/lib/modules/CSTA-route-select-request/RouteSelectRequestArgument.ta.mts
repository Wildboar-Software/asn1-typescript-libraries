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
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { RetryValue, _decode_RetryValue, _encode_RetryValue } from "../CSTA-device-feature-types/RetryValue.ta.mjs";
// export { RetryValue, _decode_RetryValue, _encode_RetryValue } from "../CSTA-device-feature-types/RetryValue.ta.mjs";
import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
// export { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary RouteSelectRequestArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteSelectRequestArgument ::= SEQUENCE
 * {    crossRefIdentifier        RouteingCrossRefID,
 *     routeRegisterReqID        [ 0] IMPLICIT RouteRegisterReqID    OPTIONAL,
 *     routeSelected            [ 1] DeviceID,
 *     alternateRoutes            [ 2] IMPLICIT SEQUENCE OF DeviceID    OPTIONAL,
 *     remainRetries            [ 3] RetryValue                OPTIONAL,
 *     routeUsedReq            [ 4] IMPLICIT BOOLEAN            OPTIONAL,
 *     correlatorData            [ 5] IMPLICIT CorrelatorData        OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteSelectRequestArgument {
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
         * @summary `routeSelected`.
         * @public
         * @readonly
         */
        readonly routeSelected: DeviceID,
        /**
         * @summary `alternateRoutes`.
         * @public
         * @readonly
         */
        readonly alternateRoutes: OPTIONAL<DeviceID[]>,
        /**
         * @summary `remainRetries`.
         * @public
         * @readonly
         */
        readonly remainRetries: OPTIONAL<RetryValue>,
        /**
         * @summary `routeUsedReq`.
         * @public
         * @readonly
         */
        readonly routeUsedReq: OPTIONAL<BOOLEAN>,
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
     * @summary Restructures an object into a RouteSelectRequestArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RouteSelectRequestArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteSelectRequestArgument`.
     * @returns {RouteSelectRequestArgument}
     */
    public static _from_object (_o: { [_K in keyof (RouteSelectRequestArgument)]: (RouteSelectRequestArgument)[_K] }): RouteSelectRequestArgument {
        return new RouteSelectRequestArgument(_o.crossRefIdentifier, _o.routeRegisterReqID, _o.routeSelected, _o.alternateRoutes, _o.remainRetries, _o.routeUsedReq, _o.correlatorData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteSelectRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteSelectRequestArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 24), undefined, undefined),
    new $.ComponentSpec("routeRegisterReqID", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("routeSelected", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("alternateRoutes", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("remainRetries", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("routeUsedReq", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RouteSelectRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteSelectRequestArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteSelectRequestArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteSelectRequestArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteSelectRequestArgument: $.ASN1Decoder<RouteSelectRequestArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteSelectRequestArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteSelectRequestArgument (el: _Element): RouteSelectRequestArgument {
    if (!_cached_decoder_for_RouteSelectRequestArgument) { _cached_decoder_for_RouteSelectRequestArgument = function (el: _Element): RouteSelectRequestArgument {
    let crossRefIdentifier!: RouteingCrossRefID;
    let routeRegisterReqID: OPTIONAL<RouteRegisterReqID>;
    let routeSelected!: DeviceID;
    let alternateRoutes: OPTIONAL<DeviceID[]>;
    let remainRetries: OPTIONAL<RetryValue>;
    let routeUsedReq: OPTIONAL<BOOLEAN>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIdentifier": (_el: _Element): void => { crossRefIdentifier = _decode_RouteingCrossRefID(_el); },
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = $._decode_implicit<RouteRegisterReqID>(() => _decode_RouteRegisterReqID)(_el); },
        "routeSelected": (_el: _Element): void => { routeSelected = $._decode_explicit<DeviceID>(() => _decode_DeviceID)(_el); },
        "alternateRoutes": (_el: _Element): void => { alternateRoutes = $._decode_implicit<DeviceID[]>(() => $._decodeSequenceOf<DeviceID>(() => _decode_DeviceID))(_el); },
        "remainRetries": (_el: _Element): void => { remainRetries = $._decode_explicit<RetryValue>(() => _decode_RetryValue)(_el); },
        "routeUsedReq": (_el: _Element): void => { routeUsedReq = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteSelectRequestArgument,
        _extension_additions_list_spec_for_RouteSelectRequestArgument,
        _root_component_type_list_2_spec_for_RouteSelectRequestArgument,
        undefined,
    );
    return new RouteSelectRequestArgument(
        crossRefIdentifier,
        routeRegisterReqID,
        routeSelected,
        alternateRoutes,
        remainRetries,
        routeUsedReq,
        correlatorData,
        extensions
    );
}; }
    return _cached_decoder_for_RouteSelectRequestArgument(el);
}

let _cached_encoder_for_RouteSelectRequestArgument: $.ASN1Encoder<RouteSelectRequestArgument> | null = null;

/**
 * @summary Encodes a(n) RouteSelectRequestArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteSelectRequestArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RouteSelectRequestArgument (value: RouteSelectRequestArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteSelectRequestArgument) { _cached_encoder_for_RouteSelectRequestArgument = function (value: RouteSelectRequestArgument, elGetter: $.ASN1Encoder<RouteSelectRequestArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteingCrossRefID(value.crossRefIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.routeRegisterReqID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteRegisterReqID, $.BER)(value.routeRegisterReqID, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DeviceID, $.BER)(value.routeSelected, $.BER),
            /* IF_ABSENT  */ ((value.alternateRoutes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<DeviceID>(() => _encode_DeviceID, $.BER), $.BER)(value.alternateRoutes, $.BER)),
            /* IF_ABSENT  */ ((value.remainRetries === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_RetryValue, $.BER)(value.remainRetries, $.BER)),
            /* IF_ABSENT  */ ((value.routeUsedReq === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.routeUsedReq, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteSelectRequestArgument(value, elGetter);
}


/* eslint-enable */
