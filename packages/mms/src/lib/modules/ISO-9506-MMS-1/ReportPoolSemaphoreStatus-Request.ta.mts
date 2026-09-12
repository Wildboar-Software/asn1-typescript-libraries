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
 * @summary ReportPoolSemaphoreStatus_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportPoolSemaphoreStatus-Request ::= SEQUENCE {
 *    semaphoreName                 [0] ObjectName,
 *    nameToStartAfter              [1] IMPLICIT Identifier OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ReportPoolSemaphoreStatus_Request {
    constructor (
        /**
         * @summary `semaphoreName`.
         * @public
         * @readonly
         */
        readonly semaphoreName: ObjectName,
        /**
         * @summary `nameToStartAfter`.
         * @public
         * @readonly
         */
        readonly nameToStartAfter: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a ReportPoolSemaphoreStatus_Request
     * @description
     * 
     * This takes an `object` and converts it to a `ReportPoolSemaphoreStatus_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportPoolSemaphoreStatus_Request`.
     * @returns {ReportPoolSemaphoreStatus_Request}
     */
    public static _from_object (_o: { [_K in keyof (ReportPoolSemaphoreStatus_Request)]: (ReportPoolSemaphoreStatus_Request)[_K] }): ReportPoolSemaphoreStatus_Request {
        return new ReportPoolSemaphoreStatus_Request(_o.semaphoreName, _o.nameToStartAfter);
    }


}

/**
 * @summary The Leading Root Component Types of ReportPoolSemaphoreStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportPoolSemaphoreStatus_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("semaphoreName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nameToStartAfter", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReportPoolSemaphoreStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportPoolSemaphoreStatus_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportPoolSemaphoreStatus_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportPoolSemaphoreStatus_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportPoolSemaphoreStatus_Request: $.ASN1Decoder<ReportPoolSemaphoreStatus_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportPoolSemaphoreStatus_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportPoolSemaphoreStatus_Request (el: _Element): ReportPoolSemaphoreStatus_Request {
    if (!_cached_decoder_for_ReportPoolSemaphoreStatus_Request) { _cached_decoder_for_ReportPoolSemaphoreStatus_Request = function (el: _Element): ReportPoolSemaphoreStatus_Request {
    let semaphoreName!: ObjectName;
    let nameToStartAfter: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "semaphoreName": (_el: _Element): void => { semaphoreName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "nameToStartAfter": (_el: _Element): void => { nameToStartAfter = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportPoolSemaphoreStatus_Request,
        _extension_additions_list_spec_for_ReportPoolSemaphoreStatus_Request,
        _root_component_type_list_2_spec_for_ReportPoolSemaphoreStatus_Request,
        undefined,
    );
    return new ReportPoolSemaphoreStatus_Request(
        semaphoreName,
        nameToStartAfter
    );
}; }
    return _cached_decoder_for_ReportPoolSemaphoreStatus_Request(el);
}

let _cached_encoder_for_ReportPoolSemaphoreStatus_Request: $.ASN1Encoder<ReportPoolSemaphoreStatus_Request> | null = null;

/**
 * @summary Encodes a(n) ReportPoolSemaphoreStatus_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportPoolSemaphoreStatus_Request, encoded as an ASN.1 Element.
 */
export
function _encode_ReportPoolSemaphoreStatus_Request (value: ReportPoolSemaphoreStatus_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportPoolSemaphoreStatus_Request) { _cached_encoder_for_ReportPoolSemaphoreStatus_Request = function (value: ReportPoolSemaphoreStatus_Request, elGetter: $.ASN1Encoder<ReportPoolSemaphoreStatus_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.semaphoreName, $.BER),
            /* IF_ABSENT  */ ((value.nameToStartAfter === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER)(value.nameToStartAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportPoolSemaphoreStatus_Request(value, elGetter);
}


/* eslint-enable */
