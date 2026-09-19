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
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";


/**
 * @summary NEF5GVNGroupDeletion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEF5GVNGroupDeletion ::= SEQUENCE
 * {
 *     aFID            [1] AFID,
 *     gPSI            [2] GPSI,
 *     externalGroupID [3] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class NEF5GVNGroupDeletion {
    constructor (
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `externalGroupID`.
         * @public
         * @readonly
         */
        readonly externalGroupID: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a NEF5GVNGroupDeletion
     * @description
     * 
     * This takes an `object` and converts it to a `NEF5GVNGroupDeletion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEF5GVNGroupDeletion`.
     * @returns {NEF5GVNGroupDeletion}
     */
    public static _from_object (_o: { [_K in keyof (NEF5GVNGroupDeletion)]: (NEF5GVNGroupDeletion)[_K] }): NEF5GVNGroupDeletion {
        return new NEF5GVNGroupDeletion(_o.aFID, _o.gPSI, _o.externalGroupID);
    }


}

/**
 * @summary The Leading Root Component Types of NEF5GVNGroupDeletion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEF5GVNGroupDeletion: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalGroupID", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NEF5GVNGroupDeletion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEF5GVNGroupDeletion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEF5GVNGroupDeletion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEF5GVNGroupDeletion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEF5GVNGroupDeletion: $.ASN1Decoder<NEF5GVNGroupDeletion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEF5GVNGroupDeletion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEF5GVNGroupDeletion (el: _Element): NEF5GVNGroupDeletion {
    if (!_cached_decoder_for_NEF5GVNGroupDeletion) { _cached_decoder_for_NEF5GVNGroupDeletion = function (el: _Element): NEF5GVNGroupDeletion {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("NEF5GVNGroupDeletion contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFID";
    sequence[1].name = "gPSI";
    sequence[2].name = "externalGroupID";
    let aFID!: AFID;
    let gPSI!: GPSI;
    let externalGroupID!: OCTET_STRING;
    aFID = $._decode_implicit<AFID>(() => _decode_AFID)(sequence[0]);
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[1]);
    externalGroupID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new NEF5GVNGroupDeletion(
        aFID,
        gPSI,
        externalGroupID,

    );
}; }
    return _cached_decoder_for_NEF5GVNGroupDeletion(el);
}

let _cached_encoder_for_NEF5GVNGroupDeletion: $.ASN1Encoder<NEF5GVNGroupDeletion> | null = null;

/**
 * @summary Encodes a(n) NEF5GVNGroupDeletion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEF5GVNGroupDeletion, encoded as an ASN.1 Element.
 */
export
function _encode_NEF5GVNGroupDeletion (value: NEF5GVNGroupDeletion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEF5GVNGroupDeletion) { _cached_encoder_for_NEF5GVNGroupDeletion = function (value: NEF5GVNGroupDeletion, elGetter: $.ASN1Encoder<NEF5GVNGroupDeletion>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.externalGroupID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEF5GVNGroupDeletion(value, elGetter);
}


/* eslint-enable */
