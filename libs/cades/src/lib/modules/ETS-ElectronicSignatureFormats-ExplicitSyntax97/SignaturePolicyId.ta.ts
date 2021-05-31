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
import * as $ from "asn1-ts/dist/node/functional";
import { SigPolicyId, _decode_SigPolicyId, _encode_SigPolicyId } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SigPolicyId.ta";
export { SigPolicyId, _decode_SigPolicyId, _encode_SigPolicyId } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SigPolicyId.ta";
import { SigPolicyHash, _decode_SigPolicyHash, _encode_SigPolicyHash } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SigPolicyHash.ta";
export { SigPolicyHash, _decode_SigPolicyHash, _encode_SigPolicyHash } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SigPolicyHash.ta";
import { SigPolicyQualifierInfo, _decode_SigPolicyQualifierInfo, _encode_SigPolicyQualifierInfo } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SigPolicyQualifierInfo.ta";
export { SigPolicyQualifierInfo, _decode_SigPolicyQualifierInfo, _encode_SigPolicyQualifierInfo } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SigPolicyQualifierInfo.ta";


/* START_OF_SYMBOL_DEFINITION SignaturePolicyId */
/**
 * @summary SignaturePolicyId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignaturePolicyId ::= SEQUENCE {
 *     sigPolicyId             SigPolicyId,
 *     sigPolicyHash           SigPolicyHash,
 *     sigPolicyQualifiers     SEQUENCE SIZE (1..MAX) OF SigPolicyQualifierInfo OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SignaturePolicyId {
    constructor (
        /**
         * @summary `sigPolicyId`.
         * @public
         * @readonly
         */
        readonly sigPolicyId: SigPolicyId,
        /**
         * @summary `sigPolicyHash`.
         * @public
         * @readonly
         */
        readonly sigPolicyHash: SigPolicyHash,
        /**
         * @summary `sigPolicyQualifiers`.
         * @public
         * @readonly
         */
        readonly sigPolicyQualifiers: OPTIONAL<SigPolicyQualifierInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a SignaturePolicyId
     * @description
     * 
     * This takes an `object` and converts it to a `SignaturePolicyId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignaturePolicyId`.
     * @returns {SignaturePolicyId}
     */
    public static _from_object (_o: { [_K in keyof (SignaturePolicyId)]: (SignaturePolicyId)[_K] }): SignaturePolicyId {
        return new SignaturePolicyId(_o.sigPolicyId, _o.sigPolicyHash, _o.sigPolicyQualifiers);
    }


}
/* END_OF_SYMBOL_DEFINITION SignaturePolicyId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignaturePolicyId */
/**
 * @summary The Leading Root Component Types of SignaturePolicyId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SignaturePolicyId: $.ComponentSpec[] = [
    new $.ComponentSpec("sigPolicyId", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("sigPolicyHash", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("sigPolicyQualifiers", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignaturePolicyId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignaturePolicyId */
/**
 * @summary The Trailing Root Component Types of SignaturePolicyId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SignaturePolicyId: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignaturePolicyId */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignaturePolicyId */
/**
 * @summary The Extension Addition Component Types of SignaturePolicyId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SignaturePolicyId: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignaturePolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignaturePolicyId */
let _cached_decoder_for_SignaturePolicyId: $.ASN1Decoder<SignaturePolicyId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignaturePolicyId */

/* START_OF_SYMBOL_DEFINITION _decode_SignaturePolicyId */
/**
 * @summary Decodes an ASN.1 element into a(n) SignaturePolicyId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignaturePolicyId} The decoded data structure.
 */
export
function _decode_SignaturePolicyId (el: _Element) {
    if (!_cached_decoder_for_SignaturePolicyId) { _cached_decoder_for_SignaturePolicyId = function (el: _Element): SignaturePolicyId {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let sigPolicyId!: SigPolicyId;
    let sigPolicyHash!: SigPolicyHash;
    let sigPolicyQualifiers: OPTIONAL<SigPolicyQualifierInfo[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sigPolicyId": (_el: _Element): void => { sigPolicyId = _decode_SigPolicyId(_el); },
        "sigPolicyHash": (_el: _Element): void => { sigPolicyHash = _decode_SigPolicyHash(_el); },
        "sigPolicyQualifiers": (_el: _Element): void => { sigPolicyQualifiers = $._decodeSequenceOf<SigPolicyQualifierInfo>(() => _decode_SigPolicyQualifierInfo)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SignaturePolicyId,
        _extension_additions_list_spec_for_SignaturePolicyId,
        _root_component_type_list_2_spec_for_SignaturePolicyId,
        undefined,
    );
    return new SignaturePolicyId( /* SEQUENCE_CONSTRUCTOR_CALL */
        sigPolicyId,
        sigPolicyHash,
        sigPolicyQualifiers
    );
}; }
    return _cached_decoder_for_SignaturePolicyId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignaturePolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignaturePolicyId */
let _cached_encoder_for_SignaturePolicyId: $.ASN1Encoder<SignaturePolicyId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignaturePolicyId */

/* START_OF_SYMBOL_DEFINITION _encode_SignaturePolicyId */
/**
 * @summary Encodes a(n) SignaturePolicyId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignaturePolicyId, encoded as an ASN.1 Element.
 */
export
function _encode_SignaturePolicyId (value: SignaturePolicyId, elGetter: $.ASN1Encoder<SignaturePolicyId>) {
    if (!_cached_encoder_for_SignaturePolicyId) { _cached_encoder_for_SignaturePolicyId = function (value: SignaturePolicyId, elGetter: $.ASN1Encoder<SignaturePolicyId>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SigPolicyId(value.sigPolicyId, $.BER),
            /* REQUIRED   */ _encode_SigPolicyHash(value.sigPolicyHash, $.BER),
            /* IF_ABSENT  */ ((value.sigPolicyQualifiers === undefined) ? undefined : $._encodeSequenceOf<SigPolicyQualifierInfo>(() => _encode_SigPolicyQualifierInfo, $.BER)(value.sigPolicyQualifiers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SignaturePolicyId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignaturePolicyId */

/* eslint-enable */
