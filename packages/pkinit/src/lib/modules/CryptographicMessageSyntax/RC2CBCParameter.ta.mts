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
 * @summary RC2CBCParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RC2CBCParameter ::= SEQUENCE {
 *   rc2ParameterVersion  INTEGER,
 *   iv                   OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class RC2CBCParameter {
    constructor (
        /**
         * @summary `rc2ParameterVersion`.
         * @public
         * @readonly
         */
        readonly rc2ParameterVersion: INTEGER,
        /**
         * @summary `iv`.
         * @public
         * @readonly
         */
        readonly iv: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a RC2CBCParameter
     * @description
     * 
     * This takes an `object` and converts it to a `RC2CBCParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RC2CBCParameter`.
     * @returns {RC2CBCParameter}
     */
    public static _from_object (_o: { [_K in keyof (RC2CBCParameter)]: (RC2CBCParameter)[_K] }): RC2CBCParameter {
        return new RC2CBCParameter(_o.rc2ParameterVersion, _o.iv);
    }


}

/**
 * @summary The Leading Root Component Types of RC2CBCParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RC2CBCParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("rc2ParameterVersion", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("iv", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of RC2CBCParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RC2CBCParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RC2CBCParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RC2CBCParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RC2CBCParameter: $.ASN1Decoder<RC2CBCParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RC2CBCParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RC2CBCParameter (el: _Element): RC2CBCParameter {
    if (!_cached_decoder_for_RC2CBCParameter) { _cached_decoder_for_RC2CBCParameter = function (el: _Element): RC2CBCParameter {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RC2CBCParameter contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rc2ParameterVersion";
    sequence[1].name = "iv";
    let rc2ParameterVersion!: INTEGER;
    let iv!: OCTET_STRING;
    rc2ParameterVersion = $._decodeInteger(sequence[0]);
    iv = $._decodeOctetString(sequence[1]);
    return new RC2CBCParameter(
        rc2ParameterVersion,
        iv,

    );
}; }
    return _cached_decoder_for_RC2CBCParameter(el);
}

let _cached_encoder_for_RC2CBCParameter: $.ASN1Encoder<RC2CBCParameter> | null = null;

/**
 * @summary Encodes a(n) RC2CBCParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RC2CBCParameter, encoded as an ASN.1 Element.
 */
export
function _encode_RC2CBCParameter (value: RC2CBCParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RC2CBCParameter) { _cached_encoder_for_RC2CBCParameter = function (value: RC2CBCParameter, elGetter: $.ASN1Encoder<RC2CBCParameter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.rc2ParameterVersion, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.iv, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RC2CBCParameter(value, elGetter);
}


/* eslint-enable */
