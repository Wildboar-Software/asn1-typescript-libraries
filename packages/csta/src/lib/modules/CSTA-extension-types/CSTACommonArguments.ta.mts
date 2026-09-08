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
import { CSTASecurityData, _decode_CSTASecurityData, _encode_CSTASecurityData } from "../CSTA-security/CSTASecurityData.ta.mjs";
// export { CSTASecurityData, _decode_CSTASecurityData, _encode_CSTASecurityData } from "../CSTA-security/CSTASecurityData.ta.mjs";
import { CSTAPrivateData, _decode_CSTAPrivateData, _encode_CSTAPrivateData } from "../CSTA-extension-types/CSTAPrivateData.ta.mjs";
// export { CSTAPrivateData, _decode_CSTAPrivateData, _encode_CSTAPrivateData } from "../CSTA-extension-types/CSTAPrivateData.ta.mjs";


/**
 * @summary CSTACommonArguments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTACommonArguments ::= [APPLICATION 30] IMPLICIT SEQUENCE
 * {    security         [0] IMPLICIT     CSTASecurityData         OPTIONAL,
 *     privateData         [1] IMPLICIT     SEQUENCE OF CSTAPrivateData     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CSTACommonArguments {
    constructor (
        /**
         * @summary `security`.
         * @public
         * @readonly
         */
        readonly security: OPTIONAL<CSTASecurityData>,
        /**
         * @summary `privateData`.
         * @public
         * @readonly
         */
        readonly privateData: OPTIONAL<CSTAPrivateData[]>
    ) {}

    /**
     * @summary Restructures an object into a CSTACommonArguments
     * @description
     * 
     * This takes an `object` and converts it to a `CSTACommonArguments`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CSTACommonArguments`.
     * @returns {CSTACommonArguments}
     */
    public static _from_object (_o: { [_K in keyof (CSTACommonArguments)]: (CSTACommonArguments)[_K] }): CSTACommonArguments {
        return new CSTACommonArguments(_o.security, _o.privateData);
    }


}

/**
 * @summary The Leading Root Component Types of CSTACommonArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CSTACommonArguments: $.ComponentSpec[] = [
    new $.ComponentSpec("security", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("privateData", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CSTACommonArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CSTACommonArguments: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CSTACommonArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CSTACommonArguments: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CSTACommonArguments: $.ASN1Decoder<CSTACommonArguments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTACommonArguments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTACommonArguments (el: _Element): CSTACommonArguments {
    if (!_cached_decoder_for_CSTACommonArguments) { _cached_decoder_for_CSTACommonArguments = $._decode_implicit<CSTACommonArguments>(() => function (el: _Element): CSTACommonArguments {
    let security: OPTIONAL<CSTASecurityData>;
    let privateData: OPTIONAL<CSTAPrivateData[]>;
    const callbacks: $.DecodingMap = {
        "security": (_el: _Element): void => { security = $._decode_implicit<CSTASecurityData>(() => _decode_CSTASecurityData)(_el); },
        "privateData": (_el: _Element): void => { privateData = $._decode_implicit<CSTAPrivateData[]>(() => $._decodeSequenceOf<CSTAPrivateData>(() => _decode_CSTAPrivateData))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CSTACommonArguments,
        _extension_additions_list_spec_for_CSTACommonArguments,
        _root_component_type_list_2_spec_for_CSTACommonArguments,
        undefined,
    );
    return new CSTACommonArguments(
        security,
        privateData
    );
}); }
    return _cached_decoder_for_CSTACommonArguments(el);
}

let _cached_encoder_for_CSTACommonArguments: $.ASN1Encoder<CSTACommonArguments> | null = null;

/**
 * @summary Encodes a(n) CSTACommonArguments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTACommonArguments, encoded as an ASN.1 Element.
 */
export
function _encode_CSTACommonArguments (value: CSTACommonArguments, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTACommonArguments) { _cached_encoder_for_CSTACommonArguments = $._encode_implicit(_TagClass.application, 30, () => function (value: CSTACommonArguments, elGetter: $.ASN1Encoder<CSTACommonArguments>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.security === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CSTASecurityData, $.BER)(value.security, $.BER)),
            /* IF_ABSENT  */ ((value.privateData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<CSTAPrivateData>(() => _encode_CSTAPrivateData, $.BER), $.BER)(value.privateData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_CSTACommonArguments(value, elGetter);
}


/* eslint-enable */
