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
import { Service2, _enum_for_Service2, Service2_audioMessageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, audioMessageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service2, _encode_Service2 } from "../AIN-Parameters/Service2.ta.mjs";
// export { Service2, _enum_for_Service2, Service2_audioMessageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, audioMessageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service2, _encode_Service2 } from "../AIN-Parameters/Service2.ta.mjs";
import { Request2, Request2_activationStatus /* IMPORTED_LONG_NAMED_BIT */, activationStatus /* IMPORTED_SHORT_NAMED_BIT */, Request2_delayInterval /* IMPORTED_LONG_NAMED_BIT */, delayInterval /* IMPORTED_SHORT_NAMED_BIT */, _decode_Request2, _encode_Request2 } from "../AIN-Parameters/Request2.ta.mjs";
// export { Request2, Request2_activationStatus /* IMPORTED_LONG_NAMED_BIT */, activationStatus /* IMPORTED_SHORT_NAMED_BIT */, Request2_delayInterval /* IMPORTED_LONG_NAMED_BIT */, delayInterval /* IMPORTED_SHORT_NAMED_BIT */, _decode_Request2, _encode_Request2 } from "../AIN-Parameters/Request2.ta.mjs";


/**
 * @summary RequestGroup2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestGroup2 ::= SEQUENCE{
 *         service2 [1] IMPLICIT Service2,--See Section 6.4.2 for the encoding.
 *         request2 [2] IMPLICIT Request2
 *     }
 * ```
 * 
 * @class
 */
export
class RequestGroup2 {
    constructor (
        /**
         * @summary `service2`.
         * @public
         * @readonly
         */
        readonly service2: Service2,
        /**
         * @summary `request2`.
         * @public
         * @readonly
         */
        readonly request2: Request2
    ) {}

    /**
     * @summary Restructures an object into a RequestGroup2
     * @description
     * 
     * This takes an `object` and converts it to a `RequestGroup2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestGroup2`.
     * @returns {RequestGroup2}
     */
    public static _from_object (_o: { [_K in keyof (RequestGroup2)]: (RequestGroup2)[_K] }): RequestGroup2 {
        return new RequestGroup2(_o.service2, _o.request2);
    }

        /**
         * @summary The enum used as the type of the component `service2`
         * @public
         * @static
         */

    public static _enum_for_service2 = _enum_for_Service2;
}

/**
 * @summary The Leading Root Component Types of RequestGroup2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestGroup2: $.ComponentSpec[] = [
    new $.ComponentSpec("service2", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("request2", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestGroup2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestGroup2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestGroup2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestGroup2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestGroup2: $.ASN1Decoder<RequestGroup2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestGroup2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestGroup2 (el: _Element): RequestGroup2 {
    if (!_cached_decoder_for_RequestGroup2) { _cached_decoder_for_RequestGroup2 = function (el: _Element): RequestGroup2 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestGroup2 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service2";
    sequence[1].name = "request2";
    let service2!: Service2;
    let request2!: Request2;
    service2 = $._decode_implicit<Service2>(() => _decode_Service2)(sequence[0]);
    request2 = $._decode_implicit<Request2>(() => _decode_Request2)(sequence[1]);
    return new RequestGroup2(
        service2,
        request2,

    );
}; }
    return _cached_decoder_for_RequestGroup2(el);
}

let _cached_encoder_for_RequestGroup2: $.ASN1Encoder<RequestGroup2> | null = null;

/**
 * @summary Encodes a(n) RequestGroup2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestGroup2, encoded as an ASN.1 Element.
 */
export
function _encode_RequestGroup2 (value: RequestGroup2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestGroup2) { _cached_encoder_for_RequestGroup2 = function (value: RequestGroup2, elGetter: $.ASN1Encoder<RequestGroup2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service2, $.BER)(value.service2, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Request2, $.BER)(value.request2, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestGroup2(value, elGetter);
}


/* eslint-enable */
