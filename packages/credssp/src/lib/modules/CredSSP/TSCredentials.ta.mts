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
 * @summary TSCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSCredentials ::= SEQUENCE {
 *           credType        [0] INTEGER,
 *           credentials  [1] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class TSCredentials {
    constructor (
        /**
         * @summary `credType`.
         * @public
         * @readonly
         */
        readonly credType: INTEGER,
        /**
         * @summary `credentials`.
         * @public
         * @readonly
         */
        readonly credentials: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a TSCredentials
     * @description
     * 
     * This takes an `object` and converts it to a `TSCredentials`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSCredentials`.
     * @returns {TSCredentials}
     */
    public static _from_object (_o: { [_K in keyof (TSCredentials)]: (TSCredentials)[_K] }): TSCredentials {
        return new TSCredentials(_o.credType, _o.credentials);
    }


}

/**
 * @summary The Leading Root Component Types of TSCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec("credType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("credentials", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TSCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSCredentials: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSCredentials
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSCredentials: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSCredentials: $.ASN1Decoder<TSCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSCredentials
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSCredentials (el: _Element): TSCredentials {
    if (!_cached_decoder_for_TSCredentials) { _cached_decoder_for_TSCredentials = function (el: _Element): TSCredentials {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TSCredentials contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "credType";
    sequence[1].name = "credentials";
    let credType!: INTEGER;
    let credentials!: OCTET_STRING;
    credType = $._decode_explicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    credentials = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new TSCredentials(
        credType,
        credentials,

    );
}; }
    return _cached_decoder_for_TSCredentials(el);
}

let _cached_encoder_for_TSCredentials: $.ASN1Encoder<TSCredentials> | null = null;

/**
 * @summary Encodes a(n) TSCredentials into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSCredentials, encoded as an ASN.1 Element.
 */
export
function _encode_TSCredentials (value: TSCredentials, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSCredentials) { _cached_encoder_for_TSCredentials = function (value: TSCredentials, elGetter: $.ASN1Encoder<TSCredentials>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.credType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.credentials, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSCredentials(value, elGetter);
}


/* eslint-enable */
