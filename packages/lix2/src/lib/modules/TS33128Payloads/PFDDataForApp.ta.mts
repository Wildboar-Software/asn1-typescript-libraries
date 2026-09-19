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
import { PFDs, _decode_PFDs, _encode_PFDs } from "../TS33128Payloads/PFDs.ta.mjs";
// export { PFDs, _decode_PFDs, _encode_PFDs } from "../TS33128Payloads/PFDs.ta.mjs";


/**
 * @summary PFDDataForApp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDDataForApp ::= SEQUENCE
 * {
 *     aPPId [1] UTF8String,
 *     pFDs  [2] PFDs
 * }
 * ```
 * 
 * @class
 */
export
class PFDDataForApp {
    constructor (
        /**
         * @summary `aPPId`.
         * @public
         * @readonly
         */
        readonly aPPId: UTF8String,
        /**
         * @summary `pFDs`.
         * @public
         * @readonly
         */
        readonly pFDs: PFDs
    ) {}

    /**
     * @summary Restructures an object into a PFDDataForApp
     * @description
     * 
     * This takes an `object` and converts it to a `PFDDataForApp`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFDDataForApp`.
     * @returns {PFDDataForApp}
     */
    public static _from_object (_o: { [_K in keyof (PFDDataForApp)]: (PFDDataForApp)[_K] }): PFDDataForApp {
        return new PFDDataForApp(_o.aPPId, _o.pFDs);
    }


}

/**
 * @summary The Leading Root Component Types of PFDDataForApp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFDDataForApp: $.ComponentSpec[] = [
    new $.ComponentSpec("aPPId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pFDs", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PFDDataForApp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFDDataForApp: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFDDataForApp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFDDataForApp: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFDDataForApp: $.ASN1Decoder<PFDDataForApp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDDataForApp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDDataForApp (el: _Element): PFDDataForApp {
    if (!_cached_decoder_for_PFDDataForApp) { _cached_decoder_for_PFDDataForApp = function (el: _Element): PFDDataForApp {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PFDDataForApp contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aPPId";
    sequence[1].name = "pFDs";
    let aPPId!: UTF8String;
    let pFDs!: PFDs;
    aPPId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    pFDs = $._decode_implicit<PFDs>(() => _decode_PFDs)(sequence[1]);
    return new PFDDataForApp(
        aPPId,
        pFDs,

    );
}; }
    return _cached_decoder_for_PFDDataForApp(el);
}

let _cached_encoder_for_PFDDataForApp: $.ASN1Encoder<PFDDataForApp> | null = null;

/**
 * @summary Encodes a(n) PFDDataForApp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDDataForApp, encoded as an ASN.1 Element.
 */
export
function _encode_PFDDataForApp (value: PFDDataForApp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDDataForApp) { _cached_encoder_for_PFDDataForApp = function (value: PFDDataForApp, elGetter: $.ASN1Encoder<PFDDataForApp>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.aPPId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PFDs, $.BER)(value.pFDs, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PFDDataForApp(value, elGetter);
}


/* eslint-enable */
