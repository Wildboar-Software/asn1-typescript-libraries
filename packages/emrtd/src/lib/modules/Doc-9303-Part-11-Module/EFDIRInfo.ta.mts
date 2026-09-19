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
 * @summary EFDIRInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EFDIRInfo ::= SEQUENCE {
 *     protocol    OBJECT IDENTIFIER(id-EFDIR),
 *     eFDIR       OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class EFDIRInfo {
    constructor (
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OBJECT_IDENTIFIER,
        /**
         * @summary `eFDIR`.
         * @public
         * @readonly
         */
        readonly eFDIR: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a EFDIRInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EFDIRInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EFDIRInfo`.
     * @returns {EFDIRInfo}
     */
    public static _from_object (_o: { [_K in keyof (EFDIRInfo)]: (EFDIRInfo)[_K] }): EFDIRInfo {
        return new EFDIRInfo(_o.protocol, _o.eFDIR);
    }


}

/**
 * @summary The Leading Root Component Types of EFDIRInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EFDIRInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("eFDIR", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of EFDIRInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EFDIRInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EFDIRInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EFDIRInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EFDIRInfo: $.ASN1Decoder<EFDIRInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EFDIRInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EFDIRInfo (el: _Element): EFDIRInfo {
    if (!_cached_decoder_for_EFDIRInfo) { _cached_decoder_for_EFDIRInfo = function (el: _Element): EFDIRInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EFDIRInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocol";
    sequence[1].name = "eFDIR";
    let protocol!: OBJECT_IDENTIFIER;
    let eFDIR!: OCTET_STRING;
    protocol = $._decodeObjectIdentifier(sequence[0]);
    eFDIR = $._decodeOctetString(sequence[1]);
    return new EFDIRInfo(
        protocol,
        eFDIR,

    );
}; }
    return _cached_decoder_for_EFDIRInfo(el);
}

let _cached_encoder_for_EFDIRInfo: $.ASN1Encoder<EFDIRInfo> | null = null;

/**
 * @summary Encodes a(n) EFDIRInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EFDIRInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EFDIRInfo (value: EFDIRInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EFDIRInfo) { _cached_encoder_for_EFDIRInfo = function (value: EFDIRInfo, elGetter: $.ASN1Encoder<EFDIRInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.eFDIR, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EFDIRInfo(value, elGetter);
}


/* eslint-enable */
