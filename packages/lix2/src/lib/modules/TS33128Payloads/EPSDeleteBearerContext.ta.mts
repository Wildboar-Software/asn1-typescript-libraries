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
import { EPSBearerDeletionCauseValue, _decode_EPSBearerDeletionCauseValue, _encode_EPSBearerDeletionCauseValue } from "../TS33128Payloads/EPSBearerDeletionCauseValue.ta.mjs";
// export { EPSBearerDeletionCauseValue, _decode_EPSBearerDeletionCauseValue, _encode_EPSBearerDeletionCauseValue } from "../TS33128Payloads/EPSBearerDeletionCauseValue.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
// export { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
import { EPSRANNASCause, _decode_EPSRANNASCause, _encode_EPSRANNASCause } from "../TS33128Payloads/EPSRANNASCause.ta.mjs";
// export { EPSRANNASCause, _decode_EPSRANNASCause, _encode_EPSRANNASCause } from "../TS33128Payloads/EPSRANNASCause.ta.mjs";


/**
 * @summary EPSDeleteBearerContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDeleteBearerContext ::= SEQUENCE
 * {
 *     cause                        [1] EPSBearerDeletionCauseValue,
 *     ePSBearerID                  [2] EPSBearerID,
 *     protocolConfigurationOptions [3] PDNProtocolConfigurationOptions OPTIONAL,
 *     rANNASCause                  [4] EPSRANNASCause OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSDeleteBearerContext {
    constructor (
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EPSBearerDeletionCauseValue,
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `protocolConfigurationOptions`.
         * @public
         * @readonly
         */
        readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>,
        /**
         * @summary `rANNASCause`.
         * @public
         * @readonly
         */
        readonly rANNASCause: OPTIONAL<EPSRANNASCause>
    ) {}

    /**
     * @summary Restructures an object into a EPSDeleteBearerContext
     * @description
     * 
     * This takes an `object` and converts it to a `EPSDeleteBearerContext`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSDeleteBearerContext`.
     * @returns {EPSDeleteBearerContext}
     */
    public static _from_object (_o: { [_K in keyof (EPSDeleteBearerContext)]: (EPSDeleteBearerContext)[_K] }): EPSDeleteBearerContext {
        return new EPSDeleteBearerContext(_o.cause, _o.ePSBearerID, _o.protocolConfigurationOptions, _o.rANNASCause);
    }


}

/**
 * @summary The Leading Root Component Types of EPSDeleteBearerContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSDeleteBearerContext: $.ComponentSpec[] = [
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("protocolConfigurationOptions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rANNASCause", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EPSDeleteBearerContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSDeleteBearerContext: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSDeleteBearerContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSDeleteBearerContext: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSDeleteBearerContext: $.ASN1Decoder<EPSDeleteBearerContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSDeleteBearerContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSDeleteBearerContext (el: _Element): EPSDeleteBearerContext {
    if (!_cached_decoder_for_EPSDeleteBearerContext) { _cached_decoder_for_EPSDeleteBearerContext = function (el: _Element): EPSDeleteBearerContext {
    let cause!: EPSBearerDeletionCauseValue;
    let ePSBearerID!: EPSBearerID;
    let protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    let rANNASCause: OPTIONAL<EPSRANNASCause>;
    const callbacks: $.DecodingMap = {
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EPSBearerDeletionCauseValue>(() => _decode_EPSBearerDeletionCauseValue)(_el); },
        "ePSBearerID": (_el: _Element): void => { ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "protocolConfigurationOptions": (_el: _Element): void => { protocolConfigurationOptions = $._decode_implicit<PDNProtocolConfigurationOptions>(() => _decode_PDNProtocolConfigurationOptions)(_el); },
        "rANNASCause": (_el: _Element): void => { rANNASCause = $._decode_implicit<EPSRANNASCause>(() => _decode_EPSRANNASCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSDeleteBearerContext,
        _extension_additions_list_spec_for_EPSDeleteBearerContext,
        _root_component_type_list_2_spec_for_EPSDeleteBearerContext,
        undefined,
    );
    return new EPSDeleteBearerContext(
        cause,
        ePSBearerID,
        protocolConfigurationOptions,
        rANNASCause
    );
}; }
    return _cached_decoder_for_EPSDeleteBearerContext(el);
}

let _cached_encoder_for_EPSDeleteBearerContext: $.ASN1Encoder<EPSDeleteBearerContext> | null = null;

/**
 * @summary Encodes a(n) EPSDeleteBearerContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSDeleteBearerContext, encoded as an ASN.1 Element.
 */
export
function _encode_EPSDeleteBearerContext (value: EPSDeleteBearerContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSDeleteBearerContext) { _cached_encoder_for_EPSDeleteBearerContext = function (value: EPSDeleteBearerContext, elGetter: $.ASN1Encoder<EPSDeleteBearerContext>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerDeletionCauseValue, $.BER)(value.cause, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* IF_ABSENT  */ ((value.protocolConfigurationOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER)),
            /* IF_ABSENT  */ ((value.rANNASCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_EPSRANNASCause, $.BER)(value.rANNASCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSDeleteBearerContext(value, elGetter);
}


/* eslint-enable */
