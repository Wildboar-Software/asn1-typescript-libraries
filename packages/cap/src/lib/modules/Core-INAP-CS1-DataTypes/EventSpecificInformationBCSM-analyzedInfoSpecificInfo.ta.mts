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
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../Core-INAP-CS1-DataTypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../Core-INAP-CS1-DataTypes/CalledPartyNumber.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-analyzedInfoSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_analyzedInfoSpecificInfo {
    constructor (
        /**
         * @summary `calledPartyNumber`.
         * @public
         * @readonly
         */
        readonly calledPartyNumber: CalledPartyNumber
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_analyzedInfoSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_analyzedInfoSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_analyzedInfoSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_analyzedInfoSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_analyzedInfoSpecificInfo)]: (EventSpecificInformationBCSM_analyzedInfoSpecificInfo)[_K] }): EventSpecificInformationBCSM_analyzedInfoSpecificInfo {
        return new EventSpecificInformationBCSM_analyzedInfoSpecificInfo(_o.calledPartyNumber);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyNumber", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_analyzedInfoSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_analyzedInfoSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo (el: _Element): EventSpecificInformationBCSM_analyzedInfoSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_analyzedInfoSpecificInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EventSpecificInformationBCSM-analyzedInfoSpecificInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "calledPartyNumber";
    let calledPartyNumber!: CalledPartyNumber;
    calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(sequence[0]);
    return new EventSpecificInformationBCSM_analyzedInfoSpecificInfo(
        calledPartyNumber,

    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_analyzedInfoSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_analyzedInfoSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_analyzedInfoSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo (value: EventSpecificInformationBCSM_analyzedInfoSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo = function (value: EventSpecificInformationBCSM_analyzedInfoSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_analyzedInfoSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_analyzedInfoSpecificInfo(value, elGetter);
}


/* eslint-enable */
