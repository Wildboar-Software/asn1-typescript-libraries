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



/**
 * @summary KRBRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KRBRequest ::= SEQUENCE{
 *       service      [1] IMPLICIT InternationalString,      
 *       instance     [2] IMPLICIT InternationalString OPTIONAL,
 *       realm        [3] IMPLICIT InternationalString OPTIONAL
 *                           -- target requests a ticket for the given service,
 *                           -- instance, and realm
 *                       }
 * ```
 * 
 * @class
 */
export
class KRBRequest {
    constructor (
        /**
         * @summary `service`.
         * @public
         * @readonly
         */
        readonly service: InternationalString,
        /**
         * @summary `instance`.
         * @public
         * @readonly
         */
        readonly instance: OPTIONAL<InternationalString>,
        /**
         * @summary `realm`.
         * @public
         * @readonly
         */
        readonly realm: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a KRBRequest
     * @description
     * 
     * This takes an `object` and converts it to a `KRBRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KRBRequest`.
     * @returns {KRBRequest}
     */
    public static _from_object (_o: { [_K in keyof (KRBRequest)]: (KRBRequest)[_K] }): KRBRequest {
        return new KRBRequest(_o.service, _o.instance, _o.realm);
    }


}

/**
 * @summary The Leading Root Component Types of KRBRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KRBRequest: $.ComponentSpec[] = [
    /* FIXME: service COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: instance COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: realm COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of KRBRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KRBRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KRBRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KRBRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KRBRequest: $.ASN1Decoder<KRBRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KRBRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KRBRequest (el: _Element): KRBRequest {
    if (!_cached_decoder_for_KRBRequest) { _cached_decoder_for_KRBRequest = function (el: _Element): KRBRequest {
    let service!: InternationalString;
    let instance: OPTIONAL<InternationalString>;
    let realm: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "service": (_el: _Element): void => { service = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "instance": (_el: _Element): void => { instance = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "realm": (_el: _Element): void => { realm = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KRBRequest,
        _extension_additions_list_spec_for_KRBRequest,
        _root_component_type_list_2_spec_for_KRBRequest,
        undefined,
    );
    return new KRBRequest(
        service,
        instance,
        realm
    );
}; }
    return _cached_decoder_for_KRBRequest(el);
}

let _cached_encoder_for_KRBRequest: $.ASN1Encoder<KRBRequest> | null = null;

/**
 * @summary Encodes a(n) KRBRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRBRequest, encoded as an ASN.1 Element.
 */
export
function _encode_KRBRequest (value: KRBRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KRBRequest) { _cached_encoder_for_KRBRequest = function (value: KRBRequest, elGetter: $.ASN1Encoder<KRBRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.service, $.BER),
            /* IF_ABSENT  */ ((value.instance === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.instance, $.BER)),
            /* IF_ABSENT  */ ((value.realm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.realm, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KRBRequest(value, elGetter);
}


/* eslint-enable */
