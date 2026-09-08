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
import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
// export { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";


/**
 * @summary CDRTimePeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTimePeriod ::= SEQUENCE
 * {     beginningOfCDR             TimeInfo,
 *     endOfCDR             TimeInfo }
 * ```
 * 
 * @class
 */
export
class CDRTimePeriod {
    constructor (
        /**
         * @summary `beginningOfCDR`.
         * @public
         * @readonly
         */
        readonly beginningOfCDR: TimeInfo,
        /**
         * @summary `endOfCDR`.
         * @public
         * @readonly
         */
        readonly endOfCDR: TimeInfo
    ) {}

    /**
     * @summary Restructures an object into a CDRTimePeriod
     * @description
     * 
     * This takes an `object` and converts it to a `CDRTimePeriod`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CDRTimePeriod`.
     * @returns {CDRTimePeriod}
     */
    public static _from_object (_o: { [_K in keyof (CDRTimePeriod)]: (CDRTimePeriod)[_K] }): CDRTimePeriod {
        return new CDRTimePeriod(_o.beginningOfCDR, _o.endOfCDR);
    }


}

/**
 * @summary The Leading Root Component Types of CDRTimePeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CDRTimePeriod: $.ComponentSpec[] = [
    new $.ComponentSpec("beginningOfCDR", false, $.hasTag(_TagClass.universal, 24), undefined, undefined),
    new $.ComponentSpec("endOfCDR", false, $.hasTag(_TagClass.universal, 24), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CDRTimePeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CDRTimePeriod: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CDRTimePeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CDRTimePeriod: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CDRTimePeriod: $.ASN1Decoder<CDRTimePeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRTimePeriod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRTimePeriod (el: _Element): CDRTimePeriod {
    if (!_cached_decoder_for_CDRTimePeriod) { _cached_decoder_for_CDRTimePeriod = function (el: _Element): CDRTimePeriod {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CDRTimePeriod contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "beginningOfCDR";
    sequence[1].name = "endOfCDR";
    let beginningOfCDR!: TimeInfo;
    let endOfCDR!: TimeInfo;
    beginningOfCDR = _decode_TimeInfo(sequence[0]);
    endOfCDR = _decode_TimeInfo(sequence[1]);
    return new CDRTimePeriod(
        beginningOfCDR,
        endOfCDR,

    );
}; }
    return _cached_decoder_for_CDRTimePeriod(el);
}

let _cached_encoder_for_CDRTimePeriod: $.ASN1Encoder<CDRTimePeriod> | null = null;

/**
 * @summary Encodes a(n) CDRTimePeriod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRTimePeriod, encoded as an ASN.1 Element.
 */
export
function _encode_CDRTimePeriod (value: CDRTimePeriod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRTimePeriod) { _cached_encoder_for_CDRTimePeriod = function (value: CDRTimePeriod, elGetter: $.ASN1Encoder<CDRTimePeriod>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TimeInfo(value.beginningOfCDR, $.BER),
            /* REQUIRED   */ _encode_TimeInfo(value.endOfCDR, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CDRTimePeriod(value, elGetter);
}


/* eslint-enable */
