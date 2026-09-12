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
import { EventConditionStatus, _decode_EventConditionStatus, _encode_EventConditionStatus } from "../ISO-9506-MMS-1/EventConditionStatus.ta.mjs";
// export { EventConditionStatus, _decode_EventConditionStatus, _encode_EventConditionStatus } from "../ISO-9506-MMS-1/EventConditionStatus.ta.mjs";


/**
 * @summary ReportEventConditionListStatus_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportEventConditionListStatus-Response ::= SEQUENCE {
 *    listOfEventConditionStatus    [1] IMPLICIT SEQUENCE OF EventConditionStatus,
 *    moreFollows                   [2] IMPLICIT BOOLEAN DEFAULT TRUE }
 * ```
 * 
 * @class
 */
export
class ReportEventConditionListStatus_Response {
    constructor (
        /**
         * @summary `listOfEventConditionStatus`.
         * @public
         * @readonly
         */
        readonly listOfEventConditionStatus: EventConditionStatus[],
        /**
         * @summary `moreFollows`.
         * @public
         * @readonly
         */
        readonly moreFollows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a ReportEventConditionListStatus_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ReportEventConditionListStatus_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportEventConditionListStatus_Response`.
     * @returns {ReportEventConditionListStatus_Response}
     */
    public static _from_object (_o: { [_K in keyof (ReportEventConditionListStatus_Response)]: (ReportEventConditionListStatus_Response)[_K] }): ReportEventConditionListStatus_Response {
        return new ReportEventConditionListStatus_Response(_o.listOfEventConditionStatus, _o.moreFollows);
    }

    /**
     * @summary Getter that returns the default value for `moreFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreFollows () { return true; }
}

/**
 * @summary The Leading Root Component Types of ReportEventConditionListStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportEventConditionListStatus_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfEventConditionStatus", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("moreFollows", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReportEventConditionListStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportEventConditionListStatus_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportEventConditionListStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportEventConditionListStatus_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportEventConditionListStatus_Response: $.ASN1Decoder<ReportEventConditionListStatus_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportEventConditionListStatus_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportEventConditionListStatus_Response (el: _Element): ReportEventConditionListStatus_Response {
    if (!_cached_decoder_for_ReportEventConditionListStatus_Response) { _cached_decoder_for_ReportEventConditionListStatus_Response = function (el: _Element): ReportEventConditionListStatus_Response {
    let listOfEventConditionStatus!: EventConditionStatus[];
    let moreFollows: OPTIONAL<BOOLEAN> = ReportEventConditionListStatus_Response._default_value_for_moreFollows;
    const callbacks: $.DecodingMap = {
        "listOfEventConditionStatus": (_el: _Element): void => { listOfEventConditionStatus = $._decode_implicit<EventConditionStatus[]>(() => $._decodeSequenceOf<EventConditionStatus>(() => _decode_EventConditionStatus))(_el); },
        "moreFollows": (_el: _Element): void => { moreFollows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportEventConditionListStatus_Response,
        _extension_additions_list_spec_for_ReportEventConditionListStatus_Response,
        _root_component_type_list_2_spec_for_ReportEventConditionListStatus_Response,
        undefined,
    );
    return new ReportEventConditionListStatus_Response(
        listOfEventConditionStatus,
        moreFollows
    );
}; }
    return _cached_decoder_for_ReportEventConditionListStatus_Response(el);
}

let _cached_encoder_for_ReportEventConditionListStatus_Response: $.ASN1Encoder<ReportEventConditionListStatus_Response> | null = null;

/**
 * @summary Encodes a(n) ReportEventConditionListStatus_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportEventConditionListStatus_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ReportEventConditionListStatus_Response (value: ReportEventConditionListStatus_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportEventConditionListStatus_Response) { _cached_encoder_for_ReportEventConditionListStatus_Response = function (value: ReportEventConditionListStatus_Response, elGetter: $.ASN1Encoder<ReportEventConditionListStatus_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<EventConditionStatus>(() => _encode_EventConditionStatus, $.BER), $.BER)(value.listOfEventConditionStatus, $.BER),
            /* IF_DEFAULT */ (value.moreFollows === undefined || $.deepEq(value.moreFollows, ReportEventConditionListStatus_Response._default_value_for_moreFollows) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.moreFollows, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportEventConditionListStatus_Response(value, elGetter);
}


/* eslint-enable */
