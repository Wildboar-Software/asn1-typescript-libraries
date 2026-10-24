/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EuiccMemoryResetResponse_resetResult, _decode_EuiccMemoryResetResponse_resetResult, _encode_EuiccMemoryResetResponse_resetResult } from "../SGP32Definitions/EuiccMemoryResetResponse-resetResult.ta.mjs";
import { type EuiccMemoryResetResponse_resetEimResult, _decode_EuiccMemoryResetResponse_resetEimResult, _encode_EuiccMemoryResetResponse_resetEimResult } from "../SGP32Definitions/EuiccMemoryResetResponse-resetEimResult.ta.mjs";
import { type EuiccMemoryResetResponse_resetImmediateEnableConfigResult, _decode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult, _encode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult } from "../SGP32Definitions/EuiccMemoryResetResponse-resetImmediateEnableConfigResult.ta.mjs";


/**
 * @summary EuiccMemoryResetResponse
 * @description
 * 
 * ES10b.eUICCMemoryReset response (SGP.32 v1.2, section 5.9.5). Tag 'BF64'.
 * resetResult is always present. resetEimResult is added when
 * resetEimConfigData was set and resetResult is ok or nothingToDelete.
 * resetImmediateEnableConfigResult is added when resetImmediateEnableConfig
 * was set and resetResult is ok or nothingToDelete.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse ::= [100] SEQUENCE { -- Tag 'BF64'
 *     resetResult INTEGER {ok(0), nothingToDelete(1), catBusy(5), ecallActive(104), undefinedError(127)},
 *     resetEimResult INTEGER {ok(0), nothingToDelete(1), eimResetNotSupported(2), undefinedError(127)} OPTIONAL,
 *     resetImmediateEnableConfigResult INTEGER {ok(0), resetIECNotSupported (1), undefinedError(127)} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EuiccMemoryResetResponse {
    /**
     * @summary `resetResult`.
     * @description
     * Whether any selected Profile was deleted, or why Profile deletion stopped
     * (SGP.32 v1.2, section 5.9.5). ok means at least one Profile was deleted.
     * nothingToDelete means none was. Both of those also confirm a successful
     * default SM-DP+ address reset when that bit was set.
     * @public
     * @readonly
     */
    public readonly resetResult: EuiccMemoryResetResponse_resetResult;
    /**
     * @summary `resetEimResult`.
     * @description
     * Result of removing every Associated eIM's configuration. Included only when
     * resetEimConfigData was set and resetResult is ok or nothingToDelete (SGP.32
     * v1.2, section 5.9.5).
     * @public
     * @readonly
     */
    public readonly resetEimResult?: OPTIONAL<EuiccMemoryResetResponse_resetEimResult>;
    /**
     * @summary `resetImmediateEnableConfigResult`.
     * @description
     * Result of clearing immediate Profile enabling. Included only when
     * resetImmediateEnableConfig was set and resetResult is ok or nothingToDelete
     * (SGP.32 v1.2, section 5.9.5).
     * @public
     * @readonly
     */
    public readonly resetImmediateEnableConfigResult?: OPTIONAL<EuiccMemoryResetResponse_resetImmediateEnableConfigResult>;

    constructor (
        resetResult: EuiccMemoryResetResponse_resetResult,
        resetEimResult?: OPTIONAL<EuiccMemoryResetResponse_resetEimResult>,
        resetImmediateEnableConfigResult?: OPTIONAL<EuiccMemoryResetResponse_resetImmediateEnableConfigResult>
    ) {
        this.resetResult = resetResult;
        this.resetEimResult = resetEimResult;
        this.resetImmediateEnableConfigResult = resetImmediateEnableConfigResult;
    }

    /**
     * @summary Restructures an object into a EuiccMemoryResetResponse
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccMemoryResetResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccMemoryResetResponse`.
     * @returns {EuiccMemoryResetResponse}
     */
    public static _from_object (_o: { [_K in keyof (EuiccMemoryResetResponse)]: (EuiccMemoryResetResponse)[_K] }): EuiccMemoryResetResponse {
        return new EuiccMemoryResetResponse(_o.resetResult, _o.resetEimResult, _o.resetImmediateEnableConfigResult);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccMemoryResetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccMemoryResetResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("resetResult", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("resetEimResult", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("resetImmediateEnableConfigResult", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EuiccMemoryResetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccMemoryResetResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccMemoryResetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccMemoryResetResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccMemoryResetResponse: $.ASN1Decoder<EuiccMemoryResetResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccMemoryResetResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccMemoryResetResponse (el: _Element): EuiccMemoryResetResponse {
    if (!_cached_decoder_for_EuiccMemoryResetResponse) { _cached_decoder_for_EuiccMemoryResetResponse = $._decode_implicit<EuiccMemoryResetResponse>(() => function (el: _Element): EuiccMemoryResetResponse {
    let resetResult!: EuiccMemoryResetResponse_resetResult;
    let resetEimResult: OPTIONAL<EuiccMemoryResetResponse_resetEimResult>;
    let resetImmediateEnableConfigResult: OPTIONAL<EuiccMemoryResetResponse_resetImmediateEnableConfigResult>;
    const callbacks: $.DecodingMap = {
        "resetResult": (_el: _Element): void => { resetResult = _decode_EuiccMemoryResetResponse_resetResult(_el); },
        "resetEimResult": (_el: _Element): void => { resetEimResult = _decode_EuiccMemoryResetResponse_resetEimResult(_el); },
        "resetImmediateEnableConfigResult": (_el: _Element): void => { resetImmediateEnableConfigResult = _decode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccMemoryResetResponse,
        _extension_additions_list_spec_for_EuiccMemoryResetResponse,
        _root_component_type_list_2_spec_for_EuiccMemoryResetResponse,
        undefined,
    );
    return new EuiccMemoryResetResponse(
        resetResult,
        resetEimResult,
        resetImmediateEnableConfigResult
    );
}); }
    return _cached_decoder_for_EuiccMemoryResetResponse(el);
}

let _cached_encoder_for_EuiccMemoryResetResponse: $.ASN1Encoder<EuiccMemoryResetResponse> | null = null;

/**
 * @summary Encodes a(n) EuiccMemoryResetResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccMemoryResetResponse, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccMemoryResetResponse (value: EuiccMemoryResetResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccMemoryResetResponse) { _cached_encoder_for_EuiccMemoryResetResponse = $._encode_implicit(_TagClass.context, 100, () => function (value: EuiccMemoryResetResponse): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EuiccMemoryResetResponse_resetResult(value.resetResult, $.BER),
            /* IF_ABSENT  */ ((value.resetEimResult === undefined) ? undefined : _encode_EuiccMemoryResetResponse_resetEimResult(value.resetEimResult, $.BER)),
            /* IF_ABSENT  */ ((value.resetImmediateEnableConfigResult === undefined) ? undefined : _encode_EuiccMemoryResetResponse_resetImmediateEnableConfigResult(value.resetImmediateEnableConfigResult, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EuiccMemoryResetResponse(value, elGetter);
}


/* eslint-enable */
