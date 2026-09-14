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
import { AttributeCertificateAssertion_holder, _decode_AttributeCertificateAssertion_holder, _encode_AttributeCertificateAssertion_holder } from "../AttributeCertificateDefinitions/AttributeCertificateAssertion-holder.ta.mjs";
// export { AttributeCertificateAssertion_holder, _decode_AttributeCertificateAssertion_holder, _encode_AttributeCertificateAssertion_holder } from "../AttributeCertificateDefinitions/AttributeCertificateAssertion-holder.ta.mjs";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";


/**
 * @summary AttributeCertificateAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCertificateAssertion ::= SEQUENCE {
 *   holder             [0]  CHOICE {
 *     baseCertificateID  [0]  IssuerSerial,
 *     holderName         [1]  GeneralNames,
 *     ...} OPTIONAL,
 *   issuer             [1]  GeneralNames OPTIONAL,
 *   attCertValidity    [2]  GeneralizedTime OPTIONAL,
 *   attType            [3]  SET OF AttributeType OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class AttributeCertificateAssertion {
    constructor (
        /**
         * @summary `holder`.
         * @public
         * @readonly
         */
        readonly holder: OPTIONAL<AttributeCertificateAssertion_holder>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralNames>,
        /**
         * @summary `attCertValidity`.
         * @public
         * @readonly
         */
        readonly attCertValidity: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `attType`.
         * @public
         * @readonly
         */
        readonly attType: OPTIONAL<AttributeType[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificateAssertion
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeCertificateAssertion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificateAssertion`.
     * @returns {AttributeCertificateAssertion}
     */
    public static _from_object (_o: { [_K in keyof (AttributeCertificateAssertion)]: (AttributeCertificateAssertion)[_K] }): AttributeCertificateAssertion {
        return new AttributeCertificateAssertion(_o.holder, _o.issuer, _o.attCertValidity, _o.attType, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeCertificateAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("holder", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("issuer", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attCertValidity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attType", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AttributeCertificateAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeCertificateAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeCertificateAssertion: $.ASN1Decoder<AttributeCertificateAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCertificateAssertion (el: _Element): AttributeCertificateAssertion {
    if (!_cached_decoder_for_AttributeCertificateAssertion) { _cached_decoder_for_AttributeCertificateAssertion = function (el: _Element): AttributeCertificateAssertion {
    let holder: OPTIONAL<AttributeCertificateAssertion_holder>;
    let issuer: OPTIONAL<GeneralNames>;
    let attCertValidity: OPTIONAL<GeneralizedTime>;
    let attType: OPTIONAL<AttributeType[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "holder": (_el: _Element): void => { holder = $._decode_explicit<AttributeCertificateAssertion_holder>(() => _decode_AttributeCertificateAssertion_holder)(_el); },
        "issuer": (_el: _Element): void => { issuer = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "attCertValidity": (_el: _Element): void => { attCertValidity = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "attType": (_el: _Element): void => { attType = $._decode_implicit<AttributeType[]>(() => $._decodeSetOf<AttributeType>(() => _decode_AttributeType))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificateAssertion,
        _extension_additions_list_spec_for_AttributeCertificateAssertion,
        _root_component_type_list_2_spec_for_AttributeCertificateAssertion,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeCertificateAssertion(
        holder,
        issuer,
        attCertValidity,
        attType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AttributeCertificateAssertion(el);
}

let _cached_encoder_for_AttributeCertificateAssertion: $.ASN1Encoder<AttributeCertificateAssertion> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificateAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificateAssertion (value: AttributeCertificateAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCertificateAssertion) { _cached_encoder_for_AttributeCertificateAssertion = function (value: AttributeCertificateAssertion, elGetter: $.ASN1Encoder<AttributeCertificateAssertion>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.holder === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_AttributeCertificateAssertion_holder, $.BER)(value.holder, $.BER)),
            /* IF_ABSENT  */ ((value.issuer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GeneralNames, $.BER)(value.issuer, $.BER)),
            /* IF_ABSENT  */ ((value.attCertValidity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.attCertValidity, $.BER)),
            /* IF_ABSENT  */ ((value.attType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER)(value.attType, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeCertificateAssertion(value, elGetter);
}


/* eslint-enable */
