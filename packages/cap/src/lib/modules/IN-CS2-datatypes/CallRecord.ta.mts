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
import { Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS2-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS2-datatypes/CallingPartyNumber.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";


/**
 * @summary CallRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallRecord{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   callDuration        [0]  Duration,
 *   callingPartyNumber  [1]  CallingPartyNumber{bound},
 *   calledPartyNumber   [2]  CalledPartyNumber{bound}
 * }
 * ```
 * 
 * @class
 */
export
class CallRecord {
    constructor (
        /**
         * @summary `callDuration`.
         * @public
         * @readonly
         */
        readonly callDuration: Duration,
        /**
         * @summary `callingPartyNumber`.
         * @public
         * @readonly
         */
        readonly callingPartyNumber: CallingPartyNumber,
        /**
         * @summary `calledPartyNumber`.
         * @public
         * @readonly
         */
        readonly calledPartyNumber: CalledPartyNumber
    ) {}

    /**
     * @summary Restructures an object into a CallRecord
     * @description
     * 
     * This takes an `object` and converts it to a `CallRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallRecord`.
     * @returns {CallRecord}
     */
    public static _from_object (_o: { [_K in keyof (CallRecord)]: (CallRecord)[_K] }): CallRecord {
        return new CallRecord(_o.callDuration, _o.callingPartyNumber, _o.calledPartyNumber);
    }


}

/**
 * @summary The Leading Root Component Types of CallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callingPartyNumber", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("calledPartyNumber", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallRecord: $.ASN1Decoder<CallRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallRecord (el: _Element): CallRecord {
    if (!_cached_decoder_for_CallRecord) { _cached_decoder_for_CallRecord = function (el: _Element): CallRecord {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CallRecord contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "callDuration";
    sequence[1].name = "callingPartyNumber";
    sequence[2].name = "calledPartyNumber";
    let callDuration!: Duration;
    let callingPartyNumber!: CallingPartyNumber;
    let calledPartyNumber!: CalledPartyNumber;
    callDuration = $._decode_implicit<Duration>(() => _decode_Duration)(sequence[0]);
    callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(sequence[1]);
    calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(sequence[2]);
    return new CallRecord(
        callDuration,
        callingPartyNumber,
        calledPartyNumber,

    );
}; }
    return _cached_decoder_for_CallRecord(el);
}

let _cached_encoder_for_CallRecord: $.ASN1Encoder<CallRecord> | null = null;

/**
 * @summary Encodes a(n) CallRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CallRecord (value: CallRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallRecord) { _cached_encoder_for_CallRecord = function (value: CallRecord, elGetter: $.ASN1Encoder<CallRecord>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Duration, $.BER)(value.callDuration, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallRecord(value, elGetter);
}


/* eslint-enable */
