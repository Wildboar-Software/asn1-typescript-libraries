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
import { GetEventEnrollmentAttributes_Request_scopeOfRequest, GetEventEnrollmentAttributes_Request_scopeOfRequest_specific /* IMPORTED_LONG_NAMED_INTEGER */, specific /* IMPORTED_SHORT_NAMED_INTEGER */, GetEventEnrollmentAttributes_Request_scopeOfRequest_client /* IMPORTED_LONG_NAMED_INTEGER */, client /* IMPORTED_SHORT_NAMED_INTEGER */, GetEventEnrollmentAttributes_Request_scopeOfRequest_ec /* IMPORTED_LONG_NAMED_INTEGER */, ec /* IMPORTED_SHORT_NAMED_INTEGER */, GetEventEnrollmentAttributes_Request_scopeOfRequest_ea /* IMPORTED_LONG_NAMED_INTEGER */, ea /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetEventEnrollmentAttributes_Request_scopeOfRequest, _encode_GetEventEnrollmentAttributes_Request_scopeOfRequest } from "../ISO-9506-MMS-1/GetEventEnrollmentAttributes-Request-scopeOfRequest.ta.mjs";
// export { GetEventEnrollmentAttributes_Request_scopeOfRequest, GetEventEnrollmentAttributes_Request_scopeOfRequest_specific /* IMPORTED_LONG_NAMED_INTEGER */, specific /* IMPORTED_SHORT_NAMED_INTEGER */, GetEventEnrollmentAttributes_Request_scopeOfRequest_client /* IMPORTED_LONG_NAMED_INTEGER */, client /* IMPORTED_SHORT_NAMED_INTEGER */, GetEventEnrollmentAttributes_Request_scopeOfRequest_ec /* IMPORTED_LONG_NAMED_INTEGER */, ec /* IMPORTED_SHORT_NAMED_INTEGER */, GetEventEnrollmentAttributes_Request_scopeOfRequest_ea /* IMPORTED_LONG_NAMED_INTEGER */, ea /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetEventEnrollmentAttributes_Request_scopeOfRequest, _encode_GetEventEnrollmentAttributes_Request_scopeOfRequest } from "../ISO-9506-MMS-1/GetEventEnrollmentAttributes-Request-scopeOfRequest.ta.mjs";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Nullable, _get_decoder_for_Nullable, _get_encoder_for_Nullable } from "../ISO-9506-MMS-1/Nullable.ta.mjs";
// export { Nullable, _get_decoder_for_Nullable, _get_encoder_for_Nullable } from "../ISO-9506-MMS-1/Nullable.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";


/**
 * @summary GetEventEnrollmentAttributes_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEventEnrollmentAttributes-Request ::= SEQUENCE {
 *    scopeOfRequest             [0] IMPLICIT INTEGER {
 *        specific                   (0),
 *        client                     (1),
 *        ec                         (2),
 *        ea                         (3)       } (0..3) DEFAULT client,
 *    eventEnrollmentNames       [1] IMPLICIT SEQUENCE OF ObjectName OPTIONAL,
 *    clientApplication          [2] Nullable{ApplicationReference} OPTIONAL,
 *    eventConditionName         [3] ObjectName OPTIONAL,
 *    eventActionName            [4] ObjectName OPTIONAL,
 *    continueAfter              [5] ObjectName OPTIONAL    }
 * ```
 * 
 * @class
 */
export
class GetEventEnrollmentAttributes_Request {
    constructor (
        /**
         * @summary `scopeOfRequest`.
         * @public
         * @readonly
         */
        readonly scopeOfRequest: OPTIONAL<GetEventEnrollmentAttributes_Request_scopeOfRequest>,
        /**
         * @summary `eventEnrollmentNames`.
         * @public
         * @readonly
         */
        readonly eventEnrollmentNames: OPTIONAL<ObjectName[]>,
        /**
         * @summary `clientApplication`.
         * @public
         * @readonly
         */
        readonly clientApplication: OPTIONAL<Nullable<ApplicationReference>>,
        /**
         * @summary `eventConditionName`.
         * @public
         * @readonly
         */
        readonly eventConditionName: OPTIONAL<ObjectName>,
        /**
         * @summary `eventActionName`.
         * @public
         * @readonly
         */
        readonly eventActionName: OPTIONAL<ObjectName>,
        /**
         * @summary `continueAfter`.
         * @public
         * @readonly
         */
        readonly continueAfter: OPTIONAL<ObjectName>
    ) {}

    /**
     * @summary Restructures an object into a GetEventEnrollmentAttributes_Request
     * @description
     * 
     * This takes an `object` and converts it to a `GetEventEnrollmentAttributes_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEventEnrollmentAttributes_Request`.
     * @returns {GetEventEnrollmentAttributes_Request}
     */
    public static _from_object (_o: { [_K in keyof (GetEventEnrollmentAttributes_Request)]: (GetEventEnrollmentAttributes_Request)[_K] }): GetEventEnrollmentAttributes_Request {
        return new GetEventEnrollmentAttributes_Request(_o.scopeOfRequest, _o.eventEnrollmentNames, _o.clientApplication, _o.eventConditionName, _o.eventActionName, _o.continueAfter);
    }

