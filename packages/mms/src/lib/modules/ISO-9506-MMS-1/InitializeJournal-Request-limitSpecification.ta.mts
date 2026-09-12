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
import { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
// export { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";


/**
 * @summary InitializeJournal_Request_limitSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitializeJournal-Request-limitSpecification ::= SEQUENCE {
 *     limitingTime [0] IMPLICIT TimeOfDay,
 *     limitingEntry [1] IMPLICIT OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InitializeJournal_Request_limitSpecification {
    constructor (
        /**
         * @summary `limitingTime`.
         * @public
         * @readonly
         */
        readonly limitingTime: TimeOfDay,
        /**
         * @summary `limitingEntry`.
         * @public
         * @readonly
         */
        readonly limitingEntry: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a InitializeJournal_Request_limitSpecification
     * @description
     * 
     * This takes an `object` and converts it to a `InitializeJournal_Request_limitSpecification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializeJournal_Request_limitSpecification`.
     * @returns {InitializeJournal_Request_limitSpecification}
     */
    public static _from_object (_o: { [_K in keyof (InitializeJournal_Request_limitSpecification)]: (InitializeJournal_Request_limitSpecification)[_K] }): InitializeJournal_Request_limitSpecification {
        return new InitializeJournal_Request_limitSpecification(_o.limitingTime, _o.limitingEntry);
    }


}

/**
 * @summary The Leading Root Component Types of InitializeJournal_Request_limitSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitializeJournal_Request_limitSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec("limitingTime", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("limitingEntry", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of InitializeJournal_Request_limitSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitializeJournal_Request_limitSpecification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitializeJournal_Request_limitSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitializeJournal_Request_limitSpecification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitializeJournal_Request_limitSpecification: $.ASN1Decoder<InitializeJournal_Request_limitSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitializeJournal_Request_limitSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitializeJournal_Request_limitSpecification (el: _Element): InitializeJournal_Request_limitSpecification {
    if (!_cached_decoder_for_InitializeJournal_Request_limitSpecification) { _cached_decoder_for_InitializeJournal_Request_limitSpecification = function (el: _Element): InitializeJournal_Request_limitSpecification {
    let limitingTime!: TimeOfDay;
    let limitingEntry: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "limitingTime": (_el: _Element): void => { limitingTime = $._decode_implicit<TimeOfDay>(() => _decode_TimeOfDay)(_el); },
        "limitingEntry": (_el: _Element): void => { limitingEntry = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitializeJournal_Request_limitSpecification,
        _extension_additions_list_spec_for_InitializeJournal_Request_limitSpecification,
        _root_component_type_list_2_spec_for_InitializeJournal_Request_limitSpecification,
        undefined,
    );
    return new InitializeJournal_Request_limitSpecification(
        limitingTime,
        limitingEntry
    );
}; }
    return _cached_decoder_for_InitializeJournal_Request_limitSpecification(el);
}

let _cached_encoder_for_InitializeJournal_Request_limitSpecification: $.ASN1Encoder<InitializeJournal_Request_limitSpecification> | null = null;

/**
 * @summary Encodes a(n) InitializeJournal_Request_limitSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializeJournal_Request_limitSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_InitializeJournal_Request_limitSpecification (value: InitializeJournal_Request_limitSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitializeJournal_Request_limitSpecification) { _cached_encoder_for_InitializeJournal_Request_limitSpecification = function (value: InitializeJournal_Request_limitSpecification, elGetter: $.ASN1Encoder<InitializeJournal_Request_limitSpecification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TimeOfDay, $.BER)(value.limitingTime, $.BER),
            /* IF_ABSENT  */ ((value.limitingEntry === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.limitingEntry, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitializeJournal_Request_limitSpecification(value, elGetter);
}


/* eslint-enable */
