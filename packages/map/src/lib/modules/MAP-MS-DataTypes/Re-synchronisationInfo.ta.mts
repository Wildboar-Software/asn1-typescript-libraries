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
import { AUTS, _decode_AUTS, _encode_AUTS } from "../MAP-MS-DataTypes/AUTS.ta.mjs";


/**
 * @summary Re_synchronisationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Re-synchronisationInfo ::= SEQUENCE {
 *     rand    RAND,
 *     auts    AUTS,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Re_synchronisationInfo {
    constructor (
        /**
         * @summary `rand`.
         * @public
         * @readonly
         */
        readonly rand: RAND,
        /**
         * @summary `auts`.
         * @public
         * @readonly
         */
        readonly auts: AUTS,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Re_synchronisationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `Re_synchronisationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Re_synchronisationInfo`.
     * @returns {Re_synchronisationInfo}
     */
    public static _from_object (_o: { [_K in keyof (Re_synchronisationInfo)]: (Re_synchronisationInfo)[_K] }): Re_synchronisationInfo {
        return new Re_synchronisationInfo(_o.rand, _o.auts, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Re_synchronisationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Re_synchronisationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("rand", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("auts", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of Re_synchronisationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Re_synchronisationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Re_synchronisationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Re_synchronisationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Re_synchronisationInfo: $.ASN1Decoder<Re_synchronisationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Re_synchronisationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Re_synchronisationInfo (el: _Element): Re_synchronisationInfo {
    if (!_cached_decoder_for_Re_synchronisationInfo) { _cached_decoder_for_Re_synchronisationInfo = function (el: _Element): Re_synchronisationInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Re-synchronisationInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rand";
    sequence[1].name = "auts";
    let rand!: RAND;
    let auts!: AUTS;
    rand = _decode_RAND(sequence[0]);
    auts = _decode_AUTS(sequence[1]);
    return new Re_synchronisationInfo(
        rand,
        auts,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_Re_synchronisationInfo(el);
}

let _cached_encoder_for_Re_synchronisationInfo: $.ASN1Encoder<Re_synchronisationInfo> | null = null;

/**
 * @summary Encodes a(n) Re_synchronisationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Re_synchronisationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_Re_synchronisationInfo (value: Re_synchronisationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Re_synchronisationInfo) { _cached_encoder_for_Re_synchronisationInfo = function (value: Re_synchronisationInfo, elGetter: $.ASN1Encoder<Re_synchronisationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RAND(value.rand, $.BER),
            /* REQUIRED   */ _encode_AUTS(value.auts, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Re_synchronisationInfo(value, elGetter);
}


/* eslint-enable */
