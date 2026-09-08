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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { PolicyID, _decode_PolicyID, _encode_PolicyID } from "../AuthenticationFramework/PolicyID.ta.mjs";
// export { PolicyID, _decode_PolicyID, _encode_PolicyID } from "../AuthenticationFramework/PolicyID.ta.mjs";
import { InfoSyntax, _decode_InfoSyntax, _encode_InfoSyntax } from "../AuthenticationFramework/InfoSyntax.ta.mjs";
// export { InfoSyntax, _decode_InfoSyntax, _encode_InfoSyntax } from "../AuthenticationFramework/InfoSyntax.ta.mjs";


/**
 * @summary PolicySyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicySyntax ::= SEQUENCE {
 *   policyIdentifier  PolicyID,
 *   policySyntax      InfoSyntax,
 *   ... }
 * ```
 * 
 * @class
 */
export
class PolicySyntax {
    constructor (
        /**
         * @summary `policyIdentifier`.
         * @public
         * @readonly
         */
        readonly policyIdentifier: PolicyID,
        /**
         * @summary `policySyntax`.
         * @public
         * @readonly
         */
        readonly policySyntax: InfoSyntax,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicySyntax
     * @description
     * 
     * This takes an `object` and converts it to a `PolicySyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicySyntax`.
     * @returns {PolicySyntax}
     */
    public static _from_object (_o: { [_K in keyof (PolicySyntax)]: (PolicySyntax)[_K] }): PolicySyntax {
        return new PolicySyntax(_o.policyIdentifier, _o.policySyntax, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PolicySyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PolicySyntax: $.ComponentSpec[] = [
    /* FIXME: policyIdentifier COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("policySyntax", false, $.hasAnyTag, undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PolicySyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PolicySyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PolicySyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PolicySyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PolicySyntax: $.ASN1Decoder<PolicySyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicySyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PolicySyntax (el: _Element): PolicySyntax {
    if (!_cached_decoder_for_PolicySyntax) { _cached_decoder_for_PolicySyntax = function (el: _Element): PolicySyntax {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PolicySyntax contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "policyIdentifier";
    sequence[1].name = "policySyntax";
    let policyIdentifier!: PolicyID;
    let policySyntax!: InfoSyntax;
    policyIdentifier = _decode_PolicyID(sequence[0]);
    policySyntax = _decode_InfoSyntax(sequence[1]);
    return new PolicySyntax(
        policyIdentifier,
        policySyntax,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PolicySyntax(el);
}

let _cached_encoder_for_PolicySyntax: $.ASN1Encoder<PolicySyntax> | null = null;

/**
 * @summary Encodes a(n) PolicySyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicySyntax, encoded as an ASN.1 Element.
 */
export
function _encode_PolicySyntax (value: PolicySyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PolicySyntax) { _cached_encoder_for_PolicySyntax = function (value: PolicySyntax, elGetter: $.ASN1Encoder<PolicySyntax>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PolicyID(value.policyIdentifier, $.BER),
            /* REQUIRED   */ _encode_InfoSyntax(value.policySyntax, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PolicySyntax(value, elGetter);
}


/* eslint-enable */
