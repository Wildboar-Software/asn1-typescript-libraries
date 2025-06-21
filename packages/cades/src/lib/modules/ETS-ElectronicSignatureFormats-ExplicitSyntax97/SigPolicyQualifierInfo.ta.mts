/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
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
    new $.ComponentSpec("sigPolicyQualifierId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("qualifier", true, $.hasAnyTag)
];

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

let _cached_decoder_for_SigPolicyQualifierInfo: $.ASN1Decoder<SigPolicyQualifierInfo> | null = null;

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

let _cached_encoder_for_SigPolicyQualifierInfo: $.ASN1Encoder<SigPolicyQualifierInfo> | null = null;

/**
 * @summary Encodes a(n) SigPolicyQualifierInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigPolicyQualifierInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SigPolicyQualifierInfo (value: SigPolicyQualifierInfo, elGetter: $.ASN1Encoder<SigPolicyQualifierInfo>) {
    if (!_cached_encoder_for_SigPolicyQualifierInfo) { _cached_encoder_for_SigPolicyQualifierInfo = function (value: SigPolicyQualifierInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.sigPolicyQualifierId, $.DER),
            /* IF_ABSENT  */ ((value.qualifier === undefined) ? undefined : $._encodeAny(value.qualifier, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_SigPolicyQualifierInfo(value, elGetter);
}


/* eslint-enable */
