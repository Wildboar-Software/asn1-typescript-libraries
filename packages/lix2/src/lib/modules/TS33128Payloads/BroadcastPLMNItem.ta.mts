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
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { TAISliceSupportList, _decode_TAISliceSupportList, _encode_TAISliceSupportList } from "../TS33128Payloads/TAISliceSupportList.ta.mjs";
// export { TAISliceSupportList, _decode_TAISliceSupportList, _encode_TAISliceSupportList } from "../TS33128Payloads/TAISliceSupportList.ta.mjs";
import { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";
// export { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";


/**
 * @summary BroadcastPLMNItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BroadcastPLMNItem ::= SEQUENCE
 * {
 *     pLMNIdentity          [1] PLMNID,
 *     tAISliceSupportList   [2] TAISliceSupportList,
 *     nPNSupport            [3] NID
 * }
 * ```
 * 
 * @class
 */
export
class BroadcastPLMNItem {
    constructor (
        /**
         * @summary `pLMNIdentity`.
         * @public
         * @readonly
         */
        readonly pLMNIdentity: PLMNID,
        /**
         * @summary `tAISliceSupportList`.
         * @public
         * @readonly
         */
        readonly tAISliceSupportList: TAISliceSupportList,
        /**
         * @summary `nPNSupport`.
         * @public
         * @readonly
         */
        readonly nPNSupport: NID
    ) {}

    /**
     * @summary Restructures an object into a BroadcastPLMNItem
     * @description
     * 
     * This takes an `object` and converts it to a `BroadcastPLMNItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BroadcastPLMNItem`.
     * @returns {BroadcastPLMNItem}
     */
    public static _from_object (_o: { [_K in keyof (BroadcastPLMNItem)]: (BroadcastPLMNItem)[_K] }): BroadcastPLMNItem {
        return new BroadcastPLMNItem(_o.pLMNIdentity, _o.tAISliceSupportList, _o.nPNSupport);
    }


}

/**
 * @summary The Leading Root Component Types of BroadcastPLMNItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BroadcastPLMNItem: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tAISliceSupportList", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nPNSupport", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of BroadcastPLMNItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BroadcastPLMNItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BroadcastPLMNItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BroadcastPLMNItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BroadcastPLMNItem: $.ASN1Decoder<BroadcastPLMNItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BroadcastPLMNItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BroadcastPLMNItem (el: _Element): BroadcastPLMNItem {
    if (!_cached_decoder_for_BroadcastPLMNItem) { _cached_decoder_for_BroadcastPLMNItem = function (el: _Element): BroadcastPLMNItem {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("BroadcastPLMNItem contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pLMNIdentity";
    sequence[1].name = "tAISliceSupportList";
    sequence[2].name = "nPNSupport";
    let pLMNIdentity!: PLMNID;
    let tAISliceSupportList!: TAISliceSupportList;
    let nPNSupport!: NID;
    pLMNIdentity = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[0]);
    tAISliceSupportList = $._decode_implicit<TAISliceSupportList>(() => _decode_TAISliceSupportList)(sequence[1]);
    nPNSupport = $._decode_implicit<NID>(() => _decode_NID)(sequence[2]);
    return new BroadcastPLMNItem(
        pLMNIdentity,
        tAISliceSupportList,
        nPNSupport,

    );
}; }
    return _cached_decoder_for_BroadcastPLMNItem(el);
}

let _cached_encoder_for_BroadcastPLMNItem: $.ASN1Encoder<BroadcastPLMNItem> | null = null;

/**
 * @summary Encodes a(n) BroadcastPLMNItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BroadcastPLMNItem, encoded as an ASN.1 Element.
 */
export
function _encode_BroadcastPLMNItem (value: BroadcastPLMNItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BroadcastPLMNItem) { _cached_encoder_for_BroadcastPLMNItem = function (value: BroadcastPLMNItem, elGetter: $.ASN1Encoder<BroadcastPLMNItem>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TAISliceSupportList, $.BER)(value.tAISliceSupportList, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NID, $.BER)(value.nPNSupport, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BroadcastPLMNItem(value, elGetter);
}


/* eslint-enable */
