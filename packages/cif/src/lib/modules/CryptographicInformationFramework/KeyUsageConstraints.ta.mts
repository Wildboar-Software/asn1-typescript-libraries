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
import { KeyUsageConstraints_keyUsageConstraintsFlag, KeyUsageConstraints_keyUsageConstraintsFlag_immediateUsage /* IMPORTED_LONG_NAMED_BIT */, immediateUsage /* IMPORTED_SHORT_NAMED_BIT */, _decode_KeyUsageConstraints_keyUsageConstraintsFlag, _encode_KeyUsageConstraints_keyUsageConstraintsFlag } from "../CryptographicInformationFramework/KeyUsageConstraints-keyUsageConstraintsFlag.ta.mjs";
// export { KeyUsageConstraints_keyUsageConstraintsFlag, KeyUsageConstraints_keyUsageConstraintsFlag_immediateUsage /* IMPORTED_LONG_NAMED_BIT */, immediateUsage /* IMPORTED_SHORT_NAMED_BIT */, _decode_KeyUsageConstraints_keyUsageConstraintsFlag, _encode_KeyUsageConstraints_keyUsageConstraintsFlag } from "../CryptographicInformationFramework/KeyUsageConstraints-keyUsageConstraintsFlag.ta.mjs";


/**
 * @summary KeyUsageConstraints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyUsageConstraints ::= SEQUENCE {
 *     keyUsageConstraintsFlag BIT STRING {
 *         immediateUsage (0)
 *     },
 *     refOID                  OBJECT IDENTIFIER OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class KeyUsageConstraints {
    constructor (
        /**
         * @summary `keyUsageConstraintsFlag`.
         * @public
         * @readonly
         */
        readonly keyUsageConstraintsFlag: KeyUsageConstraints_keyUsageConstraintsFlag,
        /**
         * @summary `refOID`.
         * @public
         * @readonly
         */
        readonly refOID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KeyUsageConstraints
     * @description
     * 
     * This takes an `object` and converts it to a `KeyUsageConstraints`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyUsageConstraints`.
     * @returns {KeyUsageConstraints}
     */
    public static _from_object (_o: { [_K in keyof (KeyUsageConstraints)]: (KeyUsageConstraints)[_K] }): KeyUsageConstraints {
        return new KeyUsageConstraints(_o.keyUsageConstraintsFlag, _o.refOID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of KeyUsageConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KeyUsageConstraints: $.ComponentSpec[] = [
    new $.ComponentSpec("keyUsageConstraintsFlag", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("refOID", true, $.hasTag(_TagClass.universal, 6))
];

/**
 * @summary The Trailing Root Component Types of KeyUsageConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KeyUsageConstraints: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KeyUsageConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KeyUsageConstraints: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KeyUsageConstraints: $.ASN1Decoder<KeyUsageConstraints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyUsageConstraints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyUsageConstraints (el: _Element): KeyUsageConstraints {
    if (!_cached_decoder_for_KeyUsageConstraints) { _cached_decoder_for_KeyUsageConstraints = function (el: _Element): KeyUsageConstraints {
    let keyUsageConstraintsFlag!: KeyUsageConstraints_keyUsageConstraintsFlag;
    let refOID: OPTIONAL<OBJECT_IDENTIFIER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "keyUsageConstraintsFlag": (_el: _Element): void => { keyUsageConstraintsFlag = _decode_KeyUsageConstraints_keyUsageConstraintsFlag(_el); },
        "refOID": (_el: _Element): void => { refOID = $._decodeObjectIdentifier(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KeyUsageConstraints,
        _extension_additions_list_spec_for_KeyUsageConstraints,
        _root_component_type_list_2_spec_for_KeyUsageConstraints,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new KeyUsageConstraints(
        keyUsageConstraintsFlag,
        refOID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_KeyUsageConstraints(el);
}

let _cached_encoder_for_KeyUsageConstraints: $.ASN1Encoder<KeyUsageConstraints> | null = null;

/**
 * @summary Encodes a(n) KeyUsageConstraints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyUsageConstraints, encoded as an ASN.1 Element.
 */
export
function _encode_KeyUsageConstraints (value: KeyUsageConstraints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyUsageConstraints) { _cached_encoder_for_KeyUsageConstraints = function (value: KeyUsageConstraints, elGetter: $.ASN1Encoder<KeyUsageConstraints>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_KeyUsageConstraints_keyUsageConstraintsFlag(value.keyUsageConstraintsFlag, $.BER),
            /* IF_ABSENT  */ ((value.refOID === undefined) ? undefined : $._encodeObjectIdentifier(value.refOID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KeyUsageConstraints(value, elGetter);
}


/* eslint-enable */
