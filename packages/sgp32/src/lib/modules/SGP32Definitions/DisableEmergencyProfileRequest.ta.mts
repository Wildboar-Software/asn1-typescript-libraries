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
 * @summary DisableEmergencyProfileRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableEmergencyProfileRequest ::= [92] SEQUENCE { -- Tag 'BF5C'
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class DisableEmergencyProfileRequest {
    constructor (
        /**
         * @summary `refreshFlag`.
         * @public
         * @readonly
         */
        readonly refreshFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a DisableEmergencyProfileRequest
     * @description
     * 
     * This takes an `object` and converts it to a `DisableEmergencyProfileRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisableEmergencyProfileRequest`.
     * @returns {DisableEmergencyProfileRequest}
     */
    public static _from_object (_o: { [_K in keyof (DisableEmergencyProfileRequest)]: (DisableEmergencyProfileRequest)[_K] }): DisableEmergencyProfileRequest {
        return new DisableEmergencyProfileRequest(_o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of DisableEmergencyProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisableEmergencyProfileRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of DisableEmergencyProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisableEmergencyProfileRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisableEmergencyProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisableEmergencyProfileRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisableEmergencyProfileRequest: $.ASN1Decoder<DisableEmergencyProfileRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisableEmergencyProfileRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisableEmergencyProfileRequest (el: _Element): DisableEmergencyProfileRequest {
    if (!_cached_decoder_for_DisableEmergencyProfileRequest) { _cached_decoder_for_DisableEmergencyProfileRequest = $._decode_implicit<DisableEmergencyProfileRequest>(() => function (el: _Element): DisableEmergencyProfileRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("DisableEmergencyProfileRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refreshFlag";
    let refreshFlag!: BOOLEAN;
    refreshFlag = $._decodeBoolean(sequence[0]);
    return new DisableEmergencyProfileRequest(
        refreshFlag,

    );
}); }
    return _cached_decoder_for_DisableEmergencyProfileRequest(el);
}

let _cached_encoder_for_DisableEmergencyProfileRequest: $.ASN1Encoder<DisableEmergencyProfileRequest> | null = null;

/**
 * @summary Encodes a(n) DisableEmergencyProfileRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisableEmergencyProfileRequest, encoded as an ASN.1 Element.
 */
export
function _encode_DisableEmergencyProfileRequest (value: DisableEmergencyProfileRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisableEmergencyProfileRequest) { _cached_encoder_for_DisableEmergencyProfileRequest = $._encode_implicit(_TagClass.context, 92, () => function (value: DisableEmergencyProfileRequest, elGetter: $.ASN1Encoder<DisableEmergencyProfileRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_DisableEmergencyProfileRequest(value, elGetter);
}


/* eslint-enable */
