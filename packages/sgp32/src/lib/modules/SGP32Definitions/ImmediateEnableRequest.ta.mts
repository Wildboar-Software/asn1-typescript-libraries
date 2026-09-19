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
 * @summary ImmediateEnableRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImmediateEnableRequest ::= [90] SEQUENCE { -- Tag 'BF5A'
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class ImmediateEnableRequest {
    constructor (
        /**
         * @summary `refreshFlag`.
         * @public
         * @readonly
         */
        readonly refreshFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a ImmediateEnableRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ImmediateEnableRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ImmediateEnableRequest`.
     * @returns {ImmediateEnableRequest}
     */
    public static _from_object (_o: { [_K in keyof (ImmediateEnableRequest)]: (ImmediateEnableRequest)[_K] }): ImmediateEnableRequest {
        return new ImmediateEnableRequest(_o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of ImmediateEnableRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ImmediateEnableRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ImmediateEnableRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ImmediateEnableRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ImmediateEnableRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ImmediateEnableRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ImmediateEnableRequest: $.ASN1Decoder<ImmediateEnableRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImmediateEnableRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ImmediateEnableRequest (el: _Element): ImmediateEnableRequest {
    if (!_cached_decoder_for_ImmediateEnableRequest) { _cached_decoder_for_ImmediateEnableRequest = $._decode_implicit<ImmediateEnableRequest>(() => function (el: _Element): ImmediateEnableRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ImmediateEnableRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refreshFlag";
    let refreshFlag!: BOOLEAN;
    refreshFlag = $._decodeBoolean(sequence[0]);
    return new ImmediateEnableRequest(
        refreshFlag,

    );
}); }
    return _cached_decoder_for_ImmediateEnableRequest(el);
}

let _cached_encoder_for_ImmediateEnableRequest: $.ASN1Encoder<ImmediateEnableRequest> | null = null;

/**
 * @summary Encodes a(n) ImmediateEnableRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImmediateEnableRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ImmediateEnableRequest (value: ImmediateEnableRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ImmediateEnableRequest) { _cached_encoder_for_ImmediateEnableRequest = $._encode_implicit(_TagClass.context, 90, () => function (value: ImmediateEnableRequest, elGetter: $.ASN1Encoder<ImmediateEnableRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ImmediateEnableRequest(value, elGetter);
}


/* eslint-enable */
