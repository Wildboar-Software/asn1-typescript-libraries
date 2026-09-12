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
import { GetAlarmEnrollmentSummary_Request_acknowledgementFilter, GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked /* IMPORTED_LONG_NAMED_INTEGER */, not_acked /* IMPORTED_SHORT_NAMED_INTEGER */, GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked /* IMPORTED_LONG_NAMED_INTEGER */, acked /* IMPORTED_SHORT_NAMED_INTEGER */, GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all /* IMPORTED_LONG_NAMED_INTEGER */, all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter, _encode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter } from "../ISO-9506-MMS-1/GetAlarmEnrollmentSummary-Request-acknowledgementFilter.ta.mjs";
// export { GetAlarmEnrollmentSummary_Request_acknowledgementFilter, GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked /* IMPORTED_LONG_NAMED_INTEGER */, not_acked /* IMPORTED_SHORT_NAMED_INTEGER */, GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked /* IMPORTED_LONG_NAMED_INTEGER */, acked /* IMPORTED_SHORT_NAMED_INTEGER */, GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all /* IMPORTED_LONG_NAMED_INTEGER */, all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter, _encode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter } from "../ISO-9506-MMS-1/GetAlarmEnrollmentSummary-Request-acknowledgementFilter.ta.mjs";
import { GetAlarmEnrollmentSummary_Request_severityFilter, _decode_GetAlarmEnrollmentSummary_Request_severityFilter, _encode_GetAlarmEnrollmentSummary_Request_severityFilter } from "../ISO-9506-MMS-1/GetAlarmEnrollmentSummary-Request-severityFilter.ta.mjs";
// export { GetAlarmEnrollmentSummary_Request_severityFilter, _decode_GetAlarmEnrollmentSummary_Request_severityFilter, _encode_GetAlarmEnrollmentSummary_Request_severityFilter } from "../ISO-9506-MMS-1/GetAlarmEnrollmentSummary-Request-severityFilter.ta.mjs";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary GetAlarmEnrollmentSummary_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAlarmEnrollmentSummary-Request ::= SEQUENCE {
 *    enrollmentsOnly               [0] IMPLICIT BOOLEAN DEFAULT TRUE,
 *    activeAlarmsOnly              [1] IMPLICIT BOOLEAN DEFAULT TRUE,
 *    acknowledgementFilter         [2] IMPLICIT INTEGER {
 *        not-acked                     (0),
 *        acked                         (1),
 *        all                           (2)
 *    } (0..2) DEFAULT not-acked,
 *    severityFilter                [3] IMPLICIT SEQUENCE {
 *        mostSevere                    [0] IMPLICIT Unsigned8,
 *        leastSevere                   [1] IMPLICIT Unsigned8 }
 *                                      DEFAULT { mostSevere 0, leastSevere 127 },
 *    continueAfter                 [5] ObjectName OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class GetAlarmEnrollmentSummary_Request {
    constructor (
        /**
         * @summary `enrollmentsOnly`.
         * @public
         * @readonly
         */
        readonly enrollmentsOnly: OPTIONAL<BOOLEAN>,
        /**
         * @summary `activeAlarmsOnly`.
         * @public
         * @readonly
         */
        readonly activeAlarmsOnly: OPTIONAL<BOOLEAN>,
        /**
         * @summary `acknowledgementFilter`.
         * @public
         * @readonly
         */
        readonly acknowledgementFilter: OPTIONAL<GetAlarmEnrollmentSummary_Request_acknowledgementFilter>,
        /**
         * @summary `severityFilter`.
         * @public
         * @readonly
         */
        readonly severityFilter: OPTIONAL<GetAlarmEnrollmentSummary_Request_severityFilter>,
        /**
         * @summary `continueAfter`.
         * @public
         * @readonly
         */
        readonly continueAfter: OPTIONAL<ObjectName>
    ) {}

    /**
     * @summary Restructures an object into a GetAlarmEnrollmentSummary_Request
     * @description
     * 
     * This takes an `object` and converts it to a `GetAlarmEnrollmentSummary_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAlarmEnrollmentSummary_Request`.
     * @returns {GetAlarmEnrollmentSummary_Request}
     */
    public static _from_object (_o: { [_K in keyof (GetAlarmEnrollmentSummary_Request)]: (GetAlarmEnrollmentSummary_Request)[_K] }): GetAlarmEnrollmentSummary_Request {
        return new GetAlarmEnrollmentSummary_Request(_o.enrollmentsOnly, _o.activeAlarmsOnly, _o.acknowledgementFilter, _o.severityFilter, _o.continueAfter);
    }

    /**
     * @summary Getter that returns the default value for `enrollmentsOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_enrollmentsOnly () { return true; }
    /**
     * @summary Getter that returns the default value for `activeAlarmsOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_activeAlarmsOnly () { return true; }
    /**
     * @summary Getter that returns the default value for `acknowledgementFilter`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_acknowledgementFilter () { return not_acked; }
    /**
     * @summary Getter that returns the default value for `severityFilter`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_severityFilter () { return GetAlarmEnrollmentSummary_Request_severityFilter._from_object({ mostSevere: 0, leastSevere: 127 }); }
}

/**
 * @summary The Leading Root Component Types of GetAlarmEnrollmentSummary_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAlarmEnrollmentSummary_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("enrollmentsOnly", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("activeAlarmsOnly", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("acknowledgementFilter", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("severityFilter", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("continueAfter", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of GetAlarmEnrollmentSummary_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAlarmEnrollmentSummary_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAlarmEnrollmentSummary_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAlarmEnrollmentSummary_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAlarmEnrollmentSummary_Request: $.ASN1Decoder<GetAlarmEnrollmentSummary_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAlarmEnrollmentSummary_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAlarmEnrollmentSummary_Request (el: _Element): GetAlarmEnrollmentSummary_Request {
    if (!_cached_decoder_for_GetAlarmEnrollmentSummary_Request) { _cached_decoder_for_GetAlarmEnrollmentSummary_Request = function (el: _Element): GetAlarmEnrollmentSummary_Request {
    let enrollmentsOnly: OPTIONAL<BOOLEAN> = GetAlarmEnrollmentSummary_Request._default_value_for_enrollmentsOnly;
    let activeAlarmsOnly: OPTIONAL<BOOLEAN> = GetAlarmEnrollmentSummary_Request._default_value_for_activeAlarmsOnly;
    let acknowledgementFilter: OPTIONAL<GetAlarmEnrollmentSummary_Request_acknowledgementFilter> = GetAlarmEnrollmentSummary_Request._default_value_for_acknowledgementFilter;
    let severityFilter: OPTIONAL<GetAlarmEnrollmentSummary_Request_severityFilter> = GetAlarmEnrollmentSummary_Request._default_value_for_severityFilter;
    let continueAfter: OPTIONAL<ObjectName>;
    const callbacks: $.DecodingMap = {
        "enrollmentsOnly": (_el: _Element): void => { enrollmentsOnly = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "activeAlarmsOnly": (_el: _Element): void => { activeAlarmsOnly = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "acknowledgementFilter": (_el: _Element): void => { acknowledgementFilter = $._decode_implicit<GetAlarmEnrollmentSummary_Request_acknowledgementFilter>(() => _decode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter)(_el); },
        "severityFilter": (_el: _Element): void => { severityFilter = $._decode_implicit<GetAlarmEnrollmentSummary_Request_severityFilter>(() => _decode_GetAlarmEnrollmentSummary_Request_severityFilter)(_el); },
        "continueAfter": (_el: _Element): void => { continueAfter = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAlarmEnrollmentSummary_Request,
        _extension_additions_list_spec_for_GetAlarmEnrollmentSummary_Request,
        _root_component_type_list_2_spec_for_GetAlarmEnrollmentSummary_Request,
        undefined,
    );
    return new GetAlarmEnrollmentSummary_Request(
        enrollmentsOnly,
        activeAlarmsOnly,
        acknowledgementFilter,
        severityFilter,
        continueAfter
    );
}; }
    return _cached_decoder_for_GetAlarmEnrollmentSummary_Request(el);
}

let _cached_encoder_for_GetAlarmEnrollmentSummary_Request: $.ASN1Encoder<GetAlarmEnrollmentSummary_Request> | null = null;

/**
 * @summary Encodes a(n) GetAlarmEnrollmentSummary_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAlarmEnrollmentSummary_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetAlarmEnrollmentSummary_Request (value: GetAlarmEnrollmentSummary_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAlarmEnrollmentSummary_Request) { _cached_encoder_for_GetAlarmEnrollmentSummary_Request = function (value: GetAlarmEnrollmentSummary_Request, elGetter: $.ASN1Encoder<GetAlarmEnrollmentSummary_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.enrollmentsOnly === undefined || $.deepEq(value.enrollmentsOnly, GetAlarmEnrollmentSummary_Request._default_value_for_enrollmentsOnly) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.enrollmentsOnly, $.BER)),
            /* IF_DEFAULT */ (value.activeAlarmsOnly === undefined || $.deepEq(value.activeAlarmsOnly, GetAlarmEnrollmentSummary_Request._default_value_for_activeAlarmsOnly) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.activeAlarmsOnly, $.BER)),
            /* IF_DEFAULT */ (value.acknowledgementFilter === undefined || $.deepEq(value.acknowledgementFilter, GetAlarmEnrollmentSummary_Request._default_value_for_acknowledgementFilter) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter, $.BER)(value.acknowledgementFilter, $.BER)),
            /* IF_DEFAULT */ (value.severityFilter === undefined || $.deepEq(value.severityFilter, GetAlarmEnrollmentSummary_Request._default_value_for_severityFilter) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GetAlarmEnrollmentSummary_Request_severityFilter, $.BER)(value.severityFilter, $.BER)),
            /* IF_ABSENT  */ ((value.continueAfter === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_ObjectName, $.BER)(value.continueAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAlarmEnrollmentSummary_Request(value, elGetter);
}


/* eslint-enable */
