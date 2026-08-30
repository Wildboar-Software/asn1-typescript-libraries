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
import { XRES, _decode_XRES, _encode_XRES } from "../MAP-MS-DataTypes/XRES.ta.mjs";
// export { XRES, _decode_XRES, _encode_XRES } from "../MAP-MS-DataTypes/XRES.ta.mjs";
import { CK, _decode_CK, _encode_CK } from "../MAP-MS-DataTypes/CK.ta.mjs";
// export { CK, _decode_CK, _encode_CK } from "../MAP-MS-DataTypes/CK.ta.mjs";
import { IK, _decode_IK, _encode_IK } from "../MAP-MS-DataTypes/IK.ta.mjs";
// export { IK, _decode_IK, _encode_IK } from "../MAP-MS-DataTypes/IK.ta.mjs";
import { AUTN, _decode_AUTN, _encode_AUTN } from "../MAP-MS-DataTypes/AUTN.ta.mjs";
// export { AUTN, _decode_AUTN, _encode_AUTN } from "../MAP-MS-DataTypes/AUTN.ta.mjs";


/**
 * @summary AuthenticationQuintuplet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationQuintuplet ::= SEQUENCE {
 *     rand    RAND,
 *     xres    XRES,
 *     ck    CK,
 *     ik    IK,
 *     autn    AUTN,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AuthenticationQuintuplet {
    constructor (
        /**
         * @summary `rand`.
         * @public
         * @readonly
         */
        readonly rand: RAND,
        /**
         * @summary `xres`.
         * @public
         * @readonly
         */
        readonly xres: XRES,
        /**
         * @summary `ck`.
         * @public
         * @readonly
         */
        readonly ck: CK,
        /**
         * @summary `ik`.
         * @public
         * @readonly
         */
        readonly ik: IK,
        /**
         * @summary `autn`.
         * @public
         * @readonly
         */
        readonly autn: AUTN,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthenticationQuintuplet
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticationQuintuplet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticationQuintuplet`.
     * @returns {AuthenticationQuintuplet}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticationQuintuplet)]: (AuthenticationQuintuplet)[_K] }): AuthenticationQuintuplet {
        return new AuthenticationQuintuplet(_o.rand, _o.xres, _o.ck, _o.ik, _o.autn, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticationQuintuplet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticationQuintuplet: $.ComponentSpec[] = [
    new $.ComponentSpec("rand", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("xres", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ck", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ik", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("autn", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AuthenticationQuintuplet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticationQuintuplet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticationQuintuplet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticationQuintuplet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticationQuintuplet: $.ASN1Decoder<AuthenticationQuintuplet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationQuintuplet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationQuintuplet (el: _Element): AuthenticationQuintuplet {
    if (!_cached_decoder_for_AuthenticationQuintuplet) { _cached_decoder_for_AuthenticationQuintuplet = function (el: _Element): AuthenticationQuintuplet {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("AuthenticationQuintuplet contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rand";
    sequence[1].name = "xres";
    sequence[2].name = "ck";
    sequence[3].name = "ik";
    sequence[4].name = "autn";
    let rand!: RAND;
    let xres!: XRES;
    let ck!: CK;
    let ik!: IK;
    let autn!: AUTN;
    rand = _decode_RAND(sequence[0]);
    xres = _decode_XRES(sequence[1]);
    ck = _decode_CK(sequence[2]);
    ik = _decode_IK(sequence[3]);
    autn = _decode_AUTN(sequence[4]);
    return new AuthenticationQuintuplet(
        rand,
        xres,
        ck,
        ik,
        autn,
        sequence.slice(5),
    );
}; }
    return _cached_decoder_for_AuthenticationQuintuplet(el);
}

let _cached_encoder_for_AuthenticationQuintuplet: $.ASN1Encoder<AuthenticationQuintuplet> | null = null;

/**
 * @summary Encodes a(n) AuthenticationQuintuplet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationQuintuplet, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationQuintuplet (value: AuthenticationQuintuplet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationQuintuplet) { _cached_encoder_for_AuthenticationQuintuplet = function (value: AuthenticationQuintuplet, elGetter: $.ASN1Encoder<AuthenticationQuintuplet>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RAND(value.rand, $.BER),
            /* REQUIRED   */ _encode_XRES(value.xres, $.BER),
            /* REQUIRED   */ _encode_CK(value.ck, $.BER),
            /* REQUIRED   */ _encode_IK(value.ik, $.BER),
            /* REQUIRED   */ _encode_AUTN(value.autn, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticationQuintuplet(value, elGetter);
}


/* eslint-enable */
