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
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary DTEDCE_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DTEDCE-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DTEDCE_Item {
    constructor (
        /**
         * @summary `txFlowControl`.
         * @public
         * @readonly
         */
        readonly txFlowControl: V59String,
        /**
         * @summary `rxFlowControl`.
         * @public
         * @readonly
         */
        readonly rxFlowControl: V59String,
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: V59String,
        /**
         * @summary `txSpeed`.
         * @public
         * @readonly
         */
        readonly txSpeed: INTEGER,
        /**
         * @summary `rxSpeed`.
         * @public
         * @readonly
         */
        readonly rxSpeed: INTEGER,
        /**
         * @summary `txThroughput`.
         * @public
         * @readonly
         */
        readonly txThroughput: INTEGER,
        /**
         * @summary `rxThroughput`.
         * @public
         * @readonly
         */
        readonly rxThroughput: INTEGER,
        /**
         * @summary `txErrors`.
         * @public
         * @readonly
         */
        readonly txErrors: INTEGER,
        /**
         * @summary `rxErrors`.
         * @public
         * @readonly
         */
        readonly rxErrors: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DTEDCE_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DTEDCE_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DTEDCE_Item`.
     * @returns {DTEDCE_Item}
     */
    public static _from_object (_o: { [_K in keyof (DTEDCE_Item)]: (DTEDCE_Item)[_K] }): DTEDCE_Item {
        return new DTEDCE_Item(_o.txFlowControl, _o.rxFlowControl, _o.protocol, _o.txSpeed, _o.rxSpeed, _o.txThroughput, _o.rxThroughput, _o.txErrors, _o.rxErrors, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DTEDCE_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DTEDCE_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("txFlowControl", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("rxFlowControl", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("txSpeed", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("rxSpeed", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("txThroughput", false, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("rxThroughput", false, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("txErrors", false, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("rxErrors", false, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DTEDCE_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DTEDCE_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DTEDCE_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DTEDCE_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DTEDCE_Item: $.ASN1Decoder<DTEDCE_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DTEDCE_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DTEDCE_Item (el: _Element): DTEDCE_Item {
    if (!_cached_decoder_for_DTEDCE_Item) { _cached_decoder_for_DTEDCE_Item = function (el: _Element): DTEDCE_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 9) {
        throw new _ConstructionError("DTEDCE-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "txFlowControl";
    sequence[1].name = "rxFlowControl";
    sequence[2].name = "protocol";
    sequence[3].name = "txSpeed";
    sequence[4].name = "rxSpeed";
    sequence[5].name = "txThroughput";
    sequence[6].name = "rxThroughput";
    sequence[7].name = "txErrors";
    sequence[8].name = "rxErrors";
    let txFlowControl!: V59String;
    let rxFlowControl!: V59String;
    let protocol!: V59String;
    let txSpeed!: INTEGER;
    let rxSpeed!: INTEGER;
    let txThroughput!: INTEGER;
    let rxThroughput!: INTEGER;
    let txErrors!: INTEGER;
    let rxErrors!: INTEGER;
    txFlowControl = _decode_V59String(sequence[0]);
    rxFlowControl = _decode_V59String(sequence[1]);
    protocol = _decode_V59String(sequence[2]);
    txSpeed = $._decodeInteger(sequence[3]);
    rxSpeed = $._decodeInteger(sequence[4]);
    txThroughput = $._decodeInteger(sequence[5]);
    rxThroughput = $._decodeInteger(sequence[6]);
    txErrors = $._decodeInteger(sequence[7]);
    rxErrors = $._decodeInteger(sequence[8]);
    return new DTEDCE_Item(
        txFlowControl,
        rxFlowControl,
        protocol,
        txSpeed,
        rxSpeed,
        txThroughput,
        rxThroughput,
        txErrors,
        rxErrors,
        sequence.slice(9),
    );
}; }
    return _cached_decoder_for_DTEDCE_Item(el);
}

let _cached_encoder_for_DTEDCE_Item: $.ASN1Encoder<DTEDCE_Item> | null = null;

/**
 * @summary Encodes a(n) DTEDCE_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTEDCE_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DTEDCE_Item (value: DTEDCE_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DTEDCE_Item) { _cached_encoder_for_DTEDCE_Item = function (value: DTEDCE_Item, elGetter: $.ASN1Encoder<DTEDCE_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.txFlowControl, $.BER),
            /* REQUIRED   */ _encode_V59String(value.rxFlowControl, $.BER),
            /* REQUIRED   */ _encode_V59String(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txSpeed, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxSpeed, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txThroughput, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxThroughput, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txErrors, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxErrors, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DTEDCE_Item(value, elGetter);
}


/* eslint-enable */
