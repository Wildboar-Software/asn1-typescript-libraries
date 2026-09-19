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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { RoamingIndicator, _decode_RoamingIndicator, _encode_RoamingIndicator } from "../TS33128Payloads/RoamingIndicator.ta.mjs";
// export { RoamingIndicator, _decode_RoamingIndicator, _encode_RoamingIndicator } from "../TS33128Payloads/RoamingIndicator.ta.mjs";


/**
 * @summary HSSServingSystemMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSSServingSystemMessage ::= SEQUENCE
 * {
 *     iMSI                     [1] IMSI,
 *     oldPLMNID                [2] PLMNID,
 *     newPLMNID                [3] PLMNID,
 *     roamingIndicator         [4] RoamingIndicator,
 *     responseCodes            [5] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class HSSServingSystemMessage {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: IMSI,
        /**
         * @summary `oldPLMNID`.
         * @public
         * @readonly
         */
        readonly oldPLMNID: PLMNID,
        /**
         * @summary `newPLMNID`.
         * @public
         * @readonly
         */
        readonly newPLMNID: PLMNID,
        /**
         * @summary `roamingIndicator`.
         * @public
         * @readonly
         */
        readonly roamingIndicator: RoamingIndicator,
        /**
         * @summary `responseCodes`.
         * @public
         * @readonly
         */
        readonly responseCodes: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a HSSServingSystemMessage
     * @description
     * 
     * This takes an `object` and converts it to a `HSSServingSystemMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HSSServingSystemMessage`.
     * @returns {HSSServingSystemMessage}
     */
    public static _from_object (_o: { [_K in keyof (HSSServingSystemMessage)]: (HSSServingSystemMessage)[_K] }): HSSServingSystemMessage {
        return new HSSServingSystemMessage(_o.iMSI, _o.oldPLMNID, _o.newPLMNID, _o.roamingIndicator, _o.responseCodes);
    }


}

/**
 * @summary The Leading Root Component Types of HSSServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HSSServingSystemMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("oldPLMNID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("newPLMNID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("roamingIndicator", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("responseCodes", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of HSSServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HSSServingSystemMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HSSServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HSSServingSystemMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HSSServingSystemMessage: $.ASN1Decoder<HSSServingSystemMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HSSServingSystemMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HSSServingSystemMessage (el: _Element): HSSServingSystemMessage {
    if (!_cached_decoder_for_HSSServingSystemMessage) { _cached_decoder_for_HSSServingSystemMessage = function (el: _Element): HSSServingSystemMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("HSSServingSystemMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iMSI";
    sequence[1].name = "oldPLMNID";
    sequence[2].name = "newPLMNID";
    sequence[3].name = "roamingIndicator";
    sequence[4].name = "responseCodes";
    let iMSI!: IMSI;
    let oldPLMNID!: PLMNID;
    let newPLMNID!: PLMNID;
    let roamingIndicator!: RoamingIndicator;
    let responseCodes!: UTF8String;
    iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(sequence[0]);
    oldPLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[1]);
    newPLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[2]);
    roamingIndicator = $._decode_implicit<RoamingIndicator>(() => _decode_RoamingIndicator)(sequence[3]);
    responseCodes = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[4]);
    return new HSSServingSystemMessage(
        iMSI,
        oldPLMNID,
        newPLMNID,
        roamingIndicator,
        responseCodes,

    );
}; }
    return _cached_decoder_for_HSSServingSystemMessage(el);
}

let _cached_encoder_for_HSSServingSystemMessage: $.ASN1Encoder<HSSServingSystemMessage> | null = null;

/**
 * @summary Encodes a(n) HSSServingSystemMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HSSServingSystemMessage, encoded as an ASN.1 Element.
 */
export
function _encode_HSSServingSystemMessage (value: HSSServingSystemMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HSSServingSystemMessage) { _cached_encoder_for_HSSServingSystemMessage = function (value: HSSServingSystemMessage, elGetter: $.ASN1Encoder<HSSServingSystemMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.oldPLMNID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PLMNID, $.BER)(value.newPLMNID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_RoamingIndicator, $.BER)(value.roamingIndicator, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.responseCodes, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HSSServingSystemMessage(value, elGetter);
}


/* eslint-enable */
