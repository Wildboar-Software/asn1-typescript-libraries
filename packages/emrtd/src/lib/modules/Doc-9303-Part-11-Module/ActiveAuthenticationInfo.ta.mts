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
 * @summary ActiveAuthenticationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActiveAuthenticationInfo ::= SEQUENCE {
 *     protocol            OBJECT IDENTIFIER(id-icao-mrtd-security-aaProtocolObject),
 *     version             INTEGER, -- MUST be 1
 *     signatureAlgorithm  OBJECT IDENTIFIER
 * }
 * ```
 * 
 * @class
 */
export
class ActiveAuthenticationInfo {
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
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: OBJECT_IDENTIFIER
    ) {}

    /**
     * @summary Restructures an object into a ActiveAuthenticationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ActiveAuthenticationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActiveAuthenticationInfo`.
     * @returns {ActiveAuthenticationInfo}
     */
    public static _from_object (_o: { [_K in keyof (ActiveAuthenticationInfo)]: (ActiveAuthenticationInfo)[_K] }): ActiveAuthenticationInfo {
        return new ActiveAuthenticationInfo(_o.protocol, _o.version, _o.signatureAlgorithm);
    }


}

/**
 * @summary The Leading Root Component Types of ActiveAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActiveAuthenticationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("signatureAlgorithm", false, $.hasTag(_TagClass.universal, 6))
];

/**
 * @summary The Trailing Root Component Types of ActiveAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActiveAuthenticationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActiveAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActiveAuthenticationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActiveAuthenticationInfo: $.ASN1Decoder<ActiveAuthenticationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActiveAuthenticationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActiveAuthenticationInfo (el: _Element): ActiveAuthenticationInfo {
    if (!_cached_decoder_for_ActiveAuthenticationInfo) { _cached_decoder_for_ActiveAuthenticationInfo = function (el: _Element): ActiveAuthenticationInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ActiveAuthenticationInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocol";
    sequence[1].name = "version";
    sequence[2].name = "signatureAlgorithm";
    let protocol!: OBJECT_IDENTIFIER;
    let version!: INTEGER;
    let signatureAlgorithm!: OBJECT_IDENTIFIER;
    protocol = $._decodeObjectIdentifier(sequence[0]);
    version = $._decodeInteger(sequence[1]);
    signatureAlgorithm = $._decodeObjectIdentifier(sequence[2]);
    return new ActiveAuthenticationInfo(
        protocol,
        version,
        signatureAlgorithm,

    );
}; }
    return _cached_decoder_for_ActiveAuthenticationInfo(el);
}

let _cached_encoder_for_ActiveAuthenticationInfo: $.ASN1Encoder<ActiveAuthenticationInfo> | null = null;

/**
 * @summary Encodes a(n) ActiveAuthenticationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActiveAuthenticationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ActiveAuthenticationInfo (value: ActiveAuthenticationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActiveAuthenticationInfo) { _cached_encoder_for_ActiveAuthenticationInfo = function (value: ActiveAuthenticationInfo, elGetter: $.ASN1Encoder<ActiveAuthenticationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.version, $.BER),
            /* REQUIRED   */ $._encodeObjectIdentifier(value.signatureAlgorithm, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActiveAuthenticationInfo(value, elGetter);
}


/* eslint-enable */
