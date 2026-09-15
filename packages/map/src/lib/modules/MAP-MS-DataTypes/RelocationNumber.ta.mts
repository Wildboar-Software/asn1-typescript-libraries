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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";


/**
 * @summary RelocationNumber
 * @description
 *
 * Handover number paired with a RAB Identity so the call can be related to the
 * radio access bearer.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.19A and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelocationNumber ::= SEQUENCE {
 *     handoverNumber    ISDN-AddressString,
 *     rab-Id    RAB-Id,
 *     -- RAB Identity is needed to relate the calls with the radio access bearers. 
 *     ...}
 * ```
 * 
 * @class
 */
export
class RelocationNumber {
    constructor (
        /**
         * @summary `handoverNumber`.
         * @description
         *
         * Number allocated for handover or relocation.
         *
         * (3GPP TS 29.002 V19.1.0 clause 7.6.2.21).
         *
         * @public
         * @readonly
         */
        readonly handoverNumber: ISDN_AddressString,
        /**
         * @summary `rab_Id`.
         * @description
         *
         * Radio access bearer identifier as in 3GPP TS 25.413.
         *
         * (3GPP TS 29.002 V19.1.0 clause 7.6.2.57).
         *
         * @public
         * @readonly
         */
        readonly rab_Id: RAB_Id,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RelocationNumber
     * @description
     * 
     * This takes an `object` and converts it to a `RelocationNumber`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelocationNumber`.
     * @returns {RelocationNumber}
     */
    public static _from_object (_o: { [_K in keyof (RelocationNumber)]: (RelocationNumber)[_K] }): RelocationNumber {
        return new RelocationNumber(_o.handoverNumber, _o.rab_Id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RelocationNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RelocationNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("handoverNumber", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("rab-Id", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RelocationNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RelocationNumber: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RelocationNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RelocationNumber: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RelocationNumber: $.ASN1Decoder<RelocationNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelocationNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelocationNumber (el: _Element): RelocationNumber {
    if (!_cached_decoder_for_RelocationNumber) { _cached_decoder_for_RelocationNumber = function (el: _Element): RelocationNumber {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RelocationNumber contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "handoverNumber";
    sequence[1].name = "rab-Id";
    let handoverNumber!: ISDN_AddressString;
    let rab_Id!: RAB_Id;
    handoverNumber = _decode_ISDN_AddressString(sequence[0]);
    rab_Id = _decode_RAB_Id(sequence[1]);
    return new RelocationNumber(
        handoverNumber,
        rab_Id,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_RelocationNumber(el);
}

let _cached_encoder_for_RelocationNumber: $.ASN1Encoder<RelocationNumber> | null = null;

/**
 * @summary Encodes a(n) RelocationNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelocationNumber, encoded as an ASN.1 Element.
 */
export
function _encode_RelocationNumber (value: RelocationNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelocationNumber) { _cached_encoder_for_RelocationNumber = function (value: RelocationNumber, elGetter: $.ASN1Encoder<RelocationNumber>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.handoverNumber, $.BER),
            /* REQUIRED   */ _encode_RAB_Id(value.rab_Id, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RelocationNumber(value, elGetter);
}


/* eslint-enable */
