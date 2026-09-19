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
import { CtxParams1, _decode_CtxParams1, _encode_CtxParams1 } from "../RSPDefinitions/CtxParams1.ta.mjs";
// export { CtxParams1, _decode_CtxParams1, _encode_CtxParams1 } from "../RSPDefinitions/CtxParams1.ta.mjs";


/**
 * @summary CompactEuiccSigned1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactEuiccSigned1 ::= SEQUENCE {
 *     extCardResource [4] OCTET STRING, -- Extended Card Resource Information according to ETSI TS 102 226 extracted from euiccInfo2,
 *     ctxParams1 [2] CtxParams1 OPTIONAL -- ctxParams1 may be left out by IPA if eIM ctxParams1 was received from the eIM
 * }
 * ```
 * 
 * @class
 */
export
class CompactEuiccSigned1 {
    constructor (
        /**
         * @summary `extCardResource`.
         * @public
         * @readonly
         */
        readonly extCardResource: OCTET_STRING,
        /**
         * @summary `ctxParams1`.
         * @public
         * @readonly
         */
        readonly ctxParams1: OPTIONAL<CtxParams1>
    ) {}

    /**
     * @summary Restructures an object into a CompactEuiccSigned1
     * @description
     * 
     * This takes an `object` and converts it to a `CompactEuiccSigned1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactEuiccSigned1`.
     * @returns {CompactEuiccSigned1}
     */
    public static _from_object (_o: { [_K in keyof (CompactEuiccSigned1)]: (CompactEuiccSigned1)[_K] }): CompactEuiccSigned1 {
        return new CompactEuiccSigned1(_o.extCardResource, _o.ctxParams1);
    }


}

/**
 * @summary The Leading Root Component Types of CompactEuiccSigned1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactEuiccSigned1: $.ComponentSpec[] = [
    new $.ComponentSpec("extCardResource", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ctxParams1", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CompactEuiccSigned1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactEuiccSigned1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactEuiccSigned1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactEuiccSigned1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactEuiccSigned1: $.ASN1Decoder<CompactEuiccSigned1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactEuiccSigned1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactEuiccSigned1 (el: _Element): CompactEuiccSigned1 {
    if (!_cached_decoder_for_CompactEuiccSigned1) { _cached_decoder_for_CompactEuiccSigned1 = function (el: _Element): CompactEuiccSigned1 {
    let extCardResource!: OCTET_STRING;
    let ctxParams1: OPTIONAL<CtxParams1>;
    const callbacks: $.DecodingMap = {
        "extCardResource": (_el: _Element): void => { extCardResource = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ctxParams1": (_el: _Element): void => { ctxParams1 = $._decode_explicit<CtxParams1>(() => _decode_CtxParams1)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompactEuiccSigned1,
        _extension_additions_list_spec_for_CompactEuiccSigned1,
        _root_component_type_list_2_spec_for_CompactEuiccSigned1,
        undefined,
    );
    return new CompactEuiccSigned1(
        extCardResource,
        ctxParams1
    );
}; }
    return _cached_decoder_for_CompactEuiccSigned1(el);
}

let _cached_encoder_for_CompactEuiccSigned1: $.ASN1Encoder<CompactEuiccSigned1> | null = null;

/**
 * @summary Encodes a(n) CompactEuiccSigned1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactEuiccSigned1, encoded as an ASN.1 Element.
 */
export
function _encode_CompactEuiccSigned1 (value: CompactEuiccSigned1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactEuiccSigned1) { _cached_encoder_for_CompactEuiccSigned1 = function (value: CompactEuiccSigned1, elGetter: $.ASN1Encoder<CompactEuiccSigned1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.extCardResource, $.BER),
            /* IF_ABSENT  */ ((value.ctxParams1 === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_CtxParams1, $.BER)(value.ctxParams1, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactEuiccSigned1(value, elGetter);
}


/* eslint-enable */
