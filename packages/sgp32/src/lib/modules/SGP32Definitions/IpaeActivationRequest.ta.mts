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
import { IpaeActivationRequest_ipaeOption, IpaeActivationRequest_ipaeOption_activateIpae /* IMPORTED_LONG_NAMED_BIT */, activateIpae /* IMPORTED_SHORT_NAMED_BIT */, _decode_IpaeActivationRequest_ipaeOption, _encode_IpaeActivationRequest_ipaeOption } from "../SGP32Definitions/IpaeActivationRequest-ipaeOption.ta.mjs";
// export { IpaeActivationRequest_ipaeOption, IpaeActivationRequest_ipaeOption_activateIpae /* IMPORTED_LONG_NAMED_BIT */, activateIpae /* IMPORTED_SHORT_NAMED_BIT */, _decode_IpaeActivationRequest_ipaeOption, _encode_IpaeActivationRequest_ipaeOption } from "../SGP32Definitions/IpaeActivationRequest-ipaeOption.ta.mjs";


/**
 * @summary IpaeActivationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaeActivationRequest ::= [66] SEQUENCE { -- Tag 'BF42'
 *     ipaeOption BIT STRING {
 *         activateIpae(0) -- IPAe activation
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class IpaeActivationRequest {
    constructor (
        /**
         * @summary `ipaeOption`.
         * @public
         * @readonly
         */
        readonly ipaeOption: IpaeActivationRequest_ipaeOption
    ) {}

    /**
     * @summary Restructures an object into a IpaeActivationRequest
     * @description
     * 
     * This takes an `object` and converts it to a `IpaeActivationRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpaeActivationRequest`.
     * @returns {IpaeActivationRequest}
     */
    public static _from_object (_o: { [_K in keyof (IpaeActivationRequest)]: (IpaeActivationRequest)[_K] }): IpaeActivationRequest {
        return new IpaeActivationRequest(_o.ipaeOption);
    }


}

/**
 * @summary The Leading Root Component Types of IpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IpaeActivationRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("ipaeOption", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of IpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IpaeActivationRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IpaeActivationRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IpaeActivationRequest: $.ASN1Decoder<IpaeActivationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaeActivationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaeActivationRequest (el: _Element): IpaeActivationRequest {
    if (!_cached_decoder_for_IpaeActivationRequest) { _cached_decoder_for_IpaeActivationRequest = $._decode_implicit<IpaeActivationRequest>(() => function (el: _Element): IpaeActivationRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("IpaeActivationRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ipaeOption";
    let ipaeOption!: IpaeActivationRequest_ipaeOption;
    ipaeOption = _decode_IpaeActivationRequest_ipaeOption(sequence[0]);
    return new IpaeActivationRequest(
        ipaeOption,

    );
}); }
    return _cached_decoder_for_IpaeActivationRequest(el);
}

let _cached_encoder_for_IpaeActivationRequest: $.ASN1Encoder<IpaeActivationRequest> | null = null;

/**
 * @summary Encodes a(n) IpaeActivationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaeActivationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_IpaeActivationRequest (value: IpaeActivationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaeActivationRequest) { _cached_encoder_for_IpaeActivationRequest = $._encode_implicit(_TagClass.context, 66, () => function (value: IpaeActivationRequest, elGetter: $.ASN1Encoder<IpaeActivationRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IpaeActivationRequest_ipaeOption(value.ipaeOption, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_IpaeActivationRequest(value, elGetter);
}


/* eslint-enable */
