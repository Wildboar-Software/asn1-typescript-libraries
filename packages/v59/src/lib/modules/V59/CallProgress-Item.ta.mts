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
import { CallProgressRes, _decode_CallProgressRes, _encode_CallProgressRes } from "../V59/CallProgressRes.ta.mjs";
// export { CallProgressRes, _decode_CallProgressRes, _encode_CallProgressRes } from "../V59/CallProgressRes.ta.mjs";
import { CallTerminateCode, _decode_CallTerminateCode, _encode_CallTerminateCode } from "../V59/CallTerminateCode.ta.mjs";
// export { CallTerminateCode, _decode_CallTerminateCode, _encode_CallTerminateCode } from "../V59/CallTerminateCode.ta.mjs";


/**
 * @summary CallProgress_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProgress-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class CallProgress_Item {
    constructor (
        /**
         * @summary `callProgressResult`.
         * @public
         * @readonly
         */
        readonly callProgressResult: CallProgressRes,
        /**
         * @summary `callTerminate`.
         * @public
         * @readonly
         */
        readonly callTerminate: CallTerminateCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CallProgress_Item
     * @description
     * 
     * This takes an `object` and converts it to a `CallProgress_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallProgress_Item`.
     * @returns {CallProgress_Item}
     */
    public static _from_object (_o: { [_K in keyof (CallProgress_Item)]: (CallProgress_Item)[_K] }): CallProgress_Item {
        return new CallProgress_Item(_o.callProgressResult, _o.callTerminate, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallProgress_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallProgress_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("callProgressResult", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callTerminate", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallProgress_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallProgress_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallProgress_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallProgress_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallProgress_Item: $.ASN1Decoder<CallProgress_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallProgress_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallProgress_Item (el: _Element): CallProgress_Item {
    if (!_cached_decoder_for_CallProgress_Item) { _cached_decoder_for_CallProgress_Item = function (el: _Element): CallProgress_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CallProgress-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "callProgressResult";
    sequence[1].name = "callTerminate";
    let callProgressResult!: CallProgressRes;
    let callTerminate!: CallTerminateCode;
    callProgressResult = _decode_CallProgressRes(sequence[0]);
    callTerminate = _decode_CallTerminateCode(sequence[1]);
    return new CallProgress_Item(
        callProgressResult,
        callTerminate,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_CallProgress_Item(el);
}

let _cached_encoder_for_CallProgress_Item: $.ASN1Encoder<CallProgress_Item> | null = null;

/**
 * @summary Encodes a(n) CallProgress_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallProgress_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CallProgress_Item (value: CallProgress_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallProgress_Item) { _cached_encoder_for_CallProgress_Item = function (value: CallProgress_Item, elGetter: $.ASN1Encoder<CallProgress_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CallProgressRes(value.callProgressResult, $.BER),
            /* REQUIRED   */ _encode_CallTerminateCode(value.callTerminate, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallProgress_Item(value, elGetter);
}


/* eslint-enable */
