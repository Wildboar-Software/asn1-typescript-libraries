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
import { AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate } from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
// export { AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate } from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import { ACPathData, _decode_ACPathData, _encode_ACPathData } from "../AttributeCertificateDefinitions/ACPathData.ta.mjs";
// export { ACPathData, _decode_ACPathData, _encode_ACPathData } from "../AttributeCertificateDefinitions/ACPathData.ta.mjs";


/**
 * @summary AttributeCertificationPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCertificationPath ::= SEQUENCE {
 *   attributeCertificate  AttributeCertificate,
 *   acPath                SEQUENCE OF ACPathData OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class AttributeCertificationPath {
    constructor (
        /**
         * @summary `attributeCertificate`.
         * @public
         * @readonly
         */
        readonly attributeCertificate: AttributeCertificate,
        /**
         * @summary `acPath`.
         * @public
         * @readonly
         */
        readonly acPath: OPTIONAL<ACPathData[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificationPath
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeCertificationPath`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificationPath`.
     * @returns {AttributeCertificationPath}
     */
    public static _from_object (_o: { [_K in keyof (AttributeCertificationPath)]: (AttributeCertificationPath)[_K] }): AttributeCertificationPath {
        return new AttributeCertificationPath(_o.attributeCertificate, _o.acPath, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeCertificationPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeCertificate", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("acPath", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AttributeCertificationPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeCertificationPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeCertificationPath: $.ASN1Decoder<AttributeCertificationPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificationPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCertificationPath (el: _Element): AttributeCertificationPath {
    if (!_cached_decoder_for_AttributeCertificationPath) { _cached_decoder_for_AttributeCertificationPath = function (el: _Element): AttributeCertificationPath {
    let attributeCertificate!: AttributeCertificate;
    let acPath: OPTIONAL<ACPathData[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "attributeCertificate": (_el: _Element): void => { attributeCertificate = _decode_AttributeCertificate(_el); },
        "acPath": (_el: _Element): void => { acPath = $._decodeSequenceOf<ACPathData>(() => _decode_ACPathData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificationPath,
        _extension_additions_list_spec_for_AttributeCertificationPath,
        _root_component_type_list_2_spec_for_AttributeCertificationPath,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeCertificationPath(
        attributeCertificate,
        acPath,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AttributeCertificationPath(el);
}

let _cached_encoder_for_AttributeCertificationPath: $.ASN1Encoder<AttributeCertificationPath> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificationPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificationPath, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificationPath (value: AttributeCertificationPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCertificationPath) { _cached_encoder_for_AttributeCertificationPath = function (value: AttributeCertificationPath, elGetter: $.ASN1Encoder<AttributeCertificationPath>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeCertificate(value.attributeCertificate, $.BER),
            /* IF_ABSENT  */ ((value.acPath === undefined) ? undefined : $._encodeSequenceOf<ACPathData>(() => _encode_ACPathData, $.BER)(value.acPath, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeCertificationPath(value, elGetter);
}


/* eslint-enable */
