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
import { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
// export { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
import { EPSBearerDeletionCauseValue, _decode_EPSBearerDeletionCauseValue, _encode_EPSBearerDeletionCauseValue } from "../TS33128Payloads/EPSBearerDeletionCauseValue.ta.mjs";
// export { EPSBearerDeletionCauseValue, _decode_EPSBearerDeletionCauseValue, _encode_EPSBearerDeletionCauseValue } from "../TS33128Payloads/EPSBearerDeletionCauseValue.ta.mjs";
import { EPSDeleteBearerResponse, _decode_EPSDeleteBearerResponse, _encode_EPSDeleteBearerResponse } from "../TS33128Payloads/EPSDeleteBearerResponse.ta.mjs";
// export { EPSDeleteBearerResponse, _decode_EPSDeleteBearerResponse, _encode_EPSDeleteBearerResponse } from "../TS33128Payloads/EPSDeleteBearerResponse.ta.mjs";


/**
 * @summary EPSBearersDeleted
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearersDeleted ::= SEQUENCE
 * {
 *     linkedEPSBearerID            [1] EPSBearerID OPTIONAL,
 *     ePSBearerIDs                 [2] SEQUENCE OF EPSBearerID OPTIONAL,
 *     protocolConfigurationOptions [3] PDNProtocolConfigurationOptions OPTIONAL,
 *     cause                        [4] EPSBearerDeletionCauseValue OPTIONAL,
 *     deleteBearerResponse         [5] EPSDeleteBearerResponse
 * }
 * ```
 * 
 * @class
 */
export
class EPSBearersDeleted {
    constructor (
        /**
         * @summary `linkedEPSBearerID`.
         * @public
         * @readonly
         */
        readonly linkedEPSBearerID: OPTIONAL<EPSBearerID>,
        /**
         * @summary `ePSBearerIDs`.
         * @public
         * @readonly
         */
        readonly ePSBearerIDs: OPTIONAL<EPSBearerID[]>,
        /**
         * @summary `protocolConfigurationOptions`.
         * @public
         * @readonly
         */
        readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<EPSBearerDeletionCauseValue>,
        /**
         * @summary `deleteBearerResponse`.
         * @public
         * @readonly
         */
        readonly deleteBearerResponse: EPSDeleteBearerResponse
    ) {}

    /**
     * @summary Restructures an object into a EPSBearersDeleted
     * @description
     * 
     * This takes an `object` and converts it to a `EPSBearersDeleted`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSBearersDeleted`.
     * @returns {EPSBearersDeleted}
     */
    public static _from_object (_o: { [_K in keyof (EPSBearersDeleted)]: (EPSBearersDeleted)[_K] }): EPSBearersDeleted {
        return new EPSBearersDeleted(_o.linkedEPSBearerID, _o.ePSBearerIDs, _o.protocolConfigurationOptions, _o.cause, _o.deleteBearerResponse);
    }


}

/**
 * @summary The Leading Root Component Types of EPSBearersDeleted
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSBearersDeleted: $.ComponentSpec[] = [
    new $.ComponentSpec("linkedEPSBearerID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ePSBearerIDs", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("protocolConfigurationOptions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("deleteBearerResponse", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EPSBearersDeleted
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSBearersDeleted: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSBearersDeleted
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSBearersDeleted: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSBearersDeleted: $.ASN1Decoder<EPSBearersDeleted> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearersDeleted
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearersDeleted (el: _Element): EPSBearersDeleted {
    if (!_cached_decoder_for_EPSBearersDeleted) { _cached_decoder_for_EPSBearersDeleted = function (el: _Element): EPSBearersDeleted {
    let linkedEPSBearerID: OPTIONAL<EPSBearerID>;
    let ePSBearerIDs: OPTIONAL<EPSBearerID[]>;
    let protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    let cause: OPTIONAL<EPSBearerDeletionCauseValue>;
    let deleteBearerResponse!: EPSDeleteBearerResponse;
    const callbacks: $.DecodingMap = {
        "linkedEPSBearerID": (_el: _Element): void => { linkedEPSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "ePSBearerIDs": (_el: _Element): void => { ePSBearerIDs = $._decode_implicit<EPSBearerID[]>(() => $._decodeSequenceOf<EPSBearerID>(() => _decode_EPSBearerID))(_el); },
        "protocolConfigurationOptions": (_el: _Element): void => { protocolConfigurationOptions = $._decode_implicit<PDNProtocolConfigurationOptions>(() => _decode_PDNProtocolConfigurationOptions)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EPSBearerDeletionCauseValue>(() => _decode_EPSBearerDeletionCauseValue)(_el); },
        "deleteBearerResponse": (_el: _Element): void => { deleteBearerResponse = $._decode_implicit<EPSDeleteBearerResponse>(() => _decode_EPSDeleteBearerResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSBearersDeleted,
        _extension_additions_list_spec_for_EPSBearersDeleted,
        _root_component_type_list_2_spec_for_EPSBearersDeleted,
        undefined,
    );
    return new EPSBearersDeleted(
        linkedEPSBearerID,
        ePSBearerIDs,
        protocolConfigurationOptions,
        cause,
        deleteBearerResponse
    );
}; }
    return _cached_decoder_for_EPSBearersDeleted(el);
}

let _cached_encoder_for_EPSBearersDeleted: $.ASN1Encoder<EPSBearersDeleted> | null = null;

/**
 * @summary Encodes a(n) EPSBearersDeleted into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearersDeleted, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearersDeleted (value: EPSBearersDeleted, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearersDeleted) { _cached_encoder_for_EPSBearersDeleted = function (value: EPSBearersDeleted, elGetter: $.ASN1Encoder<EPSBearersDeleted>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.linkedEPSBearerID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.linkedEPSBearerID, $.BER)),
            /* IF_ABSENT  */ ((value.ePSBearerIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<EPSBearerID>(() => _encode_EPSBearerID, $.BER), $.BER)(value.ePSBearerIDs, $.BER)),
            /* IF_ABSENT  */ ((value.protocolConfigurationOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerDeletionCauseValue, $.BER)(value.cause, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EPSDeleteBearerResponse, $.BER)(value.deleteBearerResponse, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSBearersDeleted(value, elGetter);
}


/* eslint-enable */