    /**
     * @summary Getter that returns the default value for `scopeOfRequest`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_scopeOfRequest () { return client; }
}

/**
 * @summary The Leading Root Component Types of GetEventEnrollmentAttributes_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEventEnrollmentAttributes_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("scopeOfRequest", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventEnrollmentNames", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("clientApplication", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eventConditionName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eventActionName", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("continueAfter", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of GetEventEnrollmentAttributes_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEventEnrollmentAttributes_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEventEnrollmentAttributes_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEventEnrollmentAttributes_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEventEnrollmentAttributes_Request: $.ASN1Decoder<GetEventEnrollmentAttributes_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEventEnrollmentAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEventEnrollmentAttributes_Request (el: _Element): GetEventEnrollmentAttributes_Request {
    if (!_cached_decoder_for_GetEventEnrollmentAttributes_Request) { _cached_decoder_for_GetEventEnrollmentAttributes_Request = function (el: _Element): GetEventEnrollmentAttributes_Request {
    let scopeOfRequest: OPTIONAL<GetEventEnrollmentAttributes_Request_scopeOfRequest> = GetEventEnrollmentAttributes_Request._default_value_for_scopeOfRequest;
    let eventEnrollmentNames: OPTIONAL<ObjectName[]>;
    let clientApplication: OPTIONAL<Nullable<ApplicationReference>>;
    let eventConditionName: OPTIONAL<ObjectName>;
    let eventActionName: OPTIONAL<ObjectName>;
    let continueAfter: OPTIONAL<ObjectName>;
    const callbacks: $.DecodingMap = {
        "scopeOfRequest": (_el: _Element): void => { scopeOfRequest = $._decode_implicit<GetEventEnrollmentAttributes_Request_scopeOfRequest>(() => _decode_GetEventEnrollmentAttributes_Request_scopeOfRequest)(_el); },
        "eventEnrollmentNames": (_el: _Element): void => { eventEnrollmentNames = $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName))(_el); },
        "clientApplication": (_el: _Element): void => { clientApplication = $._decode_explicit<Nullable<ApplicationReference>>(() => _get_decoder_for_Nullable<ApplicationReference>(_decode_ApplicationReference))(_el); },
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "eventActionName": (_el: _Element): void => { eventActionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "continueAfter": (_el: _Element): void => { continueAfter = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEventEnrollmentAttributes_Request,
        _extension_additions_list_spec_for_GetEventEnrollmentAttributes_Request,
        _root_component_type_list_2_spec_for_GetEventEnrollmentAttributes_Request,
        undefined,
    );
    return new GetEventEnrollmentAttributes_Request(
        scopeOfRequest,
        eventEnrollmentNames,
        clientApplication,
        eventConditionName,
        eventActionName,
        continueAfter
    );
}; }
    return _cached_decoder_for_GetEventEnrollmentAttributes_Request(el);
}

let _cached_encoder_for_GetEventEnrollmentAttributes_Request: $.ASN1Encoder<GetEventEnrollmentAttributes_Request> | null = null;

/**
 * @summary Encodes a(n) GetEventEnrollmentAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEventEnrollmentAttributes_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetEventEnrollmentAttributes_Request (value: GetEventEnrollmentAttributes_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEventEnrollmentAttributes_Request) { _cached_encoder_for_GetEventEnrollmentAttributes_Request = function (value: GetEventEnrollmentAttributes_Request, elGetter: $.ASN1Encoder<GetEventEnrollmentAttributes_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.scopeOfRequest === undefined || $.deepEq(value.scopeOfRequest, GetEventEnrollmentAttributes_Request._default_value_for_scopeOfRequest) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GetEventEnrollmentAttributes_Request_scopeOfRequest, $.BER)(value.scopeOfRequest, $.BER)),
            /* IF_ABSENT  */ ((value.eventEnrollmentNames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER)(value.eventEnrollmentNames, $.BER)),
            /* IF_ABSENT  */ ((value.clientApplication === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _get_encoder_for_Nullable<ApplicationReference>(_encode_ApplicationReference), $.BER)(value.clientApplication, $.BER)),
            /* IF_ABSENT  */ ((value.eventConditionName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER)),
            /* IF_ABSENT  */ ((value.eventActionName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_ObjectName, $.BER)(value.eventActionName, $.BER)),
            /* IF_ABSENT  */ ((value.continueAfter === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_ObjectName, $.BER)(value.continueAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetEventEnrollmentAttributes_Request(value, elGetter);
}


/* eslint-enable */
