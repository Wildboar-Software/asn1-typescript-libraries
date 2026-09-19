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
import { KeyGetType, _enum_for_KeyGetType, KeyGetType_internal /* IMPORTED_LONG_ENUMERATION_ITEM */, internal /* IMPORTED_SHORT_ENUMERATION_ITEM */, KeyGetType_external /* IMPORTED_LONG_ENUMERATION_ITEM */, external /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_KeyGetType, _encode_KeyGetType } from "../TS33128Payloads/KeyGetType.ta.mjs";
// export { KeyGetType, _enum_for_KeyGetType, KeyGetType_internal /* IMPORTED_LONG_ENUMERATION_ITEM */, internal /* IMPORTED_SHORT_ENUMERATION_ITEM */, KeyGetType_external /* IMPORTED_LONG_ENUMERATION_ITEM */, external /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_KeyGetType, _encode_KeyGetType } from "../TS33128Payloads/KeyGetType.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { AFKeyInfo, _decode_AFKeyInfo, _encode_AFKeyInfo } from "../TS33128Payloads/AFKeyInfo.ta.mjs";
// export { AFKeyInfo, _decode_AFKeyInfo, _encode_AFKeyInfo } from "../TS33128Payloads/AFKeyInfo.ta.mjs";


/**
 * @summary AAnFKAKMAApplicationKeyGet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAnFKAKMAApplicationKeyGet ::= SEQUENCE
 * {
 *     type                  [1] KeyGetType,
 *     aKID                  [2] NAI,
 *     keyInfo               [3] AFKeyInfo
 * }
 * ```
 * 
 * @class
 */
export
class AAnFKAKMAApplicationKeyGet {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: KeyGetType,
        /**
         * @summary `aKID`.
         * @public
         * @readonly
         */
        readonly aKID: NAI,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: AFKeyInfo
    ) {}

    /**
     * @summary Restructures an object into a AAnFKAKMAApplicationKeyGet
     * @description
     * 
     * This takes an `object` and converts it to a `AAnFKAKMAApplicationKeyGet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAnFKAKMAApplicationKeyGet`.
     * @returns {AAnFKAKMAApplicationKeyGet}
     */
    public static _from_object (_o: { [_K in keyof (AAnFKAKMAApplicationKeyGet)]: (AAnFKAKMAApplicationKeyGet)[_K] }): AAnFKAKMAApplicationKeyGet {
        return new AAnFKAKMAApplicationKeyGet(_o.type_, _o.aKID, _o.keyInfo);
    }

        /**
         * @summary The enum used as the type of the component `type_`
         * @public
         * @static
         */

    public static _enum_for_type_ = _enum_for_KeyGetType;
}

/**
 * @summary The Leading Root Component Types of AAnFKAKMAApplicationKeyGet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AAnFKAKMAApplicationKeyGet: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("keyInfo", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AAnFKAKMAApplicationKeyGet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AAnFKAKMAApplicationKeyGet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AAnFKAKMAApplicationKeyGet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AAnFKAKMAApplicationKeyGet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AAnFKAKMAApplicationKeyGet: $.ASN1Decoder<AAnFKAKMAApplicationKeyGet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAnFKAKMAApplicationKeyGet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAnFKAKMAApplicationKeyGet (el: _Element): AAnFKAKMAApplicationKeyGet {
    if (!_cached_decoder_for_AAnFKAKMAApplicationKeyGet) { _cached_decoder_for_AAnFKAKMAApplicationKeyGet = function (el: _Element): AAnFKAKMAApplicationKeyGet {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AAnFKAKMAApplicationKeyGet contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "aKID";
    sequence[2].name = "keyInfo";
    let type_!: KeyGetType;
    let aKID!: NAI;
    let keyInfo!: AFKeyInfo;
    type_ = $._decode_implicit<KeyGetType>(() => _decode_KeyGetType)(sequence[0]);
    aKID = $._decode_implicit<NAI>(() => _decode_NAI)(sequence[1]);
    keyInfo = $._decode_implicit<AFKeyInfo>(() => _decode_AFKeyInfo)(sequence[2]);
    return new AAnFKAKMAApplicationKeyGet(
        type_,
        aKID,
        keyInfo,

    );
}; }
    return _cached_decoder_for_AAnFKAKMAApplicationKeyGet(el);
}

let _cached_encoder_for_AAnFKAKMAApplicationKeyGet: $.ASN1Encoder<AAnFKAKMAApplicationKeyGet> | null = null;

/**
 * @summary Encodes a(n) AAnFKAKMAApplicationKeyGet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAnFKAKMAApplicationKeyGet, encoded as an ASN.1 Element.
 */
export
function _encode_AAnFKAKMAApplicationKeyGet (value: AAnFKAKMAApplicationKeyGet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAnFKAKMAApplicationKeyGet) { _cached_encoder_for_AAnFKAKMAApplicationKeyGet = function (value: AAnFKAKMAApplicationKeyGet, elGetter: $.ASN1Encoder<AAnFKAKMAApplicationKeyGet>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_KeyGetType, $.BER)(value.type_, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AFKeyInfo, $.BER)(value.keyInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AAnFKAKMAApplicationKeyGet(value, elGetter);
}


/* eslint-enable */
