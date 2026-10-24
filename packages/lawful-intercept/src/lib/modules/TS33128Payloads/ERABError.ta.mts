/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { EPSRANCause, _decode_EPSRANCause, _encode_EPSRANCause } from "../TS33128Payloads/EPSRANCause.ta.mjs";
// export { EPSRANCause, _decode_EPSRANCause, _encode_EPSRANCause } from "../TS33128Payloads/EPSRANCause.ta.mjs";


/**
 * @summary ERABError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ERABError ::= SEQUENCE
 * {
 *     eRABID [1] EPSBearerID,
 *     cause  [2] EPSRANCause
 * }
 * ```
 * 
 * @class
 */
export
class ERABError {
    /**
     * @summary `eRABID`.
     * @description
     *
     * This element uniquely identifies a radio access bearer for a particular
     * UE, which makes the E-RAB ID unique over one S1 connection. Derived from
     * the E-RAB ID IE, see TS 36.413 [38] clause 9.2.1.2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.6.
     *
     * @public
     * @readonly
     */
    readonly eRABID: EPSBearerID;
    /**
     * @summary `cause`.
     * @description
     *
     * Indicates the cause of the E-RAB release. Derived from the Cause IE from
     * TS 36.413 [38] clause 9.2.1.3.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.6.
     *
     * @public
     * @readonly
     */
    readonly cause: EPSRANCause;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eRABID: EPSBearerID,
        cause: EPSRANCause,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eRABID = eRABID;
        this.cause = cause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ERABError
     * @description
     * 
     * This takes an `object` and converts it to a `ERABError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ERABError`.
     * @returns {ERABError}
     */
    public static _from_object (_o: { [_K in keyof (ERABError)]: (ERABError)[_K] }): ERABError {
        return new ERABError(_o.eRABID, _o.cause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ERABError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ERABError: $.ComponentSpec[] = [
    new $.ComponentSpec("eRABID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ERABError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ERABError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ERABError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ERABError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ERABError: $.ASN1Decoder<ERABError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ERABError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ERABError (el: _Element): ERABError {
    if (!_cached_decoder_for_ERABError) { _cached_decoder_for_ERABError = function (el: _Element): ERABError {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ERABError contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eRABID";
    sequence[1].name = "cause";
    let eRABID!: EPSBearerID;
    let cause!: EPSRANCause;
    eRABID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(sequence[0]);
    cause = $._decode_implicit<EPSRANCause>(() => _decode_EPSRANCause)(sequence[1]);
    return new ERABError(
        eRABID,
        cause,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ERABError(el);
}

let _cached_encoder_for_ERABError: $.ASN1Encoder<ERABError> | null = null;

/**
 * @summary Encodes a(n) ERABError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERABError, encoded as an ASN.1 Element.
 */
export
function _encode_ERABError (value: ERABError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ERABError) { _cached_encoder_for_ERABError = function (value: ERABError, elGetter: $.ASN1Encoder<ERABError>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.eRABID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSRANCause, $.BER)(value.cause, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ERABError(value, elGetter);
}


/* eslint-enable */
