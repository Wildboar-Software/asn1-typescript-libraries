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
import { EPSBearerModificationCauseValue, _decode_EPSBearerModificationCauseValue, _encode_EPSBearerModificationCauseValue } from "../TS33128Payloads/EPSBearerModificationCauseValue.ta.mjs";
// export { EPSBearerModificationCauseValue, _decode_EPSBearerModificationCauseValue, _encode_EPSBearerModificationCauseValue } from "../TS33128Payloads/EPSBearerModificationCauseValue.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { EPSBearerQOS, _decode_EPSBearerQOS, _encode_EPSBearerQOS } from "../TS33128Payloads/EPSBearerQOS.ta.mjs";
// export { EPSBearerQOS, _decode_EPSBearerQOS, _encode_EPSBearerQOS } from "../TS33128Payloads/EPSBearerQOS.ta.mjs";
import { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
// export { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";


/**
 * @summary EPSBearerContextModified
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerContextModified ::= SEQUENCE
 * {
 *     ePSBearerID                  [1] EPSBearerID,
 *     cause                        [2] EPSBearerModificationCauseValue,
 *     gTPTunnelInfo                [3] GTPTunnelInfo OPTIONAL,
 *     bearerQOS                    [4] EPSBearerQOS OPTIONAL,
 *     protocolConfigurationOptions [5] PDNProtocolConfigurationOptions OPTIONAL,
 *     linkedBearerIDs              [6] SEQUENCE OF EPSBearerID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSBearerContextModified {
    constructor (
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EPSBearerModificationCauseValue,
        /**
         * @summary `gTPTunnelInfo`.
         * @public
         * @readonly
         */
        readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>,
        /**
         * @summary `bearerQOS`.
         * @public
         * @readonly
         */
        readonly bearerQOS: OPTIONAL<EPSBearerQOS>,
        /**
         * @summary `protocolConfigurationOptions`.
         * @public
         * @readonly
         */
        readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>,
        /**
         * @summary `linkedBearerIDs`.
         * @public
         * @readonly
         */
        readonly linkedBearerIDs: OPTIONAL<EPSBearerID[]>
    ) {}

    /**
     * @summary Restructures an object into a EPSBearerContextModified
     * @description
     * 
     * This takes an `object` and converts it to a `EPSBearerContextModified`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSBearerContextModified`.
     * @returns {EPSBearerContextModified}
     */
    public static _from_object (_o: { [_K in keyof (EPSBearerContextModified)]: (EPSBearerContextModified)[_K] }): EPSBearerContextModified {
        return new EPSBearerContextModified(_o.ePSBearerID, _o.cause, _o.gTPTunnelInfo, _o.bearerQOS, _o.protocolConfigurationOptions, _o.linkedBearerIDs);
    }


}

/**
 * @summary The Leading Root Component Types of EPSBearerContextModified
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSBearerContextModified: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bearerQOS", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("protocolConfigurationOptions", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("linkedBearerIDs", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EPSBearerContextModified
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSBearerContextModified: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSBearerContextModified
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSBearerContextModified: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSBearerContextModified: $.ASN1Decoder<EPSBearerContextModified> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerContextModified
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerContextModified (el: _Element): EPSBearerContextModified {
    if (!_cached_decoder_for_EPSBearerContextModified) { _cached_decoder_for_EPSBearerContextModified = function (el: _Element): EPSBearerContextModified {
    let ePSBearerID!: EPSBearerID;
    let cause!: EPSBearerModificationCauseValue;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let bearerQOS: OPTIONAL<EPSBearerQOS>;
    let protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    let linkedBearerIDs: OPTIONAL<EPSBearerID[]>;
    const callbacks: $.DecodingMap = {
        "ePSBearerID": (_el: _Element): void => { ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EPSBearerModificationCauseValue>(() => _decode_EPSBearerModificationCauseValue)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "bearerQOS": (_el: _Element): void => { bearerQOS = $._decode_implicit<EPSBearerQOS>(() => _decode_EPSBearerQOS)(_el); },
        "protocolConfigurationOptions": (_el: _Element): void => { protocolConfigurationOptions = $._decode_implicit<PDNProtocolConfigurationOptions>(() => _decode_PDNProtocolConfigurationOptions)(_el); },
        "linkedBearerIDs": (_el: _Element): void => { linkedBearerIDs = $._decode_implicit<EPSBearerID[]>(() => $._decodeSequenceOf<EPSBearerID>(() => _decode_EPSBearerID))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSBearerContextModified,
        _extension_additions_list_spec_for_EPSBearerContextModified,
        _root_component_type_list_2_spec_for_EPSBearerContextModified,
        undefined,
    );
    return new EPSBearerContextModified(
        ePSBearerID,
        cause,
        gTPTunnelInfo,
        bearerQOS,
        protocolConfigurationOptions,
        linkedBearerIDs
    );
}; }
    return _cached_decoder_for_EPSBearerContextModified(el);
}

let _cached_encoder_for_EPSBearerContextModified: $.ASN1Encoder<EPSBearerContextModified> | null = null;

/**
 * @summary Encodes a(n) EPSBearerContextModified into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerContextModified, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerContextModified (value: EPSBearerContextModified, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerContextModified) { _cached_encoder_for_EPSBearerContextModified = function (value: EPSBearerContextModified, elGetter: $.ASN1Encoder<EPSBearerContextModified>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSBearerModificationCauseValue, $.BER)(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.gTPTunnelInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER)),
            /* IF_ABSENT  */ ((value.bearerQOS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerQOS, $.BER)(value.bearerQOS, $.BER)),
            /* IF_ABSENT  */ ((value.protocolConfigurationOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER)),
            /* IF_ABSENT  */ ((value.linkedBearerIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<EPSBearerID>(() => _encode_EPSBearerID, $.BER), $.BER)(value.linkedBearerIDs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSBearerContextModified(value, elGetter);
}


/* eslint-enable */
