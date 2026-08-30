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
import { LSAIdentity, _decode_LSAIdentity, _encode_LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";
import { LSAAttributes, _decode_LSAAttributes, _encode_LSAAttributes } from "../MAP-MS-DataTypes/LSAAttributes.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary LSAData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAData ::= SEQUENCE {
 *     lsaIdentity    [0] LSAIdentity,
 *     lsaAttributes    [1] LSAAttributes,
 *     lsaActiveModeIndicator    [2] NULL    OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class LSAData {
    constructor (
        /**
         * @summary `lsaIdentity`.
         * @public
         * @readonly
         */
        readonly lsaIdentity: LSAIdentity,
        /**
         * @summary `lsaAttributes`.
         * @public
         * @readonly
         */
        readonly lsaAttributes: LSAAttributes,
        /**
         * @summary `lsaActiveModeIndicator`.
         * @public
         * @readonly
         */
        readonly lsaActiveModeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LSAData
     * @description
     * 
     * This takes an `object` and converts it to a `LSAData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LSAData`.
     * @returns {LSAData}
     */
    public static _from_object (_o: { [_K in keyof (LSAData)]: (LSAData)[_K] }): LSAData {
        return new LSAData(_o.lsaIdentity, _o.lsaAttributes, _o.lsaActiveModeIndicator, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LSAData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LSAData: $.ComponentSpec[] = [
    new $.ComponentSpec("lsaIdentity", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lsaAttributes", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lsaActiveModeIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LSAData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LSAData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LSAData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LSAData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LSAData: $.ASN1Decoder<LSAData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSAData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSAData (el: _Element): LSAData {
    if (!_cached_decoder_for_LSAData) { _cached_decoder_for_LSAData = function (el: _Element): LSAData {
    let lsaIdentity!: LSAIdentity;
    let lsaAttributes!: LSAAttributes;
    let lsaActiveModeIndicator: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lsaIdentity": (_el: _Element): void => { lsaIdentity = $._decode_implicit<LSAIdentity>(() => _decode_LSAIdentity)(_el); },
        "lsaAttributes": (_el: _Element): void => { lsaAttributes = $._decode_implicit<LSAAttributes>(() => _decode_LSAAttributes)(_el); },
        "lsaActiveModeIndicator": (_el: _Element): void => { lsaActiveModeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LSAData,
        _extension_additions_list_spec_for_LSAData,
        _root_component_type_list_2_spec_for_LSAData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LSAData(
        lsaIdentity,
        lsaAttributes,
        lsaActiveModeIndicator,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LSAData(el);
}

let _cached_encoder_for_LSAData: $.ASN1Encoder<LSAData> | null = null;

/**
 * @summary Encodes a(n) LSAData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAData, encoded as an ASN.1 Element.
 */
export
function _encode_LSAData (value: LSAData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSAData) { _cached_encoder_for_LSAData = function (value: LSAData, elGetter: $.ASN1Encoder<LSAData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_LSAIdentity, $.BER)(value.lsaIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LSAAttributes, $.BER)(value.lsaAttributes, $.BER),
            /* IF_ABSENT  */ ((value.lsaActiveModeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.lsaActiveModeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LSAData(value, elGetter);
}


/* eslint-enable */
