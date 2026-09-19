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
import { ANNodeID, _decode_ANNodeID, _encode_ANNodeID } from "../TS33128Payloads/ANNodeID.ta.mjs";
// export { ANNodeID, _decode_ANNodeID, _encode_ANNodeID } from "../TS33128Payloads/ANNodeID.ta.mjs";
import { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";
// export { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";


/**
 * @summary GlobalRANNodeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalRANNodeID ::= SEQUENCE
 * {
 *     pLMNID                      [1] PLMNID,
 *     aNNodeID                    [2] ANNodeID,
 *     nID                         [3] NID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GlobalRANNodeID {
    constructor (
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: PLMNID,
        /**
         * @summary `aNNodeID`.
         * @public
         * @readonly
         */
        readonly aNNodeID: ANNodeID,
        /**
         * @summary `nID`.
         * @public
         * @readonly
         */
        readonly nID: OPTIONAL<NID>
    ) {}

    /**
     * @summary Restructures an object into a GlobalRANNodeID
     * @description
     * 
     * This takes an `object` and converts it to a `GlobalRANNodeID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GlobalRANNodeID`.
     * @returns {GlobalRANNodeID}
     */
    public static _from_object (_o: { [_K in keyof (GlobalRANNodeID)]: (GlobalRANNodeID)[_K] }): GlobalRANNodeID {
        return new GlobalRANNodeID(_o.pLMNID, _o.aNNodeID, _o.nID);
    }


}

/**
 * @summary The Leading Root Component Types of GlobalRANNodeID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GlobalRANNodeID: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aNNodeID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nID", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GlobalRANNodeID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GlobalRANNodeID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GlobalRANNodeID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GlobalRANNodeID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GlobalRANNodeID: $.ASN1Decoder<GlobalRANNodeID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GlobalRANNodeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GlobalRANNodeID (el: _Element): GlobalRANNodeID {
    if (!_cached_decoder_for_GlobalRANNodeID) { _cached_decoder_for_GlobalRANNodeID = function (el: _Element): GlobalRANNodeID {
    let pLMNID!: PLMNID;
    let aNNodeID!: ANNodeID;
    let nID: OPTIONAL<NID>;
    const callbacks: $.DecodingMap = {
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "aNNodeID": (_el: _Element): void => { aNNodeID = $._decode_explicit<ANNodeID>(() => _decode_ANNodeID)(_el); },
        "nID": (_el: _Element): void => { nID = $._decode_implicit<NID>(() => _decode_NID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GlobalRANNodeID,
        _extension_additions_list_spec_for_GlobalRANNodeID,
        _root_component_type_list_2_spec_for_GlobalRANNodeID,
        undefined,
    );
    return new GlobalRANNodeID(
        pLMNID,
        aNNodeID,
        nID
    );
}; }
    return _cached_decoder_for_GlobalRANNodeID(el);
}

let _cached_encoder_for_GlobalRANNodeID: $.ASN1Encoder<GlobalRANNodeID> | null = null;

/**
 * @summary Encodes a(n) GlobalRANNodeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlobalRANNodeID, encoded as an ASN.1 Element.
 */
export
function _encode_GlobalRANNodeID (value: GlobalRANNodeID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GlobalRANNodeID) { _cached_encoder_for_GlobalRANNodeID = function (value: GlobalRANNodeID, elGetter: $.ASN1Encoder<GlobalRANNodeID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ANNodeID, $.BER)(value.aNNodeID, $.BER),
            /* IF_ABSENT  */ ((value.nID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NID, $.BER)(value.nID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GlobalRANNodeID(value, elGetter);
}


/* eslint-enable */
