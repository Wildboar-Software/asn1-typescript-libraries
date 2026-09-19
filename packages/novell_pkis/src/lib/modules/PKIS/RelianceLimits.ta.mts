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
import { MonetaryValue, _decode_MonetaryValue, _encode_MonetaryValue } from "../PKIS/MonetaryValue.ta.mjs";
// export { MonetaryValue, _decode_MonetaryValue, _encode_MonetaryValue } from "../PKIS/MonetaryValue.ta.mjs";


/**
 * @summary RelianceLimits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelianceLimits ::= SEQUENCE {
 *  perTransactionLimit MonetaryValue,
 *  perCertificateLimit MonetaryValue
 * }
 * ```
 * 
 * @class
 */
export
class RelianceLimits {
    constructor (
        /**
         * @summary `perTransactionLimit`.
         * @public
         * @readonly
         */
        readonly perTransactionLimit: MonetaryValue,
        /**
         * @summary `perCertificateLimit`.
         * @public
         * @readonly
         */
        readonly perCertificateLimit: MonetaryValue
    ) {}

    /**
     * @summary Restructures an object into a RelianceLimits
     * @description
     * 
     * This takes an `object` and converts it to a `RelianceLimits`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelianceLimits`.
     * @returns {RelianceLimits}
     */
    public static _from_object (_o: { [_K in keyof (RelianceLimits)]: (RelianceLimits)[_K] }): RelianceLimits {
        return new RelianceLimits(_o.perTransactionLimit, _o.perCertificateLimit);
    }


}

/**
 * @summary The Leading Root Component Types of RelianceLimits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RelianceLimits: $.ComponentSpec[] = [
    new $.ComponentSpec("perTransactionLimit", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("perCertificateLimit", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RelianceLimits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RelianceLimits: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RelianceLimits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RelianceLimits: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RelianceLimits: $.ASN1Decoder<RelianceLimits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelianceLimits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelianceLimits (el: _Element): RelianceLimits {
    if (!_cached_decoder_for_RelianceLimits) { _cached_decoder_for_RelianceLimits = function (el: _Element): RelianceLimits {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RelianceLimits contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "perTransactionLimit";
    sequence[1].name = "perCertificateLimit";
    let perTransactionLimit!: MonetaryValue;
    let perCertificateLimit!: MonetaryValue;
    perTransactionLimit = _decode_MonetaryValue(sequence[0]);
    perCertificateLimit = _decode_MonetaryValue(sequence[1]);
    return new RelianceLimits(
        perTransactionLimit,
        perCertificateLimit,

    );
}; }
    return _cached_decoder_for_RelianceLimits(el);
}

let _cached_encoder_for_RelianceLimits: $.ASN1Encoder<RelianceLimits> | null = null;

/**
 * @summary Encodes a(n) RelianceLimits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelianceLimits, encoded as an ASN.1 Element.
 */
export
function _encode_RelianceLimits (value: RelianceLimits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelianceLimits) { _cached_encoder_for_RelianceLimits = function (value: RelianceLimits, elGetter: $.ASN1Encoder<RelianceLimits>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MonetaryValue(value.perTransactionLimit, $.BER),
            /* REQUIRED   */ _encode_MonetaryValue(value.perCertificateLimit, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RelianceLimits(value, elGetter);
}


/* eslint-enable */
