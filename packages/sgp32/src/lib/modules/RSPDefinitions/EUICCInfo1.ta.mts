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
import { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
// export { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
import { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";
// export { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";


/**
 * @summary EUICCInfo1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo1 ::= [32] SEQUENCE { -- Tag 'BF20'
 *     svn [2] VersionType,     -- GSMA SGP.22 version supported (SVN)
 *     euiccCiPKIdListForVerification [9] SEQUENCE OF SubjectKeyIdentifier, -- List of CI Public Key Identifiers supported on the eUICC for signature verification
 *     euiccCiPKIdListForSigning [10] SEQUENCE OF SubjectKeyIdentifier -- List of CI Public Key Identifier supported on the eUICC for signature creation
 * }
 * ```
 * 
 * @class
 */
export
class EUICCInfo1 {
    constructor (
        /**
         * @summary `svn`.
         * @public
         * @readonly
         */
        readonly svn: VersionType,
        /**
         * @summary `euiccCiPKIdListForVerification`.
         * @public
         * @readonly
         */
        readonly euiccCiPKIdListForVerification: SubjectKeyIdentifier[],
        /**
         * @summary `euiccCiPKIdListForSigning`.
         * @public
         * @readonly
         */
        readonly euiccCiPKIdListForSigning: SubjectKeyIdentifier[]
    ) {}

    /**
     * @summary Restructures an object into a EUICCInfo1
     * @description
     * 
     * This takes an `object` and converts it to a `EUICCInfo1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EUICCInfo1`.
     * @returns {EUICCInfo1}
     */
    public static _from_object (_o: { [_K in keyof (EUICCInfo1)]: (EUICCInfo1)[_K] }): EUICCInfo1 {
        return new EUICCInfo1(_o.svn, _o.euiccCiPKIdListForVerification, _o.euiccCiPKIdListForSigning);
    }


}

/**
 * @summary The Leading Root Component Types of EUICCInfo1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EUICCInfo1: $.ComponentSpec[] = [
    new $.ComponentSpec("svn", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("euiccCiPKIdListForVerification", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("euiccCiPKIdListForSigning", false, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of EUICCInfo1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EUICCInfo1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EUICCInfo1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EUICCInfo1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EUICCInfo1: $.ASN1Decoder<EUICCInfo1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUICCInfo1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUICCInfo1 (el: _Element): EUICCInfo1 {
    if (!_cached_decoder_for_EUICCInfo1) { _cached_decoder_for_EUICCInfo1 = $._decode_implicit<EUICCInfo1>(() => function (el: _Element): EUICCInfo1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EUICCInfo1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "svn";
    sequence[1].name = "euiccCiPKIdListForVerification";
    sequence[2].name = "euiccCiPKIdListForSigning";
    let svn!: VersionType;
    let euiccCiPKIdListForVerification!: SubjectKeyIdentifier[];
    let euiccCiPKIdListForSigning!: SubjectKeyIdentifier[];
    svn = $._decode_implicit<VersionType>(() => _decode_VersionType)(sequence[0]);
    euiccCiPKIdListForVerification = $._decode_implicit<SubjectKeyIdentifier[]>(() => $._decodeSequenceOf<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier))(sequence[1]);
    euiccCiPKIdListForSigning = $._decode_implicit<SubjectKeyIdentifier[]>(() => $._decodeSequenceOf<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier))(sequence[2]);
    return new EUICCInfo1(
        svn,
        euiccCiPKIdListForVerification,
        euiccCiPKIdListForSigning,

    );
}); }
    return _cached_decoder_for_EUICCInfo1(el);
}

let _cached_encoder_for_EUICCInfo1: $.ASN1Encoder<EUICCInfo1> | null = null;

/**
 * @summary Encodes a(n) EUICCInfo1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUICCInfo1, encoded as an ASN.1 Element.
 */
export
function _encode_EUICCInfo1 (value: EUICCInfo1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUICCInfo1) { _cached_encoder_for_EUICCInfo1 = $._encode_implicit(_TagClass.context, 32, () => function (value: EUICCInfo1, elGetter: $.ASN1Encoder<EUICCInfo1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_VersionType, $.BER)(value.svn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<SubjectKeyIdentifier>(() => _encode_SubjectKeyIdentifier, $.BER), $.BER)(value.euiccCiPKIdListForVerification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<SubjectKeyIdentifier>(() => _encode_SubjectKeyIdentifier, $.BER), $.BER)(value.euiccCiPKIdListForSigning, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EUICCInfo1(value, elGetter);
}


/* eslint-enable */
