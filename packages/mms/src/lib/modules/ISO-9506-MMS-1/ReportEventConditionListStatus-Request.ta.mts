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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ReportEventConditionListStatus_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportEventConditionListStatus-Request ::= SEQUENCE {
 *    eventConditionListName        [0] ObjectName, -- Event Condition List Name
 *    continueAfter                 [1] IMPLICIT Identifier OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ReportEventConditionListStatus_Request {
    constructor (
        /**
         * @summary `eventConditionListName`.
         * @public
         * @readonly
         */
        readonly eventConditionListName: ObjectName,
        /**
         * @summary `continueAfter`.
         * @public
         * @readonly
         */
        readonly continueAfter: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a ReportEventConditionListStatus_Request
     * @description
     * 
     * This takes an `object` and converts it to a `ReportEventConditionListStatus_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportEventConditionListStatus_Request`.
     * @returns {ReportEventConditionListStatus_Request}
     */
    public static _from_object (_o: { [_K in keyof (ReportEventConditionListStatus_Request)]: (ReportEventConditionListStatus_Request)[_K] }): ReportEventConditionListStatus_Request {
        return new ReportEventConditionListStatus_Request(_o.eventConditionListName, _o.continueAfter);
    }


}

/**
 * @summary The Leading Root Component Types of ReportEventConditionListStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportEventConditionListStatus_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionListName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("continueAfter", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReportEventConditionListStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportEventConditionListStatus_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportEventConditionListStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportEventConditionListStatus_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportEventConditionListStatus_Request: $.ASN1Decoder<ReportEventConditionListStatus_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportEventConditionListStatus_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportEventConditionListStatus_Request (el: _Element): ReportEventConditionListStatus_Request {
    if (!_cached_decoder_for_ReportEventConditionListStatus_Request) { _cached_decoder_for_ReportEventConditionListStatus_Request = function (el: _Element): ReportEventConditionListStatus_Request {
    let eventConditionListName!: ObjectName;
    let continueAfter: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "eventConditionListName": (_el: _Element): void => { eventConditionListName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "continueAfter": (_el: _Element): void => { continueAfter = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportEventConditionListStatus_Request,
        _extension_additions_list_spec_for_ReportEventConditionListStatus_Request,
        _root_component_type_list_2_spec_for_ReportEventConditionListStatus_Request,
        undefined,
    );
    return new ReportEventConditionListStatus_Request(
        eventConditionListName,
        continueAfter
    );
}; }
    return _cached_decoder_for_ReportEventConditionListStatus_Request(el);
}

let _cached_encoder_for_ReportEventConditionListStatus_Request: $.ASN1Encoder<ReportEventConditionListStatus_Request> | null = null;

/**
 * @summary Encodes a(n) ReportEventConditionListStatus_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportEventConditionListStatus_Request, encoded as an ASN.1 Element.
 */
export
function _encode_ReportEventConditionListStatus_Request (value: ReportEventConditionListStatus_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportEventConditionListStatus_Request) { _cached_encoder_for_ReportEventConditionListStatus_Request = function (value: ReportEventConditionListStatus_Request, elGetter: $.ASN1Encoder<ReportEventConditionListStatus_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionListName, $.BER),
            /* IF_ABSENT  */ ((value.continueAfter === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER)(value.continueAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportEventConditionListStatus_Request(value, elGetter);
}


/* eslint-enable */
