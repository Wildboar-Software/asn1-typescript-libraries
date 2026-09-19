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
import { ProfileRollbackResponse_cmdResult, ProfileRollbackResponse_cmdResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileRollbackResponse_cmdResult_rollbackNotAllowed /* IMPORTED_LONG_NAMED_INTEGER */, rollbackNotAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileRollbackResponse_cmdResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileRollbackResponse_cmdResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, commandError /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileRollbackResponse_cmdResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProfileRollbackResponse_cmdResult, _encode_ProfileRollbackResponse_cmdResult } from "../SGP32Definitions/ProfileRollbackResponse-cmdResult.ta.mjs";
// export { ProfileRollbackResponse_cmdResult, ProfileRollbackResponse_cmdResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileRollbackResponse_cmdResult_rollbackNotAllowed /* IMPORTED_LONG_NAMED_INTEGER */, rollbackNotAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileRollbackResponse_cmdResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileRollbackResponse_cmdResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, commandError /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileRollbackResponse_cmdResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProfileRollbackResponse_cmdResult, _encode_ProfileRollbackResponse_cmdResult } from "../SGP32Definitions/ProfileRollbackResponse-cmdResult.ta.mjs";
import { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";
// export { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";


/**
 * @summary ProfileRollbackResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileRollbackResponse ::= [88] SEQUENCE { -- Tag 'BF58'
 *     cmdResult INTEGER {
 *         ok(0),
 *         rollbackNotAllowed(1), -- Usage of rollback was not granted by the eIM
 *         catBusy(5),
 *         commandError(7),
 *         undefinedError(127)
 *     },
 *     eUICCPackageResult [81] EuiccPackageResult OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProfileRollbackResponse {
    constructor (
        /**
         * @summary `cmdResult`.
         * @public
         * @readonly
         */
        readonly cmdResult: ProfileRollbackResponse_cmdResult,
        /**
         * @summary `eUICCPackageResult`.
         * @public
         * @readonly
         */
        readonly eUICCPackageResult: OPTIONAL<EuiccPackageResult>
    ) {}

    /**
     * @summary Restructures an object into a ProfileRollbackResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileRollbackResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileRollbackResponse`.
     * @returns {ProfileRollbackResponse}
     */
    public static _from_object (_o: { [_K in keyof (ProfileRollbackResponse)]: (ProfileRollbackResponse)[_K] }): ProfileRollbackResponse {
        return new ProfileRollbackResponse(_o.cmdResult, _o.eUICCPackageResult);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileRollbackResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileRollbackResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("cmdResult", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eUICCPackageResult", true, $.hasTag(_TagClass.context, 81))
];

/**
 * @summary The Trailing Root Component Types of ProfileRollbackResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileRollbackResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileRollbackResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileRollbackResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileRollbackResponse: $.ASN1Decoder<ProfileRollbackResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileRollbackResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileRollbackResponse (el: _Element): ProfileRollbackResponse {
    if (!_cached_decoder_for_ProfileRollbackResponse) { _cached_decoder_for_ProfileRollbackResponse = $._decode_implicit<ProfileRollbackResponse>(() => function (el: _Element): ProfileRollbackResponse {
    let cmdResult!: ProfileRollbackResponse_cmdResult;
    let eUICCPackageResult: OPTIONAL<EuiccPackageResult>;
    const callbacks: $.DecodingMap = {
        "cmdResult": (_el: _Element): void => { cmdResult = _decode_ProfileRollbackResponse_cmdResult(_el); },
        "eUICCPackageResult": (_el: _Element): void => { eUICCPackageResult = $._decode_implicit<EuiccPackageResult>(() => _decode_EuiccPackageResult)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileRollbackResponse,
        _extension_additions_list_spec_for_ProfileRollbackResponse,
        _root_component_type_list_2_spec_for_ProfileRollbackResponse,
        undefined,
    );
    return new ProfileRollbackResponse(
        cmdResult,
        eUICCPackageResult
    );
}); }
    return _cached_decoder_for_ProfileRollbackResponse(el);
}

let _cached_encoder_for_ProfileRollbackResponse: $.ASN1Encoder<ProfileRollbackResponse> | null = null;

/**
 * @summary Encodes a(n) ProfileRollbackResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileRollbackResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileRollbackResponse (value: ProfileRollbackResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileRollbackResponse) { _cached_encoder_for_ProfileRollbackResponse = $._encode_implicit(_TagClass.context, 88, () => function (value: ProfileRollbackResponse, elGetter: $.ASN1Encoder<ProfileRollbackResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProfileRollbackResponse_cmdResult(value.cmdResult, $.BER),
            /* IF_ABSENT  */ ((value.eUICCPackageResult === undefined) ? undefined : $._encode_implicit(_TagClass.context, 81, () => _encode_EuiccPackageResult, $.BER)(value.eUICCPackageResult, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProfileRollbackResponse(value, elGetter);
}


/* eslint-enable */
