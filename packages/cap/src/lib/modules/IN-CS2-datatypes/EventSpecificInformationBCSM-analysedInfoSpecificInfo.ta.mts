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
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_analysedInfoSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-analysedInfoSpecificInfo ::= SEQUENCE {
 *     calledPartynumber  [0]  CalledPartyNumber{bound},
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_analysedInfoSpecificInfo {
    constructor (
        /**
         * @summary `calledPartynumber`.
         * @public
         * @readonly
         */
        readonly calledPartynumber: CalledPartyNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_analysedInfoSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_analysedInfoSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_analysedInfoSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_analysedInfoSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_analysedInfoSpecificInfo)]: (EventSpecificInformationBCSM_analysedInfoSpecificInfo)[_K] }): EventSpecificInformationBCSM_analysedInfoSpecificInfo {
        return new EventSpecificInformationBCSM_analysedInfoSpecificInfo(_o.calledPartynumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_analysedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartynumber", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_analysedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_analysedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_analysedInfoSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_analysedInfoSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_analysedInfoSpecificInfo (el: _Element): EventSpecificInformationBCSM_analysedInfoSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_analysedInfoSpecificInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EventSpecificInformationBCSM-analysedInfoSpecificInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "calledPartynumber";
    let calledPartynumber!: CalledPartyNumber;
    calledPartynumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(sequence[0]);
    return new EventSpecificInformationBCSM_analysedInfoSpecificInfo(
        calledPartynumber,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_analysedInfoSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_analysedInfoSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_analysedInfoSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_analysedInfoSpecificInfo (value: EventSpecificInformationBCSM_analysedInfoSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo = function (value: EventSpecificInformationBCSM_analysedInfoSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_analysedInfoSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.calledPartynumber, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_analysedInfoSpecificInfo(value, elGetter);
}


/* eslint-enable */
