/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, type ParameterName,
    ParameterName_fopState
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_FspGetParameter_parFopState_fopState, _encode_FspGetParameter_parFopState_fopState, type FspGetParameter_parFopState_fopState } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parFopState-fopState.ta.mjs";



/**
 * @summary FspGetParameter_parFopState
 * @description
 * 
 * fop-state: the FOP state on this VC. Table 3-11 names ACTIVE, RETRANSMIT
 * WITHOUT WAIT, RETRANSMIT WITH WAIT, INITIALIZING WITHOUT BC FRAME,
 * INITIALIZING WITH BC FRAME, and INITIAL. Section 3.10 does not define the
 * behavior of each state. Annex D1.3.4 calls fop-state read-only.
 * 
 * CCSDS 912.3-B-3, table 3-11 and annex D1.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parFopState ::= SEQUENCE
 *    {  parameterName     ParameterName (fopState)
 *    ,  fopState          INTEGER
 *       {  active                     (0)
 *       ,  retransmitWithoutWait      (1)
 *       ,  retransmitWithWait         (2)
 *       ,  initialisingWithoutBCFrame (3)
 *       ,  initialisingWithBCFrame    (4)
 *       ,  initial                    (5)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parFopState {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `fopState`, selecting fop-state in table 3-11. CCSDS 912.3-B-3,
     * section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `fopState`.
     * @description
     * One of the six FOP states named in table 3-11. Section 3.10 does not
     * define each state's behavior. CCSDS 912.3-B-3, table 3-11.
     * @public
     * @readonly
     */
    readonly fopState: FspGetParameter_parFopState_fopState;

    constructor (
        parameterName: ParameterName,
        fopState: FspGetParameter_parFopState_fopState
    ) {
        if (parameterName !== ParameterName_fopState) {
            throw new ASN1Error("FspGetParameter_parFopState.parameterName violates ParameterName (fopState)");
        }
        this.parameterName = parameterName;
        this.fopState = fopState;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parFopState
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parFopState`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parFopState`.
     * @returns {FspGetParameter_parFopState}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parFopState)]: (FspGetParameter_parFopState)[_K] }): FspGetParameter_parFopState {
        return new FspGetParameter_parFopState(_o.parameterName, _o.fopState);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parFopState
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parFopState: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fopState", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parFopState
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parFopState: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parFopState
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parFopState: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parFopState: $.ASN1Decoder<FspGetParameter_parFopState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parFopState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parFopState (el: _Element): FspGetParameter_parFopState {
    if (!_cached_decoder_for_FspGetParameter_parFopState) { _cached_decoder_for_FspGetParameter_parFopState = function (el: _Element): FspGetParameter_parFopState {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parFopState contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "fopState";
    let parameterName!: ParameterName;
    let fopState!: FspGetParameter_parFopState_fopState;
    parameterName = _decode_ParameterName(sequence[0]);
    fopState = _decode_FspGetParameter_parFopState_fopState(sequence[1]);
    return new FspGetParameter_parFopState(
        parameterName,
        fopState,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parFopState(el);
}

let _cached_encoder_for_FspGetParameter_parFopState: $.ASN1Encoder<FspGetParameter_parFopState> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parFopState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parFopState, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parFopState (value: FspGetParameter_parFopState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parFopState) { _cached_encoder_for_FspGetParameter_parFopState = function (value: FspGetParameter_parFopState, _elGetter: $.ASN1Encoder<FspGetParameter_parFopState>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parFopState_fopState(value.fopState, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parFopState(value, elGetter);
}


/* eslint-enable */
