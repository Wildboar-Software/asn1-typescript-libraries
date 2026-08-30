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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CK, _decode_CK, _encode_CK } from "../MAP-MS-DataTypes/CK.ta.mjs";
// export { CK, _decode_CK, _encode_CK } from "../MAP-MS-DataTypes/CK.ta.mjs";
import { IK, _decode_IK, _encode_IK } from "../MAP-MS-DataTypes/IK.ta.mjs";
// export { IK, _decode_IK, _encode_IK } from "../MAP-MS-DataTypes/IK.ta.mjs";
import { KSI, _decode_KSI, _encode_KSI } from "../MAP-MS-DataTypes/KSI.ta.mjs";
// export { KSI, _decode_KSI, _encode_KSI } from "../MAP-MS-DataTypes/KSI.ta.mjs";


/**
 * @summary UMTS_SecurityContextData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UMTS-SecurityContextData ::= SEQUENCE {
 *     ck    CK,
 *     ik    IK,
 *     ksi    KSI,
 *     ... }
 * ```
 * 
 * @class
 */
export
class UMTS_SecurityContextData {
    constructor (
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
         * @summary `ksi`.
         * @public
         * @readonly
         */
        readonly ksi: KSI,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UMTS_SecurityContextData
     * @description
     * 
     * This takes an `object` and converts it to a `UMTS_SecurityContextData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UMTS_SecurityContextData`.
     * @returns {UMTS_SecurityContextData}
     */
    public static _from_object (_o: { [_K in keyof (UMTS_SecurityContextData)]: (UMTS_SecurityContextData)[_K] }): UMTS_SecurityContextData {
        return new UMTS_SecurityContextData(_o.ck, _o.ik, _o.ksi, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UMTS_SecurityContextData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UMTS_SecurityContextData: $.ComponentSpec[] = [
    new $.ComponentSpec("ck", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ik", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ksi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UMTS_SecurityContextData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UMTS_SecurityContextData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UMTS_SecurityContextData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UMTS_SecurityContextData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UMTS_SecurityContextData: $.ASN1Decoder<UMTS_SecurityContextData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UMTS_SecurityContextData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UMTS_SecurityContextData (el: _Element): UMTS_SecurityContextData {
    if (!_cached_decoder_for_UMTS_SecurityContextData) { _cached_decoder_for_UMTS_SecurityContextData = function (el: _Element): UMTS_SecurityContextData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("UMTS-SecurityContextData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ck";
    sequence[1].name = "ik";
    sequence[2].name = "ksi";
    let ck!: CK;
    let ik!: IK;
    let ksi!: KSI;
    ck = _decode_CK(sequence[0]);
    ik = _decode_IK(sequence[1]);
    ksi = _decode_KSI(sequence[2]);
    return new UMTS_SecurityContextData(
        ck,
        ik,
        ksi,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_UMTS_SecurityContextData(el);
}

let _cached_encoder_for_UMTS_SecurityContextData: $.ASN1Encoder<UMTS_SecurityContextData> | null = null;

/**
 * @summary Encodes a(n) UMTS_SecurityContextData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UMTS_SecurityContextData, encoded as an ASN.1 Element.
 */
export
function _encode_UMTS_SecurityContextData (value: UMTS_SecurityContextData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UMTS_SecurityContextData) { _cached_encoder_for_UMTS_SecurityContextData = function (value: UMTS_SecurityContextData, elGetter: $.ASN1Encoder<UMTS_SecurityContextData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CK(value.ck, $.BER),
            /* REQUIRED   */ _encode_IK(value.ik, $.BER),
            /* REQUIRED   */ _encode_KSI(value.ksi, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UMTS_SecurityContextData(value, elGetter);
}


/* eslint-enable */
