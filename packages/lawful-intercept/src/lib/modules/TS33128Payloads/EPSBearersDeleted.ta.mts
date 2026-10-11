/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
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
    /**
     * @summary `linkedEPSBearerID`.
     * @public
     * @readonly
     */
    readonly linkedEPSBearerID: OPTIONAL<EPSBearerID>;
    /**
     * @summary `ePSBearerIDs`.
     * @public
     * @readonly
     */
    readonly ePSBearerIDs: OPTIONAL<EPSBearerID[]>;
    /**
     * @summary `protocolConfigurationOptions`.
     * @public
     * @readonly
     */
    readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    /**
     * @summary `cause`.
     * @public
     * @readonly
     */
    readonly cause: OPTIONAL<EPSBearerDeletionCauseValue>;
    /**
     * @summary `deleteBearerResponse`.
     * @public
     * @readonly
     */
    readonly deleteBearerResponse: EPSDeleteBearerResponse;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        linkedEPSBearerID: OPTIONAL<EPSBearerID>,
        ePSBearerIDs: OPTIONAL<EPSBearerID[]>,
        protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>,
        cause: OPTIONAL<EPSBearerDeletionCauseValue>,
        deleteBearerResponse: EPSDeleteBearerResponse,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.linkedEPSBearerID = linkedEPSBearerID;
        this.ePSBearerIDs = ePSBearerIDs;
        this.protocolConfigurationOptions = protocolConfigurationOptions;
        this.cause = cause;
        this.deleteBearerResponse = deleteBearerResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new EPSBearersDeleted(_o.linkedEPSBearerID, _o.ePSBearerIDs, _o.protocolConfigurationOptions, _o.cause, _o.deleteBearerResponse, _o._unrecognizedExtensionsList);
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
    let _unrecognizedExtensionsList: _Element[] = [];
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
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSBearersDeleted(
        linkedEPSBearerID,
        ePSBearerIDs,
        protocolConfigurationOptions,
        cause,
        deleteBearerResponse,
        _unrecognizedExtensionsList
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
    if (!_cached_encoder_for_EPSBearersDeleted) { _cached_encoder_for_EPSBearersDeleted = function (value: EPSBearersDeleted, _elGetter: $.ASN1Encoder<EPSBearersDeleted>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.linkedEPSBearerID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.linkedEPSBearerID, $.BER);
    }
    if (value.ePSBearerIDs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<EPSBearerID>(() => _encode_EPSBearerID, $.BER), $.BER)(value.ePSBearerIDs, $.BER);
    }
    if (value.protocolConfigurationOptions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER);
    }
    if (value.cause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerDeletionCauseValue, $.BER)(value.cause, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EPSDeleteBearerResponse, $.BER)(value.deleteBearerResponse, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSBearersDeleted(value, elGetter);
}


/* eslint-enable */
