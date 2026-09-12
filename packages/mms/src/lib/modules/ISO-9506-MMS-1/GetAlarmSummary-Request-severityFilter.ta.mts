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
import { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
// export { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";


/**
 * @summary GetAlarmSummary_Request_severityFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAlarmSummary-Request-severityFilter ::= SEQUENCE {
 *     mostSevere [0] IMPLICIT Unsigned8,
 *     leastSevere [1] IMPLICIT Unsigned8
 * }
 * ```
 * 
 * @class
 */
export
class GetAlarmSummary_Request_severityFilter {
    constructor (
        /**
         * @summary `mostSevere`.
         * @public
         * @readonly
         */
        readonly mostSevere: Unsigned8,
        /**
         * @summary `leastSevere`.
         * @public
         * @readonly
         */
        readonly leastSevere: Unsigned8
    ) {}

    /**
     * @summary Restructures an object into a GetAlarmSummary_Request_severityFilter
     * @description
     * 
     * This takes an `object` and converts it to a `GetAlarmSummary_Request_severityFilter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAlarmSummary_Request_severityFilter`.
     * @returns {GetAlarmSummary_Request_severityFilter}
     */
    public static _from_object (_o: { [_K in keyof (GetAlarmSummary_Request_severityFilter)]: (GetAlarmSummary_Request_severityFilter)[_K] }): GetAlarmSummary_Request_severityFilter {
        return new GetAlarmSummary_Request_severityFilter(_o.mostSevere, _o.leastSevere);
    }


}

/**
 * @summary The Leading Root Component Types of GetAlarmSummary_Request_severityFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAlarmSummary_Request_severityFilter: $.ComponentSpec[] = [
    new $.ComponentSpec("mostSevere", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("leastSevere", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GetAlarmSummary_Request_severityFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAlarmSummary_Request_severityFilter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAlarmSummary_Request_severityFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAlarmSummary_Request_severityFilter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAlarmSummary_Request_severityFilter: $.ASN1Decoder<GetAlarmSummary_Request_severityFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAlarmSummary_Request_severityFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAlarmSummary_Request_severityFilter (el: _Element): GetAlarmSummary_Request_severityFilter {
    if (!_cached_decoder_for_GetAlarmSummary_Request_severityFilter) { _cached_decoder_for_GetAlarmSummary_Request_severityFilter = function (el: _Element): GetAlarmSummary_Request_severityFilter {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetAlarmSummary-Request-severityFilter contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mostSevere";
    sequence[1].name = "leastSevere";
    let mostSevere!: Unsigned8;
    let leastSevere!: Unsigned8;
    mostSevere = $._decode_implicit<Unsigned8>(() => _decode_Unsigned8)(sequence[0]);
    leastSevere = $._decode_implicit<Unsigned8>(() => _decode_Unsigned8)(sequence[1]);
    return new GetAlarmSummary_Request_severityFilter(
        mostSevere,
        leastSevere,

    );
}; }
    return _cached_decoder_for_GetAlarmSummary_Request_severityFilter(el);
}

let _cached_encoder_for_GetAlarmSummary_Request_severityFilter: $.ASN1Encoder<GetAlarmSummary_Request_severityFilter> | null = null;

/**
 * @summary Encodes a(n) GetAlarmSummary_Request_severityFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAlarmSummary_Request_severityFilter, encoded as an ASN.1 Element.
 */
export
function _encode_GetAlarmSummary_Request_severityFilter (value: GetAlarmSummary_Request_severityFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAlarmSummary_Request_severityFilter) { _cached_encoder_for_GetAlarmSummary_Request_severityFilter = function (value: GetAlarmSummary_Request_severityFilter, elGetter: $.ASN1Encoder<GetAlarmSummary_Request_severityFilter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned8, $.BER)(value.mostSevere, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned8, $.BER)(value.leastSevere, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAlarmSummary_Request_severityFilter(value, elGetter);
}


/* eslint-enable */
