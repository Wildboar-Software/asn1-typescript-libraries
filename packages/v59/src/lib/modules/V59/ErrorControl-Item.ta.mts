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
import { ErrorControl_Item_protocolNegotiation, _enum_for_ErrorControl_Item_protocolNegotiation, ErrorControl_Item_protocolNegotiation_disabled /* IMPORTED_LONG_ENUMERATION_ITEM */, disabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, ErrorControl_Item_protocolNegotiation_lapm /* IMPORTED_LONG_ENUMERATION_ITEM */, lapm /* IMPORTED_SHORT_ENUMERATION_ITEM */, ErrorControl_Item_protocolNegotiation_v42annexA /* IMPORTED_LONG_ENUMERATION_ITEM */, v42annexA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ErrorControl_Item_protocolNegotiation, _encode_ErrorControl_Item_protocolNegotiation } from "../V59/ErrorControl-Item-protocolNegotiation.ta.mjs";
// export { ErrorControl_Item_protocolNegotiation, _enum_for_ErrorControl_Item_protocolNegotiation, ErrorControl_Item_protocolNegotiation_disabled /* IMPORTED_LONG_ENUMERATION_ITEM */, disabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, ErrorControl_Item_protocolNegotiation_lapm /* IMPORTED_LONG_ENUMERATION_ITEM */, lapm /* IMPORTED_SHORT_ENUMERATION_ITEM */, ErrorControl_Item_protocolNegotiation_v42annexA /* IMPORTED_LONG_ENUMERATION_ITEM */, v42annexA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ErrorControl_Item_protocolNegotiation, _encode_ErrorControl_Item_protocolNegotiation } from "../V59/ErrorControl-Item-protocolNegotiation.ta.mjs";
import { ErrorControl_Item_v42featureNegotiation, ErrorControl_Item_v42featureNegotiation_singleSREJ /* IMPORTED_LONG_NAMED_BIT */, singleSREJ /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_multipleSREJ /* IMPORTED_LONG_NAMED_BIT */, multipleSREJ /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_hDLCBalMode /* IMPORTED_LONG_NAMED_BIT */, hDLCBalMode /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_testFrameSup /* IMPORTED_LONG_NAMED_BIT */, testFrameSup /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_fcs16 /* IMPORTED_LONG_NAMED_BIT */, fcs16 /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_fcs32 /* IMPORTED_LONG_NAMED_BIT */, fcs32 /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_v42phaseDetused /* IMPORTED_LONG_NAMED_BIT */, v42phaseDetused /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_odpAdpbypassed /* IMPORTED_LONG_NAMED_BIT */, odpAdpbypassed /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_v42fallbackDisc /* IMPORTED_LONG_NAMED_BIT */, v42fallbackDisc /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_v42fallbackBuf /* IMPORTED_LONG_NAMED_BIT */, v42fallbackBuf /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_v42fallbackUnBuf /* IMPORTED_LONG_NAMED_BIT */, v42fallbackUnBuf /* IMPORTED_SHORT_NAMED_BIT */, _decode_ErrorControl_Item_v42featureNegotiation, _encode_ErrorControl_Item_v42featureNegotiation } from "../V59/ErrorControl-Item-v42featureNegotiation.ta.mjs";
// export { ErrorControl_Item_v42featureNegotiation, ErrorControl_Item_v42featureNegotiation_singleSREJ /* IMPORTED_LONG_NAMED_BIT */, singleSREJ /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_multipleSREJ /* IMPORTED_LONG_NAMED_BIT */, multipleSREJ /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_hDLCBalMode /* IMPORTED_LONG_NAMED_BIT */, hDLCBalMode /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_testFrameSup /* IMPORTED_LONG_NAMED_BIT */, testFrameSup /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_fcs16 /* IMPORTED_LONG_NAMED_BIT */, fcs16 /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_fcs32 /* IMPORTED_LONG_NAMED_BIT */, fcs32 /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_v42phaseDetused /* IMPORTED_LONG_NAMED_BIT */, v42phaseDetused /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_odpAdpbypassed /* IMPORTED_LONG_NAMED_BIT */, odpAdpbypassed /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_v42fallbackDisc /* IMPORTED_LONG_NAMED_BIT */, v42fallbackDisc /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_v42fallbackBuf /* IMPORTED_LONG_NAMED_BIT */, v42fallbackBuf /* IMPORTED_SHORT_NAMED_BIT */, ErrorControl_Item_v42featureNegotiation_v42fallbackUnBuf /* IMPORTED_LONG_NAMED_BIT */, v42fallbackUnBuf /* IMPORTED_SHORT_NAMED_BIT */, _decode_ErrorControl_Item_v42featureNegotiation, _encode_ErrorControl_Item_v42featureNegotiation } from "../V59/ErrorControl-Item-v42featureNegotiation.ta.mjs";
import { ErrorControl_Item_ecStatistics, _decode_ErrorControl_Item_ecStatistics, _encode_ErrorControl_Item_ecStatistics } from "../V59/ErrorControl-Item-ecStatistics.ta.mjs";
// export { ErrorControl_Item_ecStatistics, _decode_ErrorControl_Item_ecStatistics, _encode_ErrorControl_Item_ecStatistics } from "../V59/ErrorControl-Item-ecStatistics.ta.mjs";


