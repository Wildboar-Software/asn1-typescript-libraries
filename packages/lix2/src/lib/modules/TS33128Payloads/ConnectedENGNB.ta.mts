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
import { GNbID, _decode_GNbID, _encode_GNbID } from "../TS33128Payloads/GNbID.ta.mjs";
// export { GNbID, _decode_GNbID, _encode_GNbID } from "../TS33128Payloads/GNbID.ta.mjs";
import { TACList, _decode_TACList, _encode_TACList } from "../TS33128Payloads/TACList.ta.mjs";
// export { TACList, _decode_TACList, _encode_TACList } from "../TS33128Payloads/TACList.ta.mjs";
import { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";
// export { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";


/**
 * @summary ConnectedENGNB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedENGNB ::= SEQUENCE
 * {
 *     eNGNBID         [1] GNbID,
 *     supportedTAList [2] TACList,
 *     broadcastPLMN   [3] PLMNList
 * }
 * ```
 * 
 * @class
 */
export
class ConnectedENGNB {
    constructor (
        /**
         * @summary `eNGNBID`.
         * @public
         * @readonly
         */
        readonly eNGNBID: GNbID,
        /**
         * @summary `supportedTAList`.
         * @public
         * @readonly
         */
        readonly supportedTAList: TACList,
        /**
         * @summary `broadcastPLMN`.
         * @public
         * @readonly
         */
        readonly broadcastPLMN: PLMNList
    ) {}

    /**
     * @summary Restructures an object into a ConnectedENGNB
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectedENGNB`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectedENGNB`.
     * @returns {ConnectedENGNB}
     */
    public static _from_object (_o: { [_K in keyof (ConnectedENGNB)]: (ConnectedENGNB)[_K] }): ConnectedENGNB {
        return new ConnectedENGNB(_o.eNGNBID, _o.supportedTAList, _o.broadcastPLMN);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectedENGNB
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectedENGNB: $.ComponentSpec[] = [
    new $.ComponentSpec("eNGNBID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supportedTAList", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("broadcastPLMN", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ConnectedENGNB
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectedENGNB: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectedENGNB
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectedENGNB: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectedENGNB: $.ASN1Decoder<ConnectedENGNB> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectedENGNB
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectedENGNB (el: _Element): ConnectedENGNB {
    if (!_cached_decoder_for_ConnectedENGNB) { _cached_decoder_for_ConnectedENGNB = function (el: _Element): ConnectedENGNB {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ConnectedENGNB contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eNGNBID";
    sequence[1].name = "supportedTAList";
    sequence[2].name = "broadcastPLMN";
    let eNGNBID!: GNbID;
    let supportedTAList!: TACList;
    let broadcastPLMN!: PLMNList;
    eNGNBID = $._decode_implicit<GNbID>(() => _decode_GNbID)(sequence[0]);
    supportedTAList = $._decode_implicit<TACList>(() => _decode_TACList)(sequence[1]);
    broadcastPLMN = $._decode_implicit<PLMNList>(() => _decode_PLMNList)(sequence[2]);
    return new ConnectedENGNB(
        eNGNBID,
        supportedTAList,
        broadcastPLMN,

    );
}; }
    return _cached_decoder_for_ConnectedENGNB(el);
}

let _cached_encoder_for_ConnectedENGNB: $.ASN1Encoder<ConnectedENGNB> | null = null;

/**
 * @summary Encodes a(n) ConnectedENGNB into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectedENGNB, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectedENGNB (value: ConnectedENGNB, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectedENGNB) { _cached_encoder_for_ConnectedENGNB = function (value: ConnectedENGNB, elGetter: $.ASN1Encoder<ConnectedENGNB>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GNbID, $.BER)(value.eNGNBID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TACList, $.BER)(value.supportedTAList, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PLMNList, $.BER)(value.broadcastPLMN, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectedENGNB(value, elGetter);
}


/* eslint-enable */
