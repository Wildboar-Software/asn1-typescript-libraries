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
import { CallID, _decode_CallID, _encode_CallID } from "../CSTA-call-connection-identifiers/CallID.ta.mjs";
// export { CallID, _decode_CallID, _encode_CallID } from "../CSTA-call-connection-identifiers/CallID.ta.mjs";
import { LocalDeviceID, _decode_LocalDeviceID, _encode_LocalDeviceID } from "../CSTA-call-connection-identifiers/LocalDeviceID.ta.mjs";
// export { LocalDeviceID, _decode_LocalDeviceID, _encode_LocalDeviceID } from "../CSTA-call-connection-identifiers/LocalDeviceID.ta.mjs";


/**
 * @summary ConnectionID_both
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionID-both ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ConnectionID_both {
    constructor (
        /**
         * @summary `callID`.
         * @public
         * @readonly
         */
        readonly callID: CallID,
        /**
         * @summary `deviceID`.
         * @public
         * @readonly
         */
        readonly deviceID: LocalDeviceID
    ) {}

    /**
     * @summary Restructures an object into a ConnectionID_both
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectionID_both`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionID_both`.
     * @returns {ConnectionID_both}
     */
    public static _from_object (_o: { [_K in keyof (ConnectionID_both)]: (ConnectionID_both)[_K] }): ConnectionID_both {
        return new ConnectionID_both(_o.callID, _o.deviceID);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectionID_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectionID_both: $.ComponentSpec[] = [
    new $.ComponentSpec("callID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("deviceID", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ConnectionID_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectionID_both: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectionID_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectionID_both: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectionID_both: $.ASN1Decoder<ConnectionID_both> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionID_both
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionID_both (el: _Element): ConnectionID_both {
    if (!_cached_decoder_for_ConnectionID_both) { _cached_decoder_for_ConnectionID_both = function (el: _Element): ConnectionID_both {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ConnectionID-both contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "callID";
    sequence[1].name = "deviceID";
    let callID!: CallID;
    let deviceID!: LocalDeviceID;
    callID = $._decode_implicit<CallID>(() => _decode_CallID)(sequence[0]);
    deviceID = $._decode_explicit<LocalDeviceID>(() => _decode_LocalDeviceID)(sequence[1]);
    return new ConnectionID_both(
        callID,
        deviceID,

    );
}; }
    return _cached_decoder_for_ConnectionID_both(el);
}

let _cached_encoder_for_ConnectionID_both: $.ASN1Encoder<ConnectionID_both> | null = null;

/**
 * @summary Encodes a(n) ConnectionID_both into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionID_both, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionID_both (value: ConnectionID_both, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionID_both) { _cached_encoder_for_ConnectionID_both = function (value: ConnectionID_both, elGetter: $.ASN1Encoder<ConnectionID_both>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallID, $.BER)(value.callID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_LocalDeviceID, $.BER)(value.deviceID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectionID_both(value, elGetter);
}


/* eslint-enable */