/**
 * @summary ErrorControl_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorControl-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ErrorControl_Item {
    constructor (
        /**
         * @summary `protocolNegotiation`.
         * @public
         * @readonly
         */
        readonly protocolNegotiation: ErrorControl_Item_protocolNegotiation,
        /**
         * @summary `v42featureNegotiation`.
         * @public
         * @readonly
         */
        readonly v42featureNegotiation: ErrorControl_Item_v42featureNegotiation,
        /**
         * @summary `txFrameSize`.
         * @public
         * @readonly
         */
        readonly txFrameSize: INTEGER,
        /**
         * @summary `rxFrameSize`.
         * @public
         * @readonly
         */
        readonly rxFrameSize: INTEGER,
        /**
         * @summary `txWindow`.
         * @public
         * @readonly
         */
        readonly txWindow: INTEGER,
        /**
         * @summary `rxWindow`.
         * @public
         * @readonly
         */
        readonly rxWindow: INTEGER,
        /**
         * @summary `linkTimeout`.
         * @public
         * @readonly
         */
        readonly linkTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `ecStatistics`.
         * @public
         * @readonly
         */
        readonly ecStatistics: ErrorControl_Item_ecStatistics,
        /**
         * @summary `txErrors`.
         * @public
         * @readonly
         */
        readonly txErrors: OPTIONAL<INTEGER>,
        /**
         * @summary `rxErrors`.
         * @public
         * @readonly
         */
        readonly rxErrors: OPTIONAL<INTEGER>,
        /**
         * @summary `txThroughput`.
         * @public
         * @readonly
         */
        readonly txThroughput: OPTIONAL<INTEGER>,
        /**
         * @summary `rxThroughput`.
         * @public
         * @readonly
         */
        readonly rxThroughput: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ErrorControl_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ErrorControl_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorControl_Item`.
     * @returns {ErrorControl_Item}
     */
    public static _from_object (_o: { [_K in keyof (ErrorControl_Item)]: (ErrorControl_Item)[_K] }): ErrorControl_Item {
        return new ErrorControl_Item(_o.protocolNegotiation, _o.v42featureNegotiation, _o.txFrameSize, _o.rxFrameSize, _o.txWindow, _o.rxWindow, _o.linkTimeout, _o.ecStatistics, _o.txErrors, _o.rxErrors, _o.txThroughput, _o.rxThroughput, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `protocolNegotiation`
         * @public
         * @static
         */

    public static _enum_for_protocolNegotiation = _enum_for_ErrorControl_Item_protocolNegotiation;
}

/**
 * @summary The Leading Root Component Types of ErrorControl_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ErrorControl_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolNegotiation", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("v42featureNegotiation", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("txFrameSize", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("rxFrameSize", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("txWindow", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("rxWindow", false, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("linkTimeout", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("ecStatistics", false, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("txErrors", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("rxErrors", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("txThroughput", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("rxThroughput", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ErrorControl_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ErrorControl_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ErrorControl_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ErrorControl_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ErrorControl_Item: $.ASN1Decoder<ErrorControl_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorControl_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorControl_Item (el: _Element): ErrorControl_Item {
    if (!_cached_decoder_for_ErrorControl_Item) { _cached_decoder_for_ErrorControl_Item = function (el: _Element): ErrorControl_Item {
    let protocolNegotiation!: ErrorControl_Item_protocolNegotiation;
    let v42featureNegotiation!: ErrorControl_Item_v42featureNegotiation;
    let txFrameSize!: INTEGER;
    let rxFrameSize!: INTEGER;
    let txWindow!: INTEGER;
    let rxWindow!: INTEGER;
    let linkTimeout: OPTIONAL<INTEGER>;
    let ecStatistics!: ErrorControl_Item_ecStatistics;
    let txErrors: OPTIONAL<INTEGER>;
    let rxErrors: OPTIONAL<INTEGER>;
    let txThroughput: OPTIONAL<INTEGER>;
    let rxThroughput: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "protocolNegotiation": (_el: _Element): void => { protocolNegotiation = _decode_ErrorControl_Item_protocolNegotiation(_el); },
        "v42featureNegotiation": (_el: _Element): void => { v42featureNegotiation = _decode_ErrorControl_Item_v42featureNegotiation(_el); },
        "txFrameSize": (_el: _Element): void => { txFrameSize = $._decodeInteger(_el); },
        "rxFrameSize": (_el: _Element): void => { rxFrameSize = $._decodeInteger(_el); },
        "txWindow": (_el: _Element): void => { txWindow = $._decodeInteger(_el); },
        "rxWindow": (_el: _Element): void => { rxWindow = $._decodeInteger(_el); },
        "linkTimeout": (_el: _Element): void => { linkTimeout = $._decodeInteger(_el); },
        "ecStatistics": (_el: _Element): void => { ecStatistics = _decode_ErrorControl_Item_ecStatistics(_el); },
        "txErrors": (_el: _Element): void => { txErrors = $._decodeInteger(_el); },
        "rxErrors": (_el: _Element): void => { rxErrors = $._decodeInteger(_el); },
        "txThroughput": (_el: _Element): void => { txThroughput = $._decodeInteger(_el); },
        "rxThroughput": (_el: _Element): void => { rxThroughput = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ErrorControl_Item,
        _extension_additions_list_spec_for_ErrorControl_Item,
        _root_component_type_list_2_spec_for_ErrorControl_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ErrorControl_Item(
        protocolNegotiation,
        v42featureNegotiation,
        txFrameSize,
        rxFrameSize,
        txWindow,
        rxWindow,
        linkTimeout,
        ecStatistics,
        txErrors,
        rxErrors,
        txThroughput,
        rxThroughput,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ErrorControl_Item(el);
}

let _cached_encoder_for_ErrorControl_Item: $.ASN1Encoder<ErrorControl_Item> | null = null;

/**
 * @summary Encodes a(n) ErrorControl_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorControl_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorControl_Item (value: ErrorControl_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorControl_Item) { _cached_encoder_for_ErrorControl_Item = function (value: ErrorControl_Item, elGetter: $.ASN1Encoder<ErrorControl_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ErrorControl_Item_protocolNegotiation(value.protocolNegotiation, $.BER),
            /* REQUIRED   */ _encode_ErrorControl_Item_v42featureNegotiation(value.v42featureNegotiation, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txFrameSize, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxFrameSize, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txWindow, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxWindow, $.BER),
            /* IF_ABSENT  */ ((value.linkTimeout === undefined) ? undefined : $._encodeInteger(value.linkTimeout, $.BER)),
            /* REQUIRED   */ _encode_ErrorControl_Item_ecStatistics(value.ecStatistics, $.BER),
            /* IF_ABSENT  */ ((value.txErrors === undefined) ? undefined : $._encodeInteger(value.txErrors, $.BER)),
            /* IF_ABSENT  */ ((value.rxErrors === undefined) ? undefined : $._encodeInteger(value.rxErrors, $.BER)),
            /* IF_ABSENT  */ ((value.txThroughput === undefined) ? undefined : $._encodeInteger(value.txThroughput, $.BER)),
            /* IF_ABSENT  */ ((value.rxThroughput === undefined) ? undefined : $._encodeInteger(value.rxThroughput, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ErrorControl_Item(value, elGetter);
}


/* eslint-enable */
