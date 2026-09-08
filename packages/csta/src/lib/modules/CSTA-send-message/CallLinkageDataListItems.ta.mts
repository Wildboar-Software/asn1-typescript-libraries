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
import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
// export { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";


/**
 * @summary CallLinkageDataListItems
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallLinkageDataListItems ::= SEQUENCE
 * {    callLinkageData            CallLinkageData }
 * ```
 * 
 * @class
 */
export
class CallLinkageDataListItems {
    constructor (
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: CallLinkageData
    ) {}

    /**
     * @summary Restructures an object into a CallLinkageDataListItems
     * @description
     * 
     * This takes an `object` and converts it to a `CallLinkageDataListItems`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallLinkageDataListItems`.
     * @returns {CallLinkageDataListItems}
     */
    public static _from_object (_o: { [_K in keyof (CallLinkageDataListItems)]: (CallLinkageDataListItems)[_K] }): CallLinkageDataListItems {
        return new CallLinkageDataListItems(_o.callLinkageData);
    }


}

/**
 * @summary The Leading Root Component Types of CallLinkageDataListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallLinkageDataListItems: $.ComponentSpec[] = [
    new $.ComponentSpec("callLinkageData", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallLinkageDataListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallLinkageDataListItems: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallLinkageDataListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallLinkageDataListItems: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallLinkageDataListItems: $.ASN1Decoder<CallLinkageDataListItems> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallLinkageDataListItems
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallLinkageDataListItems (el: _Element): CallLinkageDataListItems {
    if (!_cached_decoder_for_CallLinkageDataListItems) { _cached_decoder_for_CallLinkageDataListItems = function (el: _Element): CallLinkageDataListItems {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("CallLinkageDataListItems contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "callLinkageData";
    let callLinkageData!: CallLinkageData;
    callLinkageData = _decode_CallLinkageData(sequence[0]);
    return new CallLinkageDataListItems(
        callLinkageData,

    );
}; }
    return _cached_decoder_for_CallLinkageDataListItems(el);
}

let _cached_encoder_for_CallLinkageDataListItems: $.ASN1Encoder<CallLinkageDataListItems> | null = null;

/**
 * @summary Encodes a(n) CallLinkageDataListItems into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallLinkageDataListItems, encoded as an ASN.1 Element.
 */
export
function _encode_CallLinkageDataListItems (value: CallLinkageDataListItems, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallLinkageDataListItems) { _cached_encoder_for_CallLinkageDataListItems = function (value: CallLinkageDataListItems, elGetter: $.ASN1Encoder<CallLinkageDataListItems>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CallLinkageData(value.callLinkageData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallLinkageDataListItems(value, elGetter);
}


/* eslint-enable */
