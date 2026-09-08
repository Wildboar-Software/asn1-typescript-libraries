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



/**
 * @summary MaxLengthParametersContinued
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxLengthParametersContinued ::= SEQUENCE
 * {    monitorCrossRefID            INTEGER,
 *     callQualifyingData            INTEGER,
 *     subDomainCallLinkageData        INTEGER,
 *     subDomainThreadID            INTEGER,
 *     ioData                    INTEGER,
 *     messageInfo                INTEGER }
 * ```
 * 
 * @class
 */
export
class MaxLengthParametersContinued {
    constructor (
        /**
         * @summary `monitorCrossRefID`.
         * @public
         * @readonly
         */
        readonly monitorCrossRefID: INTEGER,
        /**
         * @summary `callQualifyingData`.
         * @public
         * @readonly
         */
        readonly callQualifyingData: INTEGER,
        /**
         * @summary `subDomainCallLinkageData`.
         * @public
         * @readonly
         */
        readonly subDomainCallLinkageData: INTEGER,
        /**
         * @summary `subDomainThreadID`.
         * @public
         * @readonly
         */
        readonly subDomainThreadID: INTEGER,
        /**
         * @summary `ioData`.
         * @public
         * @readonly
         */
        readonly ioData: INTEGER,
        /**
         * @summary `messageInfo`.
         * @public
         * @readonly
         */
        readonly messageInfo: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a MaxLengthParametersContinued
     * @description
     * 
     * This takes an `object` and converts it to a `MaxLengthParametersContinued`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MaxLengthParametersContinued`.
     * @returns {MaxLengthParametersContinued}
     */
    public static _from_object (_o: { [_K in keyof (MaxLengthParametersContinued)]: (MaxLengthParametersContinued)[_K] }): MaxLengthParametersContinued {
        return new MaxLengthParametersContinued(_o.monitorCrossRefID, _o.callQualifyingData, _o.subDomainCallLinkageData, _o.subDomainThreadID, _o.ioData, _o.messageInfo);
    }


}

/**
 * @summary The Leading Root Component Types of MaxLengthParametersContinued
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MaxLengthParametersContinued: $.ComponentSpec[] = [
    new $.ComponentSpec("monitorCrossRefID", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("callQualifyingData", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("subDomainCallLinkageData", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("subDomainThreadID", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("ioData", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("messageInfo", false, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MaxLengthParametersContinued
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MaxLengthParametersContinued: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MaxLengthParametersContinued
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MaxLengthParametersContinued: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MaxLengthParametersContinued: $.ASN1Decoder<MaxLengthParametersContinued> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaxLengthParametersContinued
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MaxLengthParametersContinued (el: _Element): MaxLengthParametersContinued {
    if (!_cached_decoder_for_MaxLengthParametersContinued) { _cached_decoder_for_MaxLengthParametersContinued = function (el: _Element): MaxLengthParametersContinued {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("MaxLengthParametersContinued contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "monitorCrossRefID";
    sequence[1].name = "callQualifyingData";
    sequence[2].name = "subDomainCallLinkageData";
    sequence[3].name = "subDomainThreadID";
    sequence[4].name = "ioData";
    sequence[5].name = "messageInfo";
    let monitorCrossRefID!: INTEGER;
    let callQualifyingData!: INTEGER;
    let subDomainCallLinkageData!: INTEGER;
    let subDomainThreadID!: INTEGER;
    let ioData!: INTEGER;
    let messageInfo!: INTEGER;
    monitorCrossRefID = $._decodeInteger(sequence[0]);
    callQualifyingData = $._decodeInteger(sequence[1]);
    subDomainCallLinkageData = $._decodeInteger(sequence[2]);
    subDomainThreadID = $._decodeInteger(sequence[3]);
    ioData = $._decodeInteger(sequence[4]);
    messageInfo = $._decodeInteger(sequence[5]);
    return new MaxLengthParametersContinued(
        monitorCrossRefID,
        callQualifyingData,
        subDomainCallLinkageData,
        subDomainThreadID,
        ioData,
        messageInfo,

    );
}; }
    return _cached_decoder_for_MaxLengthParametersContinued(el);
}

let _cached_encoder_for_MaxLengthParametersContinued: $.ASN1Encoder<MaxLengthParametersContinued> | null = null;

/**
 * @summary Encodes a(n) MaxLengthParametersContinued into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxLengthParametersContinued, encoded as an ASN.1 Element.
 */
export
function _encode_MaxLengthParametersContinued (value: MaxLengthParametersContinued, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MaxLengthParametersContinued) { _cached_encoder_for_MaxLengthParametersContinued = function (value: MaxLengthParametersContinued, elGetter: $.ASN1Encoder<MaxLengthParametersContinued>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.monitorCrossRefID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.callQualifyingData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.subDomainCallLinkageData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.subDomainThreadID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.ioData, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.messageInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MaxLengthParametersContinued(value, elGetter);
}


/* eslint-enable */
