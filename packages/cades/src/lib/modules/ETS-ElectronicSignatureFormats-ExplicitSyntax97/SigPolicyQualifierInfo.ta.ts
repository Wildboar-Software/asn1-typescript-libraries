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
import { SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.js";
export { SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.js";
import { SupportedSigPolicyQualifiers } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SupportedSigPolicyQualifiers.osa.js";
export { SupportedSigPolicyQualifiers } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SupportedSigPolicyQualifiers.osa.js";


/* START_OF_SYMBOL_DEFINITION SigPolicyQualifierInfo */
/**
 * @summary SigPolicyQualifierInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigPolicyQualifierInfo ::= SEQUENCE {
 *     sigPolicyQualifierId    SIG-POLICY-QUALIFIER.&id({SupportedSigPolicyQualifiers}),
 *     qualifier               SIG-POLICY-QUALIFIER.&Qualifier
 *         ({SupportedSigPolicyQualifiers}{@sigPolicyQualifierId}) OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SigPolicyQualifierInfo {
    constructor (
        /**
         * @summary `sigPolicyQualifierId`.
         * @public
         * @readonly
         */
        readonly sigPolicyQualifierId: OBJECT_IDENTIFIER,
        /**
         * @summary `qualifier`.
         * @public
         * @readonly
         */
        readonly qualifier: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a SigPolicyQualifierInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SigPolicyQualifierInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SigPolicyQualifierInfo`.
     * @returns {SigPolicyQualifierInfo}
     */
    public static _from_object (_o: { [_K in keyof (SigPolicyQualifierInfo)]: (SigPolicyQualifierInfo)[_K] }): SigPolicyQualifierInfo {
        return new SigPolicyQualifierInfo(_o.sigPolicyQualifierId, _o.qualifier);
    }


}
/* END_OF_SYMBOL_DEFINITION SigPolicyQualifierInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SigPolicyQualifierInfo */
/**
 * @summary The Leading Root Component Types of SigPolicyQualifierInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SigPolicyQualifierInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("sigPolicyQualifierId", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("qualifier", true, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SigPolicyQualifierInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SigPolicyQualifierInfo */
/**
 * @summary The Trailing Root Component Types of SigPolicyQualifierInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SigPolicyQualifierInfo: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SigPolicyQualifierInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SigPolicyQualifierInfo */
/**
 * @summary The Extension Addition Component Types of SigPolicyQualifierInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SigPolicyQualifierInfo: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SigPolicyQualifierInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigPolicyQualifierInfo */
let _cached_decoder_for_SigPolicyQualifierInfo: $.ASN1Decoder<SigPolicyQualifierInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigPolicyQualifierInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SigPolicyQualifierInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SigPolicyQualifierInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigPolicyQualifierInfo} The decoded data structure.
 */
export
function _decode_SigPolicyQualifierInfo (el: _Element) {
    if (!_cached_decoder_for_SigPolicyQualifierInfo) { _cached_decoder_for_SigPolicyQualifierInfo = function (el: _Element): SigPolicyQualifierInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let sigPolicyQualifierId!: OBJECT_IDENTIFIER;
    let qualifier: OPTIONAL<_Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sigPolicyQualifierId": (_el: _Element): void => { sigPolicyQualifierId = $._decodeObjectIdentifier(_el); },
        "qualifier": (_el: _Element): void => { qualifier = $._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SigPolicyQualifierInfo,
        _extension_additions_list_spec_for_SigPolicyQualifierInfo,
        _root_component_type_list_2_spec_for_SigPolicyQualifierInfo,
        undefined,
    );
    return new SigPolicyQualifierInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        sigPolicyQualifierId,
        qualifier
    );
}; }
    return _cached_decoder_for_SigPolicyQualifierInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigPolicyQualifierInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigPolicyQualifierInfo */
let _cached_encoder_for_SigPolicyQualifierInfo: $.ASN1Encoder<SigPolicyQualifierInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigPolicyQualifierInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SigPolicyQualifierInfo */
/**
 * @summary Encodes a(n) SigPolicyQualifierInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigPolicyQualifierInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SigPolicyQualifierInfo (value: SigPolicyQualifierInfo, elGetter: $.ASN1Encoder<SigPolicyQualifierInfo>) {
    if (!_cached_encoder_for_SigPolicyQualifierInfo) { _cached_encoder_for_SigPolicyQualifierInfo = function (value: SigPolicyQualifierInfo, elGetter: $.ASN1Encoder<SigPolicyQualifierInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.sigPolicyQualifierId, $.BER),
            /* IF_ABSENT  */ ((value.qualifier === undefined) ? undefined : $._encodeAny(value.qualifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SigPolicyQualifierInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigPolicyQualifierInfo */

/* eslint-enable */
