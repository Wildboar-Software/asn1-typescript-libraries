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
import { PolicyQualifierId, _decode_PolicyQualifierId, _encode_PolicyQualifierId } from "../PKIX1Implicit88/PolicyQualifierId.ta.mjs";
// export { PolicyQualifierId, _decode_PolicyQualifierId, _encode_PolicyQualifierId } from "../PKIX1Implicit88/PolicyQualifierId.ta.mjs";


/**
 * @summary PolicyQualifierInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicyQualifierInfo ::= SEQUENCE {
 *        policyQualifierId  PolicyQualifierId,
 *        qualifier        ANY DEFINED BY policyQualifierId }
 * ```
 * 
 * @class
 */
export
class PolicyQualifierInfo {
    constructor (
        /**
         * @summary `policyQualifierId`.
         * @public
         * @readonly
         */
        readonly policyQualifierId: PolicyQualifierId,
// FIXME: readonly qualifier: AnyType
    ) {}

    /**
     * @summary Restructures an object into a PolicyQualifierInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PolicyQualifierInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyQualifierInfo`.
     * @returns {PolicyQualifierInfo}
     */
    public static _from_object (_o: { [_K in keyof (PolicyQualifierInfo)]: (PolicyQualifierInfo)[_K] }): PolicyQualifierInfo {
        return new PolicyQualifierInfo(_o.policyQualifierId, _o.);
    }


}

/**
 * @summary The Leading Root Component Types of PolicyQualifierInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("policyQualifierId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("qualifier", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of PolicyQualifierInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PolicyQualifierInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PolicyQualifierInfo: $.ASN1Decoder<PolicyQualifierInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyQualifierInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PolicyQualifierInfo (el: _Element): PolicyQualifierInfo {
    if (!_cached_decoder_for_PolicyQualifierInfo) { _cached_decoder_for_PolicyQualifierInfo = function (el: _Element): PolicyQualifierInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PolicyQualifierInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "policyQualifierId";
    sequence[1].name = "qualifier";
    let policyQualifierId!: PolicyQualifierId;
    let qualifier!: /* FIXME: qualifier COULD_NOT_COMPILE_TYPE */;
    policyQualifierId = _decode_PolicyQualifierId(sequence[0]);
    qualifier = $._decodeAny(sequence[1]);
    return new PolicyQualifierInfo(
        policyQualifierId,
        qualifier,

    );
}; }
    return _cached_decoder_for_PolicyQualifierInfo(el);
}

let _cached_encoder_for_PolicyQualifierInfo: $.ASN1Encoder<PolicyQualifierInfo> | null = null;

/**
 * @summary Encodes a(n) PolicyQualifierInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyQualifierInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PolicyQualifierInfo (value: PolicyQualifierInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PolicyQualifierInfo) { _cached_encoder_for_PolicyQualifierInfo = function (value: PolicyQualifierInfo, elGetter: $.ASN1Encoder<PolicyQualifierInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PolicyQualifierId(value.policyQualifierId, $.BER),
            /* REQUIRED   */ $._encodeAny(value.qualifier, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PolicyQualifierInfo(value, elGetter);
}


/* eslint-enable */
