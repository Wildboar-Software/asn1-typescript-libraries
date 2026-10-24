/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSBearerDeletionCauseValue, _decode_EPSBearerDeletionCauseValue, _encode_EPSBearerDeletionCauseValue } from "../TS33128Payloads/EPSBearerDeletionCauseValue.ta.mjs";
// export { EPSBearerDeletionCauseValue, _decode_EPSBearerDeletionCauseValue, _encode_EPSBearerDeletionCauseValue } from "../TS33128Payloads/EPSBearerDeletionCauseValue.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { EPSDeleteBearerContext, _decode_EPSDeleteBearerContext, _encode_EPSDeleteBearerContext } from "../TS33128Payloads/EPSDeleteBearerContext.ta.mjs";
// export { EPSDeleteBearerContext, _decode_EPSDeleteBearerContext, _encode_EPSDeleteBearerContext } from "../TS33128Payloads/EPSDeleteBearerContext.ta.mjs";
import { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
// export { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";


/**
 * @summary EPSDeleteBearerResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSDeleteBearerResponse ::= SEQUENCE
 * {
 *     cause                        [1] EPSBearerDeletionCauseValue,
 *     linkedEPSBearerID            [2] EPSBearerID OPTIONAL,
 *     bearerContexts               [3] SEQUENCE OF EPSDeleteBearerContext OPTIONAL,
 *     protocolConfigurationOptions [4] PDNProtocolConfigurationOptions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSDeleteBearerResponse {
    /**
     * @summary `cause`.
     * @description
     *
     * Indicates whether the bearers requested for deletion were successfully
     * deleted (see TS 29.274 [87] clause 7.2.10).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly cause: EPSBearerDeletionCauseValue;
    /**
     * @summary `linkedEPSBearerID`.
     * @description
     *
     * Shall include the EBI for the default bearer associated with the PDN
     * being disconnected if all bearers belonging to a PDN connection are being
     * released (see TS 29.274 [87] clause 7.2.10).
     *
     * 3GPP TS 33.128, clause 6.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly linkedEPSBearerID: OPTIONAL<EPSBearerID>;
    /**
     * @summary `bearerContexts`.
     * @description
     *
     * Shall include a list of the EPS Bearer Contexts requested for deletion
     * along with details on whether they were successfully deleted. Shall be
     * included if only some of the EPS Bearers belonging to a PDN Connection
     * are being released (see TS 29.274 [87] clause 7.2.10). See table
     * 6.3.3.2.3-5.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly bearerContexts: OPTIONAL<EPSDeleteBearerContext[]>;
    /**
     * @summary `protocolConfigurationOptions`.
     * @description
     *
     * Shall be present if the Delete Bearer Request or Response reported (see
     * TS 29.274 [87] clauses 7.2.9) contains the Protocol Configuration,
     * Additional Protocol Configuration Options or extended Protocol
     * Configuration Options IE. See table 6.3.3.2.2-4.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cause: EPSBearerDeletionCauseValue,
        linkedEPSBearerID?: OPTIONAL<EPSBearerID>,
        bearerContexts?: OPTIONAL<EPSDeleteBearerContext[]>,
        protocolConfigurationOptions?: OPTIONAL<PDNProtocolConfigurationOptions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cause = cause;
        this.linkedEPSBearerID = linkedEPSBearerID;
        this.bearerContexts = bearerContexts;
        this.protocolConfigurationOptions = protocolConfigurationOptions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSDeleteBearerResponse
     * @description
     * 
     * This takes an `object` and converts it to a `EPSDeleteBearerResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSDeleteBearerResponse`.
     * @returns {EPSDeleteBearerResponse}
     */
    public static _from_object (_o: { [_K in keyof (EPSDeleteBearerResponse)]: (EPSDeleteBearerResponse)[_K] }): EPSDeleteBearerResponse {
        return new EPSDeleteBearerResponse(_o.cause, _o.linkedEPSBearerID, _o.bearerContexts, _o.protocolConfigurationOptions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPSDeleteBearerResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSDeleteBearerResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("linkedEPSBearerID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bearerContexts", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("protocolConfigurationOptions", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EPSDeleteBearerResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSDeleteBearerResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSDeleteBearerResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSDeleteBearerResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSDeleteBearerResponse: $.ASN1Decoder<EPSDeleteBearerResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSDeleteBearerResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSDeleteBearerResponse (el: _Element): EPSDeleteBearerResponse {
    if (!_cached_decoder_for_EPSDeleteBearerResponse) { _cached_decoder_for_EPSDeleteBearerResponse = function (el: _Element): EPSDeleteBearerResponse {
    let cause!: EPSBearerDeletionCauseValue;
    let linkedEPSBearerID: OPTIONAL<EPSBearerID>;
    let bearerContexts: OPTIONAL<EPSDeleteBearerContext[]>;
    let protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EPSBearerDeletionCauseValue>(() => _decode_EPSBearerDeletionCauseValue)(_el); },
        "linkedEPSBearerID": (_el: _Element): void => { linkedEPSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "bearerContexts": (_el: _Element): void => { bearerContexts = $._decode_implicit<EPSDeleteBearerContext[]>(() => $._decodeSequenceOf<EPSDeleteBearerContext>(() => _decode_EPSDeleteBearerContext))(_el); },
        "protocolConfigurationOptions": (_el: _Element): void => { protocolConfigurationOptions = $._decode_implicit<PDNProtocolConfigurationOptions>(() => _decode_PDNProtocolConfigurationOptions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSDeleteBearerResponse,
        _extension_additions_list_spec_for_EPSDeleteBearerResponse,
        _root_component_type_list_2_spec_for_EPSDeleteBearerResponse,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSDeleteBearerResponse(
        cause,
        linkedEPSBearerID,
        bearerContexts,
        protocolConfigurationOptions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSDeleteBearerResponse(el);
}

let _cached_encoder_for_EPSDeleteBearerResponse: $.ASN1Encoder<EPSDeleteBearerResponse> | null = null;

/**
 * @summary Encodes a(n) EPSDeleteBearerResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSDeleteBearerResponse, encoded as an ASN.1 Element.
 */
export
function _encode_EPSDeleteBearerResponse (value: EPSDeleteBearerResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSDeleteBearerResponse) { _cached_encoder_for_EPSDeleteBearerResponse = function (value: EPSDeleteBearerResponse, elGetter: $.ASN1Encoder<EPSDeleteBearerResponse>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerDeletionCauseValue, $.BER)(value.cause, $.BER);
    if (value.linkedEPSBearerID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSBearerID, $.BER)(value.linkedEPSBearerID, $.BER);
    }
    if (value.bearerContexts !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<EPSDeleteBearerContext>(() => _encode_EPSDeleteBearerContext, $.BER), $.BER)(value.bearerContexts, $.BER);
    }
    if (value.protocolConfigurationOptions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSDeleteBearerResponse(value, elGetter);
}


/* eslint-enable */
