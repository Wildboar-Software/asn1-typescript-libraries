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
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { EPSBearerQOS, _decode_EPSBearerQOS, _encode_EPSBearerQOS } from "../TS33128Payloads/EPSBearerQOS.ta.mjs";
// export { EPSBearerQOS, _decode_EPSBearerQOS, _encode_EPSBearerQOS } from "../TS33128Payloads/EPSBearerQOS.ta.mjs";


/**
 * @summary EPSBearerContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerContext ::= SEQUENCE
 * {
 *     ePSBearerID     [1] EPSBearerID,
 *     uPGTPTunnelInfo [2] GTPTunnelInfo,
 *     bearerQOS       [3] EPSBearerQOS
 * }
 * ```
 * 
 * @class
 */
export
class EPSBearerContext {
    constructor (
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `uPGTPTunnelInfo`.
         * @public
         * @readonly
         */
        readonly uPGTPTunnelInfo: GTPTunnelInfo,
        /**
         * @summary `bearerQOS`.
         * @public
         * @readonly
         */
        readonly bearerQOS: EPSBearerQOS
    ) {}

    /**
     * @summary Restructures an object into a EPSBearerContext
     * @description
     * 
     * This takes an `object` and converts it to a `EPSBearerContext`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSBearerContext`.
     * @returns {EPSBearerContext}
     */
    public static _from_object (_o: { [_K in keyof (EPSBearerContext)]: (EPSBearerContext)[_K] }): EPSBearerContext {
        return new EPSBearerContext(_o.ePSBearerID, _o.uPGTPTunnelInfo, _o.bearerQOS);
    }


}

/**
 * @summary The Leading Root Component Types of EPSBearerContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSBearerContext: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uPGTPTunnelInfo", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bearerQOS", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EPSBearerContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSBearerContext: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSBearerContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSBearerContext: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSBearerContext: $.ASN1Decoder<EPSBearerContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerContext (el: _Element): EPSBearerContext {
    if (!_cached_decoder_for_EPSBearerContext) { _cached_decoder_for_EPSBearerContext = function (el: _Element): EPSBearerContext {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EPSBearerContext contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ePSBearerID";
    sequence[1].name = "uPGTPTunnelInfo";
    sequence[2].name = "bearerQOS";
    let ePSBearerID!: EPSBearerID;
    let uPGTPTunnelInfo!: GTPTunnelInfo;
    let bearerQOS!: EPSBearerQOS;
    ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(sequence[0]);
    uPGTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(sequence[1]);
    bearerQOS = $._decode_implicit<EPSBearerQOS>(() => _decode_EPSBearerQOS)(sequence[2]);
    return new EPSBearerContext(
        ePSBearerID,
        uPGTPTunnelInfo,
        bearerQOS,

    );
}; }
    return _cached_decoder_for_EPSBearerContext(el);
}

let _cached_encoder_for_EPSBearerContext: $.ASN1Encoder<EPSBearerContext> | null = null;

/**
 * @summary Encodes a(n) EPSBearerContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerContext, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerContext (value: EPSBearerContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerContext) { _cached_encoder_for_EPSBearerContext = function (value: EPSBearerContext, elGetter: $.ASN1Encoder<EPSBearerContext>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_GTPTunnelInfo, $.BER)(value.uPGTPTunnelInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSBearerQOS, $.BER)(value.bearerQOS, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSBearerContext(value, elGetter);
}


/* eslint-enable */
