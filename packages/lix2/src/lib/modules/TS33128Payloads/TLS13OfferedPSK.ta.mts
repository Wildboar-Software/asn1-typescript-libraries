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
import { TLS13PSKIdentity, _decode_TLS13PSKIdentity, _encode_TLS13PSKIdentity } from "../TS33128Payloads/TLS13PSKIdentity.ta.mjs";
// export { TLS13PSKIdentity, _decode_TLS13PSKIdentity, _encode_TLS13PSKIdentity } from "../TS33128Payloads/TLS13PSKIdentity.ta.mjs";


/**
 * @summary TLS13OfferedPSK
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13OfferedPSK ::= SEQUENCE
 * {
 *     identity [1] TLS13PSKIdentity,
 *     binder   [2] OCTET STRING (SIZE(32..255))
 * }
 * ```
 * 
 * @class
 */
export
class TLS13OfferedPSK {
    constructor (
        /**
         * @summary `identity`.
         * @public
         * @readonly
         */
        readonly identity: TLS13PSKIdentity,
        /**
         * @summary `binder`.
         * @public
         * @readonly
         */
        readonly binder: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a TLS13OfferedPSK
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13OfferedPSK`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13OfferedPSK`.
     * @returns {TLS13OfferedPSK}
     */
    public static _from_object (_o: { [_K in keyof (TLS13OfferedPSK)]: (TLS13OfferedPSK)[_K] }): TLS13OfferedPSK {
        return new TLS13OfferedPSK(_o.identity, _o.binder);
    }


}

/**
 * @summary The Leading Root Component Types of TLS13OfferedPSK
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13OfferedPSK: $.ComponentSpec[] = [
    new $.ComponentSpec("identity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("binder", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TLS13OfferedPSK
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13OfferedPSK: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13OfferedPSK
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13OfferedPSK: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13OfferedPSK: $.ASN1Decoder<TLS13OfferedPSK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13OfferedPSK
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13OfferedPSK (el: _Element): TLS13OfferedPSK {
    if (!_cached_decoder_for_TLS13OfferedPSK) { _cached_decoder_for_TLS13OfferedPSK = function (el: _Element): TLS13OfferedPSK {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TLS13OfferedPSK contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identity";
    sequence[1].name = "binder";
    let identity!: TLS13PSKIdentity;
    let binder!: OCTET_STRING;
    identity = $._decode_implicit<TLS13PSKIdentity>(() => _decode_TLS13PSKIdentity)(sequence[0]);
    binder = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new TLS13OfferedPSK(
        identity,
        binder,

    );
}; }
    return _cached_decoder_for_TLS13OfferedPSK(el);
}

let _cached_encoder_for_TLS13OfferedPSK: $.ASN1Encoder<TLS13OfferedPSK> | null = null;

/**
 * @summary Encodes a(n) TLS13OfferedPSK into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13OfferedPSK, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13OfferedPSK (value: TLS13OfferedPSK, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13OfferedPSK) { _cached_encoder_for_TLS13OfferedPSK = function (value: TLS13OfferedPSK, elGetter: $.ASN1Encoder<TLS13OfferedPSK>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TLS13PSKIdentity, $.BER)(value.identity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.binder, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13OfferedPSK(value, elGetter);
}


/* eslint-enable */
