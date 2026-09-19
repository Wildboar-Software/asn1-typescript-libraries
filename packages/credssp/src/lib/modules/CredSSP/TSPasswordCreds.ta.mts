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
 * @summary TSPasswordCreds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSPasswordCreds ::= SEQUENCE {
 *         domainName    [0] OCTET STRING,
 *         userName     [1] OCTET STRING,
 *         password     [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class TSPasswordCreds {
    constructor (
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: OCTET_STRING,
        /**
         * @summary `userName`.
         * @public
         * @readonly
         */
        readonly userName: OCTET_STRING,
        /**
         * @summary `password`.
         * @public
         * @readonly
         */
        readonly password: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a TSPasswordCreds
     * @description
     * 
     * This takes an `object` and converts it to a `TSPasswordCreds`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSPasswordCreds`.
     * @returns {TSPasswordCreds}
     */
    public static _from_object (_o: { [_K in keyof (TSPasswordCreds)]: (TSPasswordCreds)[_K] }): TSPasswordCreds {
        return new TSPasswordCreds(_o.domainName, _o.userName, _o.password);
    }


}

/**
 * @summary The Leading Root Component Types of TSPasswordCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSPasswordCreds: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("userName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("password", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TSPasswordCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSPasswordCreds: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSPasswordCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSPasswordCreds: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSPasswordCreds: $.ASN1Decoder<TSPasswordCreds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSPasswordCreds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSPasswordCreds (el: _Element): TSPasswordCreds {
    if (!_cached_decoder_for_TSPasswordCreds) { _cached_decoder_for_TSPasswordCreds = function (el: _Element): TSPasswordCreds {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TSPasswordCreds contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "domainName";
    sequence[1].name = "userName";
    sequence[2].name = "password";
    let domainName!: OCTET_STRING;
    let userName!: OCTET_STRING;
    let password!: OCTET_STRING;
    domainName = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    userName = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    password = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new TSPasswordCreds(
        domainName,
        userName,
        password,

    );
}; }
    return _cached_decoder_for_TSPasswordCreds(el);
}

let _cached_encoder_for_TSPasswordCreds: $.ASN1Encoder<TSPasswordCreds> | null = null;

/**
 * @summary Encodes a(n) TSPasswordCreds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSPasswordCreds, encoded as an ASN.1 Element.
 */
export
function _encode_TSPasswordCreds (value: TSPasswordCreds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSPasswordCreds) { _cached_encoder_for_TSPasswordCreds = function (value: TSPasswordCreds, elGetter: $.ASN1Encoder<TSPasswordCreds>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.domainName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.userName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.password, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSPasswordCreds(value, elGetter);
}


/* eslint-enable */
