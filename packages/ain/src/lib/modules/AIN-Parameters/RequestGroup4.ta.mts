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
import { Service4, _enum_for_Service4, Service4_callForwardingVariable /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingVariable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service4_callForwardingDontAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingDontAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service4_callForwardingBusyLine /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingBusyLine /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service4, _encode_Service4 } from "../AIN-Parameters/Service4.ta.mjs";
// export { Service4, _enum_for_Service4, Service4_callForwardingVariable /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingVariable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service4_callForwardingDontAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingDontAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service4_callForwardingBusyLine /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingBusyLine /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service4, _encode_Service4 } from "../AIN-Parameters/Service4.ta.mjs";
import { Request4, Request4_activationStatus /* IMPORTED_LONG_NAMED_BIT */, activationStatus /* IMPORTED_SHORT_NAMED_BIT */, Request4_forwardingDn /* IMPORTED_LONG_NAMED_BIT */, forwardingDn /* IMPORTED_SHORT_NAMED_BIT */, _decode_Request4, _encode_Request4 } from "../AIN-Parameters/Request4.ta.mjs";
// export { Request4, Request4_activationStatus /* IMPORTED_LONG_NAMED_BIT */, activationStatus /* IMPORTED_SHORT_NAMED_BIT */, Request4_forwardingDn /* IMPORTED_LONG_NAMED_BIT */, forwardingDn /* IMPORTED_SHORT_NAMED_BIT */, _decode_Request4, _encode_Request4 } from "../AIN-Parameters/Request4.ta.mjs";


/**
 * @summary RequestGroup4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestGroup4 ::= SEQUENCE{
 *         service4 [1] IMPLICIT Service4,--See Section 6.4.2 for the encoding
 *         request4 [2] IMPLICIT Request4
 *     }
 * ```
 * 
 * @class
 */
export
class RequestGroup4 {
    constructor (
        /**
         * @summary `service4`.
         * @public
         * @readonly
         */
        readonly service4: Service4,
        /**
         * @summary `request4`.
         * @public
         * @readonly
         */
        readonly request4: Request4
    ) {}

    /**
     * @summary Restructures an object into a RequestGroup4
     * @description
     * 
     * This takes an `object` and converts it to a `RequestGroup4`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestGroup4`.
     * @returns {RequestGroup4}
     */
    public static _from_object (_o: { [_K in keyof (RequestGroup4)]: (RequestGroup4)[_K] }): RequestGroup4 {
        return new RequestGroup4(_o.service4, _o.request4);
    }

        /**
         * @summary The enum used as the type of the component `service4`
         * @public
         * @static
         */

    public static _enum_for_service4 = _enum_for_Service4;
}

/**
 * @summary The Leading Root Component Types of RequestGroup4
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestGroup4: $.ComponentSpec[] = [
    new $.ComponentSpec("service4", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("request4", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestGroup4
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestGroup4: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestGroup4
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestGroup4: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestGroup4: $.ASN1Decoder<RequestGroup4> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestGroup4
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestGroup4 (el: _Element): RequestGroup4 {
    if (!_cached_decoder_for_RequestGroup4) { _cached_decoder_for_RequestGroup4 = function (el: _Element): RequestGroup4 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestGroup4 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service4";
    sequence[1].name = "request4";
    let service4!: Service4;
    let request4!: Request4;
    service4 = $._decode_implicit<Service4>(() => _decode_Service4)(sequence[0]);
    request4 = $._decode_implicit<Request4>(() => _decode_Request4)(sequence[1]);
    return new RequestGroup4(
        service4,
        request4,

    );
}; }
    return _cached_decoder_for_RequestGroup4(el);
}

let _cached_encoder_for_RequestGroup4: $.ASN1Encoder<RequestGroup4> | null = null;

/**
 * @summary Encodes a(n) RequestGroup4 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestGroup4, encoded as an ASN.1 Element.
 */
export
function _encode_RequestGroup4 (value: RequestGroup4, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestGroup4) { _cached_encoder_for_RequestGroup4 = function (value: RequestGroup4, elGetter: $.ASN1Encoder<RequestGroup4>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service4, $.BER)(value.service4, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Request4, $.BER)(value.request4, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestGroup4(value, elGetter);
}


/* eslint-enable */
