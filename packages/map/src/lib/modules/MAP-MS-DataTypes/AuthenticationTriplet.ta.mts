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
import { RAND, _decode_RAND, _encode_RAND } from "../MAP-MS-DataTypes/RAND.ta.mjs";
// export { RAND, _decode_RAND, _encode_RAND } from "../MAP-MS-DataTypes/RAND.ta.mjs";
import { SRES, _decode_SRES, _encode_SRES } from "../MAP-MS-DataTypes/SRES.ta.mjs";
// export { SRES, _decode_SRES, _encode_SRES } from "../MAP-MS-DataTypes/SRES.ta.mjs";
import { Kc, _decode_Kc, _encode_Kc } from "../MAP-MS-DataTypes/Kc.ta.mjs";
// export { Kc, _decode_Kc, _encode_Kc } from "../MAP-MS-DataTypes/Kc.ta.mjs";


/**
 * @summary AuthenticationTriplet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationTriplet ::= SEQUENCE {
 *     rand    RAND,
 *     sres    SRES,
 *     kc    Kc,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AuthenticationTriplet {
    constructor (
        /**
         * @summary `rand`.
         * @public
         * @readonly
         */
        readonly rand: RAND,
        /**
         * @summary `sres`.
         * @public
         * @readonly
         */
        readonly sres: SRES,
        /**
         * @summary `kc`.
         * @public
         * @readonly
         */
        readonly kc: Kc,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthenticationTriplet
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticationTriplet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticationTriplet`.
     * @returns {AuthenticationTriplet}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticationTriplet)]: (AuthenticationTriplet)[_K] }): AuthenticationTriplet {
        return new AuthenticationTriplet(_o.rand, _o.sres, _o.kc, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticationTriplet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticationTriplet: $.ComponentSpec[] = [
    new $.ComponentSpec("rand", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("sres", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("kc", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AuthenticationTriplet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticationTriplet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticationTriplet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticationTriplet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticationTriplet: $.ASN1Decoder<AuthenticationTriplet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationTriplet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationTriplet (el: _Element): AuthenticationTriplet {
    if (!_cached_decoder_for_AuthenticationTriplet) { _cached_decoder_for_AuthenticationTriplet = function (el: _Element): AuthenticationTriplet {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AuthenticationTriplet contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rand";
    sequence[1].name = "sres";
    sequence[2].name = "kc";
    let rand!: RAND;
    let sres!: SRES;
    let kc!: Kc;
    rand = _decode_RAND(sequence[0]);
    sres = _decode_SRES(sequence[1]);
    kc = _decode_Kc(sequence[2]);
    return new AuthenticationTriplet(
        rand,
        sres,
        kc,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_AuthenticationTriplet(el);
}

let _cached_encoder_for_AuthenticationTriplet: $.ASN1Encoder<AuthenticationTriplet> | null = null;

/**
 * @summary Encodes a(n) AuthenticationTriplet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationTriplet, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationTriplet (value: AuthenticationTriplet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationTriplet) { _cached_encoder_for_AuthenticationTriplet = function (value: AuthenticationTriplet, elGetter: $.ASN1Encoder<AuthenticationTriplet>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RAND(value.rand, $.BER),
            /* REQUIRED   */ _encode_SRES(value.sres, $.BER),
            /* REQUIRED   */ _encode_Kc(value.kc, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticationTriplet(value, elGetter);
}


/* eslint-enable */
