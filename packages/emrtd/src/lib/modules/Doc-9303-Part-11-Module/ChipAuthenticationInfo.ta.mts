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



/**
 * @summary ChipAuthenticationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChipAuthenticationInfo ::= SEQUENCE {
 *     protocol    OBJECT IDENTIFIER(
 *         id-CA-DH-3DES-CBC-CBC
 *         | id-CA-DH-AES-CBC-CMAC-128
 *         | id-CA-DH-AES-CBC-CMAC-192
 *         | id-CA-DH-AES-CBC-CMAC-256
 *         | id-CA-ECDH-3DES-CBC-CBC
 *         | id-CA-ECDH-AES-CBC-CMAC-128
 *         | id-CA-ECDH-AES-CBC-CMAC-192
 *         | id-CA-ECDH-AES-CBC-CMAC-256
 *     ),
 *     version     INTEGER, -- MUST be 1
 *     keyId       INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ChipAuthenticationInfo {
    constructor (
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OBJECT_IDENTIFIER,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary `keyId`.
         * @public
         * @readonly
         */
        readonly keyId: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a ChipAuthenticationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ChipAuthenticationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChipAuthenticationInfo`.
     * @returns {ChipAuthenticationInfo}
     */
    public static _from_object (_o: { [_K in keyof (ChipAuthenticationInfo)]: (ChipAuthenticationInfo)[_K] }): ChipAuthenticationInfo {
        return new ChipAuthenticationInfo(_o.protocol, _o.version, _o.keyId);
    }


}

/**
 * @summary The Leading Root Component Types of ChipAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChipAuthenticationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("keyId", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of ChipAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChipAuthenticationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChipAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChipAuthenticationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChipAuthenticationInfo: $.ASN1Decoder<ChipAuthenticationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChipAuthenticationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChipAuthenticationInfo (el: _Element): ChipAuthenticationInfo {
    if (!_cached_decoder_for_ChipAuthenticationInfo) { _cached_decoder_for_ChipAuthenticationInfo = function (el: _Element): ChipAuthenticationInfo {
    let protocol!: OBJECT_IDENTIFIER;
    let version!: INTEGER;
    let keyId: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "protocol": (_el: _Element): void => { protocol = $._decodeObjectIdentifier(_el); },
        "version": (_el: _Element): void => { version = $._decodeInteger(_el); },
        "keyId": (_el: _Element): void => { keyId = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChipAuthenticationInfo,
        _extension_additions_list_spec_for_ChipAuthenticationInfo,
        _root_component_type_list_2_spec_for_ChipAuthenticationInfo,
        undefined,
    );
    return new ChipAuthenticationInfo(
        protocol,
        version,
        keyId
    );
}; }
    return _cached_decoder_for_ChipAuthenticationInfo(el);
}

let _cached_encoder_for_ChipAuthenticationInfo: $.ASN1Encoder<ChipAuthenticationInfo> | null = null;

/**
 * @summary Encodes a(n) ChipAuthenticationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChipAuthenticationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ChipAuthenticationInfo (value: ChipAuthenticationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChipAuthenticationInfo) { _cached_encoder_for_ChipAuthenticationInfo = function (value: ChipAuthenticationInfo, elGetter: $.ASN1Encoder<ChipAuthenticationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.version, $.BER),
            /* IF_ABSENT  */ ((value.keyId === undefined) ? undefined : $._encodeInteger(value.keyId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChipAuthenticationInfo(value, elGetter);
}


/* eslint-enable */
