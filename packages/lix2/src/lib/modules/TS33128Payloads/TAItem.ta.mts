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
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
import { BroadcastPLMNItem, _decode_BroadcastPLMNItem, _encode_BroadcastPLMNItem } from "../TS33128Payloads/BroadcastPLMNItem.ta.mjs";
// export { BroadcastPLMNItem, _decode_BroadcastPLMNItem, _encode_BroadcastPLMNItem } from "../TS33128Payloads/BroadcastPLMNItem.ta.mjs";
import { RATInformation, _enum_for_RATInformation, RATInformation_unlicensed /* IMPORTED_LONG_ENUMERATION_ITEM */, unlicensed /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nBIoT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIoT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATInformation, _encode_RATInformation } from "../TS33128Payloads/RATInformation.ta.mjs";
// export { RATInformation, _enum_for_RATInformation, RATInformation_unlicensed /* IMPORTED_LONG_ENUMERATION_ITEM */, unlicensed /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nBIoT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIoT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATInformation_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATInformation, _encode_RATInformation } from "../TS33128Payloads/RATInformation.ta.mjs";


/**
 * @summary TAItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAItem ::= SEQUENCE
 * {
 *     tAC                  [1] TAC,
 *     broadcastPLMNList    [2] SEQUENCE (SIZE(1..MAX)) OF BroadcastPLMNItem,
 *     rATinformation       [3] RATInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TAItem {
    constructor (
        /**
         * @summary `tAC`.
         * @public
         * @readonly
         */
        readonly tAC: TAC,
        /**
         * @summary `broadcastPLMNList`.
         * @public
         * @readonly
         */
        readonly broadcastPLMNList: BroadcastPLMNItem[],
        /**
         * @summary `rATinformation`.
         * @public
         * @readonly
         */
        readonly rATinformation: OPTIONAL<RATInformation>
    ) {}

    /**
     * @summary Restructures an object into a TAItem
     * @description
     * 
     * This takes an `object` and converts it to a `TAItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TAItem`.
     * @returns {TAItem}
     */
    public static _from_object (_o: { [_K in keyof (TAItem)]: (TAItem)[_K] }): TAItem {
        return new TAItem(_o.tAC, _o.broadcastPLMNList, _o.rATinformation);
    }

        /**
         * @summary The enum used as the type of the component `rATinformation`
         * @public
         * @static
         */

    public static _enum_for_rATinformation = _enum_for_RATInformation;
}

/**
 * @summary The Leading Root Component Types of TAItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TAItem: $.ComponentSpec[] = [
    new $.ComponentSpec("tAC", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("broadcastPLMNList", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rATinformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TAItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TAItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TAItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TAItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TAItem: $.ASN1Decoder<TAItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TAItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TAItem (el: _Element): TAItem {
    if (!_cached_decoder_for_TAItem) { _cached_decoder_for_TAItem = function (el: _Element): TAItem {
    let tAC!: TAC;
    let broadcastPLMNList!: BroadcastPLMNItem[];
    let rATinformation: OPTIONAL<RATInformation>;
    const callbacks: $.DecodingMap = {
        "tAC": (_el: _Element): void => { tAC = $._decode_implicit<TAC>(() => _decode_TAC)(_el); },
        "broadcastPLMNList": (_el: _Element): void => { broadcastPLMNList = $._decode_implicit<BroadcastPLMNItem[]>(() => $._decodeSequenceOf<BroadcastPLMNItem>(() => _decode_BroadcastPLMNItem))(_el); },
        "rATinformation": (_el: _Element): void => { rATinformation = $._decode_implicit<RATInformation>(() => _decode_RATInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TAItem,
        _extension_additions_list_spec_for_TAItem,
        _root_component_type_list_2_spec_for_TAItem,
        undefined,
    );
    return new TAItem(
        tAC,
        broadcastPLMNList,
        rATinformation
    );
}; }
    return _cached_decoder_for_TAItem(el);
}

let _cached_encoder_for_TAItem: $.ASN1Encoder<TAItem> | null = null;

/**
 * @summary Encodes a(n) TAItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TAItem, encoded as an ASN.1 Element.
 */
export
function _encode_TAItem (value: TAItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TAItem) { _cached_encoder_for_TAItem = function (value: TAItem, elGetter: $.ASN1Encoder<TAItem>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TAC, $.BER)(value.tAC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<BroadcastPLMNItem>(() => _encode_BroadcastPLMNItem, $.BER), $.BER)(value.broadcastPLMNList, $.BER),
            /* IF_ABSENT  */ ((value.rATinformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_RATInformation, $.BER)(value.rATinformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TAItem(value, elGetter);
}


/* eslint-enable */
