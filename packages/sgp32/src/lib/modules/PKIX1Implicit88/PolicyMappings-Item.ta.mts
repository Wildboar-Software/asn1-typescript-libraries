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
import { CertPolicyId, _decode_CertPolicyId, _encode_CertPolicyId } from "../PKIX1Implicit88/CertPolicyId.ta.mjs";
// export { CertPolicyId, _decode_CertPolicyId, _encode_CertPolicyId } from "../PKIX1Implicit88/CertPolicyId.ta.mjs";


/**
 * @summary PolicyMappings_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicyMappings-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class PolicyMappings_Item {
    constructor (
        /**
         * @summary `issuerDomainPolicy`.
         * @public
         * @readonly
         */
        readonly issuerDomainPolicy: CertPolicyId,
        /**
         * @summary `subjectDomainPolicy`.
         * @public
         * @readonly
         */
        readonly subjectDomainPolicy: CertPolicyId
    ) {}

    /**
     * @summary Restructures an object into a PolicyMappings_Item
     * @description
     * 
     * This takes an `object` and converts it to a `PolicyMappings_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyMappings_Item`.
     * @returns {PolicyMappings_Item}
     */
    public static _from_object (_o: { [_K in keyof (PolicyMappings_Item)]: (PolicyMappings_Item)[_K] }): PolicyMappings_Item {
        return new PolicyMappings_Item(_o.issuerDomainPolicy, _o.subjectDomainPolicy);
    }


}

/**
 * @summary The Leading Root Component Types of PolicyMappings_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PolicyMappings_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("issuerDomainPolicy", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("subjectDomainPolicy", false, $.hasTag(_TagClass.universal, 6))
];

/**
 * @summary The Trailing Root Component Types of PolicyMappings_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PolicyMappings_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PolicyMappings_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PolicyMappings_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PolicyMappings_Item: $.ASN1Decoder<PolicyMappings_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyMappings_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PolicyMappings_Item (el: _Element): PolicyMappings_Item {
    if (!_cached_decoder_for_PolicyMappings_Item) { _cached_decoder_for_PolicyMappings_Item = function (el: _Element): PolicyMappings_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PolicyMappings-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "issuerDomainPolicy";
    sequence[1].name = "subjectDomainPolicy";
    let issuerDomainPolicy!: CertPolicyId;
    let subjectDomainPolicy!: CertPolicyId;
    issuerDomainPolicy = _decode_CertPolicyId(sequence[0]);
    subjectDomainPolicy = _decode_CertPolicyId(sequence[1]);
    return new PolicyMappings_Item(
        issuerDomainPolicy,
        subjectDomainPolicy,

    );
}; }
    return _cached_decoder_for_PolicyMappings_Item(el);
}

let _cached_encoder_for_PolicyMappings_Item: $.ASN1Encoder<PolicyMappings_Item> | null = null;

/**
 * @summary Encodes a(n) PolicyMappings_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyMappings_Item, encoded as an ASN.1 Element.
 */
export
function _encode_PolicyMappings_Item (value: PolicyMappings_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PolicyMappings_Item) { _cached_encoder_for_PolicyMappings_Item = function (value: PolicyMappings_Item, elGetter: $.ASN1Encoder<PolicyMappings_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertPolicyId(value.issuerDomainPolicy, $.BER),
            /* REQUIRED   */ _encode_CertPolicyId(value.subjectDomainPolicy, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PolicyMappings_Item(value, elGetter);
}


/* eslint-enable */
