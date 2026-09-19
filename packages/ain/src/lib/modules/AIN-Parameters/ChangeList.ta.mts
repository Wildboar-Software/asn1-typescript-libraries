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
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
import { SpeedCallingCode, _decode_SpeedCallingCode, _encode_SpeedCallingCode } from "../AIN-Parameters/SpeedCallingCode.ta.mjs";
// export { SpeedCallingCode, _decode_SpeedCallingCode, _encode_SpeedCallingCode } from "../AIN-Parameters/SpeedCallingCode.ta.mjs";


/**
 * @summary ChangeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeList ::= SEQUENCE{
 *         dn                  [1] IMPLICIT Dn,--see Section 6.151 for the encoding
 *         speedCallingCode    [2] IMPLICIT SpeedCallingCode--see above for the encoding
 *     }
 * ```
 * 
 * @class
 */
export
class ChangeList {
    constructor (
        /**
         * @summary `dn`.
         * @public
         * @readonly
         */
        readonly dn: Dn,
        /**
         * @summary `speedCallingCode`.
         * @public
         * @readonly
         */
        readonly speedCallingCode: SpeedCallingCode
    ) {}

    /**
     * @summary Restructures an object into a ChangeList
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeList`.
     * @returns {ChangeList}
     */
    public static _from_object (_o: { [_K in keyof (ChangeList)]: (ChangeList)[_K] }): ChangeList {
        return new ChangeList(_o.dn, _o.speedCallingCode);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeList: $.ComponentSpec[] = [
    new $.ComponentSpec("dn", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("speedCallingCode", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ChangeList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeList: $.ASN1Decoder<ChangeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeList (el: _Element): ChangeList {
    if (!_cached_decoder_for_ChangeList) { _cached_decoder_for_ChangeList = function (el: _Element): ChangeList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ChangeList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dn";
    sequence[1].name = "speedCallingCode";
    let dn!: Dn;
    let speedCallingCode!: SpeedCallingCode;
    dn = $._decode_implicit<Dn>(() => _decode_Dn)(sequence[0]);
    speedCallingCode = $._decode_implicit<SpeedCallingCode>(() => _decode_SpeedCallingCode)(sequence[1]);
    return new ChangeList(
        dn,
        speedCallingCode,

    );
}; }
    return _cached_decoder_for_ChangeList(el);
}

let _cached_encoder_for_ChangeList: $.ASN1Encoder<ChangeList> | null = null;

/**
 * @summary Encodes a(n) ChangeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeList, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeList (value: ChangeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeList) { _cached_encoder_for_ChangeList = function (value: ChangeList, elGetter: $.ASN1Encoder<ChangeList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Dn, $.BER)(value.dn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SpeedCallingCode, $.BER)(value.speedCallingCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeList(value, elGetter);
}


/* eslint-enable */
