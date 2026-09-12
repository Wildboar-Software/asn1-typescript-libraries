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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { AlterEventConditionListMonitoring_Request_priorityChange, _decode_AlterEventConditionListMonitoring_Request_priorityChange, _encode_AlterEventConditionListMonitoring_Request_priorityChange } from "../ISO-9506-MMS-1/AlterEventConditionListMonitoring-Request-priorityChange.ta.mjs";
// export { AlterEventConditionListMonitoring_Request_priorityChange, _decode_AlterEventConditionListMonitoring_Request_priorityChange, _encode_AlterEventConditionListMonitoring_Request_priorityChange } from "../ISO-9506-MMS-1/AlterEventConditionListMonitoring-Request-priorityChange.ta.mjs";


/**
 * @summary AlterEventConditionListMonitoring_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlterEventConditionListMonitoring-Request ::= SEQUENCE {
 *    eventConditionListName        [0] ObjectName,
 *    enabled                       [1] IMPLICIT BOOLEAN,
 *    priorityChange                [2] CHOICE {
 *        priorityValue                 [0] IMPLICIT INTEGER,
 *        priorityReset                 [1] IMPLICIT NULL } OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class AlterEventConditionListMonitoring_Request {
    constructor (
        /**
         * @summary `eventConditionListName`.
         * @public
         * @readonly
         */
        readonly eventConditionListName: ObjectName,
        /**
         * @summary `enabled`.
         * @public
         * @readonly
         */
        readonly enabled: BOOLEAN,
        /**
         * @summary `priorityChange`.
         * @public
         * @readonly
         */
        readonly priorityChange: OPTIONAL<AlterEventConditionListMonitoring_Request_priorityChange>
    ) {}

    /**
     * @summary Restructures an object into a AlterEventConditionListMonitoring_Request
     * @description
     * 
     * This takes an `object` and converts it to a `AlterEventConditionListMonitoring_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlterEventConditionListMonitoring_Request`.
     * @returns {AlterEventConditionListMonitoring_Request}
     */
    public static _from_object (_o: { [_K in keyof (AlterEventConditionListMonitoring_Request)]: (AlterEventConditionListMonitoring_Request)[_K] }): AlterEventConditionListMonitoring_Request {
        return new AlterEventConditionListMonitoring_Request(_o.eventConditionListName, _o.enabled, _o.priorityChange);
    }


}

/**
 * @summary The Leading Root Component Types of AlterEventConditionListMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlterEventConditionListMonitoring_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionListName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("enabled", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("priorityChange", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AlterEventConditionListMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlterEventConditionListMonitoring_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlterEventConditionListMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlterEventConditionListMonitoring_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlterEventConditionListMonitoring_Request: $.ASN1Decoder<AlterEventConditionListMonitoring_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlterEventConditionListMonitoring_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlterEventConditionListMonitoring_Request (el: _Element): AlterEventConditionListMonitoring_Request {
    if (!_cached_decoder_for_AlterEventConditionListMonitoring_Request) { _cached_decoder_for_AlterEventConditionListMonitoring_Request = function (el: _Element): AlterEventConditionListMonitoring_Request {
    let eventConditionListName!: ObjectName;
    let enabled!: BOOLEAN;
    let priorityChange: OPTIONAL<AlterEventConditionListMonitoring_Request_priorityChange>;
    const callbacks: $.DecodingMap = {
        "eventConditionListName": (_el: _Element): void => { eventConditionListName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "enabled": (_el: _Element): void => { enabled = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "priorityChange": (_el: _Element): void => { priorityChange = $._decode_explicit<AlterEventConditionListMonitoring_Request_priorityChange>(() => _decode_AlterEventConditionListMonitoring_Request_priorityChange)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlterEventConditionListMonitoring_Request,
        _extension_additions_list_spec_for_AlterEventConditionListMonitoring_Request,
        _root_component_type_list_2_spec_for_AlterEventConditionListMonitoring_Request,
        undefined,
    );
    return new AlterEventConditionListMonitoring_Request(
        eventConditionListName,
        enabled,
        priorityChange
    );
}; }
    return _cached_decoder_for_AlterEventConditionListMonitoring_Request(el);
}

let _cached_encoder_for_AlterEventConditionListMonitoring_Request: $.ASN1Encoder<AlterEventConditionListMonitoring_Request> | null = null;

/**
 * @summary Encodes a(n) AlterEventConditionListMonitoring_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlterEventConditionListMonitoring_Request, encoded as an ASN.1 Element.
 */
export
function _encode_AlterEventConditionListMonitoring_Request (value: AlterEventConditionListMonitoring_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlterEventConditionListMonitoring_Request) { _cached_encoder_for_AlterEventConditionListMonitoring_Request = function (value: AlterEventConditionListMonitoring_Request, elGetter: $.ASN1Encoder<AlterEventConditionListMonitoring_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionListName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.enabled, $.BER),
            /* IF_ABSENT  */ ((value.priorityChange === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_AlterEventConditionListMonitoring_Request_priorityChange, $.BER)(value.priorityChange, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlterEventConditionListMonitoring_Request(value, elGetter);
}


/* eslint-enable */
