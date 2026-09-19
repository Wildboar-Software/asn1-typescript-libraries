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
 * @summary ForwardedEncryptedParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardedEncryptedParameters ::= SET {
 *   delivery-time      [0]  MessageDeliveryTime OPTIONAL,
 *   delivery-envelope  [1]  OtherMessageDeliveryFields}
 * ```
 * 
 * @class
 */
export
class ForwardedEncryptedParameters {
    constructor (
        /**
         * @summary `delivery_time`.
         * @public
         * @readonly
         */
        readonly delivery_time: OPTIONAL<MessageDeliveryTime>,
        /**
         * @summary `delivery_envelope`.
         * @public
         * @readonly
         */
        readonly delivery_envelope: OtherMessageDeliveryFields
    ) {}

    /**
     * @summary Restructures an object into a ForwardedEncryptedParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardedEncryptedParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardedEncryptedParameters`.
     * @returns {ForwardedEncryptedParameters}
     */
    public static _from_object (_o: { [_K in keyof (ForwardedEncryptedParameters)]: (ForwardedEncryptedParameters)[_K] }): ForwardedEncryptedParameters {
        return new ForwardedEncryptedParameters(_o.delivery_time, _o.delivery_envelope);
    }


}

/**
 * @summary The Leading Root Component Types of ForwardedEncryptedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardedEncryptedParameters: $.ComponentSpec[] = [
    /* FIXME: delivery-time COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: delivery-envelope COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ForwardedEncryptedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardedEncryptedParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardedEncryptedParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardedEncryptedParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ForwardedEncryptedParameters: $.ASN1Decoder<ForwardedEncryptedParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedEncryptedParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardedEncryptedParameters (el: _Element): ForwardedEncryptedParameters {
    if (!_cached_decoder_for_ForwardedEncryptedParameters) { _cached_decoder_for_ForwardedEncryptedParameters = function (el: _Element): ForwardedEncryptedParameters {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let delivery_time: OPTIONAL<MessageDeliveryTime>;
    let delivery_envelope!: OtherMessageDeliveryFields;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "delivery-time": (_el: _Element): void => { delivery_time = $._decode_implicit<MessageDeliveryTime>(() => _decode_MessageDeliveryTime)(_el); },
        "delivery-envelope": (_el: _Element): void => { delivery_envelope = $._decode_implicit<OtherMessageDeliveryFields>(() => _decode_OtherMessageDeliveryFields)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardedEncryptedParameters,
        _extension_additions_list_spec_for_ForwardedEncryptedParameters,
        _root_component_type_list_2_spec_for_ForwardedEncryptedParameters,
        undefined,
    );
    return new ForwardedEncryptedParameters( /* SET_CONSTRUCTOR_CALL */
        delivery_time,
        delivery_envelope
    );
}; }
    return _cached_decoder_for_ForwardedEncryptedParameters(el);
}

let _cached_encoder_for_ForwardedEncryptedParameters: $.ASN1Encoder<ForwardedEncryptedParameters> | null = null;

/**
 * @summary Encodes a(n) ForwardedEncryptedParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedEncryptedParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardedEncryptedParameters (value: ForwardedEncryptedParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardedEncryptedParameters) { _cached_encoder_for_ForwardedEncryptedParameters = function (value: ForwardedEncryptedParameters, elGetter: $.ASN1Encoder<ForwardedEncryptedParameters>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.delivery_time === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MessageDeliveryTime, $.BER)(value.delivery_time, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_OtherMessageDeliveryFields, $.BER)(value.delivery_envelope, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForwardedEncryptedParameters(value, elGetter);
}


/* eslint-enable */
