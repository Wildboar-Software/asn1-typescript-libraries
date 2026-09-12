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
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";


/**
 * @summary TriggerEvent_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerEvent-Request ::= SEQUENCE {
 *    eventConditionName     [0] ObjectName,
 *    priority               [1] IMPLICIT Priority OPTIONAL   }
 * ```
 * 
 * @class
 */
export
class TriggerEvent_Request {
    constructor (
        /**
         * @summary `eventConditionName`.
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>
    ) {}

    /**
     * @summary Restructures an object into a TriggerEvent_Request
     * @description
     * 
     * This takes an `object` and converts it to a `TriggerEvent_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerEvent_Request`.
     * @returns {TriggerEvent_Request}
     */
    public static _from_object (_o: { [_K in keyof (TriggerEvent_Request)]: (TriggerEvent_Request)[_K] }): TriggerEvent_Request {
        return new TriggerEvent_Request(_o.eventConditionName, _o.priority);
    }


}

/**
 * @summary The Leading Root Component Types of TriggerEvent_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TriggerEvent_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TriggerEvent_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TriggerEvent_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TriggerEvent_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TriggerEvent_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TriggerEvent_Request: $.ASN1Decoder<TriggerEvent_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerEvent_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerEvent_Request (el: _Element): TriggerEvent_Request {
    if (!_cached_decoder_for_TriggerEvent_Request) { _cached_decoder_for_TriggerEvent_Request = function (el: _Element): TriggerEvent_Request {
    let eventConditionName!: ObjectName;
    let priority: OPTIONAL<Priority>;
    const callbacks: $.DecodingMap = {
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TriggerEvent_Request,
        _extension_additions_list_spec_for_TriggerEvent_Request,
        _root_component_type_list_2_spec_for_TriggerEvent_Request,
        undefined,
    );
    return new TriggerEvent_Request(
        eventConditionName,
        priority
    );
}; }
    return _cached_decoder_for_TriggerEvent_Request(el);
}

let _cached_encoder_for_TriggerEvent_Request: $.ASN1Encoder<TriggerEvent_Request> | null = null;

/**
 * @summary Encodes a(n) TriggerEvent_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerEvent_Request, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerEvent_Request (value: TriggerEvent_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerEvent_Request) { _cached_encoder_for_TriggerEvent_Request = function (value: TriggerEvent_Request, elGetter: $.ASN1Encoder<TriggerEvent_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Priority, $.BER)(value.priority, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TriggerEvent_Request(value, elGetter);
}


/* eslint-enable */
