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
import { LDSSecurityObjectVersion, LDSSecurityObjectVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, LDSSecurityObjectVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LDSSecurityObjectVersion, _encode_LDSSecurityObjectVersion } from "../LDSSecurityObjectV1/LDSSecurityObjectVersion.ta.mjs";
// export { LDSSecurityObjectVersion, LDSSecurityObjectVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, LDSSecurityObjectVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LDSSecurityObjectVersion, _encode_LDSSecurityObjectVersion } from "../LDSSecurityObjectV1/LDSSecurityObjectVersion.ta.mjs";
import { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../LDSSecurityObjectV1/DigestAlgorithmIdentifier.ta.mjs";
// export { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../LDSSecurityObjectV1/DigestAlgorithmIdentifier.ta.mjs";
import { DataGroupHash, _decode_DataGroupHash, _encode_DataGroupHash } from "../LDSSecurityObjectV1/DataGroupHash.ta.mjs";
// export { DataGroupHash, _decode_DataGroupHash, _encode_DataGroupHash } from "../LDSSecurityObjectV1/DataGroupHash.ta.mjs";
import { LDSVersionInfo, _decode_LDSVersionInfo, _encode_LDSVersionInfo } from "../LDSSecurityObjectV1/LDSVersionInfo.ta.mjs";
// export { LDSVersionInfo, _decode_LDSVersionInfo, _encode_LDSVersionInfo } from "../LDSSecurityObjectV1/LDSVersionInfo.ta.mjs";


/**
 * @summary LDSSecurityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LDSSecurityObject ::= SEQUENCE {
 *     version LDSSecurityObjectVersion,
 *     hashAlgorithm DigestAlgorithmIdentifier,
 *     dataGroupHashValues SEQUENCE SIZE (2..ub-DataGroups) OF DataGroupHash,
 *     ldsVersionInfo LDSVersionInfo OPTIONAL
 *     -- If present, version MUST be V1
 * }
 * ```
 * 
 * @class
 */
export
class LDSSecurityObject {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: LDSSecurityObjectVersion,
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `dataGroupHashValues`.
         * @public
         * @readonly
         */
        readonly dataGroupHashValues: DataGroupHash[],
        /**
         * @summary `ldsVersionInfo`.
         * @public
         * @readonly
         */
        readonly ldsVersionInfo: OPTIONAL<LDSVersionInfo>
    ) {}

    /**
     * @summary Restructures an object into a LDSSecurityObject
     * @description
     * 
     * This takes an `object` and converts it to a `LDSSecurityObject`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LDSSecurityObject`.
     * @returns {LDSSecurityObject}
     */
    public static _from_object (_o: { [_K in keyof (LDSSecurityObject)]: (LDSSecurityObject)[_K] }): LDSSecurityObject {
        return new LDSSecurityObject(_o.version, _o.hashAlgorithm, _o.dataGroupHashValues, _o.ldsVersionInfo);
    }


}

/**
 * @summary The Leading Root Component Types of LDSSecurityObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LDSSecurityObject: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("hashAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("dataGroupHashValues", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("ldsVersionInfo", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of LDSSecurityObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LDSSecurityObject: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LDSSecurityObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LDSSecurityObject: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LDSSecurityObject: $.ASN1Decoder<LDSSecurityObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LDSSecurityObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LDSSecurityObject (el: _Element): LDSSecurityObject {
    if (!_cached_decoder_for_LDSSecurityObject) { _cached_decoder_for_LDSSecurityObject = function (el: _Element): LDSSecurityObject {
    let version!: LDSSecurityObjectVersion;
    let hashAlgorithm!: DigestAlgorithmIdentifier;
    let dataGroupHashValues!: DataGroupHash[];
    let ldsVersionInfo: OPTIONAL<LDSVersionInfo>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_LDSSecurityObjectVersion(_el); },
        "hashAlgorithm": (_el: _Element): void => { hashAlgorithm = _decode_DigestAlgorithmIdentifier(_el); },
        "dataGroupHashValues": (_el: _Element): void => { dataGroupHashValues = $._decodeSequenceOf<DataGroupHash>(() => _decode_DataGroupHash)(_el); },
        "ldsVersionInfo": (_el: _Element): void => { ldsVersionInfo = _decode_LDSVersionInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LDSSecurityObject,
        _extension_additions_list_spec_for_LDSSecurityObject,
        _root_component_type_list_2_spec_for_LDSSecurityObject,
        undefined,
    );
    return new LDSSecurityObject(
        version,
        hashAlgorithm,
        dataGroupHashValues,
        ldsVersionInfo
    );
}; }
    return _cached_decoder_for_LDSSecurityObject(el);
}

let _cached_encoder_for_LDSSecurityObject: $.ASN1Encoder<LDSSecurityObject> | null = null;

/**
 * @summary Encodes a(n) LDSSecurityObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDSSecurityObject, encoded as an ASN.1 Element.
 */
export
function _encode_LDSSecurityObject (value: LDSSecurityObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LDSSecurityObject) { _cached_encoder_for_LDSSecurityObject = function (value: LDSSecurityObject, elGetter: $.ASN1Encoder<LDSSecurityObject>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDSSecurityObjectVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(value.hashAlgorithm, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<DataGroupHash>(() => _encode_DataGroupHash, $.BER)(value.dataGroupHashValues, $.BER),
            /* IF_ABSENT  */ ((value.ldsVersionInfo === undefined) ? undefined : _encode_LDSVersionInfo(value.ldsVersionInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LDSSecurityObject(value, elGetter);
}


/* eslint-enable */
