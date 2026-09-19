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
import { EnableProfileRequest_profileIdentifier, _decode_EnableProfileRequest_profileIdentifier, _encode_EnableProfileRequest_profileIdentifier } from "../RSPDefinitions/EnableProfileRequest-profileIdentifier.ta.mjs";
// export { EnableProfileRequest_profileIdentifier, _decode_EnableProfileRequest_profileIdentifier, _encode_EnableProfileRequest_profileIdentifier } from "../RSPDefinitions/EnableProfileRequest-profileIdentifier.ta.mjs";


/**
 * @summary EnableProfileRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableProfileRequest ::= [49] SEQUENCE { -- Tag 'BF31'
 *     profileIdentifier CHOICE {
 *         isdpAid [APPLICATION 15] OctetTo16, -- AID, tag '4F'
 *         iccid Iccid -- ICCID, tag '5A'
 *     },
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class EnableProfileRequest {
    constructor (
        /**
         * @summary `profileIdentifier`.
         * @public
         * @readonly
         */
        readonly profileIdentifier: EnableProfileRequest_profileIdentifier,
        /**
         * @summary `refreshFlag`.
         * @public
         * @readonly
         */
        readonly refreshFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a EnableProfileRequest
     * @description
     * 
     * This takes an `object` and converts it to a `EnableProfileRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnableProfileRequest`.
     * @returns {EnableProfileRequest}
     */
    public static _from_object (_o: { [_K in keyof (EnableProfileRequest)]: (EnableProfileRequest)[_K] }): EnableProfileRequest {
        return new EnableProfileRequest(_o.profileIdentifier, _o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of EnableProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnableProfileRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("profileIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EnableProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnableProfileRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnableProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnableProfileRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnableProfileRequest: $.ASN1Decoder<EnableProfileRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnableProfileRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnableProfileRequest (el: _Element): EnableProfileRequest {
    if (!_cached_decoder_for_EnableProfileRequest) { _cached_decoder_for_EnableProfileRequest = $._decode_implicit<EnableProfileRequest>(() => function (el: _Element): EnableProfileRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EnableProfileRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "profileIdentifier";
    sequence[1].name = "refreshFlag";
    let profileIdentifier!: EnableProfileRequest_profileIdentifier;
    let refreshFlag!: BOOLEAN;
    profileIdentifier = _decode_EnableProfileRequest_profileIdentifier(sequence[0]);
    refreshFlag = $._decodeBoolean(sequence[1]);
    return new EnableProfileRequest(
        profileIdentifier,
        refreshFlag,

    );
}); }
    return _cached_decoder_for_EnableProfileRequest(el);
}

let _cached_encoder_for_EnableProfileRequest: $.ASN1Encoder<EnableProfileRequest> | null = null;

/**
 * @summary Encodes a(n) EnableProfileRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableProfileRequest, encoded as an ASN.1 Element.
 */
export
function _encode_EnableProfileRequest (value: EnableProfileRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnableProfileRequest) { _cached_encoder_for_EnableProfileRequest = $._encode_implicit(_TagClass.context, 49, () => function (value: EnableProfileRequest, elGetter: $.ASN1Encoder<EnableProfileRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EnableProfileRequest_profileIdentifier(value.profileIdentifier, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EnableProfileRequest(value, elGetter);
}


/* eslint-enable */
